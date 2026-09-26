# TOP_UP_AD — 全部提示词（AI 直读仓）

> **AI 读取方式**：打开本目录 `prompts_all.jsonl`——每行一个 JSON，共 **74 条去重提示词**，逐字未截断。
> 字段：`project / category(工程内文件夹) / result_type(image|video|unknown) / model(生成模型) / prompt(提示词全文) / prompt_length / source_id(资产id，可溯源)`。
> 单文件即全部内容，无需其他文件。逐条读完 = 读完该项目全部提示词。

- **类型**：社区高赞项目（赞 105）
- **作者**：@adilinthewild
- **链接**：https://higgsfield.ai/@adilinthewild/projects/top-up
- **主题**：机甲实拍广告拆解（官方教程句式实战迁移）
- **语言**：英文
- **提示词总数**：74 条（去重后）
- **result_type 分布**：video 64 / image 10
- **模型分布**：seedance_2_0×64、 soul_cinematic×4、 gpt_image_2×4、 seedream_v4_5×2
- **category 数**：15 个工程内文件夹

## 按 result_type 取用

- 只要图像提示词：过滤 `result_type:"image"`
- 只要视频提示词：过滤 `result_type:"video"`
- 只要某 category：过滤 `category` 字段

## 体系一句话（方法论详见 03 区）

机甲实拍广告拆解（官方教程句式实战迁移）
