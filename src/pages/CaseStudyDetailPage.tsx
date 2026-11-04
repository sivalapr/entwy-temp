import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudiesData } from '../data/sitemapData';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  Server,
  Layers,
  ChevronRight
} from 'lucide-react';

const caseStudyArchitectures: Record<string, {
  challenge: string;
  architectureDetails: string[];
  workflowStages: { trigger: string; logic: string; outcome: string }[];
  metrics: { label: string; value: string }[];
}> = {
  'case-study-01': {
    challenge: 'A Tier-1 Asset Management & Banking group handled over 300,000 daily high-value settlements across legacy clearinghouses. Manual error reconciliation took 48 hours, creating severe counterparty exposure and millions in collateral drag.',
    architectureDetails: [
      'Ingested Kafka transaction event streams into a fault-tolerant deduplication layer with sub-millisecond serialization.',
      'Constructed autonomous reconciliation agents comparing SWIFT ISO-20022 schemas against internal double-entry ledgers.',
      'Deployed deterministic anomaly-detection rules with automated freeze gates on unverified transactions exceeding $50k.',
      'Streamed verifiable audit trails to Snowflake and real-time incident war-rooms in Slack.'
    ],
    workflowStages: [
      { trigger: 'SWIFT MT103 / ISO 20022 settlement message received', logic: 'Agent reconciles double-entry balance & counterparty KYC state', outcome: 'Zero-latency ledger commitment & Snowflake audit log' },
      { trigger: 'Variance > $0.01 detected between clearinghouse & bank', logic: 'Instant ledger hold applied & ML anomaly score calculated', outcome: 'Priority alert dispatched to operations team in Slack' },
      { trigger: 'Daily settlement batch closure at 17:00 EST', logic: 'Automated cryptographic proof generated across 10M+ rows', outcome: 'Executive compliance sign-off certified in sub-second time' }
    ],
    metrics: [
      { label: 'Reconciliation Latency', value: '48h → 320ms' },
      { label: 'Monthly Transactions', value: '10M+ Automated' },
      { label: 'Manual Error Rate', value: '0.001% Near Zero' },
      { label: 'Deployment Timeline', value: '6 Weeks to Prod' }
    ]
  },
  'case-study-02': {
    challenge: 'Physicians at a multinational diagnostics network spent over 4 hours per day re-entering duplicate lab observations and manually searching through 15-year-old scanned clinical PDFs, delaying critical pathology reports.',
    architectureDetails: [
      'Air-gapped OCR and multimodal document ingestion engine extracting diagnostic findings with 99.4% precision.',
      'HIPAA-compliant vector retrieval system (RAG) indexing clinical guidelines and patient longitudinal timelines.',
      'Zero-retention LLM inference proxy with cryptographic PII/PHI scrubbing prior to query evaluation.',
      'Embedded clinician interface providing one-click consultation summaries integrated into Epic and Cerner EHRs.'
    ],
    workflowStages: [
      { trigger: 'Patient lab specimen processed by diagnostic machine', logic: 'OCR model extracts numerical biometrics & reference ranges', outcome: 'Automated FHIR JSON payload constructed & validated' },
      { trigger: 'Physician opens patient consultation window in EHR', logic: 'Vector engine surfaces 3 most relevant historical diagnostic flags', outcome: 'Key clinical insights rendered directly in clinician viewport' },
      { trigger: 'Diagnostic sign-off completed by attending physician', logic: 'Automated clinical report compiled with cryptographic signature', outcome: 'Patient notification sent via encrypted SMS & portal' }
    ],
    metrics: [
      { label: 'Admin Time Saved', value: '4.2 hrs / day / MD' },
      { label: 'Diagnostic Extraction', value: '99.4% Precision' },
      { label: 'PHI Compliance', value: '100% HIPAA Shield' },
      { label: 'Time to Production', value: '8 Weeks' }
    ]
  },
  'case-study-03': {
    challenge: 'A global freight forwarder suffered 3-to-5 day container delays at international maritime hubs due to fragmented EDI messages, mismatched customs documents, and asynchronous invoice approvals across 40 countries.',
    architectureDetails: [
      'Event-driven integration mesh connecting legacy AS400 warehouse servers with modern cloud logistics APIs.',
      'Automated bill-of-lading optical parsing with cross-reference validation against national customs databases.',
      'Autonomous exception routing: customs queries resolve automatically or escalate with pre-filled declaration forms.',
      'Real-time GraphQL query layer providing shipping line customers with sub-second vessel tracking telemetry.'
    ],
    workflowStages: [
      { trigger: 'Vessel manifests uploaded by overseas port agent', logic: 'Cross-checks cargo weights and tariff codes against regulations', outcome: 'Digital customs declaration pre-filed 48h before arrival' },
      { trigger: 'Customs clearance approved by border authorities', logic: 'Instant webhook dispatches automated gate-pass to trucker app', outcome: 'Container dwell time reduced from 5 days to 4 hours' },
      { trigger: 'Delivery proof signed digitally via driver mobile app', logic: 'ERP reconciles fuel surcharge and triggers instant Stripe/SAP invoice', outcome: 'Cash collection cycle shortened by 21 days' }
    ],
    metrics: [
      { label: 'Monthly Clearances', value: '120k Automated' },
      { label: 'Dwell Time Reduction', value: '5 days → 4 hrs' },
      { label: 'Data Entry Errors', value: 'Zero Errors' },
      { label: 'Delivery Timeline', value: '10 Weeks' }
    ]
  }
};

