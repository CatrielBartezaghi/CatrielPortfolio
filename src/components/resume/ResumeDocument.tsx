import type { ResumeData, ResumeLink } from '@/data/resume';
import styles from './ResumeDocument.module.css';

function TextLink({ link }: { link: ResumeLink }) {
  const external = link.href.startsWith('http');
  return <a href={link.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{link.text}</a>;
}
const Title = ({ children }: { children: React.ReactNode }) => <h2 className={styles.sectionTitle}>{children}</h2>;

export function ResumeDocument({ data }: { data: ResumeData }) {
  const pdf = data.language === 'es' ? '/catriel-bartezaghi-resume-es.pdf' : '/catriel-bartezaghi-resume.pdf';
  return <div className={styles.route}>
    <div className={styles.actions}><a href={`/${data.language}`}>{data.language === 'es' ? 'Volver al portfolio' : 'Back to portfolio'}</a><a href={pdf}>{data.language === 'es' ? 'Descargar PDF' : 'Download PDF'}</a></div>
    <article className={styles.page} aria-label={`${data.name} — ${data.headline}`}>
      <header className={styles.header}><h1>{data.name}</h1><p className={styles.headline}>{data.headline}</p><div className={styles.contact}><span>{data.location}</span>{data.contact.map(link => <TextLink key={link.label} link={link} />)}</div></header>
      <section><Title>{data.labels.summary}</Title><p>{data.summary}</p></section>
      <section><Title>{data.labels.skills}</Title><div className={styles.skills}>{data.skills.map(group => <p key={group.label}><strong>{group.label}:</strong> {group.items.join(', ')}</p>)}</div></section>
      <section><Title>{data.labels.experience}</Title><div className={styles.entries}>{data.experience.map(entry => <section className={styles.entry} key={entry.company}><div className={styles.entryHeader}><h3>{entry.company} — {entry.role}</h3><p>{entry.period}</p></div><ul>{entry.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></section>)}</div></section>
      <section><Title>{data.labels.project}</Title><section className={styles.entry}><div className={styles.entryHeader}><h3>{data.project.name}</h3><p>{data.project.status}</p></div><p className={styles.projectLinks}>{data.project.links.map((link, index) => <span key={link.label}>{index > 0 && ' · '}<TextLink link={link} /></span>)}</p><ul>{data.project.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></section></section>
      <section><Title>{data.labels.education}</Title><div className={styles.education}><div><h3>{data.education.degree}</h3><p>{data.education.institution} · {data.education.period}</p></div><div><h3>{data.languages.label}</h3><p>{data.languages.items.join(' · ')} · <a href={data.languages.certificateHref}>{data.languages.certificate}</a></p></div></div></section>
    </article>
  </div>;
}
