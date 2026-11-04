import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import { LogoBurst } from './ui/logo-burst';
import { EntwyLogo } from './EntwyLogo';

export const HeroRevamped: React.FC = () => {
  return (
    <div
      className="hero-root"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        minHeight: 'calc(100vh - var(--nav-height, 68px))',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >

      <section
        className="hero-section"
        aria-labelledby="hero-headline"
        style={{
          position: 'relative',
          zIndex: 1,
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'calc(var(--nav-height, 68px) + 32px)',
          paddingBottom: '32px',
        }}
      >
        <div
          className="container hero-burst-layout"
          style={{
            maxWidth: 'var(--content-max, 1360px)',
            marginInline: 'auto',
            paddingInline: 'var(--gutter, clamp(20px, 4vw, 56px))',
          }}
        >
          <div className="hero-burst-copy">
          {/* ──────────────────────────────────────────────────────────────────
              EXPO HERO PROPOSITION
              font-size: display-mega (64px) | weight: 600 | letter-spacing: -1.92px
              Inter font family, line-height: 1.05
             ────────────────────────────────────────────────────────────────── */}
          <div style={{ maxWidth: '820px', marginBottom: '40px' }}>
            <h1
              id="hero-headline"
              style={{
                fontFamily: "var(--font-primary, 'Inter', -apple-system, system-ui, sans-serif)",
                fontSize: 'clamp(40px, 5.2vw, var(--text-display-mega, 64px))',
                fontWeight: 600,
                lineHeight: 'var(--leading-display-mega, 1.05)',
                letterSpacing: 'var(--tracking-display-mega, -1.92px)',
                color: 'var(--color-ink, #171717)',
                marginBottom: '24px',
                textWrap: 'balance',
              }}
            >
              Software that moves your business forward.
            </h1>

            {/* Supporting statement — Expo body typography (Inter, 400 weight, 1.5 line-height) */}
            <p
              style={{
                fontFamily: "var(--font-family-2, 'Inter', sans-serif)",
                fontSize: 'clamp(16px, 1.5vw, 18px)',
                fontWeight: 400,
                lineHeight: 'var(--leading-body-md, 1.5)',
                letterSpacing: 'var(--tracking-body-md, 0)',
                color: 'var(--color-body, #60646c)',
                maxWidth: '60ch',
              }}
            >
              We design and build digital products, AI workflows and business systems — from the first idea to everyday operation.
            </p>
          </div>

          {/* ──────────────────────────────────────────────────────────────────
              CTA ROW — Expo buttons (8px radius, 40px height, 14px button font)
             ────────────────────────────────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <Link
              to="/start-a-project"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '40px',
                padding: '10px 18px',
                borderRadius: 'var(--radius-md, 8px)',
                backgroundColor: 'var(--color-primary, #000000)',
                color: '#ffffff',
                fontFamily: "var(--font-body, 'Inter', sans-serif)",
                fontSize: 'var(--text-button, 14px)',
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '0',
                textDecoration: 'none',
                boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                transition: 'background-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#1a1a1a';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#000000';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              <span>Start a project</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <Link
              to="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                height: '40px',
                padding: '9px 17px',
                borderRadius: 'var(--radius-md, 8px)',
                backgroundColor: 'transparent',
                color: 'var(--color-ink, #171717)',
                border: '1px solid var(--color-hairline-strong, #dcdee0)',
                fontFamily: "var(--font-body, 'Inter', sans-serif)",
                fontSize: 'var(--text-button, 14px)',
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '0',
                textDecoration: 'none',
                transition: 'background-color 0.15s ease, border-color 0.15s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--color-canvas-soft, #fafafa)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-muted, #999999)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-hairline-strong, #dcdee0)';
              }}
            >
              <span>View our work</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          </div>
          <div className="hero-burst-art">
            <LogoBurst><EntwyLogo height={42} showWordmark={false} /></LogoBurst>
            <p className="hero-burst-hint">Move through the field</p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────────
          LOGO STRIP — between two horizontal rules, below the hero
          "Technologies and platforms we work with"
          Presented honestly — not claiming these are ENTWY clients.
         ───────────────────────────────────────────────────────────────────── */}
      <div
        className="hero-logo-strip"
        style={{
          position: 'relative',
          zIndex: 1,
          borderTop: '1px solid var(--color-hairline, #e3e8ee)',
          borderBottom: '1px solid var(--color-hairline, #e3e8ee)',
          paddingBlock: '20px',
          backgroundColor: '#ffffff',
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 'var(--content-max, 1360px)',
            marginInline: 'auto',
            paddingInline: 'var(--gutter, clamp(20px, 4vw, 56px))',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px 24px',
              width: '100%',
            }}
          >
            <span
              style={{
                fontSize: '12px',
                fontWeight: 400,
                color: 'var(--color-muted, #64748d)',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
              }}
            >
              Technologies we work with
            </span>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '16px clamp(20px, 2.5vw, 36px)',
              }}
            >
              {['React', 'Next.js', 'Node.js', 'AWS', 'Google Cloud', 'PostgreSQL', 'Python'].map((name) => (
                <span
                  key={name}
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--color-ink, #0a2540)',
                    opacity: 0.52,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                    fontFamily: "var(--font-display, 'Inter', sans-serif)",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroRevamped;
