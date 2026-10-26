# DONT_POISON_IVY — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@joeysnoisygroup（社区项目 · via_link 公开 · Higgsfield 精选）
- **链接**：https://higgsfield.ai/zh/@joeysnoisygroup/projects/don-t-poison-ivy
- **题材**：《Don't Poison Ivy》——无对白风格化 3D 动画短片（1069 赞 / 62,413 播放）
- **捕获**：2026-10-27

## 文件一览

| 文件 | 内容 | 条数 |
|---|---|---|
| prompts_all.jsonl | 全部去重提示词（**主入口**） | 490 |
| prompts_image.jsonl | image | 84 |
| prompts_video.jsonl | video | 406 |
| assets_full.jsonl | 全量资产（553 job 全记录） | 553 |
| brief.txt | 官方简报全文（LOGLINE/THE WORLD/THE FILM/THEME/LOOK/BUILDING IT…） | 有 |

## 字段

`project / category / folder / result_type / model / prompt / prompt_length / source_id`

## 对账

官方计数 **608** = 553 job（全部捕获，552 带提示词）+ 40 audio_input（Score 夹音乐生成件）+ 15 其他上传件。**零丢失**；去重后 **490** 条唯一提示词。

## 文件夹结构

ROOT 主创作区 152 · 深层生成会话夹 365（API 归属主工作区）· Props 22 · Video Generations 10 · Locations 2 · Characters 2 · Score 40（音乐 audio_input）

## 模型分布（全量 553）

seedance_2_5 402（73%）· seedream_v5_pro 88 · nano_banana_2 62 · cinematic_video_editor 1

## 备注

- 该作者不用 SCENE CONTEXT/CHARACTER SHEET 前缀体系，分类全部归 assets——提示词自带场景内嵌描述（每条自成一体）。
- brief 含完整创作方法论章节（LOGLINE / THE WORLD / THE FILM / THEME / LOOK / BUILDING IT / THE MEMOJI PROBLEM）+ 制作名单，是社区 brief 中结构最完整的之一。
- Score 夹 40 条 audio_input 音乐生成提示词（job 类型带 prompt）已含在数据内。
