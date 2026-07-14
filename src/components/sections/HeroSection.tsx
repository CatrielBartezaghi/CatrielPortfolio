import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import type { PortfolioData } from '@/data/portfolio';

export function HeroSection({ data }: { data: PortfolioData }) {
  return (
    <section className='hero-gradient relative overflow-hidden px-6 pb-20 pt-32 sm:pt-36 lg:pb-28'>
      <div className='mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20'>
        <div className='relative z-10'>
          <p className='mb-5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary'>{data.hero.eyebrow}</p>
          <h1 className='max-w-[820px] text-balance text-5xl font-bold leading-[1.04] tracking-[-0.045em] text-text-primary sm:text-6xl lg:text-7xl'>
            {data.hero.headline}
          </h1>
          <p className='mt-7 max-w-3xl text-xl leading-relaxed text-text-secondary sm:text-2xl'>{data.hero.subtitle}</p>
          <p className='mt-4 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg'>{data.hero.supportingText}</p>

          <ul className='mt-7 flex flex-wrap gap-x-6 gap-y-3' aria-label='Core capabilities'>
            {data.hero.proofPoints.map((point) => (
              <li key={point} className='flex items-center gap-2 text-sm font-medium text-text-secondary'>
                <span className='grid h-5 w-5 place-items-center rounded-full bg-success-soft text-success'><Check className='h-3.5 w-3.5' /></span>
                {point}
              </li>
            ))}
          </ul>

          <div className='mt-9 flex flex-wrap gap-3'>
            <a href='#work' className='focus-ring inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-background transition-colors hover:bg-primary-hover'>
              {data.actions.viewWork}<ArrowRight className='h-4 w-4' />
            </a>
            <a href={data.contact.links.resume} target='_blank' rel='noreferrer' className='focus-ring inline-flex items-center rounded-lg border border-border bg-surface px-5 py-3 font-semibold text-text-primary transition-colors hover:border-primary/60 hover:text-primary'>
              {data.actions.downloadResume}<span className='sr-only'>, {data.actions.openExternal}</span>
            </a>
          </div>
        </div>

        <div className='relative mx-auto hidden lg:block lg:w-[390px] lg:translate-x-8 lg:translate-y-4 lg:justify-self-end'>
          <div aria-hidden='true' className='absolute -inset-10 rounded-full bg-primary/15 blur-3xl' />
          <div className='relative aspect-square overflow-hidden rounded-full shadow-[0_24px_70px_rgba(0,0,0,0.36)]'>
            <Image src='/me.jfif' alt={data.hero.imageAlt} fill priority sizes='390px' className='scale-[1.01] object-cover' />
          </div>
        </div>
      </div>
    </section>
  );
}
