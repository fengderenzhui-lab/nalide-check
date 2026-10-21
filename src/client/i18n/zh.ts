import type { Translation } from './en';

// Simplified Chinese
export default {
  checks: {
    ssl: 'SSL 证书',
    dns: 'DNS 记录',
    cookies: 'Cookie',
    'robots-txt': '爬虫规则',
    headers: '响应头',
    quality: '质量指标',
    location: '服务器位置',
    hosts: '关联主机',
    redirects: '重定向链',
    'txt-records': 'TXT 记录',
    status: '服务器状态',
    ports: '开放端口',
    'trace-route': '路由追踪',
    carbon: '碳足迹',
    'server-info': '服务器信息',
    vulnerabilities: '漏洞',
    'whois-lookup': 'Whois 查询',
    'domain-info': '域名信息',
    dnssec: 'DNSSEC',
    'caa-records': 'CAA 记录',
    hsts: 'HSTS',
    'dns-server': 'DNS 服务器',
    'tech-stack': '技术栈',
    sitemap: '站点地图',
    'security-txt': 'Security.txt',
    'linked-pages': '链接页面',
    'social-tags': '社交标签',
    'social-presence': '社交媒体',
    'mail-config': '邮件配置',
    firewall: '防火墙',
    'http-security': 'HTTP 安全',
    'mixed-content': '混合内容与 SRI',
    archives: '历史存档',
    rank: '全球排名',
    'block-lists': '屏蔽检测',
    threats: '恶意软件与钓鱼',
    breaches: '数据泄露',
    trackers: '跟踪器与第三方',
    'tls-connection': 'TLS 连接',
    'tls-security-audit': 'TLS 安全审计',
    'tls-client-compat': 'TLS 客户端兼容性',
    screenshot: '网页截图',
    subdomains: '子域名',
  },

  card: {
    info: (title) => `关于${title}`,
    refresh: (title) => `重新获取${title}数据`,
    crashed: '此组件发生意外错误',
    crashedHelp:
      '这通常是因为服务器返回的结果不符合预期。请查看日志了解详情。' +
      '如果问题持续出现，请在代码仓库中提交问题。',
    errorDetails: '错误详情',
  },

  advisory: {
    heading: '检测结果',
    severity: {
      critical: '严重',
      issue: '问题',
      warning: '警告',
      info: '提示',
      pass: '通过',
    },
  },

  progress: {
    state: {
      success: '成功',
      loading: '加载中',
      error: '错误',
      'timed-out': '超时',
      skipped: '已跳过',
    },
    jobs: {
      success: (n) => `${n} 个任务成功`,
      skipped: (n) => `${n} 个任务已跳过`,
      'timed-out': (n) => `${n} 个任务超时`,
      error: (n) => `${n} 个任务失败`,
    },
    showReason: {
      error: '查看错误',
      'timed-out': '查看超时原因',
      skipped: '查看跳过原因',
    },
    loading: (done, total) => `正在加载 ${done} / ${total}`,
    loadingJobs: (done, total) => `正在加载 ${done} / ${total} 个任务`,
    finished: (total, seconds) => `已完成 ${total} 项查询，用时 ${seconds} 秒`,
    allPassed: (n) => `${n} 个任务全部成功`,
    doneIn: (time) => `完成，用时 ${time}`,
    issues: (n) => `${n} 个问题`,
    took: (ms) => `耗时 ${ms} ms`,
    retry: '重试',
    detailsFor: (name) => `${name}详情`,
    ended: (name, state, ms) => `${name}任务以“${state}”状态结束${ms ? `，耗时 ${ms} ms` : ''}。`,
    reason: '原因：',
    serverResponse: '服务器响应：',
    showLoadState: '显示加载状态',
    showDetails: '显示详情',
    dismiss: '关闭',
    consoleHint: '查看浏览器控制台，获取日志和更多信息',
    failuresNormal:
      '部分任务失败是正常的，可能是因为主机没有返回所需信息、Lambda 函数受限，或触发了 API 限额。',
    learnMore: '进一步了解 Web-Check',
  },

  loader: {
    crunching: '正在分析数据',
    checks: (done, total) => `${done} / ${total} 项检查`,
    status: (done, total) => `正在分析数据，已完成 ${done} / ${total}`,
    wait: '所有任务完成可能需要一分钟',
    preview: '初步结果会陆续显示在下方',
  },

  noResults: {
    possibleReasons: '可能的原因：',
    reason: '原因：',
    lookupError: '查询错误：',
    unreachable: {
      title: '无法访问此网站',
      description: '无法解析此主机的 IP 地址，因此无法运行检查',
      reasons: [
        '域名可能拼写错误或已不再注册',
        '网站可能已下线或暂时无法访问',
        'DNS 解析问题可能影响了查询',
        '防火墙或地区限制可能阻止了访问',
      ],
    },
    invalid: {
      title: '输入无效',
      description: '这看起来不是有效的 URL 或 IP 地址，因此无法运行检查',
      reasons: [
        '请输入域名（example.com）或 IPv4 / IPv6 地址',
        '检查输入中是否有拼写错误或多余字符',
        '地址中不要包含空格和不支持的符号',
      ],
    },
    'api-down': {
      title: '服务不可用',
      description: '由于无法连接 Web-Check API，大部分检查都失败了',
      reasons: [
        'API 可能已宕机、正在重启或触发了速率限制',
        '自托管实例可能配置错误或已离线',
        '网络或防火墙问题可能阻止了对 API 的访问',
      ],
    },
    blocked: {
      title: '不允许扫描',
      description: '所有检查均被跳过，因为此实例不允许扫描该主机',
      reasons: [
        '管理员可能屏蔽了此域名或 IP 段',
        '此实例可能被配置为不运行这些检查',
        '你仍可以在自己的 Web-Check 实例上扫描此主机',
      ],
    },
    disabled: {
      title: 'Web-Check 已暂停',
      description: '此实例已被临时停用，因此无法运行检查',
      reasons: [
        '公共实例可能为控制运行成本而暂停',
        '自托管实例可能处于维护模式',
        '你可以从 GitHub 上的开源仓库部署自己的副本',
      ],
    },
  },

  rawData: {
    heading: '查看 / 下载原始数据',
    download: '下载结果',
    view: '查看结果',
    update: '更新结果',
    hide: '隐藏结果',
    frameTitle: '结果（通过 JSON Hero）',
    open: '在 JSON Hero 中打开这些结果',
    httpError: (status) => `HTTP 错误！状态码：${status}`,
    about: '这些是根据你的 URL 生成的 JSON 格式原始结果，可导入你自己的程序做进一步分析。',
  },

  resources: {
    heading: '用于深入研究的外部工具',
  },

  errorPage: {
    home: '返回首页',
    github: '在 GitHub 上查看',
    report: '报告问题',
    reload: '重新加载页面',
    heading: '出错了',
    subheading: '发生了意外错误。',
    apology: '很抱歉出现这种情况。通常重新加载页面即可解决，如果仍然不行，请提交错误报告。',
    message: '以下是我们收到的错误信息：',
    notFound: '页面未找到',
  },
} satisfies Translation;
