import {
  HeartPulse, Landmark, GraduationCap, ShoppingBag, ShoppingCart, Factory, Truck,
  Building2, UtensilsCrossed, Banknote, Wallet, ShieldCheck, HardHat,
  type LucideIcon,
} from "lucide-react";

export type IndustryDef = {
  slug: string;
  icon: LucideIcon;
  name: string;
  hero: string;
  overview: string;
  challenges: { t: string; d: string }[];
  transformation: string[];
  solutions: { t: string; d: string }[];
  recommendedServices: string[];
  technologies: string[];
  benefits: string[];
  caseStudy: { tag: string; title: string; result: string };
};

export const industries: IndustryDef[] = [
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    hero: "Modern software for shop floors, supply chains and the people who run them.",
    overview:
      "We help manufacturers replace spreadsheets, disconnected legacy systems and paper travellers with modern ERP, MES and shop-floor apps — engineered for uptime, audit and reality on the floor.",
    challenges: [
      { t: "Disconnected shop-floor data", d: "Machine, worker and inventory data trapped in silos, invisible to planning." },
      { t: "Manual month-end", d: "Days of reconciliation because inventory, purchase and finance don't talk." },
      { t: "Compliance overhead", d: "GST, statutory and quality audits requiring pdf-and-email trails." },
    ],
    transformation: [
      "Unified ERP replacing 3–5 legacy tools", "Real-time shop-floor visibility",
      "Automated GST and statutory reporting", "Predictive maintenance via IoT + AI",
    ],
    solutions: [
      { t: "Manufacturing ERP", d: "Inventory, BOM, production, finance and HR unified in one modular platform." },
      { t: "MES & shop-floor apps", d: "Operator tablets, downtime capture, OEE dashboards and quality gates." },
      { t: "Vendor & procurement portal", d: "RFQ, PO, GRN and payment status in one flow — no more emails and PDFs." },
    ],
    recommendedServices: ["erp-solutions", "software-development", "automation", "cloud-devops"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS IoT", "Grafana", "Metabase"],
    benefits: ["99% inventory accuracy", "Real-time production visibility", "80% faster month-end close", "Audit-ready compliance"],
    caseStudy: { tag: "Manufacturing", title: "Modular Manufacturing ERP", result: "Inventory accuracy from 82% → 99.1%; month-end close 6d → 4h." },
  },
  {
    slug: "healthcare",
    icon: HeartPulse,
    name: "Healthcare",
    hero: "Software that respects patient safety, clinician time and data regulation.",
    overview:
      "We build hospital, clinic and diagnostics platforms with the compliance, uptime and clinician usability that healthcare demands — from OPD and EMR to lab and pharmacy integration.",
    challenges: [
      { t: "Fragmented patient records", d: "OPD, IPD, lab and pharmacy in separate systems no clinician can query fast." },
      { t: "Compliance risk", d: "HIPAA-, DPDP- and NABH-grade audit requirements not met by generic tools." },
      { t: "Long wait times", d: "Manual registration, billing and discharge processes blocking beds." },
    ],
    transformation: [
      "Unified EMR & HIS", "Digital OPD queue and appointments",
      "Lab & pharmacy integration", "Tele-consult & patient portal",
    ],
    solutions: [
      { t: "Hospital ERP / HIS", d: "OPD, IPD, billing, lab, pharmacy, radiology and finance in one platform." },
      { t: "Patient portal & app", d: "Appointments, records, tele-consult and payments in one experience." },
      { t: "Diagnostics platform", d: "Lab order-to-report with barcoded sampling, LIS integration and instant delivery." },
    ],
    recommendedServices: ["erp-solutions", "mobile-development", "ai-solutions", "cloud-devops"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "HL7 FHIR", "AWS"],
    benefits: ["HIPAA & DPDP aligned", "Sub-2-minute registration", "Fewer clinician clicks", "Real-time bed & OT visibility"],
    caseStudy: { tag: "Hospital", title: "Multi-speciality Hospital HIS", result: "Average patient registration cut from 12 → 90 seconds." },
  },
  {
    slug: "education",
    icon: GraduationCap,
    name: "Education",
    hero: "School and campus platforms that teachers, parents and admins all actually use.",
    overview:
      "We build ERP, LMS and parent-engagement platforms for K-12 schools, coaching institutes and universities — replacing the ten apps most campuses juggle today.",
    challenges: [
      { t: "Ten apps, one campus", d: "Attendance, fees, LMS, transport and comms all in different tools with different logins." },
      { t: "Weak parent engagement", d: "Parents get information last, over WhatsApp forwards." },
      { t: "Admissions leakage", d: "Enquiries lost between forms, calls and offline visits." },
    ],
    transformation: [
      "Unified school ERP + LMS", "Parent app with real-time updates",
      "Admissions CRM with WhatsApp", "Digital assessments & reports",
    ],
    solutions: [
      { t: "School / Campus ERP", d: "Attendance, fees, exams, transport, HR and finance in one platform." },
      { t: "LMS & digital classroom", d: "Assignments, quizzes, video lessons and analytics for teachers." },
      { t: "Admissions CRM", d: "Enquiry to enrolment pipeline with WhatsApp, email and call integration." },
    ],
    recommendedServices: ["erp-solutions", "web-development", "mobile-development", "crm-development"],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "WhatsApp Cloud API"],
    benefits: ["Single login for staff, students, parents", "Fees collection up 20%+", "Real-time parent engagement", "Fewer manual reports"],
    caseStudy: { tag: "Campus", title: "Integrated School ERP + Parent App", result: "Parent app adoption 92% in first term." },
  },
  {
    slug: "retail",
    icon: ShoppingBag,
    name: "Retail",
    hero: "Store, warehouse and channel — running as one system, not five.",
    overview:
      "We build retail platforms that unify POS, e-commerce, inventory and CRM — so a customer, an item and an order look the same everywhere they appear.",
    challenges: [
      { t: "Inventory blind spots", d: "Store, warehouse and online quantities not reconciled — oversells and stockouts." },
      { t: "Split customer view", d: "The same customer looks like three different people across POS, app and email." },
      { t: "Slow store operations", d: "Manual GRN, discount overrides and end-of-day closing eating hours." },
    ],
    transformation: [
      "Omnichannel inventory", "Unified customer & loyalty",
      "Modern cloud POS", "Predictive replenishment",
    ],
    solutions: [
      { t: "Retail POS & inventory", d: "Cloud POS with offline mode, tied to real-time inventory and finance." },
      { t: "D2C storefront", d: "Fast, SEO-ready storefront tied to the same catalogue and stock as stores." },
      { t: "Loyalty & CRM", d: "One profile across POS and online; automated lifecycle across WhatsApp and email." },
    ],
    recommendedServices: ["e-commerce", "erp-solutions", "crm-development", "mobile-development"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Razorpay", "Twilio"],
    benefits: ["Zero-oversell inventory", "Unified customer view", "Store-to-online conversion", "Faster checkouts"],
    caseStudy: { tag: "Retail", title: "Multi-store POS + D2C Rebuild", result: "Store throughput up 22%, online conversion up 38%." },
  },
  {
    slug: "e-commerce",
    icon: ShoppingCart,
    name: "E-Commerce",
    hero: "D2C, B2B and marketplace commerce engineered for growth-stage brands.",
    overview:
      "From storefront rebuilds to full marketplace platforms, we help commerce teams move faster on speed, conversion and the operational plumbing behind the storefront.",
    challenges: [
      { t: "Slow storefronts", d: "LCPs above 2.5s eating ad budgets and rankings." },
      { t: "Ops behind the storefront", d: "Orders, returns and finance still lived in spreadsheets and email." },
      { t: "Rigid vendor stacks", d: "Themes and apps that can't express your brand or catalogue needs." },
    ],
    transformation: [
      "Headless / composable commerce", "Automated order-to-cash",
      "Personalised discovery", "Marketplace onboarding",
    ],
    solutions: [
      { t: "Headless storefronts", d: "Sub-1s LCP storefronts on Next.js, tied to Shopify, Medusa or your own catalogue." },
      { t: "Marketplace platform", d: "Multi-vendor catalogue, payouts, ratings and dispute management." },
      { t: "OMS & returns", d: "Order orchestration across warehouses, marketplaces and D2C, with returns and refunds automated." },
    ],
    recommendedServices: ["e-commerce", "web-development", "digital-marketing", "cloud-devops"],
    technologies: ["Next.js", "Shopify Hydrogen", "Medusa", "PostgreSQL", "Cloudflare", "Razorpay"],
    benefits: ["Sub-1s storefronts", "Conversion +25–40%", "Marketplace-ready", "Ops automated"],
    caseStudy: { tag: "D2C", title: "Headless Storefront Rebuild", result: "LCP 3.1s → 0.9s, conversion +38%." },
  },
  {
    slug: "logistics",
    icon: Truck,
    name: "Logistics",
    hero: "Fleet, warehouse and last-mile — visible, automated and on time.",
    overview:
      "We build TMS, WMS and last-mile platforms for logistics operators, e-commerce shippers and 3PLs — with the tracking, ops and finance modules that keep trucks and margins moving.",
    challenges: [
      { t: "Where is my shipment?", d: "Fragmented tracking across partners, hubs and last mile." },
      { t: "Manual dispatch", d: "Excel-based route planning and phone-based driver coordination." },
      { t: "Reconciliation pain", d: "Freight, GRNs and POD reconciliation eating finance team hours." },
    ],
    transformation: [
      "Real-time shipment visibility", "Automated route planning",
      "Driver app with e-POD", "Automated freight settlement",
    ],
    solutions: [
      { t: "TMS", d: "Order-to-POD lifecycle with routing, hub ops and multi-partner tracking." },
      { t: "WMS", d: "Inbound, put-away, pick-pack-ship and cycle counts with barcode / RFID." },
      { t: "Driver & customer apps", d: "Real-time updates, e-POD, exceptions and support in the customer's pocket." },
    ],
    recommendedServices: ["software-development", "mobile-development", "cloud-devops", "api-development"],
    technologies: ["Node.js", "React Native", "PostgreSQL", "Redis", "Kafka", "AWS"],
    benefits: ["Real-time visibility", "Route cost -15–25%", "Freight reconciliation automated", "Higher on-time delivery"],
    caseStudy: { tag: "3PL", title: "3PL TMS + WMS Rebuild", result: "On-time delivery from 84% → 97%." },
  },
  {
    slug: "real-estate",
    icon: Building2,
    name: "Real Estate",
    hero: "CRMs, portals and ops platforms for developers, brokers and property managers.",
    overview:
      "We help real-estate businesses turn WhatsApp-driven, spreadsheet-run operations into structured CRMs, sales portals and post-sales platforms.",
    challenges: [
      { t: "Leads lost fast", d: "Enquiries arrive across portals, WhatsApp and phone — many never reach a rep." },
      { t: "Fragmented ops", d: "Sales, CRM, agreements, collections and after-sales in five different systems." },
      { t: "No customer visibility", d: "Buyers can't see construction, payments or documents without calling." },
    ],
    transformation: [
      "Unified lead & sales CRM", "Digital agreements & payments",
      "Buyer portal & app", "Broker channel platform",
    ],
    solutions: [
      { t: "Real-estate CRM", d: "Lead capture across portals, scoring, site visits, bookings and post-sales." },
      { t: "Buyer portal & app", d: "Payment schedules, agreements, construction updates and support requests." },
      { t: "Broker channel", d: "Broker onboarding, inventory access, incentives and payouts in one platform." },
    ],
    recommendedServices: ["crm-development", "web-development", "mobile-development", "automation"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Twilio", "WhatsApp Cloud API", "Razorpay"],
    benefits: ["Lead response under 5 minutes", "Higher site-visit conversion", "Buyer self-service", "Channel visibility"],
    caseStudy: { tag: "Developer", title: "Sales CRM + Buyer App", result: "Lead-to-site-visit conversion up 43%." },
  },
  {
    slug: "hospitality",
    icon: UtensilsCrossed,
    name: "Hospitality",
    hero: "Guest, kitchen and reservation systems that feel effortless to run.",
    overview:
      "We build POS, PMS and guest apps for restaurants, cloud kitchens and hotels — with the integrations and speed that hospitality operations demand.",
    challenges: [
      { t: "Peak-hour chaos", d: "POS lag, KOT confusion and manual reservation books hurting service." },
      { t: "Fragmented delivery ops", d: "Zomato, Swiggy and own channels not reconciled with inventory or finance." },
      { t: "Guest data siloed", d: "The same guest looks new every time they walk in." },
    ],
    transformation: [
      "Cloud POS + KDS", "Unified aggregator + own-channel ops",
      "Guest CRM & loyalty", "Property management + booking engine",
    ],
    solutions: [
      { t: "Restaurant POS + KDS", d: "Cloud POS with offline mode, KDS, table management and inventory tie-in." },
      { t: "Cloud kitchen ops", d: "Unified order queue across Zomato, Swiggy and own app with wastage and yield tracking." },
      { t: "Hotel PMS + booking", d: "Reservations, front desk, F&B and channel manager in one platform." },
    ],
    recommendedServices: ["software-development", "mobile-development", "e-commerce", "cloud-devops"],
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Redis"],
    benefits: ["Faster table turnover", "Aggregator ops automated", "Higher repeat visits", "Real-time floor visibility"],
    caseStudy: { tag: "F&B", title: "Restaurant Chain Cloud POS", result: "Table turnover +18%, aggregator error rate -74%." },
  },
  {
    slug: "finance",
    icon: Landmark,
    name: "Finance",
    hero: "Regulated software for lenders, wealth managers and fintech operators.",
    overview:
      "We build loan management, wealth and treasury systems for regulated financial businesses — engineered for audit, availability and speed of decision.",
    challenges: [
      { t: "Regulatory pressure", d: "RBI, SEBI and DPDP requirements make legacy platforms hard to change safely." },
      { t: "Manual underwriting", d: "Rule-based decisioning done in spreadsheets and email chains." },
      { t: "Poor customer app UX", d: "White-label apps that feel a decade behind consumer expectations." },
    ],
    transformation: [
      "Automated loan origination & decisioning", "Consented data pipelines (Account Aggregator)",
      "Modern investor & customer apps", "Real-time compliance dashboards",
    ],
    solutions: [
      { t: "Loan management system", d: "Origination, underwriting, disbursal, servicing and collections in one platform." },
      { t: "Wealth & advisory", d: "Portfolio, transactions, reporting and RM tools for wealth managers." },
      { t: "Customer app", d: "Onboarding, KYC, loans, investments and support — production-grade UX." },
    ],
    recommendedServices: ["software-development", "mobile-development", "ai-solutions", "cloud-devops"],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Kafka", "AWS", "Account Aggregator"],
    benefits: ["Underwriting time -60–80%", "Audit-ready by default", "Modern customer UX", "Real-time compliance"],
    caseStudy: { tag: "NBFC", title: "Loan Origination Platform", result: "Approval time from 3 days → 22 minutes." },
  },
  {
    slug: "banking",
    icon: Banknote,
    name: "Banking",
    hero: "Modern banking experiences on top of core systems that can't move fast.",
    overview:
      "We build customer apps, digital onboarding, agent banking platforms and API layers that let banks and co-op societies ship modern experiences without touching the core.",
    challenges: [
      { t: "Legacy core", d: "Core systems that can't ship features at consumer-app speed." },
      { t: "Fragmented channels", d: "Branch, ATM, app and web are separate experiences with different data." },
      { t: "Slow onboarding", d: "KYC and account opening still requires branch visits." },
    ],
    transformation: [
      "Digital onboarding & video KYC", "Unified omnichannel banking",
      "Agent & business banking apps", "Middleware & API layer over core",
    ],
    solutions: [
      { t: "Digital onboarding", d: "Aadhaar / VKYC, PAN, penny-drop and consented data — account in minutes." },
      { t: "Customer & business apps", d: "Consumer banking, corporate banking and lending in modern app UX." },
      { t: "Core API middleware", d: "A stable API layer above legacy core so digital teams can ship independently." },
    ],
    recommendedServices: ["software-development", "mobile-development", "api-development", "cloud-devops"],
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Kong", "AWS"],
    benefits: ["Faster feature shipping", "Consumer-grade UX", "Straight-through onboarding", "Compliant by design"],
    caseStudy: { tag: "Co-op Bank", title: "Digital Banking App", result: "Account opening from 3 days → 6 minutes." },
  },
  {
    slug: "insurance",
    icon: ShieldCheck,
    name: "Insurance",
    hero: "Digital-first insurance — from quote to claim, without the paperwork.",
    overview:
      "We build customer, agent and claims platforms for insurers, brokers and TPAs — replacing PDF-and-email workflows with clean digital journeys.",
    challenges: [
      { t: "Paper-driven claims", d: "Claims that take weeks because everything moves as scanned PDFs." },
      { t: "Agent friction", d: "Agents drowning in portals, ledgers and reconciliation calls." },
      { t: "Poor customer experience", d: "Buying insurance feels harder than buying a car." },
    ],
    transformation: [
      "Digital quote-to-issue", "Straight-through claims",
      "Agent super-app", "AI-assisted document processing",
    ],
    solutions: [
      { t: "Digital sales platform", d: "Quote, KYC, payment and policy issuance in one flow across web and app." },
      { t: "Agent super-app", d: "Leads, quotes, commissions and support in one place for the field force." },
      { t: "Claims automation", d: "OCR + AI on documents, rule-based decisioning and human review only for edge cases." },
    ],
    recommendedServices: ["software-development", "ai-solutions", "mobile-development", "automation"],
    technologies: ["Next.js", "Python", "Node.js", "PostgreSQL", "AWS", "OpenAI"],
    benefits: ["Straight-through issuance", "Claims cycle -60%+", "Higher agent productivity", "Better customer NPS"],
    caseStudy: { tag: "Insurer", title: "Claims Automation Platform", result: "Average claim cycle from 21 days → 5 days." },
  },
  {
    slug: "construction",
    icon: HardHat,
    name: "Construction",
    hero: "Project, procurement and site software for the way construction actually runs.",
    overview:
      "We build project management, procurement and site tracking platforms for developers, EPC and infra teams — replacing WhatsApp-run sites with structured, auditable operations.",
    challenges: [
      { t: "Site vs office gap", d: "What's happening on site rarely matches what the office thinks is happening." },
      { t: "Procurement leakage", d: "Purchase decisions and rate reconciliation done outside the system." },
      { t: "Slow decisioning", d: "Delays cost lakhs a day, and the data to decide sits in inboxes." },
    ],
    transformation: [
      "Site app with daily progress", "Procurement + vendor portal",
      "Project cost & schedule visibility", "Digital drawings & approvals",
    ],
    solutions: [
      { t: "Project management", d: "Schedule, cost, RA bills and BOQ tracked with real-time status from site." },
      { t: "Site app", d: "Daily progress, safety, materials and manpower captured from site on mobile." },
      { t: "Procurement platform", d: "Indent, RFQ, PO, GRN, payments — a single system for site and finance." },
    ],
    recommendedServices: ["software-development", "mobile-development", "erp-solutions", "automation"],
    technologies: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS"],
    benefits: ["Real-time project cost", "Fewer schedule slips", "Procurement leakage plugged", "Digital audit trail"],
    caseStudy: { tag: "Developer", title: "Project & Procurement Platform", result: "RA bill cycle from 22 → 6 days." },
  },
];

export const industriesBySlug: Record<string, IndustryDef> = Object.fromEntries(
  industries.map((i) => [i.slug, i]),
);
