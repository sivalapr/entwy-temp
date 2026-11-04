import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { solutionsData } from '../data/sitemapData';
import { SolutionsPathwaysHero } from '../components/SolutionsPathwaysHero';
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
  ShieldCheck,
  Terminal,
  Layers
} from 'lucide-react';

const solutionIcons: Record<string, React.ComponentType<{ size?: number | string; color?: string }>> = {
  'build-a-new-product': Rocket,
  'build-an-ai-product': Sparkles,
  'add-ai-to-your-product': Cpu,
  'modernise-your-platform': RefreshCw,
  'automate-business-workflows': Workflow,
};

const solutionDeepDives: Record<string, {
  tagline: string;
  architectureOverview: string;
  playbook: string[];
  deliverables: string[];
  stack: string[];
  impactMetric: string;
}> = {
  'build-a-new-product': {
    tagline: 'Zero-to-one product engineering with production-ready cloud architecture.',
    architectureOverview: 'We take founders and enterprise innovation units from initial user hypothesis to a scalable, production-grade cloud application in 6 weeks. No throwaway prototypes—our code is engineered with strict types, CI/CD pipelines, and enterprise security from day one.',
    playbook: [
      'Sprint 0: High-fidelity Figma design tokens & database schema modeling',
      'Sprint 1-2: Production scaffold with authentication, billing, and core API surfaces',
      'Sprint 3-4: Feature velocity engineering and high-leverage third-party integrations',
      'Sprint 5: SOC-2 baseline security audit, load testing, and production cutover'
    ],
    deliverables: [
      'Production-Ready Cloud Codebase with 100% IP Ownership',
      'Continuous Deployment Pipeline (GitHub Actions + AWS / Vercel)',
      'Enterprise Authentication (SSO, MFA, Role-Based Access)',
      'Product Analytics & Telemetry Dashboard (Mixpanel / PostHog)'
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js / Go', 'PostgreSQL', 'Tailwind', 'AWS'],
    impactMetric: 'Average 6 weeks from kickoff to first paying enterprise customers.'
  },
  'build-an-ai-product': {
    tagline: 'Bespoke autonomous systems with real-time reasoning loops.',
    architectureOverview: 'Move past superficial wrapper apps. We architect cognitive platforms featuring multi-agent coordination, vector database retrieval (RAG), and deterministic safety guardrails engineered for low latency and predictable token economics.',
    playbook: [
      'Phase 1: Proprietary data audit, embedding benchmarking, and latency budgeting',
      'Phase 2: Vector database indexing with hybrid keyword + semantic search',
      'Phase 3: Multi-agent execution graph with deterministic validation gates',
      'Phase 4: Synthetic benchmark suite evaluating hallucination rates and safety'
    ],
    deliverables: [
      'Autonomous Multi-Agent Orchestration Engine',
      'High-Performance Vector Retrieval Pipeline (Hybrid Search)',
      'Cryptographic PII / PHI Redaction Filter Layer',
      'Automated Model Evaluation & Telemetry Dashboard'
    ],
    stack: ['LangGraph', 'Qdrant / Pinecone', 'FastAPI', 'Claude 3.5 Sonnet', 'GPT-4o', 'OpenTelemetry'],
    impactMetric: 'Sub-400ms end-to-end inference latency with 99.8% factual accuracy.'
  },
  'add-ai-to-your-product': {
    tagline: 'Inject cognitive capabilities into established SaaS applications.',
    architectureOverview: 'Your existing product already has valuable customer data. We build embedded AI copilots, intelligent auto-complete, and automated data synthesis directly into your existing user workflows without rewriting your core backend.',
    playbook: [
      'Week 1: Schema reverse-engineering and contextual user workflow mapping',
      'Weeks 2-3: Streaming copilot API layer with WebSocket client hooks',
      'Weeks 4-5: Fine-tuned domain models trained on proprietary anonymized telemetry',
      'Week 6: Canary rollout with A/B latency benchmarking and customer telemetry'
    ],
    deliverables: [
      'Embedded Copilot Frontend UI Components (React / Vue)',
      'Streaming WebSocket Gateway with Token Metering',
      'Domain Contextual Retrieval Engine',
      'Customer Usage Telemetry & Feedback Collection Hooks'
    ],
    stack: ['React SDK', 'WebSockets', 'FastAPI', 'PostgreSQL pgvector', 'PostHog', 'Stripe Metering'],
    impactMetric: '38% increase in daily active feature engagement within 30 days.'
  },
  'modernise-your-platform': {
    tagline: 'De-risk mission-critical systems with zero-downtime Strangler Fig migrations.',
    architectureOverview: 'Legacy monoliths choke engineering velocity. We safely decompose monolithic databases and monolithic backends into event-driven microservices using Strangler Fig proxies, ensuring active customer revenue is never interrupted.',
    playbook: [
      'Audit: Codebase dependency graph mapping and dead code elimination',
      'Gateway: Reverse proxy routing new API endpoints to modern cloud containers',
      'Extraction: Incremental database schema sharding and dual-write synchronization',
      'Cutover: Gradual traffic migration with automated instant rollback safety nets'
    ],
    deliverables: [
      'API Modernization Gateway & Reverse Proxy Layer',
      'Containerized Microservices on Kubernetes (EKS / GKE)',
      'Automated Zero-Downtime Database Migration Runbook',
      'Datadog / Prometheus Real-Time Observability Suite'
    ],
    stack: ['Kubernetes', 'Docker', 'Kafka', 'Terraform', 'PostgreSQL', 'Golang / Node.js'],
    impactMetric: 'Zero downtime achieved across 100M+ migrated user records.'
  },
  'automate-business-workflows': {
    tagline: 'Autonomous trigger-action bridges connecting your sales, ops, and engineering tooling.',
    architectureOverview: 'Human data entry between CRM, ERP, billing, and support tools causes catastrophic delays and errors. We build Zapier-grade webhook brokers, autonomous reconciliation bots, and event-driven data sync chains across your entire software stack.',
    playbook: [
      'Map: Documenting all manual data transfer points across operational teams',
      'Scaffold: Webhook ingestion brokers with replay buffers and idempotency keys',
      'Orchestrate: Multi-step conditional triggers with human-in-the-loop fallback',
      'Monitor: Slack and email alert monitors catching anomalies before customers notice'
    ],
    deliverables: [
      'Unified Cross-Platform Event Broker Architecture',
      'Idempotent Webhook Handlers with Automatic Retries',
      'Slack Bot Operations Control Room for Instant Overrides',
      'Real-Time Sync Health and Error Telemetry Dashboard'
    ],
    stack: ['Zapier', 'Svix Webhooks', 'Salesforce API', 'HubSpot API', 'Stripe API', 'Slack API'],
    impactMetric: 'Eliminated 120+ manual operational hours weekly per enterprise team.'
  }
};

export const SolutionsPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const activeSolution = id ? solutionsData.find(s => s.id === id) : null;
  const activeDeepDive = id ? solutionDeepDives[id] : null;

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb if detail view */}
        {activeSolution && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/solutions" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Solutions</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{activeSolution.title}</span>
          </nav>
        )}

        {/* Header: Overview Hero08 or Detail Header */}
        {!activeSolution ? (
          <SolutionsPathwaysHero />
        ) : (
          <div style={{ maxWidth: 840, marginBottom: 56 }}>

            <h1 className="display-xl" style={{ marginBottom: 18 }}>
              {activeSolution.title}
            </h1>
            <p className="body-lg" style={{ color: 'var(--color-body)' }}>
              {activeDeepDive ? activeDeepDive.tagline : ''}
            </p>
          </div>
        )}

        {/* If Active Solution Detail View */}
        {activeSolution && activeDeepDive ? (
          <div>
            {/* Overview Card */}
            <div
              style={{
                backgroundColor: 'var(--color-canvas-soft)',
                border: '1px solid var(--color-hairline-strong)',
                borderRadius: 'var(--radius-xl)',
                padding: '40px',
                marginBottom: '48px',
                boxShadow: '0 8px 24px rgba(32, 21, 21, 0.04)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: 12 }}>
                <span className="step-type-badge badge-trigger" style={{ fontSize: '12px' }}>
                  {activeSolution.tag}
                </span>
                <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700 }}>
                  {activeDeepDive.impactMetric}
                </span>
              </div>
              <p style={{ fontSize: '18px', lineHeight: 1.65, color: 'var(--color-ink)', marginBottom: '32px' }}>
                {activeDeepDive.architectureOverview}
              </p>

              {/* 2-Column: Playbook & Deliverables */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px', marginTop: '24px' }}>
                {/* Playbook */}
                <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '28px', border: '1px solid var(--color-hairline)' }}>

                  <h3 className="title-md" style={{ marginBottom: 16 }}>Execution Phases</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {activeDeepDive.playbook.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '13.5px', color: 'var(--color-ink-mid)' }}>
                        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-primary)', flexShrink: 0 }}>0{idx + 1}.</span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '28px', border: '1px solid var(--color-hairline)' }}>

                  <h3 className="title-md" style={{ marginBottom: 16 }}>Verified Outcomes</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {activeDeepDive.deliverables.map((deliv) => (
                      <div key={deliv} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '13.5px', color: 'var(--color-ink-mid)' }}>
                        <CheckCircle2 size={16} color="#108548" style={{ flexShrink: 0 }} />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--color-hairline)' }}>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-muted)', textTransform: 'none', marginBottom: 12, fontWeight: 700 }}>
                  Recommended Production Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {activeDeepDive.stack.map(tech => (
                    <span
                      key={tech}
                      style={{
                        padding: '6px 14px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--color-hairline)',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '12.5px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-ink)',
                        fontWeight: 600
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 16, marginBottom: '64px', flexWrap: 'wrap' }}>
              <Link to={`/start-a-project?solution=${activeSolution.id}`} className="btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <span>Deploy This Solution</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/solutions" className="btn-secondary" style={{ padding: '14px 22px', fontSize: '15px' }}>
                <ArrowLeft size={15} />
                <span>View All Solutions</span>
              </Link>
            </div>
          </div>
        ) : null}

        {/* 5 Solutions Cards Grid */}
        <div>
          {activeSolution && (
            <h2 className="title-lg" style={{ marginBottom: 24 }}>
              Other Solutions in Portfolio
            </h2>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '28px' }}>
            {solutionsData.map((solution) => {
              const IconComponent = solutionIcons[solution.id] || Zap;
              const isSelected = activeSolution?.id === solution.id;
              return (
                <article
                  key={solution.id}
                  id={solution.id}
                  className="step-card"
                  style={{
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 'var(--radius-lg)',
                    border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
                    backgroundColor: '#ffffff',
                    boxShadow: isSelected ? '0 12px 32px rgba(83, 58, 253, 0.12)' : '0 2px 8px rgba(13, 37, 61, 0.04)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)' }}>
                        <IconComponent size={20} />
                      </div>
                      <span className="step-type-badge badge-trigger" style={{ fontSize: '11px' }}>
                        {solution.tag}
                      </span>
                    </div>

                    <Link to={`/solutions/${solution.id}`} style={{ textDecoration: 'none' }}>
                      <h2 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
                        {solution.title}
                      </h2>
                    </Link>

                    <p style={{ fontSize: '15px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '24px' }}>
                      {solution.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                      {solution.bullets.map((bullet) => (
                        <div key={bullet} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--color-ink-mid)' }}>
                          <CheckCircle2 size={15} color="#108548" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-hairline-soft)', display: 'flex', gap: 10 }}>
                    <Link
                      to={`/solutions/${solution.id}`}
                      className="btn-secondary"
                      style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '13.5px' }}
                    >
                      <span>Explore Blueprint</span>
                      <ArrowRight size={13} />
                    </Link>
                    <Link
                      to={`/start-a-project?solution=${solution.id}`}
                      className="btn-primary"
                      style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '13.5px' }}
                    >
                      <span>Deploy</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Band */}
        <div 
          className="cta-wave-banner"
          style={{ 
            marginTop: '72px', 
            padding: '52px', 
            textAlign: 'center', 
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 600 }}>
            Ready to deploy an enterprise solution?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 400 }}>
            Our principal architects will assess your infrastructure and deliver a customized technical delivery roadmap within 5 business days.
          </p>
          <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
            <span>Deploy a Solution</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
