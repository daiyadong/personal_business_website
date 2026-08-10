# CyGuard — 专业网络安全服务官网

> APP安全评估 · Web渗透测试 · IoT安全 · 云安全 · AI安全 · GDPR/CRA合规

现代化个人网络安全业务官网，展示安全服务能力、典型案例与联系方式。

## ✨ 特点

- 🛡️ 网络安全主题设计，暗色系 + 终端绿配色
- 📱 完全响应式，适配手机、平板与桌面端
- ⚡ 纯静态 HTML/CSS/JS，加载速度快
- 🔍 SEO 友好，支持 Open Graph 标签
- 🎭 滚动渐显动画与交互效果
- 📬 内置联系表单（含服务类型选择）
- 🔐 PGP 密钥展示，强调通信安全
- ♿ 键盘无障碍访问支持

## 📂 项目结构

```
personal-business-website/
├── index.html            # 主页面
├── css/
│   └── style.css         # 样式文件
├── js/
│   └── main.js           # 交互脚本
├── CNAME                 # 自定义域名配置
└── README.md             # 项目说明
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
git commit -m "Initial commit: CyGuard security website"
git branch -M main
git remote add origin https://github.com/<你的用户名>/personal-business-website.git
git push -u origin main
```

然后在仓库 Settings → Pages → 选择 `main` 分支 → Save。

**绑定自定义域名**：编辑 `CNAME` 文件写入域名，在 DNS 服务商添加 CNAME 记录指向 `<username>.github.io`。

## 🛠 自定义修改

| 修改项 | 位置 |
|--------|------|
| 姓名/品牌 | `index.html` 中搜索 "CyGuard" |
| 认证标识 | Hero 区域的 `.hero__badge` |
| 联系方式 | Contact 区域的邮箱/电话 |
| PGP 指纹 | `.contact__pgp` 中的 `code` |
| 服务内容 | Services 区域的 6 张卡片 |
| 项目案例 | Cases 区域的案例卡片 |
| 配色方案 | `css/style.css` 的 `:root` 变量 |
| 社交链接 | `.contact__social` |

## 📄 许可

MIT License
