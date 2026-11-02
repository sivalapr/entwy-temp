import React, { useState } from 'react';
import { X, CheckCircle, Calendar, ArrowRight, ShieldCheck, Terminal, Loader2 } from 'lucide-react';
import { submitContactEnquiry } from '../lib/firebase';

interface StartProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StartProjectModal: React.FC<StartProjectModalProps> = ({ isOpen, onClose }) => {
  const [projectType, setProjectType] = useState('Build an AI Product');
  const [budget, setBudget] = useState('$50k - $100k');
  const [timeline, setTimeline] = useState('4 - 8 Weeks');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitContactEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        company: formData.company.trim(),
        type: projectType,
        budget: budget,
        details: `Timeline: ${timeline}. ${formData.details.trim()}`,
        source: 'Project Scoping Modal'
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit from modal:', err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            <h2 className="display-md" style={{ fontSize: '26px', marginBottom: '8px' }}>
              Start a Project with ENTWY
            </h2>
            <p className="body-md" style={{ marginBottom: '24px' }}>
              Tell us about your technical roadmap. Our Lead System Architects will review your inquiry and schedule a confidential scoping briefing within 24 hours.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Scope Selection */}
              <div className="form-group">
                <label className="form-label">Project Type</label>
                <div className="radio-pills-row">
                  {[
                    'Build a New Product',
                    'Build an AI Product',
                    'Add AI to Existing Product',
                    'Modernise Platform',
                    'Automate Business Workflows'
                  ].map(t => (
                    <button
                      key={t}
                      type="button"
                      className={`radio-pill ${projectType === t ? 'selected' : ''}`}
                      onClick={() => setProjectType(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="form-group">
                <label className="form-label">Target Investment Range</label>
                <div className="radio-pills-row">
                  {['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'].map(b => (
                    <button
                      key={b}
                      type="button"
                      className={`radio-pill ${budget === b ? 'selected' : ''}`}
                      onClick={() => setBudget(b)}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Target Delivery Timeline */}
              <div className="form-group">
                <label className="form-label">Desired Time-to-Production</label>
                <div className="radio-pills-row">
                  {['Immediate (2 - 4 Weeks)', '4 - 8 Weeks', '2 - 3 Months', 'Flexible Horizon'].map(tl => (
                    <button
                      key={tl}
                      type="button"
                      className={`radio-pill ${timeline === tl ? 'selected' : ''}`}
                      onClick={() => setTimeline(tl)}
                    >
                      {tl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    required 
                    className="text-input" 
                    placeholder="e.g. Alex Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Work Email</label>
                  <input 
                    type="email" 
                    required 
                    className="text-input" 
                    placeholder="alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Company / Organization</label>
                <input 
                  type="text" 
                  className="text-input" 
                  placeholder="e.g. Acme Health or Stealth AI"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Project Context &amp; Key Technical Goals</label>
                <textarea 
                  className="text-input" 
                  placeholder="Briefly describe what you are looking to build, any existing stack, and core objectives..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--color-muted)' }}>
                  <ShieldCheck size={16} color="var(--color-semantic-success)" />
                  <span>Strict Mutual NDA · 100% Client IP Ownership</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', cursor: loading ? 'not-allowed' : 'pointer' }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Request Technical Scoping Brief</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '32px 16px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(22, 163, 74, 0.1)', display: 'grid', placeItems: 'center', margin: '0 auto 16px', color: 'var(--color-semantic-success)' }}>
              <CheckCircle size={32} />
            </div>

            <h3 className="title-lg" style={{ marginBottom: '8px' }}>
              Project Brief Received, {formData.name || 'Partner'}!
            </h3>

            <p className="body-md" style={{ maxWidth: '480px', margin: '0 auto 24px', color: 'var(--color-body)' }}>
              Our Managing Architect has received your scope request for <strong>{projectType}</strong>. Your inquiry has been synced directly to the ENTWY central monitor.
            </p>

            <div style={{ backgroundColor: 'var(--color-hairline-soft)', border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-md)', padding: '16px', maxWidth: '440px', margin: '0 auto 24px', textAlign: 'left', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
              <div><strong style={{ color: 'var(--color-ink)' }}>Scope:</strong> {projectType}</div>
              <div style={{ marginTop: '4px' }}><strong style={{ color: 'var(--color-ink)' }}>Timeline:</strong> {timeline}</div>
              <div style={{ marginTop: '4px' }}><strong style={{ color: 'var(--color-ink)' }}>Budget:</strong> {budget}</div>
            </div>

            <button className="btn-primary" onClick={handleReset}>
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
