'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import type { Language, PortfolioData } from '@/data/portfolio';
import '@/app/cinematic-home.css';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CinematicHome({ data, language }: { data: PortfolioData; language: Language }) {
  const root = useRef<HTMLDivElement>(null);
  const showcase = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const statement = useRef<HTMLParagraphElement>(null);
  const es = language === 'es';
  const projects = data.caseStudies;

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 821) return;

    // Match Velox's smooth-scrolling approach without changing browser scroll restoration.
    const lenis = new Lenis({ duration: 1.1, anchors: true });
    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);
    let frame = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      frame = window.requestAnimationFrame(tick);
    };
    frame = window.requestAnimationFrame(tick);
    ScrollTrigger.refresh();

    return () => {
      window.cancelAnimationFrame(frame);
      lenis.off('scroll', onScroll);
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    const motion = gsap.matchMedia();

    motion.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.vh-hero-line', {
        yPercent: 105,
        autoAlpha: 0,
        duration: 0.95,
        stagger: 0.12,
        ease: 'power3.out',
      });

      gsap.from('.vh-hero-description', {
        y: 20,
        autoAlpha: 0,
        duration: 0.7,
        delay: 0.45,
        ease: 'power2.out',
      });

      gsap.utils.toArray<HTMLElement>('.vh-reveal').forEach((element) => {
        gsap.from(element, {
          y: 34,
          autoAlpha: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
        });
      });

      gsap.from('.vh-feature-card', {
        y: 60,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: '.vh-features-grid',
          start: 'top 75%',
          once: true,
        },
      });

      if (statement.current) {
        gsap.to(statement.current.querySelectorAll('.vh-text-word'), {
          color: '#ededed',
          stagger: 0.09,
          ease: 'none',
          scrollTrigger: {
            trigger: statement.current,
            start: 'top 82%',
            end: 'bottom 48%',
            scrub: true,
          },
        });
      }
    });

    motion.add('(min-width: 821px) and (prefers-reduced-motion: no-preference)', () => {
      if (!track.current || !showcase.current) return;
      const strip = track.current;
      const distance = () => Math.max(0, strip.scrollWidth - window.innerWidth);

      // Port of Velox's horizontal showcase: pin one quiet section instead of
      // changing multiple visual layers with every scroll step.
      gsap.to(strip, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: showcase.current,
          start: 'top top',
          end: () => '+=' + distance(),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => motion.revert();
  }, { scope: root });

  const sentence = es
    ? 'Entiendo procesos complejos y los convierto en sistemas claros, confiables y mantenibles.'
    : 'I turn complex workflows into clear, reliable, and maintainable systems.';

  return (
    <div ref={root} className='velox-home'>
      <section className='vh-hero' id='home' aria-labelledby='vh-hero-heading'>
        <div className='vh-hero-inner'>
          <p className='vh-eyebrow'>{data.hero.name} <span aria-hidden='true'>/</span> {data.hero.eyebrow}</p>
          <h1 id='vh-hero-heading'>
            {(es ? ['SOFTWARE', 'QUE FUNCIONA.'] : ['SOFTWARE', 'THAT WORKS.']).map((line) => (
              <span className='vh-line-mask' key={line}><span className='vh-hero-line'>{line}</span></span>
            ))}
          </h1>
          <p className='vh-hero-description'>{data.hero.subtitle}</p>
          <a href='#work' className='vh-scroll-cue'>
            {es ? 'Explorar proyectos' : 'Explore work'} <ArrowDown size={17} aria-hidden='true' />
          </a>
        </div>
      </section>

      <section className='vh-features' id='capabilities' aria-labelledby='vh-capabilities-heading'>
        <div className='vh-features-inner'>
          <h2 className='vh-features-title vh-reveal' id='vh-capabilities-heading'>
            {es ? <>Lo que importa va más<br className='vh-features-desktop-break' /> allá del código.</> : <>What matters goes<br className='vh-features-desktop-break' /> beyond the code.</>}
          </h2>
          <div className='vh-features-scene'>
            <div className='vh-features-grid'>
              {data.capabilitiesSection.items.map((item) => (
                <article className='vh-feature-card' key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='vh-intro vh-container' aria-labelledby='vh-intro-heading'>
        <div className='vh-section-meta vh-reveal'>
          <span>02</span>
          <span>{data.projectsSection.eyebrow}</span>
        </div>
        <div className='vh-intro-grid vh-reveal'>
          <h2 id='vh-intro-heading'>{es ? 'Proyectos reales.\nDecisiones concretas.' : 'Real work.\nReal decisions.'}</h2>
          <p>{data.projectsSection.description}</p>
        </div>
      </section>

      <section className='vh-showcase' id='work' ref={showcase} aria-label={data.projectsSection.title}>
        <div className='vh-showcase-track' ref={track}>
          {projects.map((project, index) => (
            <article className='vh-project' key={project.slug}>
              <div className='vh-project-top'>
                <span>{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
                <span>{project.category}</span>
              </div>
              <div className='vh-project-main'>
                <p className='vh-project-employer'>{project.employer}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className='vh-project-bottom'>
                <div className='vh-tags'>
                  {project.technologies.slice(0, 3).map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <Link href={'/' + language + '/work/' + project.slug} className='vh-case-link'>
                  {data.actions.viewCase} <ArrowUpRight size={18} aria-hidden='true' />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='vh-statement-section vh-container' aria-label={es ? 'Mi enfoque' : 'My approach'}>
        <p className='vh-statement' ref={statement} aria-label={sentence}>
          {sentence.split(' ').map((word, index) => <span className='vh-text-word' key={index}>{word}{' '}</span>)}
        </p>
      </section>

      <section className='vh-experience vh-container' id='experience' aria-labelledby='vh-experience-heading'>
        <div className='vh-section-meta vh-reveal'>
          <span>03</span>
          <span>{data.nav.experience}</span>
        </div>
        <h2 className='vh-heading vh-reveal' id='vh-experience-heading'>{data.experienceSection.title}</h2>
        <div className='vh-jobs'>
          {data.experience.map((job) => (
            <article className='vh-job vh-reveal' key={job.company}>
              <span>{job.year}</span>
              <div>
                <h3><a href={job.companyUrl} target='_blank' rel='noreferrer'>{job.company}<ArrowUpRight size={21} aria-hidden='true' /></a></h3>
                <p className='vh-job-role'>{job.role}</p>
                <p className='vh-job-description'>{job.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='vh-about vh-container' id='about' aria-labelledby='vh-about-heading'>
        <div className='vh-section-meta vh-reveal'>
          <span>04</span>
          <span>{data.nav.about}</span>
        </div>
        <div className='vh-about-grid vh-reveal'>
          <h2 id='vh-about-heading'>{data.about.title}</h2>
          <p>{data.about.paragraphs[0]}</p>
        </div>
      </section>

      <section className='vh-contact vh-container' id='contact' aria-labelledby='vh-contact-heading'>
        <div className='vh-contact-content vh-reveal'>
          <div className='vh-section-meta'>
            <span>05</span>
            <span>{data.nav.contact}</span>
          </div>
          <h2 id='vh-contact-heading'>{es ? '¿Trabajamos juntos?' : 'Let’s work together.'}</h2>
          <p>{data.contact.description}</p>
          <a className='vh-mail-button' href={'mailto:' + data.contact.email}>
            {data.actions.emailMe} <ArrowRight size={18} aria-hidden='true' />
          </a>
          <div className='vh-social-links'>
            <a href={data.contact.links.github} target='_blank' rel='noreferrer'>GitHub <ArrowUpRight size={14} aria-hidden='true' /></a>
            <a href={data.contact.links.linkedin} target='_blank' rel='noreferrer'>LinkedIn <ArrowUpRight size={14} aria-hidden='true' /></a>
            <a href={data.contact.links.resume} target='_blank' rel='noreferrer'>{data.actions.resume} <ArrowUpRight size={14} aria-hidden='true' /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
