import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../data/serviceFaqs';

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
}

const JSON_LD_ID = 'faq-jsonld';

export const FaqSection: React.FC<FaqSectionProps> = ({
  faqs,
  title = 'Frequently asked questions.',
  subtitle = 'Straight answers before you reach out.',
  badge = 'Clarity & Transparency',
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // FAQPage structured data for search engines
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = JSON_LD_ID;
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    document.getElementById(JSON_LD_ID)?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [faqs]);

  // Reset open item when navigating between pages
  useEffect(() => setOpenIdx(0), [faqs]);

  if (faqs.length === 0) return null;

  return (
    <section style={{ marginBottom: 72 }} aria-labelledby="faq-heading">
      <div style={{ maxWidth: 780, marginBottom: 36 }}>
        <span className="step-type-badge badge-trigger" style={{ marginBottom: 12, display: 'inline-block' }}>
          {badge}
        </span>
        <h2 id="faq-heading" className="display-md" style={{ color: 'var(--color-ink)', marginBottom: 12 }}>
          {title}
        </h2>
        <p className="body-lg" style={{ color: 'var(--color-body)' }}>
          {subtitle}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={faq.q}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-hairline)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-ink)' }}>{faq.q}</span>
                <ChevronDown
                  size={18}
                  color="var(--color-muted)"
                  style={{
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}
                />
              </button>
              {isOpen && (
                <div style={{ padding: '0 24px 20px 24px', borderTop: '1px solid var(--color-canvas-soft)' }}>
                  <p style={{ fontSize: 14.5, color: 'var(--color-body)', lineHeight: 1.6, margin: '16px 0 0', fontWeight: 400 }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
