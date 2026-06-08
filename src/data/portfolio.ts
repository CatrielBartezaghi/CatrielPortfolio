import {
  Database,
  Globe,
  Lightbulb,
  Workflow,
  ShieldCheck,
  LayoutTemplate,
  type LucideIcon,
} from "lucide-react";

export type Language = "en" | "es";

export type PortfolioData = {
  languageName: string;
  languageToggle: {
    label: string;
    english: string;
    spanish: string;
  };
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    name: string;
    headline: string;
    subtitle: string;
    supportingText: string;
    tags: {
      label: string;
      type: "primary" | "secondary";
    }[];
    imageAlt: string;
  };
  actions: {
    viewProjects: string;
    downloadResume: string;
    emailMe: string;
    resume: string;
  };
  about: {
    title: string;
    quickFactsTitle: string;
    paragraphs: string[];
    quickFacts: {
      label: string;
      icon: string;
    }[];
  };
  expertiseSection: {
    title: string;
  };
  expertise: {
    title: string;
    description: string;
    icon: "business" | "data" | "automation" | "reliability";
  }[];
  skillsSection: {
    title: string;
  };
  skills: {
    title: string;
    icon: LucideIcon;
    items: string[];
    colorClass: string;
    bgClass: string;
  }[];
  highlightsSection: {
    title: string;
  };
  highlights: {
    title: string;
    description: string;
    keywords: string[];
    icon: LucideIcon;
  }[];
  projectsSection: {
    eyebrow: string;
    title: string;
    description: string;
    focusLabel: string;
  };
  projects: {
    title: string;
    type: string;
    badge: string;
    description: string;
    focus: string[];
    tags: string[];
    link: {
      href: string;
      label: string;
      kind: "external" | "document";
    };
  }[];
  experienceSection: {
    title: string;
  };
  experience: {
    year: string;
    role: string;
    company: string;
    bullets: string[];
    current: boolean;
  }[];
  contact: {
    headline: string;
    description: string;
    email: string;
    links: {
      linkedin: string;
      github: string;
      resume: string;
    };
  };
  footer: {
    phrase: string;
    emailLabel: string;
  };
};

