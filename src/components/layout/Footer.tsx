import Link from 'next/link';
import type { Language, PortfolioData } from '@/data/portfolio';

export function Footer({ data, language }: { data: PortfolioData; language: Language }) {
  return (
    <footer className='border-t border-border bg-background'>
      <div className='mx-auto flex max-w-[1200px] flex-col gap-6 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between'>
        <p className='text-text-muted'>© {new Date().getFullYear()} {data.hero.name}. {data.footer.phrase}</p>
        <nav className='flex flex-wrap gap-5' aria-label='Footer navigation'>
          <Link href={`/${language}#work`} className='focus-ring rounded text-text-secondary hover:text-primary'>{data.nav.work}</Link>
          <a href={data.contact.links.github} target='_blank' rel='noreferrer' className='focus-ring rounded text-text-secondary hover:text-primary'>GitHub<span className='sr-only'>, {data.actions.openExternal}</span></a>
          <a href={data.contact.links.linkedin} target='_blank' rel='noreferrer' className='focus-ring rounded text-text-secondary hover:text-primary'>LinkedIn<span className='sr-only'>, {data.actions.openExternal}</span></a>
          <a href={`mailto:${data.contact.email}`} className='focus-ring rounded text-text-secondary hover:text-primary'>{data.footer.emailLabel}</a>
        </nav>
      </div>
    </footer>
  );
}
