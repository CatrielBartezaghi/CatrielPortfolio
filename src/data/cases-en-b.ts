import type { CaseStudy } from '@/data/portfolio';

export const casesEnB: CaseStudy[] = [
  {
    slug: 'erp-commercial-modernization',
    featured: false,
    category: 'Full-stack modernization',
    employer: 'Professional work · Serfe',
    status: 'In production',
    title: 'Commercial modernization of a multi-application ERP',
    description: 'I modernized the PHP/MySQL Sales application for phone use and integrated a React/Vite dashboard, extending the existing foundation while keeping its commercial workflows operational.',
    evidence: ['Responsive Sales workflows deployed and in use', 'React/Vite dashboard running in production', 'PHP endpoints, tested rules, and optimized queries', 'Incremental evolution across active commercial workflows'],
    technologies: ['PHP', 'MySQL', 'React', 'Vite', 'Bootstrap 5'],
    diagram: 'modernization',
    diagramCaption: 'Incremental evolution across active applications',
    summary: 'I modernized the commercial layer of an industrial ERP in stages, without rewriting applications that remained active. I adapted Sales for phone use with Bootstrap 5 and reusable tables, modals, and forms, then integrated a React/Vite dashboard backed by PHP endpoints and backend-owned calculations. Both the mobile modernization and the dashboard are deployed and in use.',
    context: 'Sales and Intranet supported orders, customers, collections, receipts, settlements, and reporting for a dairy producer. Their server-rendered screens and dependencies had to evolve without interrupting existing commercial processes.',
    problem: 'The Sales application was difficult to use from phones. At the same time, new commercial reporting needed modern visualizations without duplicating rules in the browser or creating conflicts with legacy CSS and backend behavior.',
    role: 'The client defined operational needs and validated deliveries. I implemented the full-stack evolution across responsive UX, reusable components, AJAX endpoints, backend aggregation, query optimization, React/Vite integration, and tests for commercial rules.',
    constraints: ['Keep orders, customers, collections, and reporting available throughout the modernization', 'Coexist with server-rendered PHP, jQuery, global styles, and legacy dependencies', 'Introduce React where it added value without moving the source of truth into the frontend'],
    decisions: ['Migrate the mobile experience progressively instead of rewriting Sales', 'Extract reusable tables, modals, and forms to reduce duplication', 'Centralize grouping, time-period, and commercial calculations in testable PHP endpoints', 'Isolate React/Vite dashboard styles to avoid regressions in the existing application'],
    implementation: ['Adapted orders, customers, collections, current accounts, receipts, and reports for small screens and touch interaction', 'Built reusable responsive behavior, improved navigation, and addressed iOS interaction and duplicate-submission issues', 'Integrated metadata, tables, history, and customer-product comparisons through React/Vite, PHP endpoints, and optimized queries'],
    quality: ['Unit tests for grouping and time-comparison rules', 'Parameterized queries and optimizations to avoid unnecessary processing and memory use', 'Style isolation and incremental delivery to reduce regression risk across active workflows'],
    results: ['Core Sales workflows now have deployed mobile variants usable from phones', 'The React/Vite dashboard runs in production with rules and aggregations centralized in the backend', 'The modernization was introduced without a rewrite or interruption to the existing applications'],
    tradeoffs: ['React remains scoped to a focused module while the rest of the application uses the legacy architecture', 'Two interface approaches require explicit boundaries and style isolation', 'No adoption or performance-improvement metric is published without confirmed measurements'],
    links: [{ label: 'Serfe website', href: 'https://www.serfe.com/', kind: 'external' }],
  },
  {
    slug: 'tallynorth',
    featured: false,
    category: 'Full-stack personal product',
    employer: 'Functional application · Beta',
    title: 'TallyNorth: multi-currency financial planning and analytics',
    description: 'A full-stack platform integrating accounts, investments, and card transactions to consolidate net worth and project monthly cash flows.',
    evidence: [
      'Card statement schedule engine and monthly cash flow projection',
      'Multi-currency consolidation with direct, inverse, and cross exchange rates',
      'Multi-tenant query-level isolation and secure HTTP-only cookie sessions',
      'Bulk transaction imports and automatic reconciliation from CSV files'
    ],
    technologies: ['Next.js', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    diagram: 'tallynorth',
    summary: 'TallyNorth is a personal finance platform that connects day-to-day tracking with future planning. It centralizes accounts, budgets, goals, cards, and investments, projecting installments, recurring transactions, and consolidated net worth in ARS or USD.',
    context: 'Day-to-day personal finance management is often limited to tracking past expenses. However, to make real decisions, the user needs to view future liquidity and plan financed purchases before they hit their bank accounts.',
    problem: 'The technical challenge was representing credit card purchases based on closing and due dates, projecting cash flow by calculating recurrences on demand, and consolidating assets across different currencies without direct exchange rates.',
    role: 'I designed and built the application end-to-end: from database schema and backend domain rules to the API client and analytics views in the interface.',
    constraints: [
      'Model credit card billing cycles and due dates without generating invalid dates or timeline gaps',
      'Enforce strict record isolation between users across all API endpoints',
      'Process bulk imports of transactions while enforcing strict validation and consistency'
    ],
    decisions: [
      'Model each card purchase and its installments as independent entities to individually track their due dates and payments, while future recurrences are calculated on demand',
      'Isolate currency conversion, cash flow projection, and import logic from the web framework, allowing independent maintenance and testing',
      'Implement multi-tenant data isolation at the backend level so that each request operates strictly on the authenticated user\'s records'
    ],
    implementation: [
      'Structured the FastAPI REST API with Pydantic schemas separating data input from serialized outputs',
      'Built the interactive web interface with Next.js, React, and TypeScript, managing application state and optimizing data fetching',
      'Integrated Recharts for the interactive dashboard and Yahoo Finance API for scheduled market rate synchronization'
    ],
    quality: [
      'Ensure database transactional integrity in PostgreSQL to write movements, cards, and budgets atomically and avoid orphaned states',
      'Protect the session token using signed cookies (HttpOnly, Secure, SameSite) against unauthorized access and common web vulnerabilities',
      'Versioned database migrations with Alembic and reproducible containerized environments using Docker Compose'
    ],
    results: [
      'Fully functional beta application deployed to production with a publicly accessible code repository',
      'Bilingual dashboard integration showing monthly cash flow projections, savings goal progress, and investment returns',
      'Working transaction entry system supporting manual inputs, bulk CSV imports, and automated statement scheduling'
    ],
    tradeoffs: [
      'Bulk imports depend on structured CSVs; processing raw statements is deferred to an upcoming AI module with human-in-the-loop validation',
      'On-demand recurrence expansion saves database storage but requires more compute power for large date range queries',
      'Prioritized transactional integrity and strict multi-tenant isolation over rapid prototyping of additional dashboard widgets'
    ],
    links: [
      { label: 'Open live app', href: 'https://tally-north.vercel.app/', kind: 'external' },
      { label: 'View repository', href: 'https://github.com/CatrielBartezaghi/TallyNorth', kind: 'external' },
    ],
  },
];
