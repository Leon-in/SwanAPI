import { useTranslation } from 'react-i18next'
import {
  SWAN_PUBLIC_BRAND,
  SWAN_PUBLIC_LAYOUT,
  SWAN_PUBLIC_LAYOUT_ROOT,
} from '@/lib/public-branding'
import { useAuthStore } from '@/stores/auth-store'
import { Markdown } from '@/components/ui/markdown'
import { PublicLayout } from '@/components/layout'
import { SwanLanding } from './components'
import { useHomePageContent } from './hooks'

const swanHeaderLogo = (
  <span className='flex size-full items-center justify-center rounded-lg border border-white/15 bg-[#071312] text-base'>
    {SWAN_PUBLIC_BRAND.logo}
  </span>
)

export function Home() {
  const { t } = useTranslation()
  const { auth } = useAuthStore()
  const isAuthenticated = !!auth.user
  const { content, isLoaded, isUrl } = useHomePageContent()

  if (!isLoaded) {
    return (
      <PublicLayout
        showMainContainer={false}
        logo={swanHeaderLogo}
        siteName={SWAN_PUBLIC_BRAND.name}
        headerProps={{ className: SWAN_PUBLIC_LAYOUT.headerClassName }}
        rootClassName={SWAN_PUBLIC_LAYOUT_ROOT}
        showThemeSwitch={SWAN_PUBLIC_LAYOUT.showThemeSwitch}
      >
        <main className='flex min-h-screen items-center justify-center'>
          <div className='text-muted-foreground'>{t('Loading...')}</div>
        </main>
      </PublicLayout>
    )
  }

  if (content) {
    return (
      <PublicLayout
        showMainContainer={false}
        logo={swanHeaderLogo}
        siteName={SWAN_PUBLIC_BRAND.name}
        headerProps={{ className: SWAN_PUBLIC_LAYOUT.headerClassName }}
        rootClassName={SWAN_PUBLIC_LAYOUT_ROOT}
        showThemeSwitch={SWAN_PUBLIC_LAYOUT.showThemeSwitch}
      >
        <main className='overflow-x-hidden'>
          {isUrl ? (
            <iframe
              src={content}
              className='h-screen w-full border-none'
              title={t('Custom Home Page')}
            />
          ) : (
            <div className='container mx-auto py-8'>
              <Markdown className='custom-home-content'>{content}</Markdown>
            </div>
          )}
        </main>
      </PublicLayout>
    )
  }

  return (
    <PublicLayout
      showMainContainer={false}
      logo={swanHeaderLogo}
      siteName={SWAN_PUBLIC_BRAND.name}
      headerProps={{ className: SWAN_PUBLIC_LAYOUT.headerClassName }}
      rootClassName={SWAN_PUBLIC_LAYOUT_ROOT}
      showThemeSwitch={SWAN_PUBLIC_LAYOUT.showThemeSwitch}
    >
      <SwanLanding isAuthenticated={isAuthenticated} />
    </PublicLayout>
  )
}
