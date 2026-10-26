'use strict';
/* Higgsfield community projects full prompt collector (raw JSON dumper).
 * For each project: SSR page -> uuid scan -> folder info validation ->
 * paginated items/v2 fetch (Buffer-based, cursor literal) -> merge -> write {arr,FN,folders,others}.
 */
const https = require('https');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const OUT_DIR = 'D:/higgsfield.ai画布/02_完整提示词数据包';
const API = 'https://fnf-api-gw.higgsfield.ai';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';
const UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/gi;

const agent = new https.Agent({ keepAlive: true, maxSockets: 8 });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function fetchRaw(url, opts = {}) {
  const headers = opts.headers || {};
  const timeout = opts.timeout || 45000;
  const maxRetries = opts.maxRetries == null ? 5 : opts.maxRetries;
  return new Promise((resolve, reject) => {
    const attempt = (n) => {
      let u;
      try { u = new URL(url); } catch (e) { return reject(e); }
      const req = https.request(u, {
        method: 'GET',
        agent,
        headers: {
          'User-Agent': UA,
          Accept: '*/*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          ...headers,
        },
        timeout,
      }, (res) => {
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          let buf = Buffer.concat(chunks); // Buffer-concat, never string +=
          const enc = String(res.headers['content-encoding'] || '').toLowerCase();
          if (enc === 'gzip' || enc === 'deflate' || enc === 'br') {
            try {
              buf = enc === 'gzip' ? zlib.gunzipSync(buf) : enc === 'deflate' ? zlib.inflateSync(buf) : zlib.brotliDecompressSync(buf);
            } catch (e) {
              if (n < maxRetries) { setTimeout(() => attempt(n + 1), 2000); return; }
              return reject(new Error('decompress failed: ' + e.message + ' url=' + url));
            }
          }
          const status = res.statusCode || 0;
          if (status === 429 || status >= 500) {
            if (n < maxRetries) {
              console.error(`    retry#${n + 1} status=${status} ${url.slice(0, 130)}`);
              setTimeout(() => attempt(n + 1), 2000);
              return;
            }
            return resolve({ status, text: '', gaveUp: true });
          }
          resolve({ status, text: buf.toString('utf8') });
        });
      });
      req.on('timeout', () => req.destroy(new Error('timeout')));
      req.on('error', (e) => {
        if (n < maxRetries) { setTimeout(() => attempt(n + 1), 2000); return; }
        reject(e);
      });
      req.end();
    };
    attempt(0);
  });
}

function findValue(obj, keyName, pred, depth = 0) {
  if (depth > 5 || obj == null) return undefined;
  if (Array.isArray(obj)) {
    for (const v of obj) { const r = findValue(v, keyName, pred, depth + 1); if (r !== undefined) return r; }
    return undefined;
  }
  if (typeof obj !== 'object') return undefined;
  for (const k of Object.keys(obj)) {
    if (k === keyName && pred(obj[k])) return obj[k];
  }
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (v && typeof v === 'object') {
      const r = findValue(v, keyName, pred, depth + 1);
      if (r !== undefined) return r;
    }
  }
  return undefined;
}
const findName = (j) => findValue(j, 'name', (v) => typeof v === 'string' && v.length > 0);
const findCount = (j) => findValue(j, 'count', (v) => typeof v === 'number' && Number.isFinite(v));

async function getFolderInfo(uuid) {
  const url = `${API}/fnf/folders/${uuid}/info?size=1`;
  try {
    const r = await fetchRaw(url, { headers: { Accept: 'application/json', Referer: 'https://higgsfield.ai/' } });
    if (r.status !== 200) return { uuid, folder: false, status: r.status };
    let j = null;
    try { j = JSON.parse(r.text); } catch (e) { return { uuid, folder: false, status: r.status, parseError: true }; }
    const name = findName(j) || uuid.slice(0, 8);
    const count = findCount(j);
    return { uuid, folder: true, status: 200, id: uuid, name, count: count == null ? null : count };
  } catch (e) {
    return { uuid, folder: false, status: 0, error: String((e && e.message) || e) };
  }
}

