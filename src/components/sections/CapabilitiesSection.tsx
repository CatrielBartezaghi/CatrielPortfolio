import { Bot, Braces, Database, GitPullRequestArrow, RefreshCw, UsersRound } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import type { PortfolioData } from '@/data/portfolio';

const icons = {
  logic: Braces,
  data: Database,
  integration: Bot,
  quality: GitPullRequestArrow,
  modernization: RefreshCw,
  collaboration: UsersRound,
};

export function CapabilitiesSection({ data }: { data: PortfolioData }) {
  const section = data.capabilitiesSection;
  return (
    <section id='capabilities' className='section-shell border-y border-border bg-background-soft/45'>
      <div className='mx-auto max-w-[1200px]'>
        <SectionHeading eyebrow={section.eyebrow} title={section.title} description={section.description} />
        <div className='grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3'>
          {section.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.title} className='flex flex-col bg-background p-6 sm:p-8'>
                <div className='grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary'><Icon className='h-5 w-5' /></div>
                <h3 className='mt-5 text-xl font-bold text-text-primary'>{item.title}</h3>
                <p className='mt-3 leading-relaxed text-text-secondary'>{item.description}</p>
                <p className='mt-5 text-sm leading-relaxed text-text-muted'><span className='font-semibold text-text-primary'>{section.evidenceLabel}: </span>{item.evidence}</p>
                <ul className='mt-auto pt-5 flex flex-wrap gap-2'>{item.technologies.map((tech) => <li key={tech} className='tech-tag'>{tech}</li>)}</ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
