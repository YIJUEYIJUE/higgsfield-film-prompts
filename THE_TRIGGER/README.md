# THE_TRIGGER — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 本项目全部去重提示词（每行一个 JSON，逐行读完即全部读完）。
> 已按 图片/视频/角色/场景/道具/分镜 拆分分类文件；全量资产、官方 brief、官方 Skill 同目录归档。

## 文件一览

| 文件 | 内容 | 条数/状态 |
|---|---|---|
| prompts_all.jsonl | 全部去重提示词（**主入口**） | 773 |
| prompts_image.jsonl | 图片提示词 | 259 |
| prompts_video.jsonl | 视频提示词 | 514 |
| prompts_characters.jsonl | 角色类提示词 | 79 |
| prompts_locations.jsonl | 场景类提示词 | 121 |
| prompts_props.jsonl | 道具类提示词 | 36 |
| prompts_scenes.jsonl | 分镜/镜头类提示词 | 463 |
| assets_full.jsonl | 全量资产（含重跑批次） | 35MB |
| brief.txt | 官方项目简报正文 | 有 |
| official_skills/ | 官方 Skill 附件原件 | 有 |

## 字段

`project / category(characters|locations|props|scenes|assets) / folder(工程内原目录) / result_type(image|video) / model / prompt / prompt_length / source_id`

## 模型分布

seedance_2_5×484、seedream_v5_pro×149、soul_cinematic×72、text2image_soul_v2×32、seedance_2_0×27、gpt_image_2×3、soul_cinema_studio×3、flux_2×1、cinematic_studio_3_0×1、kling3_0×1
