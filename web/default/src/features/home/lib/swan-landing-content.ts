export const SWAN_HERO = {
  logo: 'API',
  brand: 'API 上游提供商',
  eyebrow: '多模型 API 上游供应',
  badge: '多模型 API 上游供应',
  title: 'API 上游提供商',
  description:
    '聚合多协议接口与海量模型池，面向工作室、工具站和自动化团队提供稳定供应、批量采购与源头计费。',
  primaryCta: '注册批发',
  dashboardCta: '进入控制台',
  secondaryCta: '查看价格',
} as const

export const SWAN_SUPPLY_ITEMS = [
  {
    label: 'GPT / Claude / Gemini / DeepSeek / 更多',
    value: '海量模型池',
  },
  {
    label: 'OpenAI / Anthropic / Gemini / Azure',
    value: '广泛兼容',
  },
  {
    label: '团队采购 / 站群分发 / 长期供货',
    value: '批发供给',
  },
] as const

export const SWAN_METRICS = [
  {
    value: '多协议',
    label: '统一接入',
  },
  {
    value: '海量',
    label: '模型持续上新',
  },
  {
    value: '低价',
    label: '源头计费',
  },
] as const

export const SWAN_BENEFITS = [
  {
    title: '稳定转发',
    description: '自动分发可用渠道',
  },
  {
    title: '多协议接入',
    description: '适配多种客户端与协议生态',
  },
  {
    title: '海量模型',
    description: '覆盖主流模型并持续补充新源',
  },
  {
    title: '批量供应',
    description: '适合站群和团队采购',
  },
] as const

export const SWAN_FOOTER = {
  brand: 'API 上游提供商',
  tagline: 'API 上游供应，面向团队和工具站的模型供应入口。',
  attribution: '由 API 上游提供商公共站点基础设施支持',
  links: [
    {
      label: '模型广场',
      href: '/pricing',
      external: false,
    },
    {
      label: '控制台',
      href: '/dashboard',
      external: false,
    },
    {
      label: '文档',
      href: 'https://docs.newapi.pro',
      external: true,
    },
  ],
} as const
