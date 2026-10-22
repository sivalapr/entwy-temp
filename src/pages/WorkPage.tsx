import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/sitemapData';
import { WorkEditorialHero } from '../components/WorkEditorialHero';
import { 
  ArrowRight, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Cpu, 
  Building2,
  Terminal,
  Quote,
  Zap,
  ArrowUpRight
} from 'lucide-react';

const clientQuotes = [
  {
    quote: "ENTWY’s strike team took our multi-million transaction reconciliation pipeline from an unmaintainable legacy monolith to a sub-second event-driven engine in just six weeks. Zero data drift, zero downtime.",
    author: "Alexander Reed",
    role: "VP of Engineering",
    company: "Tier-1 Asset Management Group",
    metric: "94% Latency Drop",
  },
  {
    quote: "Building HIPAA-compliant AI is full of regulatory traps. ENTWY designed our air-gapped clinical knowledge retrieval engine with strict deterministic RBAC guardrails. Our clinicians couldn't be happier.",
    author: "Dr. Elena Vance",
    role: "Chief Medical Information Officer",
    company: "Global Healthcare Diagnostics",
    metric: "4.2 hrs/wk Saved per Physician",
  },
  {
    quote: "We replaced three disparate integration vendors with a single unified ERP automation bus built by ENTWY. Our port customs filing throughput increased by 4x without hiring additional operations staff.",
    author: "Marcus Thorne",
    role: "Head of Digital Operations",
    company: "Intercontinental Freight Network",
    metric: "120,000 Auto-Clearances/mo",
  },
];

const deliveryPhases = [
  {
    step: '01',
    name: 'Architecture & Boundary Discovery',
    duration: 'Week 1',
    desc: 'We map system entities, vendor API rate limits, database read/write ratios, and compliance boundaries before writing production code.',
  },
  {
    step: '02',
    name: 'Parallel Frontend & API Scaffold',
    duration: 'Weeks 2–3',
    desc: 'Designers craft high-fidelity Figma tokens while engineers stand up containerized API routes with typed contracts and live preview builds.',
  },
  {
    step: '03',
    name: 'Autonomous Workflows & Security Audit',
    duration: 'Weeks 4–5',
    desc: 'Connecting vector indices, autonomous agent reasoning loops, automated SOC-2/HIPAA test harnesses, and distributed load simulation.',
  },
  {
    step: '04',
    name: 'Zero-Downtime Cutover & IP Handover',
    duration: 'Week 6+',
    desc: 'Canary traffic splitting, real-time observability telemetry, full Git repository transfer, and 30-day production warranty support.',
  },
];

