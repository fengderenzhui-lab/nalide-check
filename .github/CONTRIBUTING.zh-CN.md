[English](./CONTRIBUTING.md) | **简体中文**

# 参与贡献

你好！感谢你愿意为 NALIDE Check 出一份力。

> [!IMPORTANT]
> 我们不接受未经沟通的 AI 生成贡献

## 开始

你需要 [Node](https://nodejs.org/) 22.22.3+ 或 24.16+、[yarn](https://yarnpkg.com/) 和 git。Chromium 与 `traceroute` 可选——需要它们的检查在缺失时会直接跳过。

```bash
git clone git@github.com:fengderenzhui-lab/nalide-check.git
cd nalide-check
yarn
yarn dev
```

这会把 API 起在 3001 端口、前端起在 4321 端口。环境变量全部可选，见 [`.env.sample`](https://github.com/fengderenzhui-lab/nalide-check/blob/master/.env.sample)。

## 新增一项检查

1. 在 `api/<id>.js` 里写 API 函数，用共享的 `middleware` 包裹。没有可展示内容时返回 `{ skipped: '原因' }`，不要抛错
2. 在 `src/client/components/Results/` 里做它的结果卡片
3. 在 `src/client/jobs/registry.ts` 里注册它
4. 在 `src/data/checks/<id>.ts` 里补它的文档，并登记到该目录的 `index.ts`

每项检查都有自己的页面 `/<id>`，所以 id 不要与已有的分类或页面重名。
如果它会把目标发给第三方服务，把它加进 `api/_common/check-skipper.js` 的 `publicOnlyChecks`。
如果它需要 API 密钥，密钥缺失时要干净地跳过（见 `requireEnv`），并把变量补进 `.env.sample`。

## Bug 与安全问题

Bug 请提 [issue](https://github.com/fengderenzhui-lab/nalide-check/issues/new/choose)，写清复现步骤和你的运行方式。
安全问题不要公开，报告方式见 [SECURITY.zh-CN.md](SECURITY.zh-CN.md)。

## 行为准则

友善、建设性。我们遵循 [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)。
参与贡献即表示你同意你的成果按本项目的 [MIT 许可证](https://github.com/fengderenzhui-lab/nalide-check/blob/master/LICENSE) 发布。
