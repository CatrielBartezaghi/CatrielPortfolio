import { contentEn } from '@/data/portfolio-en';
import { contentEs } from '@/data/portfolio-es';

export const languages = ['en', 'es'] as const;
export type Language = (typeof languages)[number];

export const caseSlugs = [
  'industrial-traceability',
  'erp-commercial-modernization',
  'financial-workflows',
  'tallynorth',
] as const;
export type CaseSlug = (typeof caseSlugs)[number];
export type DiagramType = 'traceability' | 'modernization' | 'finance' | 'cipax' | 'tallynorth';

export type CaseInitiative = {
  name: string;
  href?: string;
  domain: string;
  description: string;
  contributions: string[];
  technologies: string[];
};

export type CaseStudy = {
  slug: CaseSlug;
  featured: boolean;
  category: string;
  employer: string;
  status?: string;
  title: string;
  description: string;
  evidence: string[];
  technologies: string[];
  diagram: DiagramType;
  diagramCaption?: string;
  summary: string;
  context: string;
  problem: string;
  role: string;
  initiatives?: CaseInitiative[];
  constraints: string[];
  decisions: string[];
  implementation: string[];
  quality: string[];
  results: string[];
  tradeoffs: string[];
  links: { label: string; href: string; kind: 'external' | 'document' }[];
  featuredSummary?: {
    eyebrow: string;
    title: string;
    items: { label: string; text: string; kind: 'problem' | 'decision' | 'result' }[];
  };
};

export type PortfolioData = {
  meta: { title: string; description: string; locale: string };
  languageName: string;
  languageToggle: { label: string; shortLabel: string };
  nav: { work: string; capabilities: string; experience: string; about: string; contact: string };
  hero: {
    name: string;
    eyebrow: string;
    headline: string;
    subtitle: string;
    supportingText: string;
    proofPoints: string[];
    imageAlt: string;
  };
  actions: {
    viewWork: string;
    downloadResume: string;
    emailMe: string;
    resume: string;
    viewCase: string;
    backToWork: string;
    openExternal: string;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    description: string;
    featuredLabel: string;
    evidenceLabel: string;
  };
  casePage: {
    overview: string;
    context: string;
    problem: string;
    responsibility: string;
    initiatives: string;
    constraints: string;
    decisions: string;
    implementation: string;
    quality: string;
    result: string;
    tradeoffs: string;
    stack: string;
  };
  caseStudies: CaseStudy[];
  capabilitiesSection: {
    eyebrow: string;
    title: string;
    description: string;
    evidenceLabel: string;
    items: {
      title: string;
      description: string;
      evidence: string;
      technologies: string[];
      icon: 'logic' | 'data' | 'integration' | 'quality' | 'modernization' | 'collaboration';
    }[];
  };
  experienceSection: { eyebrow: string; title: string; description: string };
  experience: {
    year: string;
    role: string;
    company: string;
    companyUrl: string;
    summary: string;
    bullets: string[];
    current: boolean;
  }[];
  about: { eyebrow: string; title: string; paragraphs: string[]; facts: string[] };
  academic: {
    eyebrow: string;
    title: string;
    institution: string;
    period: string;
    thesisLabel: string;
    thesisTitle: string;
    description: string;
    evidence: string[];
    technologies: string[];
    linkLabel: string;
    link: string;
  };
  contact: {
    eyebrow: string;
    headline: string;
    description: string;
    email: string;
    links: { linkedin: string; github: string; resume: string };
  };
  footer: { phrase: string; emailLabel: string };
};

export const portfolioContent: Record<Language, PortfolioData> = { en: contentEn, es: contentEs };

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export function isCaseSlug(value: string): value is CaseSlug {
  return caseSlugs.includes(value as CaseSlug);
}

export function getPortfolioContent(language: Language): PortfolioData {
  return portfolioContent[language];
}

export function getCaseStudy(language: Language, slug: CaseSlug): CaseStudy | undefined {
  return portfolioContent[language].caseStudies.find((item) => item.slug === slug);
}
