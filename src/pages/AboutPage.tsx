import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { aboutSectionsData } from '../data/sitemapData';
import { AboutCraftSection } from '../components/AboutCraftSection';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Compass, 
  HeartHandshake, 
  MapPin, 
  Sparkles, 
  Target, 
  Users, 
  Zap,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Terminal,
  Code2,
  Award,
  Globe2,
  Briefcase
} from 'lucide-react';

const sectionIcons: Record<string, React.ComponentType<{ size?: number | string; color?: string }>> = {
  'our-story': Compass,
  'story': Compass,
  'our-team': Users,
  'team': Users,
  'our-values': HeartHandshake,
  'values': HeartHandshake,
  'careers': Sparkles,
  'contact-us': MapPin,
  'contact': MapPin,
};

const aboutSlugAliases: Record<string, string> = {
  'story': 'our-story',
  'team': 'our-team',
  'values': 'our-values',
  'contact': 'contact-us',
};

const detailedSectionContent: Record<string, {
  paragraphs: string[];
  highlights: { title: string; desc: string }[];
}> = {
  'our-story': {
    paragraphs: [
      'ENTWY was founded on a singular observation: modern enterprises were spending millions on sprawling agency retainers and bloated consulting teams, only to end up with 80-page slide decks and brittle, unmaintainable software.',
      'We dismantled that traditional model entirely. We assemble small, elite strike teams composed strictly of staff-level software engineers, distributed systems architects, and product designers with deep craft. By cutting out junior bench layers, project coordinators, and bureaucratic middle management, we help our partners move from concept to enterprise production in weeks instead of quarters.',
      'Today, ENTWY powers mission-critical platforms, high-throughput financial transaction engines, HIPAA-compliant healthcare knowledge graphs, and autonomous agentic workflows for ambitious organizations globally.'
    ],
    highlights: [
      { title: 'Founding Thesis', desc: 'The best software is built by small, autonomous strike teams with direct access to decision-makers.' },
      { title: 'Zero Throwaway Code', desc: 'Every line of code is engineered with strict type safety, CI/CD automation, and enterprise security from day one.' },
      { title: 'Global 24/7 Cadence', desc: 'Hubs in New York and Chennai provide round-the-clock shipping velocity without compromising engineering quality.' }
    ]
  },
  'our-team': {
    paragraphs: [
      'Our team is intentionally compact, high-agency, and relentlessly focused on craft. We do not maintain a bench of junior developers or account managers. When you engage with ENTWY, your technical counterparts are principal practitioners who have built and scaled systems handling millions of requests per second.',
      'Our collective consists of distributed cloud architects, vector database specialists, frontend design system creators, and security researchers who have previously shipped software at premier technology organizations.',
      'We practice radical transparency and asynchronous deep work. We embed directly in your communication channels—Linear, GitHub, Slack—communicating through pull requests, RFC documents, and working prototypes.'
    ],
    highlights: [
      { title: 'Staff-Level Only', desc: 'Every engineer and designer on your project brings 8+ years of production cloud experience.' },
      { title: 'Cross-Functional Chemistry', desc: 'Engineers who understand design typography; designers who understand API contract latency.' },
      { title: 'Direct Partner Access', desc: 'Collaborate directly with our founders and technical leads without account management filters.' }
    ]
  },
  'our-values': {
    paragraphs: [
      'Our values are not decorative corporate slogans; they are the architectural principles that govern every pull request we merge, every client conversation we hold, and every system we deploy.',
      'We believe in velocity through extreme clarity. Ambiguity creates technical debt faster than poor code. By defining strict API boundaries, entity lifecycle schemas, and verifiable success criteria early, we eliminate weeks of wasteful refactoring.',
      'We treat security, privacy, and determinism as non-negotiable foundations. In an era of probabilistic AI, our platforms enforce strict cryptographic validations, role-based access control, and complete auditability.'
    ],
    highlights: [
      { title: 'Velocity Through Clarity', desc: 'Sharp technical specifications and working prototypes always beat speculative committee meetings.' },
      { title: 'Radical Engineering Transparency', desc: 'Open pull requests, live preview staging links, and honest assessments of architectural trade-offs.' },
      { title: 'Deterministic Security', desc: 'Zero trust boundaries, PII redaction filters, and strict encryption across transit and rest.' },
      { title: 'Obsessive UI Craft', desc: 'Zapier-grade micro-interactions, responsive typography, and design tokens that elevate user trust.' }
    ]
  },
  'careers': {
    paragraphs: [
      'We are constantly looking for exceptional systems thinkers, distributed cloud engineers, and UI craftspeople who want to do the most impactful work of their careers.',
      'At ENTWY, you will never be bogged down by pointless recurring status meetings, internal politics, or bureaucratic approval chains. You will have full autonomy, top-tier developer tooling, and direct ownership over production systems with real-world users.',
      'We offer competitive top-of-market compensation, profit-sharing incentives, generous learning stipends, and total flexibility in how and where you work.'
    ],
    highlights: [
      { title: 'Async-First Culture', desc: 'Deep focus time is sacred. We minimize meetings and maximize uninterrupted building blocks.' },
      { title: 'Cutting-Edge Tech Stack', desc: 'Work with the latest in TypeScript, Go, LangGraph, Model Context Protocol, and cloud infrastructure.' },
      { title: 'Rapid Growth & Equity', desc: 'Direct performance-linked bonuses, competitive base compensation, and leadership equity pathways.' }
    ]
  },
  'contact-us': {
    paragraphs: [
      'Whether you are exploring a new product build, looking to de-risk an upcoming platform migration, or evaluating how to integrate autonomous AI safely into your enterprise software, we are ready to partner with you.',
      'You will speak directly with an ENTWY principal architect who can evaluate your technical requirements, discuss architectural feasibility, and outline a concrete milestone roadmap.',
      'Reach our executive leadership team at info@zuntra.com or schedule a direct technical scoping session.'
    ],
    highlights: [
      { title: 'Direct Scoping Call', desc: '30-minute architectural deep dive with zero sales pressure.' },
      { title: 'Guaranteed 24h Response', desc: 'We respond to all project inquiries within one business day.' },
      { title: 'Bespoke Feasibility Assessment', desc: 'Receive a high-level architectural roadmap and initial timeline breakdown.' }
    ]
  }
};

