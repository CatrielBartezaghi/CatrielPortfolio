import { notFound } from 'next/navigation';
import { PortfolioShell } from '@/components/PortfolioShell';
import { isLanguage } from '@/data/portfolio';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  return <PortfolioShell language={lang} />;
}
