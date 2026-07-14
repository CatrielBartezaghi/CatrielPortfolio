import { FileText, Mail } from 'lucide-react';
import type { PortfolioData } from '@/data/portfolio';

export function ContactSection({ data }: { data: PortfolioData }) {
  return (
    <section id='contact' className='section-shell border-t border-border'>
      <div className='mx-auto max-w-[900px] text-center'>
        <p className='font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary'>{data.contact.eyebrow}</p>
        <h2 className='mt-4 text-balance text-4xl font-bold tracking-tight text-text-primary sm:text-5xl'>{data.contact.headline}</h2>
        <p className='mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary'>{data.contact.description}</p>
        <div className='mt-9 flex flex-wrap justify-center gap-3'>
          <a href={`mailto:${data.contact.email}`} className='focus-ring inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-background hover:bg-primary-hover'><Mail className='h-5 w-5' />{data.actions.emailMe}</a>
          <a href={data.contact.links.linkedin} target='_blank' rel='noreferrer' className='button-secondary'>LinkedIn<span className='sr-only'>, {data.actions.openExternal}</span></a>
          <a href={data.contact.links.github} target='_blank' rel='noreferrer' className='button-secondary'>GitHub<span className='sr-only'>, {data.actions.openExternal}</span></a>
          <a href={data.contact.links.resume} target='_blank' rel='noreferrer' className='button-secondary'><FileText className='h-5 w-5' />{data.actions.resume}<span className='sr-only'>, {data.actions.openExternal}</span></a>
        </div>
      </div>
    </section>
  );
}
