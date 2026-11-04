import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Clock, CheckCircle } from 'lucide-react';
import { GlowEffect } from './ui/glow-effect';

export const CtaBandRevamped: React.FC<{ onOpenProjectModal?: () => void }> = ({ onOpenProjectModal }) => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[var(--color-canvas-soft,#fafafa)]" aria-labelledby="cta-revamped-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Expo Dark Shell Container */}
        <div className="relative rounded-3xl overflow-hidden cta-wave-banner p-8 sm:p-14 lg:p-16 border border-[#262626] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
          {/* Atmospheric Mesh Glow behind the CTA card */}
          <GlowEffect 
            colors={['#4630EB', '#0d74ce', '#cfe7ff', '#8145b5']}
            mode="breathe"
            blur="stronger"
            scale={1.05}
          />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Headline */}
            <h2 
              id="cta-revamped-title"
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white font-display mb-6 leading-tight"
            >
              Ready to engineer production AI <br className="hidden sm:inline" />
              <span className="font-normal text-white">that powers your core operations?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#cad5e2] font-light leading-relaxed mb-10 max-w-2xl mx-auto font-body">
              Tell us about your product, systems, or manual operations. We&apos;ll schedule an exploratory architecture session and map an actionable roadmap.
            </p>

            {/* Actions - Stripe Pills */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link 
                to="/start-a-project"
                onClick={onOpenProjectModal}
                className="btn-secondary-on-dark w-full sm:w-auto"
                style={{ padding: '14px 28px', fontSize: '15px' }}
              >
                <span>Start a project</span>
                <ArrowRight size={16} />
              </Link>
              <Link 
                to="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Learn how we work</span>
              </Link>
            </div>

            {/* Trust commitments */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#a8c3de]">
              <div className="flex items-center justify-center gap-2">
                <Clock size={15} className="text-[#00d4ff]" />
                <span>Response within 24 business hours</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield size={15} className="text-[#00d4ff]" />
                <span>SOC-2 &amp; enterprise NDA compliant</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle size={15} className="text-[#00d4ff]" />
                <span>100% intellectual property ownership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
