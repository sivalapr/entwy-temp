import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { processStagesData } from '../data/sitemapData';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  GitCommit,
  Layers,
  Sparkles,
  Zap,
  ChevronRight,
  ShieldCheck,
  Terminal,
  Cpu,
  FileCode,
  Users
} from 'lucide-react';

const stageSlugMap: Record<string, number> = {
  'our-approach': 1,
  'approach': 1,
  '1': 1,
  '01': 1,
  '01-our-approach': 1,
  '01.-our-approach': 1,
  'discovery-strategy': 2,
  'discovery---strategy': 2,
  'discovery': 2,
  'strategy': 2,
  '2': 2,
  '02': 2,
  '02-discovery-strategy': 2,
  '02.-discovery-strategy': 2,
  'design-build': 3,
  'design---build': 3,
  'build': 3,
  'design': 3,
  '3': 3,
  '03': 3,
  '03-design-build': 3,
  '03.-design-build': 3,
  'test-refine': 4,
  'test---refine': 4,
  'test': 4,
  'refine': 4,
  '4': 4,
  '04': 4,
  '04-test-refine': 4,
  '04.-test-refine': 4,
  'launch-scale': 5,
  'launch---scale': 5,
  'launch': 5,
  'scale': 5,
  '5': 5,
  '05': 5,
  '05-launch-scale': 5,
  '05.-launch-scale': 5,
};

