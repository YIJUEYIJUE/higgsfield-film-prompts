# THE_KISS — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@seifhussam（社区项目 · via_link 公开 · AI Film Festival 参赛 top50）
- **链接**：https://higgsfield.ai/zh/@seifhussam/projects/the-kiss
- **题材**：《The Kiss》——两兄弟因嫉妒走向毁灭的 3.6 分钟恐怖短片（社区榜赞数第 1：1210 赞 / 61,447 播放 / 559 评论）
- **捕获**：2026-10-27

## 文件一览

| 文件 | 内容 | 条数 |
|---|---|---|
| prompts_all.jsonl | 全部去重提示词（**主入口**） | 206 |
| prompts_image.jsonl | image | 131 |
| prompts_video.jsonl | video | 75 |
| prompts_scenes.jsonl | SCENE CONTEXT 分镜 | 74 |
| prompts_assets.jsonl | 其余参考生成 | 132 |
| assets_full.jsonl | 全量资产（391 job 全记录） | 391 |
| brief.txt | 官方简报（仅 Context 段，其余为未填模板） | 有 |

## 字段

`project / category / folder / result_type / model / prompt / prompt_length / source_id`

## 对账

官方计数 **393** = 391 job（全部捕获）+ 6 非job条目（Sound 等上传件）。**零丢失**；去重后 **206** 条唯一提示词。

## 文件夹结构

ROOT 主创作区 17 · Test_Images 229 · Test_Videos 94 · Characters 17 · Props 14 · Locations 8 · Editing 7 · Watermarks 4 · Scene_02 3 · Scene_01/03/05 各 1 · Sound 1（非job）

## 模型分布（全量 391）

nano_banana_2 161 · seedance_2_5 94 · soul_cinematic 38 · text2image_soul_v2 36 · seedream_v5_pro 22 · gpt_image_2 19 · cinematic_video_editor 8 · seedance_2_0 6 · soul_cinema_studio 4 · seedream_v4_5 2 · cinematic_studio_video_4_0 1

## 备注

- 大量 Test_Images/Test_Videos = 抽卡测试（同提示词多次生成），去重后即"每镜一份配方"。
- 唯一分镜类 SCENE CONTEXT 74 条为成片分镜配方；Test 区大量图像模型测试（nano_banana_2 为主）反映其"先图定调、后视频"的工作流。
