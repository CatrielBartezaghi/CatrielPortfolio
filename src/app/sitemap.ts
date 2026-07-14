import type { MetadataRoute } from 'next';
import { caseSlugs, languages } from '@/data/portfolio';

const siteUrl = 'https://catriel.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const homeRoutes: MetadataRoute.Sitemap = languages.map((language) => ({
    url: `${siteUrl}/${language}`,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: { languages: { en: `${siteUrl}/en`, es: `${siteUrl}/es` } },
  }));

  const caseRoutes: MetadataRoute.Sitemap = languages.flatMap((language) =>
    caseSlugs.map((slug) => ({
      url: `${siteUrl}/${language}/work/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
      alternates: {
        languages: {
          en: `${siteUrl}/en/work/${slug}`,
          es: `${siteUrl}/es/work/${slug}`,
        },
      },
    })),
  );

  return [...homeRoutes, ...caseRoutes];
}
