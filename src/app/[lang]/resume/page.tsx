import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ResumeDocument } from '@/components/resume/ResumeDocument';
import { isLanguage } from '@/data/portfolio';
import { getResumeContent } from '@/data/resume';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const data = getResumeContent(lang);
  return { title: `${data.name} | ${data.headline}`, description: lang === 'es' ? 'CV de Catriel Bartezaghi, desarrollador full stack con foco backend.' : 'Resume of Catriel Bartezaghi, a backend-focused Full Stack Software Engineer.', alternates: { canonical: `/${lang}/resume`, languages: { en: '/en/resume', es: '/es/resume' } } };
}
export default async function ResumePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <ResumeDocument data={getResumeContent(lang)} />;
}
