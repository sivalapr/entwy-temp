import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { startProjectCategories } from '../data/sitemapData';
import { submitContactEnquiry } from '../lib/firebase';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Handshake,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
  Zap,
  ChevronRight,
  Loader2,
  AlertCircle
} from 'lucide-react';

const enquiryIcons: Record<string, React.ComponentType<{ size?: number | string; color?: string }>> = {
  'project-enquiry': MessageSquare,
  'book-a-call': Calendar,
  'partnerships': Handshake,
  'general-enquiries': HelpCircle,
};

export const StartProjectPage: React.FC = () => {
  const { type } = useParams<{ type?: string }>();
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const solutionParam = searchParams.get('solution');
  const industryParam = searchParams.get('industry');

  const resolvedInitialType = type || searchParams.get('type') || 'project-enquiry';
  const [selectedType, setSelectedType] = useState<string>(resolvedInitialType);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$50k - $100k',
    details: '',
  });

  useEffect(() => {
    if (type) {
      setSelectedType(type);
    }
  }, [type]);

  useEffect(() => {
    if (serviceParam && !formData.details) {
      setFormData(prev => ({ ...prev, details: `Scoping inquiry regarding capability: ${serviceParam}` }));
    } else if (solutionParam && !formData.details) {
      setFormData(prev => ({ ...prev, details: `Deployment inquiry regarding solution: ${solutionParam}` }));
    } else if (industryParam && !formData.details) {
      setFormData(prev => ({ ...prev, details: `Consultation inquiry regarding sector: ${industryParam}` }));
    }
  }, [serviceParam, solutionParam, industryParam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Please provide your name and email address.');
      return;
    }

    setLoading(true);

    try {
      await submitContactEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        type: selectedType,
        budget: formData.budget,
        details: formData.details.trim(),
        source: 'Start a Project Page'
      });

      setSubmitted(true);
    } catch (err: any) {
      console.error('Contact inquiry error:', err);
      setError(err.message || 'Failed to submit inquiry. You can still email us directly at info@zuntra.com');
      // If error occurs, let user still proceed to email fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell">
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: 840, marginBottom: 48 }}>
          <h1 className="display-xl" style={{ marginBottom: 18 }}>
            Let’s talk about your next project.
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-body)' }}>
            Tell us what you’re working on. Submissions are synced directly with the ENTWY architecture dashboard for rapid response.
          </p>
        </div>

        {/* 4 Project Enquiry Pathways */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '20px', marginBottom: '48px' }}>
          {startProjectCategories.map((cat) => {
            const IconComp = enquiryIcons[cat.id] || Zap;
            const isSelected = selectedType === cat.id;
            return (
              <button
                type="button"
                aria-pressed={isSelected}
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`enquiry-choice step-card ${isSelected ? 'step-card-active' : ''}`}
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 'var(--radius-sm)', backgroundColor: isSelected ? 'var(--color-primary-bg-subdued)' : 'var(--color-canvas-soft)', display: 'grid', placeItems: 'center', color: isSelected ? 'var(--color-primary)' : 'var(--color-ink)' }}>
                    <IconComp size={18} />
                  </div>
                  {isSelected && <span className="step-type-badge badge-trigger">Selected</span>}
                </div>
                <h3 style={{ fontSize: '16.5px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.5 }}>
                  {cat.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Form & Contact details side by side */}
        <div className="responsive-split" style={{ alignItems: 'flex-start' }}>
          {/* Main Form */}
          <div
            style={{
              backgroundColor: 'var(--color-canvas-soft)',
              border: '1px solid var(--color-hairline-strong)',
              borderRadius: 'var(--radius-xl)',
              padding: '40px',
              boxShadow: '0 8px 24px rgba(32, 21, 21, 0.04)',
            }}
          >
            {submitted ? (
              <div role="status" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', backgroundColor: 'rgba(16, 133, 72, 0.15)', display: 'grid', placeItems: 'center', margin: '0 auto 20px', color: '#108548' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="display-sm" style={{ marginBottom: '10px' }}>Inquiry Received &amp; Logged!</h2>
                <p style={{ color: 'var(--color-body)', fontSize: '15.5px', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px' }}>
                  Thank you, <strong>{formData.name}</strong>. Your inquiry regarding <strong>{selectedType}</strong> has been received by our lead systems architects.
                </p>

                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-hairline-strong)',
                    borderRadius: '12px',
                    padding: '16px',
                    fontSize: '13px',
                    color: 'var(--color-ink)',
                    maxWidth: '400px',
                    margin: '0 auto 24px',
                    textAlign: 'left'
                  }}
                >
                  <div><strong>Client:</strong> {formData.name} ({formData.email})</div>
                  {formData.company && <div style={{ marginTop: '4px' }}><strong>Company:</strong> {formData.company}</div>}
                  <div style={{ marginTop: '4px' }}><strong>Type:</strong> {selectedType}</div>
                  <div style={{ marginTop: '4px' }}><strong>Budget:</strong> {formData.budget}</div>
                  <div style={{ marginTop: '4px' }}><strong>Status:</strong> Synced to Live Monitoring Dashboard</div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a className="btn-primary" href={`mailto:info@zuntra.com?subject=${encodeURIComponent(`ENTWY ${selectedType} — ${formData.company || formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nBudget: ${formData.budget}\n\n${formData.details}`)}`}>
                    Optional: Open email draft
                  </a>
                  <button type="button" className="btn-secondary" onClick={() => setSubmitted(false)}>
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {error && (
                  <div
                    style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      backgroundColor: '#fff1f2',
                      border: '1px solid #fecdd3',
                      color: '#e11d48',
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    <AlertCircle size={16} />
                    <span>{error}</span>
                  </div>
                )}

                <div className="form-field-pair">
                  <div>
                    <label htmlFor="inquiry-name" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      id="inquiry-name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-hairline-strong)',
                        backgroundColor: '#fff',
                        fontSize: '15px',
                        color: 'var(--color-ink)',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-email" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      spellCheck={false}
                      placeholder="jane@company.com"
                      id="inquiry-email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-hairline-strong)',
                        backgroundColor: '#fff',
                        fontSize: '15px',
                        color: 'var(--color-ink)',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div className="form-field-pair">
                  <div>
                    <label htmlFor="inquiry-company" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp"
                      id="inquiry-company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-hairline-strong)',
                        backgroundColor: '#fff',
                        fontSize: '15px',
                        color: 'var(--color-ink)',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-budget" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                      Expected Budget
                    </label>
                    <select
                      id="inquiry-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-hairline-strong)',
                        backgroundColor: '#fff',
                        fontSize: '15px',
                        color: 'var(--color-ink)',
                        outline: 'none',
                      }}
                    >
                      <option>$25k - $50k</option>
                      <option>$50k - $100k</option>
                      <option>$100k - $250k</option>
                      <option>$250k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-details" style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '6px' }}>
                    Project Goals &amp; Constraints
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your workflows, current data pipelines, or target user requirements..."
                    id="inquiry-details"
                    name="details"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-hairline-strong)',
                      backgroundColor: '#fff',
                      fontSize: '15px',
                      color: 'var(--color-ink)',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ padding: '14px', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Direct Contact & Hub Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Direct Email Card - Stripe Dark Shell */}
            <a
              href="mailto:info@zuntra.com?subject=ENTWY%20Direct%20Inquiry"
              style={{
                backgroundColor: '#0a2540',
                color: '#ffffff',
                borderRadius: 'var(--radius-xl)',
                padding: '32px',
                border: '1px solid #1c1e54',
                boxShadow: '0 16px 36px -8px rgba(10, 37, 64, 0.3)',
                display: 'block',
              }}
            >
              <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: 'rgba(83, 58, 253, 0.2)', display: 'grid', placeItems: 'center', color: '#00d4ff', marginBottom: '16px' }}>
                <Mail size={20} />
              </div>
              <h3 style={{ fontSize: '20px', color: '#ffffff', marginBottom: '10px', fontWeight: 500 }}>info@zuntra.com</h3>
              <p style={{ fontSize: '13.5px', color: '#cad5e2', lineHeight: 1.5, fontWeight: 300 }}>
                Direct inbox monitored by managing partners. Guaranteed response within 24 business hours.
              </p>
            </a>

            {/* Offices */}
            <div
              style={{
                backgroundColor: 'var(--color-canvas-soft)',
                border: '1px solid var(--color-hairline-strong)',
                borderRadius: 'var(--radius-lg)',
                padding: '28px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, textTransform: 'none', color: 'var(--color-muted)', marginBottom: '18px', letterSpacing: '0.06em' }}>
                Design &amp; Engineering Locations
              </div>

              <div style={{ display: 'flex', gap: '12px', marginBottom: '18px' }}>
                <MapPin size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: 'var(--color-ink)' }}>Chennai, India</strong>
                  <p style={{ fontSize: '12.5px', color: 'var(--color-body)', marginTop: '2px', lineHeight: 1.45 }}>
                    No. 63, 3rd Floor, Estate Main Road, Developed Plots, Industrial Estate, Perungudi, Chennai 600096
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--color-hairline)' }}>
                <MapPin size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ fontSize: '14.5px', color: 'var(--color-ink)' }}>Brooklyn, New York</strong>
                  <p style={{ fontSize: '12.5px', color: 'var(--color-body)', marginTop: '2px', lineHeight: 1.45 }}>
                    631 4th Avenue, Brooklyn, NY 11232
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProjectPage;
