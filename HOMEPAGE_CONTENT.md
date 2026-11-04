# ENTWY Homepage Content

> **Note**: This document contains all the copy, structure, features, and UI content from the ENTWY homepage (`src/pages/HomePage.tsx`), excluding the "How we build your product" delivery timeline section as requested.

---

## 1. Global Navigation Bar (Header)

- **Brand**: ENTWY
- **Navigation Menu & Categories**:
  - **Services**:
    - **Strategy**: Product Strategy, Digital Transformation, AI Strategy, Product Consulting
    - **Design**: UX Research, UI/UX Design, Product Design, Design Systems, Prototyping
    - **AI**: AI Solutions, AI Agents, AI Automation, AI Integration, Generative AI / Custom AI Development
    - **Technology**: Web Development, Mobile App Development, SaaS Development, API & System Integration, MVP Development
    - **Marketing**: RevOps, Sales Leaders, Sales Reps, Marketers, Developers
    - **Implementation**: WhatsApp Marketing, API Integration, MCP (Model Context Protocol)
  - **Solutions**:
    - Build a New Product (`/solutions/build-a-new-product`)
    - Build an AI Product (`/solutions/build-an-ai-product`)
    - Add AI to your Product (`/solutions/add-ai-to-your-product`)
    - Modernise Your Platform (`/solutions/modernise-your-platform`)
    - Automate Business Workflows (`/solutions/automate-business-workflows`)
  - **Work**:
    - Case Study 01 — FinTech Recon Engine (`/work/case-study-01`)
    - Case Study 02 — Healthcare Clinical Ops (`/work/case-study-02`)
    - Case Study 03 — Logistics Event Bus (`/work/case-study-03`)
  - **Process**:
    - 01. Our Approach (`/process/our-approach`)
    - 02. Discovery & Strategy (`/process/discovery-strategy`)
    - 03. Design & Build (`/process/design-build`)
    - 04. Test & Refine (`/process/test-refine`)
    - 05. Launch & Scale (`/process/launch-scale`)
  - **Industries**:
    - Digital Enterprises & Platforms
    - Education & Learning
    - Consumer Products & Retail
    - Lifestyle, Wellness & Care
    - Healthcare & Pharmaceutical
    - Banking & Investment
    - Energy & Industrial Supply
    - Supply Chain & Logistics
  - **About**:
    - Our Story, Our Team, Our Values, Careers & Open Roles, Contact Us
  - **Insights**:
    - AI & Autonomous Agents, Design Systems, Product Strategy, Cloud Technology
- **Primary Header Action**:
  - `[Start a project →]` (links to `/start-a-project`)

---

## 2. Hero Section (`HeroRevamped`)

- **Main Heading (H1)**:  
  **Software that moves your business forward.**
- **Supporting Description**:  
  We design and build digital products, AI workflows and business systems — from the first idea to everyday operation.
- **Call-to-Action Buttons**:
  - Primary CTA: `Start a project →` (links to `/start-a-project`)
  - Secondary CTA: `View our work →` (links to `/work`)
- **Interactive Visual**:
  - Interactive ENTWY Logo Burst field (`"Move through the field"`)
- **Technologies Strip**:
  - Label: *"Technologies we work with"*
  - Stack Badges:
    - React
    - Next.js
    - Node.js
    - AWS
    - Google Cloud
    - PostgreSQL
    - Python

---

## 3. Services & Capabilities Showcase (`ServicesShowcase`)

- **Section Heading (H2)**:  
  **Everything your digital product needs.**
- **Supporting Description**:  
  Strategy, design, engineering, and AI — delivered as a cohesive team, not fragmented specialists.

### Featured Capabilities (Primary Cards)

1. **Product Design & Engineering**
   - **Description**: From a rough brief to a production-ready application. We handle UX research, interaction design, frontend engineering, and cloud deployment — end to end.
   - **Highlights**:
     - ✓ UX design & design systems
     - ✓ React / Next.js frontends
     - ✓ Production-grade CI/CD
   - **Link**: `Learn more →` (links to `/solutions/build-a-new-product`)

2. **AI Workflows & Intelligent Automation**
   - **Description**: Custom AI systems that handle real business processes: data extraction, document review, support triage, and decision support — not off-the-shelf wrappers.
   - **Highlights**:
     - ✓ Purpose-built LLM pipelines
     - ✓ Document & data extraction
     - ✓ Workflow automation
   - **Link**: `Learn more →` (links to `/solutions/build-an-ai-product`)

