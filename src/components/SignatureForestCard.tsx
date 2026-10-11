import React from 'react';
import { ArrowRight, Lock, ShieldCheck, Sparkles, Workflow, Zap } from 'lucide-react';

export const SignatureForestCard: React.FC<{ onOpenProjectModal: () => void }> = ({ onOpenProjectModal }) => (
  <section className="section-pad" style={{ paddingTop: 0 }}>
    <div className="container">
      <div className="signature-forest-card">
        <div className="signature-forest-inner">
          <div>

            <h2 className="display-lg" style={{ color: '#fffefb', margin: '16px 0 20px', lineHeight: 1.15 }}>
              Useful intelligence. Designed with enterprise care.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: '#c5c0b1', marginBottom: 28 }}>
              Enterprise automation must operate with complete contextual relevance, fit established team processes, and enforce ironclad governance, access control, and human oversight.
            </p>
            <button className="btn-primary" onClick={onOpenProjectModal}>
              Schedule Governance Briefing <ArrowRight size={15} />
            </button>
          </div>

          <div style={{ display: 'grid', gap: 14 }}>
            {[
              {
                icon: <Sparkles size={18} color="var(--color-primary)" />,
                title: 'Contextual Grounding',
                desc: 'Ground agent reasoning in your verified internal databases and secure vectors without hallucination.',
              },
              {
                icon: <Workflow size={18} color="var(--color-primary)" />,
                title: 'Deep System Integration',
                desc: 'Seamlessly link trigger events across Salesforce, HubSpot, Stripe, Slack, and your internal APIs.',
              },
              {
                icon: <Lock size={18} color="var(--color-primary)" />,
                title: 'Governed & Audited',
                desc: 'Role-based access permissions, end-to-end execution logging, and deterministic fallback procedures.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  padding: '20px 22px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  color: '#fffefb',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div style={{ padding: '8px', background: 'rgba(255, 79, 0, 0.12)', borderRadius: 'var(--radius-sm)' }}>
                  {item.icon}
                </div>
                <div>
                  <strong style={{ fontSize: '16px', color: '#fffefb', display: 'block', marginBottom: '4px' }}>
                    {item.title}
                  </strong>
                  <p style={{ fontSize: 13.5, color: '#c5c0b1', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
