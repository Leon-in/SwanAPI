import { describe, expect, test } from 'bun:test'
import { shouldSuppressHomePageContentError } from './home-page-content-error'

describe('home page content error handling', () => {
  test('suppresses optional home content request failures', () => {
    expect(
      shouldSuppressHomePageContentError({
        response: { status: 504 },
      })
    ).toBe(true)
    expect(
      shouldSuppressHomePageContentError({
        response: { status: 404 },
      })
    ).toBe(true)
    expect(shouldSuppressHomePageContentError(new Error('network error'))).toBe(
      true
    )
  })
})
