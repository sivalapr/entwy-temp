// ==========================================================================
// ENTWY Studio - Interactive Logic
// Airtable-inspired editorial interactions
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavDropdowns();
  initSitemapExplorer();
  initFeatureTabs();
  initWorkFilters();
  initProcessStepper();
  initTopicFilterRail();
  initProjectModal();
  initCaseStudyModal();
});

// 1. Navigation Mega-Menus
function initNavDropdowns() {
  const navItems = document.querySelectorAll('.nav-item.has-dropdown');
  
  navItems.forEach(item => {
    const btn = item.querySelector('.nav-button');
    const dropdown = item.querySelector('.mega-dropdown');

    // Click toggle for accessibility
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) {
        item.classList.add('open');
        dropdown.classList.add('open');
      }
    });

    // Hover open
    item.addEventListener('mouseenter', () => {
      closeAllDropdowns();
      item.classList.add('open');
      dropdown.classList.add('open');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('open');
      dropdown.classList.remove('open');
    });
  });

  document.addEventListener('click', () => {
    closeAllDropdowns();
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.nav-item.has-dropdown').forEach(i => i.classList.remove('open'));
  document.querySelectorAll('.mega-dropdown').forEach(d => d.classList.remove('open'));
}

// 2. Interactive Sitemap Explorer
const sitemapNodeData = {
  "Services": {
    badge: "Services (Strategy, Design, AI, Technology, Growth)",
    color: "#6366f1",
    summary: "Full-lifecycle digital product development from C-suite strategy to AI-native architecture and high-throughput deployment.",
    items: [
      "Product Strategy & Consulting",
      "Digital & AI Transformation",
      "UI/UX & Design Systems",
      "Custom AI Agents & Workflow Automation",
      "Scalable Web & SaaS Engineering",
      "Cloud, DevOps & High-Throughput APIs"
    ],
    targetSection: "#services-section"
  },
  "Solutions": {
    badge: "Enterprise & Venture Solutions",
    color: "#0284c7",
    summary: "Tailored engagements designed to take your vision from zero to production or modernize existing mission-critical systems.",
    items: [
      "Build a New Product (0 to 1)",
      "Build an AI-First Product",
      "Embed AI into Existing Legacy Platforms",
      "Modernise Architecture & Cloud Migration",
      "Automate Complex Business Workflows"
    ],
    targetSection: "#solutions-section"
  },
  "Work": {
    badge: "Selected Case Studies",
    color: "#0d9488",
    summary: "Proven commercial results delivering multi-million dollar platforms across logistics, fintech, and health.",
    items: [
      "Case Study 01: HyperScale - Autonomous Operations",
      "Case Study 02: AuraPay - Predictive Treasury Engine",
      "Case Study 03: VerveCare - Connected Health Ecosystem"
    ],
    targetSection: "#work-section"
  },
  "Process": {
    badge: "5-Stage Engineering Protocol",
    color: "#ea580c",
    summary: "A predictable, transparent shipping cadence reducing time-to-market by 3.4x without cutting architectural corners.",
    items: [
      "Phase 1: Our Approach & Foundation",
      "Phase 2: Discovery & Strategy",
      "Phase 3: Design & Build",
      "Phase 4: Test & Refine",
      "Phase 5: Launch & Scale"
    ],
    targetSection: "#process-section"
  },
  "Industries": {
    badge: "8 Industry Domains",
    color: "#4f46e5",
    summary: "Deep domain compliance and technical context across high-consequence industries.",
    items: [
      "Digital Enterprises & Scalable Platforms",
      "Education, Learning & Skill Development",
      "Consumer Products & Retail Innovation",
      "Lifestyle, Wellness & Personal Care",
      "Healthcare, Insurance & Pharma",
      "Banking & Investment Systems",
      "Energy & Industrial Supply",
      "Supply Chain & Global Logistics"
    ],
    targetSection: "#industries-section"
  },
  "About": {
    badge: "About ENTWY",
    color: "#db2777",
    summary: "A senior team of elite system architects, product designers, and AI engineers focused on uncompromising quality.",
    items: [
      "Our Story & Engineering Manifesto",
      "Our Leadership & Specialist Guilds",
      "Our Core Values (Rigorous, Pragmatic, High-Velocity)",
      "Global Careers & Studio Culture",
      "Direct Executive Contact"
    ],
    targetSection: "#about-section"
  },
  "Insights": {
    badge: "Research & Technical Publications",
    color: "#7c3aed",
    summary: "In-depth editorial articles analyzing agentic AI, design system tokens, distributed architectures, and product velocity.",
    items: [
      "AI: Multi-Agent Systems in Production",
      "Design: Building Durable Enterprise Design Tokens",
      "Product: Navigating 0-to-1 Under Uncertainty",
      "Tech: Edge Inference & Low-Latency API Frameworks"
    ],
    targetSection: "#insights-section"
  },
  "Careers": {
    badge: "Careers at ENTWY",
    color: "#d97706",
    summary: "Join high-agency builders working on the most exciting challenges in AI, distributed systems, and product design.",
    items: [
      "Life at ENTWY & Remote Culture",
      "Open Positions (Staff Engineers, Product Leads)",
      "University & Fellowship Internships",
      "Transparent Hiring & Evaluation Process"
    ],
    targetSection: "#careers-section"
  },
  "Start a Project": {
    badge: "Start a Project with ENTWY",
    color: "#059669",
    summary: "Ready to discuss your product roadmap? Schedule a scoping consultation or request a formal project proposal.",
    items: [
      "New Project Enquiry",
      "Book a 30-min Technical Scoping Call",
      "Strategic Enterprise Partnerships",
      "General Studio Inquiries"
    ],
    action: "openModal"
  }
};

function initSitemapExplorer() {
  const branchBtns = document.querySelectorAll('.branch-node-btn');
  const leafItems = document.querySelectorAll('.tree-leaf-item');
  const previewBox = document.getElementById('sitemap-detail-preview');

  branchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const branchName = btn.dataset.branch;
      showSitemapDetail(branchName);
    });
  });

  leafItems.forEach(item => {
    item.addEventListener('click', () => {
      const parentBranch = item.closest('.tree-branch-col').querySelector('.branch-node-btn').dataset.branch;
      const text = item.textContent.trim();
      highlightLeafDetail(parentBranch, text);
    });
  });
}

