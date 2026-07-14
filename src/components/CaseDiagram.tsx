import { ArrowDown, ArrowRight, Database, Layers, Monitor, Server, Shield, Smartphone, Workflow } from 'lucide-react';
import type { DiagramType, Language } from '@/data/portfolio';

/* ------------------------------------------------------------------ */
/*  Shared primitives                                                  */
/* ------------------------------------------------------------------ */

type IconComponent = React.ComponentType<{
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
}>;

function FlowArrow({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden='true' className={`flex items-center justify-center ${className}`}>
      <ArrowRight className='hidden h-5 w-5 text-primary/50 sm:block' />
      <ArrowDown className='h-5 w-5 text-primary/50 sm:hidden' />
    </div>
  );
}

function Node({
  children,
  detail,
  accent = false,
  icon: Icon,
  className = '',
}: {
  children: React.ReactNode;
  detail?: React.ReactNode;
  accent?: boolean;
  icon?: IconComponent;
  className?: string;
}) {
  return (
    <div className={`diagram-node-v2 ${accent ? 'diagram-node-v2--accent' : ''} ${className}`}>
      {Icon ? <Icon aria-hidden='true' className='mb-1 h-4 w-4 text-primary' /> : null}
      <span className='font-semibold leading-snug'>{children}</span>
      {detail ? <span className='diagram-node-v2__detail'>{detail}</span> : null}
    </div>
  );
}

function GroupBox({ label, children, className = '' }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`diagram-group ${className}`}>
      <p className='diagram-group__label'>{label}</p>
      <div className='diagram-group__content'>{children}</div>
    </div>
  );
}

function InfoBand({
  children,
  detail,
  accent = false,
  icon: Icon,
}: {
  children: React.ReactNode;
  detail?: React.ReactNode;
  accent?: boolean;
  icon?: IconComponent;
}) {
  return (
    <div className={`diagram-band ${accent ? 'diagram-band--accent' : ''}`}>
      {Icon ? <Icon aria-hidden='true' className='h-4 w-4 shrink-0 text-primary' /> : null}
      <span className='font-semibold'>{children}</span>
      {detail ? <span className='diagram-band__detail'>{detail}</span> : null}
    </div>
  );
}

