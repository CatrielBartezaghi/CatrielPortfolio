import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { getPortfolioContent, isLanguage, languages } from '@/data/portfolio';
import '../globals.css';

const siteUrl = 'https://catriel.dev';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) return {};
  const data = getPortfolioContent(lang);

  return {
    metadataBase: new URL(siteUrl),
    title: data.meta.title,
    description: data.meta.description,
    applicationName: 'Catriel Bartezaghi Portfolio',
    authors: [{ name: 'Catriel Bartezaghi', url: siteUrl }],
    creator: 'Catriel Bartezaghi',
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', es: '/es' },
    },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `/${lang}`,
      siteName: 'Catriel Bartezaghi',
      locale: data.meta.locale,
      type: 'website',
    },
    twitter: { card: 'summary_large_image', title: data.meta.title, description: data.meta.description },
  };
}

export default async function LanguageLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();
  const data = getPortfolioContent(lang);

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} dark antialiased scroll-smooth`}>
      <body className='min-h-full bg-background text-text-primary selection:bg-primary-soft selection:text-primary'>
        <a className='skip-link' href='#main-content'>{lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}</a>
        <Navbar data={data} language={lang} />
        <main id='main-content'>{children}</main>
        <Footer data={data} language={lang} />
      </body>
    </html>
  );
}
