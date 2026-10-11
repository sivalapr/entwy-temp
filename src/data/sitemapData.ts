import { CaseStudy, Article, ProcessStage, IndustryItem } from '../types/sitemap';

// ==========================================
// 1. SERVICES (5 PILLARS FROM SITEMAP)
// ==========================================
export const servicesPillarsData = {
  strategy: {
    id: 'strategy',
    title: 'Strategy',
    iconName: 'Compass',
    desc: 'Clarify product roadmap, validate market fit, and implement enterprise-ready AI strategies.',
    items: [
      { name: 'Product Strategy', desc: 'Define your multi-year product roadmap, target user journeys, and KPI north stars.', slug: 'product-strategy' },
      { name: 'Digital Transformation', desc: 'Modernize legacy operating models with modern cloud and API-first foundations.', slug: 'digital-transformation' },
      { name: 'AI Strategy', desc: 'Identify highest-ROI AI opportunities with concrete feasibility and risk benchmarks.', slug: 'ai-strategy' },
      { name: 'Product Consulting', desc: 'Hands-on advisory across product architecture, unit economics, and tech debt relief.', slug: 'product-consulting' },
    ],
  },
  design: {
    id: 'design',
    title: 'Design',
    iconName: 'Palette',
    desc: 'Craft intuitive, accessible interfaces and rigorous design systems engineered for conversion.',
    items: [
      { name: 'UX Research', desc: 'In-depth user interviews, workflow friction analysis, and usability validation.', slug: 'ux-research' },
      { name: 'UI/UX Design', desc: 'Pixel-perfect digital interfaces built with Zapier-grade warmth and clarity.', slug: 'ui-ux-design' },
      { name: 'Product Design', desc: 'End-to-end design from wireframe ideation to developer handoff specifications.', slug: 'product-design' },
      { name: 'Design Systems', desc: 'Scalable token architectures, reusable component libraries, and documentation.', slug: 'design-systems' },
      { name: 'Prototyping', desc: 'Interactive, clickable prototypes to test mental models before writing production code.', slug: 'prototyping' },
    ],
  },
  ai: {
    id: 'ai',
    title: 'AI',
    iconName: 'Bot',
    desc: 'Deploy autonomous agents, multimodal intelligence, and fine-tuned enterprise LLMs.',
    items: [
      { name: 'AI Solutions', desc: 'Turn enterprise business challenges into custom generative AI applications.', slug: 'ai-solutions' },
      { name: 'AI Agents', desc: 'Self-governing autonomous agents that plan, reason, and trigger external API actions.', slug: 'ai-agents' },
      { name: 'AI Automation', desc: 'Zero-touch workflows that replace repetitive manual data transformations.', slug: 'ai-automation' },
      { name: 'AI Integration', desc: 'Seamless connection of vector databases, LLM endpoints, and internal tools.', slug: 'ai-integration' },
      { name: 'Generative AI / Custom AI Development', desc: 'Bespoke fine-tuning, RAG pipelines, and proprietary model orchestration.', slug: 'generative-ai-custom-development' },
    ],
  },
  technology: {
    id: 'technology',
    title: 'Technology',
    iconName: 'Code',
    desc: 'Engineered for resilience, high concurrency, sub-second latency, and zero downtime.',
    items: [
      { name: 'Web Development', desc: 'High-performance React/Next.js/Vite applications engineered for web scale.', slug: 'web-development' },
      { name: 'Mobile App Development', desc: 'Native-feel iOS and Android applications built with React Native / Expo.', slug: 'mobile-app-development' },
      { name: 'SaaS Development', desc: 'Multi-tenant cloud architectures with integrated billing, auth, and analytics.', slug: 'saas-development' },
      { name: 'API & System Integration', desc: 'Robust webhook brokers, GraphQL/REST APIs, and event-driven data buses.', slug: 'api-system-integration' },
      { name: 'MVP Development', desc: 'Rapid 4-to-6 week sprint to validate product hypotheses with real customers.', slug: 'mvp-development' },
    ],
  },
  marketing: {
    id: 'marketing',
    title: 'Marketing & Roles',
    iconName: 'TrendingUp',
    desc: 'Operational enablement and workflow automations tailored for high-output functional teams.',
    items: [
      { name: 'RevOps', desc: 'Unified revenue data, automated deal desk routing, and cross-platform CRM synchronization.', slug: 'revops' },
      { name: 'Sales Leaders', desc: 'Autonomous pipeline velocity dashboards, forecast modeling, and deal intelligence.', slug: 'sales-leaders' },
      { name: 'Sales Reps', desc: 'Automated CRM enrichment, meeting transcription notes, and personalized outreach.', slug: 'sales-reps' },
      { name: 'Marketers', desc: 'Cross-channel attribution, automated asset generation, and audience segmentation.', slug: 'marketers' },
      { name: 'Developers', desc: 'Developer productivity tools, automated documentation, and API test runners.', slug: 'developers' },
    ],
  },
};

