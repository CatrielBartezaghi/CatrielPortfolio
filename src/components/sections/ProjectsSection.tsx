import Link from 'next/link';
import { ArrowRight, CheckCircle2, CircleAlert, GitBranch, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import type { CaseStudy, Language, PortfolioData } from '@/data/portfolio';

function TechnologyList({ items }: { items: string[] }) {
  return <ul className='flex flex-wrap gap-2'>{items.map((item) => <li key={item} className='tech-tag'>{item}</li>)}</ul>;
}

function ProjectStatus({ status }: { status?: string }) {
  if (!status) return null;

  return <span className='inline-flex rounded-full border border-secondary/30 bg-secondary-soft px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-wider text-secondary'>{status}</span>;
}

const insightIcons = { problem: CircleAlert, decision: GitBranch, result: ShieldCheck };

function FeaturedSummary({ project }: { project: CaseStudy }) {
  if (!project.featuredSummary) return null;

  return (
    <div className='flex h-full flex-col justify-center'>
      <p className='font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary'>{project.featuredSummary.eyebrow}</p>
      <h4 className='mt-3 max-w-md text-2xl font-bold tracking-tight text-text-primary'>{project.featuredSummary.title}</h4>
      <div className='mt-7 space-y-3'>
        {project.featuredSummary.items.map((item) => {
          const Icon = insightIcons[item.kind];
          return (
            <div key={item.label} className='rounded-xl border border-border bg-surface/65 p-5'>
              <div className='flex items-center gap-2 text-primary'><Icon className='h-4 w-4' /><p className='font-mono text-xs font-semibold uppercase tracking-wider'>{item.label}</p></div>
              <p className='mt-3 text-sm leading-relaxed text-text-secondary'>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SecondaryCase({ project, data, language }: { project: CaseStudy; data: PortfolioData; language: Language }) {
  return (
    <article className='case-card group flex h-full flex-col p-6 sm:p-7'>
      <p className='font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary'>{project.category}</p>
      <div className='mt-2 flex flex-wrap items-center gap-2'>
        <p className='text-sm text-text-muted'>{project.employer}</p>
        <ProjectStatus status={project.status} />
      </div>
      <h3 className='mt-4 text-2xl font-bold tracking-tight text-text-primary'>{project.title}</h3>
      <p className='mt-4 leading-relaxed text-text-secondary'>{project.description}</p>
      <div className='mt-6 flex-1'>
        <p className='mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted'>{data.projectsSection.evidenceLabel}</p>
        <ul className='space-y-2'>
          {project.evidence.slice(0, 4).map((item) => <li key={item} className='flex gap-2 text-sm leading-relaxed text-text-secondary'><CheckCircle2 className='mt-0.5 h-4 w-4 shrink-0 text-primary' />{item}</li>)}
        </ul>
      </div>
      <div className='mt-6'><TechnologyList items={project.technologies} /></div>
      <Link href={`/${language}/work/${project.slug}`} className='focus-ring mt-7 inline-flex w-fit items-center gap-2 rounded font-semibold text-primary group-hover:text-primary-hover'>
        {data.actions.viewCase}<ArrowRight className='h-4 w-4 transition-transform group-hover:translate-x-1' />
      </Link>
    </article>
  );
}

export function ProjectsSection({ data, language }: { data: PortfolioData; language: Language }) {
  const [featured, ...secondary] = data.caseStudies;

  return (
    <section id='work' className='section-shell border-t border-border/60'>
      <div className='mx-auto max-w-[1200px]'>
        <SectionHeading eyebrow={data.projectsSection.eyebrow} title={data.projectsSection.title} description={data.projectsSection.description} />

        <article className='case-card overflow-hidden'>
          <div className='grid lg:grid-cols-[1.05fr_0.95fr]'>
            <div className='p-7 sm:p-10 lg:p-12'>
              <span className='inline-flex rounded-full border border-primary/30 bg-primary-soft px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-primary'>{data.projectsSection.featuredLabel}</span>
              <p className='mt-5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-primary'>{featured.category}</p>
              <div className='mt-2 flex flex-wrap items-center gap-2'>
                <p className='text-sm text-text-muted'>{featured.employer}</p>
                <ProjectStatus status={featured.status} />
              </div>
              <h3 className='mt-4 max-w-2xl text-3xl font-bold tracking-tight text-text-primary sm:text-4xl'>{featured.title}</h3>
              <p className='mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary'>{featured.description}</p>
              <ul className='mt-7 space-y-3'>
                {featured.evidence.map((item) => <li key={item} className='flex gap-3 text-sm leading-relaxed text-text-secondary'><CheckCircle2 className='mt-0.5 h-5 w-5 shrink-0 text-primary' />{item}</li>)}
              </ul>
              <div className='mt-7'><TechnologyList items={featured.technologies} /></div>
              <Link href={`/${language}/work/${featured.slug}`} className='focus-ring mt-8 inline-flex items-center gap-2 rounded font-semibold text-primary hover:text-primary-hover'>
                {data.actions.viewCase}<ArrowRight className='h-4 w-4' />
              </Link>
            </div>
            <div className='border-t border-border bg-background-soft/70 p-5 sm:p-8 lg:border-l lg:border-t-0 lg:p-10'>
              <FeaturedSummary project={featured} />
            </div>
          </div>
        </article>

        <div className='mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {secondary.map((project) => <SecondaryCase key={project.slug} project={project} data={data} language={language} />)}
        </div>
      </div>
    </section>
  );
}
