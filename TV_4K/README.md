# TV_4K — 全部提示词（AI 直读仓）

> **AI 读取方式**：打开本目录 `prompts_all.jsonl`——每行一个 JSON，共 **254 条去重提示词**，逐字未截断。
> 字段：`project / category(工程内文件夹) / result_type(image|video|unknown) / model(生成模型) / prompt(提示词全文) / prompt_length / source_id(资产id，可溯源)`。
> 单文件即全部内容，无需其他文件。逐条读完 = 读完该项目全部提示词。

- **类型**：社区高赞项目（赞 18）
- **作者**：@adilinthewild
- **链接**：https://higgsfield.ai/@adilinthewild/projects/tv-4k
- **主题**：超写实短片拆解（uuid 锚+教学 folder 学）
- **语言**：英文
- **提示词总数**：254 条（去重后）
- **result_type 分布**：image 74 / video 180
- **模型分布**：seedance_2_0×180、 soul_cinematic×40、 gpt_image_2×25、 soul_cinema_studio×4、 nano_banana_flash×3、 nano_banana_2×2
- **category 数**：34 个工程内文件夹

## 按 result_type 取用

- 只要图像提示词：过滤 `result_type:"image"`
- 只要视频提示词：过滤 `result_type:"video"`
- 只要某 category：过滤 `category` 字段

## 体系一句话（方法论详见 03 区）

超写实短片拆解（uuid 锚+教学 folder 学）
