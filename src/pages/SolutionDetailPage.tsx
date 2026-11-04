import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { solutionsData } from '../data/sitemapData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  RefreshCw, 
  Rocket, 
  Sparkles, 
  Workflow, 
  Zap,
  ChevronRight,
  Terminal,
  Layers,
  ShieldCheck,
  Server,
  TrendingUp
} from 'lucide-react';

const solutionIcons: Record<string, React.ComponentType<{ size?: number | string; color?: string }>> = {
  'build-a-new-product': Rocket,
  'build-an-ai-product': Sparkles,
  'add-ai-to-your-product': Cpu,
  'modernise-your-platform': RefreshCw,
  'automate-business-workflows': Workflow,
};

const solutionDetailedSpecs: Record<string, {
  heroTagline: string;
  leadNarrative: string;
  architectureDetails: string[];
  executionPhases: { phase: string; title: string; desc: string; artifact: string }[];
  stack: string[];
  measuredResults: { stat: string; label: string }[];
}> = {
  'build-a-new-product': {
    heroTagline: 'From initial hypothesis to full-stack production application in 6 weeks.',
    leadNarrative: 'Founders and enterprise venture groups cannot afford 9-month development cycles for unvalidated concepts. ENTWY deploys staff-level full-stack strike teams who architect, design, and code your complete product from day one with enterprise-grade types, security, and continuous deployment.',
    architectureDetails: [
      'Typed full-stack architecture using Next.js 15 App Router, React Server Components, and Tailwind tokens.',
      'Containerized backend services with automated PostgreSQL migrations and schema branching via Supabase or AWS RDS.',
      'Day-1 integration of Stripe billing, webhooks, transactional email (Resend), and enterprise SSO authentication.',
      'Continuous deployment via GitHub Actions with ephemeral pull-request preview environments.'
    ],
    executionPhases: [
      { phase: 'Weeks 1–2', title: 'Architecture Scaffolding & Token System', desc: 'Design tokens in Figma translated directly into production CSS. Core database schemas, auth, and billing harnesses deployed to staging.', artifact: 'Staging Environment Live with Auth & DB' },
      { phase: 'Weeks 3–4', title: 'Feature Velocity & Integrations', desc: 'Core transaction workflow, user onboarding, external API connectors, and telemetry tracking implemented.', artifact: 'End-to-End User Journey Operational' },
      { phase: 'Weeks 5–6', title: 'Hardening, Security & Launch', desc: 'SOC 2 security posture audit, distributed load testing, SEO optimization, and live domain cutover.', artifact: 'Production Launch with 100% IP Handover' }
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Stripe', 'Docker', 'AWS'],
    measuredResults: [
      { stat: '6 Weeks', label: 'Average Kickoff-to-Launch' },
      { stat: '100%', label: 'Client IP Ownership' },
      { stat: 'Sub-200ms', label: '95th Percentile API Latency' },
      { stat: 'Zero', label: 'Throwaway Prototype Code' }
    ]
  },
  'build-an-ai-product': {
    heroTagline: 'Architecting cognitive platforms with autonomous reasoning loops and deterministic safety.',
    leadNarrative: 'Most AI startups stumble because superficial API wrappers cannot retain enterprise customers. ENTWY constructs defensible cognitive systems combining multi-agent coordination, graph-augmented retrieval (GraphRAG), and deterministic validation gates that ensure zero hallucination risk.',
    architectureDetails: [
      'Multi-agent task orchestration using LangGraph with state persistence and human-in-the-loop checkpoints.',
      'Hybrid semantic vector search paired with BM25 keyword scoring over Qdrant and pgvector.',
      'Cryptographic PII/PHI redaction proxy intercepting prompts before external LLM evaluation.',
      'Synthetic benchmark evaluation harnesses evaluating factual precision and token cost per query continuously.'
    ],
    executionPhases: [
      { phase: 'Weeks 1–2', title: 'Data Moat & Embedding Benchmarks', desc: 'Audit internal documents, test embedding models, benchmark inference latency budgets, and model token costs.', artifact: 'Embedding & Token Economics Model' },
      { phase: 'Weeks 3–4', title: 'Agent Graph & Ingestion Pipeline', desc: 'Construct asynchronous vector ingestion workers, tool calling interfaces, and persistent memory stores.', artifact: 'Live Reasoning Graph on Staging' },
      { phase: 'Weeks 5–6', title: 'Safety Guardrails & Production Deploy', desc: 'Implement strict output JSON schema enforcement, canary traffic routing, and LangSmith observability.', artifact: 'Production AI Platform with Telemetry' }
    ],
    stack: ['LangGraph', 'Qdrant', 'Claude 3.5 Sonnet', 'GPT-4o', 'FastAPI', 'Python', 'OpenTelemetry'],
    measuredResults: [
      { stat: '380ms', label: 'Average Inference Latency' },
      { stat: '99.8%', label: 'Factual Accuracy Score' },
      { stat: '65%', label: 'Token Cost Reduction via Caching' },
      { stat: '100%', label: 'Deterministic Output Validation' }
    ]
  },
  'add-ai-to-your-product': {
    heroTagline: 'Embed intelligent copilots and automated synthesis into existing SaaS workflows.',
    leadNarrative: 'You do not need to rebuild your established application to offer transformative AI features. We embed contextual assistant sidebars, automated document extraction, and predictive triggers into your current software with minimal architectural disruption.',
    architectureDetails: [
      'Lightweight React component SDK and WebSocket client libraries dropping cleanly into existing web views.',
      'Reverse-ETL streaming bus hydrating vector indices from active production PostgreSQL or Snowflake databases.',
      'Streaming token response protocol with optimistic UI updates and instant cancellation controls.',
      'Role-based access control ensuring users only retrieve information their existing permissions allow.'
    ],
    executionPhases: [
      { phase: 'Weeks 1–2', title: 'Schema Audit & Client SDK Scaffolding', desc: 'Identify highest-leverage user workflows, define authorization boundaries, and package drop-in frontend widgets.', artifact: 'Embedded Copilot Component SDK' },
      { phase: 'Weeks 3–4', title: 'Streaming Gateway & Vector Sync', desc: 'Deploy event-driven indexing worker streaming database updates into contextual vector stores in sub-second time.', artifact: 'Real-Time Vector Sync Pipeline' },
      { phase: 'Weeks 5–6', title: 'Canary Rollout & Telemetry Tuning', desc: 'Roll out copilot feature to 10% beta cohort, analyze usage telemetry in PostHog, and optimize prompt precision.', artifact: 'General Availability Feature Launch' }
    ],
    stack: ['React SDK', 'WebSockets', 'FastAPI', 'PostgreSQL pgvector', 'PostHog', 'Stripe Metering'],
    measuredResults: [
      { stat: '+42%', label: 'Daily Active Feature Usage' },
      { stat: '3 Weeks', label: 'Time to First Staging Build' },
      { stat: '0 Days', label: 'Disruption to Core Backend' },
      { stat: '100%', label: 'RBAC Security Preservation' }
    ]
  },
  'modernise-your-platform': {
    heroTagline: 'Strangler Fig migration pattern de-risking monolithic enterprise backends.',
    leadNarrative: 'Legacy monolithic software chokes company agility and accumulates millions in technical debt. ENTWY safely decouples legacy codebases using reverse proxies, event brokers, and containerized microservices without pausing active user revenue.',
    architectureDetails: [
      'Reverse proxy routing layer (Envoy / Kong) intercepting traffic and routing incrementally to new cloud containers.',
      'Dual-write event synchronization keeping legacy relational databases and modern cloud databases in lockstep.',
      'Automated automated rollback safety nets reversing traffic shifts in under 5 seconds if error budgets are breached.',
      'Comprehensive Datadog and OpenTelemetry distributed tracing across both legacy and modern boundaries.'
    ],
    executionPhases: [
      { phase: 'Weeks 1–2', title: 'Monolith Audit & Gateway Deployment', desc: 'Identify boundary seams, document coupling dependencies, and stand up zero-downtime routing proxy.', artifact: 'API Modernization Proxy Live' },
      { phase: 'Weeks 3–5', title: 'Service Extraction & Dual-Write', desc: 'Extract first monolithic domain into containerized Golang/Node.js service with automated Kafka synchronization.', artifact: 'First Microservice in Production' },
      { phase: 'Weeks 6–8', title: 'Database Sharding & Decommissioning', desc: 'Cutover remaining reads, decommission legacy mainframe servers, and finalize multi-region cloud deployment.', artifact: 'Complete Monolith Elimination' }
    ],
    stack: ['Kubernetes', 'Docker', 'Kafka', 'Terraform', 'PostgreSQL', 'Golang', 'Datadog'],
    measuredResults: [
      { stat: '0.00%', label: 'Downtime During Cutover' },
      { stat: '100M+', label: 'Records Safely Migrated' },
      { stat: '-60%', label: 'Legacy Cloud Compute COGS' },
      { stat: '10x', label: 'Developer Deployment Frequency' }
    ]
  },
  'automate-business-workflows': {
    heroTagline: 'Event-driven integration mesh connecting sales, operations, ERP, and engineering.',
    leadNarrative: 'Manual swivel-chair data entry between CRM, ERP, billing, and support tools causes catastrophic delays, reconciliation overhead, and human error. We construct event-driven webhook brokers and automated reconciliation pipelines across your entire enterprise stack.',
    architectureDetails: [
      'High-throughput webhook broker (Svix / Kafka) processing incoming partner webhooks with replay buffers.',
      'Idempotent mutation handlers guaranteeing at-least-once delivery without duplicate charges or duplicate records.',
      'Slack bot control rooms allowing human operators to approve exceptions, edit payloads, or retry failed runs.',
      'Bi-directional sync engines synchronizing Salesforce, HubSpot, Stripe, and internal PostgreSQL databases.'
    ],
    executionPhases: [
      { phase: 'Weeks 1–2', title: 'Process Flow Audit & Broker Setup', desc: 'Map operational bottlenecks across teams and deploy fault-tolerant webhook ingestion brokers.', artifact: 'Webhook Gateway Operational' },
      { phase: 'Weeks 3–4', title: 'Multi-Step Execution Chains', desc: 'Construct automated trigger-action chains with deterministic validation, error handlers, and Slack alerts.', artifact: 'Automated Sync Across 5 Tools' },
      { phase: 'Weeks 5–6', title: 'Audit Dashboards & Team Handover', desc: 'Deliver Snowflake audit logs, real-time error telemetry dashboards, and operations team documentation.', artifact: 'Full Operations Rollout & Handover' }
    ],
    stack: ['Zapier', 'Svix', 'Salesforce API', 'HubSpot API', 'Stripe API', 'Slack API', 'PostgreSQL'],
    measuredResults: [
      { stat: '120 hrs', label: 'Manual Time Saved Weekly' },
      { stat: '99.99%', label: 'Webhook Delivery Success' },
      { stat: 'Sub-Second', label: 'Cross-System Sync Latency' },
      { stat: 'Zero', label: 'Data Entry Discrepancies' }
    ]
  }
};

export const SolutionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const solution = solutionsData.find(s => s.id === id);
  const spec = id ? solutionDetailedSpecs[id] : null;

  if (!solution || !spec) {
    return <Navigate to="/solutions" replace />;
  }

  const IconComp = solutionIcons[solution.id] || Zap;
  const otherSolutions = solutionsData.filter(s => s.id !== solution.id);

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/solutions" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Solutions</Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{solution.title}</span>
        </nav>

        {/* Hero Section */}
        <div style={{ maxWidth: 880, marginBottom: 52 }}>

          <h1 className="display-xl" style={{ marginBottom: 18, lineHeight: 1.15 }}>
            {solution.title}
          </h1>
          <p style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--color-ink-mid)', marginBottom: 20, fontWeight: 500 }}>
            {spec.heroTagline}
          </p>
          <p className="body-lg" style={{ color: 'var(--color-body)', marginBottom: 32, lineHeight: 1.65 }}>
            {spec.leadNarrative}
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link 
              to={`/start-a-project?solution=${solution.id}`} 
              className="btn-primary"
              style={{ padding: '14px 26px', fontSize: '15px' }}
            >
              <span>Deploy This Solution</span>
              <ArrowRight size={15} />
            </Link>
            <Link 
              to="/solutions" 
              className="btn-secondary"
              style={{ padding: '14px 22px', fontSize: '15px' }}
            >
              <ArrowLeft size={15} />
              <span>All Solutions</span>
            </Link>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 16, marginBottom: 56 }}>
          {spec.measuredResults.map(item => (
            <div 
              key={item.label}
              style={{
                backgroundColor: 'var(--color-canvas-soft)',
                border: '1px solid var(--color-hairline-strong)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>
                {item.stat}
              </div>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-muted)', textTransform: 'none' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column: Architectural Details & Execution Phases */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 36, marginBottom: 56 }}>
          {/* Architecture Blueprint */}
          <div>

            <h2 className="display-sm" style={{ marginBottom: 20 }}>
              System Engineering Specs
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {spec.architectureDetails.map((detail, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    boxShadow: '0 2px 8px rgba(32, 21, 21, 0.02)'
                  }}
                >
                  <CheckCircle2 size={16} color="#108548" style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: '14px', color: 'var(--color-ink-mid)', lineHeight: 1.55, margin: 0 }}>
                    {detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Core Deliverables List */}
            <div style={{ marginTop: 28, backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'none', marginBottom: 12 }}>
                Standard Inclusions
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {solution.bullets.map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '13.5px', color: 'var(--color-ink)' }}>
                    <ShieldCheck size={15} color="var(--color-primary)" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Playbook Phases */}
          <div>

            <h2 className="display-sm" style={{ marginBottom: 20 }}>
              How We Ship to Production
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {spec.executionPhases.map((phase, idx) => (
                <div 
                  key={idx}
                  style={{
                    backgroundColor: 'var(--color-canvas-soft)',
                    border: '1px solid var(--color-hairline-strong)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                  }}
                  className="step-card"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700 }}>
                      {phase.phase}
                    </span>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-muted)' }}>
                      Sprint Gate 0{idx + 1}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 8 }}>
                    {phase.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, marginBottom: 14 }}>
                    {phase.desc}
                  </p>
                  <div style={{ paddingTop: 10, borderTop: '1px solid var(--color-hairline)', fontSize: '12px', color: 'var(--color-ink-mid)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <strong style={{ color: 'var(--color-primary)' }}>Verified Output:</strong> {phase.artifact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: 64, padding: '32px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-hairline)' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', textTransform: 'none', letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: 16, fontWeight: 700 }}>
            Recommended Production Architecture Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {spec.stack.map(tech => (
              <span 
                key={tech}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--color-canvas-soft)',
                  border: '1px solid var(--color-hairline-strong)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--color-ink)',
                  fontWeight: 600
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Explore Other Solutions */}
        <div style={{ marginBottom: 64 }}>

          <h2 className="title-lg" style={{ marginBottom: 24 }}>
            Explore Other Engineering Blueprints
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {otherSolutions.map((sol) => (
              <Link
                key={sol.id}
                to={`/solutions/${sol.id}`}
                style={{
                  backgroundColor: 'var(--color-canvas-soft)',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                className="step-card"
              >
                <div>
                  <span className="step-type-badge badge-trigger" style={{ fontSize: '10.5px', marginBottom: 10 }}>
                    {sol.tag}
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 8 }}>
                    {sol.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.5, marginBottom: 16 }}>
                    {sol.desc}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '12.5px', color: 'var(--color-primary)', fontWeight: 600 }}>
                  <span>View Blueprint</span>
                  <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA - Stripe Dark Shell */}
        <div className="cta-wave-banner" style={{ padding: '52px', textAlign: 'center' }}>
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: 14, fontWeight: 600 }}>
            Ready to deploy {solution.title}?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: 640, margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 400 }}>
            Our principal architects will assess your infrastructure and deliver a customized technical delivery roadmap within 5 business days.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link 
              to={`/start-a-project?solution=${solution.id}`} 
              className="btn-secondary-on-dark" 
              style={{ padding: '12px 24px' }}
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight size={15} />
            </Link>
            <Link 
              to="/solutions" 
              className="btn-secondary-on-dark" 
              style={{ padding: '12px 20px' }}
            >
              <span>Back to Solutions</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
