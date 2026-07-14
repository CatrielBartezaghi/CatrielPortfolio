import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { PortfolioData } from '@/data/portfolio';

export function AcademicSection({ data }: { data: PortfolioData }) {
  return (
    <section className='section-shell pb-0'>
      <article className='mx-auto max-w-[1100px] rounded-2xl border border-border bg-surface/55 p-7 sm:p-9'>
        <div>
          <p className='font-mono text-xs font-semibold uppercase tracking-[0.18em] text-secondary'>{data.academic.eyebrow}</p>
          <h2 className='mt-3 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl'>{data.academic.title}</h2>
          <p className='mt-2 font-semibold text-text-secondary'>{data.academic.institution}</p>
          <p className='mt-1 font-mono text-xs uppercase tracking-wider text-text-muted'>{data.academic.period}</p>
          <div className='mt-6 border-t border-border pt-6'>
            <p className='font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary'>{data.academic.thesisLabel}</p>
            <h3 className='mt-2 text-xl font-bold text-text-primary'>{data.academic.thesisTitle}</h3>
            <p className='mt-3 max-w-3xl leading-relaxed text-text-secondary'>{data.academic.description}</p>
            <ul className='mt-4 grid gap-2 sm:grid-cols-2'>
              {data.academic.evidence.map((item) => <li key={item} className='flex gap-2 text-sm leading-relaxed text-text-secondary'><CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-primary' />{item}</li>)}
            </ul>
          </div>
          <ul className='mt-5 flex flex-wrap gap-2'>{data.academic.technologies.map((tech) => <li key={tech} className='tech-tag'>{tech}</li>)}</ul>
          <a href={data.academic.link} target='_blank' rel='noreferrer' className='focus-ring mt-8 inline-flex items-center gap-2 rounded font-semibold text-primary hover:text-primary-hover'>
            {data.academic.linkLabel}<ArrowRight className='h-4 w-4' />
            <span className='sr-only'>, {data.actions.openExternal}</span>
          </a>
        </div>
      </article>
    </section>
  );
}
