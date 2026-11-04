import type { FaqItem } from './serviceFaqs';

/** Additional questions appended after the core FAQ set for each service. */
export const serviceFaqsExtra: Record<string, FaqItem[]> = {
  'product-strategy': [
    { q: 'Do you validate demand with real customers?', a: 'Yes. We combine customer interviews, usage data, and willingness-to-pay analysis so the roadmap rests on evidence from your market rather than internal opinion.' },
    { q: 'How involved does our leadership team need to be?', a: 'Light but regular. We need access to decision makers for kickoff, milestone reviews, and sign-off, and we handle the analysis and documentation in between.' },
    { q: 'Can the strategy continue straight into design and build?', a: 'Yes. Because strategists, designers, and engineers work together, the blueprint hands off into delivery without a loss of context.' },
  ],
  'digital-transformation': [
    { q: 'Where do you start with a large legacy estate?', a: 'With an audit that maps systems, dependencies, and risks, then a ranked plan that starts with the changes that deliver value fastest at the lowest risk.' },
    { q: 'How do you keep the project from stalling halfway?', a: 'By delivering in short phases that each ship something usable, with milestone reviews that keep priorities aligned with the business.' },
    { q: 'Do you work with our existing vendors and IT team?', a: 'Yes. We collaborate with your internal teams and incumbent vendors, and design the target architecture to reduce dependence on any single vendor.' },
  ],
  'ai-strategy': [
    { q: 'Is this useful if we have not started with AI yet?', a: 'Yes. It is a good starting point because it identifies where AI is worth the investment before you commit budget or data.' },
    { q: 'How do you assess whether our data is ready?', a: 'We review data sources, quality, access, and permissions, and tell you what must be fixed before specific use cases can work reliably.' },
    { q: 'Can you help us choose and govern AI vendors?', a: 'Yes. We compare vendors on quality, cost, security, and lock-in, and define governance policies for how AI is used across the company.' },
  ],
  'product-consulting': [
    { q: 'What does a typical engagement look like?', a: 'A short discovery, a prioritized set of findings and recommendations, and then hands-on support for the highest-impact items, on a cadence that suits your team.' },
    { q: 'Can you help reduce technical debt?', a: 'Yes. We assess where debt slows delivery and sequence remediation alongside feature work so progress does not stop.' },
    { q: 'Do you help with hiring and team structure?', a: 'We can advise on the roles and skills needed and on how to organize delivery, though recruiting itself is outside our scope.' },
  ],
  'ux-research': [
    { q: 'How many users do we need to talk to?', a: 'Often fewer than people expect. For many usability questions, a small, well-chosen group surfaces most major issues, and we size the study to the decision you need to make.' },
    { q: 'What do we receive at the end?', a: 'A research report with key findings, supporting evidence such as quotes and recordings, personas or journey maps where useful, and prioritized recommendations.' },
    { q: 'Can you research an existing product, not just new ideas?', a: 'Yes. Research on a live product often finds quick wins in onboarding, navigation, and conversion.' },
  ],
  'ui-ux-design': [
    { q: 'What is the design process from start to finish?', a: 'Discovery, flows and wireframes, visual design, prototype review, and developer handoff, with checkpoints where you give feedback along the way.' },
    { q: 'Can you redesign just part of our product?', a: 'Yes. We can focus on a single flow, such as onboarding or checkout, and design it to fit the rest of your product.' },
    { q: 'Do you design responsive layouts for mobile and desktop?', a: 'Yes. Every screen is designed for the breakpoints your users actually use, so the interface works on phones, tablets, and desktops.' },
  ],
  'product-design': [
    { q: 'Do you support design work after the first launch?', a: 'Yes. Many clients keep a design partner on retainer to iterate on features using analytics and user feedback.' },
    { q: 'How do you test designs before building them?', a: 'With interactive prototypes tested on real users, so issues are fixed in design where changes are cheap.' },
    { q: 'Can you work alongside our in-house designers?', a: 'Yes. We can complement your team by covering a specific project, adding capacity, or mentoring on process.' },
  ],
  'design-systems': [
    { q: 'How long does it take to see value?', a: 'Value starts early. Core tokens and the most-used components are delivered first, so teams can begin using the system while the rest is built out.' },
    { q: 'Who maintains the system afterward?', a: 'We document contribution and versioning rules and train your team to own it. A support retainer is available if you want help.' },
    { q: 'Can the system support multiple brands or themes?', a: 'Yes. A token-based architecture makes it straightforward to support multiple brands, light and dark themes, and white-label products.' },
  ],
  'prototyping': [
    { q: 'How realistic will the prototype feel?', a: 'As realistic as needed to answer your question. That ranges from simple click-through flows to polished interactions with live data.' },
    { q: 'Can you prototype multiple concepts to compare?', a: 'Yes. Comparing two or three concepts side by side with users is often the fastest way to find the right direction.' },
    { q: 'What do we do with the prototype afterward?', a: 'Use it for user testing, stakeholder alignment, or investor demos, and as a reference spec for the production build.' },
  ],
  'ai-solutions': [
    { q: 'How do we pick the first AI solution to build?', a: 'We look for a use case with clear value, available data, and manageable risk, then deliver a focused first release that proves the approach.' },
    { q: 'Do we need a lot of data to get started?', a: 'Not necessarily. Many solutions work well with retrieval over your existing documents and records. We assess what is needed during scoping.' },
    { q: 'How do you handle ongoing improvement?', a: 'We monitor quality and cost after launch, gather user feedback, and release improvements using the evaluation sets built during development.' },
  ],
  'ai-agents': [
    { q: 'Which tools and systems can an agent use?', a: 'Any system with an API or supported interface, including CRMs, databases, email, ticketing, and internal tools, each exposed with limited, well-defined permissions.' },
    { q: 'Do agents run autonomously or need approval?', a: 'You choose. Low-risk steps can run automatically, while sensitive actions can require human approval.' },
    { q: 'Can multiple agents work together?', a: 'Yes. For complex workflows we design multi-agent systems with clear roles, shared memory, and coordination rules, keeping them as simple as the task allows.' },
  ],
  'ai-automation': [
    { q: 'How long does it take to automate a first workflow?', a: 'A focused first workflow can be scoped and delivered quickly. The scoping session sets a specific timeline based on the systems and volume involved.' },
    { q: 'Do you handle documents like PDFs, invoices, and emails?', a: 'Yes. We build pipelines that extract, classify, and route information from documents and messages, with validation and review steps for accuracy.' },
    { q: 'Can we expand the automation later?', a: 'Yes. Workflows are built as reusable components so adding new processes is faster each time.' },
  ],
  'ai-integration': [
    { q: 'Do we need to rebuild our product to add AI?', a: 'No. AI capabilities are added as services connected to your current architecture, so existing functionality is not disrupted.' },
    { q: 'How do you handle user data sent to AI models?', a: 'We minimize and redact sensitive data, choose providers that meet your requirements, and document data flows for your security review.' },
    { q: 'How do you test AI features before release?', a: 'With evaluation sets, regression tests on prompts and models, and staged rollouts to a subset of users before general release.' },
  ],
  'generative-ai-custom-development': [
    { q: 'What can generative AI build for us?', a: 'Content and document generation, conversational interfaces, code and data assistants, summarization, and search over your own knowledge base.' },
    { q: 'How do you prevent the model from making things up?', a: 'By grounding answers in your sources with citations, constraining outputs, and measuring factuality in evaluation sets.' },
    { q: 'Can we run models in our own environment?', a: 'Yes. Where required, we can deploy open-source models in your cloud or on-premise environment, with trade-offs in cost and capability explained up front.' },
  ],
  'web-development': [
    { q: 'How do you approach content management?', a: 'We set up an editing experience your team can use without developers, with structured content and preview workflows.' },
    { q: 'Do you build e-commerce and customer portals?', a: 'Yes. We build storefronts, customer portals, dashboards, and internal web apps, including authentication, payments, and integrations.' },
    { q: 'Can you improve our existing site rather than rebuild?', a: 'Yes. We audit performance, accessibility, and SEO and fix the highest-impact issues, and tell you honestly if a rebuild would serve you better.' },
  ],
  'mobile-app-development': [
    { q: 'How do you handle push notifications and device features?', a: 'We integrate notifications, camera, location, biometrics, and other native capabilities as your product requires, with attention to platform permission rules.' },
    { q: 'How do you test across devices?', a: 'With automated tests and testing on a representative set of real devices and OS versions before release.' },
    { q: 'Can you maintain the app after launch?', a: 'Yes. Maintenance covers OS updates, bug fixes, performance monitoring, and new features on a retainer.' },
  ],
  'saas-development': [
    { q: 'How do you secure customer data in a multi-tenant system?', a: 'Through tenant isolation, role-based access controls, encryption, audit logging, and security reviews aligned to standards such as SOC 2 where needed.' },
    { q: 'Can you build the admin and analytics side too?', a: 'Yes. Admin consoles, usage analytics, and customer-success tooling are part of a complete SaaS platform and can be scoped in.' },
    { q: 'How do you ship updates without downtime?', a: 'With automated CI/CD, feature flags, and staged rollouts so new releases reach customers safely and can be reversed quickly.' },
  ],
  'api-system-integration': [
    { q: 'Do you build real-time or batch integrations?', a: 'Both. We choose between webhooks, event streams, and scheduled syncs based on how quickly each system needs the data.' },
    { q: 'How do you protect sensitive data in transit?', a: 'With encryption, secure credential storage, least-privilege access, and logging that avoids exposing sensitive fields.' },
    { q: 'What happens when a connected system changes its API?', a: 'Monitoring flags breakage early, and the adapter layer isolates changes so fixes are small and contained.' },
  ],
  'mvp-development': [
    { q: 'How do you decide on the tech stack for an MVP?', a: 'We choose proven, well-supported technology that fits your product and your future hiring, favoring speed now without closing off scale later.' },
    { q: 'Can you help with launch and early users?', a: 'Yes. We set up analytics, feedback channels, and deployment so you can onboard early users and learn from them quickly.' },
    { q: 'What if our idea changes during the build?', a: 'Short sprints and regular demos let us adjust course. We re-scope transparently so you always know the impact on timeline and cost.' },
  ],
  'devops': [
    { q: 'How do you improve release speed and safety?', a: 'With automated build, test, and deploy pipelines, preview environments, and rollback procedures, so releases become routine rather than risky.' },
    { q: 'Do you handle security in the pipeline?', a: 'Yes. We add dependency and container scanning, secrets management, and access controls, and align them to compliance requirements.' },
    { q: 'Can you migrate us between clouds or to containers?', a: 'Yes. We plan migrations in stages with testing and rollback paths, so workloads move without disrupting users.' },
  ],
  'revops': [
    { q: 'How do you align sales and marketing definitions?', a: 'We work with both teams to define stages, lead statuses, and handoff rules, then implement them consistently in your systems.' },
    { q: 'Can you automate lead routing and follow-up?', a: 'Yes. Rules route leads by territory, size, or intent, trigger follow-up tasks, and alert owners to stalled opportunities.' },
    { q: 'Will we get better reporting out of this?', a: 'Yes. Clean, connected data allows trustworthy dashboards for pipeline, conversion, and forecast.' },
  ],
  'sales-leaders': [
    { q: 'Can you build coaching and performance insights?', a: 'Yes. We can surface activity and conversion patterns across reps and calls so managers can coach with evidence.' },
    { q: 'How do you handle forecast accuracy?', a: 'We combine CRM hygiene automation with deal-level signals, so forecasts reflect what is actually happening in the pipeline.' },
    { q: 'Is this a product or a custom build?', a: 'It is a custom build on your stack, shaped to your sales process rather than a one-size-fits-all tool.' },
  ],
  'sales-reps': [
    { q: 'Can it summarize calls and update the CRM for me?', a: 'Yes. Call and meeting summaries, next steps, and CRM fields can be generated and filled for the rep to confirm.' },
    { q: 'Will reps actually adopt it?', a: 'Adoption is designed in. We build with reps, keep the workflow inside tools they already use, and iterate on feedback in the first weeks.' },
    { q: 'Can it help prioritize which accounts to work?', a: 'Yes. Account and lead scoring from your data can highlight who to contact and why.' },
  ],
  'marketers': [
    { q: 'Can you help with campaign attribution?', a: 'Yes. We connect ad, web, and CRM data so you can see which channels and campaigns contribute to pipeline and revenue.' },
    { q: 'Can you automate reporting?', a: 'Yes. Weekly and monthly reports can be generated automatically from your connected sources.' },
    { q: 'How do you keep AI-generated content on brand?', a: 'We encode your voice, terminology, and rules into the workflow and add review steps before anything is published.' },
  ],
  'developers': [
    { q: 'Do you help with developer experience and productivity?', a: 'Yes. We improve build times, test reliability, environments, and onboarding, which often yields large gains for little effort.' },
    { q: 'Can you set up AI coding workflows for our team?', a: 'Yes. We help teams adopt AI-assisted development safely, with guidelines, review practices, and integrations with your repositories.' },
    { q: 'Do you build internal platforms and tools?', a: 'Yes. We build internal portals, deployment tools, and automation that remove repetitive work for your engineers.' },
  ],
  'whatsapp-marketing': [
    { q: 'What message types can we send?', a: 'Template messages for notifications and campaigns, which Meta must approve, and free-form replies within the allowed customer service window.' },
    { q: 'Can the chatbot hand off to a human?', a: 'Yes. Conversations can escalate to an agent with full history when the bot cannot help or the customer asks.' },
    { q: 'Can we track campaign performance?', a: 'Yes. We track delivery, read, reply, and conversion events and report them alongside your other channels.' },
  ],
};