async function pool(items, worker, concurrency = 8) {
  const results = [];
  let i = 0;
  await Promise.all(Array.from({ length: Math.max(1, Math.min(concurrency, items.length)) }, async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) return;
      results[idx] = await worker(items[idx], idx);
    }
  }));
  return results;
}

function extractUuids(text) {
  const set = new Set();
  for (const s of text.match(UUID_RE) || []) set.add(s.toLowerCase());
  return [...set];
}

// Extract the TOP-LEVEL "cursor" numeric literal verbatim (avoid float precision loss).
function extractTopLevelCursor(raw) {
  const re = /"cursor"\s*:\s*(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)/g;
  let m;
  while ((m = re.exec(raw))) {
    let depth = 0, inStr = false, esc = false;
    for (let i = 0; i < m.index; i++) {
      const ch = raw[i];
      if (inStr) {
        if (esc) esc = false;
        else if (ch === '\\') esc = true;
        else if (ch === '"') inStr = false;
      } else {
        if (ch === '"') inStr = true;
        else if (ch === '{' || ch === '[') depth++;
        else if (ch === '}' || ch === ']') depth--;
      }
    }
    if (depth === 1) return m[1]; // key of the topmost object
  }
  return null;
}

function pickList(j) {
  if (Array.isArray(j)) return j;
  if (!j || typeof j !== 'object') return [];
  for (const k of ['items', 'jobs', 'entries', 'results', 'data', 'list', 'rows']) {
    const v = j[k];
    if (Array.isArray(v) && (!v.length || (v[0] && typeof v[0] === 'object'))) return v;
  }
  for (const k of Object.keys(j)) {
    const v = j[k];
    if (Array.isArray(v) && v.length && v[0] && typeof v[0] === 'object' && 'type' in v[0]) return v;
  }
  return [];
}

async function fetchFolderItems(fid, label) {
  const jobs = [];
  const others = {};
  let cursor = null;
  const seen = new Set();
  let pages = 0;
  while (pages < 150) {
    let url = `${API}/fnf/folders/${fid}/items/v2?include_subfolders=true&size=100`;
    if (cursor) url += '&cursor=' + encodeURIComponent(cursor);
    const r = await fetchRaw(url, { headers: { Accept: 'application/json', Referer: 'https://higgsfield.ai/' } });
    if (r.status !== 200 || !r.text) {
      console.error(`  [${label}] page ${pages + 1} bad status ${r.status}, stop`);
      break;
    }
    let j = null;
    try { j = JSON.parse(r.text); } catch (e) {
      console.error(`  [${label}] page ${pages + 1} JSON parse failed: ${e.message}`);
      break;
    }
    const list = pickList(j);
    let nJobs = 0;
    for (const it of list) {
      if (it && it.type === 'job' && it.job && it.job.id) {
        const jj = it.job;
        jobs.push({
          id: jj.id,
          folder: jj.folder_id || null,
          model: jj.job_set_type || null,
          created_at: jj.created_at || null,
          prompt: (jj.params && jj.params.prompt) || null,
          result_type: (jj.results && jj.results.raw && jj.results.raw.type) || null,
          result_url: (jj.results && jj.results.raw && jj.results.raw.url) || null,
        });
        nJobs++;
      } else {
        const t = (it && typeof it === 'object' && it.type) || 'unknown';
        others[t] = (others[t] || 0) + 1;
      }
    }
    pages++;
    let next = null;
    if (j && j.cursor != null && j.cursor !== '') {
      next = typeof j.cursor === 'string' ? j.cursor : extractTopLevelCursor(r.text);
    }
    console.error(`  [${label}] page ${pages}: ${list.length} entries, ${nJobs} jobs, nextCursor=${next ? 'yes' : 'no'}`);
    if (!next || seen.has(next)) break;
    seen.add(next);
    cursor = next;
  }
  return { jobs, others, pages };
}

