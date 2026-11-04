import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesPillarsData } from '../data/sitemapData';
import {
  ArrowRight,
  Bot,
  Code,
  Compass,
  Palette,
  Sparkles,
  TrendingUp,
  Zap,
  Share2,
  ShieldCheck,
  Clock,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
  Server,
  Workflow,
  HelpCircle,
  ChevronDown,
  Lock,
  Flame,
  Award
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number | string; color?: string }>> = {
  Compass,
  Palette,
  Bot,
  Code,
  TrendingUp,
  Share2,
};

const engagementModels = [
  {
    title: 'Embedded Strike Team',
    badge: 'High Velocity',
    subtitle: 'Direct collaboration with senior staff talent',
    desc: 'An integrated unit consisting of 1 Staff Engineer, 1 Systems Architect, and 1 Principal Product Designer embedded directly into your Slack, Linear, and Git workflows. We operate with zero management overhead.',
    idealFor: 'Series A to pre-IPO teams accelerating product roadmaps or solving deep architectural bottlenecks.',
    cadence: 'Daily async updates, bi-weekly milestone demonstrations, continuous code commits.',
    deliverables: ['Weekly production PRs', 'Architecture RFC reviews', 'Design token libraries', 'CI/CD pipeline hardening'],
  },
  {
    title: 'Turnkey Platform Build',
    badge: '0-to-1 & Modernization',
    subtitle: 'From initial hypothesis to scaled production',
    desc: 'Full-lifecycle product engineering where ENTWY owns the complete stack from product discovery and Figma systems through to high-concurrency microservices, cloud deployments, and billing integrations.',
    idealFor: 'Enterprises launching new digital ventures or migrating high-stakes legacy monoliths.',
    cadence: 'Fixed 6-to-10 week delivery cycles with strict sprint milestones and deterministic SLA handovers.',
    deliverables: ['Production cloud infrastructure', '100% IP & source code ownership', 'Automated test suites', 'Handover documentation'],
  },
  {
    title: 'AI & Context Architecture Advisory',
    badge: 'Cognitive Systems',
    subtitle: 'Enterprise-grade agentic & RAG infrastructure',
    desc: 'Bespoke strategic advisory helping technical leaders evaluate AI feasibility, architect Model Context Protocol (MCP) servers, fine-tune domain models, and deploy deterministic guardrails for probabilistic LLMs.',
    idealFor: 'SaaS and enterprise platforms seeking to integrate autonomous workflows safely into existing applications.',
    cadence: '4-week intense architectural sprint with prototype benchmark evaluations.',
    deliverables: ['AI Feasibility & ROI Benchmark', 'RAG retrieval graph blueprint', 'Cryptographic PII filter specs', 'Working pilot prototype'],
  },
];

const enterpriseGuarantees = [
  {
    icon: Lock,
    title: '100% Exclusive IP Ownership',
    desc: 'From Day 1, all source code, Figma design assets, database schemas, and AI prompts belong exclusively to your business. We deliver directly to your private GitHub/GitLab repositories with clean copyright assignments.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security & Compliance',
    desc: 'Engineered with SOC-2 Type II, HIPAA, and GDPR compliance baselines in mind. We enforce strict role-based access controls (RBAC), end-to-end payload encryption, and automated vulnerability dependency scanning.',
  },
  {
    icon: Flame,
    title: 'Deterministic Zero-Downtime Cutover',
    desc: 'Every platform deployment utilizes blue-green container routing and canary traffic splitting with instantaneous rollback triggers. Your active user transactions and customer revenue are never interrupted.',
  },
  {
    icon: Clock,
    title: 'Sub-400ms P99 Latency Budgets',
    desc: 'We enforce rigorous latency and memory budgets across every route. Frontends leverage edge caching and SSR optimization; backends feature Redis cluster caching and indexed PostgreSQL read replicas.',
  },
];

const techStackMatrix = [
  {
    category: 'Frontend & UI Craft',
    stack: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Figma Tokens', 'Radix UI', 'GSAP'],
  },
  {
    category: 'Backend & Cloud Systems',
    stack: ['Node.js', 'Go (Golang)', 'Python FastAPI', 'PostgreSQL', 'Redis Cluster', 'Kafka', 'GraphQL', 'REST'],
  },
  {
    category: 'AI & Cognitive Infrastructure',
    stack: ['Anthropic Claude 3.5', 'OpenAI GPT-4o', 'LangGraph', 'Qdrant', 'Pinecone', 'pgvector', 'Ollama', 'Llama 3'],
  },
  {
    category: 'Cloud, DevOps & Observability',
    stack: ['AWS', 'Cloudflare Workers', 'Kubernetes', 'Docker', 'Datadog', 'OpenTelemetry', 'GitHub Actions', 'Vercel'],
  },
  {
    category: 'Protocols & Integrations',
    stack: ['Model Context Protocol (MCP)', 'Svix Webhooks', 'Stripe Billing & Connect', 'Meta WhatsApp API', 'gRPC'],
  },
];

