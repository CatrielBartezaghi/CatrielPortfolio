import type { Language } from '@/data/portfolio';

export type ResumeLink = { label: string; text: string; href: string };
export type ResumeData = {
  language: Language; name: string; headline: string; location: string; contact: ResumeLink[];
  labels: { summary: string; skills: string; experience: string; project: string; education: string };
  summary: string; skills: { label: string; items: string[] }[];
  experience: { company: string; role: string; period: string; bullets: string[] }[];
  project: { name: string; status: string; links: ResumeLink[]; bullets: string[] };
  education: { degree: string; institution: string; period: string };
  languages: { label: string; items: string[]; certificate: string; certificateHref: string };
};

const contact: ResumeLink[] = [
  { label: 'Email', text: 'catriel.barte@gmail.com', href: 'mailto:catriel.barte@gmail.com' },
  { label: 'Phone', text: '+54 342 528 1310', href: 'tel:+543425281310' },
  { label: 'Portfolio', text: 'catriel.dev', href: 'https://catriel.dev' },
  { label: 'LinkedIn', text: 'linkedin.com/in/catrielbartezaghi', href: 'https://www.linkedin.com/in/catrielbartezaghi/' },
  { label: 'GitHub', text: 'github.com/catrielbartezaghi', href: 'https://github.com/catrielbartezaghi' },
];
const projectLinks: ResumeLink[] = [
  { label: 'Live beta', text: 'tally-north.vercel.app', href: 'https://tally-north.vercel.app/' },
  { label: 'Repository', text: 'github.com/CatrielBartezaghi/TallyNorth', href: 'https://github.com/CatrielBartezaghi/TallyNorth' },
];