const operatingPrinciples = [
  {
    icon: Zap,
    title: 'Velocity Through Clarity',
    desc: 'We replace 50-page specification documents with interactive Figma design tokens and working staging environments by Day 7.',
  },
  {
    icon: Code2,
    title: 'Production-Grade from Day 1',
    desc: 'No throwaway prototypes. All code is typed with strict TypeScript/Go contracts, automated test suites, and CI/CD harnesses.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Bureaucracy, Direct Access',
    desc: 'Founders and enterprise CTOs collaborate directly with the staff software engineers building their systems.',
  },
  {
    icon: Terminal,
    title: 'Deterministic AI Guardrails',
    desc: 'We separate probabilistic LLM reasoning from deterministic execution with pre-flight schema validation and rollback keys.',
  },
];

export const AboutPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const resolvedId = id ? (aboutSlugAliases[id] || id) : null;
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (resolvedId && sectionRefs.current[resolvedId]) {
      sectionRefs.current[resolvedId]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [resolvedId]);

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb if sub-route */}
        {resolvedId && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/about" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>About</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
              {aboutSectionsData.find(s => s.id === resolvedId)?.title || resolvedId}
            </span>
          </nav>
        )}

        {/* Hero08: Consolidated About Introduction */}
        <AboutCraftSection />

        {/* Company By The Numbers Stats Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
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
              50+
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Production Systems Deployed
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.2 }}>
              99.9%
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Production Uptime Track Record
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.2 }}>
              2 Global
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Engineering Hubs (NYC &amp; Chennai)
            </p>
          </div>
          <div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-ink)', lineHeight: 1.2 }}>
              100%
            </div>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', margin: '4px 0 0 0', fontWeight: 500 }}>
              Client IP Retention
            </p>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
          {aboutSectionsData.map((sec) => {
            const isSelected = resolvedId === sec.id;
            return (
              <Link
                key={sec.id}
                to={`/about/${sec.id}`}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline-strong)',
                  backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-canvas-soft)',
                  color: isSelected ? '#ffffff' : 'var(--color-ink)',
                  textDecoration: 'none',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  transition: 'all 0.15s ease'
                }}
              >
                {sec.title}
              </Link>
            );
          })}
        </div>

        {/* Deep Dive for Selected Section or Overview */}
        {resolvedId && detailedSectionContent[resolvedId] && (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--color-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              marginBottom: '56px',
              boxShadow: '0 12px 32px rgba(83, 58, 253, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span className="step-type-badge badge-trigger">Deep Dive</span>
              <h2 className="title-lg" style={{ color: 'var(--color-ink)', margin: 0 }}>
                {aboutSectionsData.find(s => s.id === resolvedId)?.title}
              </h2>
            </div>

            <div style={{ maxWidth: '840px', marginBottom: '32px' }}>
              {detailedSectionContent[resolvedId].paragraphs.map((p, idx) => (
                <p key={idx} style={{ fontSize: '16px', color: 'var(--color-body)', lineHeight: 1.7, marginBottom: '16px', fontWeight: 400 }}>
                  {p}
                </p>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '20px', borderTop: '1px solid var(--color-hairline)', paddingTop: '28px' }}>
              {detailedSectionContent[resolvedId].highlights.map((h) => (
                <div key={h.title} style={{ backgroundColor: 'var(--color-canvas-soft)', borderRadius: 'var(--radius-md)', padding: '20px', border: '1px solid var(--color-hairline)' }}>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                    {h.title}
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
                    {h.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5 About Sections Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '28px', marginBottom: '56px' }}>
          {aboutSectionsData.map((sec, idx) => {
            const IconComp = sectionIcons[sec.id] || Zap;
            const isSelected = resolvedId === sec.id;
            return (
              <article
                key={sec.id}
                id={sec.id}
                ref={(el) => { sectionRefs.current[sec.id] = el; }}
                className="step-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
                  backgroundColor: '#ffffff',
                  boxShadow: isSelected ? '0 10px 28px rgba(83, 58, 253, 0.12)' : '0 2px 10px rgba(13, 37, 61, 0.03)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)' }}>
                      <IconComp size={20} />
                    </div>
                    <span className="step-num">0{idx + 1}</span>
                  </div>

                  <h2 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '14px' }}>
                    {sec.title}
                  </h2>

                  <p style={{ fontSize: '15px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '24px', fontWeight: 400 }}>
                    {sec.desc}
                  </p>
                </div>

                <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-hairline-soft)' }}>
                  {sec.id === 'careers' ? (
                    <Link to="/careers" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '14px' }}>
                      <span>Explore Open Positions</span>
                      <ArrowRight size={14} />
                    </Link>
                  ) : sec.id === 'contact-us' ? (
                    <Link to="/start-a-project" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '14px' }}>
                      <span>Reach Leadership Team</span>
                      <ArrowRight size={14} />
                    </Link>
                  ) : (
                    <Link to={`/about/${sec.id}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13.5px', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
                      <span>Read Section Chapter</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Core Operating Principles */}
        <section
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '48px',
            marginBottom: '56px',
            boxShadow: 'var(--shadow-stripe-card)',
          }}
        >
          <div style={{ maxWidth: '780px', marginBottom: '36px' }}>
            <span className="step-type-badge badge-trigger" style={{ marginBottom: '12px', display: 'inline-block' }}>
              How We Work
            </span>
            <h2 className="display-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              Our core engineering principles.
            </h2>
            <p className="body-lg" style={{ color: 'var(--color-body)' }}>
              We hold ourselves to rigorous engineering standards designed to deliver resilient software with predictable delivery velocity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '24px' }}>
            {operatingPrinciples.map((op) => {
              const OpIcon = op.icon;
              return (
                <div key={op.title} style={{ backgroundColor: 'var(--color-canvas-soft)', borderRadius: 'var(--radius-lg)', padding: '24px', border: '1px solid var(--color-hairline)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', backgroundColor: '#ffffff', color: 'var(--color-primary)', display: 'grid', placeItems: 'center', marginBottom: '16px', border: '1px solid var(--color-hairline)' }}>
                    <OpIcon size={18} />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                    {op.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6, margin: 0, fontWeight: 400 }}>
                    {op.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Two Global Engineering Hubs */}
        <div style={{ backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-xl)', padding: '40px', marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <Globe2 size={20} color="var(--color-primary)" />
            <h2 className="title-lg" style={{ margin: 0 }}>
              Global Operations &amp; Delivery Presence
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--color-body)', maxWidth: '780px', lineHeight: 1.6, marginBottom: '28px', fontWeight: 400 }}>
            Our dual-hub operational presence enables continuous product delivery across North America, Europe, and Asia Pacific timezones.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-stripe-sm)' }}>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'none', marginBottom: 6 }}>
                North America · Strategy &amp; Design Hub
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 8 }}>
                Brooklyn, New York
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.6, margin: '0 0 16px 0', fontWeight: 400 }}>
                Executive product strategy, design systems craft, and enterprise partner collaboration for our US and European clients.
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                Timezone: Eastern Time (UTC-4/5)
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-lg)', padding: '24px', boxShadow: 'var(--shadow-stripe-sm)' }}>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'none', marginBottom: 6 }}>
                Asia Pacific · Distributed Cloud &amp; AI Hub
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 8 }}>
                Chennai, Tamil Nadu
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.6, margin: '0 0 16px 0', fontWeight: 400 }}>
                High-throughput distributed systems engineering, autonomous agent deployment, and round-the-clock infrastructure operations.
              </p>
              <div style={{ fontSize: '12.5px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                Timezone: India Standard Time (UTC+5:30)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Band */}
        <div 
          className="cta-wave-banner"
          style={{ 
            marginTop: '36px', 
            padding: '52px', 
            textAlign: 'center', 
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 600 }}>
            Collaborate directly with our builders.
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 400 }}>
            Whether you need a full platform build, AI systems architecture, or strategic advisory, our strike team is ready to scope your engagement.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
              <span>Reach Leadership Team</span>
              <ArrowRight size={15} />
            </Link>
            <Link to="/services" className="btn-secondary-on-dark" style={{ padding: '13px 22px', backgroundColor: 'transparent', border: '1px solid rgba(255,255,255,0.25)' }}>
              <span>Explore Capabilities</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
