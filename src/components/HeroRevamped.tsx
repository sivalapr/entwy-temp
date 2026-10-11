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
              BROAD EDITORIAL PROPOSITION
              font-size: ~48px | weight: 300 | letter-spacing: -0.96px
              max-width: ~960px — matches Stripe India DOM observation
             ────────────────────────────────────────────────────────────────── */}
          <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
            <h1
              id="hero-headline"
              style={{
                fontFamily: "var(--font-display, 'Inter', -apple-system, sans-serif)",
                fontSize: 'clamp(36px, 4.2vw, 56px)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.96px',
                color: 'var(--color-ink, #0a2540)',
                marginBottom: '24px',
                textWrap: 'balance',
              }}
            >
              Software that moves your business forward.
            </h1>

            {/* Supporting statement — display scale, restrained */}
            <p
              style={{
                fontFamily: "var(--font-body, 'Inter', sans-serif)",
                fontSize: 'clamp(17px, 1.6vw, 20px)',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'var(--color-body, #425466)',
                maxWidth: '60ch',
              }}
            >
              We design and build digital products, AI workflows and business systems — from the first idea to everyday operation.
            </p>
          </div>

          {/* ──────────────────────────────────────────────────────────────────
              CTA ROW — pill buttons per Stripe DESIGN.md spec
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
                padding: '10px 20px',
                borderRadius: '9999px',
                backgroundColor: 'var(--color-primary, #533afd)',
                color: '#ffffff',
                fontFamily: "var(--font-body, 'Inter', sans-serif)",
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1,
                textDecoration: 'none',
                boxShadow: '0 4px 6px -1px rgba(83,58,253,0.25), 0 2px 4px -2px rgba(83,58,253,0.15)',
                transition: 'background-color 0.15s ease, box-shadow 0.15s ease, transform 0.1s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#4434d4';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = '#533afd';
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
                padding: '10px 20px',
                borderRadius: '9999px',
                backgroundColor: 'transparent',
                color: 'var(--color-primary, #533afd)',
                fontFamily: "var(--font-body, 'Inter', sans-serif)",
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1,
                textDecoration: 'none',
                transition: 'color 0.15s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.textDecoration = 'underline';
                (e.currentTarget as HTMLElement).style.textUnderlineOffset = '3px';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.textDecoration = 'none';
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
