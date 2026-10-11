import React from 'react';
import { ArrowRight, Bot, CheckCircle2, Sparkles, Zap } from 'lucide-react';

interface SignatureCoralCardProps {
  onOpenProjectModal: () => void;
}

export const SignatureCoralCard: React.FC<SignatureCoralCardProps> = ({ onOpenProjectModal }) => {
  return (
    <section className="section-pad" style={{ paddingTop: 0 }}>
      <div className="container">
        <div
          style={{
            backgroundColor: 'var(--color-surface-dark)',
            color: 'var(--color-on-dark)',
            borderRadius: 'var(--radius-xl)',
            padding: '56px 48px',
            border: '1px solid rgba(255, 79, 0, 0.25)',
            boxShadow: '0 20px 48px rgba(32, 21, 21, 0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Subtle warm orange glow */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: '450px',
              height: '450px',
              background: 'radial-gradient(circle, rgba(255, 79, 0, 0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  backgroundColor: 'rgba(255, 79, 0, 0.15)',
                  border: '1px solid rgba(255, 79, 0, 0.3)',
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  marginBottom: '20px',
                  color: 'var(--color-primary)',
                }}
              >
                <Zap size={14} />
                <span>Zero-Friction Enterprise Automation</span>
              </div>

              <h2 className="display-lg" style={{ color: '#fffefb', marginBottom: '18px', lineHeight: 1.15 }}>
                Production-grade automation with enterprise governance.
              </h2>

              <p style={{ fontSize: '17px', lineHeight: 1.6, color: '#c5c0b1', marginBottom: '32px' }}>
                Eliminate thousands of manual hours and rigid legacy silos. From autonomous multi-agent reasoning chains to real-time sync with your CRM and ERP, ENTWY automates your high-value operations without compromise.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
                <button className="btn-primary" onClick={onOpenProjectModal}>
                  <span>Book Architecture Scoping</span>
                  <ArrowRight size={16} />
                </button>
                <a
                  href="#solutions-section"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontSize: '15px',
                    fontWeight: 600,
                  }}
                >
                  Review automation blueprints &rarr;
                </a>
              </div>
            </div>

            {/* Zapier Execution Comparison Box */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '18px',
                  paddingBottom: '14px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <span
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: '#c5c0b1',
                  }}
                >
                  Operational Cadence Benchmark
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-mono)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Sparkles size={12} /> Real-time
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Legacy / Manual */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#f87171',
                      marginBottom: '6px',
                    }}
                  >
                    <span>Manual Workflows &amp; Legacy IT</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>4–12 Weeks</span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#939084', lineHeight: 1.45 }}>
                    Fragmented copy-pasting, human data entry bottlenecks, delayed customer response times.
                  </div>
                </div>

                {/* ENTWY Autonomous Workflows */}
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'rgba(255, 79, 0, 0.08)',
                    border: '1px solid var(--color-primary)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#fffefb',
                      marginBottom: '6px',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Zap size={15} color="var(--color-primary)" />
                      <span>ENTWY Autonomous Workflows</span>
                    </span>
                    <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                      Sub-second latency
                    </span>
                  </div>
                  <div style={{ fontSize: '13px', color: '#f8f4f0', lineHeight: 1.45 }}>
                    Deterministic API actions, multi-agent AI verification, live bidirectional state synchronization.
                  </div>
                </div>
              </div>

              <div
                style={{
                  marginTop: '18px',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: '#939084',
                }}
              >
                <span>Automations Run: 10M+ Monthly</span>
                <span style={{ color: 'var(--color-primary)' }}>Error Rate: &lt; 0.001%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
