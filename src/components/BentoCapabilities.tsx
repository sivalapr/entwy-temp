import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Code2, 
  Palette, 
  Compass, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Layers, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { GlowCard } from './ui/glow-card';
import { Badge } from './ui/badge';
import { servicesPillarsData } from '../data/sitemapData';

export const BentoCapabilities: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<'all' | 'ai' | 'tech' | 'design'>('all');

  return (
    <section id="capabilities-bento" className="py-20 bg-[#f6f9fc] relative" aria-labelledby="bento-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 id="bento-heading" className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#0d253d] font-display">
            The engineering and design studio built for intelligent software.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#425466] font-body leading-relaxed">
            From modern cloud architectures and accessible design systems to autonomous agent swarms, explore our core competencies.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* Bento Card 1: AI & Autonomous Agents (Hero Card - Spans 2 Cols) */}
          <GlowCard 
            variant="light"
            glowColors={['#533afd', '#00d4ff', '#7952ff']}
            className="md:col-span-2 lg:col-span-2 p-7 sm:p-8 flex flex-col justify-between border-[#e3e8ee] bg-white shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-2xl bg-[#533afd]/10 text-[#533afd]">
                  <Bot size={24} />
                </span>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-[#533afd]/10 text-[#533afd]">
                  Flagship Capability
                </span>
              </div>
              <h3 className="text-2xl font-light text-[#0d253d] font-display mb-2">
                Autonomous AI &amp; Agentic Workflows
              </h3>
              <p className="text-sm sm:text-base text-[#425466] leading-relaxed mb-6">
                Deploy governed agents that execute multi-step tool calls, synthesize vector knowledge bases, and resolve operations with human approval gates.
              </p>

              {/* Micro-Features */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {[
                  'Bespoke Fine-Tuning & RAG',
                  'Policy-Constrained Tool Use',
                  'Continuous Observability',
                  'Sub-second Vector Search',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-medium text-[#0d253d]">
                    <CheckCircle2 size={14} className="text-[#533afd] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#e3e8ee] flex items-center justify-between">
              <span className="text-xs text-[#64748d] font-medium">Deterministic &amp; Agentic execution</span>
              <Link to="/services/ai" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#533afd] hover:text-[#4434d4]">
                <span>Explore AI services</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </GlowCard>

          {/* Bento Card 2: Cloud & Web Engineering */}
          <GlowCard 
            variant="light" 
            glowColors={['#00d4ff', '#533afd']}
            className="md:col-span-1 lg:col-span-2 p-7 sm:p-8 flex flex-col justify-between border-[#e3e8ee] bg-white shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="p-3 rounded-2xl bg-[#533afd]/10 text-[#533afd]">
                  <Code2 size={24} />
                </span>
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#f6f9fc] text-[#425466]">
                  Resilience
                </span>
              </div>
              <h3 className="text-xl font-light text-[#0d253d] font-display mb-2">
                High-Concurrency Cloud Engineering
              </h3>
              <p className="text-sm text-[#425466] leading-relaxed mb-5">
                Modern web architectures, event-driven webhooks, and distributed data systems built with zero-downtime reliability.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['TypeScript', 'React 19', 'Next.js / Vite', 'Distributed Queues', 'gRPC'].map((badge) => (
                  <span key={badge} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#f6f9fc] border border-[#e3e8ee] text-[#425466]">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#e3e8ee] flex items-center justify-between">
              <span className="text-xs text-[#64748d]">Full-stack SaaS &amp; APIs</span>
              <Link to="/services/technology" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#533afd] hover:text-[#4434d4]">
                <span>View Tech stack</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </GlowCard>

          {/* Bento Card 3: Design Systems & UX Research */}
          <GlowCard 
            variant="light"
            glowColors={['#7952ff', '#ea2261']}
            className="md:col-span-1 lg:col-span-1 p-6 flex flex-col justify-between border-[#e3e8ee] bg-white shadow-sm"
          >
            <div>
              <div className="p-2.5 w-fit rounded-xl bg-[#7952ff]/10 text-[#7952ff] mb-3">
                <Palette size={20} />
              </div>
              <h4 className="text-lg font-light text-[#0d253d] font-display mb-1.5">
                Design Systems &amp; UI/UX
              </h4>
              <p className="text-xs text-[#425466] leading-relaxed mb-4">
                Warm typography, token systems, and interfaces engineered for focus and clarity.
              </p>
            </div>
            <Link to="/services/design" className="inline-flex items-center gap-1 text-xs font-semibold text-[#7952ff]">
              <span>Learn more</span>
              <ArrowRight size={12} />
            </Link>
          </GlowCard>

          {/* Bento Card 4: Strategy & Roadmap */}
          <GlowCard 
            variant="light"
            glowColors={['#00d924', '#00d4ff']}
            className="md:col-span-1 lg:col-span-1 p-6 flex flex-col justify-between border-[#e3e8ee] bg-white shadow-sm"
          >
            <div>
              <div className="p-2.5 w-fit rounded-xl bg-[#00d924]/10 text-[#108548] mb-3">
                <Compass size={20} />
              </div>
              <h4 className="text-lg font-light text-[#0d253d] font-display mb-1.5">
                Strategy &amp; AI Roadmaps
              </h4>
              <p className="text-xs text-[#425466] leading-relaxed mb-4">
                Benchmark enterprise feasibility, prioritize high-ROI initiatives, and plan roadmaps.
              </p>
            </div>
            <Link to="/services/strategy" className="inline-flex items-center gap-1 text-xs font-semibold text-[#108548]">
              <span>Explore strategy</span>
              <ArrowRight size={12} />
            </Link>
          </GlowCard>

          {/* Bento Card 5: Role & Department Automations (Spans 2 cols on lg) */}
          <GlowCard 
            variant="dark"
            glowColors={['#533afd', '#00d4ff', '#ea2261']}
            className="md:col-span-2 lg:col-span-2 p-6 sm:p-7 flex flex-col justify-between bg-[#0a2540] border-[#1c1e54]"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Zap size={18} className="text-[#00d4ff]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00d4ff]">
                    Cross-Functional Impact
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#cad5e2] bg-white/10 px-2 py-0.5 rounded">
                  4 Dedicated Workflows
                </span>
              </div>
              <h4 className="text-xl font-light text-white font-display mb-2">
                Turn hours of manual busywork into autonomous actions.
              </h4>
              <p className="text-xs sm:text-sm text-[#cad5e2] leading-relaxed mb-4">
                We embed autonomous pipelines across Operations, Revenue, Customer Care, and Marketing with full audit controls.
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <span className="text-xs text-[#cad5e2]">Operations • RevOps • Support • Engineering</span>
              <Link to="/solutions/automate-business-workflows" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00d4ff] hover:text-white">
                <span>View solutions</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};
