import React, { useId, useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { 
    title: 'Role-based permissions & security', 
    body: 'Every AI action respects your team\'s existing access levels, user permissions, and strict organizational data privacy rules.' 
  },
  { 
    title: 'Full visibility & audit logs', 
    body: 'Track every prompt, system decision, and automated action in real time with transparent activity history and complete logs.' 
  },
  { 
    title: 'Human-in-the-loop approvals', 
    body: 'Set critical milestones that require manager review before high-impact actions or database updates are finalized.' 
  },
  { 
    title: 'Connects directly to your tech stack', 
    body: 'Integrate seamlessly with Salesforce, Snowflake, Stripe, PostgreSQL, GitHub, and your custom internal APIs.' 
  },
];

export function ExpandableFeaturePanel() {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <section className="section-pad feature-panel-section" aria-labelledby={`${baseId}-title`}>
      <div
        className="container feature-panel-grid"
        style={{
          maxWidth: 'var(--content-max, 1360px)',
          marginInline: 'auto',
          paddingInline: 'var(--gutter, clamp(20px, 4vw, 56px))',
        }}
      >
        <div className="feature-panel-copy">
          <h2 id={`${baseId}-title`} className="display-lg">
            Intelligent automation with enterprise guardrails.
          </h2>
          <p className="body-md" style={{ marginTop: '16px', marginBottom: '24px' }}>
            We build custom AI agents and automated workflows that execute complex tasks quickly while keeping your team informed, compliant, and in control.
          </p>

          <div className="feature-accordion">
            {features.map((feature, index) => {
              const open = index === openIndex;
              const panelId = `${baseId}-panel-${index}`;
              return (
                <div className="feature-row" key={feature.title}>
                  <button 
                    type="button" 
                    aria-expanded={open} 
                    aria-controls={panelId} 
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    style={{
                      color: open ? 'var(--color-primary)' : 'var(--color-ink)',
                      transition: 'color 0.15s ease'
                    }}
                  >
                    <span>{feature.title}</span>
                    <ChevronDown size={17} className={open ? 'open' : ''} />
                  </button>
                  <div id={panelId} hidden={!open}>
                    <p>{feature.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link to="/services/ai" className="btn-secondary">
            <span>Explore AI & Automation</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div
          className="feature-panel-visual"
          aria-label="Governed workflow execution preview"
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            minHeight: '520px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(24px, 5vw, 48px)',
            backgroundImage: "url('/images/blue-wave-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 24px 48px -12px rgba(10, 37, 64, 0.35)',
          }}
        >
          {/* Subtle vignette overlay to enhance contrast */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(ellipse at center, rgba(10, 37, 64, 0.05) 0%, rgba(5, 18, 38, 0.35) 100%)',
              pointerEvents: 'none',
            }}
          />

          <div
            className="visual-window"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              zIndex: 10,
              background: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 24px 48px -10px rgba(0, 0, 0, 0.38), 0 0 0 1px rgba(255, 255, 255, 0.8) inset',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.08)',
            }}
          >
            <div className="visual-window-bar" style={{ padding: '12px 16px', background: '#ffffff', borderBottom: '1px solid var(--color-hairline)' }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#eb8e90', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ab6400', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#16a34a', display: 'inline-block' }} />
              </div>
              <b style={{ marginLeft: 12, fontSize: '13px', fontWeight: 600, color: 'var(--color-ink, #171717)' }}>
                Live Workflow Execution
              </b>
            </div>

            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', background: '#ffffff' }}>
              {[
                { title: 'Task Triggered & Verified', sub: 'Secure request validated via enterprise API', state: '01' },
                { title: 'Data Privacy & Policy Check', sub: 'Sensitive data masked and compliance verified', state: '02' },
                { title: 'AI Workflow Execution', sub: 'Task processed with verified reasoning logic', state: '03' },
                { title: 'Completed & Logged to System', sub: 'Output synced to database with audit record', state: '04' },
              ].map((step, index) => (
                <div 
                  key={step.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: index === 3 ? 'var(--color-primary-bg-subdued)' : 'var(--color-canvas-soft)',
                    border: index === 3 ? '1px solid rgba(0, 0, 0, 0.15)' : '1px solid var(--color-hairline)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span 
                      style={{ 
                        fontFamily: 'var(--font-mono)', 
                        fontSize: '11px', 
                        fontWeight: 600, 
                        color: index === 3 ? 'var(--color-primary)' : 'var(--color-muted)' 
                      }}
                    >
                      {step.state}
                    </span>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)' }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: '11.5px', color: 'var(--color-muted)', marginTop: '2px' }}>
                        {step.sub}
                      </div>
                    </div>
                  </div>
                  <CheckCircle2 size={16} color={index === 3 ? '#000000' : '#16a34a'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpandableFeaturePanel;
