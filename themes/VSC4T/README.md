# 🐱 VSCat Theme for Hexo

> An elegant and minimalist theme for Hexo, designed with a dark color scheme and code-inspired aesthetics.

## ⭐ Support the Project

If you find this theme useful, please consider giving it a star on GitHub! Your support helps make the project more visible and encourages continued development.

<div align="center">
  <a href="https://github.com/B143KC47/VSC4T">
    <img src="https://img.shields.io/github/stars/B143KC47/VSC4T?style=social" alt="GitHub stars">
  </a>
  
  <p>Every star matters and is greatly appreciated! 🙏</p>
</div>

<div align="center">

[![中文文档](https://img.shields.io/badge/docs-中文文档-brightgreen)](source/doc/README.zh-CN.md)
[![GitHub license](https://img.shields.io/github/license/B143KC47/VSC4T)](LICENSE)
[![Hexo](https://img.shields.io/badge/hexo-%3E%3D%205.0.0-blue)](https://hexo.io)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2012.0-green.svg)](https://nodejs.org)
[![CodeFactor](https://img.shields.io/badge/codefactor-A-orange)](https://www.codefactor.io/)

</div>

<div align="center">
  <img src="source/image/cat.jpg" alt="Black cat sitting at computer" width="600">
  <p><em>Image credit: <a href="https://pixabay.com/photos/cat-black-cat-work-computer-963931/">Black cat at work by Pixabay</a></em></p>
</div>

<div align="center">
  <img src="source/image/VSC4T.png" alt="Demo Screenshot" width="800">
</div>

<div align="center">
  <img src="source/image/VSC4T2.png" alt="Demo Screenshot" width="800">
</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [📊 Star History](#-star-history)
- [🚀 Installation](#-installation)
- [🔧 Configuration](#required-configuration)
- [🌍 Language Support](#-language-support)
- [📝 Blog Post Settings](#-blog-post-settings)
- [🎨 Custom Styling](#custom-styling)
- [📱 Mobile Optimization](#-mobile-optimization)
- [🔍 Search Configuration](#search-configuration)
- [📄 License](#-license)
- [💬 Support](#-support)

## ✨ Features

- 🌙 **Dark mode optimized** - Designed for comfortable reading
- 📱 **Fully responsive** - Perfect display on all devices
- 🚀 **Fast loading** - Optimized performance
- 🎨 **Clean design** - Minimalist and elegant interface
- 🔍 **VS Code style search** - Familiar and powerful search functionality
- 📊 **Code highlighting** - Beautiful syntax highlighting in VS Code style
- 🔧 **Easy configuration** - Simple and intuitive setup
- 📂 **Explorer-like sidebar** - Intuitive navigation for categories and tags
- 🌐 **Multi-language support** - 12 languages available out of the box
- 🧜🏻‍♀️ **Mermaid diagrams support** - Integrated support for Mermaid diagrams

## 📊 Star History

<a href="https://star-history.com/#B143KC47/VSC4T">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=B143KC47/VSC4T&type=Date" />
  </picture>
</a>

## 🚀 Installation

1. Navigate to your Hexo site's themes directory:
   ```bash
   cd themes
   ```

2. Clone this repository:
   ```bash
   git clone https://github.com/B143KC47/VSC4T.git
   ```

3. Set the theme in your site's configuration:
   ```yaml
   theme: VSC4T
   ```

## Required Configuration

### Enable Relative Links

For proper theme deployment, set the following in your Hexo site's `_config.yml`:

```yaml
relative_link: true
```

Without enabling relative links, the theme may not deploy and function correctly.

For proper code block rendering, set the following in your Hexo site's `_config.yml`:

```yaml
hljs: true
```

Otherwise you might encounter issues that code block rendered with empty lines.

### Create Required Pages

This theme requires the following pages. Make sure to create them:

1. Create Categories page:
   ```bash
   hexo new page categories
   ```
   Then edit `source/categories/index.md` and add 
   ```
   ---
   title: categories
   layout: categories
   ---
   ```
2. Create Tags page:
   ```bash
   hexo new page tags
   ```
   Then edit `source/tags/index.md` and add `type: "tags"`
   ```
   ---
   title: tags
   layout: tags
   ---
   ```
3. Create About page:
   ```bash
   hexo new page about
   ```
   And add your personal information to `source/about/index.md`
   ```
   ---
   title: about
   date: 2025-02-22 22:14:44
   ---

   A very good simple theme

   ```
4. Create Search page:
   ```bash
   hexo new page search
   ```
   Then edit `source/search/index.md` and add:
   ```
   ---
   title: search
   layout: search
   ---
   ```

## 🔧 Theme Configuration

Modify the `_config.yml` in the theme directory:

```yaml
# Basic Information
name: BlackCat
description: A simple dark Hexo theme inspired by code.
author: YourName

# Basic Website Configuration
url: https://b143kc47.github.io/VSC4T 
root: /VSC4T/ 

# Menu Configuration
url: https://B143KC47.github.io/xxxxx # actual url
root: /xxxxxx/  # If your website is deployed in a subdirectory, you need to configure the root property


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

## 🌍 Language Support

<details>
<summary>Click to expand supported languages</summary>

- 🇺🇸 English (en)
- 🇨🇳 Simplified Chinese (zh-CN)
- 🇯🇵 Japanese (ja)
- 🇰🇷 Korean (ko)
- 🇫🇷 French (fr)
- 🇩🇪 German (de)
- 🇪🇸 Spanish (es)
- 🇮🇹 Italian (it)
- 🇷🇺 Russian (ru)
- 🇵🇹 Portuguese (pt)
- 🇦🇪 Arabic (ar)
- 🇻🇳 Vietnamese (vi)

</details>

### Language Configuration Example

To use a different language, set the `language` parameter in your site's `_config.yml`:

```yaml
# For Japanese
language: ja

# For Korean
language: ko

# For French
language: fr
```


## 📝 Blog Post Settings

### Creating a New Post

```bash
hexo new post "Your Post Title"
```

<details>
<summary>Click to see example post format</summary>

```markdown
---
title: VSC4T - A Dark and Elegant Hexo Theme
date: 2023-06-15 10:30:00
tags: [hexo, theme, dark-mode, responsive]
categories: [web-design, themes]
---

Your post content goes here...
```
</details>

2. This will create a new markdown file in `source/_posts/your-post-title.md`

## Custom Styling

This theme supports custom CSS and JS. In the theme configuration:

```yaml
custom_css:
  - /css/mobile.css
custom_js:
  - /js/code-copy.js
  - /js/mobile-menu.js
```

## 📱 Mobile Optimization

The theme is fully optimized for mobile devices with:

- Responsive design
- Touch-friendly navigation
- Optimized reading experience

## Code Highlighting

This theme uses built-in code highlighting by default. You can adjust it through the following settings:

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: true
```

## Mermaid Diagrams Support
The theme support mermaid diagrams, you need to install the following plugin to make sure it can render properly:

```bash
npm install hexo-filter-mermaid-diagrams
```

## Search Configuration

The theme includes a powerful search functionality inspired by VS Code's search interface. The search feature allows users to:

- Search through all blog posts and pages
- Filter by title, content, tags, and categories
- Use keyboard navigation (↑↓ arrows and Enter)
- See highlighted search matches
- Get context-aware search previews

### Enabling Search

Search is enabled by default. The search index is automatically generated when you build your site. You can customize the search behavior in your site's `_config.yml`:

```yaml
search:
  path: search.json        # Path to generate the search index file
  field: post             # Search field, available: post, page, all
  content: true           # Whether to include post/page content
  format: html            # Content format to parse, available: html, raw
```

### Search Keyboard Shortcuts

- `↑` / `↓`: Navigate through search results
- `Enter`: Open selected result
- `Esc`: Clear search input

### Search Filters

The search interface includes filters for:
- Titles
- Content
- Tags
- Categories

Users can toggle these filters to narrow down their search results.

## 👨‍💻 Contributors

Thanks to all the contributors who have helped make this theme better!

<div align="center">
  <a href="https://github.com/B143KC47/VSC4T/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=B143KC47/VSC4T" alt="Contributors">
  </a>
  <p>Note: If contributors aren't showing correctly, they may need to have their contributions properly linked to their GitHub accounts. Check that commits are associated with GitHub emails.</p>
</div>

### How to Contribute

We welcome all contributions to improve VSC4T theme! Here's how you can help:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

For more details, please read our [Contributing Guidelines](CONTRIBUTING.md).

## 📄 License

This theme is released under the [MIT License](LICENSE).

## 💬 Support

If you have any questions or need help, please [open an issue](https://github.com/B143KC47/VSC4T/issues) in the GitHub repository.
