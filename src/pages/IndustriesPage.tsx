import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { industriesData } from '../data/sitemapData';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Layers,
  ShoppingBag,
  Sparkles,
  Truck,
  Zap,
  ShieldCheck,
  Server,
  ChevronRight,
  Database
} from 'lucide-react';

const industryIcons: Record<string, React.ComponentType<{ size?: number | string; color?: string }>> = {
  'digital-enterprises': Layers,
  'education-learning': GraduationCap,
  'consumer-retail': ShoppingBag,
  'consumer-products': ShoppingBag,
  'lifestyle-wellness': Sparkles,
  'healthcare-pharma': HeartPulse,
  'banking-investment': Landmark,
  'energy-commodities': Factory,
  'supply-chain-logistics': Truck,
};

const industryDeepDives: Record<string, {
  compliance: string;
  architectureBlueprint: string;
  keyIntegrations: string[];
  workflowRecipes: { trigger: string; action: string }[];
  businessImpact: string;
}> = {
  'digital-enterprises': {
    compliance: 'SOC 2 Type II, ISO 27001, Multi-region GDPR compliance.',
    architectureBlueprint: 'Event-driven microservices architecture built on Kubernetes and Kafka, supporting 50,000+ concurrent requests/sec with auto-scaling zero-latency read replicas.',
    keyIntegrations: ['Kafka', 'AWS Aurora', 'Snowflake', 'Redis Cluster', 'Kong Gateway'],
    workflowRecipes: [
      { trigger: 'User spikes exceed 80% cluster threshold', action: 'Horizontal pod auto-scaler provisions container replicas in <15s' },
      { trigger: 'Third-party API experiences 503 outage', action: 'Circuit-breaker routes to fallback cache with zero user interruption' }
    ],
    businessImpact: '99.99% system availability with 70% lower cloud compute waste.'
  },
  'education-learning': {
    compliance: 'FERPA, COPPA, Section 508 Accessibility standards.',
    architectureBlueprint: 'Context-aware knowledge graphs delivering real-time adaptive lesson pacing and automated rubric evaluation with zero bias drift.',
    keyIntegrations: ['Canvas LMS', 'Blackboard API', 'OpenAI Fine-Tuned', 'Vector DB', 'PostgreSQL'],
    workflowRecipes: [
      { trigger: 'Student submits interactive coding exercise', action: 'Agent analyzes AST syntax & returns tailored hint in <1.2s' },
      { trigger: 'Student engagement drops below baseline', action: 'Curriculum engine dynamically adjusts concept progression' }
    ],
    businessImpact: '3.4x higher course completion rates across 250,000 enrolled students.'
  },
  'consumer-retail': {
    compliance: 'PCI-DSS Level 1, CCPA, Omnibus Directive.',
    architectureBlueprint: 'Omnichannel inventory abstraction broker synchronizing Shopify Plus, physical warehouse POS, and ERP ledgers with sub-second consistency.',
    keyIntegrations: ['Shopify Plus', 'SAP ERP', 'Stripe', 'Klaviyo', 'Algolia'],
    workflowRecipes: [
      { trigger: 'Stock drops below safety reserve at regional DC', action: 'Dynamic back-order threshold updates online storefront instantaneously' },
      { trigger: 'High-value customer abandons custom bundle', action: 'Contextual SMS offer generated with dynamic cart discount' }
    ],
    businessImpact: '44% reduction in out-of-stock cancellations and +18% higher cart conversion.'
  },
  'lifestyle-wellness': {
    compliance: 'HIPAA Shield for biometric data, Apple HealthKit & Google Fit privacy rules.',
    architectureBlueprint: 'Time-series telemetry ingestion bus handling wearable device heart rate and sleep metrics with real-time anomaly filtering.',
    keyIntegrations: ['Apple HealthKit', 'Google Fit API', 'Stripe Billing', 'Twilio SMS', 'TimescaleDB'],
    workflowRecipes: [
      { trigger: 'Wearable streams elevated resting metric', action: 'Companion app triggers personalized recovery routine guidance' },
      { trigger: 'Monthly subscription reaches renewal window', action: 'Usage-based engagement review delivered with retention perks' }
    ],
    businessImpact: '62% 90-day user retention rate compared to 28% industry average.'
  },
  'healthcare-pharma': {
    compliance: 'HIPAA, HITECH, FDA 21 CFR Part 11, HITRUST CSF.',
    architectureBlueprint: 'Air-gapped clinical intelligence platform connecting HL7/FHIR diagnostic streams to role-based clinician decision support tools.',
    keyIntegrations: ['Epic Systems', 'Cerner FHIR', 'Snowflake Healthcare', 'AWS HealthLake', 'FastAPI'],
    workflowRecipes: [
      { trigger: 'Incoming lab specimen result categorized critical', action: 'Encrypted push notification delivered to on-call physician within 5 seconds' },
      { trigger: 'Insurance prior authorization requested', action: 'NLP engine compiles clinical chart notes into pre-approved payer packet' }
    ],
    businessImpact: 'Decreased authorization waiting periods from 14 days down to 4 hours.'
  },
  'banking-investment': {
    compliance: 'FINRA, SEC Rule 17a-4, FFIEC, SOC 1 & 2.',
    architectureBlueprint: 'Immutable transaction ledger paired with real-time ML fraud detection models running at sub-50ms inference latency.',
    keyIntegrations: ['SWIFT Gateway', 'Plaid API', 'Snowflake', 'Kafka', 'PostgreSQL Bitemporal'],
    workflowRecipes: [
      { trigger: 'Cross-border wire exceeds anomaly score threshold', action: 'Instant temporary hold initiated and fraud analyst ticket created with audit payload' },
      { trigger: 'Market close settlement batch triggers at 16:00', action: 'Automated reconciliation script balances 50,000 sub-accounts in under 2 minutes' }
    ],
    businessImpact: '$45M+ in potential fraudulent transfers prevented with 0.002% false positive rate.'
  },
  'energy-commodities': {
    compliance: 'NERC CIP, ISO 50001, OSHA Process Safety standards.',
    architectureBlueprint: 'Distributed edge telemetry broker ingesting SCADA and IoT sensor data to forecast equipment stress and optimize energy dispatch.',
    keyIntegrations: ['SCADA Modbus', 'MQTT Edge Brokers', 'AWS IoT Greengrass', 'TimescaleDB', 'Grafana'],
    workflowRecipes: [
      { trigger: 'Turbine vibration frequency exhibits harmonic variance', action: 'Automated predictive maintenance work-order dispatched to field engineering crew' },
      { trigger: 'Peak grid energy pricing tariff takes effect', action: 'Industrial battery storage switches to discharge mode automatically' }
    ],
    businessImpact: '32% reduction in unplanned equipment downtime and 18% lower peak energy tariffs.'
  },
  'supply-chain-logistics': {
    compliance: 'C-TPAT, WCO SAFE Framework, US Customs ACE EDI.',
    architectureBlueprint: 'Multi-modal freight orchestration bus synchronizing container GPS telemetry, ocean bill-of-lading documents, and customs brokers.',
    keyIntegrations: ['EDI 214/310/856', 'Project44 API', 'SAP Logistics', 'Svix Webhooks', 'GraphQL'],
    workflowRecipes: [
      { trigger: 'Vessel AIS tracking detects port congestion delay > 12h', action: 'Automated re-routing proposal generated for drayage trucking fleets' },
      { trigger: 'Customs release message confirmed via ACE broker', action: 'Gate-pass barcode delivered instantly to driver mobile app' }
    ],
    businessImpact: 'Average container dwell time reduced from 4.5 days down to 6 hours.'
  }
};

