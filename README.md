# MarsX — 全链路安全方案咨询

> APP安全评估 · Web渗透测试 · IoT安全 · 云安全 · AI安全 · GDPR/CRA合规

现代化个人安全咨询业务官网，展示安全服务能力、典型案例与联系方式。

## ✨ 特点

- 🛡️ 网络安全主题设计，全页面深色/浅色双主题（默认深色），页脚等所有区域均适配
- 🌐 中英文双语切换，默认中文
- 📱 完全响应式，适配手机（480px）、平板（768px/1024px）与桌面端（1400px+）
- ⚡ Jekyll 静态站点生成，GitHub Pages 原生部署
- 🔍 全面 SEO 优化：JSON-LD 结构化数据（ProfessionalService + FAQPage + WebSite + SearchAction + BreadcrumbList + BlogPosting）、动态 sitemap、robots.txt、动态 per-page Open Graph & Twitter Cards（含 og:image）、hreflang 双语标签、百度 SEO（applicable-device / renderer / no-siteapp / no-transform）
- 🎓 教育背景 & 专业认证展示
- 📋 服务流程展示（5 步横向步骤条，移动端纵向时间线）
- 🛠 技术栈与工具链展示（4 大领域分类卡片）
- ❓ FAQ 手风琴折叠面板，支持搜索富结果
- 🎭 滚动渐显动画与技能条动效
- 📬 内置联系表单（含服务类型选择 + 邮箱格式校验），一键唤起邮件客户端
- ♿ 键盘无障碍访问支持（Escape 关闭菜单）
- 📝 技术博客（Jekyll `_posts`，Markdown 写作）
- 🖼️ 品牌社交分享图（og:image）+ favicon

## 📂 项目结构

```
personal-business-website/
├── _config.yml                # Jekyll 配置
├── _layouts/
│   ├── default.html           # 基础布局（head + nav + footer）
│   └── post.html              # 博客文章布局
├── _includes/
│   ├── head.html              # <head> meta 标签、CSS 链接、SEO
│   ├── structured-data.html   # JSON-LD 结构化数据
│   ├── nav.html               # 导航栏
│   ├── footer.html            # 页脚
│   ├── hero.html              # 首屏
│   ├── about.html             # 关于我
│   ├── services.html          # 服务项目 6 卡片
│   ├── process.html           # 服务流程 5 步
│   ├── cases.html             # 典型案例 3 卡片
│   ├── tech-stack.html        # 技术栈 4 领域
│   ├── testimonials.html      # 客户评价
│   ├── faq.html               # 常见问题 6 项
│   └── contact.html           # 联系方式 + 表单
├── _posts/                    # 博客文章（Markdown）
│   ├── 2026-08-10-sdl-security-left-shift.md
│   └── 2026-08-11-iot-full-chain-security.md
├── assets/
│   ├── css/
│   │   ├── style.css          # 样式文件（CSS 变量 + 响应式 + 双主题）
│   │   └── icons.css          # 自托管 SVG 图标（替代 Font Awesome CDN）
│   ├── js/
│   │   ├── i18n.js            # 国际化词典 & 主题切换
│   │   └── main.js            # 交互脚本（菜单/滚动/动效/FAQ/表单校验）
│   └── images/
│       ├── og-image.svg       # 社交分享图（1200×630）
│       └── favicon.svg        # 浏览器标签页图标
├── services/
│   └── index.html             # 服务详情页
├── cases/
│   └── index.html             # 案例详情页
├── blog/
│   └── index.html             # 博客列表页（分页）
├── index.html                 # 主页
├── 404.html                   # 自定义 404 页面
├── robots.txt                 # 搜索引擎爬虫规则
├── CNAME                      # 自定义域名配置
└── README.md
```

## 🚀 本地运行

```bash
cd personal-business-website

# 安装依赖
bundle install

# 启动本地服务器（自动热更新）
bundle exec jekyll serve

# 浏览器访问
open http://localhost:4000
```

## 🌐 部署到 GitHub Pages

直接 push 到 `main` 分支即可。GitHub Pages 会自动使用 Jekyll 构建站点。

```bash
cd personal-business-website
git add .
git commit -m "Update site"
git push origin main
```

**绑定自定义域名**：编辑 `CNAME` 文件写入域名，在 DNS 服务商添加 CNAME 记录指向 `<username>.github.io`。

## 📋 页面结构

| 页面 | URL | 内容 |
|------|-----|------|
| 主页 | `/` | Hero、关于我、服务项目、服务流程、典型案例、技术栈、客户评价、FAQ、联系方式 |
| 服务详情 | `/services/` | 6 大服务领域详细说明（范围、交付物、方法论） |
| 案例详情 | `/cases/` | 3 个行业案例深度解读（背景、方案、成果） |
| 博客列表 | `/blog/` | 技术文章列表，支持分页 |
| 博客文章 | `/blog/:year/:month/:title/` | 单篇文章（Markdown 渲染） |
| 404 | `/404.html` | 自定义 404 页面 |

## 🛠 自定义修改

| 修改项 | 位置 |
|--------|------|
| 品牌名称 | 搜索所有文件中的 "MarsX" |
| 联系方式 | `_includes/contact.html` |
| 服务内容 | `_includes/services.html` + `services/index.html` |
| 项目案例 | `_includes/cases.html` + `cases/index.html` |
| FAQ 内容 | `_includes/faq.html` + `assets/js/i18n.js` |
| 技术栈标签 | `_includes/tech-stack.html` |
| 配色方案 | `assets/css/style.css` 的 `:root` 变量 |
| 翻译文本 | `assets/js/i18n.js` 的 `DICT` 对象 |
| 结构化数据 | `_includes/structured-data.html` |
| 社交分享图 | `assets/images/og-image.svg` |

## 📝 添加博客文章

在 `_posts/` 目录下创建 Markdown 文件，文件名格式：`YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: 文章标题
date: 2026-08-15
categories: [分类1, 分类2]
description: 文章摘要（用于 SEO）
---

文章内容（Markdown 格式）...
```

push 后 GitHub Pages 会自动构建并发布。

## 📄 许可

MIT License
