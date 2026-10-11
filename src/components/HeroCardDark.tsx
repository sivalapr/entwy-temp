import React from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const HeroCardDark: React.FC<{ onOpenProjectModal: () => void }> = ({ onOpenProjectModal }) => (
  <section className="section-pad" style={{ paddingTop: 0 }}>
    <div className="container">
      <div className="hero-card-dark">
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center' }}>
          <div>

            <h2 className="display-lg" style={{ color: '#fffefb', margin: '16px 0 20px', lineHeight: 1.15 }}>
              Autonomous systems. From insight to production impact.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: '#c5c0b1', marginBottom: 28 }}>
              Unite fragmented business databases, autonomous reasoning loops, and everyday human workflows into cohesive, reliable enterprise engines.
            </p>
            <button onClick={onOpenProjectModal} className="btn-primary">
              <span>Start a conversation</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div style={{ display: 'grid', gap: 0 }}>
            {['Insight', 'Intelligence', 'Impact'].map((label, i) => (
              <div
                key={label}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: 16,
                  padding: '20px 0',
                  borderBottom: i < 2 ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
                }}
              >
                <span style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', fontSize: '18px', fontWeight: 700 }}>
                  0{i + 1}
                </span>
                <div>
                  <strong style={{ color: '#fffefb', fontSize: 16.5, display: 'block', marginBottom: '4px' }}>{label}</strong>
                  <p style={{ color: '#c5c0b1', fontSize: 13.5, lineHeight: 1.5 }}>
                    {[
                      'Understand and structure operational data and high-friction opportunities.',
                      'Connect autonomous AI models, event buses, and real-time triggers.',
                      'Deploy deterministic automations with continuous human oversight.',
                    ][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