// ==========================================
// 2. SOLUTIONS (5 CORE SOLUTIONS FROM SITEMAP)
// ==========================================
export const solutionsData = [
  {
    id: 'build-a-new-product',
    title: 'Build a New Product',
    tag: 'From 0 to 1',
    desc: 'Turn visionary ideas into full-stack market-ready products with agile delivery teams and proven architecture.',
    bullets: ['Market discovery & MVP scoping', 'Full-stack production development', 'CI/CD deployment & analytics'],
  },
  {
    id: 'build-an-ai-product',
    title: 'Build an AI Product',
    tag: 'AI-Native',
    desc: 'Architect native generative AI platforms with built-in reasoning chains, vector stores, and adaptive user interfaces.',
    bullets: ['Vector search & RAG pipelines', 'Autonomous task execution loops', 'Human-in-the-loop oversight'],
  },
  {
    id: 'add-ai-to-your-product',
    title: 'Add AI to your Product',
    tag: 'Intelligence Layer',
    desc: 'Enhance your existing software with intelligent copilots, predictive insights, and automated user assistance.',
    bullets: ['Embedded AI copilots', 'Semantic search across user data', 'Automated document processing'],
  },
  {
    id: 'modernise-your-platform',
    title: 'Modernise Your Platform',
    tag: 'Legacy Modernization',
    desc: 'De-risk legacy monoliths by migrating to modern cloud architectures, microservices, and reactive frontends.',
    bullets: ['Zero-downtime cloud migration', 'Microservice refactoring', 'Frontend design system overhaul'],
  },
  {
    id: 'automate-business-workflows',
    title: 'Automate Business Workflows',
    tag: 'Zapier-Grade Scale',
    desc: 'Eliminate manual bottlenecks with event-driven automation connecting your CRM, ERP, Slack, and cloud storage.',
    bullets: ['Bi-directional data sync', 'Multi-step trigger-action chains', 'Audit-ready compliance logging'],
  },
];

// ==========================================
// 3. WORK / CASE STUDIES (3 ITEMS FROM SITEMAP)
// ==========================================
export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-study-01',
    category: 'fintech',
    tag: 'Case Study 01 · FinTech & Banking',
    title: 'Autonomous Reconciliation & Risk Engine',
    client: 'Tier-1 Asset Management & Banking Group',
    timeline: '6 Weeks to Production',
    impact: '94% decrease in transaction verification latency, 10M+ automated reconciliations monthly.',
    overview: 'Implemented an event-driven workflow engine that connects transaction streams to real-time risk checks, triggering instant alerts in Slack and automated audit logs in Snowflake.',
    stack: ['React', 'TypeScript', 'Autonomous Agents', 'PostgreSQL', 'Stripe Connect'],
    thumbnailGradient: 'linear-gradient(135deg, #0a2540 0%, #533afd 100%)',
  },
  {
    id: 'case-study-02',
    category: 'health',
    tag: 'Case Study 02 · Healthcare & Clinical Ops',
    title: 'HIPAA-Compliant Clinical Knowledge Workflows',
    client: 'Multinational Health Diagnostics Provider',
    timeline: '8 Weeks to Production',
    impact: 'Reduced clinician administrative burden by 4.2 hours per week per physician.',
    overview: 'Engineered an air-gapped contextual intelligence system that surfaces verified patient diagnostic history during consultations with role-based access control.',
    stack: ['Next.js', 'Vector DB', 'HIPAA Shield', 'REST APIs', 'FastAPI'],
    thumbnailGradient: 'linear-gradient(135deg, #0a2540 0%, #00d4ff 100%)',
  },
  {
    id: 'case-study-03',
    category: 'saas',
    tag: 'Case Study 03 · Scalable Cloud Platforms',
    title: 'Global Supply Chain & ERP Automation Bus',
    client: 'Global Logistics & Freight Enterprise',
    timeline: '10 Weeks to Production',
    impact: 'Automated 120,000 monthly customs clearances with zero human data entry errors.',
    overview: 'Architected a multi-step integration platform synchronizing warehouse logistics, ERP invoice triggers, and port customs status in sub-second real time.',
    stack: ['TypeScript', 'Kubernetes', 'Event Bus', 'GraphQL', 'Tailored Connectors'],
    thumbnailGradient: 'linear-gradient(135deg, #0a2540 0%, #7952ff 100%)',
  },
];

