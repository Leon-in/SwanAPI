import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SWAN_PUBLIC_BRAND } from '@/lib/public-branding'
import { useStatus } from '@/hooks/use-status'
import { AuthLayout } from '../auth-layout'
import { TermsFooter } from '../components/terms-footer'
import { SignUpForm } from './components/sign-up-form'

export function SignUp() {
  const { t } = useTranslation()
  const { status } = useStatus()

  return (
    <AuthLayout>
      <div className='w-full space-y-8'>
        <div className='space-y-2'>
          <p className='text-xs font-semibold tracking-[0.16em] text-[#d7ff62] uppercase'>
            {SWAN_PUBLIC_BRAND.eyebrow}
          </p>
          <h2 className='text-center text-2xl font-semibold tracking-tight sm:text-left'>
            {t('注册天鹅 API')}
          </h2>
          <p className='text-muted-foreground text-left text-sm sm:text-base'>
            {t('已经有账号了？')}{' '}
            <Link
              to='/sign-in'
              className='hover:text-primary font-medium underline underline-offset-4'
            >
              {t('去登录')}
            </Link>
            .
          </p>
        </div>

        <SignUpForm />

        <TermsFooter
          variant='sign-up'
          status={status}
          className='text-center'
        />
      </div>
    </AuthLayout>
  )
}
