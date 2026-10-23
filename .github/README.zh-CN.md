[English](./README.md) | **简体中文**

# NALIDE Check

**一站式网站体检与 OSINT 工具——给任何网站做 X 光透视。**

在线实例：**[check.nalide.com](https://check.nalide.com)**

给它一个网址，NALIDE Check 就会把这个站在公开渠道能查到的一切——配置、安全状态、基础设施与关联关系——汇总成一份报告。

## 检查内容

8 大类、44 项检查，包括：

- **服务器与基础设施**——IP 信息、主机商、响应头、Cookies、robots.txt、DNS 记录、DNSSEC、域名与 WHOIS（RDAP）信息
- **安全**——SSL/TLS 证书链与加密套件、HSTS 与 HTTP 安全头、WAF 识别、恶意/钓鱼名单命中、数据泄露（HIBP）查询、邮件配置（SPF / DKIM / DMARC）
- **内容与技术**——技术栈识别、元数据与社交卡片、站点地图、性能（Lighthouse）、整页截图
- **网络**——开放端口、路由追踪、TLS 审计、证书透明日志子域名发现

## 自己部署

用 Docker Compose（从本仓库源码构建）：

```bash
git clone https://github.com/fengderenzhui-lab/nalide-check.git
cd nalide-check
docker compose up -d
```

然后打开 `http://localhost:3000`。

或用 Docker 直接构建：

```bash
docker build -t nalide-web-check .
docker run -d -p 127.0.0.1:3000:3000 nalide-web-check
```

可选配置（Shodan 等 API 密钥、限频）通过环境变量设置——见应用内的自部署指南页。

## API

同一套检查能力也提供 REST API。OpenAPI 规范在 [`public/resources/openapi-spec.yml`](../public/resources/openapi-spec.yml)，运行中的实例在 `/web-check-api` 下有接口文档。

## 安全

发现漏洞？请按 [安全政策](SECURITY.md) 私下报告：GitHub 安全公告或 `contact@nalide.com`。

## 许可证与出处

MIT——见 [`LICENSE`](../LICENSE)。

NALIDE Check 是 [Lissy93/web-check](https://github.com/Lissy93/web-check) 的品牌定制分支，现作为 [NALIDE](https://nalide.com) 生态的一部分维护。
