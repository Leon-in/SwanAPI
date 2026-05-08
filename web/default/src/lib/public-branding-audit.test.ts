import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, test } from 'bun:test'

const projectRoot = resolve(import.meta.dir, '..', '..')

function readProjectFile(relativePath: string) {
  return readFileSync(resolve(projectRoot, relativePath), 'utf8')
}

describe('public branding audit', () => {
  test('keeps the static app shell on upstream API provider branding', () => {
    const indexHtml = readProjectFile('index.html')

    expect(indexHtml).toContain('<title>API 上游提供商</title>')
    expect(indexHtml).toContain('content="API 上游提供商"')
    expect(indexHtml).toContain('href="/api-logo.svg"')
    expect(indexHtml).not.toContain('New API')
    expect(indexHtml).not.toContain('天鹅')
    expect(indexHtml).not.toContain('swan')
  })

  test('removes old New API copy from public-branding source files', () => {
    const publicBranding = readProjectFile('src/lib/public-branding.ts')
    const landingContent = readProjectFile(
      'src/features/home/lib/swan-landing-content.ts'
    )

    expect(publicBranding).not.toContain('New API')
    expect(landingContent).not.toContain('New API')
    expect(publicBranding).not.toContain('天鹅 API')
    expect(landingContent).not.toContain('天鹅 API')
    expect(publicBranding).toContain('由 API 上游提供商公共站点基础设施支持')
    expect(landingContent).toContain('由 API 上游提供商公共站点基础设施支持')
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

  test('keeps the public header sign-in button readable on the dark nav', () => {
    const publicHeader = readProjectFile(
      'src/components/layout/components/public-header.tsx'
    )

    expect(publicHeader).toContain('!bg-[#d7ff62]')
    expect(publicHeader).toContain('!text-[#071312]')
  })

  test('offers modified source code and upstream license links', () => {
    const sourceNotice = readProjectFile(
      'src/components/source-availability-notice.tsx'
    )

    expect(sourceNotice).toContain('https://github.com/Leon-in/SwanAPI')
    expect(sourceNotice).toContain('https://github.com/QuantumNous/new-api')
    expect(sourceNotice).toContain('AGPL v3.0 License')
    expect(sourceNotice).not.toContain('SwanAPI source')
  })
})
