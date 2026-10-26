- **源链接**：https://higgsfield.ai/zh/@higgsfield.soul/projects/dusk

# DUSK — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 本项目全部去重提示词（每行一个 JSON，逐行读完即全部读完）。
> 已按 图片/视频/角色/场景/道具/分镜 拆分分类文件；全量资产、官方 brief、官方 Skill 同目录归档。

## 文件一览

| 文件 | 内容 | 条数/状态 |
|---|---|---|
| prompts_all.jsonl | 全部去重提示词（**主入口**） | 220 |
| prompts_image.jsonl | 图片提示词 | 62 |
| prompts_video.jsonl | 视频提示词 | 158 |
| assets_full.jsonl | 全量资产（含重跑批次） | 7MB |
| brief.txt | 官方项目简报正文 | 有 |
| official_skills/ | 官方 Skill 附件原件 | 无 |

## 字段

`project / category(characters|locations|props|scenes|assets) / folder(工程内原目录) / result_type(image|video) / model / prompt / prompt_length / source_id`

## 模型分布

seedance_2_5×79、seedance_2_0×79、text2image_soul_v2×17、gpt_image_2×13、seedream_v5_pro×13、nano_banana_2×9、soul_cinematic×7、seedream_v4_5×2、cinematic_studio_3_0×1
