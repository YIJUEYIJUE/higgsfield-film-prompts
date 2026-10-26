- **源链接**：https://higgsfield.ai/zh/@higgsfield.studio/projects/kok-boru-film

# KOK_BORU_FILM — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 本项目全部去重提示词（每行一个 JSON，逐行读完即全部读完）。
> 已按 图片/视频/角色/场景/道具/分镜 拆分分类文件；全量资产、官方 brief、官方 Skill 同目录归档。

## 文件一览

| 文件 | 内容 | 条数/状态 |
|---|---|---|
| prompts_all.jsonl | 全部去重提示词（**主入口**） | 2436 |
| prompts_image.jsonl | 图片提示词 | 46 |
| prompts_video.jsonl | 视频提示词 | 2390 |
| prompts_scenes.jsonl | 分镜/镜头类提示词 | 2400 |
| assets_full.jsonl | 全量资产（含重跑批次） | 超限未含（本机02区有217MB完整版） |
| brief.txt | 官方项目简报正文 | 有 |
| official_skills/ | 官方 Skill 附件原件 | 无 |

## 字段

`project / category(characters|locations|props|scenes|assets) / folder(工程内原目录) / result_type(image|video) / model / prompt / prompt_length / source_id`

## 模型分布

seedance_2_0×2382、nano_banana_flash×16、seedream_v5_pro×15、seedance_2_5×8、text2image_soul_v2×5、imagegen_2_0×3、seedream_v4_5×3、nano_banana_2×3、gpt_image_2×1
