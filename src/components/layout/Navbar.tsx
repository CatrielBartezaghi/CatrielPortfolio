import Link from 'next/link';
import type { Language, PortfolioData } from '@/data/portfolio';

export function Navbar({ data, language }: { data: PortfolioData; language: Language }) {
  const otherLanguage = language === 'en' ? 'es' : 'en';

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl'>
      <div className='mx-auto flex h-18 max-w-[1200px] items-center gap-3 px-4 sm:px-6'>
        <Link href={`/${language}`} className='focus-ring flex min-w-0 items-center gap-3 rounded-md' aria-label={`${data.hero.name} home`}>
          <span className='grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/35 bg-primary-soft font-mono text-sm font-bold text-primary'>CB</span>
          <span className='hidden truncate text-lg font-semibold tracking-tight sm:inline'>{data.hero.name}</span>
        </Link>

        <nav className='ml-auto hidden items-center gap-5 text-sm lg:flex' aria-label='Primary navigation'>
          <a href={`/${language}#work`} className='focus-ring rounded text-text-secondary transition-colors hover:text-text-primary'>{data.nav.work}</a>
          <a href={`/${language}#capabilities`} className='focus-ring rounded text-text-secondary transition-colors hover:text-text-primary'>{data.nav.capabilities}</a>
          <a href={`/${language}#experience`} className='focus-ring rounded text-text-secondary transition-colors hover:text-text-primary'>{data.nav.experience}</a>
          <a href={`/${language}#about`} className='focus-ring rounded text-text-secondary transition-colors hover:text-text-primary'>{data.nav.about}</a>
        </nav>

        <div className='ml-auto flex shrink-0 items-center gap-2 lg:ml-3'>
          <Link href={`/${otherLanguage}`} hrefLang={otherLanguage} aria-label={data.languageToggle.label} className='focus-ring inline-flex h-9 items-center rounded-full border border-border bg-surface px-3 font-mono text-xs font-semibold text-text-secondary transition-colors hover:border-primary/60 hover:text-primary'>
            {data.languageToggle.shortLabel}
          </Link>
          <a href={`/${language}#contact`} className='focus-ring inline-flex h-9 items-center rounded-full bg-primary px-3 text-sm font-semibold text-background transition-colors hover:bg-primary-hover sm:px-4'>
            {data.nav.contact}
          </a>
        </div>
      </div>
    </header>
  );
}
