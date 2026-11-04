import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { processStagesData } from '../data/sitemapData';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  GitCommit, 
  Layers, 
  Sparkles, 
  Zap,
  ChevronRight,
  ShieldCheck,
  Code2,
  Terminal,
  Cpu
} from 'lucide-react';

const stageSlugs: Record<string, string> = {
  'our-approach': 'Our Approach',
  'approach': 'Our Approach',
  '1': 'Our Approach',
  'discovery-strategy': 'Discovery & Strategy',
  'discovery': 'Discovery & Strategy',
  '2': 'Discovery & Strategy',
  'design-build': 'Design & Build',
  'build': 'Design & Build',
  '3': 'Design & Build',
  'test-refine': 'Test & Refine',
  'test': 'Test & Refine',
  '4': 'Test & Refine',
  'launch-scale': 'Launch & Scale',
  'launch': 'Launch & Scale',
  '5': 'Launch & Scale',
};

const stageDeepDives: Record<string, {
  methodology: string;
  activities: string[];
  qualityGates: string[];
  clientCadence: string;
}> = {
  'Our Approach': {
    methodology: 'Engineering with direct principal involvement. We do not maintain junior bench layers or account management intermediaries. You collaborate directly with staff software engineers and systems architects.',
    activities: [
      'Architectural principles workshop & compliance boundary definition',
      'Establishing shared Git repository, CI/CD harnesses, and Discord/Slack war-rooms',
      'Definition of done & cryptographic security posture agreements'
    ],
    qualityGates: ['Security baseline signed off', 'Zero unaccounted external dependencies', 'Shared telemetry setup'],
    clientCadence: 'Daily asynchronous standups via Slack; weekly 30-minute sprint demo.'
  },
  'Discovery & Strategy': {
    methodology: 'De-risking technical assumptions before writing production code. We audit API contracts, user transaction patterns, database read/write ratios, and potential latency hot-spots.',
    activities: [
      'User workflow telemetry audit & friction point mapping',
      'Database schema relational mapping & entity lifecycle modeling',
      'Third-party vendor API rate limit and resilience testing'
    ],
    qualityGates: ['Entity schema approved', 'API latency budgets verified', 'Prioritized backlog locked'],
    clientCadence: 'Collaborative Figma & Notion working sessions every 48 hours.'
  },
  'Design & Build': {
    methodology: 'Parallel frontend and backend execution. Designers construct atomic tokens in Figma while backend engineers stand up containerized API routes with typed contracts.',
    activities: [
      'High-fidelity Zapier-grade design tokens and interactive prototypes',
      'Event-driven backend implementation with strict TypeScript and schema validation',
      'Automated pull-request preview environments generated for every feature'
    ],
    qualityGates: ['100% TypeScript strict type safety', 'Ephemeral preview builds passing', 'No console errors'],
    clientCadence: 'Continuous preview URL sharing; bi-weekly milestone delivery review.'
  },
  'Test & Refine': {
    methodology: 'Battle-testing under production load conditions. We simulate packet loss, network throttling, API outage cascades, and burst traffic to prove platform resiliency.',
    activities: [
      'Distributed load testing simulating 10x projected peak concurrency',
      'Automated security vulnerability and dependency CVE auditing',
      'End-to-end user testing across desktop, tablet, and mobile browsers'
    ],
    qualityGates: ['Load testing verified at 99.9th percentile latency', 'SOC-2 / OWASP compliance verified', 'Zero P0/P1 defects'],
    clientCadence: 'Bug triage syncs every 24 hours until release candidate sign-off.'
  },
  'Launch & Scale': {
    methodology: 'Deterministic zero-downtime cutover. We employ blue-green container routing and canary traffic splitting to guarantee zero disruption to active customer traffic.',
    activities: [
      'DNS cutover and automated SSL certificate validation',
      'Real-time Datadog / Grafana observability and PagerDuty alerting',
      'Comprehensive codebase handover, documentation walkthrough, and training'
    ],
    qualityGates: ['Zero dropped user requests during cutover', 'All telemetry reporting healthy', '100% IP & documentation transferred'],
    clientCadence: '48-hour live war-room monitoring followed by 30-day warranty support.'
  }
};