export const portfolioContent: Record<Language, PortfolioData> = {
  en: {
    languageName: "English",
    languageToggle: {
      label: "Change language",
      english: "EN",
      spanish: "ES",
    },
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      name: "Catriel Bartezaghi",
      headline: "I build backend systems for business-critical workflows",
      subtitle:
        "Computer Engineer and backend-oriented Full Stack Developer focused on PHP/Laravel, SQL, automation, integrations, CI/CD, and maintainable web applications.",
      supportingText:
        "I help turn complex business processes into reliable software used in real operations.",
      tags: [
        { label: "PHP", type: "primary" },
        { label: "Laravel", type: "primary" },
        { label: "MySQL", type: "primary" },
        { label: "Docker", type: "primary" },
        { label: "GitLab CI/CD", type: "primary" },
        { label: "OpenAI API", type: "secondary" },
        { label: "Twilio", type: "secondary" },
        { label: "Next.js", type: "secondary" },
        { label: "FastAPI", type: "secondary" },
      ],
      imageAlt: "Code editor abstract representation",
    },
    actions: {
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      emailMe: "Email Me",
      resume: "Resume",
    },
    about: {
      title: "About Me",
      quickFactsTitle: "Quick Facts",
      paragraphs: [
        "I am a Computer Engineer and backend-oriented Full Stack Developer focused on building reliable software for business operations.",
        "My work centers on translating complex workflows into maintainable systems: data modeling, SQL optimization, migrations, API integrations, automated validations, and production-oriented web applications.",
        "I have experience working with legacy PHP/MySQL systems, Laravel applications, WordPress-based corporate websites, Docker environments, GitLab CI/CD pipelines, and AI-powered workflow automation using OpenAI and Twilio.",
      ],
      quickFacts: [
        { label: "Computer Engineer", icon: "school" },
        { label: "Based in Argentina", icon: "public" },
        { label: "Backend-oriented Full Stack Developer", icon: "code" },
        { label: "English & Spanish", icon: "language" },
        { label: "Business workflow automation", icon: "workflow" },
        { label: "SQL & data modeling focus", icon: "database" },
      ],
    },
    expertiseSection: {
      title: "What I'm good at",
    },
    expertise: [
      {
        title: "Business Logic",
        description: "Turning real-world workflows into maintainable backend systems.",
        icon: "business",
      },
      {
        title: "Data & SQL",
        description:
          "Modeling data, writing reliable queries, and improving data-heavy views.",
        icon: "data",
      },
      {
        title: "Automation",
        description:
          "Reducing manual work through API integrations and workflow automation.",
        icon: "automation",
      },
      {
        title: "Reliability",
        description:
          "Using tests, CI/CD checks, migrations, and documentation to reduce production risk.",
        icon: "reliability",
      },
    ],
    skillsSection: {
      title: "Technical Skills",
    },
    skills: [
      {
        title: "Backend & Data",
        icon: Database,
        items: [
          "PHP",
          "Laravel",
          "MySQL",
          "PostgreSQL",
          "REST APIs",
          "SQL Optimization",
          "Data Modeling",
          "Migrations",
        ],
        colorClass: "text-primary",
        bgClass: "bg-primary",
      },
      {
        title: "Quality & Infrastructure",
        icon: ShieldCheck,
        items: [
          "PHPUnit",
          "Integration Tests",
          "GitLab CI/CD",
          "Docker",
          "Git",
          "Linux",
        ],
        colorClass: "text-tertiary",
        bgClass: "bg-tertiary",
      },
      {
        title: "Frontend & Web",
        icon: Globe,
        items: [
          "JavaScript",
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Bootstrap",
          "jQuery",
          "WordPress",
        ],
        colorClass: "text-secondary",
        bgClass: "bg-secondary",
      },
      {
        title: "AI & Automation",
        icon: Lightbulb,
        items: ["OpenAI API", "Twilio API", "Workflow Automation", "NLP Integrations"],
        colorClass: "text-primary",
        bgClass: "bg-primary",
      },
    ],
    highlightsSection: {
      title: "Engineering Highlights",
    },
    highlights: [
      {
        title: "CI/CD & Quality Gates",
        description:
          "Implemented GitLab CI/CD validation workflows with syntax checks, migration validation, PHPUnit, and integration tests.",
        keywords: ["GitLab CI/CD", "PHPUnit", "MySQL snapshots"],
        icon: ShieldCheck,
      },
      {
        title: "SQL & Performance",
        description:
          "Optimized reporting and dashboard views by refining SQL queries and adding database indexes for large datasets.",
        keywords: ["SQL", "Indexes", "Data-heavy views"],
        icon: Database,
      },
      {
        title: "Legacy Modernization",
        description:
          "Modernized legacy interfaces from Bootstrap 2 and jQuery 1.7 to Bootstrap 5 and jQuery 3.x.",
        keywords: ["Bootstrap", "jQuery", "Maintainability"],
        icon: LayoutTemplate,
      },
      {
        title: "Business Workflow Automation",
        description:
          "Built automations and integrations that transform manual business processes into structured software workflows.",
        keywords: ["OpenAI API", "Twilio", "Automation"],
        icon: Workflow,
      },
    ],
    projectsSection: {
      eyebrow: "Portfolio",
      title: "Featured Projects",
      description:
        "A selection of engineering work focused on reliable business systems, automation, financial tooling, and applied machine learning.",
      focusLabel: "Focus",
    },
    projects: [
      {
        title: "Business-Critical Intranet Modules",
        type: "Professional Work - Serfe",
        badge: "Corporate",
        description:
          "Built internal modules for manufacturing workflows, including traceability, inventory, recipes, production processes, stock transfers, and supply control.",
        focus: [
          "Legacy PHP/MySQL systems",
          "Data modeling and migrations",
          "SQL reliability",
          "Testing and validation workflows",
        ],
        tags: [
          "PHP",
          "MySQL",
          "JavaScript",
          "Legacy Systems",
          "SQL",
          "GitLab CI/CD",
          "PHPUnit",
        ],
        link: {
          href: "https://www.serfe.com/",
          label: "Company Website",
          kind: "external",
        },
      },
      {
        title: "WhatsApp Finance Assistant",
        type: "Professional Work - Cipax",
        badge: "FinTech",
        description:
          "Built a Laravel-based accounting workflow that integrates Twilio and OpenAI APIs to capture financial transactions from WhatsApp messages using natural language.",
        focus: [
          "Laravel business logic",
          "WhatsApp-based workflow automation",
          "OpenAI and Twilio integrations",
          "Structured accounting operations from natural language input",
        ],
        tags: [
          "Laravel",
          "FilamentPHP",
          "MySQL",
          "OpenAI API",
          "Twilio",
          "WhatsApp",
          "Docker",
        ],
        link: {
          href: "https://cipax.dev/",
          label: "Company Website",
          kind: "external",
        },
      },
      {
        title: "TallyNorth",
        type: "Personal Project",
        badge: "Product",
        description:
          "A full-stack personal finance platform for cash flow projection, multi-currency accounts, recurring expenses, and credit card installment tracking.",
        focus: [
          "Backend API design",
          "Financial logic",
          "Modern full-stack architecture",
          "Product thinking",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "FastAPI",
          "PostgreSQL",
          "SQLAlchemy",
          "Tailwind CSS",
          "shadcn/ui",
        ],
        link: {
          href: "https://tally-north.vercel.app/",
          label: "Live App",
          kind: "external",
        },
      },
      {
        title: "Intelligent Investment Decision System",
        type: "Academic Project",
        badge: "Academic",
        description:
          "A decision support system for financial markets using machine learning models on time series data.",
        focus: [
          "Data preprocessing",
          "Model experimentation",
          "Evaluation",
          "Software packaging",
        ],
        tags: [
          "Python",
          "PyTorch",
          "SQLite",
          "Docker",
          "Machine Learning",
          "Time Series",
        ],
        link: {
          href: "/catriel-bartezaghi-investment-decision-system-thesis.pdf",
          label: "Read Thesis PDF",
          kind: "document",
        },
      },
    ],
    experienceSection: {
      title: "Experience",
    },
    experience: [
      {
        year: "Apr 2025 - Present",
        role: "Full Stack Developer",
        company: "Serfe",
        bullets: [
          "Develop and maintain PHP/MySQL business applications and WordPress websites for external clients.",
          "Build internal modules for traceability, inventory, production workflows, stock transfers, and supply control.",
          "Improve reliability through data modeling, migrations, PHPUnit, integration tests, and GitLab CI/CD validation workflows.",
          "Optimize SQL queries and database indexes for data-heavy reporting and dashboard views.",
        ],
        current: true,
      },
      {
        year: "Jan 2024 - Apr 2025",
        role: "Full Stack Developer",
        company: "Cipax",
        bullets: [
          "Built and maintained a Laravel 10 accounting management system using FilamentPHP, MySQL, Docker, JavaScript, and Bootstrap.",
          "Developed accounting workflows, current accounts, internal dashboards, and business logic modules.",
          "Integrated Twilio and OpenAI APIs to record financial transactions from WhatsApp messages using natural language.",
          "Improved production systems with a focus on usability, stability, and maintainability.",
        ],
        current: false,
      },
    ],
    contact: {
      headline: "Interested in building reliable business software?",
      description:
        "I'm open to backend-oriented full stack roles where I can work on business logic, data-heavy systems, automation, integrations, and maintainable web applications.",
      email: "catriel.barte@gmail.com",
      links: {
        linkedin: "https://linkedin.com/in/catrielbartezaghi/",
        github: "https://github.com/catrielbartezaghi",
        resume: "/catriel-bartezaghi-resume.pdf",
      },
    },
    footer: {
      phrase: "Built for reliability, maintainability, and real-world workflows.",
      emailLabel: "Email",
    },
  },
  es: {
    languageName: "Español",
    languageToggle: {
      label: "Cambiar idioma",
      english: "EN",
      spanish: "ES",
    },
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      name: "Catriel Bartezaghi",
      headline: "Construyo sistemas backend para operaciones críticas de negocio",
      subtitle:
        "Ingeniero en Informática y Desarrollador Full Stack con foco backend, especializado en PHP/Laravel, SQL, automatización, integraciones, CI/CD y aplicaciones web mantenibles.",
      supportingText:
        "Ayudo a convertir procesos complejos de negocio en software confiable para operaciones reales.",
      tags: [
        { label: "PHP", type: "primary" },
        { label: "Laravel", type: "primary" },
        { label: "MySQL", type: "primary" },
        { label: "Docker", type: "primary" },
        { label: "GitLab CI/CD", type: "primary" },
        { label: "OpenAI API", type: "secondary" },
        { label: "Twilio", type: "secondary" },
        { label: "Next.js", type: "secondary" },
        { label: "FastAPI", type: "secondary" },
      ],
      imageAlt: "Representación abstracta de un editor de código",
    },
    actions: {
      viewProjects: "Ver proyectos",
      downloadResume: "Descargar CV",
      emailMe: "Escribime",
      resume: "CV",
    },
    about: {
      title: "Sobre mí",
      quickFactsTitle: "Datos rápidos",
      paragraphs: [
        "Soy Ingeniero en Informática y Desarrollador Full Stack con foco backend. Me especializo en construir software confiable para operaciones de negocio.",
        "Mi trabajo se centra en transformar flujos complejos en sistemas mantenibles: modelado de datos, optimización SQL, migraciones, integraciones con APIs, validaciones automatizadas y aplicaciones web orientadas a producción.",
        "Tengo experiencia trabajando con sistemas legacy en PHP/MySQL, aplicaciones Laravel, sitios corporativos en WordPress, entornos Docker, pipelines de GitLab CI/CD y automatización de procesos con IA usando OpenAI y Twilio.",
      ],
      quickFacts: [
        { label: "Ingeniero en Informática", icon: "school" },
        { label: "Argentina", icon: "public" },
        { label: "Full Stack con foco backend", icon: "code" },
        { label: "Inglés y español", icon: "language" },
        { label: "Automatización de procesos de negocio", icon: "workflow" },
        { label: "Foco en SQL y modelado de datos", icon: "database" },
      ],
    },
    expertiseSection: {
      title: "En qué puedo aportar",
    },
    expertise: [
      {
        title: "Lógica de negocio",
        description:
          "Convertir procesos reales en sistemas backend mantenibles.",
        icon: "business",
      },
      {
        title: "Datos y SQL",
        description:
          "Modelar datos, escribir consultas confiables y mejorar vistas con alto volumen de información.",
        icon: "data",
      },
      {
        title: "Automatización",
        description:
          "Reducir trabajo manual mediante integraciones con APIs y automatización de flujos.",
        icon: "automation",
      },
      {
        title: "Confiabilidad",
        description:
          "Usar tests, CI/CD, migraciones y documentación para reducir riesgos en producción.",
        icon: "reliability",
      },
    ],
    skillsSection: {
      title: "Habilidades técnicas",
    },
    skills: [
      {
        title: "Backend y datos",
        icon: Database,
        items: [
          "PHP",
          "Laravel",
          "MySQL",
          "PostgreSQL",
          "REST APIs",
          "Optimización SQL",
          "Modelado de datos",
          "Migraciones",
        ],
        colorClass: "text-primary",
        bgClass: "bg-primary",
      },
      {
        title: "Calidad e infraestructura",
        icon: ShieldCheck,
        items: [
          "PHPUnit",
          "Tests de integración",
          "GitLab CI/CD",
          "Docker",
          "Git",
          "Linux",
        ],
        colorClass: "text-tertiary",
        bgClass: "bg-tertiary",
      },
      {
        title: "Frontend y web",
        icon: Globe,
        items: [
          "JavaScript",
          "TypeScript",
          "Next.js",
          "React",
          "Tailwind CSS",
          "Bootstrap",
          "jQuery",
          "WordPress",
        ],
        colorClass: "text-secondary",
        bgClass: "bg-secondary",
      },
      {
        title: "IA y automatización",
        icon: Lightbulb,
        items: [
          "OpenAI API",
          "Twilio API",
          "Automatización de flujos",
          "Integraciones con IA/NLP",
        ],
        colorClass: "text-primary",
        bgClass: "bg-primary",
      },
    ],
    highlightsSection: {
      title: "Logros de ingeniería",
    },
    highlights: [
      {
        title: "CI/CD y controles de calidad",
        description:
          "Implementé flujos de validación en GitLab CI/CD con chequeos de sintaxis, validación de migraciones, PHPUnit y tests de integración.",
        keywords: ["GitLab CI/CD", "PHPUnit", "Snapshots de MySQL"],
        icon: ShieldCheck,
      },
      {
        title: "SQL y rendimiento",
        description:
          "Optimicé reportes y dashboards refinando consultas SQL y agregando índices para grandes volúmenes de datos.",
        keywords: ["SQL", "Índices", "Vistas con muchos datos"],
        icon: Database,
      },
      {
        title: "Modernización legacy",
        description:
          "Modernicé interfaces legacy desde Bootstrap 2 y jQuery 1.7 a Bootstrap 5 y jQuery 3.x.",
        keywords: ["Bootstrap", "jQuery", "Mantenibilidad"],
        icon: LayoutTemplate,
      },
      {
        title: "Automatización de procesos",
        description:
          "Construí automatizaciones e integraciones que transforman procesos manuales de negocio en flujos de software estructurados.",
        keywords: ["OpenAI API", "Twilio", "Automatización"],
        icon: Workflow,
      },
    ],
    projectsSection: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description:
        "Una selección de trabajos de ingeniería enfocados en sistemas de negocio confiables, automatización, herramientas financieras y machine learning aplicado.",
      focusLabel: "Foco",
    },
    projects: [
      {
        title: "Módulos críticos de intranet para operaciones de negocio",
        type: "Trabajo profesional - Serfe",
        badge: "Corporativo",
        description:
          "Construí módulos internos para procesos de manufactura, incluyendo trazabilidad, inventario, recetas, procesos productivos, transferencias de stock y control de insumos.",
        focus: [
          "Sistemas legacy PHP/MySQL",
          "Modelado de datos y migraciones",
          "Confiabilidad SQL",
          "Flujos de testing y validación",
        ],
        tags: [
          "PHP",
          "MySQL",
          "JavaScript",
          "Sistemas legacy",
          "SQL",
          "GitLab CI/CD",
          "PHPUnit",
        ],
        link: {
          href: "https://www.serfe.com/",
          label: "Sitio web",
          kind: "external",
        },
      },
      {
        title: "Asistente financiero por WhatsApp",
        type: "Trabajo profesional - Cipax",
        badge: "FinTech",
        description:
          "Construí un flujo contable en Laravel que integra las APIs de Twilio y OpenAI para registrar transacciones financieras desde mensajes de WhatsApp usando lenguaje natural.",
        focus: [
          "Lógica de negocio en Laravel",
          "Automatización de flujos por WhatsApp",
          "Integraciones con OpenAI y Twilio",
          "Operaciones contables estructuradas desde lenguaje natural",
        ],
        tags: [
          "Laravel",
          "FilamentPHP",
          "MySQL",
          "OpenAI API",
          "Twilio",
          "WhatsApp",
          "Docker",
        ],
        link: {
          href: "https://cipax.dev/",
          label: "Sitio web",
          kind: "external",
        },
      },
      {
        title: "TallyNorth",
        type: "Proyecto personal",
        badge: "Producto",
        description:
          "Una plataforma full stack de finanzas personales para proyección de flujo de caja, cuentas multi-moneda, gastos recurrentes y seguimiento de cuotas de tarjetas de crédito.",
        focus: [
          "Diseño de API backend",
          "Modelado de lógica financiera",
          "Arquitectura full stack moderna",
          "Criterio de producto",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "FastAPI",
          "PostgreSQL",
          "SQLAlchemy",
          "Tailwind CSS",
          "shadcn/ui",
        ],
        link: {
          href: "https://tally-north.vercel.app/",
          label: "Ver app",
          kind: "external",
        },
      },
      {
        title: "Sistema inteligente de decisión de inversiones",
        type: "Proyecto académico",
        badge: "Académico",
        description:
          "Un sistema de soporte a la decisión para mercados financieros usando modelos de machine learning sobre datos de series temporales.",
        focus: [
          "Preprocesamiento de datos",
          "Experimentación con modelos",
          "Evaluación",
          "Empaquetado de software",
        ],
        tags: [
          "Python",
          "PyTorch",
          "SQLite",
          "Docker",
          "Machine Learning",
          "Series temporales",
        ],
        link: {
          href: "/catriel-bartezaghi-investment-decision-system-thesis.pdf",
          label: "Leer tesis PDF",
          kind: "document",
        },
      },
    ],
    experienceSection: {
      title: "Experiencia",
    },
    experience: [
      {
        year: "Abr 2025 - Presente",
        role: "Desarrollador Full Stack",
        company: "Serfe",
        bullets: [
          "Desarrollo y mantengo aplicaciones de negocio en PHP/MySQL y sitios WordPress para clientes externos.",
          "Construyo módulos internos para trazabilidad, inventario, flujos productivos, transferencias de stock y control de insumos.",
          "Mejoro la confiabilidad de los sistemas mediante modelado de datos, migraciones, tests automatizados, PHPUnit y flujos de validación en GitLab CI/CD.",
          "Optimizo consultas SQL e índices de base de datos para reportes y dashboards con alto volumen de información.",
        ],
        current: true,
      },
      {
        year: "Ene 2024 - Abr 2025",
        role: "Desarrollador Full Stack",
        company: "Cipax",
        bullets: [
          "Construí y mantuve un sistema de gestión contable en Laravel 10 usando FilamentPHP, MySQL, Docker, JavaScript y Bootstrap.",
          "Desarrollé flujos contables, cuentas corrientes, dashboards internos y módulos de lógica de negocio.",
          "Integré APIs de Twilio y OpenAI para registrar transacciones financieras desde mensajes de WhatsApp usando lenguaje natural.",
          "Mejoré sistemas productivos con foco en usabilidad, estabilidad y mantenibilidad.",
        ],
        current: false,
      },
    ],
    contact: {
      headline: "¿Te interesa construir software de negocio confiable?",
      description:
        "Estoy abierto a roles full stack con foco backend, especialmente en proyectos relacionados con lógica de negocio, sistemas con alto uso de datos, automatización, integraciones y aplicaciones web mantenibles.",
      email: "catriel.barte@gmail.com",
      links: {
        linkedin: "https://linkedin.com/in/catrielbartezaghi/",
        github: "https://github.com/catrielbartezaghi",
        resume: "/catriel-bartezaghi-resume.pdf",
      },
    },
    footer: {
      phrase: "Software confiable, mantenible y pensado para procesos reales.",
      emailLabel: "Email",
    },
  },
};

export const portfolioData = portfolioContent.en;
