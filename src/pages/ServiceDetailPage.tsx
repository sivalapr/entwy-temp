import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { allServiceDetails } from '../data/serviceDetailsData';
import { servicesPillarsData } from '../data/sitemapData';
import { getServiceFaqs } from '../data/serviceFaqs';
import { FaqSection } from '../components/FaqSection';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Layers, 
  Compass, 
  Terminal, 
  Clock, 
  Award,
  ChevronRight
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { category, slug } = useParams<{ category?: string; slug?: string }>();
  const navigate = useNavigate();

  // Resolve slug whether route is /services/:category/:slug or /services/:slug
  const targetSlug = slug || category || '';
  const service = allServiceDetails[targetSlug];

  if (!service) {
    return (
      <div className="page-shell">
        <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>

          <h1 className="display-lg" style={{ marginBottom: 16 }}>
            Capability Not Found
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-body)', maxWidth: 540, margin: '0 auto 32px' }}>
            The requested engineering capability could not be located. Explore our comprehensive services catalog below.
          </p>
          <Link to="/services" className="btn-primary" style={{ display: 'inline-flex' }}>
            <ArrowLeft size={16} />
            <span>Return to All Services</span>
          </Link>
        </div>
      </div>
    );
  }

  // Find other services in the same category
  const pillarKey = service.category;
  const pillar = servicesPillarsData[pillarKey as keyof typeof servicesPillarsData];
  const relatedServices = pillar?.items.filter(item => item.slug !== service.slug) || [];

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb Bar */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/services" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
          <ChevronRight size={13} />
          <Link to={`/services#${service.category}`} style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>{service.categoryTitle}</Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{service.title}</span>
        </nav>

        {/* Hero Section */}
        <div style={{ maxWidth: 880, marginBottom: 56 }}>

          <h1 className="display-xl" style={{ marginBottom: 20, lineHeight: 1.15 }}>
            {service.title}
          </h1>
          <p style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--color-ink-mid)', marginBottom: 24, fontWeight: 500 }}>
            {service.tagline}
          </p>
          <p className="body-lg" style={{ color: 'var(--color-body)', marginBottom: 36, lineHeight: 1.65 }}>
            {service.overview}
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link 
              to={`/start-a-project?service=${service.slug}`} 
              className="btn-primary"
              style={{ padding: '14px 26px', fontSize: '15px' }}
            >
              <span>Scope {service.title}</span>
              <ArrowRight size={15} />
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary"
              style={{ padding: '14px 22px', fontSize: '15px' }}
            >
              <ArrowLeft size={15} />
              <span>All Capabilities</span>
            </Link>
          </div>
        </div>

        {/* Measured Impact Badge - Stripe Dark Shell */}
        <div 
          style={{
            backgroundColor: '#0a2540',
            color: '#ffffff',
            borderRadius: 'var(--radius-xl)',
            padding: '36px 40px',
            marginBottom: '56px',
            border: '1px solid #1c1e54',
            boxShadow: '0 20px 48px -12px rgba(10, 37, 64, 0.35)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
            flexWrap: 'wrap'
          }}
        >
          <div style={{ maxWidth: 700 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#00d4ff', textTransform: 'none', letterSpacing: '0.08em', marginBottom: 8, fontWeight: 600 }}>
              <Award size={14} />
              <span>Demonstrated Performance Metric</span>
            </div>
            <div style={{ fontSize: '18px', fontWeight: 500, color: '#ffffff', lineHeight: 1.5 }}>
              "{service.metrics}"
            </div>
          </div>
          <Link
            to="/work"
            className="btn-primary"
            style={{ padding: '10px 20px', fontSize: '13.5px', whiteSpace: 'nowrap' }}
          >
            <span>Review Client Results</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* 2-Column Content Layout: Key Capabilities & Technical Runbook */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 36, marginBottom: 56 }}>
          {/* Key Capabilities */}
          <div>

            <h2 className="display-sm" style={{ marginBottom: 24 }}>
              What We Deliver
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {service.keyCapabilities.map((cap, idx) => (
                <div 
                  key={cap.name}
                  style={{
                    backgroundColor: 'var(--color-canvas-soft)',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '24px',
                  }}
                  className="step-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700 }}>
                      0{idx + 1}
                    </span>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--color-ink)', margin: 0 }}>
                      {cap.name}
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.55, margin: 0 }}>
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Execution Approach */}
          <div>

            <h2 className="display-sm" style={{ marginBottom: 24 }}>
              How We Execute
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {service.technicalApproach.map((step, idx) => (
                <div 
                  key={step}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px 22px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 14,
                    boxShadow: '0 2px 8px rgba(32, 21, 21, 0.02)'
                  }}
                >
                  <div 
                    style={{ 
                      width: 28, 
                      height: 28, 
                      borderRadius: '50%', 
                      backgroundColor: 'var(--color-canvas-soft)', 
                      border: '1px solid var(--color-hairline)', 
                      display: 'grid', 
                      placeItems: 'center', 
                      fontSize: '12px', 
                      fontFamily: 'var(--font-mono)', 
                      fontWeight: 700, 
                      color: 'var(--color-primary)',
                      flexShrink: 0,
                      marginTop: 2
                    }}
                  >
                    {idx + 1}
                  </div>
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-mid)', lineHeight: 1.5, margin: 0 }}>
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Deliverables Checklist */}
            <div style={{ marginTop: 32, backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-lg)', padding: '28px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 16, textTransform: 'none', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)' }}>
                Target Engineering Deliverables
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {service.deliverables.map(deliv => (
                  <div key={deliv} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '14px', color: 'var(--color-ink-mid)' }}>
                    <CheckCircle2 size={16} color="#108548" style={{ flexShrink: 0 }} />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div style={{ marginBottom: 64, padding: '32px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-hairline)' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', textTransform: 'none', letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: 16, fontWeight: 700 }}>
            Production Tech Stack &amp; Tooling Ecosystem
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {service.stack.map(tech => (
              <span 
                key={tech}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  backgroundColor: 'var(--color-canvas-soft)',
                  border: '1px solid var(--color-hairline-strong)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--color-ink)',
                  fontWeight: 600
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Related Services in this Domain */}
        {relatedServices.length > 0 && (
          <div style={{ marginBottom: 64 }}>

            <h2 className="title-lg" style={{ marginBottom: 24 }}>
              Explore Complementary Services
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: 20 }}>
              {relatedServices.map(item => (
                <Link
                  key={item.name}
                  to={`/services/${service.category}/${item.slug}`}
                  style={{
                    backgroundColor: 'var(--color-canvas-soft)',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-md)',
                    padding: '20px',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  className="step-card"
                >
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-ink)', marginBottom: 6 }}>
                      {item.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.5, marginBottom: 12 }}>
                      {item.desc}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)' }}>
                    <span>Learn More</span>
                    <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <FaqSection
          faqs={getServiceFaqs(service.slug, service.title)}
          subtitle={`Everything you need to know about ${service.title} with ENTWY.`}
        />

        {/* Bottom Call to Action */}
        <div className="cta-wave-banner" style={{ padding: '52px', textAlign: 'center' }}>
          <h2 className="display-md" style={{ marginBottom: 12 }}>
            Ready to integrate {service.title}?
          </h2>
          <p style={{ color: 'var(--color-body)', fontSize: '16px', maxWidth: 600, margin: '0 auto 28px', lineHeight: 1.6 }}>
            Connect with an ENTWY staff architect today for a confidential scoping session and technical architecture roadmap.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link 
              to={`/start-a-project?service=${service.slug}`} 
              className="btn-secondary-on-dark" 
              style={{ padding: '12px 24px' }}
            >
              <span>Book Scoping Session</span>
              <ArrowRight size={15} />
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary-on-dark" 
              style={{ padding: '12px 20px' }}
            >
              <span>Back to Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
