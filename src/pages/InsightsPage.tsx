import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { insightsCategoriesData, articlesData } from '../data/sitemapData';
import { InsightsBlogTemplate } from '../components/InsightsBlogTemplate';
import { ArrowLeft, ArrowRight, BookOpen, Clock, FileText, Sparkles, Tag, ChevronRight, User } from 'lucide-react';

const fullArticleBodies: Record<string, {
  author: string;
  role: string;
  content: string[];
  takeaways: string[];
}> = {
  'autonomous-agents-in-production': {
    author: 'Praneeth Sivala',
    role: 'Principal Systems Architect',
    content: [
      'The biggest mistake engineering teams make with LLM-based autonomous agents is treating them as omniscient deterministic calculators. They are not. Large language models are probabilistic reasoning engines. When granted unrestricted permission to execute external API mutations, cascading failures are inevitable.',
      'To operate agents reliably in production, you must bifurcate your system into two distinct planes: a Probabilistic Reasoning Plane and a Deterministic Execution Plane.',
      'In the Probabilistic Plane, the agent proposes tool calls, parameters, and intent graphs. In the Deterministic Plane, a typed broker inspects the parameters, runs pre-flight schema validation, verifies user RBAC credentials, and checks idempotency keys before any database write occurs.',
      'Furthermore, every mutation must support automatic dry-run simulation and point-in-time reversal. If an agent orders the wrong shipment or updates a CRM status erroneously, the system should allow one-click deterministic rollback.'
    ],
    takeaways: [
      'Never allow LLMs direct arbitrary SQL or raw API write access.',
      'Implement strict pre-flight JSON Schema validation with Pydantic / Zod.',
      'Enforce cryptographic idempotency keys across all webhook calls.',
      'Provide operators with visual audit trails and instant rollback controls.'
    ]
  },
  'rag-beyond-embeddings': {
    author: 'ENTWY Research Guild',
    role: 'AI Infrastructure Team',
    content: [
      'Standard cosine-similarity vector retrieval suffers from high semantic noise when searching deep corporate hierarchies or complex regulatory frameworks. Two documents might share high token similarity while contradicting each other on jurisdictional precedence.',
      'Graph-Augmented RAG (GraphRAG) addresses this by extracting entities and directional relationships into a structured knowledge graph prior to indexing. Queries traverse both vector embeddings and deterministic relational edges.',
      'In our benchmarks across 40,000 regulatory compliance PDFs, GraphRAG reduced hallucinatory retrieval by 74% compared to standard dense vector retrieval alone.'
    ],
    takeaways: [
      'Combine dense vector search with BM25 keyword scoring (hybrid search).',
      'Model corporate hierarchies and temporal dates as explicit graph edges.',
      'Utilize reciprocal rank fusion (RRF) to blend graph and vector candidates.'
    ]
  },
  'designing-for-automation': {
    author: 'Lead Design Architect',
    role: 'Product & Design Systems',
    content: [
      'Autonomous software creates a new design problem: the loss of perceived control. When users click a button and an automated workflow executes 10 downstream steps across 5 services, they need reassurance that nothing broke.',
      'We adopt a Zapier-grade visual language characterized by clear step chains, color-coded status badges, and ambient pulse indicators.',
      'Every automated run must provide an expandable execution drawer displaying input payloads, transformation logic, and response timings in human-readable language.'
    ],
    takeaways: [
      'Show unambiguous visual execution states: Running, Succeeded, Paused, Failed.',
      'Always allow operators to intervene, edit parameters, and resume.',
      'Use high-contrast badges with JetBrains Mono numbers to communicate precision.'
    ]
  },
  'mvp-velocity-playbook': {
    author: 'ENTWY Delivery Team',
    role: 'Strategic Advisory',
    content: [
      'Traditional enterprise software initiatives fail because committees spend 6 months debating edge cases before writing a line of code. By the time software ships, market requirements have shifted.',
      'Our 6-week MVP model operates with an integrated 3-person strike team: 1 Staff Full-Stack Engineer, 1 Senior Product Designer, and 1 Systems Architect.',
      'We eliminate specification documents in favor of clickable Figma prototypes by day 4 and live staging environments with real authentication by day 10.'
    ],
    takeaways: [
      'Limit Day-1 scope to the single high-leverage transaction flow.',
      'Ship to production on week 2 with mock data to validate user journeys early.',
      'Iterate based on measured user telemetry rather than executive intuition.'
    ]
  },
  'event-driven-scale': {
    author: 'Core Infrastructure Guild',
    role: 'Cloud Engineering',
    content: [
      'Synchronous HTTP requests between internal microservices create brittle domino effects: if service C experiences latency spikes, service A times out.',
      'By decoupling inter-service communications using Kafka event buses and durable webhook workers, systems achieve near-infinite elasticity.',
      'Our reference architecture leverages Svix and Redis-backed Celery workers to buffer millions of webhook events during flash traffic spikes without dropping a single packet.'
    ],
    takeaways: [
      'Adopt an asynchronous publish-subscribe model for all non-critical paths.',
      'Use exponential backoff with jitter on third-party webhook deliveries.',
      'Maintain real-time dead-letter queues (DLQ) with automated alert alerts.'
    ]
  }
};

