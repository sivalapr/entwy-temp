import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Briefcase,
  Mail,
  User,
  Phone,
  Globe,
  FileText,
  Send,
  Loader2,
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { submitCareerApplication } from '../lib/firebase';

interface CareerApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleTitle: string;
  department?: string;
}

export const CareerApplyModal: React.FC<CareerApplyModalProps> = ({
  isOpen,
  onClose,
  roleTitle,
  department = 'ENGINEERING'
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '3-5 Years',
    linkedin: '',
    resumeUrl: '',
    coverNote: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim() || !formData.email.trim()) {
      setError('Please provide your full name and email address.');
      return;
    }

    setLoading(true);

    try {
      await submitCareerApplication({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        role: roleTitle,
        department: department,
        experience: formData.experience,
        linkedin: formData.linkedin.trim(),
        resumeUrl: formData.resumeUrl.trim(),
        coverNote: formData.coverNote.trim()
      });

      setSubmitted(true);
    } catch (err: any) {
      console.error('Failed to submit application:', err);
      setError(err.message || 'Failed to submit application. Please try again or email careers@entwy.com directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setError(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '3-5 Years',
      linkedin: '',
      resumeUrl: '',
      coverNote: ''
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(10, 15, 25, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={handleResetAndClose}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.3)',
          border: '1px solid #e2e8f0',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 28px',
            borderBottom: '1px solid #f1f5f9',
            backgroundColor: '#fafbfc',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  padding: '3px 9px',
                  borderRadius: '9999px',
                  backgroundColor: '#eef2ff',
                  color: '#4f46e5',
                  border: '1px solid #c7d2fe'
                }}
              >
                {department}
              </span>
              <span style={{ fontSize: '12px', color: '#64748b' }}>· Open Application</span>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
              Apply: {roleTitle}
            </h2>
            <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>
              Your profile will be directly routed to our Lead Architecture Team.
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            aria-label="Close dialog"
            style={{
              background: 'none',
              border: 'none',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#f1f5f9',
              color: '#64748b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px 28px', overflowY: 'auto' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 16px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  color: '#10b981',
                  display: 'grid',
                  placeItems: 'center',
                  margin: '0 auto 18px'
                }}
              >
                <CheckCircle2 size={36} />
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                Application Received!
              </h3>

              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 20px' }}>
                Thank you, <strong>{formData.fullName}</strong>. Your application for <strong>{roleTitle}</strong> has been synced to the recruitment monitor. Our engineering leads will review your background and connect with you shortly.
              </p>

              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '14px',
                  fontSize: '12.5px',
                  color: '#475569',
                  maxWidth: '380px',
                  margin: '0 auto 24px',
                  textAlign: 'left'
                }}
              >
                <div><strong>Candidate:</strong> {formData.fullName} ({formData.email})</div>
                <div style={{ marginTop: '4px' }}><strong>Role:</strong> {roleTitle}</div>
                <div style={{ marginTop: '4px' }}><strong>Status:</strong> Dispatched to ENTWY Hiring Portal</div>
              </div>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="btn-primary"
                style={{ padding: '10px 24px', fontSize: '14px' }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                  <AlertCircle size={16} style={{ flexShrink: 0 }} />
                  <span>{error}</span>
                </div>
              )}

              {/* Full Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      outline: 'none',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="elena@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      outline: 'none',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>
              </div>

              {/* Phone & Experience */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      outline: 'none',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>
                    Experience Level
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      outline: 'none',
                      backgroundColor: '#fff'
                    }}
                  >
                    <option value="1-3 Years">1 - 3 Years</option>
                    <option value="3-5 Years">3 - 5 Years</option>
                    <option value="5-8 Years">5 - 8 Years</option>
                    <option value="8+ Years / Staff+">8+ Years (Staff / Principal)</option>
                    <option value="Fellowship / Graduate">Fellowship / Student</option>
                  </select>
                </div>
              </div>

              {/* LinkedIn & Resume */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>
                    LinkedIn / GitHub / Portfolio
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/..."
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      outline: 'none',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>
                    Resume URL (Drive, Notion, PDF)
                  </label>
                  <input
                    type="url"
                    placeholder="https://drive.google.com/..."
                    value={formData.resumeUrl}
                    onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '13.5px',
                      outline: 'none',
                      backgroundColor: '#fff'
                    }}
                  />
                </div>
              </div>

              {/* Cover Note / Why ENTWY */}
              <div>
                <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>
                  Why ENTWY / Systems Craft Pitch
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a project you built, a technical problem you solved, or why you are drawn to ENTWY's mission..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13.5px',
                    outline: 'none',
                    backgroundColor: '#fff',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Submit Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  style={{
                    background: 'none',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '10px 18px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    color: '#64748b',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    padding: '10px 22px',
                    fontSize: '13.5px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

