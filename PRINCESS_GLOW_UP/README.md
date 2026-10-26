# PRINCESS_GLOW_UP — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@ailaa（社区项目 · via_link 公开）
- **链接**：https://higgsfield.ai/zh/@ailaa/projects/princess-glow-up
- **题材**：精英学院素颜奖学金女生的"变身"短剧系列（5 集 + 万圣节特辑，K-drama pastel 视觉）
- **捕获**：2026-10-27

## 文件一览

| 文件 | 内容 | 条数 |
|---|---|---|
| prompts_all.jsonl | 全部去重提示词（**主入口**） | 451 |
| prompts_image.jsonl | image | 94 |
| prompts_video.jsonl | video | 357 |
| by_category/prompts_scenes.jsonl | 分镜场景 | 227 |
| by_category/prompts_assets.jsonl | 参考生成（无前缀标注） | 213 |
| by_category/prompts_characters.jsonl | CHARACTER SHEET 角色表 | 9 |
| by_category/prompts_locations.jsonl | LOCATION PLATE 场景板 | 2 |
| assets_full.jsonl | 全量资产（2298 job 全记录，含重复生成） | 2298 |
| brief.txt | 官方简报全文（Logline / Style Prefix / Visual Constraints / 后期） | 有 |

## 字段

`project / category / folder / result_type / model / prompt / prompt_length / source_id`

## 对账

官方面板：生成记录 **2 298**（文件夹计数总和 2310 = 2298 job + 8 个 video_input 上传参考素材 + 4 条跨夹引用重复计数）。
**2298 job 全部捕获，零丢失**；其中 2291 带提示词（7 条为服务器端 prompt=null）。去重后 **451** 条唯一提示词。

## 文件夹结构

`ROOT 主创作区 1994` · 1-5 episode（40/15/43/19/90）· EP1 Vertical 9x16 tracking prompt 14 · assets 83 · 2 个剪辑夹（video_input）

## 模型分布（全量 2298）

seedance_2_5 2109（93.5%）· text2image_soul_v2 41 · gpt_image_2 38 · soul_cinematic 22 · nano_banana_2 21 · seedream_v5_pro 14 · soul_cinema_1_5 5 · cinematic_studio_video_4_0 3

## 备注

- 作者混用英文/俄语提示词，均照录（俄语主要为图像修饰请求）。
- 大量重复生成 = 同一提示词多次抽卡选优（AI 短剧工作流特征），去重后即"每镜一份配方"。
- 官方简报明示工作流：Claude 对话 + 自制 Seedance 2.5 提示词构建 skill + 全剧本 in-context；Style Prefix 与 Visual Constraints 段落逐镜复用（`prompts_video.jsonl` 内大量可见）。
- 项目页面无官方 skill 附件。
