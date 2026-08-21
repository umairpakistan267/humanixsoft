export const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/industries', label: 'Industries' },
  { to: '/insights', label: 'Insights' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
] as const

export const stats = [
  { amount: 80, suffix: '+', label: 'Products shipped' },
  { amount: 12, suffix: '', label: 'Countries served' },
  { amount: 98, suffix: '%', label: 'Client retention' },
  { amount: 6, suffix: ' yrs', label: 'Of focused craft' },
] as const

export const technologies = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'React Native',
  'Flutter',
  'Python',
  'PostgreSQL',
  'AWS',
  'Kubernetes',
  'Figma',
  'Swift',
  'Kotlin',
  'GraphQL',
  'Terraform',
] as const

export const services = [
  {
    slug: 'product-engineering',
    title: 'Product engineering',
    eyebrow: '01',
    summary: 'Web and platform products built to ship, scale, and stay maintainable.',
    copy: 'We take ideas from a messy brief to a production system — architecture, APIs, web apps, and the unglamorous work that keeps them reliable.',
    points: ['Product discovery & architecture', 'Web apps and platforms', 'API design & integrations', 'Performance and maintainability'],
  },
  {
    slug: 'mobile',
    title: 'Mobile apps',
    eyebrow: '02',
    summary: 'Native-quality iOS and Android experiences people actually open again.',
    copy: 'From consumer apps to field tools, we design and build mobile products that feel fast, clear, and at home on the device.',
    points: ['iOS & Android', 'React Native / Flutter', 'Offline-first workflows', 'App Store launch support'],
  },
  {
    slug: 'design',
    title: 'Product design',
    eyebrow: '03',
    summary: 'Interfaces with a point of view — not generic dashboards in a trench coat.',
    copy: 'Research, UX, and visual design sit with engineering from day one so the thing we ship looks like the thing we meant.',
    points: ['UX research & flows', 'UI systems', 'Prototypes', 'Design-dev handoff'],
  },
  {
    slug: 'cloud',
    title: 'Cloud & DevOps',
    eyebrow: '04',
    summary: 'Infrastructure that stays quiet until you need it to roar.',
    copy: 'We design environments, pipelines, and observability so your product can grow without a 2 a.m. archaeology session.',
    points: ['AWS / GCP architecture', 'CI/CD & environments', 'Security baselines', 'Cost-aware scaling'],
  },
  {
    slug: 'ai',
    title: 'AI & automation',
    eyebrow: '05',
    summary: 'Practical intelligence wired into real workflows — not a chatbot bolted on.',
    copy: 'We find the repetitive, expensive, or slow parts of your operation and build models, agents, and automations that actually stick.',
    points: ['Applied LLM features', 'Document & ops automation', 'Internal copilots', 'Evaluation & guardrails'],
  },
  {
    slug: 'teams',
    title: 'Dedicated teams',
    eyebrow: '06',
    summary: 'A forged squad that works as yours — senior, opinionated, easy to work with.',
    copy: 'When you need more than a project, we embed a small team that already knows how to ship together.',
    points: ['Squad embedding', 'Staff-plus engineers', 'Delivery ownership', 'Knowledge transfer'],
  },
] as const

export const processSteps = [
  {
    n: '01',
    title: 'Discover',
    copy: 'We sit with the problem until it is specific. Users, constraints, risk, and what “done” actually means.',
  },
  {
    n: '02',
    title: 'Shape',
    copy: 'Flows, architecture, and a plan you can hold. No six-month mystery tours — a path with checkpoints.',
  },
  {
    n: '03',
    title: 'Forge',
    copy: 'Design and engineering in the same fire. Weekly demos, tight feedback, software you can click.',
  },
  {
    n: '04',
    title: 'Harden',
    copy: 'QA, performance, security, and the boring excellence that keeps products from cracking in production.',
  },
  {
    n: '05',
    title: 'Launch',
    copy: 'Release with a runbook, not a prayer. We stay through the first real users, not just the first deploy.',
  },
  {
    n: '06',
    title: 'Evolve',
    copy: 'Products are never finished. We keep forging — features, care, and the next honest increment.',
  },
] as const

