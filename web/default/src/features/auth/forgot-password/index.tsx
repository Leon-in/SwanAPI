import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SWAN_PUBLIC_BRAND } from '@/lib/public-branding'
import { AuthLayout } from '../auth-layout'
import { ForgotPasswordForm } from './components/forgot-password-form'

export function ForgotPassword() {
  const { t } = useTranslation()
  return (
    <AuthLayout>
      <div className='w-full space-y-8'>
        <div className='space-y-3'>
          <p className='text-xs font-semibold tracking-[0.16em] text-[#d7ff62] uppercase'>
            {SWAN_PUBLIC_BRAND.eyebrow}
          </p>
          <h2 className='text-center text-2xl font-semibold tracking-tight sm:text-left'>
            {t('找回登录密码')}
          </h2>
          <p className='text-muted-foreground text-left text-sm sm:text-base'>
            {t('请输入您注册时使用的邮箱，我们会向您发送重置密码的链接。')}
          </p>
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
        </div>

        <ForgotPasswordForm className='space-y-0' />
      </div>
    </AuthLayout>
  )
}
