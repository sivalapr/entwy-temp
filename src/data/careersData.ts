export interface JobOpening {
  id: string;
  title: string;
  department: string;
  departmentCategory: string;
  location: string;
  type: string;
  comp: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  stack: string[];
}

export interface DepartmentInfo {
  id: string;
  name: string;
  code: string;
  iconName?: string;
  count: number;
}

export const CAREER_DEPARTMENTS: DepartmentInfo[] = [
  { id: 'marketing-growth', name: 'Marketing & Growth', code: 'MARKETING', count: 4 },
  { id: 'creative-design', name: 'Creative & Design', code: 'DESIGN', count: 4 },
  { id: 'technology-engineering', name: 'Technology & Engineering', code: 'ENGINEERING', count: 4 },
  { id: 'ai-data', name: 'Artificial Intelligence & Data', code: 'AI_DATA', count: 4 },
  { id: 'hr-talent', name: 'Human Resources & Talent Acquisition', code: 'HR', count: 4 },
  { id: 'finance-admin', name: 'Finance & Administration', code: 'FINANCE', count: 4 },
  { id: 'sales-bd', name: 'Business Development & Sales', code: 'SALES', count: 4 },
  { id: 'product-management', name: 'Product & Project Management', code: 'PRODUCT', count: 4 },
  { id: 'customer-support', name: 'Customer Support & Community', code: 'SUPPORT', count: 4 },
];

