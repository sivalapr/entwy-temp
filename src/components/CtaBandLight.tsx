import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CtaBandLightProps {
  onOpenProjectModal?: () => void;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export const CtaBandLight: React.FC<CtaBandLightProps> = ({
  onOpenProjectModal,
  title = "What would you like to make better?",
  description = "Bring us a complex workflow, an enterprise product roadmap, or a distributed data challenge. We’ll outline a deterministic, phased implementation plan.",
  buttonText = "Start a project",
  buttonLink = "/start-a-project",
}) => (
  <section className="section-pad home-contact-section" aria-labelledby="home-contact-title">
    <div className="container" style={{ maxWidth: 'var(--content-max, 1360px)', marginInline: 'auto' }}>
      <div className="home-contact cta-wave-banner">
        <div>
          <h2 id="home-contact-title" className="display-lg text-white" style={{ color: '#ffffff' }}>
            {title}
          </h2>
          <p className="body-lg" style={{ color: '#cad5e2' }}>
            {description}
          </p>
        </div>
        <Link 
          to={buttonLink} 
          onClick={onOpenProjectModal}
          className="btn-secondary-on-dark" 
          style={{ padding: '14px 28px', fontSize: '15px' }}
        >
          <span>{buttonText}</span>
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBandLight;
