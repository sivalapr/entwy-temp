import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Users, Sparkles, Award, ArrowRight, HeartHandshake, Terminal } from 'lucide-react';

interface AboutCareersSectionProps {
  onOpenProjectModal: () => void;
}

export const AboutCareersSection: React.FC<AboutCareersSectionProps> = ({ onOpenProjectModal }) => {
  const values = [
    { title: "First-Principles Rigor", desc: "No cargo-culting or framework zealotry. We reason from fundamental system constraints, physics of software, and real customer value." },
    { title: "Zero Spec Bloat", desc: "Working code running in staging beats 80-page PRD decks. We build, measure, benchmark, and deploy in tight iterative cycles." },
    { title: "Craft Over Consensus", desc: "Great software requires opinionated craftsmanship. We obsess over 16ms animation frames, sub-100ms API responses, and clean domain models." },
    { title: "Extreme Transparency", desc: "Direct access to lead engineers, unfiltered slack channels, and shared code repositories from sprint zero to production cutover." }
  ];

  const openPositions = [
    { title: "Frontend Developer Intern", team: "Technology & Engineering", type: "Internship · Chennai" },
    { title: "Generative AI / ML Intern", team: "Artificial Intelligence & Data", type: "Internship · Chennai" },
    { title: "UI/UX Design Intern", team: "Creative & Design", type: "Internship · Chennai" },
    { title: "Product Management Intern", team: "Product & Project Management", type: "Internship · Chennai" },
    { title: "Digital Marketing Intern", team: "Marketing & Growth", type: "Internship · Chennai" }
  ];

  return (
    <section id="about-section" className="section-pad" style={{ backgroundColor: 'var(--color-canvas-soft)' }}>
      <div className="container">
        {/* About Section */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ maxWidth: '720px', marginBottom: '32px' }}>
            <h2 className="display-md">A studio built by senior engineers and product designers.</h2>
            <p className="body-lg" style={{ marginTop: '12px' }}>
              ENTWY was founded on a simple observation: conventional digital agencies drown in management bloat, while traditional enterprise software consultancies move at glacial speed. We assembled a lean, world-class guild that pairs the velocity of an elite venture team with enterprise infrastructure standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {values.map(val => (
              <div key={val.title} style={{ backgroundColor: 'var(--color-surface-card)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-lg)', padding: '22px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-text-link)', marginBottom: '14px' }}></div>
                <h3 className="title-sm" style={{ marginBottom: '8px', fontSize: '15.5px' }}>{val.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.5 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Careers Section */}
        <div id="careers-section" style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '64px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 className="display-md">Department-wise Internship Opportunities</h2>
              <p className="body-md" style={{ marginTop: '8px' }}>
                36 active internship openings across 9 specialized departments based at our Chennai studio. Real-world mentorship, hands-on production experience, and PPO potential.
              </p>
            </div>

            <Link to="/careers" className="btn-secondary" style={{ textDecoration: 'none' }}>
              <span>View All 36 Opportunities</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {openPositions.map(pos => (
              <div 
                key={pos.title} 
                style={{
                  backgroundColor: 'var(--color-surface-card)',
                  border: '1px solid var(--color-hairline-strong)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'border-color 0.15s ease'
                }}
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)' }}>{pos.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-muted)' }}>{pos.team}</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', padding: '4px 10px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-hairline-soft)', border: '1px solid var(--color-hairline)', color: 'var(--color-muted)', fontWeight: 500 }}>
                    {pos.type}
                  </span>
                  <Link 
                    to="/careers"
                    className="text-link"
                    style={{ textDecoration: 'none' }}
                  >
                    Apply &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCareersSection;