const stageDetailedSpecs: Record<number, {
  slug: string;
  cadenceBadge: string;
  tagline: string;
  leadNarrative: string;
  operationalProtocols: { title: string; desc: string }[];
  inputsRequired: string[];
  deliverablesProduced: string[];
  qualityGates: string[];
  clientInteractionModel: string;
}> = {
  1: {
    slug: 'our-approach',
    cadenceBadge: 'Foundational Principles & Operating System',
    tagline: 'Staff-level engineers embedded directly into your problem space. No juniors, no account layers.',
    leadNarrative: 'Most software engagements suffer from bureaucratic friction: account managers misinterpreting requirements, junior developers learning on client budgets, and slide decks replacing working code. ENTWY operates with a radical strike-team model where founders and executives pair directly with staff software engineers from day one.',
    operationalProtocols: [
      { title: 'Principal Direct Access', desc: 'Direct Slack / Discord channels and asynchronous Loom updates with the actual architects coding your platform.' },
      { title: 'Working Code Over Decks', desc: 'We deliver interactive preview environments and staging builds within 72 hours of project initiation.' },
      { title: 'Cryptographic Security Posture', desc: 'Pre-flight secrets audits, zero-trust container configurations, and SOC 2 baseline practices from commit one.' }
    ],
    inputsRequired: [
      'High-level product vision and user personas',
      'Access to relevant internal APIs, data schemas, or legacy repositories',
      'Target performance SLAs and compliance requirements'
    ],
    deliverablesProduced: [
      'Architectural Guiding Principles Document',
      'Shared Monorepo / Git Repository with CI/CD Scaffold',
      'Security Posture & Compliance Boundary Baseline',
      'Executive Milestone & Delivery Schedule'
    ],
    qualityGates: [
      'Zero unaccounted third-party data leaks',
      'Deterministic CI/CD deployment pipeline active',
      '100% strict TypeScript configuration enforced'
    ],
    clientInteractionModel: 'Daily asynchronous standups via Slack; weekly 30-minute sprint demo with working software.'
  },
  2: {
    slug: 'discovery-strategy',
    cadenceBadge: 'Week 1–2 · Architectural Discovery',
    tagline: 'De-risking technical assumptions and constructing unit-economic models before coding.',
    leadNarrative: 'Before engineering complex features, we deeply inspect user workflows, database schema relationships, third-party vendor rate limits, and latency budgets. We model the token cost per query for AI systems and identify the single highest-leverage transaction loop.',
    operationalProtocols: [
      { title: 'Workflow Telemetry Audit', desc: 'Mapping user interaction paths and identifying friction points causing churn or manual intervention.' },
      { title: 'Schema & Entity Modeling', desc: 'Normalizing entity relationships, mapping database read/write concurrency, and structuring state transitions.' },
      { title: 'API Contract Definitions', desc: 'Publishing typed OpenAPI 3.1 specifications and JSON Schemas that frontend and backend engineers build against.' }
    ],
    inputsRequired: [
      'Sample raw production data (sanitized) or mock payloads',
      'Existing user analytics reports (Mixpanel, PostHog, Google Analytics)',
      'Third-party software licenses (Stripe, CRM, AWS/GCP accounts)'
    ],
    deliverablesProduced: [
      'Comprehensive System Architecture Blueprint',
      'Normalized Entity-Relationship Diagram (ERD)',
      'Typed OpenAPI 3.1 Specification',
      'Prioritized 6-Week Delivery Backlog'
    ],
    qualityGates: [
      'All schema models approved by principal architect',
      'API latency budgets defined (<200ms target)',
      'Third-party API rate limits validated'
    ],
    clientInteractionModel: 'Collaborative Figma & Notion working sessions every 48 hours.'
  },
  3: {
    slug: 'design-build',
    cadenceBadge: 'Weeks 3–6 · Concurrent Parallel Execution',
    tagline: 'Designers craft atomic design tokens while engineers stand up containerized API services.',
    leadNarrative: 'We eliminate the waterfall lag between design sign-off and developer implementation. Our product designers build production-ready design tokens in Figma that translate directly into CSS variables, while full-stack engineers implement typed backend routes with automated unit tests.',
    operationalProtocols: [
      { title: 'Zapier-Grade Micro-Interactions', desc: 'Building responsive states, optimistic UI feedback, and unambiguous visual badges for automated tasks.' },
      { title: 'Ephemeral PR Environments', desc: 'Every GitHub pull request automatically triggers an isolated cloud preview URL for instant review.' },
      { title: 'Event-Driven Backend Logic', desc: 'Decoupling services with Kafka / Redis event brokers to prevent synchronous timeouts during traffic spikes.' }
    ],
    inputsRequired: [
      'Brand design guidelines, typography licenses, and logo assets',
      'Review feedback on weekly staging sprint builds',
      'Domain DNS delegation for staging subdomains'
    ],
    deliverablesProduced: [
      'Atomic Design System Component Library',
      'Full-Stack Production Application Codebase',
      'Continuous Staging Preview Deployments',
      'Automated End-to-End Test Suite'
    ],
    qualityGates: [
      '100% TypeScript type-check pass with zero any escapes',
      'Lighthouse accessibility score > 95/100',
      'Sub-500ms initial server response time'
    ],
    clientInteractionModel: 'Continuous preview URL sharing; bi-weekly sprint milestone demonstration.'
  },
  4: {
    slug: 'test-refine',
    cadenceBadge: 'Weeks 7–8 · Resiliency Hardening',
    tagline: 'Battle-testing platforms under extreme concurrency, packet loss, and security scans.',
    leadNarrative: 'Software must prove itself before touching real enterprise revenue. We simulate distributed denial-of-service traffic, inject artificial network delays into third-party webhooks, audit dependency vulnerability CVEs, and run end-to-end user testing across mobile, tablet, and desktop viewports.',
    operationalProtocols: [
      { title: 'Distributed Concurrency Load Testing', desc: 'Simulating 10x projected peak traffic concurrency to identify database connection pool bottlenecks.' },
      { title: 'Chaos & Failover Simulation', desc: 'Force-killing database instances to verify automatic failover and read-replica recovery in under 10 seconds.' },
      { title: 'Security Scanning & Penetration Audits', desc: 'Running OWASP automated vulnerability scanners, Snyk dependency audits, and secret scanning.' }
    ],
    inputsRequired: [
      'Target production volume and peak concurrency projections',
      'Beta client cohort access for usability pilot sessions',
      'Security compliance officer review and sign-off criteria'
    ],
    deliverablesProduced: [
      'Distributed Load & Latency Performance Report',
      'Automated Edge-Case Test Harness',
      'Security & Dependency CVE Compliance Certificate',
      'Usability & Pilot Telemetry Feedback Summary'
    ],
    qualityGates: [
      '99.9th percentile latency verified under 10x traffic load',
      'Zero high-severity or critical security vulnerabilities',
      'Zero P0 or P1 defects in issue tracking'
    ],
    clientInteractionModel: 'Daily bug triage syncs with real-time Slack incident notification.'
  },
  5: {
    slug: 'launch-scale',
    cadenceBadge: 'Production Deployment & 100% IP Transfer',
    tagline: 'Deterministic blue-green production cutover with zero customer interruption.',
    leadNarrative: 'Launch day should be an anticlimactic celebration, not a frantic firefighting session. We execute automated canary traffic shifts, verify DNS propagation and SSL certificates, stand up Datadog real-time observability, and transfer complete IP ownership and architecture runbooks to your team.',
    operationalProtocols: [
      { title: 'Zero-Downtime Blue-Green Cutover', desc: 'Routing production traffic gradually with automatic instant rollback if error budgets are breached.' },
      { title: 'Comprehensive Observability', desc: 'Datadog and Grafana dashboards tracking API request latency, error rates, database CPU, and memory.' },
      { title: 'Full IP & Documentation Handover', desc: 'Transferring all Git repositories, cloud credentials, domain records, and developer architecture runbooks.' }
    ],
    inputsRequired: [
      'Production cloud hosting credentials (AWS, GCP, Azure, or Vercel)',
      'Production custom domain DNS registrar access',
      'Internal engineering team member emails for knowledge transfer'
    ],
    deliverablesProduced: [
      'Live Production Application Deployment with Custom Domain & SSL',
      'Real-Time Telemetry & Alerting Dashboards',
      'Complete Codebase Ownership & IP Transfer Certificate',
      'Comprehensive Engineering Architecture Runbook'
    ],
    qualityGates: [
      '100% uptime maintained during DNS cutover',
      'All monitoring alerts verified with test synthetic pings',
      'Engineering handover workshop completed successfully'
    ],
    clientInteractionModel: '48-hour continuous war-room monitoring followed by 30 days of included warranty support.'
  }
};