export const IndustriesPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  // Normalize id: support consumer-products mapping to consumer-retail
  const normalizedId = id === 'consumer-products' ? 'consumer-retail' : id;
  const activeIndustry = normalizedId ? industriesData.find(x => x.id === normalizedId) : null;
  const activeDeepDive = normalizedId ? industryDeepDives[normalizedId] : null;

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb if detail view */}
        {activeIndustry && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/industries" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Industries</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{activeIndustry.name}</span>
          </nav>
        )}

        {/* Header */}
        <div style={{ maxWidth: 840, marginBottom: 56 }}>

          <h1 className="display-xl" style={{ marginBottom: 18 }}>
            {activeIndustry ? activeIndustry.name : 'Built around the way your industry works.'}
          </h1>
          <p className="body-lg" style={{ color: 'var(--color-body)' }}>
            {activeIndustry
              ? activeIndustry.focus
              : 'Every vertical operates with unique compliance requirements, data schemas, and legacy integrations. ENTWY brings tailored blueprints across 8 core enterprise sectors.'}
          </p>
        </div>

        {/* If Active Industry Detail View */}
        {activeIndustry && activeDeepDive ? (
          <div style={{ marginBottom: 64 }}>
            <div
              style={{
                backgroundColor: 'var(--color-canvas-soft)',
                border: '1px solid var(--color-hairline-strong)',
                borderRadius: 'var(--radius-xl)',
                padding: '40px',
                boxShadow: '0 8px 24px rgba(32, 21, 21, 0.04)',
                marginBottom: '40px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: 12 }}>
                <span className="step-type-badge badge-trigger" style={{ fontSize: '12px' }}>
                  Regulatory Standards: {activeDeepDive.compliance}
                </span>
                <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700 }}>
                  {activeDeepDive.businessImpact}
                </span>
              </div>

              <h2 className="section-title">How the systems connect</h2>
              <p style={{ fontSize: '17px', color: 'var(--color-ink)', lineHeight: 1.65, marginBottom: '32px' }}>
                {activeDeepDive.architectureBlueprint}
              </p>

              {/* 2-Column: Workflow Recipes & Target Solutions */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '28px', marginBottom: '32px' }}>
                {/* Workflow Recipes */}
                <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '24px', border: '1px solid var(--color-hairline)' }}>
                  <h3 className="section-title">Example workflows</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    {activeDeepDive.workflowRecipes.map((wf, idx) => (
                      <div key={idx} style={{ borderBottom: idx === 0 ? '1px solid var(--color-hairline)' : 'none', paddingBottom: idx === 0 ? 12 : 0 }}>
                        <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, marginBottom: 4 }}>
                          Trigger: {wf.trigger}
                        </div>
                        <div style={{ fontSize: '13.5px', color: 'var(--color-ink-mid)', lineHeight: 1.5 }}>
                          Action: {wf.action}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Solutions */}
                <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', padding: '24px', border: '1px solid var(--color-hairline)' }}>
                  <h3 className="section-title">Relevant capabilities</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {activeIndustry.solutions.map((sol) => (
                      <div key={sol} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '13.5px', color: 'var(--color-ink-mid)' }}>
                        <CheckCircle2 size={16} color="#108548" style={{ flexShrink: 0 }} />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Integrations */}
              <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-hairline)' }}>
                <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', textTransform: 'none', color: 'var(--color-muted)', marginBottom: 10, fontWeight: 700 }}>
                  Pre-Built Sector Connectors
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {activeDeepDive.keyIntegrations.map(tech => (
                    <span
                      key={tech}
                      style={{
                        padding: '6px 14px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--color-hairline)',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '12.5px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--color-ink)',
                        fontWeight: 600
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link to={`/start-a-project?industry=${activeIndustry.id}`} className="btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                <span>Scope {activeIndustry.name} Solution</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/industries" className="btn-secondary" style={{ padding: '14px 22px', fontSize: '15px' }}>
                <ArrowLeft size={15} />
                <span>All Industry Verticals</span>
              </Link>
            </div>
          </div>
        ) : null}

        {/* 8 Industries Cards Grid */}
        <div>
          {activeIndustry && (
            <h2 className="title-lg" style={{ marginBottom: 24 }}>
              All Supported Industry Verticals
            </h2>
          )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '28px' }}>
            {industriesData.map((ind, idx) => {
              const IconComp = industryIcons[ind.id] || Building2;
              const isSelected = activeIndustry?.id === ind.id;
              return (
                <article
                  key={ind.id}
                  id={ind.id}
                  className="step-card"
                  style={{
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 'var(--radius-lg)',
                    border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
                    backgroundColor: '#ffffff',
                    boxShadow: isSelected ? '0 12px 32px rgba(83, 58, 253, 0.12)' : '0 2px 8px rgba(13, 37, 61, 0.04)',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div style={{ width: 42, height: 42, borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)' }}>
                        <IconComp size={20} />
                      </div>
                      <span className="step-num">Vertical 0{idx + 1}</span>
                    </div>

                    <Link to={`/industries/${ind.id}`} style={{ textDecoration: 'none' }}>
                      <h2 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '12px', lineHeight: 1.35 }}>
                        {ind.name}
                      </h2>
                    </Link>

                    <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.55, marginBottom: '20px' }}>
                      {ind.focus}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {ind.solutions.map((sol) => (
                        <div key={sol} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--color-ink-mid)' }}>
                          <CheckCircle2 size={14} color="#108548" />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ paddingTop: '20px', borderTop: '1px solid var(--color-hairline-soft)', display: 'flex', gap: 10 }}>
                    <Link
                      to={`/industries/${ind.id}`}
                      className="btn-secondary"
                      style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '13.5px' }}
                    >
                      <span>Sector Blueprint</span>
                      <ArrowRight size={13} />
                    </Link>
                    <Link
                      to={`/start-a-project?industry=${ind.id}`}
                      className="btn-primary"
                      style={{ flex: 1, justifyContent: 'center', padding: '10px 14px', fontSize: '13.5px' }}
                    >
                      <span>Scope</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Band */}
        <div
          className="cta-wave-banner"
          style={{
            marginTop: '72px',
            padding: '52px',
            textAlign: 'center',
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 300 }}>
            Need custom architecture for your industry?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 300 }}>
            We build software tailored to your regulatory, scale, and data privacy requirements with guaranteed SLAs.
          </p>
          <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
            <span>Discuss Industry Solutions</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