function extractProjectLinks(html, filter) {
  const out = new Set();
  let m;
  const re1 = /href="([^"]*\/projects\/[^"#?]*?)"/g;
  while ((m = re1.exec(html))) {
    let h = m[1];
    if (h.startsWith('//')) h = 'https:' + h;
    else if (h.startsWith('/')) h = 'https://higgsfield.ai' + h;
    if (!/^https:\/\/higgsfield\.ai\//.test(h)) continue;
    if (filter && !filter.test(h)) continue;
    out.add(h);
  }
  const re2 = /([A-Za-z0-9_.@-]+)\/projects\/([A-Za-z0-9_.@%-]+)/g;
  while ((m = re2.exec(html))) {
    const h = `https://higgsfield.ai/zh/@${m[1].replace(/^@/, '')}/projects/${m[2]}`;
    if (filter && !filter.test(h)) continue;
    out.add(h);
  }
  return [...out];
}

function writeOut(name, obj) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const p = path.join(OUT_DIR, name);
  fs.writeFileSync(p, JSON.stringify(obj, null, 0), 'utf8');
  const sz = fs.statSync(p).size;
  return { p, sz };
}

async function collectProject(spec) {
  const t0 = Date.now();
  console.log(`\n=== [${spec.key}] ${spec.title} ===`);
  const foldersRaw = [];
  let usedUrl = null;

  const scanFolders = async (uuidList, nameFilter) => {
    if (!uuidList.length) return [];
    const infos = await pool(uuidList, (u) => getFolderInfo(u), 8);
    let f = infos.filter((x) => x.folder);
    if (nameFilter) f = f.filter((x) => x.name && nameFilter.test(x.name));
    return f;
  };

  const tryPage = async (pageUrl, kind) => {
    const r = await fetchRaw(pageUrl, {
      headers: { Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', Referer: 'https://higgsfield.ai/' },
    });
    console.log(`  page ${pageUrl}\n    -> status ${r.status}, ${r.text ? r.text.length : 0} bytes`);
    if (r.status !== 200 || !r.text) return null;
    const html = r.text;
    // uuid candidates: SSR html first, plus any uuid embedded in the URL itself
    const cand = extractUuids(html);
    for (const u of extractUuids(pageUrl)) if (!cand.includes(u)) cand.unshift(u);
    console.log(`    uuid candidates: ${cand.length}`);
    let found = await scanFolders(cand, kind === 'profile' ? spec.nameFilter : null);
    if (found.length) return { found, usedUrl: pageUrl + (kind === 'profile' ? ' (uuid-scan+name-filter)' : '') };
    if (spec.linkFilter) {
      const links = extractProjectLinks(html, spec.linkFilter);
      console.log(`    matching project links: ${links.length}${links.length ? ' -> ' + links.slice(0, 6).join(' , ') : ''}`);
      for (const link of links.slice(0, 8)) {
        const r2 = await fetchRaw(link, { headers: { Accept: 'text/html' } });
        if (r2.status !== 200 || !r2.text) { console.log(`      link ${link} -> ${r2.status}, skip`); continue; }
        console.log(`      link ${link} -> ${r2.status}, uuids ${extractUuids(r2.text).length}`);
        const f2 = await scanFolders(extractUuids(r2.text), null);
        if (f2.length) return { found: f2, usedUrl: link };
      }
    }
    return null;
  };

  for (const c of spec.candidates) {
    try {
      const res = await tryPage(c.url, c.kind || 'project');
      if (res) { foldersRaw.push(...res.found); usedUrl = res.usedUrl; break; }
    } catch (e) {
      console.log(`  candidate failed: ${(e && e.message) || e}`);
    }
  }

  if (!foldersRaw.length) {
    const { p, sz } = writeOut(spec.out, { arr: [], FN: {}, folders: [], others: {} });
    console.log(`  NO FOLDER FOUND -> wrote empty ${p} (${sz} bytes)`);
    return { key: spec.key, title: spec.title, usedUrl: usedUrl || null, folders: [], jobs: 0, withPrompt: 0, others: {}, pages: 0, outFile: p, outSize: sz, seconds: Math.round((Date.now() - t0) / 1000), note: 'no folder found' };
  }

  const fmap = new Map();
  for (const f of foldersRaw) if (!fmap.has(f.id)) fmap.set(f.id, f);
  const folderList = [...fmap.values()];
  console.log(`  folders (${folderList.length}):`);
  for (const f of folderList) console.log(`    - ${f.name} : count=${f.count} id=${f.id}`);

  // full pull + merge by job id
  const byId = new Map();
  const others = {};
  let pagesTotal = 0;
  let rawTotal = 0;
  for (const f of folderList) {
    const { jobs, others: o, pages } = await fetchFolderItems(f.id, f.name);
    pagesTotal += pages;
    rawTotal += jobs.length;
    for (const k of Object.keys(o)) others[k] = (others[k] || 0) + o[k];
    for (const j2 of jobs) if (!byId.has(j2.id)) byId.set(j2.id, j2);
    console.log(`  [${f.name}] pulled ${jobs.length} job entries, unique so far ${byId.size}`);
  }

  // unknown folder names -> FN mapping
  const known = new Set(folderList.map((f) => f.id));
  const unknownIds = [...new Set([...byId.values()].map((x) => x.folder).filter((x) => x && !known.has(x)))];
  const FN = {};
  if (unknownIds.length) {
    console.log(`  unknown folder ids in jobs: ${unknownIds.length}, resolving names...`);
    const infos = await pool(unknownIds, (u) => getFolderInfo(u), 8);
    for (const inf of infos) {
      if (inf.folder) FN[inf.uuid] = inf.name;
      else if (inf.status === 404) FN[inf.uuid] = '已删除夹';
      else FN[inf.uuid] = `未知(status ${inf.status})`;
    }
  }

  const arr = [...byId.values()];
  const withPrompt = arr.filter((x) => x.prompt != null && String(x.prompt).length > 0).length;
  const { p, sz } = writeOut(spec.out, { arr, FN, folders: folderList, others });
  console.log(`  WROTE ${p} (${sz} bytes); jobs=${arr.length} (raw ${rawTotal}), withPrompt=${withPrompt}`);

  return {
    key: spec.key,
    title: spec.title,
    usedUrl,
    folders: folderList.map((f) => ({ name: f.name, count: f.count, id: f.id })),
    rawEntries: rawTotal,
    jobs: arr.length,
    withPrompt,
    others,
    pages: pagesTotal,
    unknownFolders: Object.keys(FN).length,
    outFile: p,
    outSize: sz,
    seconds: Math.round((Date.now() - t0) / 1000),
  };
}

const PROJECTS = [
  {
    key: 'tc', title: 'The Companion', out: '_tc_all.json',
    candidates: [{ url: 'https://higgsfield.ai/zh/@grabho/projects/the-companion' }],
  },
  {
    key: 'br', title: 'BEYOND THE RIFT A', out: '_br_all.json',
    candidates: [{ url: 'https://higgsfield.ai/zh/@khaledalali/projects/beyond-the-rift-a' }],
  },
  {
    key: 'co', title: 'THE COAT', out: '_co_all.json',
    candidates: [{ url: 'https://higgsfield.ai/zh/@davidacfilm/projects/the-coat' }],
  },
  {
    key: 'se', title: "I'll Sleep Early. Promise.", out: '_se_all.json',
    candidates: [
      { url: 'https://higgsfield.ai/zh/@synthwavejuice1602/projects/@id__ce38bfb3-f4c6-4315-b1e7-befc65369c95' },
      { url: 'https://higgsfield.ai/zh/@synthwavejuice1602/projects/i-ll-sleep-early-promise' },
      { url: 'https://higgsfield.ai/zh/@synthwavejuice1602', kind: 'profile' },
    ],
    linkFilter: /sleep|early|promise|ce38bfb3/i,
    nameFilter: /sleep|early|promise/i,
  },
  {
    key: 'da', title: 'DAGON', out: '_da_all.json',
    candidates: [{ url: 'https://higgsfield.ai/zh/@jacob_everett/projects/dagon' }],
  },
];

(async () => {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const summaries = [];
  for (const spec of PROJECTS) {
    try {
      summaries.push(await collectProject(spec));
    } catch (e) {
      console.log(`!!! project ${spec.key} failed: ${(e && e.stack) || e}`);
      summaries.push({ key: spec.key, title: spec.title, error: String((e && e.message) || e) });
    }
  }
  console.log('\nALL_DONE ' + JSON.stringify(summaries));
})().catch((e) => { console.error('FATAL', e); process.exit(1); });