const faqs = [
  {
    q: 'How fast can an ENTWY strike team spin up on our project?',
    a: 'We can typically kick off an engagement within 5 to 7 business days following our initial scoping session. By week 2, your team will have access to a live staging environment with running preview deployments.',
  },
  {
    q: 'Who actually writes the code and designs the systems?',
    a: 'Only senior staff engineers, lead systems architects, and principal designers. Unlike traditional consulting firms, we do not staff your project with junior offshore benches or account managers. You collaborate directly with the builders.',
  },
  {
    q: 'How do you handle billing and project pricing?',
    a: 'We operate on transparent, predictable weekly sprint retainers for embedded teams, or fixed-scope milestone delivery contracts for turnkey builds. There are never surprise billing adjustments or opaque time-and-materials line items.',
  },
  {
    q: 'Can you modernize our platform without stopping our live business?',
    a: 'Yes. We specialize in Strangler Fig migrations, building modern API proxies and event-driven microservices that gradually siphon traffic from monolithic systems until the legacy architecture can be safely retired with zero downtime.',
  },
  {
    q: 'What happens after our product or platform is launched?',
    a: 'Every deployment includes a 30-day comprehensive production warranty covering bug fixes, performance monitoring, and knowledge transfer sessions. We also offer ongoing SLA-backed platform maintenance retainer options.',
  },
];

