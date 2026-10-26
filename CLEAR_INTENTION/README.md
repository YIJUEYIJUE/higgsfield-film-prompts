# CLEAR_INTENTION — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@cyr4x（社区项目 · via_link 公开 · AI Film Festival 参赛）
- **源链接**：https://higgsfield.ai/zh/@cyr4x/projects/ai-film-festival-clear-intention
- **捕获**：2026-10-27 · 赞 83 · 播放 4,652

## 对账

官方823（API夹名"Short Film: Clear Intentions"）= 821 job（791带prompt）+ 2 audio_input；零丢失 去重后 **464** 条唯一提示词。

| 文件 | 条数 |
|---|---|
| prompts_all.jsonl | 464 |
| prompts_image.jsonl | 459（唯一） |
| prompts_video.jsonl | 362（唯一） |
| assets_full.jsonl | 821 |

字段：`project / category / folder / result_type / model / prompt / prompt_length / source_id`

模型分布：seedance_2_5 354 · text2image_soul_v2 268 · nano_banana_2 76 · soul_cinematic 34 · cinematic_studio_soul_location 23 · gpt_image_2 17
