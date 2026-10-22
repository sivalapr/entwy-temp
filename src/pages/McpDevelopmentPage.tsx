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
  Bot,
  Binary,
  FolderTree,
  Share2
} from 'lucide-react';

export const McpDevelopmentPage: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(2);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const mcpServerTypes = [
    {
      title: 'Database MCP Servers',
      badge: 'Real-Time Data',
      icon: Database,
      desc: 'Schema-aware protocol bridges providing AI models instant read/write access to structured and unstructured repositories with strict query whitelisting and zero raw credential exposure.',
      features: [
        'Native drivers for PostgreSQL, MySQL, MongoDB, Redis, Snowflake & BigQuery',
        'Direct-to-source querying ensuring models work with up-to-the-second data',
        'Granular read-only guardrails and SQL injection prevention layers',
      ],
    },
    {
      title: 'API Gateway Integration Servers',
      badge: 'Microservices',
      icon: Code2,
      desc: 'Wraps internal microservice endpoints and REST/GraphQL architectures into MCP-compliant tool surfaces with dynamic OpenAPI parameter validation.',
      features: [
        'Auto-generated tool definitions from OpenAPI 3.1 & Swagger specifications',
        'Multi-step chained API workflows with deterministic parameter validation',
        'Standardized error envelopes and automatic retry handling',
      ],
    },
    {
      title: 'SaaS Ecosystem Servers',
      badge: 'Business Tools',
      icon: Workflow,
      desc: 'Enables autonomous agents to safely orchestrate actions across business-critical tools with scoped, user-delegated token permissions.',
      features: [
        'Pre-built hardened connectors for Salesforce, HubSpot, Jira, Slack, Linear & Google Workspace',
        'Scoped OAuth 2.1 tokens restricting actions to user-authorized records only',
        'Human-in-the-loop approval hooks for high-impact mutations (e.g. billing, deletes)',
      ],
    },
    {
      title: 'File System Management Servers',
      badge: 'Sandboxed Docs',
      icon: FolderTree,
      desc: 'Sandboxed gateways that permit models to index, read, and process documents across local and cloud storage without exposing sensitive OS roots.',
      features: [
        'Cloud and hybrid storage integration: AWS S3, Google Cloud Storage, Azure Blob & SharePoint',
        'Strict path allowlists and isolated chroot-style environments',
        'Automated chunking and semantic metadata generation for retrieval',
      ],
    },
    {
      title: 'Custom Domain & Legacy ERP Servers',
      badge: 'Enterprise Core',
      icon: Cpu,
      desc: 'Bespoke bridges tailored for proprietary enterprise applications, SAP NetWeaver, Oracle ERP, AS400 mainframes, and internal bespoke software.',
      features: [
        'Specialized protocol wrappers for legacy RPC, SOAP, and proprietary TCP protocols',
        'Translates esoteric legacy data structures into clean JSON-RPC tools and resources',
        'Preserves existing enterprise audit logs and data tenancy barriers',
      ],
    },
  ];

  const architectureLayers = [
    {
      layer: 'Layer 1: Host Interface',
      subtitle: 'Where humans interact with AI agents',
      desc: 'The client application where the AI model executes: Claude Desktop, Cursor IDE, VS Code, custom enterprise web portals, terminal CLI agents, or embedded company copilots.',
      tags: ['Claude Desktop', 'Cursor IDE', 'Web Portals', 'Internal Copilots'],
    },
    {
      layer: 'Layer 2: MCP Client Runtime',
      subtitle: 'Protocol handshake & session negotiation',
      desc: 'Governs client-side connection states, negotiates protocol version handshake, discovers available tools and resources, and dispatches JSON-RPC requests.',
      tags: ['MCP SDKs', 'Client Runtime', 'Session Handshake', 'Tool Discovery'],
    },
    {
      layer: 'Layer 3: Transport & Session Layer',
      subtitle: 'High-speed local & remote streams',
      desc: 'Standardized communication conduits. Supports stdio pipes for low-latency local execution on developer machines, and Streamable HTTP with Server-Sent Events (SSE) for distributed cloud clusters.',
      tags: ['JSON-RPC 2.0', 'Local stdio', 'HTTP + SSE', 'Session State'],
    },
    {
      layer: 'Layer 4: MCP Server Core',
      subtitle: 'Business logic & capability boundary',
      desc: 'The heart of MCP: exposes Tools (executable functions the model calls), Resources (contextual data streams read by the model), and Prompts (structured interaction templates).',
      tags: ['Tools Execution', 'Resources Streaming', 'Prompt Templates', 'Domain Rules'],
    },
    {
      layer: 'Layer 5: Security, RBAC & Governance',
      subtitle: 'Zero-trust enterprise defense',
      desc: 'Enforces OAuth 2.1 authentication, Protected Resource Metadata, and strict Role-Based Access Control so models can only execute actions permitted by the calling user.',
      tags: ['OAuth 2.1', 'RBAC Policies', 'Consent Prompts', 'Audit Logging'],
    },
    {
      layer: 'Layer 6: Enterprise Integration Layer',
      subtitle: 'Backing data stores & operational systems',
      desc: 'The underlying corporate infrastructure: PostgreSQL, Snowflake, MongoDB, Salesforce, SAP, GitHub, Slack, and private internal microservices.',
      tags: ['SQL/NoSQL DBs', 'Enterprise ERPs', 'CRMs & SaaS', 'Private APIs'],
    },
  ];

  const caseStudies = [
    {
      client: 'LegalTech Document Intelligence',
      metric: '70% reduction in case review latency',
      sub: '90–95% accuracy in medical/injury analysis',
      desc: 'Engineered an MCP server connecting Claude Sonnet with unstructured medical records and court dockets, enabling automated timeline extraction and claim assessment.',
      tags: ['Claude 3.5', 'PostgreSQL MCP', 'HIPAA Sandboxed'],
    },
    {
      client: 'Commercial Lending Underwriting',
      metric: '60% reduction in manual document effort',
      sub: '90% decrease in manual data entry errors',
      desc: 'Cloud-native MCP implementation bridging AWS Document AI with underwriting systems, accelerating commercial loan approvals from 4 days to 45 minutes.',
      tags: ['HTTP+SSE Transport', 'OpenAPI Tools', 'Banking Core'],
    },
    {
      client: 'Aviation Supply Chain Logistics',
      metric: '50% reduction in support ticket backlog',
      sub: '98% parts inventory matching accuracy',
      desc: 'Custom MCP server wrapping complex ERP inventory tables, allowing natural-language parts compatibility verification and instant dispatch tracking.',
      tags: ['SAP ERP Bridge', 'Stdio + Remote Hybrid', 'FastAPI'],
    },
    {
      client: 'Clinical Mental Wellbeing Assistant',
      metric: '99% data security compliance rating',
      sub: '60% boost in patient program retention',
      desc: 'Privacy-first MCP deployment with strict PII scrubbing and resource access policies, allowing therapeutic copilots to reference historical patient notes safely.',
      tags: ['Zero-Trust RBAC', 'AES-256 Storage', 'OAuth 2.1'],
    },
  ];

  const faqs = [
    {
      q: 'How do you decide between a local (stdio) vs remote (HTTP + SSE) MCP server setup?',
      a: 'We evaluate where the workflow runs, user permissions, and infrastructure constraints. For personal developer tools, local IDE extensions (Cursor/VS Code), or single-user desktop apps (Claude Desktop), local stdio processes provide sub-millisecond execution with minimal operational complexity. For shared enterprise tools, multi-tenant web copilots, centralized governance, and high-concurrency cloud clusters, we deploy remote MCP servers over Streamable HTTP with Server-Sent Events (SSE) and OAuth 2.1.',
    },
    {
      q: 'How does MCP fit into our existing enterprise AI stack?',
      a: 'MCP acts as the standardized universal contract between your AI models (hosted on OpenAI, Anthropic, AWS Bedrock, or local Ollama) and your business infrastructure. Instead of writing custom fragile glue code for every model or pipeline, you build MCP servers once. Any MCP-compatible client or agent can immediately discover and call your tools and resources securely.',
    },
    {
      q: 'How do you decide whether to expose Tools, Resources, Prompts, or all three?',
      a: 'We follow a minimal-surface capability model. If your AI agent needs to perform an active mutation (e.g. book a calendar slot, update a CRM deal, create a Jira issue), we expose a Tool. If it needs passive read-only contextual knowledge (e.g. database schemas, customer history, file contents), we expose a Resource. If users require standardized, guided conversational workflows, we add Prompts. We only expose what the specific workflow requires to minimize attack vectors.',
    },
    {
      q: 'How do your MCP development experts handle authentication, authorization, and RBAC?',
      a: 'We strictly follow the Anthropic MCP specification for OAuth 2.1 and Protected Resource Metadata. Crucially, we NEVER leave authorization decisions to the LLM itself. Permissions, role-based access controls, and path allowlists are enforced deterministically at the MCP server boundary and in the backing database. If a user does not have permission to view a record, the MCP server rejects the call before any data is streamed.',
    },
    {
      q: 'What is your approach to securing sensitive PII and confidential enterprise data?',
      a: 'We implement zero-trust data segregation: strict input sanitization, automated PII/PHI redaction masks prior to model context stuffing, encrypted transport via TLS 1.3, sandboxed file execution preventing directory traversal attacks, and full cryptographic audit logging tracking every tool execution and response.',
    },
    {
      q: 'How do you manage MCP protocol versioning, upgrades, and backwards compatibility?',
      a: 'The official Model Context Protocol includes explicit capability negotiation and protocol version handshake during the initialization phase. Our engineering team builds automated contract integration suites that test client-server compatibility on every CI/CD commit. When Anthropic or the open-source community releases spec updates, we execute phased rolling upgrades without service downtime.',
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
          <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>MCP (Model Context Protocol)</span>
        </nav>

        {/* Hero Section */}
        <div style={{ maxWidth: 960, marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-primary-bg-subdued)', border: '1px solid #d4d0fc', marginBottom: '22px' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-primary)' }} />
            <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Model Context Protocol (MCP) Standard
            </span>
          </div>

          <h1 className="display-xl" style={{ marginBottom: 24, lineHeight: 1.12, letterSpacing: '-0.03em' }}>
            MCP Development Services: Scale enterprise AI with standardized protocols.
          </h1>

          <p style={{ fontSize: '20px', lineHeight: 1.5, color: 'var(--color-ink-mid)', marginBottom: 20, fontWeight: 500 }}>
            We develop secure, production-ready Model Context Protocol (MCP) servers that bridge LLMs, Claude, Cursor, and autonomous agents with internal databases, private APIs, SaaS tools, and local files.
          </p>

          <p className="body-lg" style={{ color: 'var(--color-body)', marginBottom: 36, lineHeight: 1.65, maxWidth: 840 }}>
            As AI applications move into production, disconnected scripts and one-off prompt wrappers create fragile, unmaintainable architectures. ENTWY builds governed, high-concurrency MCP server infrastructure that unifies your AI integrations into a single, standardized JSON-RPC protocol.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
            <Link 
              to="/start-a-project?service=mcp-development" 
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '15px' }}
            >
              <span>Scope Your MCP Server</span>
              <ArrowRight size={16} />
            </Link>
            <Link 
              to="/services" 
              className="btn-secondary"
              style={{ padding: '14px 22px', fontSize: '15px' }}
            >
              <span>Explore All Capabilities</span>
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
              70%
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>
              Reduction in Manual Workflow Time
            </div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              90–95%
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>
              Accuracy in Structured Data Extraction
            </div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              100K+
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>
              Monthly MCP Agent Tool Invocations
            </div>
          </div>
          <div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--color-ink)', letterSpacing: '-0.02em', lineHeight: 1 }}>
              0%
            </div>
            <div style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '8px', fontWeight: 500 }}>
              Data Leakage with Sandboxed RBAC
            </div>
          </div>
        </div>

        {/* The Problem vs The MCP Solution */}
        <section 
          style={{
            backgroundColor: 'var(--color-canvas-soft, #f6f9fc)',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(28px, 5vw, 48px)',
            marginBottom: '72px',
          }}
        >
          <div style={{ maxWidth: 760, marginBottom: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Why Model Context Protocol Matters
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Eliminate fragile one-off AI connectors with an open standard
            </h2>
            <p className="body-md" style={{ color: 'var(--color-body)' }}>
              Without MCP, building AI agent integrations requires custom Python glue, bespoke prompt stuffing, and dangerous direct database connections. MCP creates a clean separation between intelligence and enterprise data.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '20px' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #ffd0d0', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
              <div style={{ color: '#d92d20', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                ✕ The Fragile Legacy Method
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--color-body)' }}>
                <li>• Bespoke Python scripts for every single tool</li>
                <li>• Hardcoded database credentials passed directly to models</li>
                <li>• No unified session lifecycle or client negotiation</li>
                <li>• Brittle prompt engineering instead of typed tool schemas</li>
                <li>• Exponential maintenance cost as models and APIs change</li>
              </ul>
            </div>

            <div style={{ backgroundColor: '#ffffff', border: '1px solid #b4f0b4', borderRadius: 'var(--radius-lg)', padding: '24px' }}>
              <div style={{ color: '#039855', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                ✓ The Modern MCP Architecture
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: 'var(--color-body)' }}>
                <li>• Open standard JSON-RPC 2.0 client-server protocol</li>
                <li>• Deterministic Tools, Resources, and Prompt templates</li>
                <li>• Granular OAuth 2.1 & RBAC enforced at the server boundary</li>
                <li>• Works simultaneously across Claude Desktop, Cursor, and custom web apps</li>
                <li>• Swappable models without re-writing backend connectors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5 Types of MCP Servers We Develop */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ maxWidth: 760, marginBottom: '40px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Specialized Infrastructure
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Types of MCP servers we engineer for enterprises
            </h2>
            <p className="body-md" style={{ color: 'var(--color-body)' }}>
              We develop specialized servers that transform static enterprise data and internal microservices into agentic resources.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '24px' }}>
            {mcpServerTypes.map((server, idx) => {
              const IconComp = server.icon;
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
                      <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', padding: '4px 10px', borderRadius: 'var(--radius-pill)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)', color: 'var(--color-primary)' }}>
                        {server.badge}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '12px' }}>
                      {server.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '20px' }}>
                      {server.desc}
                    </p>
                  </div>

                  <div style={{ borderTop: '1px solid var(--color-hairline)', paddingTop: '18px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '10px' }}>
                      Key Capabilities:
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {server.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ fontSize: '13px', color: 'var(--color-body)', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: 1.45 }}>
                          <CheckCircle2 size={14} style={{ color: 'var(--color-primary)', marginTop: '2px', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6-Layer MCP Solution Architecture */}
        <section 
          style={{
            backgroundColor: 'var(--color-surface-dark, #0a2540)',
            color: '#ffffff',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(32px, 5vw, 56px)',
            marginBottom: '80px',
            boxShadow: '0 24px 64px rgba(10, 37, 64, 0.25)',
          }}
        >
          <div style={{ maxWidth: 740, marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-primary-soft, #a8c3de)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Full-Stack Architecture
            </span>
            <h2 className="display-md" style={{ color: '#ffffff', marginTop: '8px', marginBottom: '12px' }}>
              The 6-layer MCP enterprise stack
            </h2>
            <p style={{ color: '#a8c3de', fontSize: '16px', lineHeight: 1.6 }}>
              A standard connection layer that decouples AI models from backend platforms while maintaining strict compliance.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '16px' }}>
            {architectureLayers.map((layer, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveLayer(idx)}
                style={{
                  backgroundColor: activeLayer === idx ? 'rgba(83, 58, 253, 0.22)' : 'rgba(255, 255, 255, 0.04)',
                  border: activeLayer === idx ? '1px solid var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, color: activeLayer === idx ? '#8fa3ff' : '#a8c3de', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  {layer.layer}
                </div>
                <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', marginBottom: '10px' }}>
                  {layer.subtitle}
                </div>
                <p style={{ fontSize: '13px', color: '#cad5e2', lineHeight: 1.55, marginBottom: '16px' }}>
                  {layer.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {layer.tags.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        color: '#ffffff',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MCP Tech Stack */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ maxWidth: 740, marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Technologies & Standards
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Tech stack our MCP specialists deploy
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Languages & Runtimes
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['TypeScript', 'Node.js', 'Python', 'Go', 'Rust'].map(i => (
                  <span key={i} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: 'var(--radius-xs)', backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', color: 'var(--color-ink)' }}>{i}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Transports & Protocols
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['JSON-RPC 2.0', 'stdio (Local)', 'HTTP + SSE (Remote)', 'Streamable HTTP'].map(i => (
                  <span key={i} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: 'var(--radius-xs)', backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', color: 'var(--color-ink)' }}>{i}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Validation & Schemas
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Zod', 'Pydantic v2', 'JSON Schema', 'OpenAPI 3.1'].map(i => (
                  <span key={i} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: 'var(--radius-xs)', backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', color: 'var(--color-ink)' }}>{i}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: '24px', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--color-ink)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Security & Cloud Hosting
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['OAuth 2.1', 'RBAC Guardrails', 'Docker', 'Kubernetes', 'AWS ECS', 'Cloudflare Workers'].map(i => (
                  <span key={i} style={{ fontSize: '12px', padding: '4px 10px', borderRadius: 'var(--radius-xs)', backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', color: 'var(--color-ink)' }}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Case Studies */}
        <section style={{ marginBottom: '80px' }}>
          <div style={{ maxWidth: 740, marginBottom: '36px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Production Deployments
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '14px', letterSpacing: '-0.02em' }}>
              Proven enterprise impact from MCP implementations
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px' }}>
            {caseStudies.map((cs, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--color-hairline)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px',
                  boxShadow: 'var(--shadow-stripe-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '8px' }}>
                    {cs.client}
                  </div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    {cs.metric}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--color-ink)', marginBottom: '14px' }}>
                    {cs.sub}
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, marginBottom: '20px' }}>
                    {cs.desc}
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cs.tags.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-xs)',
                        backgroundColor: 'var(--color-canvas-soft)',
                        color: 'var(--color-muted)',
                        border: '1px solid var(--color-hairline)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Accordion */}
        <section style={{ marginBottom: '80px', maxWidth: 860 }}>
          <div style={{ marginBottom: '32px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Architecture & Strategy
            </span>
            <h2 className="display-md" style={{ marginTop: '8px', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              MCP Development FAQs
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
            <Bot size={28} />
          </div>
          <h2 className="display-md" style={{ marginBottom: '14px', maxWidth: '640px' }}>
            Ready to connect your AI with enterprise data?
          </h2>
          <p className="body-lg" style={{ color: 'var(--color-body)', maxWidth: '580px', marginBottom: '28px' }}>
            Schedule an architectural session with our Model Context Protocol engineers. We will inspect your tools, database access boundaries, and deploy production-grade MCP servers.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link 
              to="/start-a-project?service=mcp-development" 
              className="btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px' }}
            >
              <span>Build Your MCP Server</span>
              <ArrowRight size={16} />
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary"
              style={{ padding: '14px 24px', fontSize: '15px' }}
            >
              <span>Speak to an AI Architect</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default McpDevelopmentPage;
