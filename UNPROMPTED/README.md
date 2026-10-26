# UNPROMPTED — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@shestak（社区项目 · via_link 公开 · AI Film Festival 参赛）
- **链接**：https://higgsfield.ai/zh/@shestak/projects/unprompted
- **捕获**：2026-10-27 · 赞 202 · 播放 8,563

## 对账

官方1,421/1,423双夹视图 = 1,417 job（95条图生视频类无prompt）+ 6 media_input；零丢失 去重后 **475** 条唯一提示词。

| 文件 | 条数 |
|---|---|
| prompts_all.jsonl | 475 |
| prompts_image.jsonl | 1289（唯一） |
| prompts_video.jsonl | 128（唯一） |
| assets_full.jsonl | 1417 |

字段：`project / category / folder / result_type / model / prompt / prompt_length / source_id`

模型分布：seedream_v5_pro 742 · soul_cinematic 320 · cinematic_studio_video_4_0 128 · gpt_image_2_5 81 · cinematic_studio_soul_location 75 · gpt_image_2 57