export const CaseStudyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Support both "case-study-01" or "01"
  const normalizedId = id?.startsWith('case-study-') ? id : `case-study-${id}`;
  const study = caseStudiesData.find(x => x.id === id || x.id === normalizedId);

  if (!study) {
    return <Navigate to="/work" replace />;
  }

  const details = caseStudyArchitectures[study.id] || caseStudyArchitectures['case-study-01'];

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 28, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/work" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Work</Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{study.title}</span>
        </nav>

        {/* Hero Section */}
        <div style={{ maxWidth: 900, marginBottom: 52 }}>

          <h1 className="display-xl" style={{ marginBottom: 20, lineHeight: 1.15 }}>
            {study.title}
          </h1>
          <p style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--color-ink-mid)', marginBottom: 24, fontWeight: 500 }}>
            {study.overview}
          </p>

          <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', fontSize: '14px', color: 'var(--color-body)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Server size={15} color="var(--color-primary)" />
              <span><strong>Client:</strong> {study.client}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Clock size={15} color="var(--color-primary)" />
              <span><strong>Timeline:</strong> {study.timeline}</span>
            </div>
          </div>
        </div>

        {/* 4 Metric Callout Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: 20, marginBottom: 56 }}>
          {details.metrics.map(metric => (
            <div
              key={metric.label}
              style={{
                backgroundColor: 'var(--color-canvas-soft)',
                border: '1px solid var(--color-hairline-strong)',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(32, 21, 21, 0.03)'
              }}
            >
              <div style={{ fontSize: '26px', fontWeight: 800, color: 'var(--color-primary)', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-muted)', textTransform: 'none', letterSpacing: '0.04em' }}>
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* The Challenge & Architectural Solution */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: 36, marginBottom: 56 }}>
          {/* Challenge */}
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-xl)', padding: '36px', boxShadow: '0 4px 16px rgba(32, 21, 21, 0.03)' }}>

            <h2 className="display-sm" style={{ marginBottom: 18 }}>
              Legacy Bottlenecks &amp; Friction
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.65, color: 'var(--color-body)', marginBottom: 24 }}>
              {details.challenge}
            </p>
            <div style={{ padding: '16px 20px', backgroundColor: 'var(--color-canvas-soft)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)', fontSize: '13.5px', color: 'var(--color-ink-mid)', lineHeight: 1.5 }}>
              Prior to ENTWY's intervention, operational teams were forced into manual swivel-chair data entry across disconnected portals, risking major SLA penalties.
            </div>
          </div>

          {/* Solution Architecture */}
          <div style={{ backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-xl)', padding: '36px' }}>

            <h2 className="display-sm" style={{ marginBottom: 18 }}>
              The ENTWY Engineered Solution
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {details.architectureDetails.map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle2 size={18} color="#108548" style={{ flexShrink: 0, marginTop: 2 }} />
                  <p style={{ fontSize: '14.5px', color: 'var(--color-ink-mid)', lineHeight: 1.55, margin: 0 }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow Chain (Zapier Trigger-Condition-Action style) */}
        <div style={{ marginBottom: 56 }}>

          <h2 className="display-sm" style={{ marginBottom: 24 }}>
            Sub-Second Event-Driven Execution Flow
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {details.workflowStages.map((wf, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline-strong)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px 28px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                  gap: 20,
                  alignItems: 'center',
                  boxShadow: '0 2px 10px rgba(32, 21, 21, 0.03)'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'none', marginBottom: 4 }}>
                    Step 0{idx + 1} · Ingestion Trigger
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-ink)' }}>
                    {wf.trigger}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#2563eb', fontWeight: 700, textTransform: 'none', marginBottom: 4 }}>
                    Autonomous Logic Engine
                  </div>
                  <div style={{ fontSize: '13.5px', color: 'var(--color-body)' }}>
                    {wf.logic}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: '#108548', fontWeight: 700, textTransform: 'none', marginBottom: 4 }}>
                    Target Outcome
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--color-ink)' }}>
                    {wf.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Production Stack Chips */}
        <div style={{ marginBottom: 64, padding: '32px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-hairline)' }}>
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', textTransform: 'none', letterSpacing: '0.06em', color: 'var(--color-muted)', marginBottom: 16, fontWeight: 700 }}>
            Production Infrastructure &amp; Tooling Stack
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {study.stack.map(tech => (
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

        {/* Bottom CTA Band - Stripe Dark Shell */}
        <div className="cta-wave-banner" style={{ padding: '52px', textAlign: 'center' }}>
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: 14, fontWeight: 600 }}>
            Engineer a Similar Outcome for Your Team
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: 640, margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 400 }}>
            Our principal architects will evaluate your existing system bottlenecks and present an architectural implementation roadmap within 5 business days.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <Link 
              to="/start-a-project" 
              className="btn-secondary-on-dark" 
              style={{ padding: '12px 24px' }}
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight size={15} />
            </Link>
            <Link 
              to="/work" 
              className="btn-secondary-on-dark" 
              style={{ padding: '12px 20px' }}
            >
              <ArrowLeft size={15} />
              <span>Back to All Work</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