export const WorkPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredCaseStudies = activeCategory === 'all'
    ? caseStudiesData
    : caseStudiesData.filter((cs) => cs.category === activeCategory);

  return (
    <div className="page-shell">
      <div className="container">
        {/* Editorial Work Introduction */}
        <WorkEditorialHero />

        {/* Quantified Portfolio Impact Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '16px',
            backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
            border: '1px solid var(--color-hairline, #e3e8ee)',
            borderRadius: 'var(--radius-xl)',
            padding: '24px 28px',
            marginBottom: '44px',
            boxShadow: 'var(--shadow-stripe-card)',
          }}
        >
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.2 }}>
              $45M+
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Enterprise Value Delivered
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.2 }}>
              10M+
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Monthly Automated Transactions
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.2 }}>
              0 Hours
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Downtime During Cutover
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.2 }}>
              100%
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              On-Time Milestone Delivery
            </p>
          </div>
        </div>

        {/* Category Filter Navigation */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '36px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-muted)', marginRight: '8px' }}>
            Filter by Domain:
          </span>
          {[
            { id: 'all', label: 'All Case Studies' },
            { id: 'fintech', label: 'FinTech & Banking' },
            { id: 'health', label: 'Healthcare & Clinical' },
            { id: 'saas', label: 'Cloud & Logistics' },
          ].map((tab) => {
            const isSelected = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '7px 18px',
                  borderRadius: 'var(--radius-pill)',
                  border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline-strong)',
                  backgroundColor: isSelected ? 'var(--color-primary)' : '#ffffff',
                  color: isSelected ? '#ffffff' : 'var(--color-ink)',
                  fontSize: '13.5px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Filtered Case Studies List */}
        <div id="case-studies" style={{ display: 'flex', flexDirection: 'column', gap: '36px', marginBottom: '72px' }}>
          {filteredCaseStudies.map((cs, idx) => (
            <article
              key={cs.id}
              id={cs.id}
              className="responsive-split"
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-hairline, #e3e8ee)',
                borderRadius: 'var(--radius-xl)',
                padding: '40px',
                boxShadow: 'var(--shadow-stripe-card)',
                display: 'grid',
                gap: '36px',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span className="step-type-badge badge-trigger">{cs.tag}</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                    {cs.timeline}
                  </span>
                </div>

                <Link to={`/work/${cs.id}`} style={{ textDecoration: 'none' }}>
                  <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginBottom: '14px', lineHeight: 1.25, fontWeight: 600 }}>
                    {cs.title}
                  </h2>
                </Link>

                <p style={{ fontSize: '15.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '20px', fontWeight: 300 }}>
                  {cs.overview}
                </p>

                {/* Stripe Measured Impact Pill Box */}
                <div
                  style={{
                    backgroundColor: 'var(--color-primary-bg-subdued, #ebebfd)',
                    border: '1px solid rgba(83, 58, 253, 0.2)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '16px 20px',
                    marginBottom: '24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'none', letterSpacing: '0.04em', marginBottom: '4px' }}>
                    <TrendingUp size={14} /> Measured Performance Impact
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--color-ink)', fontWeight: 500, margin: 0 }}>
                    {cs.impact}
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', marginRight: '6px' }}>
                    Production Stack:
                  </span>
                  {cs.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontSize: '12px',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'var(--color-canvas-soft)',
                        border: '1px solid var(--color-hairline)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-pill)',
                        color: 'var(--color-ink-mid)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Graphic Box - Stripe Dark Shell */}
              <div
                className="cta-wave-banner"
                style={{
                  padding: '32px',
                  color: '#ffffff',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', paddingBottom: '12px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#cad5e2', textTransform: 'none' }}>
                    Client Profile
                  </span>
                  <span style={{ fontSize: '11px', color: '#00d4ff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Sparkles size={11} /> Verified Architecture
                  </span>
                </div>
                <div style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '12px' }}>
                  {cs.client}
                </div>
                <p style={{ fontSize: '13.5px', color: '#cad5e2', lineHeight: 1.55, marginBottom: '24px', fontWeight: 300 }}>
                  Autonomous workflows configured with deterministic API rollback, role authorization, and tamper-proof audit logs.
                </p>
                <Link
                  to={`/work/${cs.id}`}
                  className="btn-secondary-on-dark"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '12px 20px' }}
                >
                  <span>View Full Architectural Blueprint</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Client Testimonials / Engineering Partner Voices */}
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
              Client Proof
            </span>
            <h2 className="display-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              What technical leaders say about ENTWY.
            </h2>
            <p className="body-lg" style={{ color: 'var(--color-body)' }}>
              Feedback from engineering executives who partnered with our strike teams to deliver mission-critical software.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
            {clientQuotes.map((q) => (
              <div
                key={q.author}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: 'var(--shadow-stripe-sm)',
                }}
              >
                <div>
                  <Quote size={24} color="var(--color-primary)" style={{ opacity: 0.5, marginBottom: '16px' }} />
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink)', lineHeight: 1.6, marginBottom: '24px', fontStyle: 'italic' }}>
                    "{q.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '16px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)' }}>
                    {q.author}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '8px' }}>
                    {q.role} · {q.company}
                  </div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: 'var(--color-primary-bg-subdued)',
                      color: 'var(--color-primary)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-pill)',
                      fontWeight: 600,
                    }}
                  >
                    {q.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4-Stage Delivery Lifecycle Methodology */}
        <section
          style={{
            marginBottom: '72px',
          }}
        >
          <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <span className="step-type-badge badge-trigger" style={{ marginBottom: '12px', display: 'inline-block' }}>
              Predictable Cadence
            </span>
            <h2 className="display-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              How we take projects across the finish line.
            </h2>
            <p className="body-lg" style={{ color: 'var(--color-body)' }}>
              A disciplined, milestone-driven execution cadence designed to eliminate scope drift and ship working production software rapidly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px' }}>
            {deliveryPhases.map((phase) => (
              <div
                key={phase.step}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  boxShadow: 'var(--shadow-stripe-sm)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-mono)' }}>
                    {phase.step}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                    {phase.duration}
                  </span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                  {phase.name}
                </h3>
                <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, margin: 0, fontWeight: 300 }}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Band */}
        <div 
          className="cta-wave-banner"
          style={{ 
            marginTop: '36px', 
            padding: '52px', 
            textAlign: 'center', 
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 300 }}>
            Ready to engineer your next platform?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 300 }}>
            Explore how ENTWY partners with fast-moving teams to deliver mission-critical platforms and autonomous workflows.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
              <span>Start a Project</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/services" className="btn-secondary-on-dark" style={{ padding: '13px 22px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.25)' }}>
              <span>Browse All Capabilities</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
