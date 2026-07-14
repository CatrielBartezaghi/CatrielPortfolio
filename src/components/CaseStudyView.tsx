import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { CaseDiagram } from '@/components/CaseDiagram';
import type { CaseInitiative, CaseStudy, Language, PortfolioData } from '@/data/portfolio';

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className='case-detail-section'>
      <h2>{title}</h2>
      <ul>{items.map((item) => <li key={item}><CheckCircle2 className='mt-1 h-4 w-4 shrink-0 text-primary' />{item}</li>)}</ul>
    </section>
  );
}

function InitiativesSection({ title, items, openExternal }: { title: string; items: CaseInitiative[]; openExternal: string }) {
  return (
    <section className='case-detail-section'>
      <h2>{title}</h2>
      <div className='mt-5 space-y-4'>
        {items.map((item) => (
          <article key={item.name} className='rounded-xl border border-border bg-background/35 p-5'>
            <p className='!mt-0 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-primary'>{item.domain}</p>
            <h3 className='mt-2 text-lg font-bold text-text-primary'>
              {item.href ? (
                <a href={item.href} target='_blank' rel='noreferrer' className='focus-ring inline-flex items-center gap-1 rounded underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary'>
                  {item.name}<ArrowUpRight className='h-4 w-4' />
                  <span className='sr-only'>, {openExternal}</span>
                </a>
              ) : item.name}
            </h3>
            <p className='!mt-3 leading-relaxed text-text-secondary'>{item.description}</p>
            <ul>
              {item.contributions.map((contribution) => (
                <li key={contribution}><CheckCircle2 className='mt-1 h-4 w-4 shrink-0 text-primary' />{contribution}</li>
              ))}
            </ul>
            <ul className='!mt-5 flex flex-wrap gap-2'>
              {item.technologies.map((technology) => <li key={technology} className='tech-tag !mt-0 !leading-normal'>{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyView({ project, data, language }: { project: CaseStudy; data: PortfolioData; language: Language }) {
  return (
    <article className='pb-24 pt-28'>
      <header className='overflow-hidden px-6 pb-14 pt-10'>
        <div className='mx-auto w-[calc(100vw-3rem)] max-w-[1100px] sm:w-full'>
          <Link href={`/${language}#work`} className='focus-ring inline-flex items-center gap-2 rounded text-sm font-semibold text-text-secondary hover:text-primary'>
            <ArrowLeft className='h-4 w-4' />{data.actions.backToWork}
          </Link>
          <div className='mt-10 w-[calc(100vw-3rem)] min-w-0 max-w-4xl sm:w-full'>
            <p className='font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary'>{project.category}</p>
            <div className='mt-3 flex flex-wrap items-center gap-2'>
              <p className='text-sm text-text-muted'>{project.employer}</p>
              {project.status ? <span className='inline-flex rounded-full border border-secondary/30 bg-secondary-soft px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-secondary'>{project.status}</span> : null}
            </div>
            <h1 className='mt-5 break-words text-balance text-4xl font-bold tracking-[-0.035em] text-text-primary sm:text-6xl'>{project.title}</h1>
            <p className='mt-6 break-words text-xl leading-relaxed text-text-secondary'>{project.description}</p>
            <ul className='mt-7 flex flex-wrap gap-2'>{project.technologies.map((tech) => <li key={tech} className='tech-tag'>{tech}</li>)}</ul>
          </div>
        </div>
      </header>

      <div className='px-6'>
        <div className='mx-auto max-w-[1100px]'>
          <CaseDiagram type={project.diagram} language={language} />
          {project.diagramCaption ? <p className='mt-3 text-center font-mono text-xs font-semibold uppercase tracking-[0.14em] text-text-muted'>{project.diagramCaption}</p> : null}
        </div>
      </div>

      <div className='mx-auto mt-14 grid max-w-[1100px] gap-8 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14'>
        <aside className='lg:sticky lg:top-28 lg:self-start'>
          <p className='font-mono text-xs font-semibold uppercase tracking-[0.18em] text-primary'>{data.casePage.overview}</p>
          <p className='mt-4 leading-relaxed text-text-secondary'>{project.summary}</p>
          {project.links.length ? (
            <div className='mt-6 flex flex-col gap-3'>
              {project.links.map((link) => (
                <a key={link.href} href={link.href} target='_blank' rel='noreferrer' className='focus-ring inline-flex items-center gap-2 rounded font-semibold text-primary hover:text-primary-hover'>
                  <ExternalLink className='h-4 w-4' />{link.label}<ArrowUpRight className='h-4 w-4' />
                  <span className='sr-only'>, {data.actions.openExternal}</span>
                </a>
              ))}
            </div>
          ) : null}
        </aside>

        <div className='space-y-5'>
          <section className='case-detail-section'><h2>{data.casePage.context}</h2><p>{project.context}</p></section>
          <section className='case-detail-section'><h2>{data.casePage.problem}</h2><p>{project.problem}</p></section>
          <section className='case-detail-section'><h2>{data.casePage.responsibility}</h2><p>{project.role}</p></section>
          {project.initiatives?.length ? <InitiativesSection title={data.casePage.initiatives} items={project.initiatives} openExternal={data.actions.openExternal} /> : null}
          <ListSection title={data.casePage.constraints} items={project.constraints} />
          <ListSection title={data.casePage.decisions} items={project.decisions} />
          <ListSection title={data.casePage.implementation} items={project.implementation} />
          <ListSection title={data.casePage.quality} items={project.quality} />
          <ListSection title={data.casePage.result} items={project.results} />
          <ListSection title={data.casePage.tradeoffs} items={project.tradeoffs} />
        </div>
      </div>
    </article>
  );
}
