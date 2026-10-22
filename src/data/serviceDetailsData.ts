export interface ServiceDetail {
  slug: string;
  category: 'strategy' | 'design' | 'ai' | 'technology' | 'marketing' | 'implementation';
  categoryTitle: string;
  title: string;
  tagline: string;
  overview: string;
  keyCapabilities: { name: string; desc: string }[];
  technicalApproach: string[];
  deliverables: string[];
  stack: string[];
  metrics: string;
}

export const allServiceDetails: Record<string, ServiceDetail> = {
  // =================== STRATEGY ===================
  "product-strategy": {
    slug: "product-strategy",
    category: "strategy",
    categoryTitle: "Strategy",
    title: "Product Strategy",
    tagline: "North-star product roadmaps, unit-economic modeling, and product-market fit validation.",
    overview: "We turn ambiguous market opportunities into crystal-clear product roadmaps. Our senior strategists evaluate customer demand, construct unit-economic models, and define the minimal architectural surface required to win market share rapidly.",
    keyCapabilities: [
      { name: "Opportunity Assessment", desc: "Quantitative analysis of customer willingness-to-pay, total addressable market, and competitive moats." },
      { name: "North-Star Metric Architecture", desc: "Aligning product telemetry with commercial retention and customer lifetime value." },
      { name: "Feature Prioritization Matrix", desc: "Eliminating specification bloat through RICE scoring and high-leverage sequencing." },
      { name: "Go-to-Market Milestones", desc: "Phased release schedules coordinating engineering delivery with marketing distribution." }
    ],
    technicalApproach: [
      "Customer workflow analysis & jobs-to-be-done mapping",
      "Competitive reverse-engineering of incumbent architectural moats",
      "Unit economic modeling including infrastructure COGS per active user",
      "Bi-weekly executive milestone reviews and roadmap adjustments"
    ],
    deliverables: [
      "Comprehensive Product Strategy Blueprint",
      "3-Quarter Milestone Delivery Roadmap",
      "Unit Economics & Infrastructure Cost Model",
      "Executive KPI & Telemetry Dashboard Specification"
    ],
    stack: ["Notion", "Linear", "Mixpanel", "Amplitude", "PostHog", "Figma"],
    metrics: "Average 65% reduction in time-to-market by eliminating low-leverage feature scope."
  },

  "digital-transformation": {
    slug: "digital-transformation",
    category: "strategy",
    categoryTitle: "Strategy",
    title: "Digital Transformation",
    tagline: "Modernizing enterprise operating models into high-velocity digital organizations.",
    overview: "Legacy systems and fragmented processes throttle enterprise velocity. ENTWY re-architects core enterprise workflows into API-driven, cloud-native digital ecosystems with zero disruption to active revenue streams.",
    keyCapabilities: [
      { name: "Legacy System Audits", desc: "Detailed mapping of technical debt, architectural bottlenecks, and vendor dependencies." },
      { name: "Cloud Migration Strategy", desc: "Strangler Fig patterns for safely replacing legacy mainframes and on-premise servers." },
      { name: "Process Digitization", desc: "Transforming manual paper and spreadsheet workflows into reactive digital hubs." },
      { name: "Change Enablement", desc: "Embedded engineering leadership ensuring smooth internal adoption across all business units." }
    ],
    technicalApproach: [
      "Zero-downtime strangler pattern migration planning",
      "Security compliance posture audits (SOC 2, ISO, HIPAA)",
      "API abstraction layer design over legacy databases",
      "Phased rollout with continuous roll-back safety nets"
    ],
    deliverables: [
      "Enterprise Modernization Blueprint",
      "Legacy Technical Debt Elimination Plan",
      "API Modernization Runbook",
      "Security & Compliance Architecture Matrix"
    ],
    stack: ["AWS", "Google Cloud", "Kubernetes", "Kafka", "PostgreSQL", "Terraform"],
    metrics: "Over $140M in legacy operational costs eliminated across client organizations."
  },

  "ai-strategy": {
    slug: "ai-strategy",
    category: "strategy",
    categoryTitle: "Strategy",
    title: "AI Strategy",
    tagline: "Feasibility audits, proprietary data moats, and generative AI opportunity maps.",
    overview: "Avoid reckless AI hype. We help founders and enterprise executives identify where cognitive models and autonomous agents provide undeniable, defensible competitive moats—and where traditional deterministic code is superior.",
    keyCapabilities: [
      { name: "Data Moat Evaluation", desc: "Auditing internal databases, telemetry, and documents to uncover proprietary training advantages." },
      { name: "Model ROI & Feasibility Audits", desc: "Comparing open-source models, hosted APIs, and fine-tuning costs per token." },
      { name: "Risk & Guardrail Frameworks", desc: "Establishing strict hallucination mitigation, PII redacting, and compliance rules." },
      { name: "AI Product Architecture", desc: "Designing multi-agent workflows, vector databases, and retrieval strategies." }
    ],
    technicalApproach: [
      "Token economics modeling & latency budgeting",
      "Evaluation framework design for benchmark evaluation",
      "Model governance and data sovereignty strategy",
      "Synthetic dataset generation for continuous validation"
    ],
    deliverables: [
      "Enterprise AI Roadmap & Moat Map",
      "Token Economics & Cost-Per-Query Model",
      "Evaluation Benchmark Dataset Specification",
      "Safety, Privacy & Governance Policy Guidelines"
    ],
    stack: ["LangGraph", "OpenAI", "Anthropic Claude", "Ollama", "Weights & Biases", "Qdrant"],
    metrics: "Average 4.8x ROI on enterprise AI initiatives by focusing on high-frequency workflows."
  },

  "product-consulting": {
    slug: "product-consulting",
    category: "strategy",
    categoryTitle: "Strategy",
    title: "Product Consulting",
    tagline: "Fractional CPO/CTO advisory and embedded product leadership.",
    overview: "Direct access to senior operators who have built, scaled, and exited venture-backed platforms. We embed within your leadership team to accelerate decision cycles, resolve architectural deadlocks, and mentor internal talent.",
    keyCapabilities: [
      { name: "Fractional Executive Leadership", desc: "Interim CPO/CTO guidance through critical funding rounds and platform launches." },
      { name: "Engineering Team Assessment", desc: "Evaluating team throughput, sprint velocity, and code quality benchmarks." },
      { name: "Vendor & Tech Due Diligence", desc: "Evaluating third-party tools, cloud contracts, and M&A technical assets." },
      { name: "Technical Pitch Preparation", desc: "Preparing institutional investors and enterprise customers for deep-dive technical audits." }
    ],
    technicalApproach: [
      "Weekly executive strategy sessions with lead partners",
      "Direct code reviews and architectural RFC critiques",
      "Hiring rubrics and technical interview participation",
      "Sprint retrospectives and continuous process tuning"
    ],
    deliverables: [
      "Fractional Leadership Advisory Matrix",
      "Engineering Velocity & Quality Scorecard",
      "Technical Due Diligence Whitepaper",
      "Hiring & Organizational Growth Blueprint"
    ],
    stack: ["Linear", "GitHub", "Notion", "Slack", "Metabase"],
    metrics: "Assisted client portfolios in raising over $80M in venture funding rounds."
  },

  // =================== DESIGN ===================
  "ux-research": {
    slug: "ux-research",
    category: "design",
    categoryTitle: "Design",
    title: "UX Research",
    tagline: "Empirical usability benchmarking, user interviews, and contextual inquiry.",
    overview: "Great software starts with deep user empathy. We conduct rigorous user research sessions with enterprise users and operators to identify the exact friction points, cognitive fatigue drivers, and unstated workflow requirements.",
    keyCapabilities: [
      { name: "Contextual Inquiries", desc: "Observing real operators in their natural working environments to map true user journeys." },
      { name: "Usability Testing", desc: "Rigorous recorded test sessions tracking task completion rates, hesitation, and errors." },
      { name: "Persona & Mental Model Maps", desc: "Synthesizing disparate user roles into actionable mental models for engineering." },
      { name: "Quantitative Telemetry Audits", desc: "Analyzing funnel drop-offs and heatmaps to validate qualitative insights." }
    ],
    technicalApproach: [
      "Double-diamond research methodologies",
      "Session recording analysis & behavioral heatmaps",
      "Standard System Usability Scale (SUS) benchmarking",
      "Card sorting and tree testing for navigation architecture"
    ],
    deliverables: [
      "User Research Insights & Findings Report",
      "Comprehensive User Journey & Wireflow Maps",
      "SUS Benchmark Scorecard & Gap Analysis",
      "Behavioral Personas & Mental Model Framework"
    ],
    stack: ["UserTesting", "Maze", "Lookback", "Figma", "Dovetail", "Hotjar"],
    metrics: "Average 42% reduction in user onboarding churn through empirical UX restructuring."
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    category: "design",
    categoryTitle: "Design",
    title: "UI/UX Design",
    tagline: "Crafting intuitive, pixel-precise web and native application surfaces.",
    overview: "Guided by Airtable’s quiet editorial philosophy: we believe whitespace and typographic clarity trump gratuitous visual decoration. We craft calm, high-density interfaces where complex enterprise operations feel effortless.",
    keyCapabilities: [
      { name: "Information Architecture", desc: "Structuring deep multi-tiered navigation trees into intuitive, easily discoverable paths." },
      { name: "Interface Craft", desc: "Designing pixel-accurate layouts with curated color palettes and refined typographic hierarchy." },
      { name: "Micro-Interactions", desc: "Subtle feedback states and animated transitions that communicate system state changes." },
      { name: "Responsive Adaptation", desc: "Seamless multi-device workflows scaling from compact mobile screens to ultra-wide displays." }
    ],
    technicalApproach: [
      "4px grid alignment across every screen coordinate",
      "Strict typographic contrast rules (WCAG 2.2 AAA compliant)",
      "High-density data tables with sorting, filtering, and bulk actions",
      "Dark and light mode surface parity"
    ],
    deliverables: [
      "Complete High-Fidelity UI Screens in Figma",
      "Interactive Clickable Application Prototypes",
      "Micro-interaction & Animation Guidelines",
      "Responsive Layout Breakpoint Specifications"
    ],
    stack: ["Figma", "FigJam", "Framer", "Illustrator", "Lottie"],
    metrics: "Designs implemented with 100% design-to-code parity and zero visual debt."
  },

  "product-design": {
    slug: "product-design",
    category: "design",
    categoryTitle: "Design",
    title: "Product Design",
    tagline: "End-to-end design from first principles wireframes to production handoff.",
    overview: "Product design at ENTWY is not just wireframing—it is systems thinking. We understand technical database models, API request lifecycles, and edge states, designing software that engineers love to build and users love to master.",
    keyCapabilities: [
      { name: "Systems-Level Architecture", desc: "Designing states for loading, latency, offline access, and error fallbacks." },
      { name: "Complex Workflow Unification", desc: "Condensing multi-step enterprise workflows into clean single-pane dashboards." },
      { name: "Data Visualization", desc: "Interactive charts, graphs, and live telemetry feeds designed for instant executive comprehension." },
      { name: "Feature Scoping & Tradeoffs", desc: "Collaborating with engineers to balance aesthetic ideals with implementation velocity." }
    ],
    technicalApproach: [
      "State-machine interface modeling (handling empty, loading, error, success)",
      "Continuous pair-designing with lead frontend architects",
      "Accessibility first: keyboard navigation and screen reader tags",
      "Direct code inspections to maintain design token integrity"
    ],
    deliverables: [
      "Full Application Product Design Suite",
      "Edge Case & Error State Design Specifications",
      "Interactive Chart & Data Visualization Library",
      "Developer Handoff Documentation & Assets"
    ],
    stack: ["Figma", "Storybook", "TypeScript", "Lucide Icons", "Tailwind/CSS"],
    metrics: "Shipped products with an average 4.9/5 user satisfaction across 1M+ active users."
  },

  "design-systems": {
    slug: "design-systems",
    category: "design",
    categoryTitle: "Design",
    title: "Design Systems",
    tagline: "Multi-brand token architectures, accessible component libraries, and documentation.",
    overview: "Inspired by the Airtable design system, we build durable token-first design systems. Variables for color, typography, spacing, and elevation sync directly between Figma and production CSS variables, ending the perpetual cycle of UI drift.",
    keyCapabilities: [
      { name: "Design Token Architecture", desc: "Hierarchical tokens (Global, Semantic, Component-level) in JSON/CSS." },
      { name: "Accessible Component Libraries", desc: "Battle-tested React/TypeScript components fully compliant with WCAG 2.2 AAA." },
      { name: "Living Documentation", desc: "Interactive Storybook documentation containing usage guidelines and copy rules." },
      { name: "Figma-to-Code Sync", desc: "Automated pipelines transforming Figma Variables into compiled CSS and npm packages." }
    ],
    technicalApproach: [
      "Strict CSS custom property naming standards",
      "Zero-dependency vanilla CSS utility foundations",
      "Automated visual regression testing via Playwright",
      "Versioned npm packages distributed to engineering teams"
    ],
    deliverables: [
      "Production-Ready Design Token Repository",
      "Interactive Storybook / Component Documentation",
      "Figma UI Kit with Linked Variables",
      "Accessibility & Brand Consistency Guidelines"
    ],
    stack: ["CSS Variables", "Storybook", "Figma Variables", "React", "TypeScript", "npm"],
    metrics: "Accelerated frontend feature delivery speed by 3.2x across client teams."
  },

  "prototyping": {
    slug: "prototyping",
    category: "design",
    categoryTitle: "Design",
    title: "Prototyping",
    tagline: "High-fidelity code-accurate motion prototypes for rapid validation.",
    overview: "Static mockups cannot capture real-world latency, streaming LLM outputs, or nuanced micro-interactions. We code functional prototypes connected to live mock endpoints, allowing stakeholders to experience the genuine product before investing in full-scale builds.",
    keyCapabilities: [
      { name: "Interactive Code Prototypes", desc: "Functional React/TypeScript prototypes running in real browsers." },
      { name: "LLM Streaming Demonstrations", desc: "Simulating live token streams, tool calls, and model reasoning steps." },
      { name: "Stakeholder Validation Tools", desc: "High-fidelity sandboxes designed for C-suite approvals and customer demos." },
      { name: "Micro-Interaction Polishing", desc: "Spring physics animations and tactile UI feedback crafted with 60fps precision." }
    ],
    technicalApproach: [
      "Vite + React fast-reload prototype environments",
      "Mock Service Worker (MSW) for realistic API latency simulation",
      "Physics-based spring animations with Framer Motion",
      "Direct conversion of prototype code into production components"
    ],
    deliverables: [
      "Clickable Browser Prototype URL",
      "Mock API Endpoint Harness",
      "User Testing Video Transcripts & Metrics",
      "Component Code Export for Production Engineers"
    ],
    stack: ["React", "TypeScript", "Vite", "Framer Motion", "MSW", "Vercel"],
    metrics: "Saved clients hundreds of thousands of dollars by validating core assumptions in 10 days."
  },

  // =================== AI ===================
  "ai-solutions": {
    slug: "ai-solutions",
    category: "ai",
    categoryTitle: "AI Systems",
    title: "AI Solutions",
    tagline: "Enterprise cognitive engines tailored to your proprietary datasets.",
    overview: "We architect enterprise-grade AI solutions that solve mission-critical operational challenges. From automated document reasoning to predictive classification engines, we build durable systems designed for zero hallucination tolerance.",
    keyCapabilities: [
      { name: "Document Intelligence", desc: "Extracting structured data from messy PDFs, contracts, and scans with 99.4% precision." },
      { name: "Predictive Analytics", desc: "Combining traditional gradient boosting with foundation models for trend forecasting." },
      { name: "Semantic Search & Discovery", desc: "Natural language discovery across millions of internal enterprise documents." },
      { name: "Domain-Specific Classifiers", desc: "Fine-tuned models detecting fraud, regulatory non-compliance, and operational risks." }
    ],
    technicalApproach: [
      "Hybrid retrieval: sparse BM25 + dense vector embeddings (Cohere, OpenAI)",
      "Cross-encoder re-ranking for superior retrieval precision",
      "Confidence scoring thresholds with automated human fallback routing",
      "Comprehensive telemetry tracking token costs and latency distribution"
    ],
    deliverables: [
      "Production Cognitive API Service",
      "Vector Ingestion & Indexing Pipeline",
      "Custom Evaluation Benchmark Suite",
      "Operational Observability & Alerting Dashboard"
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Qdrant", "Docker", "AWS"],
    metrics: "Processed over 40M enterprise documents with 99.4% verified data extraction accuracy."
  },

  "ai-agents": {
    slug: "ai-agents",
    category: "ai",
    categoryTitle: "AI Systems",
    title: "AI Agents",
    tagline: "Autonomous reasoning agents with tool usage, memory, and multi-agent coordination.",
    overview: "Moving far beyond single-prompt chatbots. We engineer stateful multi-agent graphs where specialized agents autonomously plan, execute database queries, inspect logs, invoke third-party APIs, and coordinate with peer agents to achieve complex multi-step objectives.",
    keyCapabilities: [
      { name: "Multi-Agent Graph Orchestration", desc: "LangGraph-powered stateful directed acyclic graphs coordinating specialized worker nodes." },
      { name: "Autonomous Tool Execution", desc: "Safe, permission-bounded execution of SQL queries, REST calls, and filesystem edits." },
      { name: "Hierarchical Long-Term Memory", desc: "Short-term conversational state combined with episodic vector memory stores." },
      { name: "Deterministic Safety Guardrails", desc: "Strict schema validation rejecting unauthorized actions and loop deadlocks." }
    ],
    technicalApproach: [
      "State-machine architecture guaranteeing agent convergence",
      "Automated cycle-detection preventing runaway LLM execution loops",
      "Human-in-the-loop interruption checkpoints for sensitive actions",
      "Zero-retention data policies ensuring customer privacy"
    ],
    deliverables: [
      "Multi-Agent Graph Source Code (LangGraph / Python)",
      "Tool-Calling Harness & Sandbox Environment",
      "Episodic Memory Database Architecture",
      "Automated Agent Regression Test Suite"
    ],
    stack: ["LangGraph", "Python", "FastAPI", "Redis", "PostgreSQL", "Claude 3.5 Sonnet", "Docker"],
    metrics: "Over 40 autonomous agent pipelines in active 24/7 enterprise production."
  },

  "ai-automation": {
    slug: "ai-automation",
    category: "ai",
    categoryTitle: "AI Systems",
    title: "AI Automation",
    tagline: "Replacing brittle RPA pipelines with self-healing, adaptive LLM agents.",
    overview: "Traditional RPA scripts break whenever a button moves or an API schema changes. ENTWY deploys adaptive AI automation pipelines that understand visual and semantic context, healing themselves automatically when external software updates.",
    keyCapabilities: [
      { name: "Self-Healing Web Scraping", desc: "Autonomous data extractors that adapt to HTML DOM mutations and CAPTCHAs." },
      { name: "Automated Reconciliation", desc: "Cross-matching banking ledgers, shipping manifests, and ERP entries in real time." },
      { name: "Intelligent Email & Ticket Triaging", desc: "Parsing incoming enterprise requests and executing end-to-end resolutions." },
      { name: "Back-Office Pipeline Modernization", desc: "Eliminating thousands of manual human copy-paste hours per week." }
    ],
    technicalApproach: [
      "Computer-vision and headless browser automation via Playwright",
      "Temporal.io durable execution workflows surviving server restarts",
      "Audit trail logging with immutable tamper-evident cryptographic hashes",
      "Dynamic cost budgeting preventing runaway cloud spend"
    ],
    deliverables: [
      "Production Automation Worker Nodes",
      "Temporal Workflow Orchestration Code",
      "Exception Handling & Alerting Integration",
      "Real-Time Operational Savings Dashboard"
    ],
    stack: ["Temporal", "Playwright", "Python", "Kafka", "PostgreSQL", "Grafana"],
    metrics: "Saved an aggregate 340,000 operational payroll hours across client organizations."
  },

  "ai-integration": {
    slug: "ai-integration",
    category: "ai",
    categoryTitle: "AI Systems",
    title: "AI Integration",
    tagline: "Seamless embedding of OpenAI, Anthropic, Gemini, and open-source models.",
    overview: "Integrating AI into an existing web or mobile product should never destabilize your core architecture. We build resilient middleware that seamlessly connects LLMs to your current databases, preserving latency, uptime, and user privacy.",
    keyCapabilities: [
      { name: "Multi-Provider Model Routing", desc: "Dynamic cost and latency routing between OpenAI, Anthropic, Gemini, and local models." },
      { name: "Streaming Edge Middleware", desc: "Sub-100ms Server-Sent Events (SSE) streaming direct to client web frontends." },
      { name: "PII & Secret Sanitization", desc: "In-flight redaction of Social Security Numbers, emails, and credentials before model calls." },
      { name: "Model Fallback Cascades", desc: "Automated failover to secondary providers when primary LLM APIs experience downtime." }
    ],
    technicalApproach: [
      "Cloudflare Workers & Vercel Edge Functions for low-latency streaming",
      "Redis caching for semantically identical query reuse (saving up to 40% in API costs)",
      "Rate-limiting and tenant-level quota enforcement",
      "Zero-downtime hot-swapping of model endpoints"
    ],
    deliverables: [
      "Production AI Middleware API Gateway",
      "Client-Side Streaming React Hook Library",
      "PII Sanitization & Compliance Harness",
      "Semantic Caching & Token Cost Optimizer"
    ],
    stack: ["Cloudflare Workers", "TypeScript", "Redis", "OpenAI API", "Anthropic API", "Next.js"],
    metrics: "Reduced LLM API infrastructure bills by 42% through semantic caching."
  },

  "generative-ai-custom-development": {
    slug: "generative-ai-custom-development",
    category: "ai",
    categoryTitle: "AI Systems",
    title: "Generative AI / Custom AI Development",
    tagline: "Fine-tuning specialized foundation models, RAG architectures, and vector databases.",
    overview: "When generic public models fail on proprietary terminology and niche formats, custom development is essential. We curate proprietary training datasets, execute LoRA / full parameter fine-tuning on open-source models (Llama 3, Mistral), and host private inference clusters.",
    keyCapabilities: [
      { name: "Proprietary Dataset Synthesis", desc: "Cleaning, deduplicating, and formatting domain records into high-signal training pairs." },
      { name: "LoRA & QLoRA Fine-Tuning", desc: "Cost-efficient parameter adaptation producing foundation models that outperform GPT-4 on narrow tasks." },
      { name: "Private Model Self-Hosting", desc: "Deploying custom weights on dedicated vLLM / Ollama clusters behind your corporate firewall." },
      { name: "Enterprise Synthetic Data Engines", desc: "Generating millions of edge-case scenarios to evaluate safety and reliability." }
    ],
    technicalApproach: [
      "vLLM engine optimization for high-throughput batch inference",
      "FlashAttention-2 integration reducing GPU memory overhead",
      "Quantization (AWQ / GPTQ / GGUF) for affordable cloud scaling",
      "Automated evaluation harnesses measuring perplexity and factual precision"
    ],
    deliverables: [
      "Fine-Tuned Model Weights Repository",
      "vLLM Production Inference Server Container",
      "Automated Dataset Curation Pipeline",
      "Comparative Benchmark & Accuracy Report"
    ],
    stack: ["PyTorch", "Hugging Face", "vLLM", "Llama 3", "AWS SageMaker", "RunPod"],
    metrics: "Achieved 96.8% accuracy on domain tasks at 1/10th the cost of proprietary hosted models."
  },

  // =================== TECHNOLOGY ===================
  "web-development": {
    slug: "web-development",
    category: "technology",
    categoryTitle: "Technology",
    title: "Web Development",
    tagline: "High-performance React/Next.js and modern TypeScript frontends.",
    overview: "We engineer lightning-fast, reactive web applications. Combining server-side rendering, code-first design tokens, and modular TypeScript architectures, we build web surfaces that achieve 100/100 Lighthouse performance and flawless reliability.",
    keyCapabilities: [
      { name: "Server-Side Rendering & Edge Delivery", desc: "Sub-second initial page loads via Next.js App Router and edge distribution." },
      { name: "Strict TypeScript Typing", desc: "End-to-end type safety spanning backend database schemas to frontend React components." },
      { name: "State Management Architecture", desc: "Clean, predictable client state using lightweight stores (Zustand, React Query)." },
      { name: "Offline-First Capabilities", desc: "Local indexedDB synchronization keeping web apps responsive during network drops." }
    ],
    technicalApproach: [
      "Zero cumulative layout shift (CLS: 0.0) performance guarantees",
      "Tree-shaking and dynamic code-splitting minimizing bundle sizes",
      "Comprehensive Playwright end-to-end integration test suites",
      "Strict WCAG 2.2 AAA accessibility compliance"
    ],
    deliverables: [
      "Production React 18 / Next.js Source Code",
      "Modular Component Token Repository",
      "Automated CI/CD Pipeline (GitHub Actions)",
      "Lighthouse 100 Performance Audit Report"
    ],
    stack: ["React 18", "Next.js", "TypeScript", "Tailwind/CSS", "Zustand", "Playwright", "Vercel"],
    metrics: "99+ Lighthouse performance scores and sub-200ms Time-to-First-Byte globally."
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    category: "technology",
    categoryTitle: "Technology",
    title: "Mobile App Development",
    tagline: "Cross-platform iOS and Android apps with 60fps native feel.",
    overview: "We build native-caliber mobile applications using modern React Native and Flutter. We obsess over touch responsiveness, buttery smooth gesture interactions, offline data persistence, and rapid App Store deployment.",
    keyCapabilities: [
      { name: "Cross-Platform Efficiency", desc: "Single codebase powering both iOS and Android with platform-specific native behaviors." },
      { name: "Native Bridge Integrations", desc: "Custom Swift and Kotlin modules for Bluetooth, biometric authentication, and health telemetry." },
      { name: "Offline Persistence", desc: "SQLite and WatermelonDB synchronization maintaining continuous access offline." },
      { name: "Automated App Store Pipelines", desc: "Fastlane deployment workflows pushing builds to TestFlight and Google Play automatically." }
    ],
    technicalApproach: [
      "Hermes JavaScript engine optimization for near-instant cold boot times",
      "60fps gesture animations using React Native Reanimated 3",
      "Biometric security encryption (FaceID, TouchID, Secure Enclave)",
      "Over-the-air (OTA) instant critical bug fix updates via Expo EAS"
    ],
    deliverables: [
      "React Native / Expo Production Codebase",
      "iOS & Android App Store Ready Binaries",
      "Fastlane Automated Deployment Scripts",
      "Comprehensive Mobile QA Test Matrix"
    ],
    stack: ["React Native", "Expo", "TypeScript", "Reanimated", "SQLite", "Fastlane"],
    metrics: "Average 4.9-star ratings across Apple App Store and Google Play deployments."
  },

  "saas-development": {
    slug: "saas-development",
    category: "technology",
    categoryTitle: "Technology",
    title: "SaaS Development",
    tagline: "Multi-tenant cloud architectures with granular authorization and billing.",
    overview: "Building software-as-a-service requires bulletproof multi-tenant isolation, automated recurring billing, granular RBAC permissions, and audit compliance. We engineer scalable SaaS engines that grow seamlessly from 10 to 100,000 organizations.",
    keyCapabilities: [
      { name: "Multi-Tenant Data Partitioning", desc: "Row-Level Security (RLS) and schema-isolated multi-tenancy preventing cross-tenant leaks." },
      { name: "Subscription & Usage Billing", desc: "Stripe Billing integration handling seat licenses, metered usage, and invoice tax compliance." },
      { name: "Granular Role-Based Access (RBAC)", desc: "Fine-grained permissions, SAML/SSO enterprise authentication, and SCIM directory provisioning." },
      { name: "Audit Logging & Observability", desc: "Immutable compliance trails tracking every create, read, update, and delete operation." }
    ],
    technicalApproach: [
      "PostgreSQL Row Level Security policies enforced at the database kernel",
      "Stripe webhooks with idempotency keys for reliable subscription state sync",
      "OpenFGA / Casbin authorization models for complex enterprise permission trees",
      "Blue-green production cutovers with zero database locking"
    ],
    deliverables: [
      "Production Multi-Tenant SaaS Codebase",
      "Stripe Billing & Subscription Engine",
      "Enterprise SAML/SSO Integration (Okta, Azure AD)",
      "Automated Tenant Provisioning & Teardown Architecture"
    ],
    stack: ["Next.js", "Go", "PostgreSQL", "Stripe", "Auth0 / Clerk", "Docker", "AWS"],
    metrics: "Powering platforms processing over $20M in annualized recurring software subscriptions."
  },

  "api-system-integration": {
    slug: "api-system-integration",
    category: "technology",
    categoryTitle: "Technology",
    title: "API & System Integration",
    tagline: "Resilient GraphQL, gRPC, and REST distributed middleware.",
    overview: "Isolated software islands destroy enterprise agility. We design high-throughput API gateways and event-driven middleware that connect fragmented systems, ERPs, CRMs, and payment rails into a cohesive, sub-millisecond network.",
    keyCapabilities: [
      { name: "High-Throughput API Gateways", desc: "Rate-limiting, caching, and token validation handling tens of thousands of requests per second." },
      { name: "Event-Driven Message Brokers", desc: "Kafka and RabbitMQ streaming architectures for asynchronous decoupling." },
      { name: "GraphQL Federation", desc: "Unified GraphQL schema stitching multiple distributed microservices into a single graph." },
      { name: "Legacy ERP & CRM Connectors", desc: "Robust bidirectional synchronization with Salesforce, SAP, Oracle, and NetSuite." }
    ],
    technicalApproach: [
      "gRPC binary protocol integration for ultra-fast internal microservice calls",
      "OpenTelemetry distributed tracing tracking request paths across microservices",
      "Circuit-breaker patterns (Resilience4j) preventing cascading system outages",
      "OpenAPI 3.1 schema auto-generation powering self-updating developer documentation"
    ],
    deliverables: [
      "API Gateway & Distributed Middleware Code",
      "Interactive Swagger / OpenAPI 3.1 Documentation",
      "Kafka Event Topic Architecture & Schema Registry",
      "Telemetry & Tracing Infrastructure Dashboard"
    ],
    stack: ["Go (Golang)", "FastAPI", "gRPC", "Kafka", "Apollo Federation", "Kong", "Kubernetes"],
    metrics: "Designed API systems processing over 120M daily requests with sub-40ms p95 latencies."
  },

  "mvp-development": {
    slug: "mvp-development",
    category: "technology",
    categoryTitle: "Technology",
    title: "MVP Development",
    tagline: "Zero-to-one engineering in 4 to 8 weeks without compromising code quality.",
    overview: "Most agencies build MVPs with spaghetti code that must be completely thrown away after launch. ENTWY builds production-grade MVPs on clean foundations: strictly-typed TypeScript, modular microservices, and battle-tested databases ready to scale immediately.",
    keyCapabilities: [
      { name: "Rapid Architectural Scoping", desc: "Defining the core 20% of features that deliver 80% of customer value." },
      { name: "Concurrent Design & Engineering", desc: "Engineers code frontend tokens while backend schemas are finalized, cutting delivery time in half." },
      { name: "Day-One Production Infrastructure", desc: "Deploying to production cloud environments with automated CI/CD from week one." },
      { name: "Investor & Customer Demo Readiness", desc: "Polished, zero-bug initial release optimized for user retention and investor conviction." }
    ],
    technicalApproach: [
      "Pragmatic tech stack: Next.js + PostgreSQL + Tailwind for maximum speed",
      "Pre-built authentication, billing, and email delivery harnesses",
      "Daily staging builds shared with founders for real-time validation",
      "Strict milestone gates with clear acceptance criteria"
    ],
    deliverables: [
      "Complete Production-Grade Application Codebase",
      "Live Cloud Deployment with Custom Domain & SSL",
      "Stripe Payments & User Onboarding Integration",
      "Full Codebase Ownership & Architecture Runbook"
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase / AWS", "Stripe", "Vercel"],
    metrics: "Average 6 weeks from initial kickoff to live production deployment with real paying users."
  },

  "devops": {
    slug: "devops",
    category: "marketing",
    categoryTitle: "Marketing & Roles",
    title: "DevOps & Cloud Engineering",
    tagline: "GitOps, Kubernetes, blue-green deployments, and IaC pipelines.",
    overview: "Engineering speed is limited by deployment friction. We implement modern GitOps pipelines, Terraform infrastructure-as-code, and ephemeral preview environments that enable engineering teams to deploy 20 times per day with absolute confidence.",
    keyCapabilities: [
      { name: "Infrastructure as Code (IaC)", desc: "100% reproducible cloud infrastructure written in Terraform and AWS CDK." },
      { name: "Kubernetes & Container Orchestration", desc: "Auto-scaling EKS/GKE clusters optimized for zero idle resource waste." },
      { name: "Zero-Downtime Blue-Green Deploys", desc: "Canary releases and traffic mirroring preventing outages during software updates." },
      { name: "Comprehensive Observability", desc: "Prometheus, Grafana, and Datadog monitoring with proactive PagerDuty alerting." }
    ],
    technicalApproach: [
      "Ephemeral pull-request preview environments created and destroyed automatically",
      "Security scanning with Snyk and Trivy built into CI/CD git hooks",
      "Multi-region automated database failover with sub-10 second recovery (RTO)",
      "Cloud cost optimization eliminating unused staging compute"
    ],
    deliverables: [
      "Terraform / IaC Infrastructure Repository",
      "GitHub Actions CI/CD Deployment Workflows",
      "Kubernetes Helm Charts & Cluster Configurations",
      "Grafana Observability & Uptime Dashboard"
    ],
    stack: ["Terraform", "Kubernetes", "Docker", "AWS", "GitHub Actions", "Datadog", "Prometheus"],
    metrics: "Decreased mean-time-to-recovery (MTTR) by 80% and reduced cloud hosting costs by 35%."
  },

  "revops": {
    slug: "revops",
    category: "marketing",
    categoryTitle: "Marketing & Roles",
    title: "RevOps & Workflow Automation",
    tagline: "Unified revenue data, automated deal desk routing, and cross-platform CRM synchronization.",
    overview: "Fragmented customer data creates revenue leaks. ENTWY builds autonomous revenue engines synchronizing HubSpot, Salesforce, Stripe, and customer usage telemetry into unified pipeline velocity and attribution dashboards.",
    keyCapabilities: [
      { name: "Full-Funnel CRM Synchronization", desc: "Two-way sub-second sync between billing, product telemetry, and sales records." },
      { name: "Automated Deal Desk Routing", desc: "Routing enterprise deals dynamically based on deal size, region, and rep capacity." },
      { name: "Usage-Based Billing Metering", desc: "Capturing customer API usage events and feeding real-time metered invoices into Stripe." },
      { name: "Revenue Intelligence & Churn Warning", desc: "Autonomous ML alerts detecting drops in customer product activity weeks before renewal." }
    ],
    technicalApproach: [
      "Event-driven webhook brokers streaming events from Segment/PostHog into Snowflake",
      "Census / Hightouch reverse-ETL pipelines hydrating Salesforce and HubSpot records",
      "Slack bots notifying account executives with rich customer engagement context",
      "Automated quote-to-cash approval chains with DocuSign & Stripe APIs"
    ],
    deliverables: [
      "Unified RevOps Architecture & Data Flow Map",
      "Automated CRM & Billing Event Pipeline",
      "Customer Health Score & Churn Alert System",
      "Executive Revenue Telemetry Dashboard"
    ],
    stack: ["HubSpot", "Salesforce", "Stripe", "PostHog", "Census", "Zapier", "PostgreSQL"],
    metrics: "Average 42% acceleration in deal cycle speed and 99.8% reduction in manual billing reconciliation."
  },

  "sales-leaders": {
    slug: "sales-leaders",
    category: "marketing",
    categoryTitle: "Marketing & Roles",
    title: "Solutions for Sales Leaders",
    tagline: "AI-assisted pipeline analytics, intelligent deal scoring, and automated sales intelligence.",
    overview: "We empower enterprise sales leaders with data-driven clarity. We engineer custom sales intelligence portals that analyze buyer interactions, score pipeline velocity, and surface high-probability accounts automatically.",
    keyCapabilities: [
      { name: "Predictive Lead & Deal Scoring", desc: "Machine learning models evaluating CRM touchpoints to predict close rates." },
      { name: "Pipeline Velocity Dashboards", desc: "Real-time metrics tracking deal stage latency, rep quota attainment, and CAC payback." },
      { name: "Automated Executive Briefings", desc: "AI models summarizing daily customer interactions into concise action points." },
      { name: "Revenue Forecaster", desc: "Probabilistic revenue forecasting models replacing manual spreadsheet guessing." }
    ],
    technicalApproach: [
      "Salesforce & HubSpot bidirectional API data ingestion",
      "Snowflake / BigQuery data warehouse pipelines with daily dbt transformations",
      "Natural language customer call transcript parsing via speech LLMs",
      "Role-based executive dashboard permissions"
    ],
    deliverables: [
      "Custom Sales Intelligence Dashboard",
      "Automated Deal Scoring Algorithm & Ingestion Engine",
      "Executive Revenue Forecasting Portal",
      "CRM Data Cleansing & Deduplication Scripts"
    ],
    stack: ["Next.js", "Python", "Salesforce API", "HubSpot", "PostgreSQL", "dbt", "Snowflake"],
    metrics: "Improved enterprise sales win rates by 28% through algorithmic lead qualification."
  },

  "sales-reps": {
    slug: "sales-reps",
    category: "marketing",
    categoryTitle: "Marketing & Roles",
    title: "Solutions for Sales Reps",
    tagline: "Automated prospecting, dynamic proposal generation, and real-time CRM sync.",
    overview: "Sales representatives spend up to 60% of their workday doing administrative data entry. We deploy autonomous copilots that handle account research, generate hyper-personalized outreach, and sync CRM notes instantly after every call.",
    keyCapabilities: [
      { name: "Autonomous Account Dossiers", desc: "Instant AI dossiers compiling news, recent hires, and tech stacks for target prospects." },
      { name: "Dynamic Proposal Generation", desc: "Generating tailored PDF proposals and pricing quotes in seconds from CRM data." },
      { name: "Zero-Click CRM Meeting Logging", desc: "Voice-to-structured note processing updating deal stages automatically after customer calls." },
      { name: "Personalized Outreach Copilot", desc: "Generating contextual email drafts tailored to prospect industry and pain points." }
    ],
    technicalApproach: [
      "Chrome extension and web app interfaces embedded in rep daily workflows",
      "Sub-2 second LLM retrieval over internal case studies and pricing tables",
      "DocuSign and PandaDoc API integrations for instant contract generation",
      "Privacy-compliant customer conversation recording ingestion"
    ],
    deliverables: [
      "Sales Rep Copilot Web Extension / Portal",
      "Automated Proposal Generator Template Suite",
      "Post-Call Meeting Summary & CRM Sync Engine",
      "Personalized Outreach Prompting Matrix"
    ],
    stack: ["React", "TypeScript", "FastAPI", "OpenAI", "Salesforce", "HubSpot", "Tailwind"],
    metrics: "Gave sales reps 14+ hours of active selling time back each week by automating admin tasks."
  },

  "marketers": {
    slug: "marketers",
    category: "marketing",
    categoryTitle: "Marketing & Roles",
    title: "Solutions for Marketers",
    tagline: "Personalized content engines, multi-touch attribution modeling, and conversion funnels.",
    overview: "Modern marketing requires technical rigor. We engineer high-converting digital web experiences, algorithmic multi-touch attribution models, and dynamic content personalization engines that turn anonymous visitors into qualified pipeline.",
    keyCapabilities: [
      { name: "High-Converting Web Experiences", desc: "Airtable-grade marketing pages optimized for storytelling, speed, and conversion." },
      { name: "Multi-Touch Attribution", desc: "Custom server-side event tracking attributing pipeline to specific ad, content, and referral campaigns." },
      { name: "Dynamic Content Personalization", desc: "Tailoring hero copy, case studies, and CTAs based on visitor industry and company size (Clearbit / 6sense)." },
      { name: "Automated SEO Landing Pages", desc: "Programmatic SEO engines generating thousands of indexable, high-quality landing pages." }
    ],
    technicalApproach: [
      "Server-side event streaming to Segment and Customer.io",
      "Edge-based geolocation and firmographic personalization via Vercel Edge Middleware",
      "Sub-second Lighthouse scores maximizing organic Google search rankings",
      "A/B testing experimentation frameworks without client-side page flicker"
    ],
    deliverables: [
      "High-Performance Marketing Web Platform",
      "Programmatic SEO Content Generation Engine",
      "Multi-Touch Attribution Analytics Pipeline",
      "Firmographic Personalization Integration"
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "Segment", "PostHog", "Clearbit", "Customer.io"],
    metrics: "Average 48% increase in organic search traffic and 34% higher demo request conversion."
  },

  "developers": {
    slug: "developers",
    category: "marketing",
    categoryTitle: "Marketing & Roles",
    title: "Solutions for Developers",
    tagline: "Developer portal tooling, interactive API documentation, and automated SDK generators.",
    overview: "Developers are the harshest critics. If your API documentation is stale or SDKs are buggy, adoption collapses. We build world-class developer platforms featuring live interactive API sandboxes, auto-generated TypeScript/Python SDKs, and pristine documentation.",
    keyCapabilities: [
      { name: "Interactive Developer Portals", desc: "Stripe-grade API documentation where developers can execute live requests directly in the browser." },
      { name: "Automated Multi-Language SDKs", desc: "Auto-generating and publishing TypeScript, Python, and Go client libraries from OpenAPI specifications." },
      { name: "Webhook Delivery & Debuggers", desc: "Reliable webhook delivery engines with customer-facing retry and payload inspection consoles." },
      { name: "CLI Tools & Starter Kits", desc: "Command-line tools (agy/cli style) and quickstart templates getting developers to 'Hello World' in under 3 minutes." }
    ],
    technicalApproach: [
      "OpenAPI 3.1 schema validation and automated Speakeasy/Fern SDK code-gen",
      "Svix-powered webhook infrastructure with automated HMAC signature validation",
      "Syntax-highlighted code blocks with one-click copy and environment variable injection",
      "Zero-latency search powered by Algolia DocSearch / Pagefind"
    ],
    deliverables: [
      "Production Interactive Developer Portal Codebase",
      "Automated SDK Generation & npm/PyPI Publishing Pipeline",
      "Customer Webhook Management Console",
      "Official Developer Quickstart CLI Tool"
    ],
    stack: ["Next.js", "TypeScript", "OpenAPI 3.1", "Fern", "Svix", "Algolia", "Tailwind"],
    metrics: "Reduced developer time-to-first-API-call from 45 minutes down to 2.5 minutes."
  },

  // =================== IMPLEMENTATION ===================
  "api-development": {
    slug: "api-development",
    category: "implementation",
    categoryTitle: "Implementation",
    title: "API Development & Integration",
    tagline: "Build powerful API solutions that connect disparate digital systems and enterprise tools.",
    overview: "We architect and deploy custom RESTful, GraphQL, gRPC, and event-driven API middleware. By bridging legacy backends, modern SaaS platforms, payment gateways, and databases, we eliminate manual data reentry and unlock real-time enterprise connectivity.",
    keyCapabilities: [
      { name: "Custom API & Microservices", desc: "High-concurrency REST, GraphQL, and gRPC endpoints engineered for sub-40ms p95 latency." },
      { name: "Enterprise System Bridges", desc: "Bidirectional synchronization between Salesforce, SAP NetWeaver, Oracle, and internal core databases." },
      { name: "Security & Zero-Trust Gateways", desc: "OAuth 2.1, mutual TLS (mTLS), token rate-limiting, and OWASP API Top 10 hardened defenses." },
      { name: "Event-Driven Message Streaming", desc: "Kafka, RabbitMQ, and Redis Streams providing persistent event topics with exactly-once delivery." }
    ],
    technicalApproach: [
      "OpenAPI 3.1 contract-first design with automated schema validation",
      "Circuit breaker patterns and connection pooling for fault tolerance",
      "Comprehensive load validation using k6 and automated regression suites",
      "Distributed OpenTelemetry tracing and Prometheus/Grafana monitoring"
    ],
    deliverables: [
      "Production API Middleware & Gateway Codebase",
      "Interactive OpenAPI 3.1 Swagger Portal & Postman Collections",
      "Automated CI/CD Integration Testing Harness",
      "24/7 Distributed Tracing & Telemetry Dashboard"
    ],
    stack: ["Go (Golang)", "TypeScript", "FastAPI", "Kong", "Apache Kafka", "PostgreSQL", "Redis", "Docker"],
    metrics: "Over 250 API projects delivered with 99.99% uptime and sub-40ms average response latency."
  },

  "api-integration": {
    slug: "api-integration",
    category: "implementation",
    categoryTitle: "Implementation",
    title: "API Integration Services",
    tagline: "Resilient GraphQL, gRPC, REST and webhook integrations connecting fragmented enterprise systems.",
    overview: "Seamlessly integrate third-party applications, internal platforms, payment processors, and cloud databases into unified operational pipelines.",
    keyCapabilities: [
      { name: "Third-Party SaaS Integrations", desc: "Deep integrations with Stripe, Salesforce, HubSpot, Jira, Slack, and Workday." },
      { name: "Data Synchronization Pipelines", desc: "Automated ETL and change-data-capture synchronization eliminating data silos." },
      { name: "Legacy System Wrapping", desc: "Strangler Fig patterns wrapping on-premise databases in clean, modern API facades." },
      { name: "Webhook Brokers", desc: "Reliable webhook delivery and ingestion engines with cryptographically signed verification." }
    ],
    technicalApproach: [
      "Idempotent event processing with distributed Redis locks",
      "Rate-limit management with exponential backoff retry algorithms",
      "End-to-end payload encryption using AES-256 and TLS 1.3",
      "Automated regression contract testing"
    ],
    deliverables: [
      "Enterprise Integration Pipeline Code",
      "Connector Documentation & Runbooks",
      "Automated Test Harnesses",
      "SLA & Monitoring Configurations"
    ],
    stack: ["TypeScript", "Node.js", "Python", "Kong", "RabbitMQ", "PostgreSQL", "Redis"],
    metrics: "Eliminated over 1,200 manual data entry hours monthly across connected enterprise stacks."
  },

  "mcp-development-services": {
    slug: "mcp-development-services",
    category: "implementation",
    categoryTitle: "Implementation",
    title: "MCP (Model Context Protocol) Development",
    tagline: "Scale enterprise AI with standardized Model Context Protocol servers.",
    overview: "We develop secure, production-grade Model Context Protocol (MCP) servers that bridge LLMs and autonomous agents with internal databases, private APIs, SaaS platforms, and enterprise file systems via standardized JSON-RPC interfaces.",
    keyCapabilities: [
      { name: "Custom MCP Server Development", desc: "High-throughput servers in TypeScript, Python, or Go implementing Anthropic's open protocol." },
      { name: "Database & Schema Bridges", desc: "Schema-aware read/write connectors for PostgreSQL, MySQL, MongoDB, Snowflake, and BigQuery." },
      { name: "Agentic Tool & Workflow Orchestration", desc: "Exposing governed Tools, Resources, and Prompts to Claude Desktop, Cursor, and custom copilots." },
      { name: "Enterprise Security & RBAC Guardrails", desc: "OAuth 2.1 authentication, scoped token boundaries, and sandboxed file system allowlists." }
    ],
    technicalApproach: [
      "Strict JSON-RPC 2.0 adherence with stdio and streamable HTTP + SSE transports",
      "Zod and Pydantic v2 runtime type safety and parameter validation",
      "Zero-trust credential isolation preventing model access to raw secrets",
      "Automated protocol capability negotiation and backward-compatibility suites"
    ],
    deliverables: [
      "Production-Grade MCP Server Repository",
      "Claude Desktop & Cursor IDE Configuration Manifests",
      "OAuth 2.1 & Scoped Permission Policy Definitions",
      "Docker Containerization & Kubernetes Helm Deployment Charts"
    ],
    stack: ["TypeScript", "Node.js", "Python", "JSON-RPC 2.0", "stdio", "HTTP + SSE", "Zod", "Docker", "OAuth 2.1"],
    metrics: "Average 70% reduction in manual workflow latency and 100K+ monthly agent tool executions."
  },

  "mcp-development": {
    slug: "mcp-development",
    category: "implementation",
    categoryTitle: "Implementation",
    title: "MCP Development Services",
    tagline: "Scale enterprise AI with standardized Model Context Protocol servers.",
    overview: "We develop secure, production-grade Model Context Protocol (MCP) servers that bridge LLMs and autonomous agents with internal databases, private APIs, SaaS platforms, and enterprise file systems via standardized JSON-RPC interfaces.",
    keyCapabilities: [
      { name: "Custom MCP Server Development", desc: "High-throughput servers in TypeScript, Python, or Go implementing Anthropic's open protocol." },
      { name: "Database & Schema Bridges", desc: "Schema-aware read/write connectors for PostgreSQL, MySQL, MongoDB, Snowflake, and BigQuery." },
      { name: "Agentic Tool & Workflow Orchestration", desc: "Exposing governed Tools, Resources, and Prompts to Claude Desktop, Cursor, and custom copilots." },
      { name: "Enterprise Security & RBAC Guardrails", desc: "OAuth 2.1 authentication, scoped token boundaries, and sandboxed file system allowlists." }
    ],
    technicalApproach: [
      "Strict JSON-RPC 2.0 adherence with stdio and streamable HTTP + SSE transports",
      "Zod and Pydantic v2 runtime type safety and parameter validation",
      "Zero-trust credential isolation preventing model access to raw secrets",
      "Automated protocol capability negotiation and backward-compatibility suites"
    ],
    deliverables: [
      "Production-Grade MCP Server Repository",
      "Claude Desktop & Cursor IDE Configuration Manifests",
      "OAuth 2.1 & Scoped Permission Policy Definitions",
      "Docker Containerization & Kubernetes Helm Deployment Charts"
    ],
    stack: ["TypeScript", "Node.js", "Python", "JSON-RPC 2.0", "stdio", "HTTP + SSE", "Zod", "Docker", "OAuth 2.1"],
    metrics: "Average 70% reduction in manual workflow latency and 100K+ monthly agent tool executions."
  },

  "whatsapp-marketing": {
    slug: "whatsapp-marketing",
    category: "implementation",
    categoryTitle: "Implementation",
    title: "WhatsApp Marketing & Automation",
    tagline: "Official Meta WhatsApp Business Cloud API workflows and conversational intelligence.",
    overview: "Transform WhatsApp from an ad-hoc messaging channel into an automated revenue engine. We deploy conversational AI agents, transactional order notifications, broadcast segmentation, and CRM-synced support workflows via the official Meta WhatsApp Business API.",
    keyCapabilities: [
      { name: "Official Cloud API Setup & Verification", desc: "Direct Meta Business Manager verification, high-tier phone number provisioning, and green tick badge enablement." },
      { name: "Conversational AI Copilots", desc: "Autonomous multilingual bots handling customer queries, product recommendations, and appointment bookings 24/7." },
      { name: "CRM & Payment Sync", desc: "Bidirectional integration with HubSpot, Shopify, Salesforce, and Stripe payment links within the chat." },
      { name: "Targeted Broadcast Campaigns", desc: "Compliant opt-in broadcast marketing with dynamic template parameters and real-time open/click analytics." }
    ],
    technicalApproach: [
      "Official Meta WhatsApp Business Cloud API integration",
      "Multi-agent handoff to human support with Zendesk / Freshdesk integration",
      "Automated template approvals conforming to Meta 24-hour service windows",
      "Comprehensive webhook delivery monitoring with Redis retry queues"
    ],
    deliverables: [
      "WhatsApp Business Cloud API Architecture",
      "Conversational Flow Design & Agent Codebase",
      "CRM & Payment Gateway Webhook Integrations",
      "Campaign Analytics & Broadcast Automation Portal"
    ],
    stack: ["WhatsApp Cloud API", "Node.js", "Meta Graph API", "HubSpot", "Shopify", "Stripe", "Redis"],
    metrics: "Achieved 98% open rates and 45% higher conversion compared to traditional email campaigns."
  }
};
