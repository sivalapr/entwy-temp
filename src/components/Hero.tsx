import React, { useState } from 'react';
import { ArrowDown, ArrowRight, Check, Database, SlidersHorizontal, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
  { 
    title: 'Connect your data', 
    source: 'Your tools, working together', 
    icon: Database, 
    detail: 'Bring the customer request and its history together from your CRM, inbox, and internal systems.',
    ascii: 'crm:inbox ──► [parse & ingest] ──► unified:payload'
  },
  { 
    title: 'Make an informed decision', 
    source: 'AI with clear boundaries', 
    icon: SlidersHorizontal, 
    detail: 'Classify the request, check your business rules, and ask a person to review anything that needs judgment.',
    ascii: 'payload ──► [rules + policy] ──► human:review_gate'
  },
  { 
    title: 'Move the work forward', 
    source: 'An action you can trace', 
    icon: Send, 
    detail: 'Route the request to the right team, update the source system, and keep a record of what changed.',
    ascii: 'dispatch ──► [erp & slack sync] ──► audit:recorded ✓'
  },
];

export const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <section className="home-hero" aria-labelledby="home-title">
      <div className="container home-hero-layout relative z-10">
        <div className="home-hero-copy">
          <h1 id="home-title" tabIndex={-1}>Make AI useful where work happens.</h1>
          <p>We design and build software, AI, and automations that connect your systems and help your people do better work.</p>
          <div className="home-hero-actions">
            <Link to="/start-a-project" className="btn-primary">Start a project <ArrowRight size={17} aria-hidden="true" /></Link>
            <a href="#services-section" className="home-text-link">Explore our capabilities <ArrowDown size={16} aria-hidden="true" /></a>
          </div>
          <p className="home-hero-note">From the first idea to the systems you use every day.</p>
        </div>

        {/* Clean Zapier-style workflow card on solid soft-cream (#f8f4f0), no gradient */}
        <div className="home-flow">
          <div className="home-flow-heading">
            <strong>A customer request, connected.</strong>
            <span>Example workflow</span>
          </div>

          <div className="home-flow-steps" aria-label="Explore the workflow steps">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <button 
                  key={step.title} 
                  type="button" 
                  className="home-flow-step" 
                  aria-pressed={activeStep === index} 
                  aria-controls="home-flow-detail" 
                  onClick={() => setActiveStep(index)}
                >
                  <span className="home-flow-icon"><Icon size={20} aria-hidden="true" /></span>
                  <span><strong>{step.title}</strong><small>{step.source}</small></span>
                  <span className="home-flow-number" aria-hidden="true">{activeStep === index ? <Check size={16} /> : index + 1}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#ebe6df]">
            <p className="home-flow-detail" id="home-flow-detail" aria-live="polite">
              {steps[activeStep].detail}
            </p>

            {/* Architectural ASCII Pipeline Diagram with Active Step Highlighting */}
            <div className="mt-4 bg-[#ffffff] border border-[#e3e8ee] rounded-xl p-3 sm:p-4 shadow-sm overflow-x-auto">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#64748d] mb-2.5">
                <span>topology: live_pipeline</span>
                <span className="text-[#533afd] font-semibold">● stage 0{activeStep + 1} active</span>
              </div>
              <pre className="font-mono text-[11px] sm:text-xs leading-none text-[#425466] select-none m-0 whitespace-pre">
┌──────────────────────────────────────────────────────────────┐{"\n"}
│  <span className={activeStep === 0 ? "text-[#533afd] font-bold" : "text-[#0d253d]"}>[CRM:INBOX]</span>  ───►  <span className={activeStep === 1 ? "text-[#533afd] font-bold" : "text-[#0d253d]"}>{"{ VALIDATE & ROUTE }"}</span>  ───►  <span className={activeStep === 2 ? "text-[#533afd] font-bold" : "text-[#0d253d]"}>[ERP / API]</span>  │{"\n"}
│       ▲                      │                       │       │{"\n"}
│       └──── oauth2 token ────┴──── tamper audit ◄────┘       │{"\n"}
└──────────────────────────────────────────────────────────────┘
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="container home-hero-footnote">
        <span>Strategy, design, and engineering. One connected team.</span>
        <Link to="/about">Meet ENTWY <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </section>
  );
};

export default Hero;
