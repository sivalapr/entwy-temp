import { serviceFaqsExtra } from './serviceFaqsExtra';

export interface FaqItem {
  q: string;
  a: string;
}

/** Shown for any service that has no bespoke FAQ set. */
export const defaultServiceFaqs = (title: string): FaqItem[] => [
  {
    q: `How does an ${title} engagement start?`,
    a: 'We begin with a scoping session to understand your goals, constraints, and existing systems. You then receive a written plan with milestones, deliverables, and a clear price before any build work starts.',
  },
  {
    q: 'Who will work on my project?',
    a: 'Senior engineers, architects, and designers do the work directly. You collaborate with the people building your product rather than with an account layer.',
  },
  {
    q: 'How is the work priced?',
    a: 'Either as a fixed-scope milestone contract or as a predictable weekly sprint retainer, depending on how well-defined the scope is. There are no opaque time-and-materials surprises.',
  },
  {
    q: 'What support do we get after delivery?',
    a: 'Every delivery includes a production warranty period, documentation, and a knowledge-transfer session for your team. Ongoing maintenance retainers are available if you want them.',
  },
];

export const serviceFaqs: Record<string, FaqItem[]> = {
  // =================== STRATEGY ===================
  'product-strategy': [
    {
      q: 'What does a Product Strategy engagement produce?',
      a: 'You receive a product strategy blueprint, a phased milestone roadmap, a unit-economics and infrastructure cost model, and a KPI and telemetry specification. Together they tell your team what to build first, why, and how to measure it.',
    },
    {
      q: 'Can you work with a product that is already live?',
      a: 'Yes. For live products we start from your usage data and customer workflows, identify where scope is bloated or under-served, and re-prioritize the roadmap around the highest-leverage work.',
    },
    {
      q: 'How do you decide which features to cut?',
      a: 'We score candidates with a RICE-style framework against retention, revenue, and engineering cost, then sequence the work so each release proves or disproves a specific assumption.',
    },
    {
      q: 'How long does the strategy phase take?',
      a: 'Timelines depend on how much validation already exists. The scoping session sets a firm schedule, and you get executive milestone reviews along the way so direction can change early rather than late.',
    },
  ],
  'digital-transformation': [
    {
      q: 'Can you modernize our systems without disrupting the business?',
      a: 'Yes. We use Strangler Fig migrations: new API-driven services gradually take over traffic from legacy systems, with rollback safety nets at each phase, until the old platform can be retired safely.',
    },
    {
      q: 'Do we have to move everything to the cloud?',
      a: 'No. The audit identifies which workloads benefit from migration and which should stay put or be wrapped behind an API layer. The goal is lower operating cost and higher velocity, not migration for its own sake.',
    },
    {
      q: 'How do you handle security and compliance during a migration?',
      a: 'We run a compliance posture audit up front against the standards you need, such as SOC 2, ISO, or HIPAA, and design the target architecture so those controls are built in rather than bolted on.',
    },
    {
      q: 'How do you get internal teams to adopt the new workflows?',
      a: 'Embedded engineering leadership works alongside your business units through rollout, so adoption problems surface and get fixed during the phased release instead of after it.',
    },
  ],
  'ai-strategy': [
    {
      q: 'Do we actually need AI for this problem?',
      a: 'Not always, and we will say so. The audit compares AI approaches against deterministic code for each use case and recommends AI only where it creates a defensible advantage.',
    },
    {
      q: 'How do you evaluate build versus buy for models?',
      a: 'We model token economics and latency budgets across hosted APIs, open-source models, and fine-tuning, so you can compare total cost and quality for your workload rather than relying on benchmarks alone.',
    },
    {
      q: 'How do you manage hallucination, privacy, and compliance risk?',
      a: 'The strategy includes guardrail frameworks: evaluation suites, retrieval grounding, PII redaction, and clear human-review points, defined before anything reaches production.',
    },
    {
      q: 'What do we have at the end of the engagement?',
      a: 'A prioritized AI opportunity map, a data-moat assessment, a model and cost recommendation, and a reference architecture your team or ours can build from.',
    },
  ],
  'product-consulting': [
    {
      q: 'When is product consulting a better fit than a full build?',
      a: 'When you have an internal team but need senior judgment on architecture, prioritization, or delivery process. We advise and unblock without taking over the work.',
    },
    {
      q: 'Can your consultants join our existing team?',
      a: 'Yes. We can embed with your team on a sprint retainer, joining your rituals and tools, and then step back as your team gains momentum.',
    },
    {
      q: 'Do you review code and architecture?',
      a: 'Yes. Architecture and code reviews are a common starting point, and they produce a ranked list of risks and fixes you can act on immediately.',
    },
    {
      q: 'How do we engage for a short, specific question?',
      a: 'Book a scoping session. Short advisory engagements with a fixed scope and fixed price are available for focused questions.',
    },
  ],

  // =================== DESIGN ===================
  'ux-research': [
    {
      q: 'What research methods do you use?',
      a: 'We combine user interviews, workflow observation, usability testing, and analytics review, choosing the mix that best answers your specific product questions.',
    },
    {
      q: 'Do you recruit the participants?',
      a: 'We can recruit participants or work with users you provide. The research plan agreed at kickoff spells out who we need to hear from and how they will be reached.',
    },
    {
      q: 'How do research findings turn into design decisions?',
      a: 'Findings are delivered as prioritized, evidence-backed recommendations tied to specific screens and flows, so designers and engineers can act on them directly.',
    },
    {
      q: 'Can research run alongside development?',
      a: 'Yes. Lightweight research cycles fit inside sprints, validating prototypes before they are built so rework is caught early.',
    },
  ],
  'ui-ux-design': [
    {
      q: 'Will the designs be ready for engineers to build?',
      a: 'Yes. Designs are delivered as organized, componentized files with specified states, spacing, and interactions, and our engineers can build from them directly or hand them to your team.',
    },
    {
      q: 'Do you work within our existing brand?',
      a: 'Yes. We extend your brand guidelines into a coherent interface, or help define a visual language if you do not have one yet.',
    },
    {
      q: 'How many revision rounds are included?',
      a: 'Feedback is built into the process through regular design reviews, so direction is agreed early. The exact review cadence is set in your scope.',
    },
    {
      q: 'Do you design for accessibility?',
      a: 'Accessibility is part of the design process: color contrast, focus states, keyboard navigation, and readable type are checked as screens are designed, not after launch.',
    },
  ],
  'product-design': [
    {
      q: 'What is the difference between product design and UI/UX design?',
      a: 'Product design covers the end-to-end experience, including the problem definition, flows, and business outcomes, while UI/UX design focuses on the interface itself. Many engagements include both.',
    },
    {
      q: 'Can you design a product from zero?',
      a: 'Yes. We take products from concept through flows, prototypes, and polished interface designs, aligned with the engineering effort needed to build them.',
    },
    {
      q: 'How do designers and engineers work together on your team?',
      a: 'They work in the same sprint cycle. Engineers review designs for feasibility early, which keeps the design realistic and shortens the path to production.',
    },
    {
      q: 'How do you measure whether a design is working?',
      a: 'We define success metrics before design starts and instrument the product so you can see whether the design improves activation, task completion, and retention.',
    },
  ],
  'design-systems': [
    {
      q: 'What does a design system include?',
      a: 'Typically design tokens, a documented component library in both design files and code, usage guidelines, and accessibility standards, so teams can build consistently and faster.',
    },
    {
      q: 'Can you build the system in our existing codebase?',
      a: 'Yes. We build components in the framework you already use and integrate them incrementally, so existing screens can migrate over time without a rewrite.',
    },
    {
      q: 'How do you keep design and code in sync?',
      a: 'Tokens are the single source of truth for color, type, and spacing, and are consumed by both the design files and the code, so a change is made once.',
    },
    {
      q: 'Is a design system worth it for a small team?',
      a: 'It can be, when you are shipping several screens or products and want consistency without constant rework. We will scope a lean system sized to your team rather than an oversized one.',
    },
  ],
  'prototyping': [
    {
      q: 'What kind of prototypes do you build?',
      a: 'From clickable design prototypes for testing flows to coded, interactive prototypes that connect to real or mock data, depending on what you need to learn.',
    },
    {
      q: 'How fast can we get a prototype in front of users?',
      a: 'Prototypes are designed to be fast. We agree on the key questions at kickoff and build only what is needed to answer them, with progress shown in staging during the engagement.',
    },
    {
      q: 'Can a prototype become the real product?',
      a: 'Sometimes. We tell you up front whether the prototype is disposable or built to production standards so you do not carry hidden technical debt forward.',
    },
    {
      q: 'Can you prototype AI features?',
      a: 'Yes. Working AI prototypes let you test response quality, latency, and cost with real inputs before committing to a full build.',
    },
  ],

  // =================== AI ===================
  'ai-solutions': [
    {
      q: 'What kinds of AI solutions do you build?',
      a: 'Custom assistants, retrieval systems over your own data, document and workflow automation, and decision-support tools, each built around a specific measurable outcome.',
    },
    {
      q: 'Is our data used to train public models?',
      a: 'We design solutions around your data-handling requirements, including providers and deployment options that do not train on your data. The architecture is documented so your security team can review it.',
    },
    {
      q: 'How do you make sure the AI is accurate enough to rely on?',
      a: 'We build evaluation sets from real examples, measure quality before and after each change, and add grounding and human-review steps where mistakes would be costly.',
    },
    {
      q: 'Can the solution integrate with the tools we already use?',
      a: 'Yes. Integration with your CRM, databases, ticketing, and internal systems is part of the design, so the AI works inside your existing workflows.',
    },
  ],
  'ai-agents': [
    {
      q: 'What is an AI agent, and how is it different from a chatbot?',
      a: 'A chatbot answers questions. An agent can plan, call tools, and take actions across your systems to complete multi-step tasks, within the permissions and guardrails you define.',
    },
    {
      q: 'How do you keep agents from doing the wrong thing?',
      a: 'Agents run with scoped permissions, approval steps for sensitive actions, full action logging, and evaluation tests that check behavior before every release.',
    },
    {
      q: 'Can we see what an agent did and why?',
      a: 'Yes. We build tracing and audit logs so every decision, tool call, and result can be reviewed and debugged.',
    },
    {
      q: 'Which tasks are a good fit for agents?',
      a: 'Repetitive, multi-step work with clear success criteria, such as research, triage, data entry across systems, and report preparation. We help you choose the first workflow where the payoff is clearest.',
    },
  ],
  'ai-automation': [
    {
      q: 'Which processes are best to automate with AI?',
      a: 'High-volume, rule-heavy, or document-heavy processes where people spend time copying, classifying, or summarizing information. We map your workflows and rank them by impact and feasibility.',
    },
    {
      q: 'Will automation replace our team?',
      a: 'The goal is to remove repetitive work so your team can focus on judgment-heavy tasks. We design human-in-the-loop checkpoints where review matters.',
    },
    {
      q: 'What happens when the automation fails or is unsure?',
      a: 'Low-confidence or failed cases are routed to a person with the context needed to resolve them, and failures are logged and monitored so they can be fixed.',
    },
    {
      q: 'How do you measure the return?',
      a: 'We baseline the current process time, error rate, and cost before building, then track the same measures after launch so the return is visible.',
    },
  ],
  'ai-integration': [
    {
      q: 'Can you add AI to our existing product?',
      a: 'Yes. We add AI features such as search, summarization, copilots, and classification into your existing product without a rewrite, behind clean service boundaries.',
    },
    {
      q: 'Which models and providers do you work with?',
      a: 'We are provider-flexible and recommend based on quality, cost, latency, and your data requirements. The integration layer is designed so models can be swapped as the market changes.',
    },
    {
      q: 'How do you control cost and latency?',
      a: 'Through caching, model routing, prompt design, and usage limits, along with monitoring so you can see cost per feature and per user.',
    },
    {
      q: 'What if the AI provider has an outage?',
      a: 'We build retries, timeouts, and fallback paths so your product degrades gracefully instead of failing outright.',
    },
  ],
  'generative-ai-custom-development': [
    {
      q: 'When do we need custom generative AI instead of an off-the-shelf tool?',
      a: 'When you need the model to use your proprietary data, follow your brand and policies, or be embedded in your product and workflows. Off-the-shelf tools rarely offer that level of control.',
    },
    {
      q: 'Do you fine-tune models or use retrieval?',
      a: 'It depends on the problem. Retrieval over your data is often the faster and more maintainable choice, and fine-tuning is used where style, format, or specialized behavior requires it. We test both against your data.',
    },
    {
      q: 'How do you evaluate output quality?',
      a: 'We build task-specific evaluation sets and automated checks, supplemented by human review, and track quality across model and prompt changes.',
    },
    {
      q: 'Who owns the resulting system and data?',
      a: 'You do. Code, prompts, evaluation sets, and trained artifacts are delivered to you along with documentation, as set out in your contract.',
    },
  ],

  // =================== TECHNOLOGY ===================
  'web-development': [
    {
      q: 'What technologies do you build websites and web apps with?',
      a: 'Modern stacks such as React and TypeScript on the front end with Node-based or similar back ends, chosen to fit your product, team, and hosting requirements.',
    },
    {
      q: 'Will my site be fast and discoverable in search?',
      a: 'Performance and SEO are built in: optimized assets, server-side or static rendering where appropriate, structured data, and Core Web Vitals checks before launch.',
    },
    {
      q: 'Can you work with our CMS or back-end systems?',
      a: 'Yes. We integrate with headless CMS platforms, e-commerce systems, and internal APIs so content and data stay manageable by your team.',
    },
    {
      q: 'Who hosts and maintains the site after launch?',
      a: 'Hosting can be on your own cloud account or managed by us. Every project includes a warranty period, and maintenance retainers are available.',
    },
  ],
  'mobile-app-development': [
    {
      q: 'Do you build native or cross-platform apps?',
      a: 'Both. We recommend native or cross-platform based on your performance needs, device features, budget, and timeline, and explain the trade-offs.',
    },
    {
      q: 'Do you handle App Store and Google Play submission?',
      a: 'Yes. We prepare builds, listings, and review requirements, and support you through the submission process on both stores.',
    },
    {
      q: 'Can the app work offline?',
      a: 'Yes. Where your use case needs it, we design offline-first data storage and synchronization with conflict handling.',
    },
    {
      q: 'Can you connect the app to our existing back end?',
      a: 'Yes. We integrate with your existing APIs, or build the back-end services the app needs.',
    },
  ],
  'saas-development': [
    {
      q: 'What does building a SaaS platform involve beyond the core features?',
      a: 'Multi-tenancy, authentication and roles, billing and subscriptions, admin tooling, analytics, and the infrastructure to run it reliably. We design these foundations from the start.',
    },
    {
      q: 'Can you integrate subscription billing?',
      a: 'Yes. We implement subscription plans, metering, invoicing, and payment flows using providers such as Stripe, including handling upgrades, downgrades, and failed payments.',
    },
    {
      q: 'Will the platform scale as we grow?',
      a: 'We design for your realistic growth path with a clean architecture, observability, and room to scale, without over-engineering for traffic you do not have yet.',
    },
    {
      q: 'Can you take over or extend an existing SaaS codebase?',
      a: 'Yes. We start with a code and architecture review, then stabilize and extend the platform in phases.',
    },
  ],
  'api-system-integration': [
    {
      q: 'What systems can you integrate?',
      a: 'CRMs, ERPs, payment processors, data warehouses, internal tools, and third-party platforms with documented APIs or webhooks. We also wrap legacy systems behind modern interfaces.',
    },
    {
      q: 'How do you keep integrations reliable?',
      a: 'With retries, idempotency, rate-limit handling, queues, and monitoring with alerts, so failures are visible and recoverable instead of silent.',
    },
    {
      q: 'What if a system has no API?',
      a: 'We look at alternatives such as database-level access, file exchange, or an adapter layer, and tell you the trade-offs of each option.',
    },
    {
      q: 'Do you provide documentation for the integrations?',
      a: 'Yes. Each integration is delivered with architecture notes, data mappings, and a runbook for your team.',
    },
  ],
  'mvp-development': [
    {
      q: 'How quickly can you get an MVP in front of users?',
      a: 'MVPs are scoped tightly around the one core problem to be validated. You will have a live staging environment with preview deployments early in the engagement, and a firm launch timeline is set during scoping.',
    },
    {
      q: 'What goes into an MVP, and what stays out?',
      a: 'We define the smallest set of features that can prove or disprove your key assumption, and explicitly park everything else on a post-launch roadmap.',
    },
    {
      q: 'Will the MVP be a throwaway or a foundation?',
      a: 'We build it on a clean, production-grade foundation so you can keep building on it after you validate, rather than rewriting from scratch.',
    },
    {
      q: 'What happens after the MVP launches?',
      a: 'You get a production warranty period, analytics to track the validation metrics, and the option to continue with us on a sprint retainer or hand the codebase to your own team.',
    },
  ],

  // =================== MARKETING / SOLUTIONS ===================
  'devops': [
    {
      q: 'What does DevOps and cloud engineering cover?',
      a: 'Cloud infrastructure as code, CI/CD pipelines, containerization, observability, security hardening, and cost optimization, so you can release safely and often.',
    },
    {
      q: 'Which cloud providers do you work with?',
      a: 'Major providers such as AWS and Google Cloud, plus edge and platform services where they fit. We recommend based on your workload, team, and cost goals.',
    },
    {
      q: 'Can you reduce our cloud costs?',
      a: 'Often, yes. We audit usage, right-size resources, and add cost visibility so you can see what each service and environment costs.',
    },
    {
      q: 'How do you handle monitoring and incidents?',
      a: 'We set up logging, metrics, tracing, and alerting with clear ownership and runbooks, so problems are detected early and resolved faster.',
    },
  ],
  'revops': [
    {
      q: 'What is RevOps and workflow automation?',
      a: 'It aligns sales, marketing, and customer success on shared data and automated workflows, so leads route correctly, handoffs are tracked, and reporting can be trusted.',
    },
    {
      q: 'Which tools do you work with?',
      a: 'CRMs such as HubSpot and Salesforce, billing systems, marketing platforms, and data warehouses. We connect them rather than forcing a tool replacement.',
    },
    {
      q: 'Can you clean up our CRM data?',
      a: 'Yes. We audit data quality, define clear field and lifecycle standards, and automate deduplication and enrichment so the data stays clean.',
    },
    {
      q: 'How do you measure success?',
      a: 'By metrics such as lead response time, pipeline conversion, forecast accuracy, and hours of manual work removed, baselined before we start.',
    },
  ],
  'sales-leaders': [
    {
      q: 'How can your solutions help sales leaders?',
      a: 'We build forecasting dashboards, pipeline-health alerts, and automated reporting so you see risk early and spend less time assembling spreadsheets.',
    },
    {
      q: 'Will this work with the CRM we already have?',
      a: 'Yes. We build on top of your existing CRM and data sources instead of replacing them.',
    },
    {
      q: 'Can AI help with forecasting and deal insights?',
      a: 'Yes, when your data supports it. We combine your pipeline data with AI-assisted analysis such as deal summaries and risk flags, and show you how each insight was derived.',
    },
    {
      q: 'How long until my team sees value?',
      a: 'We prioritize a first workflow with clear impact, usually reporting or pipeline visibility, so your team sees value early while later phases build on it.',
    },
  ],
  'sales-reps': [
    {
      q: 'How do your solutions save sales reps time?',
      a: 'By automating CRM data entry, meeting notes, follow-ups, and prospect research so reps spend more of their day selling.',
    },
    {
      q: 'Does it fit into the tools reps already use?',
      a: 'Yes. We integrate with your CRM, email, calendar, and call tools so reps do not have to learn another platform.',
    },
    {
      q: 'Can it draft outreach and follow-up messages?',
      a: 'Yes. AI can draft messages from account context, with reps reviewing and approving before anything is sent.',
    },
    {
      q: 'How do you protect customer data?',
      a: 'Access follows your existing permissions, data handling is documented, and provider choices are made to meet your security requirements.',
    },
  ],
  'marketers': [
    {
      q: 'How can your solutions help marketing teams?',
      a: 'We automate reporting, content operations, lead routing, and campaign workflows, and connect your marketing tools to your CRM for reliable attribution.',
    },
    {
      q: 'Can AI help produce content at scale?',
      a: 'Yes. We build content workflows that use your brand guidelines and source material, with human review before publishing, to keep quality and voice consistent.',
    },
    {
      q: 'Can you connect our analytics and ad platforms?',
      a: 'Yes. We unify data from your ad platforms, analytics, and CRM into a single reporting layer.',
    },
    {
      q: 'Do we need developers on our side to use it?',
      a: 'No. We deliver solutions your marketing team can operate day to day, with documentation and training.',
    },
  ],
  'developers': [
    {
      q: 'What do your solutions offer developer teams?',
      a: 'Internal tooling, CI/CD and platform engineering, API and SDK development, and AI-assisted developer workflows that reduce toil and speed up delivery.',
    },
    {
      q: 'Can your engineers augment our team?',
      a: 'Yes. Senior engineers can embed with your team on a sprint retainer and work in your repositories, tools, and review process.',
    },
    {
      q: 'Do you build developer-facing APIs and SDKs?',
      a: 'Yes. We design and document APIs, generate client libraries, and set up developer portals and sandboxes.',
    },
    {
      q: 'Will we be able to maintain what you build?',
      a: 'Yes. We follow your conventions, write tests and documentation, and run a knowledge-transfer session at handover.',
    },
  ],

  // =================== IMPLEMENTATION ===================
  'whatsapp-marketing': [
    {
      q: 'Do you use the official WhatsApp Business Platform?',
      a: 'Yes. We build on the official WhatsApp Cloud API through Meta, which keeps messaging compliant and your sender account in good standing.',
    },
    {
      q: 'Do customers have to opt in?',
      a: 'Yes. WhatsApp requires customer opt-in for business messaging. We build consent capture and opt-out handling into the flows.',
    },
    {
      q: 'What can the automation do?',
      a: 'Order and shipping updates, abandoned-cart reminders, appointment reminders, lead qualification, and support conversations, with handoff to a human agent when needed.',
    },
    {
      q: 'Can it connect to our CRM and store?',
      a: 'Yes. We integrate with platforms such as HubSpot and Shopify so messages are triggered by real customer events and conversations are logged back to the customer record.',
    },
  ],
};

export const getServiceFaqs = (slug: string, title: string): FaqItem[] =>
  serviceFaqs[slug]
    ? [...serviceFaqs[slug], ...(serviceFaqsExtra[slug] ?? [])]
    : defaultServiceFaqs(title);
