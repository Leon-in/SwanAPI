import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { SWAN_PUBLIC_BRAND } from '@/lib/public-branding'

type AuthLayoutProps = {
  children: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()

  return (
    <div className='relative grid min-h-svh max-w-none overflow-hidden bg-[#071312] text-white lg:grid-cols-[1.1fr_.9fr]'>
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-[linear-gradient(135deg,#0b221f_0%,#071312_46%,#050809_100%)]'
      />
      <div
        aria-hidden='true'
        className='absolute inset-0 bg-[linear-gradient(to_right,rgba(215,255,98,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black,transparent_85%)] bg-[size:72px_72px] opacity-50'
      />

      <Link
        to='/'
        className='absolute top-4 left-4 z-10 flex items-center gap-3 transition-opacity hover:opacity-85 sm:top-8 sm:left-8'
      >
        <div className='flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/8 text-xl'>
          {SWAN_PUBLIC_BRAND.logo}
        </div>
        <div>
          <h1 className='text-lg font-semibold'>{SWAN_PUBLIC_BRAND.name}</h1>
          <p className='text-[11px] font-semibold text-[#d7ff62]'>
            {SWAN_PUBLIC_BRAND.eyebrow}
          </p>
        </div>
      </Link>

      <section className='relative hidden items-end px-10 py-12 lg:flex'>
        <div className='max-w-xl space-y-6'>
          <div className='inline-flex items-center gap-2 rounded-lg border border-[#d7ff62]/25 bg-[#d7ff62]/10 px-3 py-2 text-xs font-bold text-[#d7ff62]'>
            {t('AI API 源头供应商')}
          </div>
          <div className='space-y-4'>
            <h2 className='text-5xl leading-none font-black text-balance'>
              {SWAN_PUBLIC_BRAND.heroTitle}
            </h2>
            <p className='max-w-lg text-base leading-8 text-[#bfd8d2]'>
              {SWAN_PUBLIC_BRAND.heroDescription}
            </p>
          </div>
          <div className='grid max-w-lg gap-3 sm:grid-cols-2'>
            <div className='rounded-lg border border-white/10 bg-white/[.05] p-4'>
              <p className='text-sm font-semibold text-white'>
                {t('海量模型池')}
              </p>
              <p className='mt-2 text-sm leading-6 text-[#9cb6af]'>
                {t('覆盖主流模型并持续上新，兼容多协议生态。')}
              </p>
            </div>
            <div className='rounded-lg border border-white/10 bg-white/[.05] p-4'>
              <p className='text-sm font-semibold text-white'>
                {t('长期可供货')}
              </p>
              <p className='mt-2 text-sm leading-6 text-[#9cb6af]'>
                {t(SWAN_PUBLIC_BRAND.supportLabel)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='relative flex items-center px-4 pt-20 pb-10 sm:px-6 lg:px-10 lg:py-12'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 rounded-[24px] border border-white/12 bg-[#081614]/90 p-6 shadow-[0_28px_80px_rgba(0,0,0,.28)] backdrop-blur-xl sm:w-[480px] sm:p-8'>
          {children}
        </div>
      </div>
    </div>
  )
}
