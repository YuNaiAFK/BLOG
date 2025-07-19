# Contributing to VSC4T | 为 VSC4T 做贡献

First off, thanks for taking the time to contribute! 🎉👍  
首先，感谢您抽出时间做出贡献！🎉👍

The following is a set of guidelines for contributing to VSC4T, a dark and elegant Hexo theme. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.  
以下是为 VSC4T（一个深色且优雅的 Hexo 主题）做贡献的指南。这些主要是指导方针，而非严格规则。请使用您的最佳判断，并随时在拉取请求中提出对本文档的修改建议。

## Table of Contents | 目录

- [Code of Conduct | 行为准则](#code-of-conduct)
- [How Can I Contribute? | 如何贡献？](#how-can-i-contribute)
  - [Reporting Bugs | 报告错误](#reporting-bugs)
  - [Suggesting Enhancements | 建议改进](#suggesting-enhancements)
  - [Your First Code Contribution | 您的第一次代码贡献](#your-first-code-contribution)
  - [Pull Requests | 拉取请求](#pull-requests)
- [Development Process | 开发流程](#development-process)
  - [Setup Development Environment | 设置开发环境](#setup-development-environment)
  - [File Structure | 文件结构](#file-structure)
  - [Style Guidelines | 风格指南](#style-guidelines)
- [Additional Notes | 附加说明](#additional-notes)
  - [Issue Labels | 议题标签](#issue-labels)

## Code of Conduct | 行为准则

This project and everyone participating in it is governed by the VSC4T Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.  
本项目及所有参与者都受 VSC4T 行为准则的约束。参与即表示您应遵守此准则。请向项目维护者报告不可接受的行为。

## How Can I Contribute? | 如何贡献？

### Reporting Bugs | 报告错误

This section guides you through submitting a bug report for VSC4T. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.  
本节指导您提交 VSC4T 的错误报告。遵循这些指南有助于维护者和社区理解您的报告，重现行为并查找相关报告。

Before creating bug reports, please check the existing issues to see if the problem has already been reported. When you are creating a bug report, please include as many details as possible:  
在创建错误报告之前，请检查现有问题，看看该问题是否已被报告。创建错误报告时，请尽可能包含更多细节：

- **Use a clear and descriptive title** for the issue to identify the problem.  
  **使用清晰描述性的标题**来标识问题。
- **Describe the exact steps which reproduce the problem** in as many details as possible.  
  **详细描述重现问题的确切步骤**。
- **Provide specific examples** to demonstrate the steps.  
  **提供具体示例**来演示这些步骤。
- **Describe the behavior you observed** after following the steps and point out what exactly is the problem with that behavior.  
  **描述按照步骤后观察到的行为**，并指出该行为的确切问题所在。
- **Explain which behavior you expected** to see instead and why.  
  **解释您期望看到的行为**及原因。
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.  
  **包含截图和动画 GIF**，展示您按照所述步骤操作并清晰演示问题。
- **If the problem is related to performance or memory**, include a CPU profile capture and a memory heap snapshot with your report.  
  **如果问题与性能或内存有关**，请在报告中包含 CPU 配置文件捕获和内存堆快照。
- **Include details about your configuration and environment**:  
  **包含有关您的配置和环境的详细信息**：
  - Which version of Hexo are you using? | 您使用的是哪个版本的 Hexo？
  - What's the name and version of the OS you're using? | 您使用的操作系统名称和版本是什么？
  - Which browser are you using? | 您使用的是哪种浏览器？

### Suggesting Enhancements | 建议改进

This section guides you through submitting an enhancement suggestion for VSC4T, including completely new features and minor improvements to existing functionality.  
本节指导您提交 VSC4T 的增强建议，包括全新功能和对现有功能的小改进。

Before creating enhancement suggestions, please check the existing issues to see if the enhancement has already been suggested. When you are creating an enhancement suggestion, please include as many details as possible:  
在创建增强建议之前，请检查现有问题，看看是否已经有人提出了该增强建议。创建增强建议时，请尽可能包含更多细节：

- **Use a clear and descriptive title** for the issue to identify the suggestion.  
  **使用清晰描述性的标题**来标识建议。
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.  
  **提供建议增强的逐步描述**，尽可能详细。
- **Provide specific examples to demonstrate the steps** or give a clear use case for the suggested enhancement.  
  **提供具体示例来演示这些步骤**，或为建议的增强提供明确的用例。
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.  
  **描述当前行为**并**解释您期望看到的行为**及原因。
- **Explain why this enhancement would be useful** to most VSC4T users.  
  **解释为什么这个增强对大多数 VSC4T 用户有用**。
- **List some other themes or applications where this enhancement exists** if possible.  
  如果可能，**列出一些其他存在此增强功能的主题或应用程序**。

### Your First Code Contribution | 您的第一次代码贡献

Unsure where to begin contributing to VSC4T? You can start by looking through the `beginner` and `help-wanted` issues:  
不确定从哪里开始为 VSC4T 做贡献？您可以先查看 `beginner` 和 `help-wanted` 标记的问题：

- **Beginner issues** - issues which should only require a few lines of code, and a test or two.  
  **初学者问题** - 只需要几行代码和一两个测试的问题。
- **Help wanted issues** - issues which should be a bit more involved than beginner issues.  
  **需要帮助的问题** - 比初学者问题更复杂一些的问题。

### Pull Requests | 拉取请求

- Fill in the required template | 填写所需的模板
- Do not include issue numbers in the PR title | 不要在 PR 标题中包含问题编号
- Include screenshots and animated GIFs in your pull request whenever possible | 尽可能在拉取请求中包含截图和动画 GIF
- Follow the style guidelines | 遵循风格指南
- End all files with a newline | 所有文件以换行符结束
- Avoid platform-dependent code | 避免平台相关的代码

## Development Process | 开发流程

### Setup Development Environment | 设置开发环境

1. Fork the repository on GitHub | 在 GitHub 上派生仓库
2. Clone your fork locally | 在本地克隆您的派生
```bash
git clone https://github.com/YOUR_USERNAME/VSC4T.git
cd VSC4T
```
3. Add the original repository as a remote to keep it updated: | 添加原始仓库作为远程仓库以保持更新：
```bash
git remote add upstream https://github.com/B143KC47/VSC4T.git
```

4. Set up a test Hexo site to test your changes: | 设置测试 Hexo 站点以测试您的更改：
```bash
# In a separate directory | 在单独的目录中
hexo init test-site
cd test-site
```

5. Link your theme to the test site: | 将您的主题链接到测试站点：
```bash
# Remove the default theme | 删除默认主题
rm -rf themes/landscape
# Create a symbolic link to your theme | 创建到您主题的符号链接
ln -s /path/to/your/VSC4T themes/VSC4T
```

6. Configure the test site to use your theme by editing `_config.yml`: | 通过编辑 `_config.yml` 配置测试站点使用您的主题：
```yaml
theme: VSC4T
```

### File Structure | 文件结构

The theme is structured as follows: | 主题结构如下：

- `_config.yml` - Theme configuration file | 主题配置文件
- `languages/` - Internationalization files | 国际化文件
- `layout/` - Theme template files in EJS format | EJS 格式的主题模板文件
- `scripts/` - Hexo script files | Hexo 脚本文件
- `source/` - Theme assets (CSS, JavaScript, images, etc.) | 主题资源（CSS、JavaScript、图像等）
  - `css/` - Stylesheets | 样式表
  - `js/` - JavaScript files | JavaScript 文件
  - `image/` - Image files | 图像文件
  - `doc/` - Documentation files | 文档文件

### Style Guidelines | 风格指南

#### JavaScript

- Use ES6 features where appropriate | 适当使用 ES6 特性
- Use semicolons | 使用分号
- 2 spaces for indentation | 使用 2 个空格缩进
- Prefer single quotes over double quotes | 优先使用单引号而非双引号
- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) | 遵循 [Airbnb JavaScript 风格指南](https://github.com/airbnb/javascript)

#### CSS/SCSS

- Use SCSS where possible | 尽可能使用 SCSS
- 2 spaces for indentation | 使用 2 个空格缩进
- Write one property per line | 每行写一个属性
- Use hyphen-case for class names (e.g., `.my-class-name`) | 类名使用连字符命名法（例如，`.my-class-name`）
- Follow the [Airbnb CSS/SASS Style Guide](https://github.com/airbnb/css) | 遵循 [Airbnb CSS/SASS 风格指南](https://github.com/airbnb/css)

#### EJS Templates

- 2 spaces for indentation | 使用 2 个空格缩进
- Keep logic in templates to a minimum | 将模板中的逻辑保持最小化
- Use consistent naming conventions for partials | 对局部模板使用一致的命名约定

## Additional Notes | 附加说明

### Issue Labels | 议题标签

This project uses the following labels to track issues: | 本项目使用以下标签跟踪问题：

- `bug` - Something isn't working | 某些功能不正常
- `documentation` - Improvements or additions to documentation | 文档的改进或补充
- `duplicate` - This issue or pull request already exists | 此问题或拉取请求已存在
- `enhancement` - New feature or request | 新功能或请求
- `good first issue` - Good for newcomers | 适合新手
- `help wanted` - Extra attention is needed | 需要额外关注
- `invalid` - This doesn't seem right | 这似乎不对
- `question` - Further information is requested | 需要更多信息
- `wontfix` - This will not be worked on | 这个问题不会被处理

---

Thanks for contributing to VSC4T! 🎉  
感谢您为 VSC4T 做出贡献！🎉