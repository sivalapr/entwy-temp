import React, { useState } from 'react';
import { HomeFooter } from './HomeFooter';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Check, Send, Loader2 } from 'lucide-react';
import { EntwyLogo } from './EntwyLogo';
import { submitNewsletterSubscriber } from '../lib/firebase';

export const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  if (pathname === "/") return <HomeFooter />;

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || loading) return;
    setLoading(true);
    try {
      await submitNewsletterSubscriber(email.trim(), 'Subpage Footer');
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      console.error(err);
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  };

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
              <li><Link to="/api-development">API Development &amp; Integration</Link></li>
              <li><Link to="/mcp-development-services">MCP Development Services</Link></li>
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

        {/* Newsletter Subscription Row */}
        <div style={{ margin: '40px 0 24px', padding: '24px 28px', borderRadius: 'var(--radius-lg, 16px)', backgroundColor: 'var(--color-canvas, #ffffff)', border: '1px solid var(--color-hairline, #e3e8ee)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink, #0a2540)' }}>
              Subscribe to Engineering Briefs &amp; Architecture Notes
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted, #64748d)', marginTop: '2px' }}>
              Submissions sync directly with our central marketing monitoring dashboard.
            </div>
          </div>

          {subscribed ? (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: 'var(--radius-pill, 9999px)', backgroundColor: '#ecfdf5', border: '1px solid #a7f3d0', color: '#059669', fontSize: '13px', fontWeight: 600 }}>
              <Check size={16} />
              <span>Subscribed to updates!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 'min(100%, 320px)' }}>
              <input
                type="email"
                required
                placeholder="Enter work email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '9px 14px',
                  borderRadius: 'var(--radius-pill, 9999px)',
                  border: '1px solid var(--color-hairline-strong, #cbd5e1)',
                  fontSize: '13.5px',
                  outline: 'none',
                  backgroundColor: 'var(--color-canvas-soft, #f8fafc)',
                  color: 'var(--color-ink, #0a2540)'
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn-primary"
                style={{ padding: '9px 18px', fontSize: '13px', borderRadius: 'var(--radius-pill, 9999px)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer' }}
              >
                {loading ? <Loader2 size={14} className="animate-spin" /> : <span>Subscribe</span>}
              </button>
            </form>
          )}
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
