import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/sitemapData';
import { WorkEditorialHero } from '../components/WorkEditorialHero';
import { ArrowRight, Briefcase, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';

export const WorkPage: React.FC = () => {
  return (
    <div className="page-shell">
      <div className="container">
        {/* Editorial Work Introduction */}
        <WorkEditorialHero />

        {/* 3 Case Studies */}
        <div id="case-studies" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          {caseStudiesData.map((cs, idx) => (
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
                  <span className="step-type-badge badge-trigger">Case Study 0{idx + 1}</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                    {cs.timeline}
                  </span>
                </div>

                <Link to={`/work/${cs.id}`} style={{ textDecoration: 'none' }}>
                  <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginBottom: '14px', lineHeight: 1.25, fontWeight: 500 }}>
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
                    Architecture:
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
                <div style={{ fontSize: '16px', fontWeight: 500, color: '#ffffff', marginBottom: '12px' }}>
                  {cs.client}
                </div>
                <p style={{ fontSize: '13.5px', color: '#cad5e2', lineHeight: 1.55, marginBottom: '24px' }}>
                  Autonomous workflows configured with deterministic API rollback, role authorization, and tamper-proof audit logs.
                </p>
                <Link
                  to={`/work/${cs.id}`}
                  className="btn-secondary-on-dark"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '14px', padding: '11px 18px' }}
                >
                  <span>View Case Study Architecture</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Band */}
        <div 
          className="cta-wave-banner"
          style={{ 
            marginTop: '72px', 
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
          <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
            <span>Start a Project</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
