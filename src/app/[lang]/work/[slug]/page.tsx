import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyView } from '@/components/CaseStudyView';
import { caseSlugs, getCaseStudy, getPortfolioContent, isCaseSlug, isLanguage, languages } from '@/data/portfolio';

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.flatMap((lang) => caseSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLanguage(lang) || !isCaseSlug(slug)) return {};
  const project = getCaseStudy(lang, slug);
  if (!project) return {};
  return {
    title: `${project.title} | Catriel Bartezaghi`,
    description: project.description,
    alternates: {
      canonical: `/${lang}/work/${slug}`,
      languages: { en: `/en/work/${slug}`, es: `/es/work/${slug}` },
    },
    openGraph: { title: project.title, description: project.description, type: 'article', url: `/${lang}/work/${slug}` },
  };
}

export default async function CasePage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isLanguage(lang) || !isCaseSlug(slug)) notFound();
  const project = getCaseStudy(lang, slug);
  if (!project) notFound();
  return <CaseStudyView project={project} data={getPortfolioContent(lang)} language={lang} />;
}