export const ServicesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="page-shell">
      <div className="container">
        {/* Header Band */}
        <div style={{ maxWidth: 880, marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span className="step-type-badge badge-trigger" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={12} /> Comprehensive Engineering Services
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
              Enterprise Production Standards
            </span>
          </div>

          <h1 className="display-xl" style={{ marginBottom: 20, lineHeight: 1.15 }}>
            Strategy, design, and engineering <br />
            that work together.
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-body)', lineHeight: 1.6 }}>
            Bring us an ambitious business challenge. We architect the underlying cloud platforms, craft Zapier-grade interfaces, and engineer autonomous agentic workflows designed to withstand enterprise scale.
          </p>
        </div>

        {/* Executive Impact Metrics Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '16px',
            backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
            border: '1px solid var(--color-hairline, #e3e8ee)',
            borderRadius: 'var(--radius-xl)',
            padding: '24px 28px',
            marginBottom: '56px',
            boxShadow: 'var(--shadow-stripe-card)',
          }}
        >
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.2 }}>
              6 Weeks
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Median 0-to-Production Velocity
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.2 }}>
              99.99%
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Production Uptime SLA Guarantee
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.2 }}>
              100%
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Exclusive Client IP Ownership
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.2 }}>
              &lt; 400ms
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              P99 Latency Budget Enforcement
            </p>
          </div>
        </div>

        {/* Quick Pillar Jump Navigation */}
        <div style={{ marginBottom: '44px' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
            Explore Core Capability Guilds
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {Object.entries(servicesPillarsData).map(([key, pillar]) => (
              <a
                key={key}
                href={`#${key}`}
                style={{
                  padding: '7px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--color-hairline-strong)',
                  backgroundColor: '#ffffff',
                  color: 'var(--color-ink)',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 500,
                  transition: 'all 0.15s ease',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                }}
              >
                {pillar.title}
              </a>
            ))}
            <a
              href="#engagement-models"
              style={{
                padding: '7px 16px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--color-hairline-strong)',
                backgroundColor: 'var(--color-primary-bg-subdued)',
                color: 'var(--color-primary)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
              }}
            >
              Engagement Models
            </a>
            <a
              href="#tech-matrix"
              style={{
                padding: '7px 16px',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--color-hairline-strong)',
                backgroundColor: '#ffffff',
                color: 'var(--color-ink)',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 500,
              }}
            >
              Technology Matrix
            </a>
          </div>
        </div>

        {/* 6 Pillars Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '72px' }}>
          {Object.entries(servicesPillarsData).map(([key, pillar]) => {
            const IconComp = iconMap[pillar.iconName] || Zap;
            return (
              <section
                key={key}
                id={key}
                style={{
                  backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
                  border: '1px solid var(--color-hairline, #e3e8ee)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '40px',
                  boxShadow: 'var(--shadow-stripe-card)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid var(--color-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)' }}>
                      <IconComp size={22} />
                    </div>
                    <div>
                      <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginTop: '2px', fontWeight: 600 }}>
                        {pillar.title}
                      </h2>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <Link to={`/services/${key}`} className="btn-secondary" style={{ padding: '8px 18px', fontSize: '14px' }}>
                      <span>View Guild Overview</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link to="/start-a-project" className="btn-primary" style={{ padding: '8px 18px', fontSize: '14px' }}>
                      <span>Scope {pillar.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <p style={{ fontSize: '16px', color: 'var(--color-body)', marginBottom: '28px', maxWidth: '820px', lineHeight: 1.6, fontWeight: 400 }}>
                  {pillar.desc}
                </p>

                {/* Sub-items grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
                  {pillar.items.map((item) => (
                    <Link
                      key={item.name}
                      to={`/services/${key}/${item.slug}`}
                      style={{
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--color-hairline)',
                        borderRadius: 'var(--radius-lg)',
                        padding: '24px',
                        boxShadow: 'var(--shadow-stripe-sm)',
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease',
                      }}
                      className="step-card"
                    >
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                          {item.name}
                        </h3>
                        <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.55, marginBottom: '20px', fontWeight: 400 }}>
                          {item.desc}
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>
                        <span>Explore Capability</span>
                        <ArrowRight size={13} />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Engagement Models Section */}
        <section
          id="engagement-models"
          style={{
            marginBottom: '72px',
          }}
        >
          <div style={{ maxWidth: '800px', marginBottom: '36px' }}>
            <span className="step-type-badge badge-trigger" style={{ marginBottom: '12px', display: 'inline-block' }}>
              How We Partner
            </span>
            <h2 className="display-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              Three flexible engagement models.
            </h2>
            <p className="body-lg" style={{ color: 'var(--color-body)' }}>
              Whether you need to augment an existing engineering team with principal firepower or outsource a greenfield platform completely, we structure partnerships for maximum velocity and zero red tape.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '24px' }}>
            {engagementModels.map((model) => (
              <div
                key={model.title}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '32px',
                  boxShadow: 'var(--shadow-stripe-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'var(--color-primary-bg-subdued)',
                        color: 'var(--color-primary)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-pill)',
                        fontWeight: 600,
                      }}
                    >
                      {model.badge}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                    {model.title}
                  </h3>
                  <div style={{ fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 500, marginBottom: '16px' }}>
                    {model.subtitle}
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '20px', fontWeight: 400 }}>
                    {model.desc}
                  </p>

                  <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '16px', marginBottom: '16px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Best Suited For
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--color-ink-mid)', margin: 0, lineHeight: 1.5 }}>
                      {model.idealFor}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '16px', marginBottom: '24px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Key Deliverables
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.7 }}>
                      {model.deliverables.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/start-a-project"
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', padding: '10px 16px', fontSize: '14px' }}
                >
                  <span>Select {model.title}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Guarantees & SLAs */}
        <section
          style={{
            backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
            border: '1px solid var(--color-hairline, #e3e8ee)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            marginBottom: '72px',
            boxShadow: 'var(--shadow-stripe-card)',
          }}
        >
          <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <span className="step-type-badge badge-trigger" style={{ marginBottom: '12px', display: 'inline-block' }}>
              Built for Serious Operators
            </span>
            <h2 className="display-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              Enterprise production guarantees.
            </h2>
            <p className="body-lg" style={{ color: 'var(--color-body)' }}>
              We do not treat client engagements as experimental playgrounds. We build mission-critical infrastructure backed by explicit contractual guarantees.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            {enterpriseGuarantees.map((g) => {
              const GIcon = g.icon;
              return (
                <div
                  key={g.title}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: 'var(--color-primary-bg-subdued)',
                      color: 'var(--color-primary)',
                      display: 'grid',
                      placeItems: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    <GIcon size={20} />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                    {g.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                    {g.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technology Ecosystem / Matrix */}
        <section
          id="tech-matrix"
          style={{
            marginBottom: '72px',
          }}
        >
          <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <span className="step-type-badge badge-trigger" style={{ marginBottom: '12px', display: 'inline-block' }}>
              Standardized Stack
            </span>
            <h2 className="display-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              Battle-tested technology ecosystem.
            </h2>
            <p className="body-lg" style={{ color: 'var(--color-body)' }}>
              We select modern, resilient technologies with immense developer ecosystems. No unmaintained boutique frameworks or vendor lock-in.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {techStackMatrix.map((item) => (
              <div
                key={item.category}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '16px',
                  boxShadow: 'var(--shadow-stripe-sm)',
                }}
              >
                <div style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--color-ink)', minWidth: '220px' }}>
                  {item.category}
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-start' }}>
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '12.5px',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'var(--color-canvas-soft)',
                        border: '1px solid var(--color-hairline)',
                        padding: '4px 12px',
                        borderRadius: 'var(--radius-pill)',
                        color: 'var(--color-ink-mid)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section
          style={{
            marginBottom: '72px',
          }}
        >
          <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <span className="step-type-badge badge-trigger" style={{ marginBottom: '12px', display: 'inline-block' }}>
              Clarity & Transparency
            </span>
            <h2 className="display-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              Frequently asked questions.
            </h2>
            <p className="body-lg" style={{ color: 'var(--color-body)' }}>
              Everything you need to know about partnering with ENTWY for software engineering, design, and AI automation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)' }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      color="var(--color-muted)"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid var(--color-canvas-soft)' }}>
                      <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom Dark Wave Banner CTA */}
        <div
          className="cta-wave-banner"
          style={{
            marginTop: '36px',
            padding: '52px',
            textAlign: 'center',
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 600 }}>
            Ready to integrate custom intelligence?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 400 }}>
            Our cross-functional strike team is ready to scope your architecture, audit your technical dependencies, and ship production software with enterprise SLAs.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
              <span>Start a project today</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/work" className="btn-secondary-on-dark" style={{ padding: '13px 22px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.25)' }}>
              <span>View Case Studies</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
