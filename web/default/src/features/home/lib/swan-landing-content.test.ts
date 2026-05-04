import { describe, expect, test } from 'bun:test'
import {
  SWAN_BENEFITS,
  SWAN_FOOTER,
  SWAN_HERO,
  SWAN_SUPPLY_ITEMS,
} from './swan-landing-content'

describe('swan landing content', () => {
  test('defines the required sales homepage copy', () => {
    expect(SWAN_HERO.brand).toBe('天鹅 API')
    expect(SWAN_HERO.logo).toBe('🦢')
    expect(SWAN_HERO.badge).toBe('AI API 源头供应商')
    expect(SWAN_HERO.title).toBe('AI API 源头供应商')
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

  test('uses Swan API branding in the landing footer', () => {
    expect(SWAN_FOOTER.brand).toBe('天鹅 API')
    expect(SWAN_FOOTER.tagline).toContain('API 源头批发商')
    expect(SWAN_FOOTER.attribution).toBe('由天鹅 API 公共站点基础设施支持')
  })
})
