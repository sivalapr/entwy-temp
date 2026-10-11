import React from 'react';
import { Link } from 'react-router-dom';
import { processStagesData } from '../data/sitemapData';
import { ArrowRight } from 'lucide-react';

export const ProcessTimeline: React.FC<{ onOpenProjectModal: () => void }> = () => {
  return (
    <section id="process-section" className="section-pad">
      <div className="container">
        <div style={{ maxWidth: 840, marginBottom: 44 }}>
          <h2 className="display-lg">A clear path from idea to launch.</h2>
          <p className="body-lg" style={{ marginTop: 14 }}>
            Work directly with a small team, review working software, and know what comes next at every stage.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 210px), 1fr))', gap: '16px' }}>
          {processStagesData.map((stage) => (
            <article
              key={stage.step}
              className="step-card"
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="step-num" style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-primary)' }}>
                    0{stage.step}
                  </span>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-muted)', textTransform: 'uppercase' }}>
                    {stage.timeframe}
                  </span>
                </div>
                <Link 
                  to={`/process/${stage.slug || stage.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h3 className="title-sm" style={{ fontSize: '16px', color: 'var(--color-ink)', marginBottom: '8px' }}>
                    {stage.title}
                  </h3>
                </Link>
                <p style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--color-body)' }}>
                  {stage.description}
                </p>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid var(--color-hairline-soft)' }}>
                <Link
                  to={`/process/${stage.slug || stage.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                  style={{ fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
                >
                  <span>Explore this stage</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <Link to="/process" className="btn-secondary" style={{ maxWidth: '100%', whiteSpace: 'normal', padding: '12px 20px', fontSize: '14.5px' }}>
            <span>See how we work</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