/** Category-level FAQs shown on each pillar page. */
export const pillarFaqs: Record<string, FaqItem[]> = {
  strategy: [
    { q: 'Where should we start if we are not sure what we need?', a: 'Start with a scoping session. We will review your goals and situation and recommend the smallest engagement that gives you clarity, often Product Strategy or AI Strategy.' },
    { q: 'How does strategy connect to delivery?', a: 'Our strategists work alongside designers and engineers, so recommendations are grounded in what can actually be built and shipped.' },
    { q: 'Do you only work with startups or also with enterprises?', a: 'Both. The depth and governance of the engagement scales to the size and complexity of your organization.' },
    { q: 'What will we have at the end?', a: 'Written deliverables such as a roadmap, a financial or cost model, and a prioritized plan your team can execute with us or on its own.' },
  ],
  design: [
    { q: 'Do I need research before design?', a: 'Not always, but it reduces risk. If you already have strong user insight we can move straight to design; otherwise a short research phase is a good investment.' },
    { q: 'Can your designers work with our engineers?', a: 'Yes. We deliver developer-ready files and work with your engineers, or build the designs ourselves.' },
    { q: 'Can you improve a product that already exists?', a: 'Yes. We audit the current experience, fix the highest-impact issues, and evolve the design without disrupting existing users.' },
    { q: 'How do you ensure consistency across screens?', a: 'Through a shared design system of tokens and components, which also speeds up future work.' },
  ],
  ai: [
    { q: 'Which AI service should we begin with?', a: 'It depends on your goal. Automation suits repetitive workflows, agents suit multi-step tasks, and integration suits adding AI to an existing product. A scoping session will point you to the right one.' },
    { q: 'How do you keep AI projects safe and reliable?', a: 'With evaluation suites, guardrails, human review for sensitive actions, logging, and monitoring from the first release.' },
    { q: 'Do you lock us into a specific AI provider?', a: 'No. We design the integration layer so models and providers can be changed as quality and pricing evolve.' },
    { q: 'How do you handle our confidential data?', a: 'Data flows are designed and documented with your security requirements in mind, including provider selection, redaction, and access controls.' },
  ],
  technology: [
    { q: 'Do you build full products or only parts of them?', a: 'Either. We can deliver an end-to-end product, or contribute specific components, services, or features to your existing system.' },
    { q: 'Do you follow our existing technology choices?', a: 'Yes, where they make sense. We work within your stack or recommend alternatives with clear reasoning.' },
    { q: 'How do you ensure quality?', a: 'Through code review, automated testing, continuous integration, and staging environments where you can see progress throughout the engagement.' },
    { q: 'Who owns the code?', a: 'You do. The code and documentation are yours, as specified in your contract.' },
  ],
  marketing: [
    { q: 'How are these services different from a marketing agency?', a: 'We focus on the systems and automation behind growth, such as RevOps, data pipelines, and tooling, rather than creative campaigns.' },
    { q: 'Do you work with the tools we already have?', a: 'Yes. We build on top of your existing CRM, marketing, and analytics tools instead of requiring replacement.' },
    { q: 'How will we know it is working?', a: 'We baseline the key metrics up front and report on them after launch, such as conversion rates, response times, and hours saved.' },
    { q: 'Can the solutions be tailored to specific roles?', a: 'Yes. We have solutions for sales leaders, sales reps, marketers, and developers, each shaped to that role’s daily workflow.' },
  ],
  implementation: [
    { q: 'What does implementation cover?', a: 'Building and connecting the systems that make a plan real: APIs, integrations, MCP servers, and messaging automation.' },
    { q: 'Can you take over an integration that is already half built?', a: 'Yes. We review what exists, stabilize it, and complete or restructure it as needed.' },
    { q: 'How do you keep integrations running reliably?', a: 'With monitoring, alerting, retry logic, and documented runbooks so issues are caught and resolved quickly.' },
    { q: 'Do you provide support after go-live?', a: 'Yes. Every delivery includes a production warranty, and ongoing support retainers are available.' },
  ],
};
