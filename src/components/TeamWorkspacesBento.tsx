import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings2, 
  BarChart3, 
  Headphones, 
  Megaphone, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Clock, 
  Sparkles,
  Zap
} from 'lucide-react';
import { GlowCard } from './ui/glow-card';

const workspaceData = [
  {
    id: 'operations',
    name: 'Operations & IT',
    icon: Settings2,
    accent: '#000000',
    headline: 'Exception routing & approval orchestration.',
    description: 'Intercept process exceptions, validate policy requirements, and route approvals directly into Slack or your enterprise portal.',
    impactMetric: '84% less manual routing',
    simulation: [
      { step: 'Invoice / Expense Submitted', system: 'Workday / SAP', state: 'Passed' },
      { step: 'Discrepancy Detected ($4,200 threshold)', system: 'Rule Engine', state: 'Flagged' },
      { step: 'Director Sign-off Requested', system: 'Slack Interactive Modal', state: 'Approved' },
      { step: 'ERP Record Committed & Reconciled', system: 'NetSuite Ledger', state: 'Synced' },
    ],
  },
  {
    id: 'revenue',
    name: 'Revenue & Sales',
    icon: BarChart3,
    accent: '#108548',
    headline: 'Continuous lead enrichment & CRM updates.',
    description: 'Enrich inbound enterprise accounts, map org hierarchies, and draft customized follow-up strategies before reps open their inbox.',
    impactMetric: '3.6x faster outreach SLA',
    simulation: [
      { step: 'New Enterprise Form Filled', system: 'HubSpot Inbound', state: 'Captured' },
      { step: 'Company & Financial Data Enriched', system: 'Clearbit / LinkedIn', state: '100% Match' },
      { step: 'Territory Rep Assigned & Briefed', system: 'Salesforce CRM', state: 'Routed' },
      { step: 'Executive Context Brief Sent to Rep', system: 'Slack Alert', state: 'Delivered' },
    ],
  },
  {
    id: 'customer',
    name: 'Customer Support',
    icon: Headphones,
    accent: '#6658d3',
    headline: 'Contextual triage & instant tier-1 resolution.',
    description: 'Unify historical tickets, product logs, and contract tiers to generate validated answers and escalate edge cases with full context.',
    impactMetric: '65% resolved autonomously',
    simulation: [
      { step: 'Priority Ticket Received', system: 'Zendesk / Intercom', state: 'Ingested' },
      { step: 'Account Tier & API Logs Retrieved', system: 'Datadog / PostgreSQL', state: 'Contextualized' },
      { step: 'Guided Troubleshooting Drafted', system: 'Enterprise Knowledge RAG', state: 'Generated' },
      { step: 'Verified Resolution Sent to Client', system: 'Audit Trail Stamped', state: 'Closed' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing & Comms',
    icon: Megaphone,
    accent: '#d9381e',
    headline: 'Multichannel campaign & collateral coordination.',
    description: 'Coordinate content releases across channels, verify brand guidelines, and pull real-time campaign performance analytics automatically.',
    impactMetric: '5x faster asset production',
    simulation: [
      { step: 'Campaign Brief Created', system: 'Notion / Figma', state: 'Initiated' },
      { step: 'Tone & Legal Guidelines Checked', system: 'Brand Governance Engine', state: 'Compliant' },
      { step: 'Social & Newsletter Assets Formatted', system: 'Content Pipeline', state: 'Ready' },
      { step: 'Scheduled Across Multi-Channels', system: 'LinkedIn & Buffer API', state: 'Scheduled' },
    ],
  },
];

export const TeamWorkspacesBento: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = workspaceData[activeTab];

  return (
    <section className="py-20 bg-[#f6f9fc] relative border-y border-[#e3e8ee]" aria-labelledby="workspaces-title">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <h2 id="workspaces-title" className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#0d253d] font-display">
            Less busywork. More room for your best people.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#425466] font-body leading-relaxed">
            Give each team workflows that fit how they actually operate—with connected systems, strict permission boundaries, and zero manual data re-entry.
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {workspaceData.map((team, index) => {
            const Icon = team.icon;
            const isActive = index === activeTab;
            return (
              <button
                key={team.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex items-center gap-3 ${
                  isActive 
                    ? 'bg-white border-[#171717] shadow-sm ring-1 ring-[#171717]' 
                    : 'bg-white/80 border-[var(--color-hairline,#f0f0f3)] hover:border-[var(--color-hairline-strong,#dcdee0)] hover:bg-white'
                }`}
              >
                <div 
                  className="p-2 rounded-lg shrink-0" 
                  style={{ backgroundColor: `${team.accent}15`, color: team.accent }}
                >
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--color-ink,#171717)]">{team.name}</div>
                  <div className="text-[11px] text-[var(--color-muted,#999999)] font-medium">{team.impactMetric}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Card Detail */}
        <GlowCard 
          variant="light" 
          className="p-6 sm:p-10 border-[var(--color-hairline,#f0f0f3)] bg-white shadow-sm"
          glowColors={[current.accent, '#4630EB']}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left info column */}
            <div className="lg:col-span-5">
              <h3 className="text-2xl sm:text-3xl font-light text-[var(--color-ink,#171717)] font-display mb-3">
                {current.headline}
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-body,#60646c)] leading-relaxed mb-6">
                {current.description}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-[var(--color-hairline,#f0f0f3)]">
                <div>
                  <div className="text-2xl font-bold font-display" style={{ color: current.accent }}>
                    {current.impactMetric}
                  </div>
                  <div className="text-xs text-[var(--color-muted,#999999)]">Measured Team Outcome</div>
                </div>
                <div className="h-8 w-px bg-[var(--color-hairline,#f0f0f3)]" />
                <div>
                  <div className="text-2xl font-bold font-display text-[var(--color-ink,#171717)]">
                    100%
                  </div>
                  <div className="text-xs text-[var(--color-muted,#999999)]">Audit Trail Recorded</div>
                </div>
              </div>

              <div className="mt-8">
                <Link 
                  to="/solutions/automate-business-workflows"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-link,#0d74ce)] hover:text-[#000000] transition-colors"
                >
                  <span>Explore {current.name} solutions</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Right live workflow trace preview */}
            <div className="lg:col-span-7 bg-[#0a2540] text-white p-6 sm:p-8 rounded-2xl border border-[#1c1e54] shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#1c1e54] mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs font-mono text-[#cad5e2] ml-2">live-trace: {current.id}-pipeline</span>
                </div>
                <span className="text-[11px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded border border-[#00d4ff]/20">
                  Status: Running
                </span>
              </div>

              {/* Step Sequence */}
              <div className="space-y-3">
                {current.simulation.map((step, idx) => (
                  <div 
                    key={step.step}
                    className="p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs sm:text-sm hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#533afd]/20 text-[#00d4ff] flex items-center justify-center font-mono text-xs font-bold shrink-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <div className="font-semibold text-white">{step.step}</div>
                        <div className="text-[11px] text-[#cad5e2] font-mono mt-0.5">{step.system}</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[#108548]/20 text-[#27c93f] flex items-center gap-1 shrink-0">
                      <Check size={12} /> {step.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
};
