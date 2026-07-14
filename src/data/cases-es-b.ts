import type { CaseStudy } from '@/data/portfolio';

export const casesEsB: CaseStudy[] = [
  {
    slug: 'erp-commercial-modernization', featured: false, diagram: 'modernization',
    category: 'Modernización full stack', employer: 'Trabajo profesional · Serfe',
    status: 'En producción', diagramCaption: 'Evolución incremental sobre aplicaciones activas',
    title: 'Modernización comercial de un ERP multiaplicación',
    description: 'Modernicé el sistema de ventas basado en PHP/MySQL para su uso desde teléfonos e integré un dashboard con React/Vite, extendiendo la base existente y manteniendo operativos sus circuitos comerciales.',
    evidence: ['Ventas responsive desplegada y en uso', 'Dashboard React/Vite en producción', 'Endpoints PHP, reglas testeadas y consultas optimizadas', 'Evolución incremental sobre circuitos comerciales activos'],
    technologies: ['PHP', 'MySQL', 'React', 'Vite', 'Bootstrap 5'],
    summary: 'Modernicé por etapas la capa comercial de un ERP industrial sin reescribir aplicaciones que seguían activas. Adapté Ventas para teléfonos mediante Bootstrap 5, tablas, modales y formularios reutilizables; además integré un dashboard React/Vite con endpoints PHP y cálculos centralizados en backend. Tanto la modernización móvil como el dashboard están desplegados y en uso.',
    context: 'Ventas e Intranet sostenían pedidos, clientes, cobranzas, recibos, rendiciones e informes de una empresa láctea. Las pantallas server-side y sus dependencias debían evolucionar sin interrumpir procesos comerciales existentes.',
    problem: 'La aplicación de Ventas resultaba difícil de utilizar desde teléfonos. A la vez, los nuevos informes comerciales necesitaban visualizaciones modernas sin duplicar reglas en el navegador ni generar conflictos con el CSS y el backend legacy.',
    role: 'El cliente definió las necesidades operativas y validó las entregas. Yo implementé la evolución full stack: experiencia responsive, componentes reutilizables, endpoints AJAX, agregaciones de backend, optimización de consultas, integración React/Vite y pruebas sobre reglas comerciales.',
    constraints: ['Mantener disponibles pedidos, clientes, cobranzas e informes durante la modernización', 'Convivir con PHP server-side, jQuery, estilos globales y dependencias legacy', 'Introducir React solo donde aportaba valor sin trasladar al frontend la fuente de verdad'],
    decisions: ['Migrar la experiencia móvil progresivamente en lugar de reescribir Ventas', 'Extraer tablas, modales y formularios reutilizables para reducir duplicación', 'Centralizar agrupaciones, períodos y cálculos comerciales en endpoints PHP testeables', 'Aislar los estilos del dashboard React/Vite para evitar regresiones sobre la aplicación existente'],
    implementation: ['Adapté pedidos, clientes, cobranzas, cuentas corrientes, recibos e informes para pantallas reducidas e interacción táctil', 'Construí comportamientos responsive reutilizables, mejoré navegación y resolví problemas específicos de iOS y dobles envíos', 'Integré metadata, tablas, históricos y comparaciones cliente-producto mediante React/Vite, endpoints PHP y consultas optimizadas'],
    quality: ['Pruebas unitarias sobre reglas de agrupación y comparación temporal', 'Consultas parametrizadas y optimizaciones para evitar procesamiento y uso de memoria innecesarios', 'Aislamiento de estilos y evolución incremental para reducir regresiones sobre flujos activos'],
    results: ['Los principales flujos de Ventas cuentan con variantes móviles desplegadas y utilizables desde teléfonos', 'El dashboard React/Vite opera en producción con las reglas y agregaciones centralizadas en backend', 'La modernización se incorporó sin exigir una reescritura ni detener las aplicaciones existentes'],
    tradeoffs: ['React se incorporó en un módulo acotado y el resto continúa sobre la arquitectura legacy', 'La convivencia con dos enfoques de interfaz requiere límites y estilos explícitos', 'No se publican métricas de adopción o mejora de performance sin mediciones confirmadas'],
    links: [{ label: 'Sitio de Serfe', href: 'https://www.serfe.com/', kind: 'external' }],
  },
  {
    slug: 'tallynorth', featured: false, diagram: 'tallynorth',
    category: 'Producto personal full stack', employer: 'Aplicación funcional · Beta',
    title: 'TallyNorth: proyección y análisis financiero multimoneda',
    description: 'Plataforma full stack que integra cuentas, inversiones y consumos con tarjeta para consolidar el patrimonio y proyectar el flujo de caja mensual.',
    evidence: [
      'Motor de vencimientos por cierre de tarjeta y proyección de flujo mensual',
      'Consolidación multimoneda con cotizaciones directas, inversas y cruzadas',
      'Aislamiento multiusuario a nivel de consulta y cookies de sesión seguras',
      'Importación masiva de consumos y conciliación automática desde CSV'
    ],
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    summary: 'TallyNorth es una plataforma de finanzas personales que conecta el registro cotidiano con la planificación futura. Centraliza cuentas, presupuestos, metas, tarjetas e inversiones, y proyecta cuotas, consumos recurrentes y patrimonio consolidado en ARS o USD.',
    context: 'El control financiero personal cotidiano suele limitarse al registro de gastos pasados. Sin embargo, para tomar decisiones reales, el usuario necesita ver su liquidez futura consolidada y planificar consumos a plazo antes de que impacten en sus cuentas.',
    problem: 'El desafío técnico era representar de forma íntegra las compras con tarjeta según su fecha de cierre y vencimiento, proyectar flujos futuros calculando recurrencias bajo demanda y consolidar activos financieros en distintas monedas sin cotizaciones directas.',
    role: 'Diseñé y desarrollé la aplicación de extremo a extremo: desde el diseño del esquema relacional y las reglas del dominio financiero en el backend, hasta la construcción del cliente de API y las vistas analíticas en la interfaz.',
    constraints: [
      'Modelar la lógica de tarjetas de crédito con fechas de cierre y vencimiento sin generar inconsistencias de fechas',
      'Garantizar el aislamiento estricto de registros entre usuarios en todos los endpoints',
      'Procesar importaciones masivas de consumos asegurando validaciones y consistencia de datos'
    ],
    decisions: [
      'Modelar cada compra con tarjeta y sus cuotas como entidades independientes para registrar individualmente sus vencimientos y pagos, mientras que las recurrencias futuras se calculan bajo demanda',
      'Separar las reglas de conversión de divisas, proyecciones de flujo e importaciones del framework web, facilitando su mantenimiento y testing independiente',
      'Implementar el aislamiento de datos multiusuario en el backend para que cada petición opere únicamente sobre los registros del usuario autenticado'
    ],
    implementation: [
      'Estructuré la API REST en FastAPI definiendo schemas Pydantic diferenciados para la entrada y salida de datos',
      'Construí la interfaz web interactiva con Next.js, React y TypeScript, administrando el estado y optimizando las peticiones de datos al servidor',
      'Integré Recharts para el dashboard interactivo y Yahoo Finance para la sincronización programada de cotizaciones'
    ],
    quality: [
      'Asegurar la integridad transaccional de la base de datos para registrar movimientos, tarjetas y presupuestos de forma atómica y evitar estados parciales huérfanos',
      'Proteger el token de sesión mediante el uso de cookies firmadas HttpOnly con políticas Secure y SameSite frente a accesos no autorizados',
      'Migraciones de esquema versionadas con Alembic y ambiente contenerizado reproducible mediante Docker Compose'
    ],
    results: [
      'Aplicación beta completamente funcional desplegada en producción y repositorio de código público accesible',
      'Dashboard bilingüe integrado que muestra proyecciones mensuales de cashflow, avance de metas y rendimiento de inversiones',
      'Carga de consumos individual, masiva desde archivos CSV y planificación automatizada de vencimientos operativa'
    ],
    tradeoffs: [
      'La carga masiva requiere archivos CSV estructurados; la flexibilidad de procesar resúmenes libres queda supeditada a un posterior módulo de IA con revisión humana',
      'El cálculo bajo demanda de recurrencias futuras ahorra almacenamiento y mantenimiento, pero demanda mayor procesamiento en lecturas grandes',
      'Se priorizó la consistencia transaccional y el aislamiento de datos sobre la velocidad de desarrollo de nuevas vistas de análisis'
    ],
    links: [
      { label: 'Abrir aplicación', href: 'https://tally-north.vercel.app/', kind: 'external' },
      { label: 'Ver repositorio', href: 'https://github.com/CatrielBartezaghi/TallyNorth', kind: 'external' },
    ],
  },
];
