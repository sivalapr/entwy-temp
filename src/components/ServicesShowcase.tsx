import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Bot, 
  Cloud, 
  Workflow, 
  RefreshCw, 
  ShieldCheck, 
  Palette,
  CheckCircle2, 
} from 'lucide-react';

interface ServicesShowcaseProps {
  onOpenProjectModal: () => void;
}

/**
 * ServicesShowcase — Stripe-style modular capability section.
 *
 * Layout: varies module weight and size to reflect hierarchy.
 * Two larger "featured" cards at top, four standard cards below.
 * No six-identical icon-checklist grid.
 */

const featuredCapabilities = [
  {
    id: 'design-build',
    title: 'Product Design & Engineering',
    description: 'From a rough brief to a production-ready application. We handle UX research, interaction design, frontend engineering, and cloud deployment — end to end.',
    path: '/solutions/build-a-new-product',
    accent: '#533afd',
    accentBg: '#ebebfd',
    icon: Palette,
    highlights: ['UX design & design systems', 'React / Next.js frontends', 'Production-grade CI/CD'],
  },
  {
    id: 'ai-workflows',
    title: 'AI Workflows & Intelligent Automation',
    description: 'Custom AI systems that handle real business processes: data extraction, document review, support triage, and decision support — not off-the-shelf wrappers.',
    path: '/solutions/build-an-ai-product',
    accent: '#7952ff',
    accentBg: '#ebebfd',
    icon: Bot,
    highlights: ['Purpose-built LLM pipelines', 'Document & data extraction', 'Workflow automation'],
  },
];

const standardCapabilities = [
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    description: 'Resilient, scalable backends designed for sustained growth: microservices, event-driven systems, and managed infrastructure.',
    path: '/services/technology',
    accent: '#00d4ff',
    icon: Cloud,
  },
  {
    id: 'automation',
    title: 'Business System Integration',
    description: 'Bidirectional sync between ERPs, CRMs, and operational tools. Reduce manual re-entry and data inconsistency across your stack.',
    path: '/solutions/automate-business-workflows',
    accent: '#ea2261',
    icon: Workflow,
  },
  {
    id: 'modernization',
    title: 'Platform Modernization',
    description: 'Move from legacy monolith to a cloud-native architecture without service disruption — incremental migration with validated cutover.',
    path: '/solutions/modernise-your-platform',
    accent: '#00875a',
    icon: RefreshCw,
  },
  {
    id: 'governance',
    title: 'Security & Compliance',
    description: 'Data governance, access control, and audit trails for regulated industries. Privacy-first engineering from architecture through deployment.',
    path: '/services/strategy',
    accent: '#0a2540',
    icon: ShieldCheck,
  },
];

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({ onOpenProjectModal }) => {
  return (
    <section
      id="services-section"
      aria-labelledby="capabilities-heading"
      style={{
        paddingBlock: '88px',
        backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
        borderTop: '1px solid var(--color-hairline, #e3e8ee)',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: 'var(--content-max, 1360px)',
          marginInline: 'auto',
          paddingInline: 'var(--gutter, clamp(20px, 4vw, 56px))',
        }}
      >
        {/* Section header */}
        <div style={{ maxWidth: '600px', marginBottom: '48px' }}>
          <h2
            id="capabilities-heading"
            style={{
              fontFamily: "var(--font-display, 'Inter', sans-serif)",
              fontSize: 'clamp(26px, 3vw, 36px)',
              fontWeight: 300,
              lineHeight: 1.12,
              letterSpacing: '-0.64px',
              color: 'var(--color-ink, #0a2540)',
              marginBottom: '14px',
            }}
          >
            Everything your digital product needs.
          </h2>
          <p
            style={{
              fontSize: '16px',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'var(--color-body, #425466)',
            }}
          >
            Strategy, design, engineering, and AI — delivered as a cohesive team, not fragmented specialists.
          </p>
        </div>

        {/* Featured row — 2 larger cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          {featuredCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <article
                key={cap.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline, #e3e8ee)',
                  borderRadius: '12px',
                  padding: '32px',
                  boxShadow: 'var(--shadow-stripe-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  transition: 'box-shadow 0.2s ease, border-color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.boxShadow = 'var(--shadow-stripe-hover)';
                  el.style.borderColor = 'rgba(83,58,253,0.3)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.boxShadow = 'var(--shadow-stripe-card)';
                  el.style.borderColor = 'var(--color-hairline, #e3e8ee)';
                  el.style.transform = '';
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    backgroundColor: cap.accentBg,
                    color: cap.accent,
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: '20px',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={22} aria-hidden="true" />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display, 'Inter', sans-serif)",
                    fontSize: '20px',
                    fontWeight: 400,
                    lineHeight: 1.25,
                    letterSpacing: '-0.2px',
                    color: 'var(--color-ink, #0a2540)',
                    marginBottom: '12px',
                  }}
                >
                  {cap.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: 'var(--color-body, #425466)',
                    marginBottom: '24px',
                  }}
                >
                  {cap.description}
                </p>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-hairline-soft, #f0f4f8)',
                    marginBottom: '24px',
                  }}
                >
                  {cap.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '13.5px',
                        color: 'var(--color-ink-secondary, #273951)',
                      }}
                    >
                      <CheckCircle2 size={13} color={cap.accent} style={{ flexShrink: 0 }} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <Link
                  to={cap.path}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--color-primary, #533afd)',
                    textDecoration: 'none',
                    marginTop: 'auto',
                  }}
                >
                  Learn more
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Standard row — 4 compact cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '16px',
          }}
        >
          {standardCapabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <article
                key={cap.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline, #e3e8ee)',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: 'var(--shadow-stripe-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'box-shadow 0.2s ease, border-color 0.2s ease, transform 0.15s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.boxShadow = 'var(--shadow-stripe-card)';
                  el.style.borderColor = 'rgba(83,58,253,0.25)';
                  el.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.boxShadow = 'var(--shadow-stripe-sm)';
                  el.style.borderColor = 'var(--color-hairline, #e3e8ee)';
                  el.style.transform = '';
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '6px',
                    border: '1px solid var(--color-hairline, #e3e8ee)',
                    backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
                    color: cap.accent,
                    display: 'grid',
                    placeItems: 'center',
                    marginBottom: '16px',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={17} aria-hidden="true" />
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-display, 'Inter', sans-serif)",
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: 'var(--color-ink, #0a2540)',
                    marginBottom: '8px',
                  }}
                >
                  {cap.title}
                </h3>

                <p
                  style={{
                    fontSize: '13.5px',
                    fontWeight: 300,
                    lineHeight: 1.55,
                    color: 'var(--color-body, #425466)',
                    marginBottom: '16px',
                    flexGrow: 1,
                  }}
                >
                  {cap.description}
                </p>

                <Link
                  to={cap.path}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'var(--color-primary, #533afd)',
                    textDecoration: 'none',
                    marginTop: 'auto',
                  }}
                >
                  Learn more
                  <ArrowRight size={12} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA — text link, not a big button */}
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link
            to="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '15px',
              fontWeight: 400,
              color: 'var(--color-primary, #533afd)',
              textDecoration: 'none',
              padding: '10px 20px',
              borderRadius: '9999px',
              border: '1px solid rgba(83,58,253,0.3)',
              transition: 'background-color 0.15s ease, border-color 0.15s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(83,58,253,0.04)';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(83,58,253,0.5)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.backgroundColor = '';
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(83,58,253,0.3)';
            }}
          >
            <span>See all capabilities</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