export const resumeContent: Record<Language, ResumeData> = {
  en: {
    language: 'en', name: 'Catriel Bartezaghi', headline: 'Backend-Focused Full Stack Software Engineer', location: 'Santa Fe, Argentina', contact,
    labels: { summary: 'Professional Summary', skills: 'Technical Skills', experience: 'Professional Experience', project: 'Selected Project', education: 'Education & Languages' },
    summary: 'Informatics Engineer and backend-focused Full Stack Developer experienced in business-critical industrial and financial systems. I translate complex workflows into maintainable data models, validations, integrations, automated tests, and CI/CD while modernizing active software incrementally.',
    skills: [
      { label: 'Backend', items: ['PHP', 'Laravel', 'REST APIs', 'Python', 'FastAPI'] },
      { label: 'Data', items: ['MySQL', 'PostgreSQL', 'SQL', 'SQLAlchemy', 'Phinx', 'Alembic', 'data modeling'] },
      { label: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite'] },
      { label: 'Quality & Delivery', items: ['PHPUnit', 'unit testing', 'MySQL integration testing', 'GitLab CI/CD', 'Docker', 'Git'] },
    ],
    experience: [
      { company: 'Serfe', role: 'Full Stack Developer', period: 'Apr 2025 — Present', bullets: [
        'Evolve a four-application PHP/MySQL ERP for a dairy manufacturer, connecting sales, supplies and inventory, production, and dispatch and logistics.',
        'Designed and implemented traceability across recipes, batches, production stages, warehouses, and stock movements while preserving active legacy workflows.',
        'Implemented picking safeguards for barcode, product, batch, shelf life, weight, origin, and available stock across individual and grouped orders.',
        'Modernized commercial workflows with responsive Bootstrap 5 interfaces and a React/Vite dashboard backed by testable PHP endpoints.',
        'Designed and implemented a two-stage GitLab CI pipeline with five jobs covering six controls: merge conflicts, PHP syntax, migration immutability and compatibility, unit tests, and MySQL integration tests.',
      ] },
      { company: 'Cipax', role: 'Full Stack Developer', period: 'Jan 2024 — Apr 2025', bullets: [
        'Developed end-to-end modules across five Laravel applications for financial management, grants, events, and community-support workflows.',
        'Implemented financial workflows with database transactions, explicit state transitions, permission-based safeguards, and email-based two-factor authentication.',
        'Designed a multilingual AI-assisted timeline using Strategy and Factory patterns, contextual prompts, persistent caching, failure handling, permissions, and human review.',
      ] },
    ],
    project: { name: 'TallyNorth — Personal Finance Platform', status: 'Functional personal project · Beta', links: projectLinks, bullets: [
      'Built a Next.js, TypeScript, FastAPI, SQLAlchemy, and PostgreSQL application for card installments by closing date, recurring expenses, cash-flow projections, multi-currency consolidation, and bulk CSV imports.',
      'Implemented JWT authentication with HttpOnly cookies and resource-level ownership filters to isolate each user’s financial data.',
    ] },
    education: { degree: 'Engineering Degree in Informatics (Ingeniero en Informática), five-year program', institution: 'Universidad Nacional del Litoral — Santa Fe, Argentina', period: 'Completed 2023' },
    languages: { label: 'Languages', items: ['Spanish (Native)', 'English (C1)'], certificate: 'EF SET Certificate', certificateHref: 'https://cert.efset.org/es/tEc62u' },
  },
  es: {
    language: 'es', name: 'Catriel Bartezaghi', headline: 'Desarrollador Full Stack con foco backend', location: 'Santa Fe, Argentina', contact,
    labels: { summary: 'Perfil Profesional', skills: 'Habilidades Técnicas', experience: 'Experiencia Profesional', project: 'Proyecto Destacado', education: 'Educación e Idiomas' },
    summary: 'Ingeniero en Informática y desarrollador full stack con foco backend, con experiencia en sistemas críticos para operaciones industriales y financieras. Convierto flujos complejos en modelos de datos, validaciones, integraciones, pruebas automatizadas y CI/CD, modernizando sistemas activos de forma incremental.',
    skills: [
      { label: 'Backend', items: ['PHP', 'Laravel', 'APIs REST', 'Python', 'FastAPI'] },
      { label: 'Datos', items: ['MySQL', 'PostgreSQL', 'SQL', 'SQLAlchemy', 'Phinx', 'Alembic', 'modelado de datos'] },
      { label: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite'] },
      { label: 'Calidad y entrega', items: ['PHPUnit', 'pruebas unitarias', 'integración con MySQL', 'GitLab CI/CD', 'Docker', 'Git'] },
    ],
    experience: [
      { company: 'Serfe', role: 'Desarrollador Full Stack', period: 'Abr 2025 — Presente', bullets: [
        'Evoluciono un ERP PHP/MySQL de cuatro aplicaciones para una empresa láctea, conectando ventas, insumos e inventario, producción y expedición y logística.',
        'Diseñé e implementé trazabilidad entre recetas, lotes, etapas productivas, depósitos y movimientos de stock, preservando los flujos legacy activos.',
        'Implementé controles de picking por código de barras, producto, lote, vida útil, peso, origen y stock disponible para pedidos individuales y agrupados.',
        'Modernicé flujos comerciales con interfaces responsive en Bootstrap 5 y un dashboard React/Vite respaldado por endpoints PHP testeables.',
        'Diseñé e implementé un pipeline GitLab CI de dos etapas y cinco jobs con seis controles: conflictos, sintaxis PHP, inmutabilidad y compatibilidad de migraciones, pruebas unitarias e integración con MySQL.',
      ] },
      { company: 'Cipax', role: 'Desarrollador Full Stack', period: 'Ene 2024 — Abr 2025', bullets: [
        'Desarrollé módulos de punta a punta en cinco aplicaciones Laravel para gestión financiera, subsidios, eventos y acompañamiento comunitario.',
        'Implementé flujos financieros con transacciones de base de datos, estados explícitos, resguardos basados en permisos y doble factor por correo.',
        'Diseñé un timeline multidioma asistido por IA con patrones Strategy y Factory, prompts contextuales, caché persistente, manejo de fallos, permisos y revisión humana.',
      ] },
    ],
    project: { name: 'TallyNorth — Plataforma de finanzas personales', status: 'Proyecto personal funcional · Beta', links: projectLinks, bullets: [
      'Construí una aplicación con Next.js, TypeScript, FastAPI, SQLAlchemy y PostgreSQL para cuotas según cierre de tarjeta, gastos recurrentes, proyecciones de flujo, consolidación multimoneda e importaciones masivas desde CSV.',
      'Implementé autenticación JWT con cookies HttpOnly y filtros de propiedad por recurso para aislar la información financiera de cada usuario.',
    ] },
    education: { degree: 'Ingeniero en Informática', institution: 'Universidad Nacional del Litoral — Santa Fe, Argentina', period: 'Finalizado en 2023' },
    languages: { label: 'Idiomas', items: ['Español (Nativo)', 'Inglés (C1)'], certificate: 'Certificado EF SET', certificateHref: 'https://cert.efset.org/es/tEc62u' },
  },
};
export function getResumeContent(language: Language): ResumeData { return resumeContent[language]; }
