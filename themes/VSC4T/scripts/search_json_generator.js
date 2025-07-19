const fs = require('fs');
const path = require('path');
// 移除对 stripIndent 的依赖，因为它并没有被使用
// const stripIndent = require('strip-indent');

// 生成搜索数据 JSON 文件
hexo.extend.generator.register('searchJson', locals => {
  const config = hexo.config;
  let searchConfig = config.search || {};
  let root = config.root || '/';
  
  // 默认搜索路径
  let searchPath = searchConfig.path || 'search.json';
  
  // 删除搜索路径开头的斜杠
  searchPath = searchPath.replace(/^\//, '');
  
  // 记录生成路径以便调试
  console.log('[VSC4T] 正在生成搜索索引: ', searchPath);

  const posts = locals.posts.sort('-date');
  const pages = locals.pages;
  
  // 合并文章和页面
  let data = posts.data.concat(pages.data);
  let res = [];

  // 为每篇文章/页面格式化数据
  data.forEach(post => {
    if (post.indexing === false) return;

    let temp = {};
    
    // 基本信息
    temp.title = post.title || '';
    temp.url = root + post.path;
    temp.content = removeCodeBlocks(post.content || '');
    temp.content = stripHTML(temp.content); // 使用自定义函数去除 HTML 标签
    temp.content = temp.content.trim().replace(/\n/g, ' '); // 删除换行符
    temp.content = temp.content.replace(/\s+/g, ' '); // 规范化空格
    temp.date = post.date ? post.date.format('YYYY-MM-DD') : '';
    
    // 分类
    if (post.categories && post.categories.length) {
      temp.categories = post.categories.map(category => category.name);
    }
    
    // 标签
    if (post.tags && post.tags.length) {
      temp.tags = post.tags.map(tag => tag.name);
    }

    // 添加到结果数组
    res.push(temp);
  });

  // 返回数据
  return {
    path: searchPath,
    data: JSON.stringify(res)
  };
});

// 删除代码块以减少搜索数据大小并提高搜索质量
function removeCodeBlocks(str) {
  if (!str) return '';
  return str.replace(/```[\s\S]*?```/g, '')
            .replace(/`{1,2}[^`].*?`{1,2}/g, '');
}

// 简单的 HTML 标签剥离功能，替换对 hexo 依赖
function stripHTML(str) {
  if (!str) return '';
  return str
    .replace(/<pre.*?<\/pre>/gs, '') // 删除 pre 标签及其内容
    .replace(/<[^>]*>/g, '') // 删除 HTML 标签
    .replace(/&nbsp;/g, ' ') // 将 &nbsp; 替换为空格
    .replace(/&lt;/g, '<') // 将 &lt; 替换为 <
    .replace(/&gt;/g, '>') // 将 &gt; 替换为 >
    .replace(/&amp;/g, '&') // 将 &amp; 替换为 &
    .replace(/&quot;/g, '"') // 将 &quot; 替换为 "
    .replace(/&#39;/g, "'") // 将 &#39; 替换为 '
    .replace(/&ldquo;/g, '"') // 将 &ldquo; 替换为 "
    .replace(/&rdquo;/g, '"') // 将 &rdquo; 替换为 "
    .replace(/&hellip;/g, '...'); // 将 &hellip; 替换为 ...
}