export const InsightsPage: React.FC = () => {
  const { category, id } = useParams<{ category?: string; id?: string }>();

  // Active reading state
  const activeArticleId = id || (category && fullArticleBodies[category] ? category : null);
  const activeArticle = activeArticleId ? articlesData.find(a => a.id === activeArticleId) : null;
  const activeArticleBody = activeArticleId ? fullArticleBodies[activeArticleId] : null;

  const validCategories = ['all', 'ai', 'design', 'product', 'technology'];
  const selectedCategory = (category && validCategories.includes(category.toLowerCase())) ? category.toLowerCase() : 'all';

  const displayedArticles = insightsCategoriesData.flatMap((cat) =>
    selectedCategory === 'all' || selectedCategory === cat.id
      ? cat.articles.map((art) => ({ ...art, category: cat.title, catId: cat.id }))
      : []
  );

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb if reading mode */}
        {activeArticle && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/insights" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Insights</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>{activeArticle.title}</span>
          </nav>
        )}

        {/* If Reading Full Article */}
        {activeArticle && activeArticleBody ? (
          <article style={{ maxWidth: 840, margin: '0 auto 64px' }}>

            <h1 className="display-lg" style={{ marginBottom: 20, lineHeight: 1.2 }}>
              {activeArticle.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32, fontSize: '14px', color: 'var(--color-muted)', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-ink)', fontWeight: 600 }}>
                <User size={15} color="var(--color-primary)" />
                <span>{activeArticleBody.author}</span>
                <span style={{ color: 'var(--color-muted)', fontWeight: 400 }}>({activeArticleBody.role})</span>
              </div>
              <span>•</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Clock size={14} />
                <span>{activeArticle.readTime}</span>
              </div>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            {/* Article Content */}
            <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--color-ink)', display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
              {activeArticleBody.content.map((para, i) => (
                <p key={i} style={{ margin: 0 }}>{para}</p>
              ))}
            </div>

            {/* Key Takeaways Box */}
            <div style={{ backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline-strong)', borderRadius: 'var(--radius-lg)', padding: '28px', marginBottom: 48 }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--color-ink)', textTransform: 'none', letterSpacing: '0.04em', fontFamily: 'var(--font-mono)', marginBottom: 16 }}>
                Core Architectural Takeaways
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {activeArticleBody.takeaways.map((point, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '14px', color: 'var(--color-ink-mid)' }}>
                    <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>•</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14 }}>
              <Link to="/insights" className="btn-secondary">
                <ArrowLeft size={15} />
                <span>Back to All Articles</span>
              </Link>
              <Link to="/start-a-project" className="btn-primary">
                <span>Discuss Architecture with ENTWY</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        ) : (
          <InsightsBlogTemplate activeCategory={selectedCategory} />
        )}

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
            Put these engineering paradigms to work
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 300 }}>
            Have a custom systems architecture or automation challenge? Book a technical scoping session with our lead architects.
          </p>
          <Link to="/start-a-project" className="btn-secondary-on-dark" style={{ padding: '13px 26px' }}>
            <span>Start a Project</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};