function showSitemapDetail(branchName) {
  const data = sitemapNodeData[branchName];
  if (!data) return;

  const previewBox = document.getElementById('sitemap-detail-preview');
  if (!previewBox) return;

  previewBox.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <span style="font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:0.05em; color:${data.color}; background-color:#f1f5f9; padding:4px 10px; border-radius:4px;">
        ${data.badge}
      </span>
      ${data.targetSection ? `<a href="${data.targetSection}" class="text-link" style="font-size:13px;">Jump to section &rarr;</a>` : ''}
    </div>
    <p style="font-size:15px; color:var(--color-ink); margin-bottom:12px; line-height:1.4;">${data.summary}</p>
    <div style="display:flex; flex-wrap:wrap; gap:6px;">
      ${data.items.map(item => `<span style="font-size:12px; background:#fff; border:1px solid var(--color-hairline); border-radius:4px; padding:4px 8px; color:var(--color-body);">${item}</span>`).join('')}
    </div>
  `;
  previewBox.style.display = 'block';

  if (data.action === 'openModal') {
    openProjectModal();
  }
}

function highlightLeafDetail(branchName, itemName) {
  showSitemapDetail(branchName);
  const previewBox = document.getElementById('sitemap-detail-preview');
  if (previewBox) {
    const alert = document.createElement('div');
    alert.style.marginTop = '12px';
    alert.style.padding = '8px 12px';
    alert.style.backgroundColor = 'var(--color-surface-soft)';
    alert.style.borderRadius = '4px';
    alert.style.fontSize = '13px';
    alert.style.fontWeight = '500';
    alert.innerHTML = `Focused capability: <strong>${itemName}</strong>`;
    previewBox.appendChild(alert);
  }
}

// 3. Tabbed Feature Showcase
function initFeatureTabs() {
  const tabBtns = document.querySelectorAll('.tab-nav-btn');
  const panels = document.querySelectorAll('.tab-content-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.target;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

// 4. Work Filters
function initWorkFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.work-grid .article-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.dataset.filter;
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category.includes(filter)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 5. Process Stepper
function initProcessStepper() {
  const stepCards = document.querySelectorAll('.process-step-card');
  const detailBox = document.getElementById('process-detail-container');

  const processDetails = {
    "1": {
      title: "Our Approach: Product Rigor & First Principles",
      desc: "We operate as an embedded strike team. Rather than writing specs into a vacuum, our engineering leads and product strategists unpack your customer fundamentals and technical feasibility on Day 1.",
      deliverables: ["Product Architecture Blueprint", "Technical Feasibility Audit", "Sprint Delivery Matrix"]
    },
    "2": {
      title: "Discovery & Strategy (Weeks 1 - 2)",
      desc: "Rapid alignment on KPIs, threat models, customer workflows, and AI integration boundaries. We formulate the minimal viable architecture that guarantees unfair competitive advantage.",
      deliverables: ["Interactive User Journey Map", "Data & LLM Pipeline Architecture", "Clickable Low-Fi Wireflows"]
    },
    "3": {
      title: "Design & Build (Weeks 3 - 6)",
      desc: "High-velocity parallel execution. Design systems are constructed directly in code with production tokens; backend microservices and AI agent orchestrators are deployed to staging continuously.",
      deliverables: ["Complete Component Token Library", "Functional Staging Environment", "CI/CD Pipeline with Automated Tests"]
    },
    "4": {
      title: "Test, Benchmark & Refine (Weeks 7 - 8)",
      desc: "Stress testing for real-world load, LLM latency budgets, security compliance, and user comprehension. We optimize cold-start delays and fine-tune response telemetry.",
      deliverables: ["Penetration & Security Sign-off", "Load Testing Benchmarks (<120ms p99)", "Comprehensive Telemetry Dashboard"]
    },
    "5": {
      title: "Launch & Scale (Continuous Evolution)",
      desc: "Zero-downtime production deployment, gradual traffic cutover, executive monitoring dashboards, and seamless knowledge transfer to your in-house engineering team.",
      deliverables: ["Production Blue-Green Deployment", "In-depth Technical Documentation", "SLA & Ongoing Strategic Support"]
    }
  };

  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      stepCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const stepNum = card.dataset.step;
      const data = processDetails[stepNum];
      if (data && detailBox) {
        detailBox.innerHTML = `
          <div style="background-color:var(--color-surface-soft); border:1px solid var(--color-hairline); border-radius:var(--radius-md); padding:24px; margin-top:16px;">
            <div class="eyebrow" style="color:var(--color-primary);">Stage ${stepNum} In Detail</div>
            <h3 class="title-md" style="margin-bottom:8px;">${data.title}</h3>
            <p class="body-md" style="margin-bottom:16px;">${data.desc}</p>
            <div style="font-size:12px; font-weight:600; text-transform:uppercase; color:var(--color-muted); margin-bottom:8px;">Key Stage Deliverables:</div>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              ${data.deliverables.map(d => `<span style="font-size:13px; background:var(--color-canvas); border:1px solid var(--color-hairline); border-radius:4px; padding:6px 12px; font-weight:500;">✓ ${d}</span>`).join('')}
            </div>
          </div>
        `;
      }
    });
  });
}

// 6. Topic Filter Rail for Insights
function initTopicFilterRail() {
  const topicBtns = document.querySelectorAll('.topic-item-btn');
  const insightCards = document.querySelectorAll('.insights-articles-grid .article-card');

  topicBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      topicBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const topic = btn.dataset.topic;
      insightCards.forEach(card => {
        if (topic === 'all' || card.dataset.topic === topic) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 7. Start a Project Modal & Estimator
function initProjectModal() {
  const openButtons = document.querySelectorAll('[data-action="open-project-modal"]');
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('project-modal-close');
  const radioPills = document.querySelectorAll('.radio-pill');
  const form = document.getElementById('project-inquiry-form');
  const confirmation = document.getElementById('project-confirmation-message');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectModal();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeProjectModal();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProjectModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeCaseStudyModal();
    }
  });

  radioPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const group = pill.closest('.radio-pills-row');
      group.querySelectorAll('.radio-pill').forEach(p => p.classList.remove('selected'));
      pill.classList.add('selected');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      if (confirmation) {
        confirmation.style.display = 'block';
      }
    });
  }
}

function openProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// 8. Case Study Detail Modal
const caseStudyData = {
  "1": {
    tag: "Autonomous Logistics & Multi-Agent Systems",
    title: "HyperScale: Autonomous Agent Operations for Enterprise Logistics",
    client: "Global Fleet & Supply Logistics Corp",
    timeline: "8 Weeks to MVP Launch",
    impact: "42% Reduction in Dispatch Latency · $14M Annualized Savings",
    overview: "HyperScale is a real-time dispatch and supply-chain autonomous agent network. ENTWY architected a fault-tolerant multi-agent system powered by customized reasoning models that autonomously reconciles driver manifests, dynamic customs tariffs, and live telemetry across 18,000 intermodal shipping corridors.",
    stack: ["FastAPI", "Python", "LangGraph", "Kafka", "React 19", "PostgreSQL", "AWS ECS"]
  },
  "2": {
    tag: "Fintech & Algorithmic Treasury",
    title: "AuraPay: Real-time Predictive Treasury & Banking Engine",
    client: "Tier-1 Cross-Border Payments Provider",
    timeline: "12 Weeks to Enterprise Rollout",
    impact: "Processed $3.8B in Monthly Volume · 99.999% Fault Tolerance",
    overview: "AuraPay required a replacement for its aging mainframe batch clearing infrastructure. ENTWY designed and delivered a micro-second liquidity management platform with predictive FX route optimization, automated multi-currency hedging, and real-time ledger settlement.",
    stack: ["Go (Golang)", "Rust", "Apache Pulsar", "TimescaleDB", "Next.js", "Docker"]
  },
  "3": {
    tag: "Healthcare & Patient Intelligence",
    title: "VerveCare: Unified Digital Health Ecosystem for 1.4M Patients",
    client: "National Integrated Healthcare Network",
    timeline: "10 Weeks to Production Clinical Trial",
    impact: "1.4M Active Patients · 87% Reduction in Patient Intake Wait Times",
    overview: "VerveCare transforms fragmented clinical records into an intuitive, HIPAA-compliant patient portal and provider clinical workspace. Features include automated voice-to-structured clinical charting, intelligent prescription adherence workflows, and tele-triage routing.",
    stack: ["TypeScript", "Node.js", "FHIR APIs", "Tailored ML Models", "GraphQL", "Tailored Design Tokens"]
  }
};

function initCaseStudyModal() {
  const cards = document.querySelectorAll('.work-grid .article-card');
  const modal = document.getElementById('case-modal');
  const closeBtn = document.getElementById('case-modal-close');
  const modalBody = document.getElementById('case-modal-body');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.caseId;
      const data = caseStudyData[id];
      if (data && modal && modalBody) {
        modalBody.innerHTML = `
          <div class="article-card-tag" style="margin-bottom:8px;">${data.tag}</div>
          <h2 class="display-md" style="font-size:28px; margin-bottom:12px;">${data.title}</h2>
          <div style="display:flex; flex-wrap:wrap; gap:16px; margin-bottom:20px; font-size:13px; color:var(--color-muted); border-bottom:1px solid var(--color-hairline); padding-bottom:16px;">
            <div><strong>Client:</strong> ${data.client}</div>
            <div><strong>Duration:</strong> ${data.timeline}</div>
          </div>
          <div style="background-color:var(--color-surface-soft); border-left:3px solid var(--color-primary); padding:12px 16px; margin-bottom:20px; border-radius:4px;">
            <div style="font-size:12px; font-weight:700; text-transform:uppercase; color:var(--color-ink); margin-bottom:4px;">Verified Commercial Impact</div>
            <div style="font-size:15px; font-weight:600; color:var(--color-primary);">${data.impact}</div>
          </div>
          <h4 class="title-sm" style="margin-bottom:8px;">System Architecture & Overview</h4>
          <p class="body-md" style="margin-bottom:20px; line-height:1.6;">${data.overview}</p>
          <h4 class="title-sm" style="margin-bottom:8px;">Core Engineering Stack</h4>
          <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:24px;">
            ${data.stack.map(s => `<span style="font-size:12px; background:var(--color-surface-strong); padding:4px 10px; border-radius:4px; font-weight:500;">${s}</span>`).join('')}
          </div>
          <div style="display:flex; gap:12px;">
            <button class="btn-primary" data-action="open-project-modal" onclick="closeCaseStudyModal(); openProjectModal();">Request Technical Deep Dive</button>
            <button class="btn-secondary" onclick="closeCaseStudyModal();">Back to Case Studies</button>
          </div>
        `;
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCaseStudyModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCaseStudyModal();
    });
  }
}

function closeCaseStudyModal() {
  const modal = document.getElementById('case-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
