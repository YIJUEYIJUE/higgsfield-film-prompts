# CANE_MAN — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@noah_01（社区项目 · via_link 公开 · AI Film Festival 参赛）
- **链接**：https://higgsfield.ai/zh/@noah_01/projects/cane-man
- **捕获**：2026-10-27 · 赞 157 · 播放 5,486

## 对账

官方2,070 = 2,046 job（2,045带prompt）+ 23 audio_input（+去重差额）；赞低量大反差项目；零丢失 去重后 **1365** 条唯一提示词。

| 文件 | 条数 |
|---|---|
| prompts_all.jsonl | 1365 |
| prompts_image.jsonl | 484（唯一） |
| prompts_video.jsonl | 1562（唯一） |
| assets_full.jsonl | 2046 |

字段：`project / category / folder / result_type / model / prompt / prompt_length / source_id`

模型分布：seedance_2_5 1561 · seedream_v5_pro 474 · nano_banana_2 5 · gpt_image_2_5 3 · gpt_image_2 2 · cinematic_video_editor 1
