import { casesEsA } from '@/data/cases-es-a';
import { casesEsB } from '@/data/cases-es-b';
import type { PortfolioData } from '@/data/portfolio';

export const contentEs: PortfolioData = {
  meta: {
    title: 'Catriel Bartezaghi | Full Stack Developer con foco backend',
    description: 'Desarrollador full stack con foco backend y experiencia en sistemas industriales multiaplicación, reglas de negocio, integridad de datos, testing y modernización incremental.',
    locale: 'es_AR',
  },
  languageName: 'Español',
  languageToggle: { label: 'Ver esta página en inglés', shortLabel: 'EN' },
  nav: { work: 'Casos', capabilities: 'Capacidades', experience: 'Experiencia', about: 'Sobre mí', contact: 'Contacto' },
  hero: {
    name: 'Catriel Bartezaghi',
    eyebrow: 'Software Engineer · Full stack con foco backend',
    headline: 'Construyo software confiable para operaciones críticas',
    subtitle: 'Llevo procesos complejos a sistemas mantenibles, con reglas de negocio claras, datos consistentes e integraciones bajo control.',
    supportingText: 'Actualmente evoluciono un ERP industrial multiaplicación que conecta ventas, producción, inventario y expedición. Me hago cargo del recorrido completo: relevar y definir requisitos, planificar, diseñar, implementar y validar cambios sobre PHP/MySQL y React, con testing automatizado y CI.',
    proofPoints: ['Lógica de negocio', 'Datos e integraciones', 'Testing y CI/CD'],
    imageAlt: 'Retrato de Catriel Bartezaghi',
  },
  actions: {
    viewWork: 'Ver casos de estudio', downloadResume: 'Descargar CV', emailMe: 'Escribime', resume: 'CV',
    viewCase: 'Leer caso de estudio', backToWork: 'Volver a casos destacados', openExternal: 'abre en una pestaña nueva',
  },
  projectsSection: {
    eyebrow: 'Trabajo seleccionado', title: 'Casos reales, decisiones concretas',
    description: 'Cuatro casos que combinan trabajo entregado, sistemas en evolución y un producto personal, con foco en reglas de negocio, datos e integraciones.',
    featuredLabel: 'Caso principal', evidenceLabel: 'Lo más relevante',
  },
  casePage: {
    overview: 'En pocas palabras', context: 'Contexto', problem: 'El problema', responsibility: 'Mi rol', constraints: 'Condicionantes',
    initiatives: 'Sistemas e iniciativas',
    decisions: 'Decisiones clave', implementation: 'Cómo lo implementé', quality: 'Controles y calidad', result: 'Estado y resultado verificable',
    tradeoffs: 'Trade-offs y trabajo pendiente', stack: 'Tecnologías',
  },
  caseStudies: [casesEsA[0], casesEsB[0], casesEsA[1], casesEsB[1]],
  capabilitiesSection: {
    eyebrow: 'Cómo trabajo', title: 'Capacidades aplicadas en proyectos reales',
    description: 'Cada capacidad está respaldada por decisiones, entregas o formas de trabajo aplicadas en proyectos reales.',
    evidenceLabel: 'En la práctica',
    items: [
      { title: 'Lógica de negocio', description: 'Convierto procesos operativos en estados, validaciones, permisos y flujos que se puedan mantener.', evidence: 'Trazabilidad productiva, reglas de picking y circuitos de compras y pagos.', technologies: ['PHP', 'Laravel', 'Modelado de dominio'], icon: 'logic' },
      { title: 'Integridad de datos', description: 'Sumo resguardos donde un dato inconsistente puede afectar una operación real.', evidence: 'En funcionalidades nuevas incorporé integridad referencial, índices únicos y transacciones; también modelé stock por lote y migraciones controladas.', technologies: ['MySQL', 'PostgreSQL', 'Phinx', 'Eloquent'], icon: 'data' },
      { title: 'Integraciones bajo control', description: 'Uso servicios externos para enriquecer datos o interpretar entradas, manteniendo validaciones, manejo de errores y revisión humana dentro del sistema.', evidence: 'Timeline que genera descripciones desde datos internos con edición humana, y asistente que interpreta mensajes con OpenAI y Twilio.', technologies: ['OpenAI API', 'Twilio', 'Guzzle', 'REST'], icon: 'integration' },
      { title: 'Testing y entrega', description: 'Armo controles automáticos alrededor de las reglas, la persistencia y los cambios de esquema.', evidence: 'Pruebas unitarias y de integración con MySQL, más controles de merge request en GitLab.', technologies: ['Testing automatizado', 'GitLab CI/CD', 'MySQL'], icon: 'quality' },
      { title: 'Modernización gradual', description: 'Incorporo interfaces y límites más claros sin frenar los procesos que ya están en uso.', evidence: 'Ventas adaptada para uso móvil y dashboard React/Vite en producción sobre endpoints PHP testeables.', technologies: ['React', 'Vite', 'PHP', 'JavaScript'], icon: 'modernization' },
      { title: 'Entrega coordinada en equipos internacionales', description: 'Coordino cambios con equipos distribuidos para mantener alineados el desarrollo, el contenido, QA y las fechas de publicación.', evidence: 'Reuniones diarias en inglés y entregas para un sitio B2B internacional, gestionando dependencias entre desarrollo, diseño, marketing, contenido y QA.', technologies: ['Inglés profesional', 'Equipos distribuidos', 'QA', 'Releases'], icon: 'collaboration' },
    ],
  },
  experienceSection: {
    eyebrow: 'Experiencia', title: 'Del análisis a una solución funcionando',
    description: 'Trabajo sobre aplicaciones de negocio y me hago cargo del recorrido completo: entender el proceso, implementarlo y validar que funcione.',
  },
  experience: [
    {
      year: 'Abr 2025 — Presente', role: 'Desarrollador Full Stack', company: 'Serfe', companyUrl: 'https://www.serfe.com/', current: true,
      summary: 'En Serfe evoluciono y mantengo un ERP industrial de cuatro aplicaciones, y también participé en entregas web para un cliente internacional de software B2B.',
      bullets: [
        'Me hago cargo del análisis funcional y técnico, la planificación por iteraciones, el diseño y la implementación de una iniciativa de trazabilidad productiva y stock por lote.',
        'Propuse una estrategia incremental adoptada en el proyecto para integrar y validar cambios sobre procesos legacy antes de una activación coordinada.',
        'Incorporé PHPUnit, pruebas de integración con MySQL y controles de GitLab CI sobre merge requests para detectar problemas de sintaxis, migraciones, conflictos de esquema y dependencias.',
        'Modernicé flujos comerciales para uso móvil e integré un dashboard React/Vite que opera en producción sobre endpoints PHP testeables.',
        'Implementé y publiqué cambios para el sitio de marketing de un cliente internacional de software B2B, coordinando diariamente en inglés con equipos distribuidos de desarrollo, diseño, marketing, contenido y QA para alinear dependencias y ventanas de lanzamiento.',
      ],
    },
    {
      year: 'Ene 2024 — Abr 2025', role: 'Desarrollador Full Stack', company: 'Cipax', companyUrl: 'https://cipax.dev/', current: false,
      summary: 'Trabajé en plataformas de gestión financiera, subsidios, eventos y acompañamiento comunitario.',
      bullets: [
        'Desarrollé módulos Laravel de punta a punta: modelos, servicios, controladores, permisos, reportes e interfaces.',
        'Implementé flujos financieros, resguardos transaccionales, estados coordinados, permisos y doble factor por correo.',
        'Diseñé un timeline multidioma asistido por IA con Strategy/Factory, caché, errores y edición humana.',
        'Integré OpenAI y Twilio para clasificar operaciones y extraer campos desde mensajes de WhatsApp.',
      ],
    },
  ],
  about: {
    eyebrow: 'Sobre mí', title: 'Ingeniería aplicada a operaciones reales',
    paragraphs: [
      'Soy Ingeniero en Informática y desarrollador full stack con foco backend. Me siento cómodo en sistemas donde la consistencia importa de verdad: procesos financieros, trazabilidad productiva, inventario e integraciones.',
      'Mi fuerte es entender cómo funciona una operación y llevarla a modelos de datos, validaciones y flujos mantenibles. Documento requisitos, minutas, decisiones técnicas, convenciones, planificación y pruebas; uso agentes de IA para asistir el análisis, la implementación y el testing, manteniendo las decisiones y la validación final bajo mi responsabilidad.',
      'También tengo experiencia colaborando diariamente en inglés con equipos distribuidos, coordinando dependencias y entregas entre perfiles técnicos y de negocio.',
    ],
    facts: ['Ingeniero en Informática', 'Santa Fe, Argentina', 'Inglés profesional en equipos distribuidos', 'Análisis funcional y técnico'],
  },
  academic: {
    eyebrow: 'Formación académica', title: 'Ingeniero en Informática',
    institution: 'Universidad Nacional del Litoral · Santa Fe, Argentina',
    period: 'Finalizado en 2023', thesisLabel: 'Tesis de grado',
    thesisTitle: 'Sistema inteligente de decisión de inversiones con Machine Learning',
    description: 'Diseñé y desarrollé un sistema de Machine Learning que integra precios e indicadores financieros de múltiples fuentes para predecir variaciones diarias y evaluar señales de inversión mediante backtesting histórico.',
    evidence: [
      'Construí un pipeline para integrar datos financieros desde APIs y fuentes públicas, con limpieza, persistencia y alineación de series diarias, mensuales y trimestrales.',
      'Diseñé una arquitectura modular en PyTorch que combina series temporales con indicadores macroeconómicos y contables.',
      'Implementé entrenamiento y evaluación temporal sin utilizar datos futuros, más un módulo de backtesting para simular señales de compra y venta.',
      'Preparé un entorno reproducible con Python, SQLite y Docker para procesar datos y entrenar modelos localmente.',
    ],
    technologies: ['Machine Learning', 'Python', 'PyTorch', 'LSTM', 'Pandas', 'SQLite', 'Docker'], linkLabel: 'Leer tesis PDF',
    link: '/catriel-bartezaghi-investment-decision-system-thesis.pdf',
  },
  contact: {
    eyebrow: 'Contacto', headline: '¿Tenés un desafío donde pueda aportar?',
    description: 'Busco oportunidades full stack con foco backend, especialmente en productos con lógica de negocio, datos, integraciones y responsabilidad de punta a punta.',
    email: 'catriel.barte@gmail.com',
    links: { linkedin: 'https://linkedin.com/in/catrielbartezaghi/', github: 'https://github.com/catrielbartezaghi', resume: '/catriel-bartezaghi-resume-es.pdf' },
  },
  footer: { phrase: 'Software pensado alrededor de reglas, datos y operaciones reales.', emailLabel: 'Email' },
};
