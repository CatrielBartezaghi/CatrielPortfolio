export function SectionHeading({ eyebrow, title, description, centered = false }: { eyebrow: string; title: string; description?: string; centered?: boolean }) {
  return (
    <div className={centered ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-12 max-w-3xl'}>
      <p className='mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary'>{eyebrow}</p>
      <h2 className='text-balance text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl'>{title}</h2>
      {description ? <p className='mt-5 text-lg leading-relaxed text-text-secondary'>{description}</p> : null}
    </div>
  );
}
