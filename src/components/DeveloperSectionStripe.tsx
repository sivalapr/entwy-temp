import React, { useState } from 'react';
import { ArrowRight, Check, Copy, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * DeveloperSectionStripe — engineering approach on a dark (#0a2540) surface.
 * Clean syntax-highlighted code editor without raw HTML artifacts.
 * No eyebrow badge above heading.
 */

type Lang = 'typescript' | 'python' | 'curl';

interface CodeToken {
  text: string;
  color?: string;
}

type CodeLine = CodeToken[];

const codeBlocks: Record<Lang, { filename: string; lines: CodeLine[] }> = {
  typescript: {
    filename: 'api-client.ts',
    lines: [
      [{ text: '// Typed REST client with runtime schema validation', color: '#64748d' }],
      [
        { text: 'import', color: '#a78bfa' },
        { text: ' { z } ', color: '#cad5e2' },
        { text: 'from', color: '#a78bfa' },
        { text: " 'zod'", color: '#34d399' },
        { text: ';', color: '#cad5e2' },
      ],
      [],
      [
        { text: 'const', color: '#a78bfa' },
        { text: ' ProductSchema = z.object({', color: '#cad5e2' },
      ],
      [{ text: '  id: z.string(),', color: '#cad5e2' }],
      [{ text: '  name: z.string(),', color: '#cad5e2' }],
      [
        { text: '  status: z.enum([', color: '#cad5e2' },
        { text: "'active'", color: '#34d399' },
        { text: ', ', color: '#cad5e2' },
        { text: "'archived'", color: '#34d399' },
        { text: ']),', color: '#cad5e2' },
      ],
      [{ text: '});', color: '#cad5e2' }],
      [],
      [
        { text: 'async function', color: '#a78bfa' },
        { text: ' fetchProduct', color: '#7dd3fc' },
        { text: '(id: string) {', color: '#cad5e2' },
      ],
      [
        { text: '  const', color: '#a78bfa' },
        { text: ' res = ', color: '#cad5e2' },
        { text: 'await', color: '#a78bfa' },
        { text: ' fetch', color: '#7dd3fc' },
        { text: '(`/api/products/${id}`);', color: '#cad5e2' },
      ],
      [
        { text: '  return', color: '#a78bfa' },
        { text: ' ProductSchema.', color: '#cad5e2' },
        { text: 'parse', color: '#7dd3fc' },
        { text: '(', color: '#cad5e2' },
        { text: 'await', color: '#a78bfa' },
        { text: ' res.', color: '#cad5e2' },
        { text: 'json', color: '#7dd3fc' },
        { text: '());', color: '#cad5e2' },
      ],
      [{ text: '}', color: '#cad5e2' }],
    ],
  },
  python: {
    filename: 'pipeline.py',
    lines: [
      [{ text: '# Document extraction pipeline with Claude 3.5', color: '#64748d' }],
      [
        { text: 'import', color: '#a78bfa' },
        { text: ' anthropic', color: '#cad5e2' },
      ],
      [
        { text: 'import', color: '#a78bfa' },
        { text: ' json', color: '#cad5e2' },
      ],
      [],
      [
        { text: 'client = anthropic.', color: '#cad5e2' },
        { text: 'Anthropic', color: '#7dd3fc' },
        { text: '()', color: '#cad5e2' },
      ],
      [],
      [
        { text: 'def', color: '#a78bfa' },
        { text: ' extract_fields', color: '#7dd3fc' },
        { text: '(text: str) -> dict:', color: '#cad5e2' },
      ],
      [
        { text: '    msg = client.messages.', color: '#cad5e2' },
        { text: 'create', color: '#7dd3fc' },
        { text: '(', color: '#cad5e2' },
      ],
      [
        { text: '        model=', color: '#cad5e2' },
        { text: '"claude-3-5-sonnet-20241022"', color: '#34d399' },
        { text: ',', color: '#cad5e2' },
      ],
      [
        { text: '        max_tokens=', color: '#cad5e2' },
        { text: '1024', color: '#f5a623' },
        { text: ',', color: '#cad5e2' },
      ],
      [
        { text: '        messages=[{"role": "user", "content": text}]', color: '#cad5e2' },
      ],
      [{ text: '    )', color: '#cad5e2' }],
      [
        { text: '    return', color: '#a78bfa' },
        { text: ' json.', color: '#cad5e2' },
        { text: 'loads', color: '#7dd3fc' },
        { text: '(msg.content[0].text)', color: '#cad5e2' },
      ],
    ],
  },
  curl: {
    filename: 'verify.sh',
    lines: [
      [{ text: '#!/bin/bash', color: '#64748d' }],
      [{ text: '# Verify production health endpoint', color: '#64748d' }],
      [],
      [
        { text: 'curl', color: '#a78bfa' },
        { text: ' -s -X GET https://api.entwy.io/v1/health \\', color: '#cad5e2' },
      ],
      [
        { text: '  -H ', color: '#cad5e2' },
        { text: '"Authorization: Bearer $ENTWY_API_KEY"', color: '#34d399' },
        { text: ' \\', color: '#cad5e2' },
      ],
      [
        { text: '  -H ', color: '#cad5e2' },
        { text: '"Content-Type: application/json"', color: '#34d399' },
        { text: ' | jq .', color: '#cad5e2' },
      ],
    ],
  },
};

export const DeveloperSectionStripe: React.FC = () => {
  const [activeLang, setActiveLang] = useState<Lang>('typescript');
  const [copied, setCopied] = useState(false);

  const snippet = codeBlocks[activeLang];
  const rawText = snippet.lines
    .map(line => line.map(token => token.text).join(''))
    .join('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      aria-labelledby="dev-heading"
      style={{
        backgroundColor: '#0a2540',
        paddingBlock: '96px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Slanted top edge transition */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: '-5%',
          right: '-5%',
          height: '56px',
          backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
          transform: 'skewY(-1.2deg)',
          transformOrigin: 'top left',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          right: 0,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(83,58,253,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          maxWidth: '1280px',
          marginInline: 'auto',
          paddingInline: 'clamp(20px, 4vw, 48px)',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '64px',
          alignItems: 'start',
        }}
      >
        {/* Left — copy (eyebrow removed) */}
        <div>
          <h2
            id="dev-heading"
            style={{
              fontFamily: "var(--font-family-2, 'Inter', sans-serif)",
              fontSize: 'clamp(28px, 3.2vw, var(--text-display-lg, 36px))',
              fontWeight: 600,
              lineHeight: 'var(--leading-display-lg, 1.15)',
              letterSpacing: 'var(--tracking-display-lg, -1.08px)',
              color: '#ffffff',
              marginBottom: '20px',
            }}
          >
            We write production code from day one.
          </h2>

          <p
            style={{
              fontSize: 'var(--text-body-md, 16px)',
              fontWeight: 400,
              lineHeight: 'var(--leading-body-md, 1.5)',
              color: '#a8c3de',
              marginBottom: '40px',
              maxWidth: '44ch',
            }}
          >
            Architecture before wireframes. Type-safe APIs, automated tests, and CI/CD pipelines built into the first sprint — not added at the end.
          </p>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 40px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {[
              {
                title: 'TypeScript across the full stack',
                desc: 'End-to-end type safety from database models to frontend components',
              },
              {
                title: 'CI/CD pipeline from sprint one',
                desc: 'Automated test suites, preview environments, and instant rollbacks',
              },
              {
                title: 'Incremental, reviewed delivery',
                desc: 'Working software shipped every two weeks — no speculative big-bang launches',
              },
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(0,212,255,0.15)',
                    color: '#00d4ff',
                    fontSize: '11px',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                  aria-hidden="true"
                >
                  ✓
                </span>
                <div>
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: '15px',
                      fontWeight: 600,
                      marginBottom: '2px',
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: '#8898aa',
                      fontSize: '14px',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/process"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '11px 22px',
                borderRadius: '9999px',
                backgroundColor: '#ffffff',
                color: '#0a2540',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              <span>How we work</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              to="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#a8c3de',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              <BookOpen size={14} aria-hidden="true" />
              <span>See our work</span>
            </Link>
          </div>
        </div>

        {/* Right — code console */}
        <div
          style={{
            backgroundColor: '#05192d',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
          }}
        >
          {/* Console top chrome */}
          <div
            style={{
              padding: '12px 18px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              backgroundColor: '#071d33',
            }}
          >
            {/* Window dots & filename */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '6px' }} aria-hidden="true">
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#febc2e', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28c840', display: 'inline-block' }} />
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  color: '#8898aa',
                }}
              >
                {snippet.filename}
              </span>
            </div>

            {/* Language tabs */}
            <div style={{ display: 'flex', gap: '4px' }}>
              {(['typescript', 'python', 'curl'] as Lang[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setActiveLang(lang)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: activeLang === lang ? 'rgba(83,58,253,0.4)' : 'transparent',
                    color: activeLang === lang ? '#ffffff' : '#8898aa',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    fontWeight: activeLang === lang ? 600 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {lang === 'typescript' ? 'TypeScript' : lang === 'python' ? 'Python' : 'cURL'}
                </button>
              ))}
            </div>
          </div>

          {/* Console code body */}
          <div
            style={{
              padding: '24px 20px',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '13px',
              lineHeight: 1.65,
              minHeight: '340px',
              overflowX: 'auto',
            }}
          >
            <code style={{ display: 'block' }}>
              {snippet.lines.map((lineTokens, lineIdx) => (
                <div
                  key={lineIdx}
                  style={{
                    minHeight: lineTokens.length === 0 ? '1.5em' : undefined,
                    whiteSpace: 'pre',
                  }}
                >
                  {lineTokens.map((token, tokIdx) => (
                    <span key={tokIdx} style={{ color: token.color || '#cad5e2' }}>
                      {token.text}
                    </span>
                  ))}
                </div>
              ))}
            </code>
          </div>

          {/* Console footer */}
          <div
            style={{
              padding: '10px 18px',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#041424',
              fontSize: '12px',
              color: '#64748d',
            }}
          >
            <span>Real architecture · Not demo mockups</span>
            <button
              type="button"
              onClick={handleCopy}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(255,255,255,0.04)',
                color: '#cad5e2',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                cursor: 'pointer',
              }}
            >
              {copied ? (
                <>
                  <Check size={12} color="#34d399" />
                  <span style={{ color: '#34d399' }}>Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSectionStripe;