const pub = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const projects = [
  {
    slug: 'mathdigits',
    name: 'MathDigits',
    sector: 'EdTech',
    year: '2025',
    title: 'Master mental math — games, challenges, and a live leaderboard.',
    summary: 'A web and Android learning product: worksheets, topics, calculators, formulas, and an AI-powered training loop that makes practice feel like play.',
    image: pub('work/mathdigits.png'),
    mesh: 'mesh-helios',
    layout: 'screen',
    tone: 'light',
    accent: '#f97316',
    chrome: '#1e3a8a',
    surface: '#eef2ff',
    ink: '#0f172a',
    span: 'md:col-span-12 lg:col-span-7',
    tags: ['Mobile', 'Web', 'Design'],
    metric: 'Live on Google Play',
    challenge:
      'Mental math tools were either worksheets in a PDF or toys with no path. Students bounced. Teachers could not see who was actually getting faster.',
    approach:
      'We built MathDigits as one product across web and Android: play, daily challenges, leaderboards, and an AI layer that adapts the next problem — with worksheets and formulas still one tap away.',
    outcome:
      'Practice moved off paper into a loop people reopen. The Play Store listing and the website tell the same story, and the leaderboard gives the work a reason to continue.',
    stack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'vault',
    name: 'Vault',
    sector: 'Finance',
    year: '2025',
    title: 'Financial accounting — users, roles, and the books in one system.',
    summary: 'A financial accounting platform with user management, roles, special rights, and live coverage of who can touch which sites and business units.',
    image: pub('work/finance.png'),
    mesh: 'mesh-ledger',
    layout: 'screen',
    tone: 'light',
    accent: '#1d4ed8',
    chrome: '#1e4b8e',
    surface: '#f4f7fb',
    ink: '#121826',
    span: 'md:col-span-12 lg:col-span-5',
    tags: ['Web', 'Cloud'],
    metric: '339 users governed',
    challenge:
      'Finance lived in an aging ledger. Access was a spreadsheet. Nobody could see who had a role, a site, or a password about to expire.',
    approach:
      'We built Vault around control: user and role administration, special rights, assignment coverage, and a password-expiry queue that finance can act on before audit day.',
    outcome:
      'Access reviews that took a week now open on one overview. Roles, sites, and business units are visible — including the people still missing them.',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'harbor',
    name: 'Harbor',
    sector: 'Inventory',
    year: '2024',
    title: 'Quantity and revenue, side by side — not two different stories.',
    summary: 'An inventory and sales analysis suite: top products by quantity, revenue distribution, and the charts merchandising actually uses.',
    image: pub('work/inventory.png'),
    mesh: 'mesh-nimbus',
    layout: 'screen',
    tone: 'light',
    accent: '#0f766e',
    chrome: '#0f4c5c',
    surface: '#f0f7f6',
    ink: '#102422',
    span: 'md:col-span-12 lg:col-span-5',
    tags: ['Web', 'Cloud'],
    metric: 'Qty vs revenue in one view',
    challenge:
      'Ops counted units. Finance counted money. The two reports never agreed, and category leads argued from different exports.',
    approach:
      'Harbor puts quantity analysis and revenue analysis on the same board — tables, pie and bar views, top 5 / top 10 — so a SKU has one story.',
    outcome:
      'Category reviews run from one screen. Quantity leaders and revenue leaders are visible together, not reconciled after the meeting.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'GCP'],
  },
  {
    slug: 'kinship',
    name: 'Kinship',
    sector: 'HRMS',
    year: '2024',
    title: 'People ops that employees will actually open.',
    summary: 'A human resource management system — active headcount, attendance, leave, and salary stats on a dashboard HR and managers share.',
    image: pub('work/hrms.png'),
    mesh: 'mesh-meridian',
    layout: 'screen',
    tone: 'light',
    accent: '#0d9488',
    chrome: '#115e59',
    surface: '#f3faf8',
    ink: '#142422',
    span: 'md:col-span-12 lg:col-span-6',
    tags: ['Web', 'Design'],
    metric: 'Attendance on the home screen',
    challenge:
      'HR was a ticket queue. Managers guessed who was in. Attendance and payroll lived in different tools with different totals.',
    approach:
      'Kinship opens on the floor: active employees, on-time vs late, 30-day attendance, and salary stats — with HR, leave, and reports one click away.',
    outcome:
      'Managers see today’s floor without calling HR. Leave and attendance stop being a Friday reconstruction.',
    stack: ['TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'Azure'],
  },
  {
    slug: 'relay',
    name: 'Relay',
    sector: 'Communication',
    year: '2025',
    title: 'Performance grades the network can actually see.',
    summary: 'An internal communication and performance portal — monthly grading graphs, site scores, and YTD grades for multi-site operations.',
    image: pub('work/communication.png'),
    mesh: 'mesh-volt',
    layout: 'screen',
    tone: 'light',
    accent: '#dc2626',
    chrome: '#b91c1c',
    surface: '#faf5f5',
    ink: '#1c1212',
    span: 'md:col-span-12 lg:col-span-6',
    tags: ['Web'],
    metric: 'YTD grade on every site',
    challenge:
      'Site performance lived in email threads and a shared workbook. Head office could not see this month’s grade without asking a regional manager.',
    approach:
      'Relay publishes the grading graph: targets vs actuals, monthly and YTD scores, and a criteria legend — filtered by year, month, and site.',
    outcome:
      'Area managers open one portal instead of chasing spreadsheets. Grades are visible the morning after the month closes.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'shift',
    name: 'Shift',
    sector: 'Shift sheets',
    year: '2024',
    title: 'Daily shift close that balances before anyone goes home.',
    summary: 'A shift-sheet system for multi-POS sites — fuel and merchandise, taxes, MTD categories, and the totals that have to match the drawer.',
    image: pub('work/shift.png'),
    mesh: 'mesh-helios',
    layout: 'screen',
    tone: 'light',
    accent: '#2563eb',
    chrome: '#1e293b',
    surface: '#f1f5f9',
    ink: '#0f172a',
    span: 'md:col-span-12 lg:col-span-5',
    tags: ['Web'],
    metric: 'POS 1 + POS 2 = close',
    challenge:
      'Shift close was paper, then a spreadsheet, then an argument. Two tills, taxes, and MTD categories never landed in one place before handover.',
    approach:
      'Shift captures the daily sheet: A/B/C shifts, POS columns, calculated totals, and month-to-date sales items managers already know by name.',
    outcome:
      'Handover is a loaded sheet, not a reconstruction. Exceptions show up before the next shift clocks in.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    slug: 'apex',
    name: 'Apex',
    sector: 'ERP',
    year: '2025',
    title: 'Work, finance, and people on one admin floor.',
    summary: 'An operations ERP — inventory, sales, accounts, payroll, and the dashboard leadership opens first: revenue, invoices, projects, alerts.',
    image: pub('work/erp.png'),
    mesh: 'mesh-aperture',
    layout: 'screen',
    tone: 'light',
    accent: '#2563eb',
    chrome: '#1a1d2d',
    surface: '#eef2f7',
    ink: '#111318',
    span: 'md:col-span-12 lg:col-span-7',
    tags: ['Web', 'Cloud'],
    metric: 'One admin for the whole stack',
    challenge:
      'Inventory, sales, payroll, and accounts each had a login. Alerts died in email. Leadership asked for “the number” and got four.',
    approach:
      'Apex is the floor: a dark ops sidebar, live KPI cards, financial summary, sales orders, and the incomplete-delivery alerts that used to hide in purchasing.',
    outcome:
      'Ops, finance, and people sit in one product. The first screen is the business — not a menu of other systems.',
    stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Azure'],
  },
] as const

export const testimonials = [
  {
    quote:
      'HumanixSoft did not pitch us a fairy tale. They sat in the mess, named the real constraint, and shipped software our teams actually use — not a demo that died after week two.',
    name: 'Muhammad Khalid Aziz',
    role: 'BOD',
  },
  {
    quote:
      'Most vendors disappear after demo day. These people stayed through the ugly week after launch — which is when you actually learn who you hired.',
    name: 'Rashid Aziz',
    role: 'BOD',
  },
  {
    quote:
      'Finally a team that treats design and engineering as one craft. The product looks considered because it was built that way, not decorated at the end.',
    name: 'Aamir Mubeen',
    role: 'CEO',
  },
] as const

export const values = [
  {
    title: 'Craft over theatre',
    copy: 'Pretty decks are easy. Durable software is not. We spend our energy on the thing users touch.',
  },
  {
    title: 'Clarity is kindness',
    copy: 'We say what we think, estimate in the open, and never hide risk behind jargon.',
  },
  {
    title: 'Small, senior rooms',
    copy: 'Fewer people, more ownership. You will not be billed for a bench you never meet.',
  },
  {
    title: 'Stay for the heat',
    copy: 'Launch is the middle. We remain through production, the first incidents, and the next honest version.',
  },
] as const

export const purpose = [
  {
    title: 'Vision',
    copy: 'To pioneer intelligent technology that bridges human insight and artificial intelligence, creating seamless digital systems that drive sustainable global growth.',
  },
  {
    title: 'Mission',
    copy: 'To engineer innovative software and adaptive AI solutions that streamline complex business operations, optimize workflows, and empower enterprises to scale with clarity, speed, and confidence.',
  },
] as const

export const team = [
  { name: 'Ayan Malik', role: 'Founder, Engineering', initials: 'AM' },
  { name: 'Hira Qureshi', role: 'Design Director', initials: 'HQ' },
  { name: 'Daniel Okonkwo', role: 'Product', initials: 'DO' },
  { name: 'Sarah Chen', role: 'Delivery', initials: 'SC' },
  { name: 'Omar Farooq', role: 'Cloud & Platform', initials: 'OF' },
  { name: 'Elena Rossi', role: 'Mobile', initials: 'ER' },
] as const

export const timeline = [
  { year: '2019', copy: 'HumanixSoft starts as a two-person studio in Karachi, shipping for founders who were tired of agencies that vanished after kickoff.' },
  { year: '2021', copy: 'First dedicated squads. We stop being a “project shop” and become a product partner — still small on purpose.' },
  { year: '2023', copy: 'Work spans fintech, health, and logistics. Remote collaborators join from Europe and West Africa. The forge stays one culture.' },
  { year: '2026', copy: 'Eighty-plus products later, we still take fewer clients than we could. Heat and attention do not scale like a slideshow.' },
] as const

export const jobs = [
  {
    id: 'senior-product-engineer',
    title: 'Senior Product Engineer',
    type: 'Full-time · Remote-friendly',
    location: 'Karachi / Remote',
    blurb: 'Own slices of product end-to-end. TypeScript, taste, and the nerve to disagree early.',
  },
  {
    id: 'product-designer',
    title: 'Product Designer',
    type: 'Full-time · Hybrid',
    location: 'Karachi',
    blurb: 'UX to UI to the awkward questions. You will sit with engineers, not throw files over a wall.',
  },
  {
    id: 'mobile-engineer',
    title: 'Mobile Engineer',
    type: 'Full-time · Remote-friendly',
    location: 'Remote',
    blurb: 'React Native or native. You care about lists, gestures, offline, and how the thing feels in a hand.',
  },
  {
    id: 'platform-engineer',
    title: 'Platform Engineer',
    type: 'Contract-to-hire',
    location: 'Remote',
    blurb: 'Pipelines, environments, and the boring excellence that lets product teams sleep.',
  },
] as const

export const faqs = [
  {
    q: 'How do engagements usually start?',
    a: 'A short discovery — paid, time-boxed, with a written plan. If we are not the right forge, we will say so before anyone wastes a quarter.',
  },
  {
    q: 'Do you take fixed-price projects?',
    a: 'Yes, when the shape is clear. For exploratory work we prefer a monthly squad so scope can move without a change-order opera.',
  },
  {
    q: 'Where is the team based?',
    a: 'The studio is rooted in Karachi, with collaborators across time zones. We work in the open: Slack or Teams, weekly demos, written decisions.',
  },
  {
    q: 'Can you join an existing codebase?',
    a: 'Often. We start with a health check — architecture, tests, and the political map — then earn the right to change things.',
  },
] as const

export const budgets = ['Under $25k', '$25k – $75k', '$75k – $150k', '$150k+', 'Not sure yet'] as const

export const contactServices = [
  'Product engineering',
  'Mobile app',
  'Product design',
  'Cloud & DevOps',
  'AI & automation',
  'Dedicated team',
  'Staff augmentation',
  'Something else',
] as const

export const industries = [
  {
    slug: 'finance',
    title: 'Finance & accounting',
    eyebrow: '01',
    summary: 'Ledgers, access, close, and the numbers leadership will actually trust.',
    copy: 'We build financial systems for teams that cannot afford a guess — user governance, cash, reporting, and the unglamorous controls that survive audit.',
    points: ['Accounting platforms', 'User & role governance', 'Treasury and close', 'Board-ready reporting'],
    related: ['vault', 'apex'],
  },
  {
    slug: 'retail',
    title: 'Retail & operations',
    eyebrow: '02',
    summary: 'Shift close, POS, and the floor that has to balance before anyone goes home.',
    copy: 'Multi-site retail lives on the shift sheet. We design tools operators will use at 11pm — not dashboards that only look good in a pitch.',
    points: ['Daily shift sheets', 'Multi-POS reconciliation', 'Site performance grades', 'Month-to-date ops'],
    related: ['shift', 'relay'],
  },
  {
    slug: 'education',
    title: 'Education',
    eyebrow: '03',
    summary: 'Products students reopen — practice, games, and a path, not a PDF.',
    copy: 'EdTech fails when it is a worksheet in a trench coat. We ship learning products that feel like play and still have a curriculum underneath.',
    points: ['Consumer learning apps', 'Web + Android', 'Leaderboards & challenges', 'Teacher-facing tools'],
    related: ['mathdigits'],
  },
  {
    slug: 'people',
    title: 'People & HR',
    eyebrow: '04',
    summary: 'HRMS that managers open without being asked.',
    copy: 'Leave, attendance, and payroll should not be three tickets. We build people systems for the floor, not only for the HR inbox.',
    points: ['HRMS dashboards', 'Attendance & leave', 'Self-serve employee tools', 'Payroll handoff'],
    related: ['kinship'],
  },
  {
    slug: 'inventory',
    title: 'Inventory & merchandising',
    eyebrow: '05',
    summary: 'Quantity and revenue as one story — not two exports that never agree.',
    copy: 'Category leads should not reconcile units against money after the meeting. We put stock, sales, and the chart they actually use on one board.',
    points: ['Inventory analysis', 'Revenue vs quantity', 'SKU and category views', 'Reorder signals'],
    related: ['harbor'],
  },
  {
    slug: 'enterprise',
    title: 'Enterprise & ERP',
    eyebrow: '06',
    summary: 'Work, finance, and people on one admin floor.',
    copy: 'When every department has a login, leadership asks for “the number” and gets four. We forge the operational layer they open first.',
    points: ['Admin dashboards', 'Sales & inventory', 'Accounts and payroll', 'Ops alerts'],
    related: ['apex'],
  },
] as const

export const techStacks = [
  {
    title: 'Web',
    items: ['TypeScript', 'React', 'Next.js', 'Vue', 'Tailwind CSS', 'GraphQL'],
  },
  {
    title: 'Mobile',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'Prisma'],
  },
  {
    title: 'Cloud',
    items: ['AWS', 'GCP', 'Azure', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  {
    title: 'Data & AI',
    items: ['Python', 'BigQuery', 'LLMs', 'Evaluation harnesses', 'Automation'],
  },
  {
    title: 'Design',
    items: ['Figma', 'UX research', 'Design systems', 'Prototyping'],
  },
] as const

export const hireRoles = [
  { title: 'React / Next.js engineer', stack: 'TypeScript, React, Next.js' },
  { title: 'Node.js engineer', stack: 'Node, PostgreSQL, APIs' },
  { title: 'Mobile engineer', stack: 'React Native or Flutter' },
  { title: 'Product designer', stack: 'UX, UI, Figma' },
  { title: 'QA engineer', stack: 'Automation, regression, release' },
  { title: 'Platform / DevOps', stack: 'AWS, CI/CD, Terraform' },
] as const

export const hireModels = [
  {
    title: 'Staff augmentation',
    time: 'From 2 weeks',
    copy: 'A senior engineer or designer sits in your standup. Your tools, your repo, your rituals — we fill the seat you cannot hire fast enough.',
  },
  {
    title: 'Dedicated squad',
    time: 'Monthly',
    copy: 'A small team that already ships together: product, design, engineering. You get a forge, not a collection of résumés.',
  },
  {
    title: 'Fixed-scope build',
    time: '8–16 weeks',
    copy: 'When the shape is clear. We estimate in the open, cut the theatre, and deliver a product you can click.',
  },
] as const

export const insights = [
  {
    slug: 'dedicated-squads',
    title: 'Dedicated squads beat body shops. Here is why.',
    date: 'Mar 2026',
    read: '6 min',
    eyebrow: 'Delivery',
    summary: 'Hiring five strangers is not a team. The work happens in the space between design, engineering, and the person who owns the outcome.',
    body: [
      'Most software houses sell you people. A React résumé, a Node résumé, a designer who will “join after kickoff.” You assemble them. You become the integration layer. That is not a studio — that is a staffing desk with a nicer website.',
      'A dedicated squad arrives already arguing in the useful way. The designer has shipped with these engineers. The lead has already been wrong in public and corrected the estimate. You do not pay for a warm-up quarter while strangers learn each other’s taste.',
      'We keep squads small on purpose. Fewer people, more ownership, written decisions. If we cannot staff a real team, we say no — we do not invent a bench and bill you for the theatre.',
    ],
  },
  {
    slug: 'discovery-sprint',
    title: 'What a discovery sprint actually produces.',
    date: 'Jan 2026',
    read: '5 min',
    eyebrow: 'Process',
    summary: 'Not a 40-slide deck. A problem you can name, a path with checkpoints, and a prototype you can click.',
    body: [
      'Discovery fails when it is research as performance: interviews nobody reads, a journey map that dies in Notion, a backlog of 90 tickets that all say “P0.”',
      'A useful sprint ends with three things. A constraint you can say out loud. A build plan with dates a grown-up would sign. And a slice of the product in the browser — ugly is fine, imaginary is not.',
      'We time-box it. Two to four weeks, paid, with a written recommendation at the end. If we are the wrong forge, that document still belongs to you.',
    ],
  },
  {
    slug: 'erp-operators-open',
    title: 'Build ERP that operators will actually open.',
    date: 'Nov 2025',
    read: '7 min',
    eyebrow: 'Product',
    summary: 'Enterprise software dies when it is designed for the RFP, not for the person closing a shift at 11pm.',
    body: [
      'Operators do not care that your module map matches the RFP. They care whether the shift sheet balances, whether attendance is on the home screen, whether “the number” is one number.',
      'We shadow the floor before we draw boxes. Shift close, password expiry queues, quantity versus revenue — the unglamorous screens that keep a business honest. Then we put those on the first page, not behind a six-level menu.',
      'Pretty admin themes are easy. Software people trust at month-end is not. That is the work we take.',
    ],
  },
] as const

export const offices = [
  { city: 'Karachi', region: 'Pakistan', note: 'Studio · shipping worldwide' },
  { city: 'Remote', region: 'Worldwide', note: 'Collaborators across time zones' },
] as const
