# MarsX — 全链路安全方案咨询

> APP安全评估 · Web渗透测试 · IoT安全 · 云安全 · AI安全 · GDPR/CRA合规

现代化个人安全咨询业务官网，展示安全服务能力、典型案例与联系方式。

## ✨ 特点

- 🛡️ 网络安全主题设计，全页面深色/浅色双主题（默认深色），页脚等所有区域均适配
- 🌐 中英文双语切换，默认中文
- 📱 完全响应式，适配手机（480px）、平板（768px/1024px）与桌面端（1400px+）
- ⚡ 纯静态 HTML/CSS/JS，零框架依赖，加载速度快
- 🔍 SEO 友好，支持 Open Graph 标签
- 🎭 滚动渐显动画与技能条动效
- 📬 内置联系表单（含服务类型选择），一键唤起邮件客户端
- ♿ 键盘无障碍访问支持（Escape 关闭菜单）

## 📂 项目结构

```
personal-business-website/
├── index.html            # 主页面
├── css/
│   └── style.css         # 样式文件（CSS 变量 + 响应式断点 + 双主题）
├── js/
│   ├── i18n.js           # 国际化词典 & 主题切换
│   └── main.js           # 交互脚本（菜单/滚动/动效/表单）
├── CNAME                 # 自定义域名配置
└── README.md
```

## 🚀 本地运行

```bash
cd personal-business-website

# Python 3
python3 -m http.server 8080

# 浏览器访问
open http://localhost:8080
```

或者直接在浏览器中打开 `index.html`。

## 🌐 部署到 GitHub Pages

```bash
cd personal-business-website
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin git@github.com:<你的用户名>/personal-business-website.git
git push -u origin main
```

然后在仓库 Settings → Pages → 选择 `main` 分支 → Save。

**绑定自定义域名**：编辑 `CNAME` 文件写入域名，在 DNS 服务商添加 CNAME 记录指向 `<username>.github.io`。

## 🛠 自定义修改

| 修改项 | 位置 |
|--------|------|
| 品牌名称 | `index.html` 中搜索 "MarsX" |
| 认证标识 | Hero 区域的 `.hero__badge` |
| 联系方式 | Contact 区域的邮箱/微信号 |
| 服务内容 | Services 区域的 6 张卡片 |
| 项目案例 | Cases 区域的案例卡片 |
| 配色方案 | `css/style.css` 的 `:root` 变量 |
| 翻译文本 | `js/i18n.js` 的 `DICT` 对象 |
| 主题切换 | `js/i18n.js` 的 `switchTheme` 函数 |

## 📄 许可

MIT License
