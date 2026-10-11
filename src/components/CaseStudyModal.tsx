import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { CaseStudy } from '../types/sitemap';

interface Props {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenProjectModal: () => void;
}

export const CaseStudyModal: React.FC<Props> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 700 }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>



        <h2 className="display-md" style={{ fontSize: 28, margin: '12px 0' }}>
          {caseStudy.title}
        </h2>

        <p className="body-md" style={{ lineHeight: 1.65, color: 'var(--color-body)' }}>
          {caseStudy.overview}
        </p>

        <p style={{ fontSize: 13, color: 'var(--color-muted)', marginTop: 16 }}>
          This describes a potential application area, not a named client engagement or measured result.
        </p>

        <Link
          to="/start-a-project"
          className="btn-primary"
          onClick={onClose}
          style={{ marginTop: 24, display: 'inline-flex' }}
        >
          Talk to ENTWY
        </Link>
      </div>
    </div>
  );
};
