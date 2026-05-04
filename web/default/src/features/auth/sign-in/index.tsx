import { Link, useSearch } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SWAN_PUBLIC_BRAND } from '@/lib/public-branding'
import { useStatus } from '@/hooks/use-status'
import { AuthLayout } from '../auth-layout'
import { TermsFooter } from '../components/terms-footer'
import { UserAuthForm } from './components/user-auth-form'

export function SignIn() {
  const { t } = useTranslation()
  const { redirect } = useSearch({ from: '/(auth)/sign-in' })
  const { status } = useStatus()

  return (
    <AuthLayout>
      <div className='w-full space-y-8'>
        <div className='space-y-2'>
          <p className='text-xs font-semibold tracking-[0.16em] text-[#d7ff62] uppercase'>
            {SWAN_PUBLIC_BRAND.eyebrow}
          </p>
          <h2 className='text-center text-2xl font-semibold tracking-tight sm:text-left'>
            {t('登录天鹅 API')}
          </h2>
          {!status?.self_use_mode_enabled && (
            <p className='text-muted-foreground text-left text-sm sm:text-base'>
              {t('还没有账号？')}{' '}
              <Link
                to='/sign-up'
                className='hover:text-primary font-medium underline underline-offset-4'
              >
                {t('注册批发')}
              </Link>
              .
            </p>
          )}
        </div>

        <UserAuthForm redirectTo={redirect} />

        <TermsFooter
          variant='sign-in'
          status={status}
          className='text-center'
        />
      </div>
    </AuthLayout>
  )
}
