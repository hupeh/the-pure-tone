# 生成主题截图 / Generating Theme Screenshots

本文档介绍如何为 Zed 编辑器主题生成预览页面和截图。

> **注意：** 这些是用于展示和文档的主题预览，实际使用需要在 Zed 编辑器中安装主题。

## 快速开始

### 1. 生成 HTML 预览

```bash
bun run previews
```

这会在 `previews/` 目录生成所有主题的 HTML 预览文件和一个索引页面。

### 2. 查看预览

在浏览器中打开 `previews/index.html`，你可以看到所有主题的预览。

### 3. 手动截图

1. 打开你想要截图的主题预览页面
2. 打开浏览器开发者工具 (F12 或 Cmd/Ctrl + Shift + I)
3. 使用命令面板 (Cmd/Ctrl + Shift + P)
4. 输入 "Capture screenshot" 或"截图"
5. 选择 "Capture full size screenshot" 捕获完整页面

## 自动截图（实验性）

如果你已经安装了 Playwright 浏览器，可以尝试自动截图：

```bash
# 首次使用需要安装浏览器
bunx playwright install chromium

# 生成截图
bun run screenshots
```

**注意：** 自动截图功能可能在某些系统上不稳定，推荐使用手动截图方式。

## 生成的文件

### 预览文件 (previews/)

- `index.html` - 所有主题的索引页面
- `TheDarkTone.html` - The Dark Tone 主题预览
- `TheDarkSoftTone.html` - The Dark Soft Tone 主题预览
- `TheBlackTone.html` - The Black Tone 主题预览
- `TheLightTone.html` - The Light Tone 主题预览
- `TheLightSoftTone.html` - The Light Soft Tone 主题预览

### 截图文件 (screenshots/)

截图会保存在 `screenshots/` 目录，文件名与主题名称对应。

## 自定义

你可以编辑 `src/screenshot.ts` 来自定义预览页面的样式和代码示例。

## 命令行选项

### 生成预览

```bash
bun src/generate-previews.ts <theme-file.json> [output-dir]

# 示例
bun src/generate-previews.ts themes/the-pure-tone.json previews
```

### 生成截图

```bash
bun src/generate-screenshots.ts <theme-file.json> [output-dir]

# 示例
bun src/generate-screenshots.ts themes/the-pure-tone.json screenshots
```

## 故障排除

### Playwright 超时

如果自动截图超时，请尝试：

1. 确保已安装 Chromium: `bunx playwright install chromium`
2. 检查防火墙设置
3. 使用手动截图方式

### HTML 预览无法正确显示

1. 确保在浏览器中打开 HTML 文件（使用 `file://` 协议）
2. 检查浏览器控制台是否有错误
3. 尝试在不同的浏览器中打开

## 贡献

如果你有改进建议，欢迎提交 Issue 或 Pull Request！
