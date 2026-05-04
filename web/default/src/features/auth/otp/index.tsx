import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SWAN_PUBLIC_BRAND } from '@/lib/public-branding'
import { AuthLayout } from '../auth-layout'
import { OtpForm } from './components/otp-form'

export function Otp() {
  const { t } = useTranslation()
  return (
    <AuthLayout>
      <div className='w-full space-y-8'>
        <div className='space-y-3'>
          <p className='text-xs font-semibold tracking-[0.16em] text-[#d7ff62] uppercase'>
            {SWAN_PUBLIC_BRAND.eyebrow}
          </p>
          <h2 className='text-center text-2xl font-semibold tracking-tight sm:text-left'>
            {t('两步验证')}
          </h2>
          <p className='text-muted-foreground text-left text-sm sm:text-base'>
            {t('请输入验证码。')}
          </p>
          <p className='text-muted-foreground text-left text-sm sm:text-base'>
            {t('会话已过期？')}{' '}
            <Link
              to='/sign-in'
              className='hover:text-primary font-medium underline underline-offset-4'
            >
              {t('重新登录')}
            </Link>
            .
          </p>
        </div>

        <OtpForm />
      </div>
    </AuthLayout>
  )
}
