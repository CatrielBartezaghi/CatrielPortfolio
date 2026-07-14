import { Check } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import type { PortfolioData } from '@/data/portfolio';

export function AboutSection({ data }: { data: PortfolioData }) {
  return (
    <section id='about' className='section-shell border-y border-border bg-background-soft/45'>
      <div className='mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-[1fr_0.65fr] lg:gap-16'>
        <div>
          <SectionHeading eyebrow={data.about.eyebrow} title={data.about.title} />
          <div className='space-y-5 text-lg leading-relaxed text-text-secondary'>
            {data.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <aside className='case-card self-start p-6 sm:p-8' aria-label='Profile facts'>
          <ul className='space-y-4'>
            {data.about.facts.map((fact) => <li key={fact} className='flex items-center gap-3 text-text-secondary'><span className='grid h-6 w-6 place-items-center rounded-full bg-primary-soft text-primary'><Check className='h-4 w-4' /></span>{fact}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
