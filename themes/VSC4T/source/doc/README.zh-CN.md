# 🐱 VSCat Hexo 主题

> 一个优雅简约的 Hexo 主题，采用深色配色方案和代码风格设计美学。

## ⭐ 支持主题


如果您觉得这个主题有用，请考虑在 GitHub 上给它一颗星！您的支持有助于提高项目的可见度，并鼓励开发。

<div align="center">
  <a href="https://github.com/B143KC47/VSC4T">
    <img src="https://img.shields.io/github/stars/B143KC47/VSC4T?style=social" alt="GitHub stars">
  </a>
  
  <p>每一颗星都很重要，非常感激！🙏</p>
</div>


<div align="center">

[![English Documentation](https://img.shields.io/badge/docs-English-blue)](../../README.md)
[![GitHub license](https://img.shields.io/github/license/B143KC47/VSC4T)](../../LICENSE)
[![Hexo](https://img.shields.io/badge/hexo-%3E%3D%205.0.0-blue)](https://hexo.io)
[![Node.js 版本](https://img.shields.io/badge/node-%3E%3D%2012.0-green.svg)](https://nodejs.org)
[![CodeFactor](https://img.shields.io/badge/codefactor-A-orange)](https://www.codefactor.io/)

</div>

<div align="center">
  <img src="../image/cat.jpg" alt="黑猫坐在电脑前" width="600">
  <p><em>图片来源：<a href="https://pixabay.com/photos/cat-black-cat-work-computer-963931/">Pixabay 的工作中的黑猫</a></em></p>
</div>

<div align="center">
  <img src="../image/VSC4T.png" alt="演示截图" width="800">
</div>

<div align="center">
  <img src="../image/VSC4T2.png" alt="演示截图" width="800">
</div>

## 🎥 演示视频

<div align="center">
  <a href="https://www.youtube.com/watch?v=CmDWGq5nPT4">
    <img src="https://www.youtube.com/watch?v=CmDWGq5nPT4/maxresdefault.jpg" alt="VSCat 主题安装演示视频" width="600">
  </a>
  <p><em>点击观看 VSCat 主题安装演示视频</em></p>
</div>



## 📋 目录

- [✨ 特性](#-特性)
- [📊 星标历史](#-星标历史)
- [🚀 安装](#-安装)
- [🔧 配置](#必需配置)
- [🌍 语言支持](#-语言支持)
- [📝 博客文章设置](#-博客文章设置)
- [🎨 自定义样式](#自定义样式)
- [📱 移动端优化](#-移动端优化)
- [🔍 搜索配置](#搜索配置)
- [📄 许可证](#-许可证)
- [💬 支持](#-支持)

## ✨ 特性

- 🌙 **深色模式优化** - 专为舒适阅读体验设计
- 📱 **完全响应式** - 在所有设备上完美显示
- 🚀 **快速加载** - 优化性能表现
- 🎨 **简洁设计** - 极简主义和优雅的界面
- 🔍 **VS Code风格搜索** - 熟悉且强大的搜索功能
- 📊 **代码高亮** - VS Code风格的美观代码语法高亮
- 🔧 **简易配置** - 简单直观的设置
- 📂 **资源管理器风格侧边栏** - 直观导航分类和标签
- 🌐 **多语言支持** - 内置12种语言
- 🧜🏻‍♀️ **Mermaid图表支持** - 集成支持Mermaid图表

## 📊 星标历史

<a href="https://star-history.com/#B143KC47/VSC4T">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date" />
    <img alt="星标历史图表" src="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date" />
  </picture>
</a>

## 🚀 安装

1. 导航到您的Hexo站点的themes目录：
   ```bash
   cd themes
   ```

2. 克隆此仓库：
   ```bash
   git clone https://github.com/B143KC47/VSC4T.git
   ```

3. 在站点配置中设置主题：
   ```yaml
   theme: VSC4T
   ```

## 必需配置

### 启用相对链接

为了正确部署主题，请在您的Hexo站点的`_config.yml`中设置以下内容：

```yaml
relative_link: true
```

如果不启用相对链接，主题可能无法正确部署和运行。

为了正确呈现代码块，请在您的Hexo站点的`_config.yml`中设置以下内容：

```yaml
hljs: true
```

否则您可能会遇到代码块渲染出空行的问题。

### 创建必需的页面

此主题需要以下页面。请确保创建它们：

1. 创建分类页面：
   ```bash
   hexo new page categories
   ```
   然后编辑`source/categories/index.md`并添加
   ```
   ---
   title: categories
   layout: categories
   ---
   ```
2. 创建标签页面：
   ```bash
   hexo new page tags
   ```
   然后编辑`source/tags/index.md`并添加`type: "tags"`
   ```
   ---
   title: tags
   layout: tags
   ---
   ```
3. 创建关于页面：
   ```bash
   hexo new page about
   ```
   并将您的个人信息添加到`source/about/index.md`
   ```
   ---
   title: about
   date: 2025-02-22 22:14:44
   ---

   一个非常好的简洁主题

   ```
4. 创建搜索页面：
   ```bash
   hexo new page search
   ```
   然后编辑`source/search/index.md`并添加：
   ```
   ---
   title: search
   layout: search
   ---
   ```

## 🔧 主题配置

修改主题目录中的`_config.yml`：

```yaml
# 基本信息
name: BlackCat
description: 一个受代码启发的简约暗色Hexo主题。
author: 您的名字

# 基本网站配置
url: https://b143kc47.github.io/VSC4T 
root: /VSC4T/ 

# 菜单配置
url: https://B143KC47.github.io/xxxxx # 实际URL
root: /xxxxxx/  # 如果您的网站部署在子目录中，需要配置root属性


# _config.yml
syntax_highlighter: highlight.js
highlight:
  auto_detect: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
  exclude_languages:
    - example
  wrap: true
  hljs: true
prismjs:
  preprocess: true
  line_number: true
  line_threshold: 0
  tab_replace: ""
```

## 🌍 语言支持

<details>
<summary>点击展开支持的语言</summary>

- 🇺🇸 英语 (en)
- 🇨🇳 简体中文 (zh-CN)
- 🇯🇵 日语 (ja)
- 🇰🇷 韩语 (ko)
- 🇫🇷 法语 (fr)
- 🇩🇪 德语 (de)
- 🇪🇸 西班牙语 (es)
- 🇮🇹 意大利语 (it)
- 🇷🇺 俄语 (ru)
- 🇵🇹 葡萄牙语 (pt)
- 🇦🇪 阿拉伯语 (ar)
- 🇻🇳 越南语 (vi)

</details>

### 语言配置示例

要使用不同的语言，请在您站点的`_config.yml`中设置`language`参数：

```yaml
# 日语
language: ja

# 韩语
language: ko

# 法语
language: fr
```


## 📝 博客文章设置

### 创建新文章

```bash
hexo new post "您的文章标题"
```

<details>
<summary>点击查看示例文章格式</summary>

```markdown
---
title: VSC4T - 一个深色优雅的Hexo主题
date: 2023-06-15 10:30:00
tags: [hexo, 主题, 深色模式, 响应式]
categories: [网页设计, 主题]
---

您的文章内容在这里...
```
</details>

2. 这将在 `source/_posts/your-post-title.md` 创建一个新的markdown文件

## 自定义样式

本主题支持自定义CSS和JS。在主题配置中：

```yaml
custom_css:
  - /css/mobile.css
custom_js:
  - /js/code-copy.js
  - /js/mobile-menu.js
```

## 📱 移动端优化

本主题针对移动设备进行了全面优化：

- 响应式设计
- 触摸友好的导航
- 优化的阅读体验

## 代码高亮

本主题默认使用内置代码高亮。您可以通过以下设置进行调整：

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: true
```

## Mermaid图表支持
本主题支持Mermaid图表，您需要安装以下插件来确保其正确渲染：

```bash
npm install hexo-filter-mermaid-diagrams
```

## 搜索配置

本主题包含一个强大的搜索功能，灵感来自VS Code的搜索界面。此搜索功能允许用户：

- 搜索所有博客文章和页面
- 按标题、内容、标签和分类进行筛选
- 使用键盘导航（↑↓箭头和回车键）
- 查看高亮的搜索匹配项
- 获取上下文感知的搜索预览

### 启用搜索

搜索功能默认启用。搜索索引会在您构建网站时自动生成。您可以在站点的`_config.yml`中自定义搜索行为：

```yaml
search:
  path: search.json        # 生成搜索索引文件的路径
  field: post             # 搜索字段，可选值：post, page, all
  content: true           # 是否包含文章/页面内容
  format: html            # 解析的内容格式，可选值：html, raw
```

### 搜索键盘快捷键

- `↑` / `↓`：在搜索结果中导航
- `Enter`：打开所选结果
- `Esc`：清除搜索输入

### 搜索过滤器

搜索界面包含以下过滤器：
- 标题
- 内容
- 标签
- 分类

用户可以切换这些过滤器来缩小搜索结果范围。

## 👨‍💻 贡献者

感谢所有帮助改进这个主题的贡献者！

<div align="center">
  <a href="https://github.com/B143KC47/VSC4T/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=B143KC47/VSC4T" alt="贡献者">
  </a>
  <p>注意：如果贡献者没有正确显示，他们可能需要将其贡献与GitHub账户正确关联。请检查提交是否与GitHub电子邮件关联。</p>
</div>

### 如何贡献

我们欢迎所有改进VSC4T主题的贡献！以下是您可以帮助的方式：

1. Fork仓库
2. 创建您的特性分支：`git checkout -b feature/amazing-feature`
3. 提交您的更改：`git commit -m '添加一些很棒的特性'`
4. 推送到分支：`git push origin feature/amazing-feature`
5. 开启Pull Request

更多详情，请阅读我们的[贡献指南](CONTRIBUTING.md)。

## 📄 许可证

本主题基于[MIT许可证](LICENSE)发布。

## 💬 支持

如果您有任何问题或需要帮助，请在GitHub仓库中[提交问题](https://github.com/B143KC47/VSC4T/issues)。