### Standard Capabilities (Compact Cards)

3. **Cloud Architecture**
   - **Description**: Resilient, scalable backends designed for sustained growth: microservices, event-driven systems, and managed infrastructure.
   - **Link**: `Learn more →` (links to `/services/technology`)

4. **Business System Integration**
   - **Description**: Bidirectional sync between ERPs, CRMs, and operational tools. Reduce manual re-entry and data inconsistency across your stack.
   - **Link**: `Learn more →` (links to `/solutions/automate-business-workflows`)

5. **Platform Modernization**
   - **Description**: Move from legacy monolith to a cloud-native architecture without service disruption — incremental migration with validated cutover.
   - **Link**: `Learn more →` (links to `/solutions/modernise-your-platform`)

6. **Security & Compliance**
   - **Description**: Data governance, access control, and audit trails for regulated industries. Privacy-first engineering from architecture through deployment.
   - **Link**: `Learn more →` (links to `/services/strategy`)

- **Section Footer CTA**:  
  `[See all capabilities →]` (links to `/services`)

---

## 4. Engineering Standards & Architecture Bento (`BlockFeature`)

- **Section Heading (H2)**:  
  **Engineering excellence across your entire stack.**
- **Supporting Description**:  
  Every digital product and AI workflow we deliver is built with rigorous enterprise standards — clean architectures, automated guardrails, and complete code ownership.

### Bento Modules:

1. **Enterprise Architecture from Day One**
   - **Visual**: Structured 5×3 modular architectural layer grid with centralized core layer and radial focus mask.

2. **Automated Delivery & AI Guardrails**
   - **File / Indicator**: `workflow-pipeline.yml` · `[Deterministic]`
   - **Pipeline Stages**:
     - `01` **Contract & Schema Validation**: Strict TypeScript & OpenAPI contracts bound `[✓]`
     - `02` **AI Guardrail & Eval Gate**: Deterministic schemas & regression tests passed `[Active pulse]`
     - `03` **Zero-Downtime Deployment**: Multi-region rollout with automated rollback
   - **Footer Status**: Continuous Delivery · 100% test coverage · Audit logged

3. **Connect AI Agents to Your Business Tools**
   - **Description**: Autonomous workflows via secure MCP, webhooks & REST.
   - **Visual**: Central AI Agent Bot orchestrating connected systems (PostgreSQL, custom REST APIs & webhooks).

4. **Full Control Over Your Code. Zero Lock-in.**
   - **Visual**: Code editor terminal preview (`workflow-agent.ts` — TypeScript + Node.js runtime):
     ```typescript
     export async function handleLeadWorkflow(lead: Lead) {
       const valid = await validateCompliance(lead);
       const triage = await aiAgent.evaluate(valid);
       return await crm.dispatch({ ...triage, status: "routed" });
     }
     ```

5. **Technology Runtime Conveyor**
   - **Supported Ecosystem**: TypeScript, Python, Next.js, React, OpenAI, PostgreSQL, and Tailwind CSS.

6. **Real-Time Streaming & Sub-120ms Performance**
   - **Header**: Latency SLA: < 120ms · `[Streaming 60fps]`
   - **Visual**: Dynamic smooth latency motion gradient curve
   - **Metric**: Real-Time Streaming · Sub-120ms latency

---

## 5. Intelligent Automation & Enterprise Guardrails (`ExpandableFeaturePanel`)

- **Section Heading (H2)**:  
  **Intelligent automation with enterprise guardrails.**
- **Supporting Description**:  
  We build custom AI agents and automated workflows that execute complex tasks quickly while keeping your team informed, compliant, and in control.

### Interactive Accordion Feature Points:

1. **Role-based permissions & security**
   - *Detail*: Every AI action respects your team's existing access levels, user permissions, and strict organizational data privacy rules.
2. **Full visibility & audit logs**
   - *Detail*: Track every prompt, system decision, and automated action in real time with transparent activity history and complete logs.
3. **Human-in-the-loop approvals**
   - *Detail*: Set critical milestones that require manager review before high-impact actions or database updates are finalized.
