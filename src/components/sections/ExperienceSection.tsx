import { SectionHeading } from '@/components/SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioData } from '@/data/portfolio';

export function ExperienceSection({ data }: { data: PortfolioData }) {
  return (
    <section id='experience' className='section-shell'>
      <div className='mx-auto max-w-[1000px]'>
        <SectionHeading eyebrow={data.experienceSection.eyebrow} title={data.experienceSection.title} description={data.experienceSection.description} />
        <div className='relative space-y-6 before:absolute before:bottom-8 before:left-[7px] before:top-8 before:w-px before:bg-border sm:before:left-[132px]'>
          {data.experience.map((job) => (
            <article key={`${job.company}-${job.year}`} className='relative grid gap-4 pl-8 sm:grid-cols-[108px_1fr] sm:gap-10 sm:pl-0'>
              <div className='absolute left-0 top-8 h-4 w-4 rounded-full border-2 border-primary bg-background sm:left-[125px]' aria-hidden='true' />
              <p className='pt-7 font-mono text-xs leading-relaxed text-text-muted'>{job.year}</p>
              <div className='case-card p-6 sm:p-8'>
                <a href={job.companyUrl} target='_blank' rel='noreferrer' className='focus-ring inline-flex items-center gap-1 rounded font-mono text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-hover'>
                  {job.company}<ArrowUpRight className='h-3.5 w-3.5' />
                  <span className='sr-only'>, {data.actions.openExternal}</span>
                </a>
                <h3 className='mt-2 text-2xl font-bold text-text-primary'>{job.role}</h3>
                <p className='mt-3 leading-relaxed text-text-secondary'>{job.summary}</p>
                <ul className='mt-6 space-y-3'>
                  {job.bullets.map((bullet) => <li key={bullet} className='flex gap-3 text-sm leading-relaxed text-text-secondary'><span className='mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary' />{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