function DiagramPanel({ ariaLabel, children }: { ariaLabel: string; children: React.ReactNode }) {
  return (
    <div className='diagram-panel-v2' role='img' aria-label={ariaLabel}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Traceability: expected inputs -> staged production -> evidence     */
/* ------------------------------------------------------------------ */

type TraceLabels = {
  expected: string;
  production: string;
  productionDetail: string;
  results: string;
  traceability: string;
  comparison: string;
  status: string;
  ariaLabel: string;
};

const traceLabels: Record<Language, TraceLabels> = {
  en: {
    expected: 'Recipe & expected inputs',
    production: 'Batch persistence in production stages',
    productionDetail: 'Actual consumption · outputs · stock movements',
    results: 'Verifiable outcomes',
    traceability: 'End-to-end traceability',
    comparison: 'Anomaly & deviation detection',
    status: 'Planned iterative process · development in progress',
    ariaLabel: 'Recipe and expected inputs flow into batch persistence in production stages, enabling end-to-end traceability, anomaly and deviation detection, within a planned iterative process with development in progress.',
  },
  es: {
    expected: 'Receta e insumos esperados',
    production: 'Persistencia de lote en etapas productivas',
    productionDetail: 'Consumos reales · productos obtenidos · movimientos de stock',
    results: 'Resultados verificables',
    traceability: 'Trazabilidad de punta a punta',
    comparison: 'Detección de desvíos y anomalías',
    status: 'Proceso iterativo planificado · desarrollo en ejecución',
    ariaLabel: 'La receta y los insumos esperados se conectan con la persistencia de lote en etapas productivas, permitiendo trazabilidad de punta a punta, detección de desvíos y anomalías, bajo un proceso iterativo planificado con desarrollo en ejecución.',
  },
};

function TraceabilityDiagram({ language }: { language: Language }) {
  const t = traceLabels[language];

  return (
    <DiagramPanel ariaLabel={t.ariaLabel}>
      <div className='flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3'>
        <Node icon={Workflow} className='sm:flex-1'>{t.expected}</Node>
        <FlowArrow />
        <Node accent icon={Layers} detail={t.productionDetail} className='sm:flex-[1.25]'>{t.production}</Node>
        <FlowArrow />
        <GroupBox label={t.results} className='sm:flex-1'>
          <div className='grid gap-2'>
            <Node icon={Shield}>{t.traceability}</Node>
            <Node icon={Monitor}>{t.comparison}</Node>
          </div>
        </GroupBox>
      </div>
      <InfoBand icon={Layers}>{t.status}</InfoBand>
    </DiagramPanel>
  );
}

/* ------------------------------------------------------------------ */
/*  Modernization: one active sales system, two focused experiences    */
/* ------------------------------------------------------------------ */

type ModernLabels = {
  source: string;
  sourceDetail: string;
  mobile: string;
  mobileAudience: string;
  dashboard: string;
  dashboardAudience: string;
  ariaLabel: string;
};

const modernLabels: Record<Language, ModernLabels> = {
  en: {
    source: 'PHP/MySQL sales system',
    sourceDetail: 'Active and source of truth',
    mobile: 'Mobile sales',
    mobileAudience: 'Orders, customers & collections for salespeople',
    dashboard: 'React/Vite commercial dashboard',
    dashboardAudience: 'Sales analysis for the commercial team',
    ariaLabel: 'An active PHP and MySQL sales system remains the source of truth while supporting mobile sales workflows and a React and Vite dashboard for commercial analysis.',
  },
  es: {
    source: 'Sistema de ventas PHP/MySQL',
    sourceDetail: 'Operativo y fuente de verdad',
    mobile: 'Ventas mobile',
    mobileAudience: 'Pedidos, clientes y cobranzas para vendedores',
    dashboard: 'Dashboard comercial React/Vite',
    dashboardAudience: 'Análisis de ventas para el equipo comercial',
    ariaLabel: 'Un sistema de ventas PHP y MySQL operativo permanece como fuente de verdad y sostiene una experiencia mobile para vendedores y un dashboard React y Vite para análisis comercial.',
  },
};

function ModernizationDiagram({ language }: { language: Language }) {
  const t = modernLabels[language];

  return (
    <DiagramPanel ariaLabel={t.ariaLabel}>
      <div className='grid items-center gap-3 sm:grid-cols-[minmax(0,0.8fr)_auto_minmax(0,1.5fr)]'>
        <Node accent icon={Server} detail={t.sourceDetail}>{t.source}</Node>
        <FlowArrow />
        <div className='grid gap-2 border-t border-primary/25 pt-3 sm:border-l sm:border-t-0 sm:py-1 sm:pl-4'>
          <Node icon={Smartphone} detail={t.mobileAudience}>{t.mobile}</Node>
          <Node icon={Monitor} detail={t.dashboardAudience}>{t.dashboard}</Node>
        </div>
      </div>
    </DiagramPanel>
  );
}

/* ------------------------------------------------------------------ */
/*  Business systems: independent products, shared engineering lens    */
/* ------------------------------------------------------------------ */

type CipaxLabels = {
  systems: string;
  finance: string;
  community: string;
  events: string;
  grants: string;
  accounting: string;
  ownership: string;
  foundation: string;
  foundationDetail: string;
  ariaLabel: string;
};

const cipaxLabels: Record<Language, CipaxLabels> = {
  en: {
    systems: '5 independent business systems',
    finance: 'Financial management',
    community: 'Community support',
    events: 'Event management',
    grants: 'Grant administration',
    accounting: 'Multi-organization accounting',
    ownership: 'End-to-end full-stack development',
    foundation: 'Unified development stack',
    foundationDetail: 'Laravel · Relational databases · Business logic · Blade, Livewire & responsive design',
    ariaLabel: 'Five independent business systems for finance, community support, events, grants, and multi-organization accounting, developed end to end with a unified Laravel-based development stack.',
  },
  es: {
    systems: '5 sistemas de negocio independientes',
    finance: 'Gestión financiera',
    community: 'Acompañamiento comunitario',
    events: 'Gestión de eventos',
    grants: 'Administración de grants',
    accounting: 'Gestión contable multi-organización',
    ownership: 'Desarrollo full stack de punta a punta',
    foundation: 'Stack de desarrollo unificado',
    foundationDetail: 'Laravel · Bases relacionales · Reglas de negocio · Blade, Livewire y diseño responsive',
    ariaLabel: 'Cinco sistemas de negocio independientes para gestión financiera, acompañamiento comunitario, eventos, grants y contabilidad multi-organización, desarrollados de punta a punta sobre un stack de desarrollo unificado con Laravel.',
  },
};

function CipaxDiagram({ language }: { language: Language }) {
  const t = cipaxLabels[language];

  return (
    <DiagramPanel ariaLabel={t.ariaLabel}>
      <GroupBox label={t.systems}>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5'>
          <Node icon={Database}>{t.finance}</Node>
          <Node icon={Workflow}>{t.community}</Node>
          <Node icon={Monitor}>{t.events}</Node>
          <Node icon={Shield}>{t.grants}</Node>
          <Node icon={Layers}>{t.accounting}</Node>
        </div>
      </GroupBox>
      <div className='mt-3 grid gap-2 md:grid-cols-[0.85fr_1.4fr]'>
        <InfoBand accent icon={Server}>{t.ownership}</InfoBand>
        <InfoBand icon={Layers} detail={t.foundationDetail}>{t.foundation}</InfoBand>
      </div>
    </DiagramPanel>
  );
}

/* ------------------------------------------------------------------ */
/*  TallyNorth: financial inputs -> domain rules -> planning outputs   */
/* ------------------------------------------------------------------ */

type TallyLabels = {
  inputs: string;
  inputsDetail: string;
  engine: string;
  engineDetail: string;
  outputs: string;
  outputsDetail: string;
  security: string;
  ariaLabel: string;
};

const tallyLabels: Record<Language, TallyLabels> = {
  en: {
    inputs: 'Accounts · transactions · cards',
    inputsDetail: 'CSV · exchange rates',
    engine: 'Financial rules engine',
    engineDetail: 'Installments · recurrences · multi-currency conversion',
    outputs: 'Monthly projection',
    outputsDetail: 'Consolidated net worth · indicators',
    security: 'Data isolated per user',
    ariaLabel: 'Accounts, transactions, cards, CSV files, and exchange rates are processed by a financial rules engine to produce monthly projections, consolidated net worth, and indicators with data isolated per user.',
  },
  es: {
    inputs: 'Cuentas · movimientos · tarjetas',
    inputsDetail: 'CSV · cotizaciones',
    engine: 'Motor de reglas financieras',
    engineDetail: 'Cuotas · recurrencias · conversión multimoneda',
    outputs: 'Proyección mensual',
    outputsDetail: 'Patrimonio consolidado · indicadores',
    security: 'Datos aislados por usuario',
    ariaLabel: 'Las cuentas, movimientos, tarjetas, archivos CSV y cotizaciones pasan por un motor de reglas financieras para generar proyecciones mensuales, patrimonio consolidado e indicadores con datos aislados por usuario.',
  },
};

function TallyNorthDiagram({ language }: { language: Language }) {
  const t = tallyLabels[language];

  return (
    <DiagramPanel ariaLabel={t.ariaLabel}>
      <div className='flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3'>
        <Node icon={Database} detail={t.inputsDetail} className='sm:flex-1'>{t.inputs}</Node>
        <FlowArrow />
        <Node accent icon={Workflow} detail={t.engineDetail} className='sm:flex-[1.25]'>{t.engine}</Node>
        <FlowArrow />
        <Node icon={Monitor} detail={t.outputsDetail} className='sm:flex-1'>{t.outputs}</Node>
      </div>
      <InfoBand icon={Shield}>{t.security}</InfoBand>
    </DiagramPanel>
  );
}

/* ------------------------------------------------------------------ */
/*  Router                                                             */
/* ------------------------------------------------------------------ */

const diagrams: Record<DiagramType, React.ComponentType<{ language: Language }>> = {
  traceability: TraceabilityDiagram,
  modernization: ModernizationDiagram,
  finance: CipaxDiagram,
  cipax: CipaxDiagram,
  tallynorth: TallyNorthDiagram,
};

export function CaseDiagram({ type, language }: { type: DiagramType; language: Language }) {
  const Diagram = diagrams[type];
  return <Diagram language={language} />;
}
