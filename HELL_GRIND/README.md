# HELL_GRIND — 全部提示词（AI 直读仓）

> **AI 读取方式**：打开本目录 `prompts_all.jsonl`——每行一个 JSON，共 **1861 条去重提示词**，逐字未截断。
> 字段：`project / category(工程内文件夹) / result_type(image|video|unknown) / model(生成模型) / prompt(提示词全文) / prompt_length / source_id(资产id，可溯源)`。
> 单文件即全部内容，无需其他文件。逐条读完 = 读完该项目全部提示词。

- **类型**：官方开源项目
- **作者**：higgsfield.studio
- **链接**：https://higgsfield.ai/@higgsfield.studio/projects/hell-grind
- **主题**：奇幻悲剧，生物五件套设计法
- **语言**：英文
- **提示词总数**：1861 条（去重后）
- **result_type 分布**：video 1271 / image 590
- **模型分布**：seedance_2_0×1264、 nano_banana_2×279、 imagegen_2_0×103、 text2image_soul_v2×60、 soul_cinematic×59、 nano_banana_flash×37、 gpt_image_2×30、 image_auto×22、 cinematic_studio_video_3_5×7
- **category 数**：41 个工程内文件夹

## 按 result_type 取用

- 只要图像提示词：过滤 `result_type:"image"`
- 只要视频提示词：过滤 `result_type:"video"`
- 只要某 category：过滤 `category` 字段

## 体系一句话（方法论详见 03 区）

奇幻悲剧，生物五件套设计法
