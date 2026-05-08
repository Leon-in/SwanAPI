import { describe, expect, test } from 'bun:test'
import {
  SWAN_PUBLIC_BRAND,
  SWAN_PUBLIC_LAYOUT,
  SWAN_PUBLIC_LAYOUT_ROOT,
} from './public-branding'

describe('public branding', () => {
  test('defines the shared upstream API provider brand for public pages', () => {
    expect(SWAN_PUBLIC_BRAND.name).toBe('API 上游提供商')
    expect(SWAN_PUBLIC_BRAND.logo).toBe('API')
    expect(SWAN_PUBLIC_BRAND.tagline).toContain('API 上游供应')
    expect(SWAN_PUBLIC_BRAND.docsUrl).toBe('https://docs.newapi.pro')
  })

  test('defines a reusable dark public layout skin', () => {
    expect(SWAN_PUBLIC_LAYOUT_ROOT).toContain('bg-[#071312]')
    expect(SWAN_PUBLIC_LAYOUT.headerClassName).toContain('bg-[#071312]/50')
    expect(SWAN_PUBLIC_LAYOUT.headerClassName).toContain('text-white')
    expect(SWAN_PUBLIC_LAYOUT.showThemeSwitch).toBe(false)
  })
})