export const ProcessDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const normalizedId = id ? id.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : '';
  const stepNumber = id ? (stageSlugMap[id] || stageSlugMap[normalizedId] || null) : null;
  const stage = stepNumber ? processStagesData.find(s => s.step === stepNumber) : processStagesData.find(s => s.slug === normalizedId || s.slug === id);
  const resolvedStep = stage ? stage.step : (stepNumber || null);
  const spec = resolvedStep ? stageDetailedSpecs[resolvedStep] : null;

  if (!stage || !spec) {
    return <Navigate to="/process" replace />;
  }

  const nextStep = stage.step < 5 ? processStagesData.find(s => s.step === stage.step + 1) : null;
  const prevStep = stage.step > 1 ? processStagesData.find(s => s.step === stage.step - 1) : null;

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/process" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Process</Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>0{stage.step}. {stage.title}</span>
        </nav>

        {/* Hero Section */}
        <div style={{ maxWidth: 880, marginBottom: 52 }}>

          <h1 className="display-xl" style={{ marginBottom: 18, lineHeight: 1.15 }}>
            0{stage.step}. {stage.title}
          </h1>
          <p style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--color-ink-mid)', marginBottom: 20, fontWeight: 500 }}>
            {spec.tagline}
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 14px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, marginBottom: 24 }}>
            <Clock size={13} />
            <span>{spec.cadenceBadge}</span>
          </div>
          <p className="body-lg" style={{ color: 'var(--color-body)', marginBottom: 32, lineHeight: 1.65 }}>
            {spec.leadNarrative}
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link
              to="/start-a-project"
              className="btn-primary"
              style={{ padding: '14px 26px', fontSize: '15px' }}
            >
              <span>Schedule Discovery Call</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/process"
              className="btn-secondary"
              style={{ padding: '14px 22px', fontSize: '15px' }}
            >
              <ArrowLeft size={15} />
              <span>All 5 Stages</span>
            </Link>
          </div>
        </div>

        {/* 3 Operational Protocols */}
        <div style={{ marginBottom: 56 }}>
          <h3 className="section-title">How this stage works</h3>
          <h2 className="display-sm" style={{ marginBottom: 24 }}>
            How Stage 0{stage.step} is Conducted
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {spec.operationalProtocols.map((op, idx) => (
              <div
                key={op.title}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  boxShadow: '0 4px 16px rgba(32, 21, 21, 0.03)'
                }}
                className="step-card"
              >
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, marginBottom: 8 }}>
                  Protocol 0{idx + 1}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 10 }}>
                  {op.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.6, margin: 0 }}>
                  {op.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Inputs vs Deliverables */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 32, marginBottom: 56 }}>
          {/* Required Inputs */}
          <div style={{ backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-xl)', padding: '32px' }}>

            <h3 className="title-md" style={{ marginBottom: 16 }}>What We Need from You</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {spec.inputsRequired.map((inp, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '14px', color: 'var(--color-ink-mid)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--color-primary)', flexShrink: 0 }}>0{idx + 1}.</span>
                  <span>{inp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivered Artifacts */}
          <div style={{ backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-xl)', padding: '32px' }}>

            <h3 className="title-md" style={{ marginBottom: 16 }}>Verified Handover Outputs</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {spec.deliverablesProduced.map((deliv, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '14px', color: 'var(--color-ink-mid)' }}>
                  <CheckCircle2 size={16} color="#108548" style={{ flexShrink: 0 }} />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Gates & Client Interaction Cadence - Stripe Dark Shell */}
        <div
          className="cta-wave-banner"
          style={{
            padding: '36px 40px',
            marginBottom: '64px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 32 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#00d4ff', textTransform: 'none', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>
                <ShieldCheck size={14} />
                <span>Strict Quality Acceptance Gates</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#ffffff', marginBottom: 14 }}>
                Zero Compromise Standards
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {spec.qualityGates.map((qg, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '13.5px', color: '#cad5e2' }}>
                    <span style={{ color: '#00d924', fontWeight: 'bold' }}>✓</span>
                    <span>{qg}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.12)', paddingLeft: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#00d4ff', textTransform: 'none', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>
                <Users size={14} />
                <span>Client Collaboration Model</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 500, color: '#ffffff', marginBottom: 14 }}>
                Communication &amp; Review SLA
              </h3>
              <p style={{ fontSize: '14.5px', color: '#cad5e2', lineHeight: 1.6, marginBottom: 20 }}>
                {spec.clientInteractionModel}
              </p>
              <Link
                to="/start-a-project"
                className="btn-secondary-on-dark"
                style={{ padding: '10px 20px', fontSize: '13.5px' }}
              >
                <span>Initiate Stage 0{stage.step} Project</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        {/* Stage Stepper Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 56, paddingTop: 24, borderTop: '1px solid var(--color-hairline)' }}>
          {prevStep ? (
            <Link
              to={`/process/${stageDetailedSpecs[prevStep.step].slug}`}
              className="btn-secondary"
              style={{ fontSize: '14px' }}
            >
              <ArrowLeft size={14} />
              <span>Previous: 0{prevStep.step}. {prevStep.title}</span>
            </Link>
          ) : <div />}

          {nextStep ? (
            <Link
              to={`/process/${stageDetailedSpecs[nextStep.step].slug}`}
              className="btn-primary"
              style={{ fontSize: '14px' }}
            >
              <span>Next: 0{nextStep.step}. {nextStep.title}</span>
              <ArrowRight size={14} />
            </Link>
          ) : (
            <Link
              to="/start-a-project"
              className="btn-primary"
              style={{ fontSize: '14px' }}
            >
              <span>Start Your Project With ENTWY</span>
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
