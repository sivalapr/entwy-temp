import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  ChevronRight, 
  ChevronDown, 
  Zap, 
  Layers, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Lock, 
  Activity, 
  RefreshCw, 
  Code2, 
  Cloud, 
  FileCode, 
  Check, 
  Boxes,
  Workflow,
  Sparkles,
  Terminal,
  Clock
} from 'lucide-react';

export const ApiDevelopmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rest' | 'graphql' | 'grpc' | 'event'>('rest');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const capabilities = [
    {
      title: 'Custom API Development',
      badge: 'Core Protocol',
      icon: Code2,
      desc: 'Bespoke RESTful, GraphQL, and gRPC endpoints engineered for sub-second latency, deterministic error states, and strict JSON schema contracts across all platforms.',
      tags: ['Custom APIs', 'Data Exchange', 'Automated Routing', 'Microservices'],
    },
    {
      title: 'Third-Party API Integration',
      badge: 'Unified Stack',
      icon: RefreshCw,
      desc: 'Seamless bidirectional bridges with mission-critical platforms including Stripe, Salesforce, HubSpot, SAP, Jira, Slack, Workday, and banking rails.',
      tags: ['Stripe & Payments', 'Salesforce / HubSpot', 'ERP Sync', 'Webhook Handlers'],
    },
    {
      title: 'Cloud-Native & Serverless APIs',
      badge: 'Elastic Scale',
      icon: Cloud,
      desc: 'High-concurrency microservices deployed across AWS Lambda, Google Cloud Run, Cloudflare Workers, and Kubernetes clusters with automated auto-scaling.',
      tags: ['Edge Execution', 'Serverless', 'Containerized', 'Zero-Downtime'],
    },
    {
      title: 'Data Integration & Event Streaming',
      badge: 'Real-Time Bus',
      icon: Database,
      desc: 'Consolidate distributed databases and legacy data stores into reactive event buses using Apache Kafka, RabbitMQ, and Redis Streams with zero data loss.',
      tags: ['Kafka Streaming', 'ETL Pipelines', 'CDC Sync', 'Redis Cache'],
    },
    {
      title: 'Enterprise System Modernization',
      badge: 'Strangler Fig',
      icon: Layers,
      desc: 'Wrap monolithic legacy databases and on-premise platforms behind clean, versioned modern API gateways without disrupting active business transactions.',
      tags: ['Legacy Facade', 'Monolith Migration', 'Zero Interruption', 'Data Hygiene'],
    },
    {
      title: 'eCommerce & Financial Rails',
      badge: 'PCI Compliant',
      icon: Activity,
      desc: 'Transactional API pipelines integrating payment gateways, live inventory reservation, tax calculation engines, and automated multi-carrier logistics dispatch.',
      tags: ['Payment Gateways', 'Inventory Reservation', 'Tax & Invoicing', 'Logistics APIs'],
    },
    {
      title: 'CRM & ERP Synchronization',
      badge: 'Sub-second Sync',
      icon: Workflow,
      desc: 'Automated bidirectional data sync between customer records, inventory ledgers, billing transactions, and executive BI reporting warehouses.',
      tags: ['Salesforce Sync', 'SAP NetWeaver', 'Oracle ERP', 'HubSpot Workflows'],
    },
    {
      title: 'API Security, OAuth & WAF Shielding',
      badge: 'Zero-Trust',
      icon: ShieldCheck,
      desc: 'Hardened security layers featuring OAuth 2.1, OIDC, mTLS mutual authentication, granular RBAC, rate-limiting tokens, and OWASP API Top 10 mitigation.',
      tags: ['OAuth 2.1 / OIDC', 'mTLS Verification', 'Rate Limiting', 'DDoS Protection'],
    },
    {
      title: 'Continuous Monitoring & SLA Support',
      badge: '24/7 Telemetry',
      icon: Terminal,
      desc: 'Proactive observability powered by OpenTelemetry, Prometheus, and Grafana with automated anomaly alerting, version deprecation cycles, and 99.99% SLAs.',
      tags: ['OpenTelemetry', 'Distributed Tracing', 'Synthetic Audits', '99.99% SLA'],
    },
  ];

  const differentiators = [
    {
      title: 'Business-Focused Architecture',
      desc: 'We never build isolated APIs in a vacuum. We map internal schemas, legacy data flows, and team operations to craft APIs that directly eliminate manual overhead and unlock revenue.',
    },
    {
      title: 'Full Lifecycle Engineering',
      desc: 'From OpenAPI 3.1 specification design and mock servers to automated integration suites, CI/CD pipelines, and auto-generated developer documentation.',
    },
    {
      title: 'Sub-40ms Low Latency & High Scale',
      desc: 'Architected with connection pooling, distributed Redis caching, binary gRPC transports, and circuit breaker patterns to survive viral enterprise surges.',
    },
    {
      title: 'Dedicated Integration Staff',
      desc: 'Pair directly with principal engineers who have deployed high-throughput financial pipelines, healthcare HL7/FHIR brokers, and multi-tenant SaaS backends.',
    },
    {
      title: 'Cross-Industry Experience',
      desc: 'Proven delivery across FinTech, HealthTech, Logistics, Retail, and Enterprise SaaS. We understand the regulatory constraints of SOC 2, HIPAA, and ISO 27001.',
    },
    {
      title: 'Long-Term Reliability & Observability',
      desc: 'Every endpoint ships with distributed tracing, latency profiling, error budget tracking, and backward-compatible versioning strategies so your systems never break.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'System & Integration Assessment',
      desc: 'We audit your existing application landscape, database schemas, and external vendor dependencies to identify friction points, bottlenecks, and security boundaries.',
    },
    {
      num: '02',
      title: 'Architecture & OpenAPI Contract Planning',
      desc: 'We establish OpenAPI 3.1 specifications, payload contracts, mock testing harnesses, and auth topologies before writing production code.',
    },
    {
      num: '03',
      title: 'API Engineering & Microservices Build',
      desc: 'We code resilient middleware in TypeScript, Go, or Python with automated schema validation, connection pooling, and circuit breaker error fallbacks.',
    },
    {
      num: '04',
      title: 'Rigorous Load & Security Validation',
      desc: 'High-volume stress tests using k6, fuzz testing, OWASP API Top 10 penetration analysis, and regression contract verification.',
    },
    {
      num: '05',
      title: 'Zero-Downtime Deployment & Observability',
      desc: 'Blue-green production cutovers, real-time OpenTelemetry tracing, automated error alerts, and full developer portal documentation handoff.',
    },
  ];

  const faqs = [
    {
      q: 'What is API development and system integration?',
      a: 'API development creates standardized communication interfaces that enable disparate software platforms, internal databases, cloud services, and third-party SaaS tools to exchange data deterministically. System integration links these APIs into a coherent pipeline so your team avoids manual data re-entry, synchronizes customer states in real time, and automates high-volume business workflows.',
    },
    {
      q: 'Which architectural protocol should we choose: REST, GraphQL, or gRPC?',
      a: 'The optimal choice depends on your specific traffic profile. We recommend REST (OpenAPI 3.1) for public developer portals and standard CRUD operations. We implement GraphQL for frontend applications requiring flexible, client-defined data querying from multiple backend microservices without over-fetching. We use gRPC (HTTP/2 binary protocol) for high-frequency internal microservice communication where sub-millisecond execution and minimal bandwidth are mandatory.',
    },
    {
      q: 'Can you integrate modern APIs with our legacy on-premise or ERP systems?',
      a: 'Yes. We frequently use the Strangler Fig pattern to wrap legacy databases (e.g. Oracle, SAP, AS400, on-premise SQL servers) behind high-performance API facades. This allows you to expose clean, modern REST/GraphQL endpoints to new web and mobile applications while insulating your core legacy records from disruption.',
    },
    {
      q: 'How do you safeguard sensitive enterprise data and prevent API vulnerabilities?',
      a: 'We implement zero-trust security postures: OAuth 2.1 and OpenID Connect (OIDC) tokens, mutual TLS (mTLS) for machine-to-machine validation, AES-256 data encryption at rest and in transit, cryptographically signed webhook payloads, rate-limiting tokens (leaky bucket algorithm), and proactive defense against the OWASP API Security Top 10.',
    },
    {
      q: 'Do you provide developer SDKs and interactive documentation?',
      a: 'Yes. Every API we engineer includes self-documenting Swagger / OpenAPI 3.1 portals, comprehensive Postman collections, payload mocking environments, and optional typed client SDKs in TypeScript, Python, or Go to accelerate partner and client developer onboarding.',
    },
  ];

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 32, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)', flexWrap: 'wrap' }}>
          <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={13} />
          <Link to="/services" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Services</Link>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--color-muted)' }}>Implementation</span>
          <ChevronRight size={13} />
          <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>API Development & Integration</span>
        </nav>

        {/* Hero Section */}
        <div style={{ maxWidth: 960, marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-primary-bg-subdued)', border: '1px solid #d4d0fc', marginBottom: '22px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
            <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Enterprise API & System Integration
            </span>
          </div>

          <h1 className="display-xl" style={{ marginBottom: 24, lineHeight: 1.12, letterSpacing: '-0.03em' }}>
            Build powerful API solutions that connect digital systems.
          </h1>

          <p style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--color-ink-mid)', marginBottom: 20, fontWeight: 500 }}>
            Custom REST, GraphQL, gRPC and event-driven architectures engineered for high concurrency, zero data loss, and seamless operational connectivity.
          </p>

          <p className="body-lg" style={{ color: 'var(--color-body)', marginBottom: 36, lineHeight: 1.65, maxWidth: 840 }}>
            Disconnected platforms and siloed databases create costly operational delays. ENTWY architects and integrates resilient API layers that link your mobile apps, web portals, ERPs, payment processors, and legacy databases into one unified, real-time ecosystem.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link 
              to="/start-a-project?service=api-integration" 
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              <span>Scope Your API Project</span>
              <ArrowRight size={16} />
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary"
              style={{ padding: '14px 22px', fontSize: '15px' }}
            >
              <span>View All Capabilities</span>
            </Link>
          </div>
        </div>

        {/* High-Impact Stat Badges */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '64px',
            padding: '28px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            boxShadow: 'var(--shadow-stripe-card)'
          }}
        >
          <div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              250+
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>
              API Projects Delivered
            </div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              150+
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>
              Connected Enterprise Systems
            </div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              99.99%
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>
              Integration Uptime & Reliability
            </div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              &lt; 40ms
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>
              Average p95 Gateway Latency
            </div>
          </div>
        </div>

        {/* What Makes Our API Services Different */}
        <section style={{ marginBottom: '72px' }}>
          <div style={{ maxWidth: 740, marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Why Choose ENTWY
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              What makes our API engineering different
            </h2>
            <p className="body-md" style={{ color: 'var(--color-body)' }}>
              We build fast, secure, and production-tested API backends that combine clean distributed system design with enterprise resilience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '20px' }}>
            {differentiators.map((item, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: 'var(--color-primary-bg-subdued)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)' }}>
                    <Check size={16} />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Full-Spectrum Service Capabilities Grid */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ maxWidth: 760, marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Our Offerings
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              End-to-end API development & integration capabilities
            </h2>
            <p className="body-md" style={{ color: 'var(--color-body)' }}>
              From custom microservice architectures to bidirectional ERP synchronization, we cover the full technical spectrum.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '24px' }}>
            {capabilities.map((cap, idx) => {
              const IconComp = cap.icon;
              return (
                <div 
                  key={idx}
                  className="step-card"
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-hairline)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '32px',
                    boxShadow: 'var(--shadow-stripe-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-primary-bg-subdued)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)' }}>
                        <IconComp size={22} />
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '4px 10px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)', color: 'var(--color-muted)' }}>
                        {cap.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '12px' }}>
                      {cap.title}
                    </h3>
                    <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '22px' }}>
                      {cap.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '16px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {cap.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        style={{
                          fontSize: '11.5px',
                          padding: '3px 9px',
                          borderRadius: 'var(--radius-xs)',
                          backgroundColor: 'var(--color-canvas-soft)',
                          color: 'var(--color-body)',
                          border: '1px solid var(--color-hairline)',
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Architectural Protocol Stack Showcase */}
        <section 
          style={{
            backgroundColor: 'var(--color-surface-dark, #0a2540)',
            color: '#ffffff',
            borderRadius: 'var(--radius-2xl)',
            padding: ' clamp(32px, 5vw, 56px)',
            marginBottom: '80px',
            boxShadow: '0 24px 64px rgba(10, 37, 64, 0.25)',
          }}
        >
          <div style={{ maxWidth: 740, marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary-soft, #a8c3de)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Architectural Stack
            </span>
            <h2 className="display-md" style={{ color: '#ffffff', marginTop: '8px', marginBottom: '12px' }}>
              Engineered with proven protocols and high-throughput standards
            </h2>
            <p style={{ color: '#a8c3de', fontSize: '16px', lineHeight: 1.6 }}>
              We select protocols and message brokers matching your exact throughput, data volume, and latency requirements.
            </p>
          </div>

          {/* Interactive Protocol Tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
            <button
              onClick={() => setActiveTab('rest')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                border: activeTab === 'rest' ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.2)',
                backgroundColor: activeTab === 'rest' ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}
            >
              RESTful & OpenAPI 3.1
            </button>
            <button
              onClick={() => setActiveTab('graphql')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                border: activeTab === 'graphql' ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.2)',
                backgroundColor: activeTab === 'graphql' ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}
            >
              GraphQL & Federation
            </button>
            <button
              onClick={() => setActiveTab('grpc')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                border: activeTab === 'grpc' ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.2)',
                backgroundColor: activeTab === 'grpc' ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}
            >
              gRPC & Protocol Buffers
            </button>
            <button
              onClick={() => setActiveTab('event')}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                border: activeTab === 'event' ? '1px solid var(--color-primary)' : '1px solid rgba(255,255,255,0.2)',
                backgroundColor: activeTab === 'event' ? 'var(--color-primary)' : 'rgba(255,255,255,0.06)',
                color: '#ffffff',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}
            >
              Kafka & Event Streaming
            </button>
          </div>

          {/* Active Tab Panel */}
          <div 
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px',
            }}
          >
            {activeTab === 'rest' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '10px' }}>
                  OpenAPI 3.1 Design-First RESTful Architecture
                </h3>
                <p style={{ color: '#cad5e2', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Industry standard for external developer APIs, public SaaS integrations, and predictable microservices. Every schema is rigorously typed with automatic Swagger docs, request validation, and deterministic HTTP status responses.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Gateways</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Kong, Apigee, Cloudflare</div>
                  </div>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Validation</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Zod, JSON Schema, AJV</div>
                  </div>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Security</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>OAuth 2.1, OIDC, JWT</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'graphql' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '10px' }}>
                  Apollo Federation & Unified Graph Layers
                </h3>
                <p style={{ color: '#cad5e2', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Eliminate over-fetching and eliminate multiple round trips. We stitch distributed domain microservices into a unified enterprise graph with Apollo Federation, enabling reactive web and mobile clients to query precisely what they require.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Graph Engine</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Apollo Server, Yoga, Router</div>
                  </div>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Caching</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Redis Entity & Query Caching</div>
                  </div>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Safety</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Query Complexity Limiting</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'grpc' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '10px' }}>
                  High-Performance gRPC & Binary Protocol Buffers
                </h3>
                <p style={{ color: '#cad5e2', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Built on HTTP/2 multiplexing and compact binary serialization. gRPC delivers 7x to 10x faster execution than traditional REST, making it ideal for internal microservices, real-time trading systems, and IoT telemetry ingestion.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Protocols</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Protobuf v3, HTTP/2</div>
                  </div>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Languages</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Go, Rust, TypeScript, Python</div>
                  </div>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Performance</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Sub-10ms Internal RPC Latency</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'event' && (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ffffff', marginBottom: '10px' }}>
                  Asynchronous Event Buses & Change-Data Capture (CDC)
                </h3>
                <p style={{ color: '#cad5e2', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
                  Decouple complex services through persistent event topics. Powered by Apache Kafka and RabbitMQ with dead-letter queues, exactly-once delivery semantics, and automated replay capabilities for bulletproof financial auditing.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Streaming</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Apache Kafka, Redpanda</div>
                  </div>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Queues</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>RabbitMQ, AWS SQS / SNS</div>
                  </div>
                  <div style={{ padding: '14px', borderRadius: 'var(--radius-md)', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div style={{ fontSize: '12px', color: '#a8c3de', textTransform: 'uppercase' }}>Guarantees</div>
                    <div style={{ fontSize: '15px', fontWeight: 600, marginTop: '4px' }}>Idempotency & Zero Loss</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 5-Stage Engineering Process */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ maxWidth: 740, marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Execution Lifecycle
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Our 5-stage API engineering roadmap
            </h2>
            <p className="body-md" style={{ color: 'var(--color-body)' }}>
              A disciplined, transparent delivery framework that ensures zero regressions and predictable deployment.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px' }}>
            {processSteps.map((step, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  boxShadow: 'var(--shadow-stripe-sm)',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--color-primary)', marginBottom: '14px', fontFamily: 'var(--font-mono)' }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.55 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Solutions Matrix */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ maxWidth: 740, marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Vertical Expertise
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Tailored API architectures across key industries
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '20px' }}>
            <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                FinTech, Banking & Payments
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6 }}>
                PCI-DSS compliant payment gateways, instant bank reconciliation pipelines, KYC identity verification hooks, and real-time ledger accounting sync.
              </p>
            </div>
            <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                Healthcare & Pharmaceutical
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6 }}>
                HIPAA-compliant HL7 and FHIR data integration, electronic health record (EHR) bridges, lab diagnostic APIs, and secure patient portals.
              </p>
            </div>
            <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                Logistics, Freight & Supply Chain
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6 }}>
                Automated freight rate calculation, warehouse ERP synchronization, real-time IoT shipment location webhooks, and carrier route optimization.
              </p>
            </div>
            <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                Retail & Modern eCommerce
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6 }}>
                Omnichannel inventory sync, multi-currency cart checkouts, automated tax and VAT calculations, and personalized recommendation engines.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section style={{ marginBottom: '80px', maxWidth: 860 }}>
          <div style={{ marginBottom: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Frequently Asked Questions
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Common questions about our API services
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, fIdx) => (
              <div 
                key={fIdx}
                style={{
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: '#ffffff',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.18s ease',
                }}
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                  }}
                  aria-expanded={openFaq === fIdx}
                >
                  <span style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', paddingRight: '16px' }}>
                    {faq.q}
                  </span>
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      color: 'var(--color-muted)',
                      transform: openFaq === fIdx ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0
                    }} 
                  />
                </button>
                {openFaq === fIdx && (
                  <div style={{ padding: '0 24px 22px', fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.65 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom High-Conversion CTA Banner */}
        <div 
          style={{
            backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(32px, 6vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: 'var(--shadow-stripe-card)',
            marginBottom: '40px',
          }}
        >
          <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-xl)', backgroundColor: 'var(--color-primary-bg-subdued)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', marginBottom: '20px' }}>
            <Zap size={28} />
          </div>
          <h2 className="display-md" style={{ marginBottom: '14px', maxWidth: '640px' }}>
            Ready to integrate your enterprise systems?
          </h2>
          <p className="body-lg" style={{ color: 'var(--color-body)', maxWidth: '580px', marginBottom: '28px' }}>
            Schedule an architectural consultation with our API specialists. We will analyze your system requirements, identify integration bottlenecks, and propose a concrete technical roadmap.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link 
              to="/start-a-project?service=api-integration" 
              className="btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px' }}
            >
              <span>Scope Your Integration</span>
              <ArrowRight size={16} />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary"
              style={{ padding: '14px 24px', fontSize: '15px' }}
            >
              <span>Book an Engineering Call</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ApiDevelopmentPage;
