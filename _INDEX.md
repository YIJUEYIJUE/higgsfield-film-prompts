# 学习的影片全部提示词 · 主索引

> **AI 从这里开始**：23 个 Higgsfield 影片项目的全部提示词完整包（共 21,018 条去重提示词）。
> 每个项目文件夹 = `prompts_all.jsonl`（全部去重提示词，主入口）+ 分类文件（图片/视频/角色/场景/道具/分镜）+ `brief.txt`（官方简报）+ `official_skills/`（官方 Skill 原件，仅 4 项目有）+ `assets_full.jsonl`（全量含重跑，小项目）。
> 字段统一：`project / category / folder / result_type / model / prompt / prompt_length / source_id`。

| 项目 | 去重提示词 | 分类文件数 | 附加内容 |
|---|---|---|---|
| [4K_BLOCKBUSTER_BREAKDOWN](./4K_BLOCKBUSTER_BREAKDOWN/) | 1076 | 6 | brief |
| [ADILIADA](./ADILIADA/) | 1698 | 4 | brief |
| [ANIME_PRODUCTION](./ANIME_PRODUCTION/) | 136 | 5 | brief+全量 |
| [CULLY_HILL_BOYS](./CULLY_HILL_BOYS/) | 3174 | 6 | brief |
| [DETOUR](./DETOUR/) | 2173 | 6 | brief+全量 |
| [DUSK](./DUSK/) | 220 | 2 | brief+全量 |
| [HELL_GRIND](./HELL_GRIND/) | 1861 | 3 | brief+skill |
| [HIGGSFIELD_ACADEMY_PROJECT](./HIGGSFIELD_ACADEMY_PROJECT/) | 42 | 2 | brief+全量 |
| [HUNTRESS_TALE](./HUNTRESS_TALE/) | 75 | 5 | brief+全量 |
| [IF_YOU_STOP_LOVING_ME](./IF_YOU_STOP_LOVING_ME/) | 749 | 6 | brief+全量 |
| [KOK_BORU](./KOK_BORU/) | 218 | 2 | brief+全量 |
| [KOK_BORU_FILM](./KOK_BORU_FILM/) | 2436 | 3 | brief |
| [NALA_HEADS_DROP](./NALA_HEADS_DROP/) | 151 | 3 | brief+全量 |
| [ONEIRIC](./ONEIRIC/) | 3247 | 6 | brief+skill |
| [ONE_MORE_TIME](./ONE_MORE_TIME/) | 91 | 2 | 全量 |
| [PASSPORT_RUSH](./PASSPORT_RUSH/) | 1193 | 3 | brief |
| [RED_FLAG](./RED_FLAG/) | 619 | 3 | brief+skill+全量 |
| [SOUL_CAROUSELS](./SOUL_CAROUSELS/) | 145 | 1 | brief+全量 |
| [THE_NEW_GIRL](./THE_NEW_GIRL/) | 132 | 3 | brief+全量 |
| [THE_TRIGGER](./THE_TRIGGER/) | 773 | 6 | brief+skill+全量 |
| [TOP_UP_AD](./TOP_UP_AD/) | 74 | 4 | brief+全量 |
| [TV_4K](./TV_4K/) | 254 | 6 | brief+全量 |
| [ZEPHYR](./ZEPHYR/) | 481 | 2 | brief+全量 |

## 使用法

1. 读全部 → `prompts_all.jsonl` 逐行
2. 只要视频/图片 → `prompts_video.jsonl` / `prompts_image.jsonl`
3. 只要角色/场景/道具/分镜 → 对应 `prompts_*.jsonl`
4. 官方简报 → `brief.txt`；官方 Skill → `official_skills/`
