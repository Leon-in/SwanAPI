import { describe, expect, test } from 'bun:test'
import { SWAN_BACKGROUND_LAYERS } from './swan-landing-background'

describe('swan landing background', () => {
  test('uses soft atmosphere layers instead of a half-width hard panel', () => {
    expect(SWAN_BACKGROUND_LAYERS).toHaveLength(3)
    expect(
      SWAN_BACKGROUND_LAYERS.some((layer) => layer.className.includes('w-1/2'))
    ).toBe(false)
    expect(
      SWAN_BACKGROUND_LAYERS.some((layer) =>
        layer.className.includes('bg-[radial-gradient')
      )
    ).toBe(true)
  })
})
