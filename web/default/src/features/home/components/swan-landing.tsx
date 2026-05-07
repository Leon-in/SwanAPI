import { Link } from '@tanstack/react-router'
import {
  ArrowRight,
  Boxes,
  CircuitBoard,
  Gauge,
  KeyRound,
  Layers3,
  LineChart,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/button'
import {
  SWAN_BENEFITS,
  SWAN_FOOTER,
  SWAN_HERO,
  SWAN_METRICS,
  SWAN_SUPPLY_ITEMS,
} from '../lib/swan-landing-content'
import { SWAN_BACKGROUND_LAYERS as SWAN_BACKDROP_LAYERS } from '../lib/swan-landing-background'

interface SwanLandingProps {
  isAuthenticated: boolean
}

const iconClassName = 'size-4 text-[#d7ff62]'

const benefitIcons = [
  <ShieldCheck key='stable' className={iconClassName} />,
  <LineChart key='pricing' className={iconClassName} />,
  <CircuitBoard key='compatible' className={iconClassName} />,
  <Boxes key='bulk' className={iconClassName} />,
]

export function SwanLanding(props: SwanLandingProps) {
  const { t } = useTranslation()

  return (
    <main className='min-h-screen overflow-hidden bg-[#071312] text-[#f4fff8]'>
      <section className='relative isolate px-4 pt-28 pb-16 sm:px-6 md:pt-36 lg:px-8'>
        {SWAN_BACKDROP_LAYERS.map((layer) => (
          <div
            key={layer.className}
            aria-hidden='true'
            className={layer.className}
          />
        ))}

        <div className='mx-auto max-w-7xl'>
          <div className='grid items-center gap-10 lg:min-h-[calc(100svh-12rem)] lg:grid-cols-[1.04fr_.96fr]'>
            <div className='landing-animate-fade-up'>
              <div className='inline-flex items-center gap-2 rounded-lg border border-[#d7ff62]/25 bg-[#d7ff62]/10 px-3 py-2 text-xs font-bold text-[#d7ff62]'>
                <Sparkles className='size-4' />
                {t(SWAN_HERO.badge)}
              </div>

              <div className='mt-6 flex items-center gap-3 text-sm text-[#a8c5bf]'>
                <span className='flex size-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-2xl'>
                  {SWAN_HERO.logo}
                </span>
                <span className='leading-tight'>
                  <strong className='block text-lg text-white'>
                    {t(SWAN_HERO.brand)}
                  </strong>
                  <span className='text-[11px] font-semibold text-[#d7ff62]'>
                    {SWAN_HERO.eyebrow}
                  </span>
                </span>
              </div>

              <h1 className='mt-8 max-w-4xl text-5xl leading-none font-black text-balance sm:text-6xl md:text-7xl'>
                {t(SWAN_HERO.title)}
              </h1>

              <p className='mt-6 max-w-2xl text-base leading-8 text-[#bfd8d2] md:text-lg'>
                {t(SWAN_HERO.description)}
              </p>

              <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                <Button
                  size='lg'
                  className='h-12 rounded-lg bg-[#d7ff62] px-5 font-bold text-[#101a12] hover:bg-[#e4ff88]'
                  render={
                    <Link
                      to={props.isAuthenticated ? '/dashboard' : '/sign-up'}
                    />
                  }
                >
                  {props.isAuthenticated
                    ? t(SWAN_HERO.dashboardCta)
                    : t(SWAN_HERO.primaryCta)}
                  <ArrowRight className='ml-2 size-4' />
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='h-12 rounded-lg border-white/20 bg-white/5 px-5 font-semibold text-white hover:bg-white/10 hover:text-white'
                  render={<Link to='/pricing' />}
                >
                  {t(SWAN_HERO.secondaryCta)}
                </Button>
              </div>

              <div className='mt-8 flex flex-wrap gap-2 text-xs font-semibold text-[#d7ebe5]'>
                {[
                  'OpenAI',
                  'Anthropic',
                  'Gemini',
                  'Azure',
                  'DeepSeek',
                  '更多协议',
                ].map((badge) => (
                  <span
                    key={badge}
                    className='rounded-full border border-white/12 bg-white/[.05] px-3 py-1.5'
                  >
                    {t(badge)}
                  </span>
                ))}
              </div>
            </div>

            <div
              className='landing-animate-fade-left rounded-lg border border-white/14 bg-white/[.07] p-4 shadow-[0_28px_90px_rgba(0,0,0,.34)] backdrop-blur-xl md:p-5'
              style={{ animationDelay: '120ms' }}
            >
              <div className='flex items-center justify-between border-b border-white/12 pb-4'>
                <div>
                  <h2 className='text-base font-bold'>{t('源头供应能力')}</h2>
                  <p className='mt-1 text-xs text-[#91aaa4]'>
                    {t('多协议接入、海量模型池、批发供给')}
                  </p>
                </div>
                <span className='rounded-lg border border-[#d7ff62]/25 bg-[#d7ff62]/10 px-3 py-1 text-xs font-bold text-[#d7ff62]'>
                  在线
                </span>
              </div>

              <div className='mt-4 grid gap-3'>
                {SWAN_SUPPLY_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className='flex items-center justify-between rounded-lg border border-white/10 bg-white/[.06] px-4 py-3'
                  >
                    <span className='text-sm text-[#d7ebe5]'>
                      {t(item.label)}
                    </span>
                    <strong className='text-sm text-[#d7ff62]'>
                      {t(item.value)}
                    </strong>
                  </div>
                ))}
              </div>

              <div className='mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3'>
                {SWAN_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className='rounded-lg border border-[#d7ff62]/18 bg-[#081f1c] p-4'
                  >
                    <div className='text-2xl font-black text-white'>
                      {t(metric.value)}
                    </div>
                    <div className='mt-1 text-xs text-[#94aaa5]'>
                      {t(metric.label)}
                    </div>
                  </div>
                ))}
              </div>

              <div className='mt-4 rounded-lg border border-white/10 bg-black/20 p-4'>
                <div className='flex items-center gap-2 text-sm font-semibold text-white'>
                  <KeyRound className='size-4 text-[#d7ff62]' />
                  {t('多协议接入示例')}
                </div>
                <pre className='mt-3 overflow-x-auto rounded-lg bg-[#040807] p-4 text-xs leading-6 text-[#b6d6cf]'>
                  <code>{`协议：OpenAI / Anthropic / Gemini / Azure
接入：统一 API 路由
模型：GPT / Claude / Gemini / DeepSeek / 更多`}</code>
                </pre>
              </div>
            </div>
          </div>

          <div className='landing-animate-fade-up mt-16 grid gap-px overflow-hidden rounded-lg border border-white/12 bg-white/12 md:grid-cols-4'>
            {SWAN_BENEFITS.map((benefit, index) => (
              <div key={benefit.title} className='bg-[#081614] p-5'>
                <div className='mb-4 flex size-9 items-center justify-center rounded-lg bg-[#d7ff62]/10'>
                  {benefitIcons[index]}
                </div>
                <h3 className='font-bold text-white'>{t(benefit.title)}</h3>
                <p className='mt-2 text-sm leading-6 text-[#98b0aa]'>
                  {t(benefit.description)}
                </p>
              </div>
            ))}
          </div>

          <div className='mt-12 grid gap-5 md:grid-cols-[.92fr_1.08fr]'>
            <section className='rounded-lg border border-white/12 bg-white/[.04] p-6'>
              <div className='flex items-center gap-2 text-sm font-bold text-[#d7ff62]'>
                <Gauge className='size-4' />
                {t('面向批发与长期供货')}
              </div>
              <h2 className='mt-4 text-2xl font-black text-white'>
                {t('主打 AI API 源头供应商，不做单一协议，不做单一模型。')}
              </h2>
              <p className='mt-4 text-sm leading-7 text-[#a8c1bb]'>
                {t(
                  '天鹅 API 聚合多协议接口与海量模型货源，适合需要长期稳定供货、低价采购和批量分发的团队。'
                )}
              </p>
            </section>

            <section className='rounded-lg border border-white/12 bg-white/[.04] p-6'>
              <div className='grid gap-3 sm:grid-cols-3'>
                {['多协议接入', '海量模型池', '源头低价'].map((item) => (
                  <div
                    key={item}
                    className='rounded-lg border border-white/10 bg-white/[.04] p-4 text-sm font-semibold text-white'
                  >
                    <Layers3 className='mb-4 size-5 text-[#d7ff62]' />
                    {t(item)}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <footer className='relative border-t border-white/10 bg-[#06100f] px-4 py-10 sm:px-6 lg:px-8'>
        <div className='mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between'>
          <div>
            <div className='flex items-center gap-3'>
              <span className='flex size-10 items-center justify-center rounded-lg border border-white/15 bg-white/8 text-xl'>
                {SWAN_HERO.logo}
              </span>
              <div>
                <div className='font-bold text-white'>
                  {t(SWAN_FOOTER.brand)}
                </div>
                <div className='mt-1 text-xs font-semibold text-[#d7ff62]'>
                  {SWAN_HERO.eyebrow}
                </div>
              </div>
            </div>
            <p className='mt-4 max-w-md text-sm leading-7 text-[#91aaa4]'>
              {t(SWAN_FOOTER.tagline)}
            </p>
            <p className='mt-3 text-xs text-[#69837d]'>
              {SWAN_FOOTER.attribution}
            </p>
          </div>

          <nav className='flex flex-wrap gap-3 text-sm font-semibold'>
            {SWAN_FOOTER.links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-lg border border-white/10 px-4 py-2 text-white/75 transition-colors hover:border-[#d7ff62]/40 hover:text-white'
                >
                  {t(link.label)}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className='rounded-lg border border-white/10 px-4 py-2 text-white/75 transition-colors hover:border-[#d7ff62]/40 hover:text-white'
                >
                  {t(link.label)}
                </Link>
              )
            )}
          </nav>
        </div>
      </footer>
    </main>
  )
}
