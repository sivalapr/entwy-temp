import React from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { servicesPillarsData } from '../data/sitemapData';
import { allServiceDetails } from '../data/serviceDetailsData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Palette, 
  Bot, 
  Code, 
  TrendingUp, 
  Sparkles, 
  Zap, 
  ChevronRight,
  Terminal,
  ShieldCheck,
  Layers,
  Award
} from 'lucide-react';

const pillarIcons: Record<string, React.ComponentType<{ size?: number | string; color?: string }>> = {
  strategy: Compass,
  design: Palette,
  ai: Bot,
  technology: Code,
  marketing: TrendingUp,
};

const pillarExpandedData: Record<string, {
  subtitle: string;
  leadParagraph: string;
  cadence: string;
  caseStudyRef: { title: string; client: string; metric: string; link: string };
  principles: string[];
}> = {
  strategy: {
    subtitle: 'De-risk product roadmaps, calculate unit-economics, and construct defensible AI advantages.',
    leadParagraph: 'We turn ambiguous enterprise objectives into crystal-clear technical blueprints. Our senior strategists evaluate customer demand, model infrastructure costs per active user, and define the minimal architectural surface required to achieve market fit fast.',
    cadence: '1-to-2 week executive architectural discovery with direct principal engineer pairing.',
    caseStudyRef: {
      title: 'Autonomous Reconciliation & Risk Engine',
      client: 'Tier-1 Asset Management & Banking Group',
      metric: '94% decrease in transaction verification latency',
      link: '/work/case-study-01'
    },
    principles: [
      'North-star alignment between engineering capacity and commercial revenue',
      'COGS and infrastructure cost modeling before writing line one of code',
      'Zero-bureaucracy roadmaps prioritizing high-leverage features'
    ]
  },
  design: {
    subtitle: 'Human-centered interfaces, accessible component systems, and high-conversion user workflows.',
    leadParagraph: 'Digital products succeed or fail on the clarity of their mental models. We craft pixel-perfect, accessible user interfaces backed by comprehensive Figma design systems, interactive prototypes, and Zapier-grade micro-interactions.',
    cadence: 'Continuous 2-week agile design sprints synchronized with engineering pull-requests.',
    caseStudyRef: {
      title: 'Clinical Knowledge Workflows',
      client: 'Multinational Health Diagnostics Provider',
      metric: 'Saved 4.2 hours per week per physician',
      link: '/work/case-study-02'
    },
    principles: [
      'Token-driven design architectures enabling instant global theming',
      'Unambiguous visual states for autonomous actions (running, done, paused)',
      'Rigorous accessibility (WCAG AA/AAA) and cross-platform consistency'
    ]
  },
  ai: {
    subtitle: 'Autonomous agents, multimodal intelligence, and fine-tuned enterprise language models.',
    leadParagraph: 'Avoid reckless wrapper hype. We engineer cognitive systems featuring multi-agent coordination, graph-augmented vector retrieval (RAG), and deterministic safety guardrails engineered for low latency and predictable token economics.',
    cadence: '4-to-6 week sprint from model benchmarking to live production deployment.',
    caseStudyRef: {
      title: 'Autonomous Reconciliation & Risk Engine',
      client: 'Tier-1 Asset Management & Banking Group',
      metric: '10M+ automated monthly reconciliations',
      link: '/work/case-study-01'
    },
    principles: [
      'Bifurcation between probabilistic LLM reasoning and deterministic API execution',
      'Air-gapped PII/PHI scrubbing prior to inference evaluation',
      'Comprehensive benchmark evaluation suites tracking hallucination rates'
    ]
  },
  technology: {
    subtitle: 'Engineered for resilience, high concurrency, sub-second latency, and zero downtime.',
    leadParagraph: 'From reactive modern frontends in React and Next.js to distributed containerized backends on Kubernetes, our staff engineers build software capable of processing millions of concurrent transactions with zero data loss.',
    cadence: 'Continuous deployment via GitOps with ephemeral preview environments.',
    caseStudyRef: {
      title: 'Global Supply Chain & ERP Automation Bus',
      client: 'Global Logistics & Freight Enterprise',
      metric: '120,000 monthly clearances with zero errors',
      link: '/work/case-study-03'
    },
    principles: [
      '100% strict TypeScript typing across all frontend and backend contracts',
      'Event-driven asynchronous messaging eliminating distributed locks',
      'Multi-region automated database failover with sub-10s recovery (RTO)'
    ]
  },
  marketing: {
    subtitle: 'Operational enablement, RevOps pipelines, and workflow automations for high-output functional teams.',
    leadParagraph: 'Engineering speed is limited when operations and sales workflows are fragmented. We implement modern GitOps pipelines, bi-directional CRM synchronizations, automated billing metering, and developer productivity portals.',
    cadence: '2-week rapid enablement sprints with immediate ROI telemetry.',
    caseStudyRef: {
      title: 'Global Supply Chain & ERP Automation Bus',
      client: 'Global Logistics & Freight Enterprise',
      metric: 'Reduced customs dwell time from 5 days to 4 hours',
      link: '/work/case-study-03'
    },
    principles: [
      'Two-way sub-second sync between product telemetry and CRM records',
      'Automated deal desk routing dynamically matching rep capacity',
      'Self-serve developer portals with interactive sandboxes and SDK code-gen'
    ]
  }
};

