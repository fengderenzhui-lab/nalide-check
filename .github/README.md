**English** | [简体中文](./README.zh-CN.md)

# NALIDE Check

**All-in-one website inspection and OSINT tool — X-ray vision for any website.**

Live instance: **[check.nalide.com](https://check.nalide.com)**

Give it a URL, and NALIDE Check gathers everything it can find in the open about that site — configuration, security posture, infrastructure and connections — and presents it in one report.

## What it checks

44 checks across 8 categories, including:

- **Server & infrastructure** — IP info, hosting, response headers, cookies, robots.txt, DNS records, DNSSEC, domain & WHOIS (RDAP) info
- **Security** — SSL/TLS certificate chain and cipher suites, HSTS and HTTP security headers, WAF detection, malware & phishing block-list status, breach (HIBP) lookups, email configuration (SPF / DKIM / DMARC)
- **Content & tech** — tech stack detection, metadata & social cards, sitemap, performance (Lighthouse), full-page screenshot
- **Network** — open ports, traceroute, TLS audit, certificate-transparency subdomain discovery

## Run your own instance

With Docker Compose (builds from this repository):

```bash
git clone https://github.com/fengderenzhui-lab/nalide-check.git
cd web-check
docker compose up -d
```

Then open `http://localhost:3000`.

Or with plain Docker:

```bash
docker build -t nalide-web-check .
docker run -d -p 127.0.0.1:3000:3000 nalide-web-check
```

Optional configuration (API keys for Shodan etc., rate limiting) is via environment variables — see the self-hosting guide in the app itself.

## API

The same checks are available through a REST API. The OpenAPI spec lives at [`public/resources/openapi-spec.yml`](../public/resources/openapi-spec.yml), and the running instance documents its endpoints under `/web-check-api`.

## Security

Found a vulnerability? Please follow the [security policy](SECURITY.md) — report privately via GitHub advisories or `contact@nalide.com`.

## License & attribution

MIT — see [`LICENSE`](../LICENSE).

NALIDE Check is a rebranded fork of [Lissy93/web-check](https://github.com/Lissy93/web-check), maintained as part of the [NALIDE](https://nalide.com) ecosystem.
