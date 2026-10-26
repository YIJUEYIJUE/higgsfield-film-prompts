# THE_LAST_RIDE — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@santanando（社区项目 · via_link 公开 · AI Film Festival 参赛）
- **链接**：https://higgsfield.ai/zh/@santanando/projects/the-last-ride-festival
- **捕获**：2026-10-27 · 赞 150 · 播放 10,305

## 对账

官方639/643双夹视图 = 611 job（568带prompt）+ 46 audio_input 音乐件；bytedance_video_upscale 43 新模型；零丢失 去重后 **228** 条唯一提示词。

| 文件 | 条数 |
|---|---|
| prompts_all.jsonl | 228 |
| prompts_image.jsonl | 195（唯一） |
| prompts_video.jsonl | 416（唯一） |
| assets_full.jsonl | 611 |

字段：`project / category / folder / result_type / model / prompt / prompt_length / source_id`

模型分布：seedance_2_5 337 · seedream_v5_pro 172 · bytedance_video_upscale 43 · seedance_2_0 35 · seedream_v5_lite 14 · gpt_image_2_5 7
