import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, test } from 'bun:test'

const projectRoot = resolve(import.meta.dir, '..', '..')

function readProjectFile(relativePath: string) {
  return readFileSync(resolve(projectRoot, relativePath), 'utf8')
}

describe('public branding audit', () => {
  test('keeps the static app shell on Swan branding', () => {
    const indexHtml = readProjectFile('index.html')

    expect(indexHtml).toContain('<title>天鹅 API</title>')
    expect(indexHtml).toContain('content="天鹅 API"')
    expect(indexHtml).toContain('href="/swan-logo.svg"')
    expect(indexHtml).not.toContain('New API')
  })

  test('removes old New API copy from public-branding source files', () => {
    const publicBranding = readProjectFile('src/lib/public-branding.ts')
    const landingContent = readProjectFile(
      'src/features/home/lib/swan-landing-content.ts'
    )

    expect(publicBranding).not.toContain('New API')
    expect(landingContent).not.toContain('New API')
    expect(publicBranding).toContain('由天鹅 API 公共站点基础设施支持')
    expect(landingContent).toContain('由天鹅 API 公共站点基础设施支持')
  })

  test('keeps public route components free of old visible brand labels', () => {
    const aboutPage = readProjectFile('src/features/about/index.tsx')
    const modelDetails = readProjectFile(
      'src/features/pricing/components/model-details.tsx'
    )

    expect(aboutPage).not.toContain('New API Project Repository:')
    expect(aboutPage).not.toContain("t('NewAPI')")
    expect(modelDetails).toContain('siteName: SWAN_PUBLIC_BRAND.name')
    expect(modelDetails).toContain('rootClassName: SWAN_PUBLIC_LAYOUT_ROOT')
  })
})
