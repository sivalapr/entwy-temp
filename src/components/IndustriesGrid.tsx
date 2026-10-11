import React from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/sitemapData';
import { ArrowRight, Building2, Sparkles } from 'lucide-react';

export const IndustriesGrid: React.FC<{ onOpenProjectModal: () => void }> = () => {
  return (
    <section id="industries-section" className="section-pad" style={{ background: 'var(--color-canvas-soft)' }}>
      <div className="container">
        <div style={{ maxWidth: 840, marginBottom: 44 }}>

          <h2 className="display-lg">Built around the unique constraints of your industry.</h2>
          <p className="body-lg" style={{ marginTop: 14 }}>
            ENTWY supports organizations across 8 core verticals with tailored data connectors, compliance guardrails, and autonomous workflows.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          {industriesData.map((ind, idx) => (
            <article
              key={ind.id}
              className="step-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="step-num">Vertical 0{idx + 1}</span>
                  <Sparkles size={13} color="var(--color-primary)" />
                </div>
                <Link to={`/industries/${ind.id}`} style={{ textDecoration: 'none' }}>
                  <h3 className="title-sm" style={{ fontSize: '16px', marginBottom: '8px', color: 'var(--color-ink)' }}>
                    {ind.name}
                  </h3>
                </Link>
                <p style={{ fontSize: '13px', lineHeight: 1.55, color: 'var(--color-body)', marginBottom: '16px' }}>
                  {ind.focus}
                </p>
              </div>

              <div style={{ paddingTop: '12px', borderTop: '1px solid var(--color-hairline-soft)' }}>
                <Link
                  to={`/industries/${ind.id}`}
                  className="dropdown-link-item"
                  style={{ padding: 0, color: 'var(--color-primary)', fontWeight: 600, fontSize: '13px' }}
                >
                  <span>Explore Sector Blueprint &rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '36px', textAlign: 'center' }}>
          <Link to="/industries" className="btn-secondary">
            <span>View All 8 Industry Blueprints</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
