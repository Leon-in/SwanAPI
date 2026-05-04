import { useQuery } from '@tanstack/react-query'
import { Construction } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  SWAN_PUBLIC_BRAND,
  SWAN_PUBLIC_LAYOUT,
  SWAN_PUBLIC_LAYOUT_ROOT,
} from '@/lib/public-branding'
import { Markdown } from '@/components/ui/markdown'
import { Skeleton } from '@/components/ui/skeleton'
import { PublicLayout } from '@/components/layout'
import { getAboutContent } from './api'

function isValidUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function isLikelyHtml(value: string) {
  return /<\/?[a-z][\s\S]*>/i.test(value)
}

function EmptyAboutState() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <div className='flex min-h-[60vh] items-center justify-center p-8'>
      <div className='max-w-2xl space-y-6 text-center'>
        <div className='flex justify-center'>
          <Construction className='text-muted-foreground h-24 w-24' />
        </div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold'>{t('No About Content Set')}</h2>
          <p className='text-muted-foreground'>
            {t(
              'The administrator has not configured any about content yet. You can set it in the settings page, supporting HTML or URL.'
            )}
          </p>
        </div>
        <div className='space-y-4 text-sm'>
          <p>
            {t('Open-source repository:')}{' '}
            <a
              href='https://github.com/QuantumNous/new-api'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              {t('View source code')}
            </a>
          </p>
          <p className='text-muted-foreground'>
            © {currentYear} {SWAN_PUBLIC_BRAND.name} ·{' '}
            {t('View deployment documentation in')}{' '}
            <a
              href={SWAN_PUBLIC_BRAND.docsUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              {t('the docs center')}
            </a>
          </p>
          <p className='text-muted-foreground'>
            {t('This deployment must be used in compliance with the')}{' '}
            <a
              href='https://github.com/QuantumNous/new-api/blob/main/LICENSE'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary hover:underline'
            >
              {t('AGPL v3.0 License')}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export function About() {
  const { t } = useTranslation()
  const { data, isLoading } = useQuery({
    queryKey: ['about-content'],
    queryFn: getAboutContent,
  })

  const rawContent = data?.data?.trim() ?? ''
  const hasContent = rawContent.length > 0
  const isUrl = hasContent && isValidUrl(rawContent)
  const isHtml = hasContent && !isUrl && isLikelyHtml(rawContent)

  if (isLoading) {
    return (
      <PublicLayout
        rootClassName={SWAN_PUBLIC_LAYOUT_ROOT}
        showThemeSwitch={SWAN_PUBLIC_LAYOUT.showThemeSwitch}
        logo={
          <span className='flex size-full items-center justify-center rounded-lg border border-white/15 bg-[#071312] text-base'>
            {SWAN_PUBLIC_BRAND.logo}
          </span>
        }
        siteName={SWAN_PUBLIC_BRAND.name}
        headerProps={{ className: SWAN_PUBLIC_LAYOUT.headerClassName }}
      >
        <div className='mx-auto flex max-w-4xl flex-col gap-4 py-12'>
          <Skeleton className='h-8 w-[45%]' />
          <Skeleton className='h-4 w-full' />
          <Skeleton className='h-4 w-[90%]' />
          <Skeleton className='h-4 w-[80%]' />
        </div>
      </PublicLayout>
    )
  }

  if (!hasContent) {
    return (
      <PublicLayout
        rootClassName={SWAN_PUBLIC_LAYOUT_ROOT}
        showThemeSwitch={SWAN_PUBLIC_LAYOUT.showThemeSwitch}
        logo={
          <span className='flex size-full items-center justify-center rounded-lg border border-white/15 bg-[#071312] text-base'>
            {SWAN_PUBLIC_BRAND.logo}
          </span>
        }
        siteName={SWAN_PUBLIC_BRAND.name}
        headerProps={{ className: SWAN_PUBLIC_LAYOUT.headerClassName }}
      >
        <EmptyAboutState />
      </PublicLayout>
    )
  }

  if (isUrl) {
    return (
      <PublicLayout
        showMainContainer={false}
        rootClassName={SWAN_PUBLIC_LAYOUT_ROOT}
        showThemeSwitch={SWAN_PUBLIC_LAYOUT.showThemeSwitch}
        logo={
          <span className='flex size-full items-center justify-center rounded-lg border border-white/15 bg-[#071312] text-base'>
            {SWAN_PUBLIC_BRAND.logo}
          </span>
        }
        siteName={SWAN_PUBLIC_BRAND.name}
        headerProps={{ className: SWAN_PUBLIC_LAYOUT.headerClassName }}
      >
        <iframe
          src={rawContent}
          className='h-[calc(100vh-3.5rem)] w-full border-0'
          title={t('About')}
        />
      </PublicLayout>
    )
  }

  return (
    <PublicLayout
      rootClassName={SWAN_PUBLIC_LAYOUT_ROOT}
      showThemeSwitch={SWAN_PUBLIC_LAYOUT.showThemeSwitch}
      logo={
        <span className='flex size-full items-center justify-center rounded-lg border border-white/15 bg-[#071312] text-base'>
          {SWAN_PUBLIC_BRAND.logo}
        </span>
      }
      siteName={SWAN_PUBLIC_BRAND.name}
      headerProps={{ className: SWAN_PUBLIC_LAYOUT.headerClassName }}
    >
      <div className='mx-auto max-w-6xl px-4 py-8 text-white'>
        {isHtml ? (
          <div
            className='prose prose-neutral dark:prose-invert max-w-none'
            dangerouslySetInnerHTML={{ __html: rawContent }}
          />
        ) : (
          <Markdown className='prose-neutral dark:prose-invert max-w-none'>
            {rawContent}
          </Markdown>
        )}
      </div>
    </PublicLayout>
  )
}
