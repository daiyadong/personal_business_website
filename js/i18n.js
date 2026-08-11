/* ============================================================
   MarsX — i18n Translation Dictionary & Theme Toggle
   ============================================================ */
(function () {
    'use strict';

    // ============================================================
    // THEME
    // ============================================================
    let THEME = 'dark';

    function switchTheme(theme) {
        THEME = theme;
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('marsx-theme', theme); } catch (e) {}
    }

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            switchTheme(THEME === 'dark' ? 'light' : 'dark');
        });
    }

    let savedTheme = 'dark';
    try { savedTheme = localStorage.getItem('marsx-theme') || 'dark'; } catch (e) {}
    switchTheme(savedTheme);

    // ============================================================
    // I18N DICTIONARY
    // ============================================================
    let LANG = 'zh';

    const DICT = {
        'nav.home':       { zh: '首页',           en: 'Home' },
        'nav.about':      { zh: '关于我',         en: 'About' },
        'nav.services':   { zh: '服务项目',       en: 'Services' },
        'nav.cases':      { zh: '典型案例',       en: 'Case Studies' },
        'nav.process':    { zh: '服务流程',       en: 'Process' },
        'nav.faq':        { zh: '常见问题',       en: 'FAQ' },
        'nav.contact':    { zh: '联系方式',       en: 'Contact' },
        'meta.title':     { zh: 'MarsX — 全链路安全方案咨询 | 产品安全架构 · SDL · 合规', en: 'MarsX — Full-Chain Security Consulting | Product Security · SDL · Compliance' },
        'meta.desc':      { zh: 'MarsX 全链路安全方案咨询 — 20年经验安全顾问，提供产品安全架构设计、SDL体系建设、安全评估、合规治理，覆盖APP/Web/IoT/云/AI安全及GDPR/CRA/等保合规。', en: 'MarsX Full-Chain Security Consulting — 20-year veteran security consultant. Product security architecture, SDL system development, security assessment & compliance governance across APP/Web/IoT/Cloud/AI and GDPR/CRA.' },
        'meta.ogtitle':   { zh: 'MarsX — 全链路安全方案咨询 | 产品安全架构 · SDL · 合规', en: 'MarsX — Full-Chain Security Consulting | Product Security · SDL · Compliance' },
        'meta.ogdesc':    { zh: '全链路安全方案咨询 — 从架构设计到合规落地的产品安全伙伴。覆盖APP/Web/IoT/云/AI安全及GDPR/CRA合规。', en: 'Full-Chain Security Consulting — your partner from architecture to compliance. Covering APP/Web/IoT/Cloud/AI security and GDPR/CRA compliance.' },
        'hero.badge':     { zh: '产品全生命周期安全咨询', en: 'Full Lifecycle Product Security Consulting' },
        'hero.title':     { zh: '守护数字资产<br>抵御安全威胁', en: 'Protect Digital Assets<br>Defend Against Threats' },
        'hero.subtitle':  { zh: '全链路安全方案咨询 — 从架构设计到合规落地的产品安全伙伴', en: 'Full-Chain Security Consulting — Your Product Security Partner from Architecture to Compliance' },
        'hero.desc':      { zh: '20 年软件开发经验，16 年安全相关从业经验，职业生涯横跨头部安全厂商、央企集团、出海消费电子与新能源科技企业。专注于为智能硬件产品公司提供贯穿产品全生命周期的安全方案咨询——从架构设计、威胁建模、安全开发到合规落地，帮助 60+ 企业构建体系化的安全防护能力。', en: '20 years of software development experience and 16 years in security, with a career spanning leading security vendors, state-owned enterprises, global consumer electronics, and new energy tech companies. Specializing in full-lifecycle security consulting for smart hardware companies — from architecture design, threat modeling, and secure development to compliance implementation, helping 60+ enterprises build systematic security defense capabilities.' },
        'hero.cta1':      { zh: '咨询安全方案',   en: 'Consult Security Solutions' },
        'hero.cta2':      { zh: '了解服务详情',   en: 'Explore Services' },
        'hero.stat1':     { zh: '服务企业',       en: 'Enterprises Served' },
        'hero.stat2':     { zh: '安全咨询项目',   en: 'Security Projects' },
        'hero.stat3':     { zh: '年开发经验',     en: 'Years Dev Experience' },
        'hero.stat4':     { zh: '年安全经验',     en: 'Years Security Experience' },
        'about.title':    { zh: '关于我',         en: 'About Me' },
        'about.subtitle': { zh: '以安全架构思维，助力企业构建可信产品', en: 'Empowering Enterprises to Build Trustworthy Products with a Security Architecture Mindset' },
        'about.heading':  { zh: '产品全生命周期的安全伙伴', en: 'Your Full-Lifecycle Product Security Partner' },
        'about.p1':       { zh: '我是一名拥有 20 年软件开发经验、16 年安全从业经验的安全顾问。职业生涯横跨头部安全厂商、央企集团、出海消费电子与新能源科技企业，兼具乙方安全产品研发与甲方安全体系建设双重视角。主导过 60+ 个安全咨询项目，覆盖移动应用、Web 系统、IoT 设备、云基础设施与 AI 应用等多个领域。', en: 'I am a security consultant with 20 years of software development experience and 16 years in security. My career spans leading security vendors, state-owned enterprises, global consumer electronics, and new energy technology companies — giving me the dual perspective of both security product R&D and enterprise security system building. I have led 60+ security consulting projects covering mobile applications, web systems, IoT devices, cloud infrastructure, and AI applications.' },
        'about.p2':       { zh: '我的核心理念是将安全能力嵌入产品基因——从需求分析阶段介入，通过威胁建模、安全架构设计、开发安全规范、测试验证到上线后的持续运营，帮助企业构建完整的安全开发生命周期（SDL）体系，在满足等保、GDPR、CRA 等合规要求的同时，打造真正安全可信的产品。', en: 'My core philosophy is embedding security into the DNA of products — engaging from the requirements phase, through threat modeling, security architecture design, secure development standards, testing and validation, to post-launch operations. I help enterprises build complete Secure Development Lifecycle (SDL) systems that meet compliance requirements such as GDPR and CRA while delivering truly secure and trustworthy products.' },
        'about.p3':       { zh: '具备全栈安全能力——从 Linux 内核模块开发、硬件可信安全（TPM/TrustZone），到移动端 APP 加固、应用层 WAF/网关开发，再到云原生 K8s 安全与 DevSecOps 流水线建设，均有实际项目落地经验。曾从零构建 SIEM 安全日志分析平台、云 WAF 集群及一体化终端安全产品，兼具安全产品自研能力与第三方安全方案集成经验。', en: 'Full-stack security capability — from Linux kernel module development and hardware trusted security (TPM/TrustZone), to mobile APP hardening, application-layer WAF/gateway development, and cloud-native Kubernetes security with DevSecOps pipeline construction — all backed by hands-on project delivery experience. I have built a SIEM security log analysis platform, a cloud WAF cluster, and an integrated endpoint security product from scratch, combining in-house security product development with third-party solution integration expertise.' },
        'about.edu_title':    { zh: '教育背景',          en: 'Education' },
        'about.edu_desc':     { zh: '985 高校网络安全专业硕士 / 计算机科学与技术本科', en: 'M.S. in Cybersecurity (Project 985) / B.S. in Computer Science' },
        'about.cert_title':   { zh: '专业认证',          en: 'Certification' },
        'about.cert_desc':    { zh: 'RHCE 红帽认证工程师', en: 'RHCE — Red Hat Certified Engineer' },
        'about.hl1_title':   { zh: '安全架构设计',       en: 'Security Architecture Design' },
        'about.hl1_desc':    { zh: '从需求到上线，全生命周期安全架构规划与评审', en: 'Full-lifecycle security architecture planning and review, from requirements to launch' },
        'about.hl2_title':   { zh: 'SDL 体系建设',        en: 'SDL System Development' },
        'about.hl2_desc':    { zh: '安全开发生命周期落地，将安全嵌入研发流程', en: 'Implementing Secure Development Lifecycle, embedding security into the R&D process' },
        'about.hl3_title':   { zh: '合规 & 治理',         en: 'Compliance & Governance' },
        'about.hl3_desc':    { zh: '等保 / GDPR / CRA / ISO 27001 合规方案与持续治理', en: 'China Classified Protection / GDPR / CRA / ISO 27001 compliance & governance' },
        'about.skills_heading': { zh: '咨询能力矩阵',     en: 'Consulting Competency Matrix' },
        'about.skill1':      { zh: '安全架构 & 威胁建模',    en: 'Security Architecture & Threat Modeling' },
        'about.skill2':      { zh: 'SDL / DevSecOps 体系', en: 'SDL / DevSecOps Systems' },
        'about.skill3':      { zh: '云原生安全方案',        en: 'Cloud-Native Security Solutions' },
        'about.skill4':      { zh: 'IoT / 嵌入式安全方案',  en: 'IoT / Embedded Security Solutions' },
        'about.skill5':      { zh: 'AI / LLM 安全治理',    en: 'AI / LLM Security Governance' },
        'about.skill6':      { zh: '合规 & 隐私方案',       en: 'Compliance & Privacy Solutions' },
        'services.title':    { zh: '服务项目',          en: 'Services' },
        'services.subtitle': { zh: '贯穿产品全生命周期的安全方案咨询', en: 'Full-Lifecycle Product Security Consulting' },
        'srv1.title':   { zh: 'APP 安全评估',          en: 'Mobile App Security Assessment' },
        'srv1.desc':    { zh: '针对 Android / iOS 应用进行深度安全测试，覆盖客户端、通信层及服务端全链路。', en: 'In-depth security testing for Android / iOS applications, covering the full chain across client, communication, and server layers.' },
        'srv1.li1':     { zh: 'APK/IPA 逆向分析与代码审计', en: 'APK/IPA reverse engineering & code audit' },
        'srv1.li2':     { zh: '运行时注入、Hook 检测',     en: 'Runtime injection & hook detection' },
        'srv1.li3':     { zh: '数据存储与传输加密评估',    en: 'Data storage & transmission encryption assessment' },
        'srv1.li4':     { zh: 'API 接口安全 & 越权测试',  en: 'API security & privilege escalation testing' },
        'srv1.li5':     { zh: '推送 / 第三方 SDK 安全审计', en: 'Push notification & third-party SDK security audit' },
        'srv2.title':   { zh: '网站及后端系统安全评估',  en: 'Web & Backend Security Assessment' },
        'srv2.desc':    { zh: 'Web 应用 / API / 后端服务的全方位渗透测试与安全审计。', en: 'Comprehensive penetration testing and security auditing for web applications, APIs, and backend services.' },
        'srv2.li1':     { zh: 'OWASP Top 10 全覆盖测试',  en: 'Full OWASP Top 10 coverage testing' },
        'srv2.li2':     { zh: 'API 安全 (REST/GraphQL/gRPC)', en: 'API security (REST/GraphQL/gRPC)' },
        'srv2.li3':     { zh: '业务逻辑漏洞深度挖掘',     en: 'Business logic vulnerability deep discovery' },
        'srv2.li4':     { zh: '数据库 & 中间件安全审计',  en: 'Database & middleware security audit' },
        'srv2.li5':     { zh: '认证鉴权体系安全评估',    en: 'Authentication & authorization system assessment' },
        'srv3.title':   { zh: 'IoT 安全',               en: 'IoT Security' },
        'srv3.desc':    { zh: '智能硬件 / 物联网设备的固件、通信协议与云端平台安全评估。', en: 'Security assessment of smart hardware / IoT device firmware, communication protocols, and cloud platforms.' },
        'srv3.li1':     { zh: '固件提取与逆向分析',      en: 'Firmware extraction & reverse engineering' },
        'srv3.li2':     { zh: '硬件接口安全 (UART/JTAG/SPI)', en: 'Hardware interface security (UART/JTAG/SPI)' },
        'srv3.li3':     { zh: '无线协议安全 (BLE/ZigBee/Wi-Fi)', en: 'Wireless protocol security (BLE/ZigBee/Wi-Fi)' },
        'srv3.li4':     { zh: 'MQTT/CoAP 通信安全',     en: 'MQTT/CoAP communication security' },
        'srv3.li5':     { zh: 'IoT 云平台安全评估',      en: 'IoT cloud platform security assessment' },
        'srv4.title':   { zh: '云安全',                 en: 'Cloud Security' },
        'srv4.desc':    { zh: '多云环境 (AWS / Azure / 阿里云) 的基础设施安全评估与加固方案。', en: 'Multi-cloud (AWS / Azure / Alibaba Cloud) infrastructure security assessment and hardening.' },
        'srv4.li1':     { zh: '云资源配置审计 (CSPM)',    en: 'Cloud security posture management (CSPM)' },
        'srv4.li2':     { zh: 'IAM 权限 & 访问控制评估',  en: 'IAM permissions & access control assessment' },
        'srv4.li3':     { zh: '容器 & K8s 集群安全',     en: 'Container & Kubernetes cluster security' },
        'srv4.li4':     { zh: 'Serverless 函数安全',     en: 'Serverless function security' },
        'srv4.li5':     { zh: '云上数据存储与日志审计',   en: 'Cloud data storage & log auditing' },
        'srv5.title':   { zh: 'AI 安全',                en: 'AI Security' },
        'srv5.desc':    { zh: 'LLM / AI 应用的安全评估，覆盖模型、数据与推理全生命周期。', en: 'Security assessment for LLM / AI applications, covering the full lifecycle of models, data, and inference.' },
        'srv5.li1':     { zh: 'Prompt Injection 对抗测试', en: 'Prompt injection adversarial testing' },
        'srv5.li2':     { zh: '模型投毒 & 后门检测',      en: 'Model poisoning & backdoor detection' },
        'srv5.li3':     { zh: '训练数据隐私与泄露评估',   en: 'Training data privacy & leakage assessment' },
        'srv5.li4':     { zh: 'RAG 系统安全审计',        en: 'RAG system security audit' },
        'srv5.li5':     { zh: 'AI Agent / Tool Call 安全', en: 'AI Agent / Tool Call security' },
        'srv6.title':   { zh: 'GDPR / CRA 合规',        en: 'GDPR / CRA Compliance' },
        'srv6.desc':    { zh: '欧洲及全球隐私法规的合规咨询、差距分析与整改指导。', en: 'European and global privacy regulation compliance consulting, gap analysis, and remediation guidance.' },
        'srv6.li1':     { zh: 'GDPR 数据保护合规评估',   en: 'GDPR data protection compliance assessment' },
        'srv6.li2':     { zh: 'CRA (网络韧性法案) 差距分析', en: 'CRA (Cyber Resilience Act) gap analysis' },
        'srv6.li3':     { zh: '隐私影响评估 (DPIA)',     en: 'Data Protection Impact Assessment (DPIA)' },
        'srv6.li4':     { zh: '数据跨境传输合规方案',    en: 'Cross-border data transfer compliance solutions' },
        'srv6.li5':     { zh: 'ISO 27001 / 等保 2.0 认证辅助', en: 'ISO 27001 certification support' },
        'cases.title':     { zh: '典型案例',           en: 'Case Studies' },
        'cases.subtitle':  { zh: '部分安全咨询项目成果展示', en: 'Selected Security Consulting Project Outcomes' },
        'case1.tag':       { zh: '金融行业',           en: 'Financial Services' },
        'case1.title':     { zh: '某商业银行 APP 全链路安全咨询', en: 'Full-Chain Security Consulting for a Commercial Banking App' },
        'case1.stat1':     { zh: 'SDL体系 从0到1搭建',  en: 'SDL built from scratch' },
        'case1.stat2':     { zh: '1000万+ 用户数据受保护', en: '10M+ user data protected' },
        'case1.desc':      { zh: '为手机银行 APP 提供完整的 SDL 安全方案：从安全架构设计、威胁建模、代码审计、测试规范制定到上线后持续运营，帮助客户建立体系化安全能力并通过银监会审查。', en: 'Delivered a complete SDL security solution for a mobile banking app: from security architecture design, threat modeling, code auditing, and test specification development to post-launch ongoing operations, helping the client establish systematic security capabilities and pass regulatory review.' },
        'case1.tech1':     { zh: '安全架构',           en: 'Security Architecture' },
        'case1.tech2':     { zh: '威胁建模',           en: 'Threat Modeling' },
        'case1.tech3':     { zh: 'SDL流程',            en: 'SDL Process' },
        'case1.tech4':     { zh: '合规审计',           en: 'Compliance Audit' },
        'case2.tag':       { zh: '医疗健康',           en: 'Healthcare' },
        'case2.title':     { zh: '某互联网医疗平台安全合规方案', en: 'Security & Compliance Solution for an Online Healthcare Platform' },
        'case2.stat1':     { zh: 'HIPAA/GDPR 双合规',  en: 'HIPAA & GDPR compliant' },
        'case2.stat2':     { zh: '零 数据泄露事故',    en: 'Zero data breaches' },
        'case2.desc':      { zh: '为在线问诊 SaaS 平台提供端到端安全合规方案：隐私数据保护体系设计、电子处方安全传输方案、第三方 SDK 安全治理及 HIPAA/GDPR 合规咨询，确保平台安全合规运营。', en: 'Provided an end-to-end security and compliance solution for an online consultation SaaS platform: privacy data protection system design, secure e-prescription transmission, third-party SDK security governance, and HIPAA/GDPR compliance consulting, ensuring secure and compliant operations.' },
        'case2.tech1':     { zh: '隐私方案',           en: 'Privacy Solution' },
        'case2.tech2':     { zh: '合规咨询',           en: 'Compliance Consulting' },
        'case2.tech3':     { zh: 'SDK治理',            en: 'SDK Governance' },
        'case2.tech4':     { zh: '安全运营',           en: 'Security Operations' },
        'case3.tag':       { zh: 'IoT/智能硬件',       en: 'IoT / Smart Hardware' },
        'case3.title':     { zh: '某智能家居 IoT 全链路安全方案', en: 'Full-Chain IoT Security Solution for a Smart Home Company' },
        'case3.stat1':     { zh: '4 产品线全覆盖',      en: '4 product lines covered' },
        'case3.stat2':     { zh: '安全体系 从0构建',    en: 'Security system built from scratch' },
        'case3.desc':      { zh: '为智能门锁、摄像头及网关设备提供完整 IoT 全链路安全方案：配套 APP 逆向加固与安全测试、硬件安全设计、固件安全架构、蓝牙/WiFi 通信加密、云平台安全体系，覆盖"端-管-云"全链路，帮助创业团队在研发早期即构建起安全能力。', en: 'Delivered a complete IoT full-chain security solution for smart locks, cameras, and gateway devices: companion app reverse engineering & hardening, hardware security design, firmware security architecture, BLE/Wi-Fi communication encryption, and cloud platform security — covering the full "device-pipe-cloud" chain, helping the startup team build security capabilities early in development.' },
        'case3.tech1':     { zh: 'APP加固',            en: 'App Hardening' },
        'case3.tech2':     { zh: '通信加密',           en: 'Communication Encryption' },
        'case3.tech3':     { zh: '固件方案',           en: 'Firmware Solution' },
        'case3.tech4':     { zh: '云安全设计',         en: 'Cloud Security Design' },
        'testimonials.title':    { zh: '客户评价',     en: 'Client Testimonials' },
        'testimonials.subtitle': { zh: '来自合作伙伴的真实反馈', en: 'Authentic Feedback from Our Partners' },
        'testimonial1.text':     { zh: '“非常专业的安全顾问！帮我们从零搭建了完整的 SDL 体系和产品安全架构，让我们在监管审查和客户审计中都能从容应对。”', en: '“An extremely professional security consultant! They helped us build a complete SDL system and product security architecture from scratch, enabling us to confidently handle regulatory reviews and client audits.”' },
        'testimonial1.author':   { zh: '张总 — 某金融科技公司 CISO', en: 'Mr. Zhang — CISO, FinTech Company' },
        'testimonial2.text':     { zh: '“在 GDPR 合规方面帮了我们大忙。不仅快速完成了差距分析，还手把手指导我们的技术团队完成了整改。”', en: '“They were a tremendous help with GDPR compliance. Not only did they quickly complete the gap analysis, but they also guided our technical team step by step through the remediation.”' },
        'testimonial2.author':   { zh: '李总 — 某跨境电商平台 CTO', en: 'Mr. Li — CTO, Cross-Border E-Commerce Platform' },
        'testimonial3.text':     { zh: '“IoT 安全方案非常全面——从硬件设计、固件架构到云平台全覆盖。方案专业度很高，直接拿来给投资人展示了我们的安全能力。”', en: '“The IoT security solution was incredibly comprehensive — covering everything from hardware design and firmware architecture to cloud platforms. The quality was so high we used it directly in our investor presentations to showcase our security capabilities.”' },
        'testimonial3.author':   { zh: '王总 — 某智能硬件创业公司 CEO', en: 'Mr. Wang — CEO, Smart Hardware Startup' },
        'contact.title':     { zh: '联系方式',          en: 'Contact' },
        'contact.subtitle':  { zh: '需要全链路安全方案咨询？欢迎随时联系', en: 'Need Full-Chain Security Consulting? Feel Free to Reach Out' },
        'contact.heading':   { zh: '联系信息',          en: 'Contact Information' },
        'contact.desc':      { zh: '无论是安全架构设计、SDL 体系建设、合规方案还是安全治理咨询，都可以通过以下方式联系我。所有沟通内容严格保密。', en: 'Whether it\'s security architecture design, SDL system development, compliance solutions, or security governance consulting, you can reach me through the following channels. All communications are kept strictly confidential.' },
        'contact.email_label':   { zh: '邮箱',          en: 'Email' },
        'contact.wechat_label':  { zh: '微信',          en: 'WeChat' },
        'contact.location_label':{ zh: '所在地',        en: 'Location' },
        'contact.location_value':{ zh: '中国 · 深圳',   en: 'Shenzhen, China' },
        'form.name_label':       { zh: '姓名',          en: 'Name' },
        'form.name_placeholder': { zh: '请输入您的姓名', en: 'Enter your name' },
        'form.email_label':      { zh: '邮箱',          en: 'Email' },
        'form.email_placeholder':{ zh: '请输入您的邮箱地址', en: 'Enter your email address' },
        'form.service_label':    { zh: '感兴趣的服务',   en: 'Service of Interest' },
        'form.service_default':  { zh: '请选择...',     en: 'Select...' },
        'form.service_opt1':     { zh: 'APP 安全评估',  en: 'Mobile App Security Assessment' },
        'form.service_opt2':     { zh: '网站及后端系统安全评估', en: 'Web & Backend Security Assessment' },
        'form.service_opt3':     { zh: 'IoT 安全',      en: 'IoT Security' },
        'form.service_opt4':     { zh: '云安全',        en: 'Cloud Security' },
        'form.service_opt5':     { zh: 'AI 安全',       en: 'AI Security' },
        'form.service_opt6':     { zh: 'GDPR / CRA 合规', en: 'GDPR / CRA Compliance' },
        'form.service_opt7':     { zh: '其他 / 综合',   en: 'Other / Comprehensive' },
        'form.message_label':    { zh: '需求描述',      en: 'Requirements Description' },
        'form.message_placeholder': { zh: '请描述您的安全需求、目标范围等...', en: 'Describe your security needs, objectives, scope, etc.' },
        'form.submit':           { zh: '发送消息',      en: 'Send Message' },
        'form.note':             { zh: '所有信息将严格保密，不会与第三方共享', en: 'All information is kept strictly confidential and will not be shared with third parties' },
        'form.success':          { zh: '已打开邮件客户端', en: 'Email client opened' },
        'form.email_required':  { zh: '请输入邮箱地址', en: 'Please enter your email address' },
        'form.email_invalid':   { zh: '请输入有效的邮箱地址', en: 'Please enter a valid email address' },
        'form.email_subject':   { zh: 'MarsX 安全咨询', en: 'MarsX Security Consulting' },
        'form.email_name':      { zh: '姓名', en: 'Name' },
        'form.email_email':     { zh: '邮箱', en: 'Email' },
        'form.email_service':   { zh: '感兴趣的服务', en: 'Service of Interest' },
        'form.email_message':   { zh: '需求描述', en: 'Requirements' },
        'form.email_footer':    { zh: '此邮件通过 MarsX 网站联系表单发送', en: 'This email was sent via the MarsX website contact form' },
        // ------- 服务流程 ------- //
        'process.title':        { zh: '服务流程',       en: 'Process & Methodology' },
        'process.subtitle':     { zh: '系统化方法论，确保每个环节可落地、可验证', en: 'A Systematic Methodology — Every Step Deliverable and Verifiable' },
        'process.step1.title':  { zh: '需求沟通',       en: 'Requirements' },
        'process.step1.desc':   { zh: '了解业务场景与产品形态，梳理安全需求、合规要求与目标范围，明确项目边界与交付标准。', en: 'Understand business context and product landscape, clarify security needs, compliance requirements, and project scope with well-defined deliverables.' },
        'process.step2.title':  { zh: '差距分析',       en: 'Gap Analysis' },
        'process.step2.desc':   { zh: '对现有系统架构、开发流程、安全控制措施进行全面评估，识别安全薄弱环节与合规差距。', en: 'Conduct a comprehensive assessment of existing system architecture, development processes, and security controls to identify vulnerabilities and compliance gaps.' },
        'process.step3.title':  { zh: '方案设计',       en: 'Solution Design' },
        'process.step3.desc':   { zh: '定制化安全架构方案与落地路线图，输出威胁模型、安全规范、技术选型与实施计划。', en: 'Deliver a tailored security architecture and implementation roadmap, including threat models, security standards, technology selection, and execution plans.' },
        'process.step4.title':  { zh: '落地实施',       en: 'Implementation' },
        'process.step4.desc':   { zh: 'SDL 流程嵌入研发体系，安全编码规范落地，自动化安全测试集成，团队安全能力赋能培训。', en: 'Embed SDL processes into the development lifecycle, implement secure coding standards, integrate automated security testing, and upskill teams through hands-on enablement.' },
        'process.step5.title':  { zh: '持续运营',       en: 'Continuous Operations' },
        'process.step5.desc':   { zh: '定期安全复评与渗透测试，安全监控与应急响应体系优化，合规跟踪与持续改进迭代。', en: 'Regular security reassessments and penetration testing, security monitoring and incident response optimization, ongoing compliance tracking, and continuous improvement.' },
        // ------- 技术栈 ------- //
        'tech.title':           { zh: '技术栈与工具链',   en: 'Tech Stack & Toolchain' },
        'tech.subtitle':        { zh: '覆盖安全测试、云基础设施、DevSecOps 与合规治理四大领域', en: 'Covering Security Testing, Cloud Infrastructure, DevSecOps, and Compliance & Governance' },
        'tech.cat1.title':      { zh: '安全测试',         en: 'Security Testing' },
        'tech.cat2.title':      { zh: '云与基础设施',     en: 'Cloud & Infrastructure' },
        'tech.cat3.title':      { zh: 'DevSecOps',        en: 'DevSecOps' },
        'tech.cat4.title':      { zh: '合规与治理',       en: 'Compliance & Governance' },
        // ------- FAQ ------- //
        'faq.title':        { zh: '常见问题',           en: 'Frequently Asked Questions' },
        'faq.subtitle':     { zh: '关于安全咨询的常见疑问，这里为你解答', en: 'Common Questions About Security Consulting, Answered Here' },
        'faq.q1.q':         { zh: '安全咨询与渗透测试有什么区别？', en: 'What is the difference between security consulting and penetration testing?' },
        'faq.q1.a':         { zh: '渗透测试是在特定时间点对系统进行攻击模拟，发现已存在的安全漏洞；而安全咨询贯穿产品全生命周期——从架构设计阶段就介入，通过威胁建模、安全开发规范、SDL 体系建设等手段，帮助企业从根源上构建安全能力，避免漏洞的产生。两者互补，但咨询更注重体系化与预防性。', en: 'Penetration testing simulates attacks at a specific point in time to find existing vulnerabilities. Security consulting, by contrast, spans the full product lifecycle — engaging from the architecture design phase through threat modeling, secure development standards, and SDL system development to build security capabilities from the ground up and prevent vulnerabilities before they occur. The two are complementary, but consulting focuses more on systemic prevention.' },
        'faq.q2.q':         { zh: '产品尚在开发阶段，是否需要安全咨询？', en: 'Does my product need security consulting if it is still in development?' },
        'faq.q2.a':         { zh: '恰恰相反，越早介入越好。在产品设计阶段引入安全架构评审和威胁建模，成本远低于上线后修复漏洞。我建议在需求分析阶段就开始安全咨询——这也是 SDL（安全开发生命周期）的核心理念：安全左移。', en: 'On the contrary — the earlier, the better. Introducing security architecture review and threat modeling during the design phase costs far less than fixing vulnerabilities post-launch. I recommend starting security consulting during the requirements phase — this is the core principle of SDL (Secure Development Lifecycle): shifting security left.' },
        'faq.q3.q':         { zh: '一个典型的安全咨询项目周期是多久？', en: 'How long does a typical security consulting project take?' },
        'faq.q3.a':         { zh: '取决于项目范围。轻量级的安全架构评审通常 2-4 周；完整的 SDL 体系建设一般 2-4 个月；持续的合规治理与安全运营支持可按季度或年度合作。每个项目我都会根据实际情况定制时间规划。', en: 'It depends on the project scope. A lightweight security architecture review typically takes 2-4 weeks. A complete SDL system build-out generally takes 2-4 months. Ongoing compliance governance and security operations support can be structured on a quarterly or annual basis. I customize the timeline for every project based on actual needs.' },
        'faq.q4.q':         { zh: '你们服务哪些行业？', en: 'Which industries do you serve?' },
        'faq.q4.a':         { zh: '我服务过的客户覆盖金融科技、医疗健康、跨境电商、智能硬件/IoT、新能源与 SaaS 等多个行业。不同行业的安全关注点各有侧重——例如金融侧重交易安全与监管合规，IoT 侧重硬件-通信-云全链路安全——我会根据行业特点定制方案。', en: 'I have served clients across fintech, healthcare, cross-border e-commerce, smart hardware/IoT, new energy, and SaaS industries. Each industry has its own security focus — for example, financial services emphasize transaction security and regulatory compliance, while IoT focuses on hardware-to-cloud full-chain security. I tailor solutions to industry-specific requirements.' },
        'faq.q5.q':         { zh: '如何确保我们的数据不被泄露？', en: 'How do you ensure our data is not compromised?' },
        'faq.q5.a':         { zh: '所有项目启动前签署 NDA（保密协议），咨询过程中采用最小权限原则——仅获取必要的系统信息。项目交付后，可根据客户要求删除相关数据。保护客户隐私与商业机密是安全顾问的基本职业操守。', en: 'An NDA (Non-Disclosure Agreement) is signed before every project begins. During consulting, I follow the principle of least privilege — only accessing the minimum system information necessary. After project delivery, all related data can be purged at the client\'s request. Protecting client privacy and trade secrets is a fundamental professional obligation for any security consultant.' },
        'faq.q6.q':         { zh: '安全咨询费用如何计算？', en: 'How is security consulting priced?' },
        'faq.q6.a':         { zh: '费用根据项目范围、复杂度与周期综合评估。常见模式包括：固定项目报价（适合明确范围的项目）、按人天计费（适合灵活需求）和长期顾问模式（按月/季度）。欢迎通过联系方式沟通具体需求，我会提供免费初步评估与报价方案。', en: 'Pricing is based on project scope, complexity, and duration. Common models include fixed-price projects (best for well-defined scopes), daily rates (best for flexible needs), and long-term retainer arrangements (monthly/quarterly). Feel free to reach out via the contact form — I provide a free initial assessment and proposal.' },
        // ------- Footer ------- //
        'footer.brand_desc': { zh: '全链路安全方案咨询 — 架构设计 · SDL体系 · 合规治理 · 产品安全', en: 'Full-Chain Security Consulting — Architecture · SDL · Compliance · Product Security' },
        'footer.nav_heading':{ zh: '快速导航',          en: 'Quick Navigation' },
        'footer.nav1':       { zh: '首页',              en: 'Home' },
        'footer.nav2':       { zh: '关于我',            en: 'About' },
        'footer.nav3':       { zh: '服务项目',          en: 'Services' },
        'footer.nav4':       { zh: '典型案例',          en: 'Case Studies' },
        'footer.nav5':       { zh: '联系方式',          en: 'Contact' },
        'footer.services_heading': { zh: '服务项目',    en: 'Services' },
        'footer.srv1':       { zh: 'APP 安全评估',      en: 'Mobile App Security' },
        'footer.srv2':       { zh: 'Web 渗透测试',      en: 'Web Penetration Testing' },
        'footer.srv3':       { zh: 'IoT 安全',          en: 'IoT Security' },
        'footer.srv4':       { zh: '云安全',            en: 'Cloud Security' },
        'footer.srv5':       { zh: 'AI 安全',           en: 'AI Security' },
        'footer.srv6':       { zh: 'GDPR / CRA 合规',   en: 'GDPR / CRA Compliance' },
        'footer.copyright':  { zh: '© 2026 MarsX. All rights reserved.', en: '© 2026 MarsX. All rights reserved.' }
    };

    // ============================================================
    // SWITCH LANGUAGE
    // ============================================================
    window.switchLang = function switchLang(lang) {
        LANG = lang;
        try { localStorage.setItem('marsx-lang', lang); } catch (e) {}
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

        // Update meta tags
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', DICT['meta.desc'][lang]);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', DICT['meta.ogtitle'][lang]);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', DICT['meta.ogdesc'][lang]);
        document.title = DICT['meta.title'][lang];

        // Update lang button text
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) langBtn.textContent = lang === 'zh' ? 'EN' : '中';

        // Update all [data-i18n] elements
        const els = document.querySelectorAll('[data-i18n]');
        els.forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (!DICT[key] || !DICT[key][lang]) return;

            const type = el.getAttribute('data-i18n-type');
            const tag = el.tagName.toLowerCase();

            if (type === 'placeholder') {
                el.setAttribute('placeholder', DICT[key][lang]);
            } else if (type === 'value') {
                el.value = DICT[key][lang];
            } else if (tag === 'input' || tag === 'textarea') {
                el.setAttribute('placeholder', DICT[key][lang]);
            } else if (tag === 'option') {
                el.textContent = DICT[key][lang];
            } else if (type === 'html') {
                el.innerHTML = DICT[key][lang];
            } else {
                el.textContent = DICT[key][lang];
            }
        });

        // Dispatch event so main.js knows language changed
        window.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
    };

    // Expose for external use
    window.toggleLang = function () {
        window.switchLang(LANG === 'zh' ? 'en' : 'zh');
    };

    window.getCurrentLang = function () {
        return LANG;
    };

    window.getDict = function () {
        return DICT;
    };

    // ============================================================
    // INIT
    // ============================================================
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', window.toggleLang);
    }

    let savedLang = 'zh';
    try { savedLang = localStorage.getItem('marsx-lang') || 'zh'; } catch (e) {}
    window.switchLang(savedLang);
})();
