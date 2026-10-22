import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { careersSectionsData } from '../data/sitemapData';
import { CareersEditorialHero } from '../components/CareersEditorialHero';
import { 
  ArrowRight, 
  Briefcase, 
  CheckCircle2, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles, 
  UserCheck, 
  Users, 
  Zap,
  ChevronRight,
  Laptop,
  BookOpen,
  DollarSign,
  Coffee,
  Plane,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

const detailedJobOpenings = [
  {
    title: 'Staff AI / LLM Systems Engineer',
    location: 'Remote / Brooklyn, NY',
    type: 'Full-time',
    comp: '$190k – $240k · 0.25% – 0.5% Equity',
    summary: 'Lead the architecture and production deployment of multi-agent cognitive platforms, vector databases, and Model Context Protocol (MCP) servers for enterprise clients.',
    responsibilities: [
      'Architect deterministic validation layers and rollback brokers for probabilistic LLM tool calls',
      'Design hybrid vector retrieval pipelines combining BM25 keyword scoring with dense embeddings and knowledge graphs',
      'Benchmark model latency, token cost efficiency, and hallucination rates across Claude 3.5 Sonnet and GPT-4o',
      'Publish internal and open-source RFCs on agentic orchestration patterns'
    ],
    requirements: [
      '6+ years of production software engineering experience in Python or TypeScript/Node.js',
      'Demonstrated experience shipping LLM/RAG systems to real enterprise users',
      'Deep understanding of embedding spaces, vector indices (Qdrant, Pinecone, pgvector), and token streaming',
      'Strong distributed systems fundamentals and event-driven architecture experience'
    ],
    stack: ['LangGraph', 'Python FastAPI', 'TypeScript', 'Qdrant', 'Claude 3.5 Sonnet', 'OpenTelemetry']
  },
  {
    title: 'Senior Full-Stack Engineer (React / Node / Go)',
    location: 'Remote / Chennai, India',
    type: 'Full-time',
    comp: 'Competitive Market · Performance Bonus · Remote',
    summary: 'Build high-performance web applications and resilient API gateways engineered for sub-second P99 latency and high concurrency.',
    responsibilities: [
      'Implement reactive, accessible user interfaces using React, Next.js, and strictly typed component systems',
      'Develop distributed microservices, webhook brokers, and relational PostgreSQL schemas with automated migrations',
      'Hardened CI/CD deployment pipelines on AWS and Vercel with ephemeral preview environments',
      'Partner directly with design leadership to turn Figma design tokens into production-ready UI libraries'
    ],
    requirements: [
      '5+ years building full-stack cloud applications in production environments',
      'Advanced proficiency in TypeScript, React, and either Node.js or Go',
      'Strong relational database design (PostgreSQL) and caching strategies (Redis)',
      'Experience with webhook delivery mechanisms, idempotency keys, and queue brokers'
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Go', 'PostgreSQL', 'Tailwind CSS', 'Docker']
  },
  {
    title: 'Lead Product Designer (Design Systems)',
    location: 'Remote / Brooklyn, NY',
    type: 'Full-time',
    comp: '$160k – $210k · Equity & Health Coverage',
    summary: 'Own the visual and interaction craft of ENTWY’s platforms, creating Zapier-grade micro-interactions, dark mode aesthetics, and robust design token libraries.',
    responsibilities: [
      'Establish comprehensive Figma component libraries and token architectures shared directly with frontend engineers',
      'Design complex data visualization dashboards, agent status monitors, and multi-step workflow builders',
      'Conduct user testing sessions to uncover cognitive friction in automated enterprise operations',
      'Produce interactive prototypes in Figma and code (React/Tailwind) to validate mental models fast'
    ],
    requirements: [
      '5+ years experience designing complex B2B SaaS, developer tools, or financial interfaces',
      'Exceptional visual craft, typography discipline, and micro-interaction animation sensitivity',
      'Fluency with modern web constraints (CSS Grid, Flexbox, Radix UI primitives, design tokens)',
      'Portfolio showcasing deep systems thinking and shipping high-polish production interfaces'
    ],
    stack: ['Figma', 'Design Tokens', 'Radix UI', 'CSS/Tailwind', 'Prototyping', 'Linear']
  },
  {
    title: 'Solutions Architect (Enterprise Automations)',
    location: 'New York / Hybrid / Remote',
    type: 'Full-time',
    comp: '$180k – $230k · Performance Upside',
    summary: 'Interface directly with enterprise CTOs and engineering heads to map legacy operating workflows into modern API-driven architectures.',
    responsibilities: [
      'Lead technical discovery sessions to audit legacy ERP, CRM, and cloud database bottlenecks',
      'Author architectural blueprints, entity-relationship diagrams, and integration specifications',
      'Guide embedded strike teams through technical implementation milestones and security sign-offs',
      'Represent ENTWY technical leadership in executive architecture reviews'
    ],
    requirements: [
      '7+ years experience in software architecture, technical consulting, or solutions engineering',
      'Deep background in enterprise integrations (REST, GraphQL, gRPC, webhooks, Kafka)',
      'Familiarity with enterprise compliance frameworks (SOC 2, HIPAA, PCI-DSS)',
      'Outstanding communication skills with the ability to articulate trade-offs to both engineers and executives'
    ],
    stack: ['System Design', 'Enterprise APIs', 'Kafka', 'GraphQL', 'AWS / Cloud Architecture', 'SOC-2']
  }
];

const comprehensiveBenefits = [
  {
    icon: Laptop,
    title: 'Top-Tier Workstation Gear',
    desc: 'Every team member receives a maxed-out Apple Silicon MacBook Pro (M3 Max / 64GB+), 4K external display, and a dedicated home office setup stipend.',
  },
  {
    icon: DollarSign,
    title: 'Top-of-Market Comp & Upside',
    desc: 'Transparent, top-tier base compensation with annual profit-sharing bonuses and equity ownership options for every full-time employee.',
  },
  {
    icon: HeartHandshake,
    title: 'Premium Healthcare & Wellness',
    desc: 'Comprehensive medical, dental, and vision insurance with 100% premium coverage for you and generous family dependent subsidies.',
  },
  {
    icon: Zap,
    title: 'Async-First Deep Focus',
    desc: 'No endless calendar-filling status meetings. We operate through written RFCs, pull requests, and autonomous deep work blocks.',
  },
  {
    icon: BookOpen,
    title: '$3,000 Annual Learning Budget',
    desc: 'Dedicated annual stipend for conferences, books, online courses, specialized AI compute credits, and technical subscriptions.',
  },
  {
    icon: Plane,
    title: 'Bi-Annual International Offsites',
    desc: 'We bring our global team together twice a year in inspiring locations (past offsites in Lisbon, Tokyo, and New York) to brainstorm and connect.',
  },
];

const hiringSteps = [
  {
    step: 'Stage 01',
    name: 'Introductory Conversation',
    timeline: 'Day 1–3',
    desc: 'A candid 30-minute conversation with a founder or senior engineer about your past work, engineering values, and what kind of problems energize you.',
  },
  {
    step: 'Stage 02',
    name: 'Collaborative Pairing Session',
    timeline: 'Day 4–6',
    desc: 'No trivia or live LeetCode puzzles. We work together on a practical, real-world engineering challenge or audit a live piece of software together.',
  },
  {
    step: 'Stage 03',
    name: 'Team Meet & Final Decision',
    timeline: 'Within 48 Hours',
    desc: 'A brief cultural sync with your prospective teammates followed by a transparent, competitive offer delivered within 48 hours of pairing.',
  },
];

const candidateFaqs = [
  {
    q: 'Do you offer fully remote work?',
    a: 'Yes. All of our engineering and design roles are remote-friendly. We hire across the Americas, Europe, and Asia Pacific, with physical studio hubs in Brooklyn, NY and Chennai, India for those who prefer an office.',
  },
  {
    q: 'What is your interview preparation recommendation?',
    a: 'Do not spend weeks memorizing algorithmic trivia. We care about how you reason through systems architecture, how you write clean maintainable code, and how you communicate technical trade-offs.',
  },
  {
    q: 'How does async work actually operate day-to-day?',
    a: 'We use Linear for issue tracking, GitHub for code reviews, and Slack for quick coordination. We write short RFCs before starting major features so everyone has clarity before writing code.',
  },
];

export const CareersPage: React.FC = () => {
  const { section } = useParams<{ section?: string }>();
  const [life, openRoles, internships, hiring] = careersSectionsData;
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  useEffect(() => {
    if (section && sectionRefs.current[section]) {
      sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [section]);

  const toggleJob = (title: string) => {
    setExpandedJob(expandedJob === title ? null : title);
  };

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb if sub-route */}
        {section && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/careers" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Careers</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
              {careersSectionsData.find(s => s.id === section)?.title || section}
            </span>
          </nav>
        )}

        {/* Hero04: Editorial Careers Introduction */}
        <CareersEditorialHero />

        {/* Career Section Quick Tabs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
          {careersSectionsData.map((sec) => {
            const isSelected = section === sec.id;
            return (
              <Link
                key={sec.id}
                to={`/careers/${sec.id}`}
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

        {/* 1. Life at ENTWY */}
        <section
          id="life-at-entwy"
          ref={(el) => { sectionRefs.current['life-at-entwy'] = el; }}
          style={{
            backgroundColor: '#ffffff',
            border: section === 'life-at-entwy' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '48px',
            boxShadow: section === 'life-at-entwy' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <Sparkles size={20} color="var(--color-primary)" />
            <h2 className="title-lg" style={{ color: 'var(--color-ink)', margin: 0 }}>
              {life.title}
            </h2>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--color-body)', lineHeight: 1.6, maxWidth: '820px', marginBottom: '28px', fontWeight: 300 }}>
            {life.desc} We believe in small, autonomous strike teams with high individual agency. You will work on real production software, collaborate directly with founders and senior enterprise partners, and enjoy deep, uninterrupted focus time.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {comprehensiveBenefits.map((b) => {
              const BIcon = b.icon;
              return (
                <div key={b.title} style={{ backgroundColor: 'var(--color-canvas-soft)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', backgroundColor: '#ffffff', color: 'var(--color-primary)', display: 'grid', placeItems: 'center', border: '1px solid var(--color-hairline)' }}>
                      <BIcon size={16} />
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)' }}>{b.title}</span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, margin: 0, fontWeight: 300 }}>
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. Open Positions (Expanded Deep Breakdown) */}
        <section
          id="open-positions"
          ref={(el) => { sectionRefs.current['open-positions'] = el; }}
          style={{
            backgroundColor: '#ffffff',
            border: section === 'open-positions' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '48px',
            boxShadow: section === 'open-positions' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginBottom: '4px' }}>
                {openRoles.title}
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-body)', fontWeight: 300 }}>
                All positions are open to global remote candidates or those seeking studio hubs in Brooklyn, NY or Chennai, India.
              </p>
            </div>
            <span className="step-type-badge badge-trigger">
              4 Active Openings
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {detailedJobOpenings.map((role) => {
              const isExpanded = expandedJob === role.title;
              return (
                <div
                  key={role.title}
                  style={{
                    backgroundColor: 'var(--color-canvas-soft)',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <div
                    style={{
                      padding: '24px 28px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '16px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                        {role.title}
                      </h3>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', flexWrap: 'wrap' }}>
                        <span>{role.location}</span>
                        <span>·</span>
                        <span>{role.type}</span>
                        <span>·</span>
                        <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{role.comp}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <button
                        onClick={() => toggleJob(role.title)}
                        style={{
                          background: 'none',
                          border: '1px solid var(--color-hairline-strong)',
                          borderRadius: 'var(--radius-pill)',
                          padding: '8px 16px',
                          fontSize: '13px',
                          fontWeight: 600,
                          color: 'var(--color-ink)',
                          cursor: 'pointer',
                          backgroundColor: '#ffffff'
                        }}
                      >
                        {isExpanded ? 'Hide Details' : 'View Scope'}
                      </button>
                      <a
                        href={`mailto:careers@entwy.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                        className="btn-primary"
                        style={{ padding: '8px 18px', fontSize: '13.5px' }}
                      >
                        <span>Apply</span>
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>

                  {isExpanded && (
                    <div style={{ padding: '0 28px 24px 28px', borderTop: '1px solid var(--color-hairline)', backgroundColor: '#ffffff' }}>
                      <p style={{ fontSize: '15px', color: 'var(--color-body)', lineHeight: 1.6, margin: '20px 0 18px 0', fontWeight: 400 }}>
                        {role.summary}
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '24px', marginBottom: '20px' }}>
                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                            What You Will Own
                          </div>
                          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6 }}>
                            {role.responsibilities.map((r, i) => (
                              <li key={i} style={{ marginBottom: '6px' }}>{r}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '8px' }}>
                            What We Look For
                          </div>
                          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6 }}>
                            {role.requirements.map((req, i) => (
                              <li key={i} style={{ marginBottom: '6px' }}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)' }}>Tech Focus:</span>
                        {role.stack.map((t) => (
                          <span key={t} style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)', padding: '2px 8px', borderRadius: 'var(--radius-pill)', color: 'var(--color-ink-mid)' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 3 & 4. Internships & Hiring Process Side-by-Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '28px', marginBottom: '56px' }}>
          {/* Internships */}
          <div
            id="internships"
            ref={(el) => { sectionRefs.current['internships'] = el; }}
            style={{
              backgroundColor: '#ffffff',
              border: section === 'internships' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              boxShadow: section === 'internships' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: '#fff', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', marginBottom: '18px' }}>
              <GraduationCap size={20} />
            </div>
            <h3 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              {internships.title}
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '24px', fontWeight: 300 }}>
              {internships.desc} Our 12-week fellowship pairs you with senior systems architects to work on real customer cloud platforms, not simulated demo apps.
            </p>
            <a
              href="mailto:careers@entwy.com?subject=Fellowship%20Application%202026"
              className="dropdown-link-item"
              style={{ color: 'var(--color-primary)', fontWeight: 600, padding: 0 }}
            >
              <span>Apply for 2026 Engineering Fellowship &rarr;</span>
            </a>
          </div>

          {/* Hiring Process */}
          <div
            id="hiring-process"
            ref={(el) => { sectionRefs.current['hiring-process'] = el; }}
            style={{
              backgroundColor: '#ffffff',
              border: section === 'hiring-process' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              boxShadow: section === 'hiring-process' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: '#fff', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', marginBottom: '18px' }}>
              <UserCheck size={20} />
            </div>
            <h3 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              {hiring.title}
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '20px', fontWeight: 300 }}>
              {hiring.desc}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {hiringSteps.map((st) => (
                <div key={st.step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, minWidth: '60px' }}>
                    {st.step}
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--color-ink)' }}>{st.name}</div>
                    <div style={{ fontSize: '12.5px', color: 'var(--color-muted)' }}>{st.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Candidate FAQ */}
        <section
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '56px',
          }}
        >
          <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginBottom: '20px' }}>
            Frequently Asked Questions by Candidates
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {candidateFaqs.map((faq) => (
              <div key={faq.q} style={{ backgroundColor: 'var(--color-canvas-soft)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                  {faq.q}
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  {faq.a}
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
            Don't see a role that fits?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 300 }}>
            We are always looking for exceptional distributed systems engineers, agent researchers, and systems designers. Send us your work.
          </p>
          <a href="mailto:careers@entwy.com?subject=Open%20Engineering%20Application" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
            <span>Send Open Application</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