export const ProcessPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const activeTitle = id ? (stageSlugs[id] || null) : null;
  const stageRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (activeTitle && stageRefs.current[activeTitle]) {
      stageRefs.current[activeTitle]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeTitle]);

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb if sub-route */}
        {activeTitle && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/process" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Process</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{activeTitle}</span>
          </nav>
        )}

        {/* Header */}
        <div style={{ maxWidth: 840, marginBottom: 56 }}>

          <h1 className="display-xl" style={{ marginBottom: 18 }}>
            A clear process, from the first conversation to launch.
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-body)' }}>
            We define the problem together, build in focused iterations, and review working software with you throughout delivery.
          </p>
        </div>

        {/* Quick Nav for the 5 Stages */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 48 }}>
          {processStagesData.map((stage) => {
            const slug = stage.slug || stage.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            const isSelected = activeTitle === stage.title;
            return (
              <Link
                key={stage.title}
                to={`/process/${slug}`}
                style={{
                  padding: '7px 16px',
                  borderRadius: '9999px',
                  border: isSelected ? '1px solid var(--color-primary, #000000)' : '1px solid var(--color-hairline, #f0f0f3)',
                  backgroundColor: isSelected ? 'var(--color-primary, #000000)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--color-ink, #171717)',
                  textDecoration: 'none',
                  fontSize: '13.5px',
                  fontFamily: "var(--font-body, 'Inter', sans-serif)",
                  fontWeight: isSelected ? 600 : 500,
                  transition: 'all 0.15s ease',
                  boxShadow: isSelected ? '0 2px 8px rgba(83, 58, 253, 0.25)' : 'none',
                }}
              >
                0{stage.step}. {stage.title}
              </Link>
            );
          })}
        </div>

        {/* 5 Process Stages as Zapier Chain */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '960px', margin: '0 auto 64px' }}>
          {processStagesData.map((stage) => {
            const isSelected = activeTitle === stage.title;
            const deepDive = stageDeepDives[stage.title];
            const slug = stage.slug || stage.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

            return (
              <article
                key={stage.title}
                id={slug}
                ref={(el) => { stageRefs.current[stage.title] = el; }}
                style={{
                  backgroundColor: '#ffffff',
                  border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px',
                  boxShadow: isSelected ? '0 12px 32px rgba(83, 58, 253, 0.12)' : '0 4px 16px rgba(13, 37, 61, 0.04)',
                  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '28px', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 8 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-display, 'Inter', sans-serif)",
                          fontSize: '24px',
                          fontWeight: 700,
                          color: 'var(--color-primary, #000000)',
                          lineHeight: 1,
                        }}
                      >
                        0{stage.step}
                      </span>
                    </div>

                    <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginBottom: '8px' }}>
                      <Link to={`/process/${slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {stage.title}
                      </Link>
                    </h2>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '16px' }}>
                      <Clock size={14} />
                      <span>{stage.timeframe}</span>
                    </div>

                    <p style={{ fontSize: '15.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {stage.description}
                    </p>

                    <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '16px', marginBottom: 20 }}>
                      <div style={{ fontSize: '11.5px', fontFamily: 'var(--font-mono)', color: 'var(--color-muted)', textTransform: 'none', marginBottom: '10px', fontWeight: 700 }}>
                        Key Deliverables &amp; Artifacts
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {stage.deliverables.map((deliv) => (
                          <div key={deliv} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--color-ink-mid)' }}>
                            <CheckCircle2 size={15} color="#108548" />
                            <span>{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to={`/process/${slug}`} 
                      className="btn-primary" 
                      style={{ padding: '10px 18px', fontSize: '13.5px', width: 'auto', display: 'inline-flex' }}
                    >
                      <span>Explore Dedicated Stage 0{stage.step} Page</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Deep Dive Specification */}
                  {deepDive && (
                    <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '24px', border: '1px solid var(--color-hairline)' }}>
                      <h3 className="section-title">How this stage works</h3>
                      <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, marginBottom: 16 }}>
                        {deepDive.methodology}
                      </p>

                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'none', color: 'var(--color-muted)', fontWeight: 700, marginBottom: 6 }}>
                          Key Execution Activities
                        </div>
                        <ul style={{ margin: 0, paddingLeft: 18, fontSize: '13px', color: 'var(--color-ink-mid)', lineHeight: 1.5 }}>
                          {deepDive.activities.map((act, i) => <li key={i}>{act}</li>)}
                        </ul>
                      </div>

                      <div style={{ marginBottom: 14 }}>
                        <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', textTransform: 'none', color: 'var(--color-muted)', fontWeight: 700, marginBottom: 6 }}>
                          Stage Quality Gates
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                          {deepDive.qualityGates.map((qg, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '12.5px', color: '#108548', fontWeight: 500 }}>
                              <ShieldCheck size={14} />
                              <span>{qg}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ paddingTop: 12, borderTop: '1px solid var(--color-hairline)', fontSize: '12px', color: 'var(--color-muted)' }}>
                        <strong>Cadence:</strong> {deepDive.clientCadence}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="cta-wave-banner" style={{ marginTop: '72px', padding: '52px', textAlign: 'center' }}>
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: 12, fontWeight: 600 }}>
            Experience our velocity first-hand
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 400 }}>
            Schedule an initial 30-minute discovery call with our engineering partners to review your product roadmap and architectural targets.
          </p>
          <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ display: 'inline-flex', padding: '12px 24px' }}>
            <span>Book Discovery Call</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