export const PillarDetailPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const location = useLocation();
  const pathCategory = location.pathname.split('/')[2];
  const resolvedCategory = category || pathCategory || '';
  const pillarKey = resolvedCategory.toLowerCase();
  const pillar = servicesPillarsData[pillarKey as keyof typeof servicesPillarsData];
  const expanded = pillarExpandedData[pillarKey];

  if (!pillar || !expanded) {
    return <Navigate to="/services" replace />;
  }

  const IconComp = pillarIcons[pillarKey] || Zap;

  // Other pillars for navigation
  const otherPillars = Object.entries(servicesPillarsData).filter(([k]) => k !== pillarKey);

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/services" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{pillar.title}</span>
        </nav>

        {/* Hero Section */}
        <div style={{ maxWidth: 880, marginBottom: 52 }}>

          <h1 className="display-xl" style={{ marginBottom: 18, lineHeight: 1.15 }}>
            {pillar.title}
          </h1>
          <p style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--color-ink-mid)', marginBottom: 20, fontWeight: 500 }}>
            {expanded.subtitle}
          </p>
          <p className="body-lg" style={{ color: 'var(--color-body)', marginBottom: 32, lineHeight: 1.65 }}>
            {expanded.leadParagraph}
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link 
              to={`/start-a-project?service=${pillarKey}`} 
              className="btn-primary"
              style={{ padding: '14px 26px', fontSize: '15px' }}
            >
              <span>Scope {pillar.title} Initiative</span>
              <ArrowRight size={15} />
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary"
              style={{ padding: '14px 22px', fontSize: '15px' }}
            >
              <ArrowLeft size={15} />
              <span>All Capabilities</span>
            </Link>
          </div>
        </div>

        {/* Foundational Principles Strip */}
        <div 
          style={{
            backgroundColor: 'var(--color-canvas-soft)',
            border: '1px solid var(--color-hairline-strong)',
            borderRadius: 'var(--radius-xl)',
            padding: '32px 36px',
            marginBottom: '56px',
          }}
        >
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', textTransform: 'none', letterSpacing: '0.06em', fontWeight: 700, marginBottom: 16 }}>
            Core Architectural Principles
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
            {expanded.principles.map((pr, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <CheckCircle2 size={16} color="#108548" style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ fontSize: '14px', color: 'var(--color-ink)', lineHeight: 1.5, fontWeight: 500 }}>{pr}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Individual Capabilities Grid */}
        <div style={{ marginBottom: 64 }}>

          <h2 className="display-sm" style={{ marginBottom: 28 }}>
            Detailed Offerings within {pillar.title}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 24 }}>
            {pillar.items.map((item, idx) => {
              const detail = allServiceDetails[item.slug];
              return (
                <article
                  key={item.name}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '32px',
                    boxShadow: '0 4px 16px rgba(32, 21, 21, 0.03)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.15s ease, border-color 0.15s ease',
                  }}
                  className="step-card"
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700 }}>
                        0{idx + 1}
                      </span>
                      <span className="step-type-badge badge-trigger" style={{ fontSize: '11px' }}>
                        Production Ready
                      </span>
                    </div>

                    <Link to={`/services/${pillarKey}/${item.slug}`} style={{ textDecoration: 'none' }}>
                      <h3 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '10px' }}>
                        {item.name}
                      </h3>
                    </Link>

                    <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {item.desc}
                    </p>

                    {detail && detail.stack && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
                        {detail.stack.slice(0, 4).map(st => (
                          <span
                            key={st}
                            style={{
                              padding: '3px 8px',
                              backgroundColor: 'var(--color-canvas-soft)',
                              border: '1px solid var(--color-hairline)',
                              borderRadius: 'var(--radius-pill)',
                              fontSize: '11px',
                              fontFamily: 'var(--font-mono)',
                              color: 'var(--color-ink-mid)',
                            }}
                          >
                            {st}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div style={{ paddingTop: '18px', borderTop: '1px solid var(--color-hairline-soft)', display: 'flex', gap: 10 }}>
                    <Link
                      to={`/services/${pillarKey}/${item.slug}`}
                      className="btn-secondary"
                      style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '13px' }}
                    >
                      <span>Deep Dive</span>
                      <ArrowRight size={13} />
                    </Link>
                    <Link
                      to={`/start-a-project?service=${item.slug}`}
                      className="btn-primary"
                      style={{ padding: '10px 16px', fontSize: '13px' }}
                    >
                      <span>Scope</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Featured Case Study Card - Stripe Dark Shell */}
        <div
          className="cta-wave-banner"
          style={{
            padding: '40px',
            marginBottom: '64px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 28,
            alignItems: 'center'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#00d4ff', textTransform: 'none', letterSpacing: '0.08em', marginBottom: 10, fontWeight: 600 }}>
              <Award size={14} />
              <span>Proven Impact in {pillar.title}</span>
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 500, color: '#ffffff', marginBottom: 12 }}>
              {expanded.caseStudyRef.title}
            </h3>
            <p style={{ fontSize: '14.5px', color: '#cad5e2', lineHeight: 1.6, marginBottom: 16 }}>
              Client: {expanded.caseStudyRef.client}
            </p>
            <div style={{ fontSize: '16px', color: '#00d4ff', fontWeight: 500 }}>
              "{expanded.caseStudyRef.metric}"
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
            <Link
              to={expanded.caseStudyRef.link}
              className="btn-secondary-on-dark"
              style={{ padding: '12px 24px', fontSize: '14px' }}
            >
              <span>View Case Study Architecture</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/start-a-project"
              style={{ color: '#a8c3de', fontSize: '13px', textDecoration: 'none' }}
            >
              Discuss similar outcomes with an architect →
            </Link>
          </div>
        </div>

        {/* Explore Other Capability Domains */}
        <div style={{ marginBottom: 64 }}>

          <h2 className="title-lg" style={{ marginBottom: 24 }}>
            Explore Neighboring Domains
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: 16 }}>
            {otherPillars.map(([k, p]) => (
              <Link
                key={k}
                to={`/services/${k}`}
                style={{
                  backgroundColor: 'var(--color-canvas-soft)',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-md)',
                  padding: '20px',
                  textDecoration: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
                className="step-card"
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 4 }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>
                    {p.items.length} capabilities
                  </div>
                </div>
                <ArrowRight size={14} color="var(--color-primary)" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="cta-wave-banner" style={{ padding: '52px', textAlign: 'center' }}>
          <h2 className="display-md" style={{ marginBottom: 12 }}>
            Ready to integrate {pillar.title}?
          </h2>
          <p style={{ color: 'var(--color-body)', fontSize: '16px', maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.6 }}>
            Connect with an ENTWY staff architect today for a confidential scoping session and technical architecture roadmap.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link 
              to={`/start-a-project?service=${pillarKey}`} 
              className="btn-secondary-on-dark" 
              style={{ padding: '12px 24px' }}
            >
              <span>Book Scoping Session</span>
              <ArrowRight size={15} />
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary-on-dark" 
              style={{ padding: '12px 20px' }}
            >
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
