# MR_OTTER — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

## 文件一览

| 文件 | 内容 | 条数 |
|---|---|---|
| prompts_all.jsonl | 全部去重提示词（**主入口**） | 304 |
| prompts_image.jsonl | image | 96 |
| prompts_video.jsonl | video | 208 |
| prompts_scenes.jsonl | scenes | 208 |
| assets_full.jsonl | 全量资产 | 725 |
| brief.txt | 官方简报 | 有 |

## 字段

`project / category / folder / result_type / model / prompt / prompt_length / source_id`

## 模型分布

seedance_2_5×208、gpt_image_2×93、hf_mult_motion_control×2、hf_mult_replace_object×1
