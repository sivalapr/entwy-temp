import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articlesData } from '../data/sitemapData';

export const InsightsEditorial: React.FC = () => {
  return (
    <section className="section-pad" style={{ background: 'var(--color-canvas)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 36, flexWrap: 'wrap' }}>
          <div>
            <h2 className="display-lg">Thinking behind the work.</h2>
          </div>
          <Link to="/insights" className="btn-secondary">
            <span>All insights</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '24px' }}>
          {articlesData.slice(0, 3).map((article) => (
            <article
              key={article.id}
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="step-type-badge badge-trigger">{article.tag}</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                    {article.date} · {article.readTime}
                  </span>
                </div>
                <Link to={`/insights/article/${article.id}`} style={{ textDecoration: 'none' }}>
                  <h3 className="title-md" style={{ margin: '8px 0 12px', color: 'var(--color-ink)', lineHeight: 1.35 }}>
                    {article.title}
                  </h3>
                </Link>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: 'var(--color-body)' }}>{article.summary}</p>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--color-hairline-soft)', marginTop: '20px' }}>
                <Link
                  to={`/insights/article/${article.id}`}
                  className="dropdown-link-item"
                  style={{ padding: 0, color: 'var(--color-primary)', fontWeight: 600, fontSize: '13.5px' }}
                >
                  <span>Read article &rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
