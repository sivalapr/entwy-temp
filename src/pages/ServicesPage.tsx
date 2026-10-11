import React from 'react';
import { Link } from 'react-router-dom';
import { servicesPillarsData } from '../data/sitemapData';
import { ArrowRight, Bot, Code, Compass, Palette, Sparkles, TrendingUp, Zap } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number | string; color?: string }>> = {
  Compass,
  Palette,
  Bot,
  Code,
  TrendingUp,
};

export const ServicesPage: React.FC = () => {
  return (
    <div className="page-shell">
      <div className="container">
        {/* Header Band */}
        <div style={{ maxWidth: 880, marginBottom: 56 }}>
          <h1 className="display-xl" style={{ marginBottom: 20 }}>
            Strategy, design, and engineering <br />
            that work together.
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-body)' }}>
            Bring us an ambitious business challenge. We’ll help you architect the platform, design the human experience, and build the mission-critical systems behind it.
          </p>
        </div>

        {/* 5 Pillars Grid matching Sitemap */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {Object.entries(servicesPillarsData).map(([key, pillar], idx) => {
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
                      <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginTop: '2px', fontWeight: 500 }}>
                        {pillar.title}
                      </h2>
                    </div>
                  </div>
                  <Link to="/start-a-project" className="btn-secondary" style={{ padding: '8px 18px', fontSize: '14px' }}>
                    <span>Scope {pillar.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <p style={{ fontSize: '15.5px', color: 'var(--color-body)', marginBottom: '28px', maxWidth: '800px', lineHeight: 1.6, fontWeight: 300 }}>
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
                        padding: '22px',
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
                        <h3 style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                          {item.name}
                        </h3>
                        <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, marginBottom: '16px', fontWeight: 300 }}>
                          {item.desc}
                        </p>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, color: 'var(--color-primary)' }}>
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

        {/* Bottom Stripe Dark Shell CTA Band */}
        <div 
          className="cta-wave-banner"
          style={{ 
            marginTop: '72px', 
            padding: '52px', 
            textAlign: 'center', 
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 300 }}>
            Ready to integrate custom intelligence?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 300 }}>
            Our cross-functional strike team is ready to scope your architecture and deliver production software with enterprise SLAs.
          </p>
          <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
            <span>Start a project today</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
