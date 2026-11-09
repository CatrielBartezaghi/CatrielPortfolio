'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowDownRight, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Language, PortfolioData } from '@/data/portfolio';
import '@/app/cinematic-home.css';

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function CinematicHome({ data, language }: { data: PortfolioData; language: Language }) {
  const [activeProject, setActiveProject] = useState(0);
  const projectsRef = useRef<HTMLElement>(null);
  const statementRef = useRef<HTMLParagraphElement>(null);
  const isSpanish = language === 'es';
  const projects = data.caseStudies;
  const statement = isSpanish
    ? 'No se trata solamente de escribir código. Se trata de entender un problema complejo, tomar decisiones responsables y construir software que siga funcionando cuando las cosas cambian.'
    : 'It is not just about writing code. It is about understanding complex problems, making thoughtful decisions, and building software that keeps working when things change.';

  useEffect(() => {
    const projectSection = projectsRef.current;
    const statementElement = statementRef.current;
    const words = statementElement?.querySelectorAll<HTMLElement>('[data-cinema-word]');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let scheduledFrame = 0;

    const update = () => {
      scheduledFrame = 0;
      if (projectSection && window.matchMedia('(min-width: 821px)').matches) {
        const rect = projectSection.getBoundingClientRect();
        const distance = Math.max(1, rect.height - window.innerHeight);
        const progress = clamp((80 - rect.top) / distance);
        setActiveProject((current) => {
          const next = Math.min(projects.length - 1, Math.floor(progress * projects.length));
          return next === current ? current : next;
        });
      }

      if (statementElement && words?.length) {
        const rect = statementElement.getBoundingClientRect();
        const progress = clamp((window.innerHeight * 0.82 - rect.top) / (rect.height + window.innerHeight * 0.38));
        const litCount = motionQuery.matches ? words.length : Math.ceil(progress * words.length);
        words.forEach((word, index) => {
          word.classList.toggle('is-lit', index < litCount);
        });
      }
    };

    const requestUpdate = () => {
      if (!scheduledFrame) scheduledFrame = window.requestAnimationFrame(update);
    };

    const onMotionChange = () => requestUpdate();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    motionQuery.addEventListener('change', onMotionChange);
    update();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cinema-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

    document.querySelectorAll<HTMLElement>('.cinema-home [data-cinema-reveal]').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      motionQuery.removeEventListener('change', onMotionChange);
      if (scheduledFrame) window.cancelAnimationFrame(scheduledFrame);
      observer.disconnect();
    };
  }, [projects.length, statement]);

  const active = projects[activeProject];

  return (
    <div className='cinema-home'>
      <section className='cinema-hero' aria-labelledby='cinema-hero-title'>
        <div className='cinema-hero-grain' aria-hidden='true' />
        <div className='cinema-hero-orbit cinema-hero-orbit-one' aria-hidden='true' />
        <div className='cinema-hero-orbit cinema-hero-orbit-two' aria-hidden='true' />
        <div className='cinema-hero-content'>
          <div className='cinema-hero-topline'>
            <span><span className='cinema-status-dot' /> {isSpanish ? 'INGENIERÍA DE SOFTWARE / FULL STACK' : 'SOFTWARE ENGINEERING / FULL STACK'}</span>
            <span className='cinema-hero-location'>SANTA FE · ARGENTINA</span>
          </div>
          <h1 id='cinema-hero-title' className='cinema-hero-heading'>
            {(isSpanish ? ['SOFTWARE', 'QUE HACE', 'LA DIFERENCIA.'] : ['BUILDING', 'SOFTWARE', 'THAT MATTERS.']).map((line, index) => (
              <span className='cinema-hero-line-clip' key={line}>
                <span className={'cinema-hero-line cinema-hero-line-' + index}>{line}</span>
              </span>
            ))}
          </h1>
          <div className='cinema-hero-lower'>
            <p className='cinema-hero-intro'>{data.hero.subtitle}</p>
            <a className='cinema-circle-link' href='#work' aria-label={data.actions.viewWork}>
              <ArrowDownRight size={34} strokeWidth={1.25} aria-hidden='true' />
            </a>
          </div>
        </div>
        <div className='cinema-hero-bottom'>
          <span>CATRIEL BARTEZAGHI — {isSpanish ? 'DESARROLLADOR FULL STACK' : 'FULL STACK DEVELOPER'}</span>
          <span>{isSpanish ? 'DESLIZÁ PARA EXPLORAR' : 'SCROLL TO EXPLORE'} <span aria-hidden='true'>↓</span></span>
        </div>
      </section>

      <section className='cinema-work-intro' aria-labelledby='cinema-work-heading'>
        <div className='cinema-frame cinema-work-intro-inner' data-cinema-reveal>
          <p className='cinema-kicker'><span>01 /</span> {data.projectsSection.eyebrow}</p>
          <div className='cinema-work-intro-grid'>
            <h2 id='cinema-work-heading'>{isSpanish ? <>MENOS PROMESAS.<br /><em>MÁS SISTEMAS.</em></> : <>LESS TALK.<br /><em>MORE SYSTEMS.</em></>}</h2>
            <p>{data.projectsSection.description}</p>
          </div>
          <div className='cinema-section-divider' />
        </div>
      </section>

      <section className='cinema-projects-scroll' id='work' ref={projectsRef} aria-label={data.projectsSection.title}>
        <div className='cinema-pinned'>
          <div className='cinema-pinned-top'>
            <p className='cinema-kicker'><span>01 /</span> {data.nav.work}</p>
            <span className='cinema-pinned-count'>0{activeProject + 1} <span>/ 0{projects.length}</span></span>
          </div>
          <article className='cinema-stage' key={active.slug} aria-live='polite'>
            <div className='cinema-stage-copy'>
              <p className='cinema-stage-category'>{active.category} <span aria-hidden='true'>/</span> {active.employer}</p>
              <h3>{active.title}</h3>
              <p className='cinema-stage-description'>{active.description}</p>
              <div className='cinema-stage-tags'>
                {active.technologies.slice(0, 4).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <Link className='cinema-text-link' href={'/' + language + '/work/' + active.slug}>
                {data.actions.viewCase} <ArrowUpRight size={21} aria-hidden='true' />
              </Link>
            </div>
            <div className={'cinema-stage-art cinema-stage-art-' + activeProject} aria-hidden='true'>
              <span className='cinema-art-number'>0{activeProject + 1}</span>
              <div className='cinema-art-ring cinema-art-ring-one' />
              <div className='cinema-art-ring cinema-art-ring-two' />
              <div className='cinema-art-cross cinema-art-cross-one'>+</div>
              <div className='cinema-art-cross cinema-art-cross-two'>+</div>
              <div className='cinema-art-inner'>
                <span>{isSpanish ? 'SISTEMAS / CASO' : 'SYSTEMS / CASE'}</span>
                <strong>{String(activeProject + 1).padStart(2, '0')}</strong>
                <span>{active.slug.toUpperCase().replaceAll('-', ' / ')}</span>
              </div>
              <span className='cinema-art-caption'>CB® — SELECTED ENGINEERING</span>
            </div>
          </article>
          <div className='cinema-projects-progress' aria-label={isSpanish ? 'Progreso de proyectos' : 'Project progress'}>
            {projects.map((project, index) => <span key={project.slug} className={index === activeProject ? 'is-current' : ''} />)}
          </div>
          <div className='cinema-pinned-bottom'>
            <span>{isSpanish ? 'PROYECTOS / DESPLAZÁ PARA CONTINUAR' : 'PROJECTS / KEEP SCROLLING'}</span>
            <span>{isSpanish ? 'DEL PROBLEMA A LA SOLUCIÓN' : 'FROM PROBLEM TO SOLUTION'}</span>
          </div>
        </div>
        <div className='cinema-mobile-projects'>
          {projects.map((project, index) => (
            <article className='cinema-mobile-project' key={project.slug}>
              <p className='cinema-stage-category'>0{index + 1} / {project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className='cinema-stage-tags'>
                {project.technologies.slice(0, 3).map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <Link className='cinema-text-link' href={'/' + language + '/work/' + project.slug}>
                {data.actions.viewCase} <ArrowUpRight size={20} aria-hidden='true' />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className='cinema-capabilities' id='capabilities' aria-labelledby='cinema-capabilities-title'>
        <div className='cinema-frame'>
          <div className='cinema-section-divider' />
          <div className='cinema-section-head' data-cinema-reveal>
            <p className='cinema-kicker'><span>02 /</span> {data.nav.capabilities}</p>
            <h2 id='cinema-capabilities-title'>{isSpanish ? <>EL CÓDIGO ES<br /><em>EL MEDIO.</em></> : <>CODE IS JUST<br /><em>THE MEDIUM.</em></>}</h2>
          </div>
          <p className='cinema-statement' ref={statementRef} aria-label={statement}>
            {statement.split(' ').map((word, index) => <span data-cinema-word key={index}>{word}{' '}</span>)}
          </p>
          <div className='cinema-capability-list'>
            {data.capabilitiesSection.items.map((item, index) => (
              <div className='cinema-capability-row' key={item.title} data-cinema-reveal>
                <span className='cinema-capability-index'>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ArrowUpRight aria-hidden='true' size={22} strokeWidth={1.2} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='cinema-experience' id='experience' aria-labelledby='cinema-experience-title'>
        <div className='cinema-frame'>
          <div className='cinema-section-divider' />
          <div className='cinema-section-head' data-cinema-reveal>
            <p className='cinema-kicker'><span>03 /</span> {data.nav.experience}</p>
            <h2 id='cinema-experience-title'>{isSpanish ? <>TRABAJO REAL.<br /><em>IMPACTO REAL.</em></> : <>REAL WORK.<br /><em>REAL IMPACT.</em></>}</h2>
          </div>
          <div className='cinema-experience-list'>
            {data.experience.map((job, index) => (
              <article className='cinema-experience-item' key={job.company} data-cinema-reveal>
                <div className='cinema-experience-year'>{job.year}</div>
                <div className='cinema-experience-details'>
                  <span className='cinema-experience-number'>0{index + 1} / {job.role}</span>
                  <h3><a href={job.companyUrl} target='_blank' rel='noreferrer'>{job.company} <ExternalLink size={24} aria-hidden='true' /></a></h3>
                  <p>{job.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='cinema-about' id='about' aria-labelledby='cinema-about-title'>
        <div className='cinema-frame cinema-about-grid' data-cinema-reveal>
          <p className='cinema-kicker'><span>04 /</span> {data.nav.about}</p>
          <div>
            <h2 id='cinema-about-title'>{isSpanish ? 'PENSAR EN SISTEMAS.' : 'THINK IN SYSTEMS.'}</h2>
            <p>{data.about.paragraphs[0]}</p>
            <div className='cinema-facts'>{data.about.facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
          </div>
        </div>
      </section>

      <section className='cinema-contact' id='contact' aria-labelledby='cinema-contact-title'>
        <div className='cinema-frame cinema-contact-inner' data-cinema-reveal>
          <p className='cinema-kicker'><span>05 /</span> {data.nav.contact}</p>
          <h2 id='cinema-contact-title'>{isSpanish ? <>¿HACEMOS<br /><em>ALGO BUENO?</em></> : <>LET&apos;S MAKE<br /><em>IT MATTER.</em></>}</h2>
          <div className='cinema-contact-actions'>
            <a className='cinema-contact-mail' href={'mailto:' + data.contact.email}>
              {data.contact.email} <ArrowUpRight size={27} aria-hidden='true' />
            </a>
            <p>{data.contact.description}</p>
          </div>
          <div className='cinema-contact-links'>
            <a href={data.contact.links.github} target='_blank' rel='noreferrer'>GITHUB <ArrowUpRight size={16} aria-hidden='true' /></a>
            <a href={data.contact.links.linkedin} target='_blank' rel='noreferrer'>LINKEDIN <ArrowUpRight size={16} aria-hidden='true' /></a>
            <a href={data.contact.links.resume} target='_blank' rel='noreferrer'>{data.actions.resume.toUpperCase()} <ArrowUpRight size={16} aria-hidden='true' /></a>
            <Link href={'/' + language + '/work/' + projects[0].slug}>{isSpanish ? 'CASO DESTACADO' : 'FEATURED CASE'} <ArrowRight size={16} aria-hidden='true' /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
