# OTTO — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@hasbroki（社区项目 · via_link 公开 · AI Film Festival 参赛）
- **源链接**：https://higgsfield.ai/zh/@hasbroki/projects/otto
- **捕获**：2026-10-27 · 赞 120 · 播放 4,138

## 对账

官方382 = 377 job（121带prompt，256条源站即无prompt字段如实保留null）+ 5上传件；零丢失 去重后 **84** 条唯一提示词。

| 文件 | 条数 |
|---|---|
| prompts_all.jsonl | 84 |
| prompts_image.jsonl | 296（唯一） |
| prompts_video.jsonl | 81（唯一） |
| assets_full.jsonl | 377 |

字段：`project / category / folder / result_type / model / prompt / prompt_length / source_id`

模型分布：cinematic_studio_soul_location 250 · seedance_2_5 77 · soul_cinematic 32 · gpt_image_2_5 7 · gpt_image_2 4 · cinematic_studio_soul_cast 3
