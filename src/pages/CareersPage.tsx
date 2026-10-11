import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { careersSectionsData } from '../data/sitemapData';
import { CareersEditorialHero } from '../components/CareersEditorialHero';
import { 
  ArrowRight, 
  Briefcase, 
  CheckCircle2, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles, 
  UserCheck, 
  Users, 
  Zap,
  ChevronRight
} from 'lucide-react';

export const CareersPage: React.FC = () => {
  const { section } = useParams<{ section?: string }>();
  const [life, openRoles, internships, hiring] = careersSectionsData;
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (section && sectionRefs.current[section]) {
      sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [section]);

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb if sub-route */}
        {section && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/careers" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Careers</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
              {careersSectionsData.find(s => s.id === section)?.title || section}
            </span>
          </nav>
        )}

        {/* Hero04: Editorial Careers Introduction */}
        <CareersEditorialHero />

        {/* Career Section Quick Tabs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
          {careersSectionsData.map((sec) => {
            const isSelected = section === sec.id;
            return (
              <Link
                key={sec.id}
                to={`/careers/${sec.id}`}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline-strong)',
                  backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-canvas-soft)',
                  color: isSelected ? '#ffffff' : 'var(--color-ink)',
                  textDecoration: 'none',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  transition: 'all 0.15s ease'
                }}
              >
                {sec.title}
              </Link>
            );
          })}
        </div>

        {/* 1. Life at ENTWY */}
        <section
          id="life-at-entwy"
          ref={(el) => { sectionRefs.current['life-at-entwy'] = el; }}
          style={{
            backgroundColor: '#ffffff',
            border: section === 'life-at-entwy' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '40px',
            boxShadow: section === 'life-at-entwy' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <Sparkles size={20} color="var(--color-primary)" />
            <h2 className="title-lg" style={{ color: 'var(--color-ink)' }}>
              {life.title}
            </h2>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--color-body)', lineHeight: 1.6, maxWidth: '800px', marginBottom: '24px' }}>
            {life.desc}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '16px' }}>
            {[
              'Direct founder & client access',
              'Async-first deep work schedule',
              'Competitive equity & top-tier compensation',
              'Modern hardware (M3 Max / 64GB) stipend',
            ].map((perk) => (
              <div key={perk} style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#ffffff', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)', fontSize: '14px', color: 'var(--color-ink)' }}>
                <CheckCircle2 size={16} color="#108548" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Open Positions */}
        <section
          id="open-positions"
          ref={(el) => { sectionRefs.current['open-positions'] = el; }}
          style={{
            backgroundColor: '#ffffff',
            border: section === 'open-positions' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '40px',
            boxShadow: section === 'open-positions' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginBottom: '4px' }}>
                {openRoles.title}
              </h2>
              <p style={{ fontSize: '14.5px', color: 'var(--color-body)' }}>
                All roles open to remote candidates globally or based out of our Brooklyn / Chennai studios.
              </p>
            </div>
            <span className="step-type-badge badge-trigger">
              4 Active Openings
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {openRoles.roles?.map((role) => (
              <div
                key={role.title}
                className="step-card"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px 28px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                    {role.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '13.5px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
                    <span>{role.location}</span>
                    <span>·</span>
                    <span>{role.type}</span>
                  </div>
                </div>

                <a
                  href={`mailto:info@zuntra.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                  className="btn-primary"
                  style={{ padding: '10px 20px', fontSize: '14px' }}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* 3 & 4. Internships & Hiring Process Side-by-Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '28px', marginBottom: '64px' }}>
          {/* Internships */}
          <div
            id="internships"
            ref={(el) => { sectionRefs.current['internships'] = el; }}
            style={{
              backgroundColor: '#ffffff',
              border: section === 'internships' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              boxShadow: section === 'internships' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: '#fff', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', marginBottom: '18px' }}>
              <GraduationCap size={20} />
            </div>
            <h3 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              {internships.title}
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '24px' }}>
              {internships.desc}
            </p>
            <a
              href="mailto:info@zuntra.com?subject=Fellowship%20Application"
              className="dropdown-link-item"
              style={{ color: 'var(--color-primary)', fontWeight: 600, padding: 0 }}
            >
              <span>Apply for 2026 Fellowship &rarr;</span>
            </a>
          </div>

          {/* Hiring Process */}
          <div
            id="hiring-process"
            ref={(el) => { sectionRefs.current['hiring-process'] = el; }}
            style={{
              backgroundColor: '#ffffff',
              border: section === 'hiring-process' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
              borderRadius: 'var(--radius-lg)',
              padding: '36px',
              boxShadow: section === 'hiring-process' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: '#fff', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', marginBottom: '18px' }}>
              <UserCheck size={20} />
            </div>
            <h3 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              {hiring.title}
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '24px' }}>
              {hiring.desc}
            </p>
            <span style={{ fontSize: '13px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)' }}>
              ⚡ 48-hour post-pairing decision guarantee
            </span>
          </div>
        </div>

        {/* Bottom CTA Band */}
        <div 
          className="cta-wave-banner"
          style={{ 
            marginTop: '72px', 
            padding: '52px', 
            textAlign: 'center', 
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 300 }}>
            Don't see a role that fits?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 300 }}>
            We are always looking for exceptional distributed systems engineers, agent researchers, and systems designers. Send us your work.
          </p>
          <a href="mailto:careers@entwy.com" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
            <span>Send Open Application</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};
