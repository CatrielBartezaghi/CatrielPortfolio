import { ArrowRight } from 'lucide-react';
import type { DiagramType, Language } from '@/data/portfolio';

const diagramLabels: Record<Language, Record<DiagramType, string[]>> = {
  en: {
    traceability: ['Production rules', 'Operational validation', 'Transactional records', 'Traceability'],
    modernization: ['Legacy commercial ERP', 'Responsive UI', 'Testable PHP endpoints', 'React/Vite dashboard', 'Production use'],
    finance: ['Purchase order', 'Payment order', 'Account movement', 'Reconciliation'],
    cipax: ['5 Laravel platforms', 'Business rules', 'Data and states', 'Permissions and integrations', 'Interfaces and reports'],
    tallynorth: ['Next.js client', 'FastAPI', 'Domain services', 'PostgreSQL'],
  },
  es: {
    traceability: ['Reglas de producción', 'Validación operativa', 'Registro transaccional', 'Trazabilidad'],
    modernization: ['ERP comercial legacy', 'UI responsive', 'Endpoints PHP testeables', 'Dashboard React/Vite', 'Uso en producción'],
    finance: ['Orden de compra', 'Orden de pago', 'Movimiento', 'Arqueo'],
    cipax: ['5 plataformas Laravel', 'Reglas de negocio', 'Datos y estados', 'Permisos e integraciones', 'Interfaces y reportes'],
    tallynorth: ['Cliente Next.js', 'FastAPI', 'Servicios de dominio', 'PostgreSQL'],
  },
};

export function CaseDiagram({ type, language, compact = false }: { type: DiagramType; language: Language; compact?: boolean }) {
  return (
    <div className={`diagram-panel ${compact ? 'p-4' : 'p-6 sm:p-8'}`} role='img' aria-label={diagramLabels[language][type].join(' → ')}>
      <div className='flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center'>
        {diagramLabels[language][type].map((label, index, labels) => (
          <div key={label} className='contents'>
            <div className={`diagram-node ${compact ? 'min-h-12 text-xs' : 'min-h-16 text-sm'}`}>{label}</div>
            {index < labels.length - 1 ? <ArrowRight aria-hidden='true' className='mx-auto h-4 w-4 shrink-0 rotate-90 text-primary/60 sm:rotate-0' /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
