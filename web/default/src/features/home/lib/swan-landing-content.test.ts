import { describe, expect, test } from 'bun:test'
import {
  SWAN_BENEFITS,
  SWAN_FOOTER,
  SWAN_HERO,
  SWAN_SUPPLY_ITEMS,
} from './swan-landing-content'

describe('swan landing content', () => {
  test('defines the required sales homepage copy', () => {
    expect(SWAN_HERO.brand).toBe('API 上游提供商')
    expect(SWAN_HERO.logo).toBe('API')
    expect(SWAN_HERO.badge).toBe('多模型 API 上游供应')
    expect(SWAN_HERO.title).toBe('API 上游提供商')
    expect(SWAN_HERO.primaryCta).toBe('注册批发')
    expect(SWAN_HERO.secondaryCta).toBe('查看价格')
  })

  test('keeps the trust panel and benefit strip complete', () => {
    expect(SWAN_SUPPLY_ITEMS).toHaveLength(3)
    expect(SWAN_SUPPLY_ITEMS.map((item) => item.value)).toContain('海量模型池')
    expect(SWAN_SUPPLY_ITEMS.map((item) => item.value)).toContain('广泛兼容')
    expect(SWAN_BENEFITS.map((item) => item.title)).toEqual([
      '稳定转发',
      '多协议接入',
      '海量模型',
      '批量供应',
    ])
  })

  test('uses upstream API provider branding in the landing footer', () => {
    expect(SWAN_FOOTER.brand).toBe('API 上游提供商')
    expect(SWAN_FOOTER.tagline).toContain('API 上游供应')
    expect(SWAN_FOOTER.attribution).toBe(
      '由 API 上游提供商公共站点基础设施支持'
    )
  })
})
