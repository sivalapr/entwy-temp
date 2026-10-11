import React from 'react';
import { HomeFooter } from './HomeFooter';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { EntwyLogo } from './EntwyLogo';

export const Footer: React.FC = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return <HomeFooter />;
  return (
    <footer 
      className="footer" 
      style={{ 
        borderTop: '1px solid var(--color-hairline, #e3e8ee)', 
        backgroundColor: 'var(--color-canvas-soft, #f6f9fc)', 
        paddingTop: '64px', 
        paddingBottom: '40px' 
      }}
    >
      <div className="container">
        <div className="footer-columns-grid">
          {/* Brand info */}
          <div>
            <Link to="/" className="brand-logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              <EntwyLogo height={30} />
            </Link>
            <p style={{ maxWidth: '280px', fontSize: '14px', lineHeight: 1.6, color: 'var(--color-body, #273951)', marginBottom: '18px' }}>
              Financial-grade software solutions from architecture to production. Engineering modern web platforms, cloud backends, and intelligent systems.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', fontSize: '12px', padding: '4px 10px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-canvas)', border: '1px solid var(--color-hairline)', marginBottom: '16px' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: '#00d924' }} />
              <span style={{ color: 'var(--color-muted)' }}>All Systems Operational</span>
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--color-muted)' }}>
              A subsidiary of{' '}
              <a href="https://www.zuntra.com/" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', fontWeight: 500 }}>
                Zuntra Digital Pvt Ltd ↗
              </a>
            </div>
          </div>

          {/* Col 1: Services */}
          <div>
            <div className="footer-col-title" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ink)', marginBottom: '16px' }}>
              Services
            </div>
            <ul className="footer-links-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><Link to="/services/strategy">Strategy &amp; Architecture</Link></li>
              <li><Link to="/services/design">Design &amp; UI Systems</Link></li>
              <li><Link to="/services/ai">Autonomous AI &amp; Agents</Link></li>
              <li><Link to="/services/technology">Cloud Engineering</Link></li>
              <li><Link to="/services/marketing">Developer &amp; RevOps</Link></li>
            </ul>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <div className="footer-col-title" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ink)', marginBottom: '16px' }}>
              Solutions
            </div>
            <ul className="footer-links-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><Link to="/solutions/build-a-new-product">Build a New Product</Link></li>
              <li><Link to="/solutions/build-an-ai-product">Build an AI Product</Link></li>
              <li><Link to="/solutions/add-ai-to-your-product">Add AI to Existing SaaS</Link></li>
              <li><Link to="/solutions/modernise-your-platform">Modernise Platform</Link></li>
              <li><Link to="/solutions/automate-business-workflows">Automate Operations</Link></li>
            </ul>
          </div>

          {/* Col 3: Work & Process */}
          <div>
            <div className="footer-col-title" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ink)', marginBottom: '16px' }}>
              Delivery
            </div>
            <ul className="footer-links-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><Link to="/work">Case Studies</Link></li>
              <li><Link to="/process">Our Process</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/insights">Insights &amp; Essays</Link></li>
            </ul>
          </div>

          {/* Col 4: Company & Contact */}
          <div>
            <div className="footer-col-title" style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-ink)', marginBottom: '16px' }}>
              Company
            </div>
            <ul className="footer-links-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><Link to="/about">About ENTWY</Link></li>
              <li><Link to="/careers">Careers (Hiring)</Link></li>
              <li><Link to="/start-a-project">Start a Project</Link></li>
              <li><a href="mailto:info@zuntra.com">info@zuntra.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--color-hairline, #e3e8ee)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: 'var(--color-muted, #64748d)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px' }}>
            <span>© {new Date().getFullYear()} ENTWY</span>
            <Link to="/privacy" style={{ color: 'var(--color-muted)', textDecoration: 'none' }} className="hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" style={{ color: 'var(--color-muted)', textDecoration: 'none' }} className="hover:text-foreground">
              Terms
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-black/5 hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-black/5 hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-black/5 hover:text-foreground"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <span className="mx-2 h-4 w-px bg-border" aria-hidden="true" style={{ backgroundColor: 'var(--color-hairline, #e3e8ee)' }} />
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 rounded-sm px-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Back to top</span>
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 19V5m-6 6 6-6 6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
