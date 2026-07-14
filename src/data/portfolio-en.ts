import { casesEnA } from '@/data/cases-en-a';
import { casesEnB } from '@/data/cases-en-b';
import type { PortfolioData } from '@/data/portfolio';

export const contentEn: PortfolioData = {
  meta: {
    title: 'Catriel Bartezaghi | Backend-Focused Full Stack Developer',
    description: 'Backend-focused Full Stack Developer experienced in multi-application industrial systems, business rules, data integrity, automated testing, and incremental modernization.',
    locale: 'en_US',
  },
  languageName: 'English',
  languageToggle: { label: 'View this page in Spanish', shortLabel: 'ES' },
  nav: { work: 'Work', capabilities: 'Capabilities', experience: 'Experience', about: 'About', contact: 'Contact' },
  hero: {
    name: 'Catriel Bartezaghi',
    eyebrow: 'Software Engineer · Backend-focused Full Stack',
    headline: 'I build reliable software for business-critical operations',
    subtitle: 'I turn complex workflows into maintainable systems, with a focus on business logic, data, integrations, testing, and CI/CD.',
    supportingText: 'I currently evolve a multi-application industrial ERP spanning sales, production, inventory, and dispatch. I own the full delivery path: requirements discovery and definition, planning, design, implementation, and validation across PHP/MySQL and React, with automated testing and CI.',
    proofPoints: ['Business logic', 'Data & integrations', 'Testing & CI/CD'],
    imageAlt: 'Portrait of Catriel Bartezaghi',
  },
  actions: {
    viewWork: 'View case studies', downloadResume: 'Download resume', emailMe: 'Email me', resume: 'Resume',
    viewCase: 'Read case study', backToWork: 'Back to selected work', openExternal: 'opens in a new tab',
  },
  projectsSection: {
    eyebrow: 'Selected work',
    title: 'Evidence from real engineering problems',
    description: 'Four cases combining delivered work, systems under active development, and a personal product, with a focus on business rules, data, and integrations.',
    featuredLabel: 'Featured case',
    evidenceLabel: 'What this demonstrates',
  },
  casePage: {
    overview: 'Executive overview', context: 'Context', problem: 'Problem', responsibility: 'My responsibility', constraints: 'Constraints',
    initiatives: 'Systems and initiatives',
    decisions: 'Key decisions', implementation: 'Implementation', quality: 'Quality and safeguards', result: 'Verified status and outcome',
    tradeoffs: 'Trade-offs and work in progress', stack: 'Technologies',
  },
  caseStudies: [casesEnA[0], casesEnB[0], casesEnA[1], casesEnB[1]],
  capabilitiesSection: {
    eyebrow: 'Engineering capabilities',
    title: 'Capabilities connected to evidence',
    description: 'Each capability is grounded in decisions, delivery, or ways of working applied in real projects.',
    evidenceLabel: 'Evidence',
    items: [
      { title: 'Business logic', description: 'Translate operations into states, validations, permissions, and maintainable flows.', evidence: 'Production traceability, picking rules, purchasing and payment workflows.', technologies: ['PHP', 'Laravel', 'Domain modeling'], icon: 'logic' },
      { title: 'Data integrity', description: 'Design safeguards for systems where inconsistent state has operational consequences.', evidence: 'Foreign keys, unique indexes, transactions, batch stock, and controlled migrations.', technologies: ['MySQL', 'PostgreSQL', 'Phinx', 'Eloquent'], icon: 'data' },
      { title: 'Integrations with control', description: 'Use external services to enrich data or interpret inputs while keeping validation, error handling, and human review inside the system.', evidence: 'A timeline that drafts descriptions from internal data with human editing, and an assistant that interprets messages through OpenAI and Twilio.', technologies: ['OpenAI API', 'Twilio', 'Guzzle', 'REST'], icon: 'integration' },
      { title: 'Testing and delivery', description: 'Build automated feedback around rules, persistence, schema evolution, and integration risk.', evidence: 'Unit and MySQL integration tests, plus GitLab merge-request safeguards.', technologies: ['Automated testing', 'GitLab CI/CD', 'MySQL'], icon: 'quality' },
      { title: 'Incremental modernization', description: 'Introduce modern interfaces and clearer boundaries while keeping active processes available.', evidence: 'Mobile-ready Sales workflows and a production React/Vite dashboard over tested PHP endpoints.', technologies: ['React', 'Vite', 'PHP', 'JavaScript'], icon: 'modernization' },
      { title: 'Coordinated delivery across international teams', description: 'Coordinate changes across distributed teams to keep development, content, QA, and publishing timelines aligned.', evidence: 'Daily meetings in English and delivery for an international B2B website, managing dependencies across development, design, marketing, content, and QA.', technologies: ['Professional English', 'Distributed teams', 'QA', 'Releases'], icon: 'collaboration' },
    ],
  },
  experienceSection: {
    eyebrow: 'Experience', title: 'Building across the full workflow',
    description: 'Professional experience centered on business applications, critical rules, and delivery from analysis through validation.',
  },
  experience: [
    {
      year: 'Apr 2025 — Present', role: 'Full Stack Developer', company: 'Serfe', companyUrl: 'https://www.serfe.com/', current: true,
      summary: 'At Serfe, I evolve and maintain a four-application industrial ERP and have also contributed to web delivery for an international B2B software client.',
      bullets: [
        'Own the functional and technical analysis, iteration planning, design, and implementation of a production traceability and batch-stock initiative.',
        'Proposed the incremental strategy adopted by the project to integrate and validate changes over legacy workflows before coordinated activation.',
        'Introduced PHPUnit, MySQL integration tests, and GitLab CI safeguards on merge requests to catch syntax, migration, schema-conflict, and dependency issues.',
        'Modernized commercial workflows for mobile use and integrated a React/Vite dashboard running in production over tested PHP endpoints.',
        'Implemented and published changes for an international B2B software client’s marketing website, coordinating daily in English with distributed development, design, marketing, content, and QA teams to align dependencies and release windows.',
      ],
    },
    {
      year: 'Jan 2024 — Apr 2025', role: 'Full Stack Developer', company: 'Cipax', companyUrl: 'https://cipax.dev/', current: false,
      summary: 'Management platforms for finance, grants, events, and community-support workflows.',
      bullets: [
        'Delivered end-to-end Laravel modules across data models, services, controllers, permissions, reports, and interfaces.',
        'Implemented financial workflows, transactional safeguards, coordinated states, permissions, and email-based two-factor authentication.',
        'Designed an AI-assisted multilingual timeline using Strategy/Factory, caching, error handling, and human editing.',
        'Integrated OpenAI and Twilio to classify financial operations and extract structured fields from WhatsApp messages.',
      ],
    },
  ],
  about: {
    eyebrow: 'About', title: 'Engineering judgment for real operations',
    paragraphs: [
      'I am a Computer Engineer and backend-focused Full Stack Developer. I work mainly on software where correctness matters: financial processes, production traceability, inventory, and integrations.',
      'I specialize in understanding operational rules and turning them into data models, validations, and maintainable flows. I document requirements, meeting notes, technical decisions, conventions, plans, and tests; AI agents assist my analysis, implementation, and testing, while final decisions and validation remain my responsibility.',
      'I also have experience collaborating daily in English with distributed teams, coordinating dependencies and delivery across technical and business roles.',
    ],
    facts: ['Computer Engineer', 'Santa Fe, Argentina', 'Professional English in distributed teams', 'Business and technical analysis'],
  },
  academic: {
    eyebrow: 'Education', title: 'Engineering Degree in Informatics',
    institution: 'Universidad Nacional del Litoral · Santa Fe, Argentina',
    period: 'Completed in 2023', thesisLabel: 'Degree thesis',
    thesisTitle: 'Intelligent Investment Decision System with Machine Learning',
    description: 'I designed and built a Machine Learning system that combines prices and financial indicators from multiple sources to predict daily movements and evaluate investment signals through historical backtesting.',
    evidence: [
      'Built a pipeline to integrate financial data from APIs and public sources, including cleaning, persistence, and alignment of daily, monthly, and quarterly series.',
      'Designed a modular PyTorch architecture combining time series with macroeconomic and accounting indicators.',
      'Implemented training and time-aware evaluation without future-data leakage, plus a backtesting module to simulate buy and sell signals.',
      'Prepared a reproducible Python, SQLite, and Docker environment for data processing and local model training.',
    ],
    technologies: ['Machine Learning', 'Python', 'PyTorch', 'LSTM', 'Pandas', 'SQLite', 'Docker'],
    linkLabel: 'Read thesis PDF', link: '/catriel-bartezaghi-investment-decision-system-thesis.pdf',
  },
  contact: {
    eyebrow: 'Contact', headline: 'Let us build reliable software for real business processes',
    description: 'I am interested in backend-focused full stack opportunities involving business logic, data, integrations, automated quality, and end-to-end delivery.',
    email: 'catriel.barte@gmail.com',
    links: { linkedin: 'https://linkedin.com/in/catrielbartezaghi/', github: 'https://github.com/catrielbartezaghi', resume: '/catriel-bartezaghi-resume.pdf' },
  },
  footer: { phrase: 'Software built around real rules, data, and operations.', emailLabel: 'Email' },
};
