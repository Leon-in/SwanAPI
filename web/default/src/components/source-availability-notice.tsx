import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

export const SWAN_SOURCE_REPOSITORY_URL = 'https://github.com/Leon-in/SwanAPI'
export const UPSTREAM_REPOSITORY_URL = 'https://github.com/QuantumNous/new-api'
export const SWAN_LICENSE_URL = `${SWAN_SOURCE_REPOSITORY_URL}/blob/main/LICENSE`

type SourceAvailabilityNoticeProps = {
  className?: string
}

export function SourceAvailabilityNotice(props: SourceAvailabilityNoticeProps) {
  const { t } = useTranslation()

  return (
    <div
      className={cn(
        'border-border/60 bg-background/40 text-muted-foreground flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-lg border px-4 py-3 text-center text-xs backdrop-blur-sm',
        props.className
      )}
    >
      <span>
        {t('Current deployment source:')}{' '}
        <a
          href={SWAN_SOURCE_REPOSITORY_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-foreground font-medium hover:underline'
        >
          {t('View SwanAPI source code')}
        </a>
      </span>
      <span>
        {t('Based on upstream project:')}{' '}
        <a
          href={UPSTREAM_REPOSITORY_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-foreground font-medium hover:underline'
        >
          {t('New API')}
        </a>
      </span>
      <span>
        {t(
          'This modified deployment provides its corresponding source code under the'
        )}{' '}
        <a
          href={SWAN_LICENSE_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='text-foreground font-medium hover:underline'
        >
          {t('AGPL v3.0 License')}
        </a>
      </span>
    </div>
  )
}
