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
  CheckCircle2
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

                  <p style={{ fontSize: '15px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '24px' }}>
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
                      <span>Learn More</span>
                      <ArrowRight size={13} />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Two Global Engineering Hubs */}
        <div style={{ backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-xl)', padding: '40px' }}>

          <h2 className="title-lg" style={{ marginBottom: 24 }}>
            Global Operations &amp; Delivery Presence
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'none', marginBottom: 6 }}>
                North America
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 8 }}>
                Brooklyn, New York
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.5, margin: 0 }}>
                Executive strategy, systems architecture, and partner relations for US enterprise clients.
              </p>
            </div>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'none', marginBottom: 6 }}>
                Asia Pacific
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 8 }}>
                Chennai, Tamil Nadu
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.5, margin: 0 }}>
                Full-stack cloud engineering, autonomous agent research, and high-concurrency software delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA Band */}
        <div 
          className="cta-wave-banner"
          style={{ 
            marginTop: '48px', 
            padding: '52px', 
            textAlign: 'center', 
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 300 }}>
            Work with an engineering strike team
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 300 }}>
            No junior handoffs, no bloated decks. Direct access to principal architects and senior engineers from day one.
          </p>
          <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
            <span>Start a Conversation</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