// ==========================================
// 4. PROCESS (5 STAGES FROM SITEMAP)
// ==========================================
export const processStagesData: ProcessStage[] = [
  {
    step: 1,
    slug: 'our-approach',
    title: 'Our Approach',
    timeframe: 'Foundational Principles',
    description: 'We believe in small strike teams, direct access to staff engineers, and shipping working prototypes within days rather than writing slide decks.',
    deliverables: ['Guiding architecture principles', 'Security & governance baseline', 'Clear milestone definitions'],
  },
  {
    step: 2,
    slug: 'discovery-strategy',
    title: 'Discovery & Strategy',
    timeframe: 'Week 1–2',
    description: 'Deep dive into user pain points, system architecture, API boundaries, and workflow integration bottlenecks.',
    deliverables: ['System blueprint', 'Entity-relationship model', 'Prioritized user story backlog'],
  },
  {
    step: 3,
    slug: 'design-build',
    title: 'Design & Build',
    timeframe: 'Week 3–6',
    description: 'Parallel execution where designers create high-fidelity UI systems while engineers construct the backend APIs and agent logic.',
    deliverables: ['Design system tokens', 'Working software releases', 'Continuous preview deployments'],
  },
  {
    step: 4,
    slug: 'test-refine',
    title: 'Test & Refine',
    timeframe: 'Week 7–8',
    description: 'Rigorous end-to-end integration testing, latency optimization, security auditing, and internal user pilot rollouts.',
    deliverables: ['Load testing reports', 'Edge case automated suites', 'Security compliance sign-off'],
  },
  {
    step: 5,
    slug: 'launch-scale',
    title: 'Launch & Scale',
    timeframe: 'Production & Beyond',
    description: 'Zero-downtime production deployment with real-time telemetry, automated self-healing workflows, and knowledge transfer to your team.',
    deliverables: ['Production rollout', 'Telemetry & monitoring dashboards', 'Full code & IP handover'],
  },
];

// ==========================================
// 5. INDUSTRIES (8 INDUSTRIES FROM SITEMAP)
// ==========================================
export const industriesData: IndustryItem[] = [
  {
    id: 'digital-enterprises',
    name: 'Digital Enterprises & Scalable Platforms',
    focus: 'High-throughput microservices, real-time workflow engines, and distributed API integrations.',
    solutions: ['Scalable backend architectures', 'Self-healing worker queues', 'Multi-tenant cloud deployments'],
  },
  {
    id: 'education-learning',
    name: 'Education, Learning & Skill Development',
    focus: 'Personalized adaptive learning pathways, automated student assessments, and institutional knowledge bases.',
    solutions: ['Interactive learning agents', 'Curriculum analytics engines', 'LMS bi-directional integrations'],
  },
  {
    id: 'consumer-retail',
    name: 'Consumer Products & Retail Innovation',
    focus: 'Dynamic inventory sync, omnichannel consumer experiences, and automated loyalty pipelines.',
    solutions: ['Real-time inventory triggers', 'Autonomous customer support', 'Personalized recommendation models'],
  },
  {
    id: 'lifestyle-wellness',
    name: 'Lifestyle, Wellness & Personal Care',
    focus: 'Connected device telemetry, personalized habit insights, and subscription lifecycle automation.',
    solutions: ['Health metric sync', 'Automated recurring billing', 'Engaging mobile companion apps'],
  },
  {
    id: 'healthcare-pharma',
    name: 'Healthcare, Insurance & Pharmaceutical',
    focus: 'HIPAA-compliant document synthesis, claims workflow routing, and clinical data interoperability.',
    solutions: ['Secure EHR integrations', 'Automated claims pre-checks', 'Clinical decision support tools'],
  },
  {
    id: 'banking-investment',
    name: 'Banking & Investment',
    focus: 'Algorithmic reconciliation, compliance reporting automation, and fraud anomaly detection.',
    solutions: ['Sub-second fraud alerts', 'Automated portfolio rebalancing', 'Audit-ready transaction ledgers'],
  },
  {
    id: 'energy-commodities',
    name: 'Energy, Commodities & Industrial Supply',
    focus: 'Grid telemetry processing, carbon credit market intelligence, and predictive maintenance schedules.',
    solutions: ['IoT telemetry streaming', 'Market price prediction models', 'Automated maintenance triggers'],
  },
  {
    id: 'supply-chain-logistics',
    name: 'Supply Chain & Logistics',
    focus: 'Global port tracking, multi-carrier invoice audit, and warehouse fulfillment automation.',
    solutions: ['Cross-carrier tracking pipelines', 'Automated customs filing', 'Route optimization algorithms'],
  },
];