4. **Connects directly to your tech stack**
   - *Detail*: Integrate seamlessly with Salesforce, Snowflake, Stripe, PostgreSQL, GitHub, and your custom internal APIs.

- **CTA Button**:  
  `[Explore AI & Automation →]` (links to `/services/ai`)

### Live Governed Execution Window (Visual Preview):
- **Window Title**: Live Workflow Execution
- **Execution Steps**:
  - `01` **Task Triggered & Verified** — Secure request validated via enterprise API `[✓]`
  - `02` **Data Privacy & Policy Check** — Sensitive data masked and compliance verified `[✓]`
  - `03` **AI Workflow Execution** — Task processed with verified reasoning logic `[✓]`
  - `04` **Completed & Logged to System** — Output synced to database with audit record `[✓]`

---

*(Note: The delivery timeline section **"How we build your product / Sprint 01 → Production"** with its 5 milestone stages has been excluded per your request.)*

---

## 6. Editorial Insights (`InsightsEditorial`)

- **Section Heading (H2)**:  
  **Thinking behind the work.**
- **Action Link**:  
  `[All insights →]` (links to `/insights`)

### Featured Articles:

1. **Architecting Autonomous Multi-Agent Systems in Production**
   - **Category Tag**: `Autonomous AI`
   - **Metadata**: Oct 2026 · 6 min read
   - **Summary**: How to design deterministic guardrails and memory stores for LLMs executing external API mutations.
   - **Action**: `Read article →` (links to `/insights/article/autonomous-agents-in-production`)

2. **Beyond Embeddings: Graph-Augmented RAG for Enterprise Context**
   - **Category Tag**: `Enterprise RAG`
   - **Metadata**: Sep 2026 · 8 min read
   - **Summary**: Why vector search alone fails complex corporate hierarchies, and how hybrid graph retrievers solve it.
   - **Action**: `Read article →` (links to `/insights/article/rag-beyond-embeddings`)

3. **Designing Human-in-the-Loop Workflow Interfaces**
   - **Category Tag**: `Design Systems`
   - **Metadata**: Oct 2026 · 5 min read
   - **Summary**: How Zapier-inspired micro-interactions give enterprise operators confidence in automated systems.
   - **Action**: `Read article →` (links to `/insights/article/designing-for-automation`)

---

## 7. Call-to-Action Banner (`CtaBandLight`)

- **Heading (H2)**:  
  **What would you like to make better?**
- **Description**:  
  Bring us a complex workflow, an enterprise product roadmap, or a distributed data challenge. We’ll outline a deterministic, phased implementation plan.
- **Action Button**:  
  `[Start a project →]` (links to `/start-a-project`)

---

## 8. Homepage Footer (`HomeFooter`)

- **Brand**: ENTWY
- **Tagline**:  
  Digital products, AI workflows and business systems. Designed around your needs, built for everyday use.
- **Corporate Entity**:  
  A subsidiary of **Zuntra Digital Pvt Ltd** (https://www.zuntra.com/)
- **Contact Action**:  
  `[Discuss your project →]` (links to `/start-a-project`)
- **Newsletter**:  
  Email subscription for product & engineering updates
- **Footer Links Directory**:
  - **Services**:
    - Strategy & consulting (`/services/strategy`)
    - Design & UX (`/services/design`)
    - AI & automation (`/services/ai`)
    - Cloud engineering (`/services/technology`)
    - API development & integration (`/api-development`)
    - MCP development services (`/mcp-development-services`)
    - Marketing & RevOps (`/services/marketing`)
  - **Solutions**:
    - Build a product (`/solutions/build-a-new-product`)
    - Build an AI product (`/solutions/build-an-ai-product`)
    - Add AI to your product (`/solutions/add-ai-to-your-product`)
    - Modernise a platform (`/solutions/modernise-your-platform`)
    - Automate workflows (`/solutions/automate-business-workflows`)
  - **Delivery**:
    - Our work (`/work`)
    - Our process (`/process`)
    - Industries (`/industries`)
    - Insights (`/insights`)
  - **Company**:
    - About ENTWY (`/about`)
    - Careers (`/careers`)
    - Start a project (`/start-a-project`)
    - Email: `info@zuntra.com`
- **Legal & Meta**:
  - Privacy Policy (`/privacy`)
  - Terms of Service (`/terms`)
  - Copyright: © 2026 ENTWY

