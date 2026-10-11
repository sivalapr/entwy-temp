import React from 'react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../data/sitemapData';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export const SolutionsGrid: React.FC<{ onOpenProjectModal: () => void }> = ({ onOpenProjectModal }) => {
  return (
    <section id="solutions-section" className="section-pad" style={{ background: 'var(--color-canvas-soft)' }}>
      <div className="container">
        <div style={{ marginBottom: 48, maxWidth: 820 }}>

          <h2 className="display-lg">Engineered solutions for complex systems.</h2>
          <p className="body-lg" style={{ marginTop: 14 }}>
            From building net-new AI platforms to automating high-volume business workflows, explore how ENTWY drives measurable operational outcomes.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '24px' }}>
          {solutionsData.map((sol) => (
            <article
              key={sol.id}
              className="step-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px',
                borderRadius: 'var(--radius-lg)',
              }}
            >
              <div>
                <span className="step-type-badge badge-trigger" style={{ marginBottom: '14px', fontSize: '11px' }}>
                  {sol.tag}
                </span>
                <Link to={`/solutions/${sol.id}`} style={{ textDecoration: 'none' }}>
                  <h3 className="title-md" style={{ marginBottom: '10px', color: 'var(--color-ink)' }}>
                    {sol.title}
                  </h3>
                </Link>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-body)', marginBottom: '20px' }}>
                  {sol.desc}
                </p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '8px', marginBottom: '24px' }}>
                  {sol.bullets.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-ink-mid)' }}>
                      <Check size={14} color="#108548" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-hairline-soft)' }}>
                <Link
                  to={`/solutions/${sol.id}`}
                  className="dropdown-link-item"
                  style={{ padding: 0, color: 'var(--color-primary)', fontWeight: 600, fontSize: '14px' }}
                >
                  <span>Explore Blueprint &rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