// ==========================================
// 6. ABOUT (5 SECTIONS FROM SITEMAP)
// ==========================================
export const aboutSectionsData = [
  {
    id: 'our-story',
    title: 'Our Story',
    desc: 'Founded on the principle that modern software should eliminate organizational friction. ENTWY unites senior software engineers, AI researchers, and workflow architects to build enduring software for world-class enterprises.',
  },
  {
    id: 'our-team',
    title: 'Our Team',
    desc: 'A high-cadence collective of principal engineers, designers, and domain experts operating globally with offices in Brooklyn, NY and Chennai, India.',
  },
  {
    id: 'our-values',
    title: 'Our Values',
    desc: 'Velocity through clarity. Zero bureaucracy. Customer empathy. Rigorous engineering ethics and responsible, transparent AI.',
  },
  {
    id: 'careers',
    title: 'Careers',
    desc: 'We are always looking for passionate builders, systems thinkers, and design craftspeople to shape the future of enterprise automation.',
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    desc: 'Direct line to our leadership team. Reach us at info@zuntra.com or visit our design & engineering hubs.',
  },
];

// ==========================================
// 7. INSIGHTS (4 CATEGORIES FROM SITEMAP)
// ==========================================
export const insightsCategoriesData = [
  {
    id: 'ai',
    title: 'AI',
    articles: [
      {
        id: 'autonomous-agents-in-production',
        title: 'Architecting Autonomous Multi-Agent Systems in Production',
        date: 'October 2026',
        readTime: '6 min read',
        summary: 'How to design deterministic guardrails and memory stores for LLMs executing external API mutations.',
      },
      {
        id: 'rag-beyond-embeddings',
        title: 'Beyond Embeddings: Graph-Augmented RAG for Enterprise Context',
        date: 'September 2026',
        readTime: '8 min read',
        summary: 'Why vector search alone fails complex corporate hierarchies, and how hybrid graph retrievers solve it.',
      },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    articles: [
      {
        id: 'designing-for-automation',
        title: 'Designing Human-in-the-Loop Workflow Interfaces',
        date: 'October 2026',
        readTime: '5 min read',
        summary: 'How Zapier-inspired micro-interactions and status badges give enterprise operators confidence in automated systems.',
      },
    ],
  },
  {
    id: 'product',
    title: 'Product',
    articles: [
      {
        id: 'mvp-velocity-playbook',
        title: 'The 6-Week Enterprise MVP Playbook',
        date: 'August 2026',
        readTime: '7 min read',
        summary: 'Eliminate committee stalls: how cross-functional strike teams launch testable software with real users fast.',
      },
    ],
  },
  {
    id: 'technology',
    title: 'Technology',
    articles: [
      {
        id: 'event-driven-scale',
        title: 'Zero-Latency Event Buses for Cloud Platforms',
        date: 'September 2026',
        readTime: '9 min read',
        summary: 'Architecting bi-directional webhook engines that guarantee at-least-once delivery with automatic idempotency keys.',
      },
    ],
  },
];

// ==========================================
// 8. CAREERS (4 SECTIONS FROM SITEMAP)
// ==========================================
export const careersSectionsData = [
  {
    id: 'life-at-entwy',
    title: 'Life at ENTWY',
    desc: 'We operate with high agency, minimal meetings, and maximum craft. You will collaborate directly with founders and senior enterprise partners.',
  },
  {
    id: 'open-positions',
    title: 'Open Positions',
    roles: [
      { title: 'Staff AI / LLM Systems Engineer', location: 'Remote / Brooklyn, NY', type: 'Full-time' },
      { title: 'Senior Full-Stack Engineer (React / Node / Go)', location: 'Remote / Chennai, India', type: 'Full-time' },
      { title: 'Lead Product Designer (Design Systems)', location: 'Remote', type: 'Full-time' },
      { title: 'Solutions Architect (Enterprise Automations)', location: 'New York / Hybrid', type: 'Full-time' },
    ],
  },
  {
    id: 'internships',
    title: 'Internships',
    desc: 'Accelerate your career with a 12-week immersive fellowship working directly on production client platforms with senior mentorship.',
  },
  {
    id: 'hiring-process',
    title: 'Hiring Process',
    desc: 'Transparent 3-stage process: 1. Practical conversation -> 2. Hands-on collaborative pairing session -> 3. Offer within 48 hours.',
  },
];

// ==========================================
// 9. START A PROJECT (4 SECTIONS FROM SITEMAP)
// ==========================================
export const startProjectCategories = [
  {
    id: 'project-enquiry',
    title: 'Project Enquiry',
    desc: 'Kick off a new product build, AI deployment, or platform modernization project with our engineering leaders.',
  },
  {
    id: 'book-a-call',
    title: 'Book a Call',
    desc: 'Schedule a direct 30-minute scoping session with an ENTWY principal architect.',
  },
  {
    id: 'partnerships',
    title: 'Partnerships',
    desc: 'Collaborate with ENTWY on technology integrations, enterprise co-selling, and agency alliances.',
  },
  {
    id: 'general-enquiries',
    title: 'General Enquiries',
    desc: 'Reach out for media requests, technical advisory questions, or general company communication.',
  },
];

// Backward-compatibility exports for existing components
export const servicesData = servicesPillarsData;
export const articlesData: Article[] = [
  {
    id: 'autonomous-agents-in-production',
    topic: 'ai',
    tag: 'Autonomous AI',
    title: 'Architecting Autonomous Multi-Agent Systems in Production',
    readTime: '6 min read',
    date: 'Oct 2026',
    summary: 'How to design deterministic guardrails and memory stores for LLMs executing external API mutations.',
  },
  {
    id: 'rag-beyond-embeddings',
    topic: 'ai',
    tag: 'Enterprise RAG',
    title: 'Beyond Embeddings: Graph-Augmented RAG for Enterprise Context',
    readTime: '8 min read',
    date: 'Sep 2026',
    summary: 'Why vector search alone fails complex corporate hierarchies, and how hybrid graph retrievers solve it.',
  },
  {
    id: 'designing-for-automation',
    topic: 'design',
    tag: 'Design Systems',
    title: 'Designing Human-in-the-Loop Workflow Interfaces',
    readTime: '5 min read',
    date: 'Oct 2026',
    summary: 'How Zapier-inspired micro-interactions give enterprise operators confidence in automated systems.',
  },
  {
    id: 'mvp-velocity-playbook',
    topic: 'product',
    tag: 'Product Strategy',
    title: 'The 6-Week Enterprise MVP Playbook',
    readTime: '7 min read',
    date: 'Aug 2026',
    summary: 'Eliminate committee stalls: how cross-functional strike teams launch testable software fast.',
  },
  {
    id: 'event-driven-scale',
    topic: 'technology',
    tag: 'Cloud Infrastructure',
    title: 'Zero-Latency Event Buses for Cloud Platforms',
    readTime: '9 min read',
    date: 'Sep 2026',
    summary: 'Architecting bi-directional webhook engines that guarantee delivery with idempotency keys.',
  },
];
