import {
  Database,
  Globe,
  Lightbulb,
  ShieldCheck,
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
      headline: "I turn complex operations into reliable business software",
      subtitle:
        "Computer Engineer and backend-focused Full Stack Developer experienced in industrial ERP systems, production traceability, inventory, logistics, and financial workflows.",
      supportingText:
        "I work end to end—from reconstructing business rules and modeling data to shipping tested features across interconnected production systems.",
      tags: [
        { label: "PHP", type: "primary" },
        { label: "Laravel", type: "primary" },
        { label: "SQL", type: "primary" },
        { label: "Docker", type: "primary" },
        { label: "GitLab CI/CD", type: "primary" },
        { label: "Next.js", type: "secondary" },
        { label: "TypeScript", type: "secondary" },
        { label: "FastAPI", type: "secondary" },
      ],
      imageAlt: "Portrait of Catriel Bartezaghi",
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
        "I specialize in software where correctness matters: production traceability, batch inventory, picking, sales, accounting, and financial workflows. I translate real operational constraints into data models, validations, permissions, and maintainable application flows.",
        "My work spans backend, data, and frontend delivery across active legacy systems. I modernize them incrementally—adding reusable components, parameterized queries, controlled migrations, automated tests, and CI safeguards without disrupting daily operations.",
        "I also work directly with stakeholders to reconstruct existing processes, identify cross-system dependencies, define acceptance criteria, manage technical risk, and validate releases.",
      ],
      quickFacts: [
        { label: "Computer Engineer", icon: "school" },
        { label: "Based in Argentina", icon: "public" },
        { label: "Backend-focused Full Stack", icon: "code" },
        { label: "Professional experience in English", icon: "language" },
        { label: "Business & technical analysis", icon: "workflow" },
        { label: "Industrial ERP experience", icon: "database" },
      ],
    },
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
          "Python",
          "FastAPI",
          "SQLAlchemy",
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
    projectsSection: {
      eyebrow: "Portfolio",
      title: "Featured Projects",
      description:
        "Selected case studies showing how I model business rules, protect data integrity, modernize legacy systems, and deliver production-ready software.",
      focusLabel: "Focus",
    },
    projects: [
      {
        title: "End-to-End Production Traceability",
        type: "Professional Work - Serfe",
        badge: "Industrial ERP",
        description:
          "Designed and implemented traceability workflows across recipes, raw materials, batches, semi-finished goods, finished products, and inventory movements in a production ERP.",
        focus: [
          "Modeled auditable relationships between production, recipes, lots, warehouses, and stock transactions",
          "Added prevalidation, workflow states, permissions, and safeguards against duplicate consumption and insufficient stock",
          "Redesigned the recipe module around reusable strategies for multiple output types",
          "Covered business rules and persistence with PHPUnit and MySQL integration tests",
        ],
        tags: [
          "PHP",
          "MySQL",
          "Data Modeling",
          "Traceability",
          "Inventory",
          "PHPUnit",
          "Phinx",
          "GitLab CI/CD",
        ],
        link: {
          href: "https://www.serfe.com/",
          label: "Company Website",
          kind: "external",
        },
      },
      {
        title: "Sales and Dispatch Modernization",
        type: "Professional Work - Serfe",
        badge: "Cross-System",
        description:
          "Evolved connected sales, intranet, supplies, and dispatch applications used across commercial and industrial operations, preserving compatibility with active legacy workflows.",
        focus: [
          "Modernized sales workflows for mobile use with Bootstrap 5, reusable tables, modals, and dynamic forms",
          "Implemented seller hierarchies, client permissions, order history filters, and coordinated rules across applications",
          "Built picking validations for barcode, product, lot, shelf life, weight tolerance, and available stock",
          "Integrated React/Vite commercial reporting with PHP endpoints and backend-owned aggregation rules",
        ],
        tags: [
          "PHP",
          "MySQL",
          "JavaScript",
          "Bootstrap 5",
          "React",
          "Barcodes",
          "Picking",
        ],
        link: {
          href: "https://www.serfe.com/",
          label: "Company Website",
          kind: "external",
        },
      },      {
        title: "WhatsApp Finance Assistant",
        type: "Professional Work - Cipax",
        badge: "FinTech",
        description:
          "Built an internal accounting tool within a Laravel system to interpret WhatsApp messages and prepare financial transactions using OpenAI and Twilio APIs.",
        focus: [
          "Two-stage AI workflow: operation classification followed by field extraction",
          "Classification restricted to operation types supported by the accounting system",
          "Extraction of the fields and values required for the selected operation",
          "Laravel business logic and Twilio integration for WhatsApp messages",
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
        type: "Personal Project · Public Beta",
        badge: "Product",
        description:
          "A full-stack personal finance platform for projecting cash flow, operating across multiple currencies, and modeling recurring transactions and installment purchases based on credit card closing and due dates.",
        focus: [
          "Backend API design",
          "Financial rule modeling",
          "Full-stack architecture",
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
          "Evolve a production ERP ecosystem spanning Sales, Intranet, Supplies, and Dispatch, covering traceability, manufacturing, batch inventory, picking, logistics, and commercial reporting.",
          "Designed production traceability from recipes and material consumption through semi-finished and finished goods, with auditable stock movements and database integrity constraints.",
          "Implemented barcode-driven picking rules for product, lot, expiration, shelf life, weight tolerance, warehouse origin, and aggregate stock availability.",
          "Modernized active PHP/MySQL applications incrementally with mobile-first Bootstrap 5 interfaces, reusable components, parameterized queries, and controlled migrations.",
          "Introduced and expanded PHPUnit, MySQL integration testing, and GitLab CI checks from isolated rules to complete production and inventory scenarios.",
          "Work with stakeholders on functional analysis, cross-system dependencies, estimates, acceptance criteria, regression strategy, and release validation.",
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
      headline: "Interested in building reliable software for business processes?",
      description:
        "I'm looking for backend-focused full stack opportunities where I can work on business logic, data, and integrations, contributing from problem analysis through production delivery.",
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
  },  es: {
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
      headline: "Convierto operaciones complejas en software de negocio confiable",
      subtitle:
        "Ingeniero en Informática y Desarrollador Full Stack con foco backend, con experiencia en ERP industriales, trazabilidad productiva, inventario, logística y flujos financieros.",
      supportingText:
        "Trabajo de punta a punta: desde reconstruir reglas de negocio y modelar datos hasta entregar funcionalidades probadas entre sistemas productivos interconectados.",
      tags: [
        { label: "PHP", type: "primary" },
        { label: "Laravel", type: "primary" },
        { label: "SQL", type: "primary" },
        { label: "Docker", type: "primary" },
        { label: "GitLab CI/CD", type: "primary" },
        { label: "Next.js", type: "secondary" },
        { label: "TypeScript", type: "secondary" },
        { label: "FastAPI", type: "secondary" },
      ],
      imageAlt: "Retrato de Catriel Bartezaghi",
    },    actions: {
      viewProjects: "Ver proyectos",
      downloadResume: "Descargar CV",
      emailMe: "Escribime",
      resume: "CV",
    },
    about: {
      title: "Sobre mí",
      quickFactsTitle: "Datos rápidos",
      paragraphs: [
        "Me especializo en software donde la consistencia importa: trazabilidad productiva, inventario por lote, picking, ventas, contabilidad y flujos financieros. Traduzco restricciones operativas reales en modelos de datos, validaciones, permisos y flujos mantenibles.",
        "Trabajo sobre backend, datos y frontend en sistemas legacy activos. Los modernizo de forma incremental con componentes reutilizables, consultas parametrizadas, migraciones controladas, pruebas automatizadas y controles de CI, sin interrumpir la operación diaria.",
        "También trabajo con referentes para reconstruir procesos, identificar dependencias entre sistemas, definir criterios de aceptación, gestionar riesgos técnicos y validar releases.",
      ],
      quickFacts: [
        { label: "Ingeniero en Informática", icon: "school" },
        { label: "Argentina", icon: "public" },
        { label: "Full Stack con foco backend", icon: "code" },
        { label: "Inglés utilizado profesionalmente", icon: "language" },
        { label: "Análisis funcional y técnico", icon: "workflow" },
        { label: "Experiencia en ERP industrial", icon: "database" },
      ],
    },    skillsSection: {
      title: "Habilidades técnicas",
    },
    skills: [
      {
        title: "Backend y datos",
        icon: Database,
        items: [
          "PHP",
          "Laravel",
          "Python",
          "FastAPI",
          "SQLAlchemy",
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
    projectsSection: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description:
        "Casos seleccionados que muestran cómo modelo reglas de negocio, protejo la integridad de datos, modernizo sistemas legacy y entrego software listo para producción.",
      focusLabel: "Foco",
    },
    projects: [
      {
        title: "Trazabilidad productiva de punta a punta",
        type: "Trabajo profesional - Serfe",
        badge: "ERP industrial",
        description:
          "Diseñé e implementé flujos de trazabilidad entre recetas, insumos, lotes, semielaborados, productos terminados y movimientos de inventario dentro de un ERP productivo.",
        focus: [
          "Modelado de relaciones auditables entre producción, recetas, lotes, depósitos y transacciones de stock",
          "Prevalidaciones, estados, permisos y bloqueos contra consumos duplicados o stock insuficiente",
          "Rediseño del módulo de recetas mediante estrategias reutilizables para múltiples tipos de salida",
          "Cobertura de reglas y persistencia con PHPUnit y tests de integración contra MySQL",
        ],
        tags: ["PHP", "MySQL", "Modelado de datos", "Trazabilidad", "Inventario", "PHPUnit", "Phinx", "GitLab CI/CD"],
        link: { href: "https://www.serfe.com/", label: "Sitio web", kind: "external" },
      },
      {
        title: "Modernización de ventas y expedición",
        type: "Trabajo profesional - Serfe",
        badge: "Multiaplicación",
        description:
          "Evolucioné aplicaciones conectadas de ventas, intranet, insumos y expedición utilizadas en operaciones comerciales e industriales, preservando compatibilidad con flujos legacy activos.",
        focus: [
          "Modernización móvil de ventas con Bootstrap 5, tablas, modales y formularios dinámicos reutilizables",
          "Jerarquías de vendedores, permisos sobre clientes, filtros de pedidos y reglas coordinadas entre aplicaciones",
          "Validaciones de picking por barcode, producto, lote, vida útil, tolerancia de peso y stock disponible",
          "Integración de informes React/Vite con endpoints PHP y reglas de agregación centralizadas en backend",
        ],
        tags: ["PHP", "MySQL", "JavaScript", "Bootstrap 5", "React", "Barcodes", "Picking"],
        link: { href: "https://www.serfe.com/", label: "Sitio web", kind: "external" },
      },
      {
        title: "Asistente financiero por WhatsApp",
        type: "Trabajo profesional - Cipax",
        badge: "FinTech",
        description:
          "Construí una herramienta contable interna dentro de un sistema Laravel para interpretar mensajes de WhatsApp y preparar transacciones financieras mediante las APIs de OpenAI y Twilio.",
        focus: [
          "Flujo de IA en dos etapas: clasificación de la operación y extracción de campos",
          "Clasificación limitada a los tipos de operación admitidos por el sistema contable",
          "Extracción de los campos y valores requeridos para la operación seleccionada",
          "Lógica de negocio en Laravel e integración de Twilio con WhatsApp",
        ],
        tags: ["Laravel", "FilamentPHP", "MySQL", "OpenAI API", "Twilio", "WhatsApp", "Docker"],
        link: { href: "https://cipax.dev/", label: "Sitio web", kind: "external" },
      },
      {
        title: "TallyNorth",
        type: "Proyecto personal · Beta pública",
        badge: "Producto",
        description:
          "Plataforma full stack de finanzas personales para proyectar el flujo de caja, operar con múltiples monedas y modelar movimientos recurrentes y compras en cuotas según fechas de cierre y vencimiento de tarjetas.",
        focus: ["Diseño de APIs y lógica de backend", "Modelado de reglas financieras", "Arquitectura full stack", "Diseño y criterio de producto"],
        tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "SQLAlchemy", "Tailwind CSS", "shadcn/ui"],
        link: { href: "https://tally-north.vercel.app/", label: "Ver app", kind: "external" },
      },
      {
        title: "Sistema inteligente de decisión de inversiones",
        type: "Proyecto académico",
        badge: "Académico",
        description:
          "Un sistema de soporte a la decisión para mercados financieros usando modelos de machine learning sobre datos de series temporales.",
        focus: ["Preprocesamiento de datos", "Experimentación con modelos", "Evaluación", "Empaquetado de software"],
        tags: ["Python", "PyTorch", "SQLite", "Docker", "Machine Learning", "Series temporales"],
        link: { href: "/catriel-bartezaghi-investment-decision-system-thesis.pdf", label: "Leer tesis PDF", kind: "document" },
      },
    ],    experienceSection: { title: "Experiencia" },
    experience: [
      {
        year: "Abr 2025 - Presente",
        role: "Desarrollador Full Stack",
        company: "Serfe",
        bullets: [
          "Evoluciono un ecosistema ERP productivo que integra Ventas, Intranet, Insumos y Expedición, cubriendo trazabilidad, fabricación, inventario por lote, picking, logística e informes comerciales.",
          "Diseñé trazabilidad productiva desde recetas y consumo de insumos hasta semielaborados y productos terminados, con movimientos auditables y restricciones de integridad en base de datos.",
          "Implementé reglas de picking por barcode, producto, lote, vencimiento, vida útil, tolerancia de peso, depósito de origen y disponibilidad agregada de stock.",
          "Modernicé aplicaciones PHP/MySQL activas de forma incremental mediante interfaces móviles con Bootstrap 5, componentes reutilizables, consultas parametrizadas y migraciones controladas.",
          "Incorporé y expandí PHPUnit, tests de integración con MySQL y controles de GitLab CI desde reglas aisladas hasta escenarios completos de producción e inventario.",
          "Trabajo con referentes en análisis funcional, dependencias entre sistemas, estimaciones, criterios de aceptación, estrategia de regresión y validación de releases.",
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
    ],    contact: {
      headline: "¿Te interesa construir software confiable para procesos de negocio?",
      description:
        "Busco oportunidades full stack con foco backend donde pueda trabajar sobre lógica de negocio, datos e integraciones, participando desde el análisis del problema hasta la puesta en producción.",
      email: "catriel.barte@gmail.com",
      links: {
        linkedin: "https://linkedin.com/in/catrielbartezaghi/",
        github: "https://github.com/catrielbartezaghi",
        resume: "/catriel-bartezaghi-resume.pdf",
      },
    },    footer: {
      phrase: "Software confiable, mantenible y pensado para procesos reales.",
      emailLabel: "Email",
    },
  },
};

export const portfolioData = portfolioContent.en;