# GRIMWATCH — 全部提示词完整包

> **AI 读取**：`prompts_all.jsonl` = 全部去重提示词（每行一个 JSON）。

- **作者**：@edenwood（社区项目 · via_link 公开 · AI Film Festival 参赛 · 系列剧第 1 集）
- **链接**：https://higgsfield.ai/zh/@edenwood/projects/grimwatch
- **捕获**：2026-10-27 · 赞 615 · 播放 302,600（队列播放量最高）

## 对账

官方计数 **671** = 655 job（全部捕获；两个同名 folder 为同一 workspace 别名，A=B 全等验证）+ 5 video_input + 11 media_input。**零丢失**；去重后 **254** 条唯一提示词。

| 文件 | 条数 |
|---|---|
| prompts_all.jsonl | 254 |
| prompts_image.jsonl | 544（唯一） |
| prompts_video.jsonl | 109（唯一） |
| assets_full.jsonl | 655 |

字段：`project / category / folder / result_type / model / prompt / prompt_length / source_id`

## 文件夹结构

{"Grimwatch（别名夹，与ROOT同一workspace）":655}

模型分布：nano_banana_2 273 · nano_banana_flash 206 · seedance_2_unlimited 76 · gpt_image_2 42 · seedance_2_0 30 · seedream_v5_lite 19