export const detailedJobOpenings: JobOpening[] = [
  // 1. Marketing & Growth
  {
    id: 'digital-marketing-intern',
    title: 'Digital Marketing Intern',
    department: 'Marketing & Growth',
    departmentCategory: 'marketing-growth',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support digital campaigns promoting ENTWY’s AI-enabled products, digital experiences, and enterprise technology solutions across relevant online channels.',
    responsibilities: [
      'Assist in planning and executing digital marketing campaigns across relevant platforms.',
      'Create engaging promotional content highlighting AI solutions and digital products.',
      'Monitor campaign performance, website traffic, and audience engagement metrics.',
      'Research industry trends, competitor strategies, and potential target audiences.'
    ],
    requirements: [
      'Pursuing a degree in Marketing, Business, Communications, or a related field.',
      'Basic understanding of digital marketing channels and campaign management.',
      'Familiarity with social media platforms, content creation, and analytics tools.',
      'Strong communication, creativity, research, and analytical skills.'
    ],
    stack: ['SEO', 'Google Analytics', 'Social Media', 'Content Marketing', 'Campaign Analytics']
  },
  {
    id: 'social-media-marketing-intern',
    title: 'Social Media Marketing Intern',
    department: 'Marketing & Growth',
    departmentCategory: 'marketing-growth',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: "Support ENTWY's social media presence by developing engaging content that communicates its digital products, AI capabilities, design expertise, and technology solutions to relevant audiences.",
    responsibilities: [
      'Plan social media calendars aligned with brand objectives and campaigns.',
      'Create posts highlighting digital products, AI innovations, and technology insights.',
      'Monitor audience engagement, follower growth, and content performance metrics.',
      'Research social media trends and competitor communication strategies.'
    ],
    requirements: [
      'Pursuing a degree in Marketing, Communications, Media, or Business.',
      'Familiarity with major social media platforms and content formats.',
      'Strong writing, creativity, visual communication, and organizational skills.',
      'Ability to research trends and interpret basic engagement metrics.'
    ],
    stack: ['Instagram', 'LinkedIn', 'Meta Business Suite', 'Canva', 'Social Media Analytics']
  },
  {
    id: 'seo-intern',
    title: 'SEO Intern',
    department: 'Marketing & Growth',
    departmentCategory: 'marketing-growth',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: "Improve the discoverability of ENTWY's digital presence through search optimization, keyword research, website content analysis, and technical SEO support for technology-focused audiences.",
    responsibilities: [
      'Research relevant keywords for AI, SaaS, and digital product services.',
      'Optimize website headings, metadata, internal links, and content structure.',
      'Monitor organic traffic, rankings, indexing, and search performance.',
      'Identify technical SEO issues and recommend practical improvements.'
    ],
    requirements: [
      'Pursuing Marketing, Communications, Computer Science, or a related degree.',
      'Understanding of search engines, keywords, and on-page optimization.',
      'Familiarity with Google Search Console or analytics tools.',
      'Strong research, analytical thinking, and attention to detail.'
    ],
    stack: ['SEO', 'Google Search Console', 'Google Analytics', 'Keyword Research', 'Technical SEO']
  },
  {
    id: 'content-marketing-intern',
    title: 'Content Marketing Intern',
    department: 'Marketing & Growth',
    departmentCategory: 'marketing-growth',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: "Develop informative and engaging content that communicates ENTWY's expertise in AI-enabled products, digital engineering, user experience, and enterprise technology solutions.",
    responsibilities: [
      'Draft blogs, website copy, newsletters, and educational marketing content.',
      'Translate technical concepts into clear, audience-friendly explanations.',
      'Research industry developments, audience interests, and content opportunities.',
      'Optimize content for search visibility, readability, and brand consistency.'
    ],
    requirements: [
      'Pursuing English, Journalism, Marketing, Communications, or a related degree.',
      'Strong writing, editing, proofreading, and research abilities.',
      'Ability to explain technology concepts using accessible language.',
      'Familiarity with SEO principles and content management tools.'
    ],
    stack: ['Content Writing', 'SEO', 'WordPress', 'Keyword Research', 'Editorial Planning']
  },

  // 2. Creative & Design
  {
    id: 'graphic-design-intern',
    title: 'Graphic Design Intern',
    department: 'Creative & Design',
    departmentCategory: 'creative-design',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: "Create visually consistent brand assets and digital creatives that communicate ENTWY's technology offerings, product capabilities, and design-led approach across marketing channels.",
    responsibilities: [
      'Design social media creatives, banners, presentations, and promotional graphics.',
      'Apply brand guidelines consistently across digital communication materials.',
      'Collaborate with marketing teams to develop campaign visuals.',
      'Revise designs using feedback and maintain organized creative files.'
    ],
    requirements: [
      'Pursuing Graphic Design, Visual Communication, or a related course.',
      'Familiarity with design principles, typography, color, and composition.',
      'Working knowledge of Figma, Canva, or Adobe Creative Suite.',
      'Portfolio demonstrating creativity, consistency, and visual storytelling.'
    ],
    stack: ['Figma', 'Canva', 'Adobe Illustrator', 'Photoshop', 'Visual Design', 'Brand Identity']
  },
  {
    id: 'ui-ux-design-intern',
    title: 'UI/UX Design Intern',
    department: 'Creative & Design',
    departmentCategory: 'creative-design',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: "Support the design of intuitive digital experiences by researching user needs, creating interface concepts, prototyping interactions, and improving usability across ENTWY's product initiatives.",
    responsibilities: [
      'Create wireframes, user flows, and interactive interface prototypes.',
      'Conduct user research and document usability observations.',
      'Develop responsive interface layouts aligned with design systems.',
      'Collaborate with developers to refine design feasibility and consistency.'
    ],
    requirements: [
      'Pursuing UI/UX Design, Interaction Design, or a related degree.',
      'Understanding of user-centered design and usability principles.',
      'Familiarity with Figma, prototyping, and responsive interface design.',
      'Portfolio demonstrating wireframes, prototypes, and design problem-solving.'
    ],
    stack: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Usability Testing']
  },
  {
    id: 'product-design-intern',
    title: 'Product Design Intern',
    department: 'Creative & Design',
    departmentCategory: 'creative-design',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Help shape digital products by connecting user research, interaction design, visual systems, and product requirements to create practical and engaging user experiences.',
    responsibilities: [
      'Translate product requirements into user flows and interface concepts.',
      'Create interactive prototypes to validate product ideas and workflows.',
      'Document design decisions, component specifications, and interaction behavior.',
      'Incorporate user feedback and collaborate with product engineers.'
    ],
    requirements: [
      'Pursuing Product Design, Interaction Design, UI/UX, or a related field.',
      'Understanding of user journeys, prototyping, and interface design.',
      'Familiarity with Figma and collaborative design workflows.',
      'Portfolio showcasing structured thinking and product design concepts.'
    ],
    stack: ['Figma', 'Product Discovery', 'User Flows', 'Prototyping', 'Design Systems', 'Usability']
  },
  {
    id: 'video-editing-intern',
    title: 'Video Editing Intern',
    department: 'Creative & Design',
    departmentCategory: 'creative-design',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: "Produce clear and engaging video content that showcases ENTWY's digital products, technology capabilities, design processes, and brand communication across online platforms.",
    responsibilities: [
      'Edit promotional videos, short-form reels, and product demonstrations.',
      'Add transitions, captions, audio, and motion graphics where appropriate.',
      'Adapt video formats for websites and social media platforms.',
      'Organize footage and incorporate feedback into revised edits.'
    ],
    requirements: [
      'Pursuing Media Production, Film, Multimedia, or a related course.',
      'Familiarity with video editing and basic storytelling techniques.',
      'Working knowledge of Premiere Pro, DaVinci Resolve, or similar tools.',
      'Portfolio demonstrating editing, pacing, and visual communication skills.'
    ],
    stack: ['Adobe Premiere Pro', 'DaVinci Resolve', 'CapCut', 'Motion Graphics', 'Video Storytelling']
  },

  // 3. Technology & Engineering
  {
    id: 'frontend-developer-intern',
    title: 'Frontend Developer Intern',
    department: 'Technology & Engineering',
    departmentCategory: 'technology-engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Build responsive, accessible user interfaces for digital products and AI-enabled applications while collaborating with designers and engineers to deliver reliable user experiences.',
    responsibilities: [
      'Implement reusable interface components using HTML, CSS, and JavaScript.',
      'Develop responsive pages using React or similar frontend frameworks.',
      'Integrate frontend components with REST APIs and backend services.',
      'Test interfaces, resolve defects, and improve accessibility and performance.'
    ],
    requirements: [
      'Pursuing Computer Science, Information Technology, or a related degree.',
      'Understanding of HTML, CSS, JavaScript, and responsive design.',
      'Familiarity with React, Git, and browser developer tools.',
      'Ability to debug issues and collaborate through code reviews.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'REST APIs', 'Git', 'Responsive Design']
  },
  {
    id: 'backend-developer-intern',
    title: 'Backend Developer Intern',
    department: 'Technology & Engineering',
    departmentCategory: 'technology-engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support the development of secure backend services, application programming interfaces, and database integrations for scalable digital products and AI-enabled platforms.',
    responsibilities: [
      'Develop and maintain backend endpoints using suitable programming frameworks.',
      'Design database queries, schemas, and data validation routines.',
      'Integrate application services with APIs and external systems.',
      'Debug backend issues and document implementation changes.'
    ],
    requirements: [
      'Pursuing Computer Science, Information Technology, or Software Engineering.',
      'Understanding of Python, JavaScript, Java, or another backend language.',
      'Familiarity with databases, HTTP, REST APIs, and Git.',
      'Strong logical reasoning, debugging, and problem-solving abilities.'
    ],
    stack: ['Python', 'Node.js', 'REST APIs', 'SQL', 'PostgreSQL', 'Git', 'Backend Development']
  },
  {
    id: 'full-stack-developer-intern',
    title: 'Full Stack Developer Intern',
    department: 'Technology & Engineering',
    departmentCategory: 'technology-engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Contribute to end-to-end digital product development by building user interfaces, implementing backend services, connecting databases, and integrating application features.',
    responsibilities: [
      'Build responsive frontend components for web applications.',
      'Develop backend routes and integrate REST APIs.',
      'Connect application workflows with relational or document databases.',
      'Test features, resolve defects, and maintain technical documentation.'
    ],
    requirements: [
      'Pursuing Computer Science, Information Technology, or a related degree.',
      'Foundational knowledge of frontend and backend development.',
      'Familiarity with JavaScript, React, APIs, databases, and Git.',
      'Willingness to learn debugging, testing, and deployment practices.'
    ],
    stack: ['JavaScript', 'React', 'Node.js', 'REST APIs', 'SQL', 'Git', 'Full Stack Development']
  },
  {
    id: 'software-testing-qa-intern',
    title: 'Software Testing / QA Intern',
    department: 'Technology & Engineering',
    departmentCategory: 'technology-engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Help ensure the quality and reliability of digital products by validating application workflows, identifying defects, documenting test results, and supporting systematic software testing.',
    responsibilities: [
      'Prepare test cases based on functional requirements and user workflows.',
      'Execute manual tests and document reproducible defects.',
      'Perform regression testing after fixes and feature updates.',
      'Collaborate with developers to verify resolutions and quality improvements.'
    ],
    requirements: [
      'Pursuing Computer Science, Information Technology, or a related course.',
      'Understanding of software testing fundamentals and development workflows.',
      'Familiarity with bug tracking and test documentation.',
      'Strong observation, analytical thinking, and attention to detail.'
    ],
    stack: ['Manual Testing', 'Test Cases', 'Bug Tracking', 'Postman', 'Regression Testing', 'QA']
  },

  // 4. Artificial Intelligence & Data
  {
    id: 'ai-ml-intern',
    title: 'AI/ML Intern',
    department: 'Artificial Intelligence & Data',
    departmentCategory: 'ai-data',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Assist in developing and evaluating machine learning solutions that support intelligent digital products, predictive capabilities, and data-driven features across relevant business applications.',
    responsibilities: [
      'Prepare datasets and perform exploratory data analysis.',
      'Implement baseline machine learning models for defined problems.',
      'Evaluate model performance using appropriate metrics and validation methods.',
      'Document experiments, findings, limitations, and potential improvements.'
    ],
    requirements: [
      'Pursuing Computer Science, Data Science, Statistics, or a related degree.',
      'Foundational knowledge of Python, statistics, and machine learning.',
      'Familiarity with pandas, NumPy, and scikit-learn.',
      'Ability to analyze datasets and communicate technical findings.'
    ],
    stack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Machine Learning', 'Data Analysis']
  },
  {
    id: 'generative-ai-intern',
    title: 'Generative AI Intern',
    department: 'Artificial Intelligence & Data',
    departmentCategory: 'ai-data',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Explore and prototype generative AI capabilities for digital products, including language model integrations, retrieval-based applications, conversational interfaces, and intelligent workflow automation.',
    responsibilities: [
      'Build prototypes integrating large language models into application workflows.',
      'Experiment with retrieval-augmented generation and document-based question answering.',
      'Evaluate generated outputs for relevance, accuracy, and consistency.',
      'Document experiments, integration approaches, and observed limitations.'
    ],
    requirements: [
      'Pursuing Computer Science, AI, Data Science, or a related degree.',
      'Foundational knowledge of Python, APIs, and machine learning concepts.',
      'Familiarity with LLMs, embeddings, or prompt-based applications.',
      'Interest in responsible AI evaluation and practical experimentation.'
    ],
    stack: ['Python', 'LLM APIs', 'Prompt Design', 'RAG', 'Embeddings', 'Vector Databases']
  },
  {
    id: 'prompt-engineering-intern',
    title: 'Prompt Engineering Intern',
    department: 'Artificial Intelligence & Data',
    departmentCategory: 'ai-data',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Develop and evaluate structured prompts for AI-powered applications, improving instruction clarity, output consistency, task completion, and reliability across relevant business workflows.',
    responsibilities: [
      'Design prompts for classification, extraction, summarization, and generation tasks.',
      'Test prompt variations against defined evaluation criteria and examples.',
      'Identify failure cases, ambiguous instructions, and inconsistent outputs.',
      'Maintain prompt libraries, evaluation records, and improvement documentation.'
    ],
    requirements: [
      'Pursuing Computer Science, Linguistics, AI, or a related discipline.',
      'Strong written communication and structured problem-solving skills.',
      'Familiarity with generative AI tools and language model behavior.',
      'Ability to evaluate outputs objectively using defined criteria.'
    ],
    stack: ['Prompt Engineering', 'LLMs', 'Structured Outputs', 'Evaluation Frameworks', 'Python']
  },
  {
    id: 'data-science-intern',
    title: 'Data Science Intern',
    department: 'Artificial Intelligence & Data',
    departmentCategory: 'ai-data',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Analyze structured datasets to identify patterns, generate actionable insights, support predictive analysis, and inform data-driven decisions for digital products and business operations.',
    responsibilities: [
      'Clean, transform, and validate datasets for analysis.',
      'Perform exploratory analysis and identify meaningful data patterns.',
      'Create visualizations and concise reports communicating analytical findings.',
      'Assist with statistical analysis and baseline predictive models.'
    ],
    requirements: [
      'Pursuing Data Science, Statistics, Mathematics, or Computer Science.',
      'Understanding of statistics, data preparation, and analytical methods.',
      'Familiarity with Python, SQL, pandas, and visualization tools.',
      'Ability to explain findings through clear, evidence-based reasoning.'
    ],
    stack: ['Python', 'SQL', 'pandas', 'NumPy', 'Statistics', 'Data Visualization', 'scikit-learn']
  },

  // 5. Human Resources & Talent Acquisition
  {
    id: 'hr-intern',
    title: 'HR Intern',
    department: 'Human Resources & Talent Acquisition',
    departmentCategory: 'hr-talent',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: "Support human resources activities, employee engagement, documentation, and recruitment coordination while helping maintain organized people processes within ENTWY's technology-focused business environment.",
    responsibilities: [
      'Assist with onboarding documentation and candidate communication.',
      'Maintain employee records and update HR trackers.',
      'Coordinate interviews, internal meetings, and orientation activities.',
      'Support employee engagement initiatives and HR process improvements.'
    ],
    requirements: [
      'Pursuing Human Resources, Business Administration, Psychology, or a related degree.',
      'Strong communication, organization, and interpersonal skills.',
      'Familiarity with spreadsheets, document management, and office tools.',
      'Ability to handle confidential information responsibly and professionally.'
    ],
    stack: ['HR Documentation', 'Excel', 'Google Workspace', 'Onboarding', 'Employee Engagement']
  },
  {
    id: 'talent-acquisition-intern',
    title: 'Talent Acquisition Intern',
    department: 'Human Resources & Talent Acquisition',
    departmentCategory: 'hr-talent',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support talent sourcing and hiring initiatives by identifying suitable candidates, coordinating recruitment activities, and maintaining organized candidate pipelines for technology and business roles.',
    responsibilities: [
      'Source candidates through job portals and professional networks.',
      'Screen applications against role requirements and selection criteria.',
      'Coordinate interviews and communicate updates to candidates.',
      'Maintain recruitment trackers and monitor hiring progress.'
    ],
    requirements: [
      'Pursuing Human Resources, Business Administration, or a related degree.',
      'Understanding of recruitment workflows and candidate screening.',
      'Strong communication, coordination, and interpersonal skills.',
      'Familiarity with job portals, spreadsheets, and professional networking.'
    ],
    stack: ['Candidate Sourcing', 'LinkedIn', 'Job Portals', 'Applicant Tracking', 'Recruitment Analytics']
  },
  {
    id: 'recruitment-intern',
    title: 'Recruitment Intern',
    department: 'Human Resources & Talent Acquisition',
    departmentCategory: 'hr-talent',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Assist the recruitment team with vacancy coordination, application screening, interview scheduling, candidate follow-ups, and accurate recruitment records across internship and professional hiring processes.',
    responsibilities: [
      'Review applications and shortlist candidates against job descriptions.',
      'Schedule interviews and share relevant instructions with candidates.',
      'Follow up on interview outcomes and candidate availability.',
      'Update applicant records and maintain recruitment status reports.'
    ],
    requirements: [
      'Pursuing HR, Management, Psychology, or a related academic program.',
      'Strong written communication and professional telephone etiquette.',
      'Good organizational skills and attention to detail.',
      'Ability to manage multiple recruitment tasks and deadlines.'
    ],
    stack: ['Recruitment Coordination', 'Job Descriptions', 'Excel', 'Google Sheets', 'Candidate Tracking']
  },
  {
    id: 'hr-operations-intern',
    title: 'HR Operations Intern',
    department: 'Human Resources & Talent Acquisition',
    departmentCategory: 'hr-talent',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Assist with day-to-day HR administration, employee documentation, onboarding records, attendance tracking, and process coordination to support accurate and efficient people operations.',
    responsibilities: [
      'Organize employee documents and maintain updated personnel records.',
      'Support onboarding checklists and joining formalities.',
      'Update attendance, leave, and HR administration trackers.',
      'Prepare routine HR reports and documentation for review.'
    ],
    requirements: [
      'Pursuing Human Resources, Business Administration, or a related degree.',
      'Familiarity with spreadsheets, documentation, and administrative workflows.',
      'Strong accuracy, organization, and time-management skills.',
      'Ability to maintain confidentiality when handling personnel records.'
    ],
    stack: ['HR Operations', 'Excel', 'Google Sheets', 'Documentation', 'Onboarding', 'Record Management']
  },

  // 6. Finance & Administration
  {
    id: 'finance-intern',
    title: 'Finance Intern',
    department: 'Finance & Administration',
    departmentCategory: 'finance-admin',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support financial administration, expense monitoring, financial reporting, and transaction documentation while helping maintain accurate records for business operations and management review.',
    responsibilities: [
      'Assist with expense tracking and financial record maintenance.',
      'Organize invoices, payment records, and supporting documentation.',
      'Prepare spreadsheets and summaries for routine financial reporting.',
      'Reconcile transaction records and flag discrepancies for review.'
    ],
    requirements: [
      'Pursuing Finance, Commerce, Accounting, or Business Administration.',
      'Understanding of basic accounting and financial reporting concepts.',
      'Familiarity with spreadsheets and numerical data handling.',
      'Strong accuracy, analytical thinking, and organizational skills.'
    ],
    stack: ['Excel', 'Financial Reporting', 'Expense Tracking', 'Reconciliation', 'Financial Documentation']
  },
  {
    id: 'accounting-intern',
    title: 'Accounting Intern',
    department: 'Finance & Administration',
    departmentCategory: 'finance-admin',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Assist with bookkeeping, invoice documentation, transaction verification, and account reconciliation while supporting accurate accounting records and routine financial administration.',
    responsibilities: [
      'Record and organize invoices, receipts, and transaction details.',
      'Assist with bank statement and ledger reconciliation.',
      'Verify supporting documents for routine financial transactions.',
      'Maintain accounting schedules and documentation for review.'
    ],
    requirements: [
      'Pursuing Commerce, Accounting, Finance, or a related degree.',
      'Understanding of bookkeeping and basic accounting principles.',
      'Familiarity with Excel and accounting software fundamentals.',
      'Strong numerical accuracy, organization, and attention to detail.'
    ],
    stack: ['Bookkeeping', 'Excel', 'Ledger Reconciliation', 'Invoice Processing', 'Accounting Software']
  },
  {
    id: 'financial-analyst-intern',
    title: 'Financial Analyst Intern',
    department: 'Finance & Administration',
    departmentCategory: 'finance-admin',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Assist with financial data analysis, performance reporting, variance tracking, and spreadsheet modeling to support informed business decisions and operational planning.',
    responsibilities: [
      'Collect and organize financial data from relevant business records.',
      'Prepare financial summaries, charts, and performance reports.',
      'Compare actual figures against forecasts and identify variances.',
      'Support spreadsheet models and document analytical assumptions.'
    ],
    requirements: [
      'Pursuing Finance, Economics, Accounting, or Business Analytics.',
      'Understanding of financial statements and analytical fundamentals.',
      'Proficiency in spreadsheet formulas, charts, and data organization.',
      'Strong numerical reasoning and clear communication skills.'
    ],
    stack: ['Excel', 'Financial Modeling', 'Variance Analysis', 'Reporting', 'Data Visualization']
  },
  {
    id: 'business-operations-intern',
    title: 'Business Operations Intern',
    department: 'Finance & Administration',
    departmentCategory: 'finance-admin',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support cross-functional operations by organizing workflows, tracking deliverables, documenting processes, and identifying opportunities to improve efficiency across business activities.',
    responsibilities: [
      'Maintain operational trackers, schedules, and task status reports.',
      'Document standard operating procedures and recurring workflows.',
      'Coordinate information and follow-ups across internal teams.',
      'Analyze operational data and highlight process improvement opportunities.'
    ],
    requirements: [
      'Pursuing Business Administration, Management, or Operations-related studies.',
      'Strong organizational, coordination, and analytical skills.',
      'Familiarity with spreadsheets, documentation, and task management tools.',
      'Ability to prioritize tasks and communicate progress clearly.'
    ],
    stack: ['Excel', 'Google Sheets', 'Process Documentation', 'Workflow Tracking', 'Project Coordination']
  },

  // 7. Business Development & Sales
  {
    id: 'business-development-intern',
    title: 'Business Development Intern',
    department: 'Business Development & Sales',
    departmentCategory: 'sales-bd',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support business growth by researching prospective clients, identifying opportunities for digital product engineering and AI solutions, and coordinating outreach activities across relevant industries.',
    responsibilities: [
      'Research prospective clients, target industries, and potential business opportunities.',
      'Assist with outreach campaigns and introductory business communications.',
      'Prepare company presentations, prospect lists, and meeting briefs.',
      'Track leads, follow-ups, and business development activities.'
    ],
    requirements: [
      'Pursuing Business Administration, Marketing, Management, or a related degree.',
      'Strong communication, research, and relationship-building skills.',
      'Interest in SaaS, digital products, and enterprise technology solutions.',
      'Familiarity with spreadsheets, presentations, and customer tracking tools.'
    ],
    stack: ['Lead Research', 'CRM', 'Market Analysis', 'Business Communication', 'Sales Presentations']
  },
  {
    id: 'saas-sales-intern',
    title: 'SaaS Sales Intern',
    department: 'Business Development & Sales',
    departmentCategory: 'sales-bd',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support sales initiatives for software and digital technology solutions by researching customer needs, explaining product value, qualifying prospects, and coordinating sales follow-ups.',
    responsibilities: [
      'Research potential customers and identify relevant software needs.',
      'Assist with product presentations and introductory sales demonstrations.',
      'Qualify prospects using defined customer and business criteria.',
      'Maintain sales pipelines, meeting notes, and follow-up schedules.'
    ],
    requirements: [
      'Pursuing Sales, Marketing, Business Administration, or a related degree.',
      'Strong verbal communication, persuasion, and presentation skills.',
      'Interest in SaaS products, subscriptions, and technology sales.',
      'Ability to research customer challenges and communicate value clearly.'
    ],
    stack: ['SaaS Sales', 'CRM', 'Lead Qualification', 'Product Demonstrations', 'Sales Pipeline']
  },
  {
    id: 'lead-generation-intern',
    title: 'Lead Generation Intern',
    department: 'Business Development & Sales',
    departmentCategory: 'sales-bd',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: "Build targeted prospect lists for ENTWY's digital engineering and AI solutions by researching businesses, identifying relevant decision-makers, and supporting structured outbound outreach.",
    responsibilities: [
      'Identify potential companies using defined industry and business criteria.',
      'Research decision-makers and verify publicly available business information.',
      'Maintain accurate lead databases and qualification records.',
      'Support outreach campaigns and track prospect engagement.'
    ],
    requirements: [
      'Pursuing Business, Marketing, Communications, or a related degree.',
      'Strong online research and data organization skills.',
      'Familiarity with spreadsheets, CRM systems, and professional networks.',
      'Attention to detail when verifying and recording prospect information.'
    ],
    stack: ['Lead Research', 'LinkedIn', 'CRM', 'Google Sheets', 'Prospect Qualification', 'Outreach']
  },
  {
    id: 'client-relationship-intern',
    title: 'Client Relationship Intern',
    department: 'Business Development & Sales',
    departmentCategory: 'sales-bd',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support client communication and relationship management by coordinating meetings, documenting requirements, tracking follow-ups, and helping maintain positive engagement throughout business interactions.',
    responsibilities: [
      'Coordinate client meetings, discussions, and follow-up communications.',
      'Document client requirements, feedback, and agreed action items.',
      'Maintain client records and communication history.',
      'Coordinate with internal teams to track client requests.'
    ],
    requirements: [
      'Pursuing Business Administration, Communications, Marketing, or a related degree.',
      'Strong interpersonal skills and professional written communication.',
      'Ability to organize meeting notes and manage follow-ups.',
      'Interest in technology services and customer relationship management.'
    ],
    stack: ['Client Communication', 'CRM', 'Meeting Documentation', 'Requirement Tracking', 'Coordination']
  },

  // 8. Product & Project Management
  {
    id: 'product-management-intern',
    title: 'Product Management Intern',
    department: 'Product & Project Management',
    departmentCategory: 'product-management',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support digital product planning by translating user needs into requirements, coordinating with design and engineering teams, and tracking feature development across product initiatives.',
    responsibilities: [
      'Document product requirements, user stories, and acceptance criteria.',
      'Assist with feature prioritization and product roadmap updates.',
      'Coordinate feedback and requirements across design and engineering teams.',
      'Track feature progress and maintain product documentation.'
    ],
    requirements: [
      'Pursuing Business, Engineering, Design, or a related degree.',
      'Understanding of product development and user-centered problem-solving.',
      'Familiarity with task management and product documentation tools.',
      'Strong analytical, communication, and cross-functional coordination skills.'
    ],
    stack: ['Product Roadmaps', 'User Stories', 'Jira', 'Product Discovery', 'Requirements Documentation']
  },
  {
    id: 'product-research-intern',
    title: 'Product Research Intern',
    department: 'Product & Project Management',
    departmentCategory: 'product-management',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Investigate user needs, market opportunities, competitor products, and emerging technology trends to help inform product discovery and evidence-based product decisions.',
    responsibilities: [
      'Research user problems through interviews, surveys, and secondary sources.',
      'Analyze competing products, features, positioning, and user experiences.',
      'Summarize research findings into actionable product insights.',
      'Maintain research documentation and opportunity comparison frameworks.'
    ],
    requirements: [
      'Pursuing Product Design, Business, Psychology, or a related degree.',
      'Strong research, critical thinking, and information synthesis skills.',
      'Familiarity with surveys, interviews, and competitor analysis.',
      'Ability to present evidence-based findings clearly and objectively.'
    ],
    stack: ['User Research', 'Market Research', 'Competitor Analysis', 'Surveys', 'Research Synthesis']
  },
  {
    id: 'business-analyst-intern',
    title: 'Business Analyst Intern',
    department: 'Product & Project Management',
    departmentCategory: 'product-management',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Assist in analyzing business requirements, documenting workflows, evaluating operational data, and translating stakeholder needs into structured inputs for digital product development.',
    responsibilities: [
      'Gather and document stakeholder requirements and business objectives.',
      'Map existing workflows and identify process improvement opportunities.',
      'Prepare requirement specifications, process diagrams, and analysis reports.',
      'Support requirement validation and communication between business and technical teams.'
    ],
    requirements: [
      'Pursuing Business Analytics, Management, Engineering, or a related degree.',
      'Strong analytical reasoning and structured problem-solving abilities.',
      'Familiarity with spreadsheets, flowcharts, and documentation tools.',
      'Ability to communicate requirements clearly and accurately.'
    ],
    stack: ['Business Analysis', 'Excel', 'Process Mapping', 'Requirements Gathering', 'Documentation']
  },
  {
    id: 'project-management-intern',
    title: 'Project Management Intern',
    department: 'Product & Project Management',
    departmentCategory: 'product-management',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support project planning and execution by coordinating tasks, maintaining schedules, tracking milestones, documenting decisions, and helping teams deliver digital initiatives efficiently.',
    responsibilities: [
      'Maintain project schedules, task boards, and milestone trackers.',
      'Coordinate meetings, meeting notes, and action-item follow-ups.',
      'Track project dependencies, progress updates, and delivery risks.',
      'Prepare status reports and organize project documentation.'
    ],
    requirements: [
      'Pursuing Project Management, Business, Engineering, or a related degree.',
      'Strong organization, communication, and time-management skills.',
      'Familiarity with project tracking and collaboration tools.',
      'Ability to coordinate multiple tasks and escalate blockers promptly.'
    ],
    stack: ['Jira', 'Trello', 'Project Planning', 'Milestone Tracking', 'Documentation', 'Team Coordination']
  },

  // 9. Customer Support & Community
  {
    id: 'customer-support-intern',
    title: 'Customer Support Intern',
    department: 'Customer Support & Community',
    departmentCategory: 'customer-support',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Assist customers with product-related questions, service requests, and general inquiries while ensuring clear communication, accurate documentation, and timely coordination with internal teams.',
    responsibilities: [
      'Respond to customer inquiries through designated communication channels.',
      'Document support requests, reported issues, and resolution updates.',
      'Escalate complex issues to appropriate internal teams.',
      'Identify recurring questions and contribute to support documentation.'
    ],
    requirements: [
      'Pursuing Business, Communications, Information Technology, or a related degree.',
      'Strong written communication, listening, and problem-solving skills.',
      'Familiarity with customer support tools and documentation workflows.',
      'Ability to remain organized and professional when handling inquiries.'
    ],
    stack: ['Customer Support', 'Ticket Management', 'Documentation', 'Email Communication', 'Issue Tracking']
  },
  {
    id: 'customer-success-intern',
    title: 'Customer Success Intern',
    department: 'Customer Support & Community',
    departmentCategory: 'customer-support',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support customer adoption and satisfaction by tracking product engagement, coordinating customer feedback, assisting with account communication, and identifying opportunities to improve the overall user experience.',
    responsibilities: [
      'Track customer feedback, engagement indicators, and account activities.',
      'Assist with customer check-ins and product adoption follow-ups.',
      'Document customer goals, concerns, and improvement suggestions.',
      'Coordinate with internal teams to address customer requirements.'
    ],
    requirements: [
      'Pursuing Business, Management, Communications, or a related degree.',
      'Strong interpersonal, organizational, and problem-solving skills.',
      'Interest in SaaS products and customer lifecycle management.',
      'Ability to interpret feedback and maintain accurate customer records.'
    ],
    stack: ['Customer Success', 'CRM', 'Customer Feedback', 'Product Adoption', 'Account Tracking']
  },
  {
    id: 'technical-support-intern',
    title: 'Technical Support Intern',
    department: 'Customer Support & Community',
    departmentCategory: 'customer-support',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Help investigate technical issues affecting digital applications by reproducing reported problems, documenting troubleshooting steps, and coordinating with engineering teams on possible resolutions.',
    responsibilities: [
      'Reproduce application issues using documented user scenarios.',
      'Collect error details, screenshots, logs, and troubleshooting information.',
      'Assist with basic API, browser, and application diagnostics.',
      'Track technical tickets and verify reported fixes.'
    ],
    requirements: [
      'Pursuing Computer Science, Information Technology, or a related degree.',
      'Foundational knowledge of web applications and troubleshooting methods.',
      'Familiarity with browsers, HTTP concepts, APIs, and basic SQL.',
      'Strong analytical thinking and clear technical documentation skills.'
    ],
    stack: ['Troubleshooting', 'Browser DevTools', 'REST APIs', 'Postman', 'SQL', 'Issue Tracking']
  },
  {
    id: 'client-onboarding-intern',
    title: 'Client Onboarding Intern',
    department: 'Customer Support & Community',
    departmentCategory: 'customer-support',
    location: 'Chennai, Tamil Nadu',
    type: 'Internship',
    comp: 'Internship · Remuneration and benefits to be confirmed',
    summary: 'Support new client onboarding by coordinating initial communications, collecting required information, documenting expectations, and helping clients navigate the early stages of service engagement.',
    responsibilities: [
      'Coordinate onboarding meetings and introductory client communications.',
      'Collect client requirements, contact details, and relevant documentation.',
      'Maintain onboarding checklists, progress trackers, and action items.',
      'Coordinate with internal teams to resolve onboarding questions.'
    ],
    requirements: [
      'Pursuing Business Administration, Communications, Management, or a related degree.',
      'Strong communication, coordination, and organizational skills.',
      'Familiarity with spreadsheets, documentation, and collaboration tools.',
      'Ability to explain processes clearly and follow up consistently.'
    ],
    stack: ['Client Onboarding', 'CRM', 'Requirement Documentation', 'Checklists', 'Project Coordination']
  }
];

