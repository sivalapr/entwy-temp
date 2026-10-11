import React from 'react';
import { Link } from 'react-router-dom';
import { caseStudiesData } from '../data/sitemapData';
import { CaseStudy } from '../types/sitemap';
import { ArrowRight, Briefcase, Sparkles, TrendingUp } from 'lucide-react';

export const CaseStudiesSection: React.FC<{ onSelectCaseStudy: (caseStudy: CaseStudy) => void }> = ({ onSelectCaseStudy }) => {
  return (
    <section id="work-section" className="section-pad">
      <div className="container">
        <div style={{ marginBottom: 44, maxWidth: 840 }}>

          <h2 className="display-lg">Mission-critical systems built for enterprise scale.</h2>
          <p className="body-lg" style={{ marginTop: 14 }}>
            Explore how ENTWY deploys autonomous reconciliation loops, HIPAA-compliant knowledge engines, and event-driven logistics pipelines.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '28px' }}>
          {caseStudiesData.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className="step-card"
              onClick={() => onSelectCaseStudy(item)}
              style={{
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="step-type-badge badge-trigger">Case Study 0{i + 1}</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                    {item.timeline}
                  </span>
                </div>

                <h3 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '10px', lineHeight: 1.35 }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, marginBottom: '20px' }}>
                  {item.overview}
                </p>

                <div style={{ backgroundColor: 'rgba(255, 79, 0, 0.05)', border: '1px solid rgba(255, 79, 0, 0.18)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>
                    <TrendingUp size={13} /> Impact
                  </div>
                  <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)' }}>{item.impact}</p>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-hairline-soft)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: 'var(--color-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  View Architecture Blueprint <ArrowRight size={14} />
                </span>
                <span className="step-num">0{i + 1} / 03</span>
              </div>
            </button>
          ))}
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <Link className="btn-secondary" to="/work">
            <span>Explore All Work &amp; Case Studies</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
