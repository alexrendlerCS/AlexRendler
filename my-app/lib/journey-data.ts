export interface Project {
  id: string;
  title: string;
  year: number;
  summary: string;
  skillsGained: string[];
  tags: string[];
  links: { label: string; url: string }[];
  impact: string[];
  status: "completed" | "in_progress" | "planned";
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  weightByGoal: Record<string, number>;
  tags: string[];
  proficiency: number; // 0-100
  status: "locked" | "partial" | "unlocked";
}

export interface Goal {
  id: string;
  title: string;
  status: "achieved" | "in_progress" | "future";
  tags: string[];
  description: string;
  progress: number; // 0-100
}

export interface Edge {
  id: string;
  from: string;
  to: string;
  type: "project->skill" | "skill->goal" | "skill->skill";
  weight?: number;
}

export const projects: Project[] = [
  {
    id: "bells-bones",
    title: "Bells and Bones Online Shop",
    year: 2022,
    summary:
      "First paid freelance project - built an e-commerce site with Stripe integration",
    skillsGained: [
      "html-css",
      "responsive-ui",
      "ecommerce",
      "stripe",
      "seo-basics",
    ],
    tags: ["freelance", "ecommerce", "client-work"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "First paid freelance project",
      "Learned client collaboration",
      "Responsive design fundamentals",
    ],
    status: "completed",
  },
  {
    id: "corevybe",
    title: "CoreVybe Care Provider Solutions",
    year: 2022,
    summary: "Custom wellness company website with accessibility focus",
    skillsGained: [
      "web-dev",
      "accessibility",
      "seo",
      "content",
      "client-communication",
    ],
    tags: ["freelance", "wellness", "client-work"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "Built custom wellness company site",
      "Early client management experience",
      "Accessibility focus",
    ],
    status: "completed",
  },
  {
    id: "budget-tracker",
    title: "Budget Tracker",
    year: 2023,
    summary:
      "Full-stack expense tracking app with JWT auth and data visualization",
    skillsGained: [
      "fastapi",
      "jwt-auth",
      "react",
      "tailwind",
      "data-viz",
      "expense-tracking",
    ],
    tags: ["fullstack", "finance", "personal-project"],
    links: [
      { label: "Demo", url: "https://youtu.be/eZ6gRU0800c" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "Backend security implementation",
      "User dashboard building",
      "Finance + dev combination",
    ],
    status: "completed",
  },
  {
    id: "statsx",
    title: "StatsX – Sports Analyzer",
    year: 2023,
    summary:
      "Full-stack sports analytics platform with prediction logic and real-time charts",
    skillsGained: [
      "fullstack",
      "mysql",
      "web-scraping",
      "api-integration",
      "docker",
      "prediction-logic",
      "charts",
    ],
    tags: ["fullstack", "sports", "analytics", "personal-project"],
    links: [
      { label: "Demo", url: "https://www.youtube.com/watch?v=cnReBkbceek" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "Full product ownership",
      "Scalable DB design",
      "Real-time analytics",
    ],
    status: "completed",
  },
  {
    id: "nexus",
    title: "Nexus – Crypto Brokerage",
    year: 2023,
    summary:
      "Team-based crypto platform with AI analysis and role-based authentication",
    skillsGained: [
      "team-dev",
      "agile",
      "postgresql",
      "supabase",
      "role-auth",
      "ai-analysis",
      "finance",
    ],
    tags: ["team", "crypto", "ai", "finance"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "First agile team experience",
      "Deadline management",
      "Trust building",
      "Product architecture",
    ],
    status: "completed",
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    year: 2023,
    summary: "NLP-powered resume optimization using OpenAI API and Flask",
    skillsGained: [
      "nlp",
      "openai-api",
      "flask",
      "resume-parsing",
      "llm-integration",
    ],
    tags: ["ai", "nlp", "personal-project"],
    links: [
      { label: "Demo", url: "https://youtu.be/v4e7dGRmSlI" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "First LLM real-world app",
      "Applied prompt engineering",
      "Job-matching problem solving",
    ],
    status: "completed",
  },
  {
    id: "trading-bot",
    title: "Automated Stock Trading Bot",
    year: 2023,
    summary: "ML-powered trading algorithm with NLP analysis and backtesting",
    skillsGained: [
      "python",
      "ml-prediction",
      "nlp",
      "apis",
      "finance-analytics",
      "docker",
    ],
    tags: ["ai", "ml", "finance", "personal-project"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "Algorithmic trading",
      "Modular APIs",
      "Finance-focused ML",
      "Backtesting",
    ],
    status: "completed",
  },
  {
    id: "trainerdev",
    title: "TrainerDev – Custom Sites for Fitness Coaches",
    year: 2024,
    summary:
      "SaaS platform for fitness coaches with payment integration and client portals",
    skillsGained: [
      "nextjs",
      "supabase",
      "stripe",
      "tailwind",
      "vercel",
      "shadcn-ui",
      "seo",
      "payment-integration",
      "client-portals",
    ],
    tags: ["saas", "fitness", "client-work", "fullstack"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "SaaS-style platform",
      "Marketing + functionality",
      "Scalable trainer websites",
    ],
    status: "completed",
  },
  {
    id: "fitness-trainer",
    title: "Fitness Trainer Platform",
    year: 2024,
    summary:
      "Multi-trainer scheduling system with OAuth and Google Calendar integration",
    skillsGained: [
      "fullstack",
      "role-auth",
      "oauth",
      "scheduling",
      "google-calendar-api",
    ],
    tags: ["fitness", "scheduling", "enterprise"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "Multi-trainer scaling",
      "Session booking",
      "Contract flows",
      "Enterprise-ready backend",
    ],
    status: "completed",
  },
  {
    id: "aicademy",
    title: "Aicademy – AI Tutor for K–12 Education",
    year: 2024,
    summary:
      "Adaptive tutoring platform with gamification and performance tracking",
    skillsGained: [
      "supabase",
      "react",
      "openai-api",
      "prompt-engineering",
      "nlp",
      "data-viz",
      "edtech-ux",
    ],
    tags: ["ai", "edtech", "personal-project"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "Adaptive tutoring",
      "Gamification (XP/levels)",
      "Student performance tracking",
    ],
    status: "completed",
  },
  {
    id: "seo-insights",
    title: "SEO Insights Project",
    year: 2024,
    summary:
      "AI-driven SEO optimization with keyword clustering and client dashboards",
    skillsGained: [
      "python",
      "nlp",
      "llms",
      "data-viz",
      "google-ads-api",
      "prompt-engineering",
      "client-work",
    ],
    tags: ["ai", "seo", "client-work"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "AI-driven SEO optimization",
      "Keyword clustering",
      "Client-facing dashboards",
    ],
    status: "completed",
  },
  {
    id: "botanically-crafted",
    title: "Botanically Crafted SEO (Client Work)",
    year: 2024,
    summary:
      "Local SEO growth strategy with content and technical optimization",
    skillsGained: [
      "seo-copywriting",
      "backlinking",
      "keyword-optimization",
      "gbp-optimization",
      "analytics",
    ],
    tags: ["seo", "client-work", "local"],
    links: [
      { label: "Demo", url: "#" },
      { label: "Case Study", url: "#" },
    ],
    impact: [
      "Local SEO growth strategy",
      "Content + technical SEO",
      "Client reporting",
    ],
    status: "in_progress",
  },
  {
    id: "claimsconnect",
    title: "ClaimsConnect (SecondGlance.ai)",
    year: 2024,
    summary:
      "Law firm platform with claim lookup, chatbot, and backend automations",
    skillsGained: [
      "nextjs",
      "supabase",
      "rls-security",
      "n8n-automation",
      "api-integrations",
      "seo",
      "client-dashboards",
    ],
    tags: ["enterprise", "legal", "automation", "client-work"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "Real-world law firm platform",
      "Claim lookup + chatbot",
      "Backend automations",
    ],
    status: "in_progress",
  },
  {
    id: "realty-edge",
    title: "Realty Edge (Real Estate Platform)",
    year: 2024,
    summary:
      "Real estate lead management with CRM integrations and real-time dashboards",
    skillsGained: [
      "n8n-automation",
      "crm-integrations",
      "backend-data-flows",
      "real-time-dashboards",
    ],
    tags: ["enterprise", "real-estate", "automation", "client-work"],
    links: [
      { label: "Demo", url: "#" },
      { label: "GitHub", url: "#" },
    ],
    impact: [
      "Connecting real estate leads",
      "High equity identification",
      "Scalable backend pipelines",
    ],
    status: "in_progress",
  },
];

export const skills: Skill[] = [
  // Foundation Skills
  {
    id: "html-css",
    title: "HTML/CSS",
    description: "Core web development fundamentals",
    weightByGoal: { "fullstack-developer": 0.8, "seo-engineer": 0.6 },
    tags: ["frontend", "web"],
    proficiency: 95,
    status: "unlocked",
  },
  {
    id: "responsive-ui",
    title: "Responsive UI Design",
    description: "Mobile-first design principles and responsive layouts",
    weightByGoal: { "fullstack-developer": 0.7, "ui-ux-designer": 0.9 },
    tags: ["frontend", "design"],
    proficiency: 90,
    status: "unlocked",
  },
  {
    id: "javascript",
    title: "JavaScript/TypeScript",
    description: "Modern JavaScript development with TypeScript",
    weightByGoal: { "fullstack-developer": 0.9, "ai-engineer": 0.6 },
    tags: ["frontend", "backend"],
    proficiency: 85,
    status: "unlocked",
  },
  {
    id: "react",
    title: "React Ecosystem",
    description: "React, Next.js, and modern frontend development",
    weightByGoal: { "fullstack-developer": 0.8, "frontend-engineer": 0.9 },
    tags: ["frontend", "react"],
    proficiency: 88,
    status: "unlocked",
  },
  {
    id: "python",
    title: "Python Development",
    description: "Python programming for web, data, and AI applications",
    weightByGoal: {
      "ai-engineer": 0.9,
      "data-engineer": 0.8,
      "fullstack-developer": 0.6,
    },
    tags: ["backend", "ai", "data"],
    proficiency: 92,
    status: "unlocked",
  },
  {
    id: "fastapi",
    title: "FastAPI",
    description: "Modern Python web framework for APIs",
    weightByGoal: { "fullstack-developer": 0.7, "backend-engineer": 0.8 },
    tags: ["backend", "api"],
    proficiency: 85,
    status: "unlocked",
  },
  {
    id: "supabase",
    title: "Supabase + RLS",
    description: "PostgreSQL-based backend with Row Level Security",
    weightByGoal: {
      "fullstack-developer": 0.8,
      "backend-engineer": 0.9,
      "ai-engineer": 0.6,
    },
    tags: ["backend", "database", "security"],
    proficiency: 88,
    status: "unlocked",
  },
  {
    id: "seo-basics",
    title: "SEO Fundamentals",
    description: "Search engine optimization basics and technical SEO",
    weightByGoal: { "seo-engineer": 0.9, "fullstack-developer": 0.5 },
    tags: ["seo", "marketing"],
    proficiency: 75,
    status: "unlocked",
  },

  // AI & ML Skills
  {
    id: "nlp",
    title: "Natural Language Processing",
    description: "Text processing and language understanding",
    weightByGoal: { "ai-engineer": 0.9, "nlp-engineer": 0.95 },
    tags: ["ai", "nlp"],
    proficiency: 80,
    status: "unlocked",
  },
  {
    id: "openai-api",
    title: "OpenAI API Integration",
    description: "Large language model integration and prompt engineering",
    weightByGoal: { "ai-engineer": 0.9, "prompt-engineer": 0.95 },
    tags: ["ai", "llm"],
    proficiency: 85,
    status: "unlocked",
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    description: "Designing effective prompts for LLMs",
    weightByGoal: { "ai-engineer": 0.8, "prompt-engineer": 0.95 },
    tags: ["ai", "llm"],
    proficiency: 82,
    status: "unlocked",
  },
  {
    id: "ml-prediction",
    title: "ML Prediction Logic",
    description: "Machine learning model development and prediction systems",
    weightByGoal: { "ai-engineer": 0.9, "ml-engineer": 0.95 },
    tags: ["ai", "ml"],
    proficiency: 78,
    status: "unlocked",
  },
  {
    id: "data-viz",
    title: "Data Visualization",
    description: "Creating charts and interactive data displays",
    weightByGoal: {
      "data-engineer": 0.8,
      "ai-engineer": 0.6,
      "fullstack-developer": 0.5,
    },
    tags: ["data", "visualization"],
    proficiency: 80,
    status: "unlocked",
  },

  // Advanced Skills
  {
    id: "docker",
    title: "Docker & Deployment",
    description: "Containerization and deployment automation",
    weightByGoal: {
      "devops-engineer": 0.9,
      "fullstack-developer": 0.6,
      "ai-engineer": 0.5,
    },
    tags: ["devops", "deployment"],
    proficiency: 75,
    status: "unlocked",
  },
  {
    id: "api-integrations",
    title: "API Integrations",
    description: "Third-party service integration and API design",
    weightByGoal: {
      "fullstack-developer": 0.8,
      "backend-engineer": 0.9,
      "ai-engineer": 0.6,
    },
    tags: ["backend", "integration"],
    proficiency: 82,
    status: "unlocked",
  },
  {
    id: "stripe",
    title: "Stripe & Payment Integration",
    description: "Payment processing and subscription management",
    weightByGoal: { "fullstack-developer": 0.7, "fintech-engineer": 0.9 },
    tags: ["payments", "fintech"],
    proficiency: 80,
    status: "unlocked",
  },
  {
    id: "n8n-automation",
    title: "n8n Automation",
    description: "Workflow automation and backend data flows",
    weightByGoal: { "automation-engineer": 0.9, "fullstack-developer": 0.6 },
    tags: ["automation", "workflow"],
    proficiency: 78,
    status: "unlocked",
  },

  // Future Skills (Locked)
  {
    id: "kubernetes",
    title: "Kubernetes",
    description: "Container orchestration and scaling",
    weightByGoal: { "devops-engineer": 0.9, "platform-engineer": 0.95 },
    tags: ["devops", "scaling"],
    proficiency: 0,
    status: "locked",
  },
  {
    id: "tensorflow",
    title: "TensorFlow/PyTorch",
    description: "Deep learning frameworks",
    weightByGoal: { "ai-engineer": 0.8, "ml-engineer": 0.9 },
    tags: ["ai", "deep-learning"],
    proficiency: 0,
    status: "locked",
  },
  {
    id: "graphql",
    title: "GraphQL",
    description: "Modern API query language",
    weightByGoal: { "backend-engineer": 0.8, "fullstack-developer": 0.6 },
    tags: ["backend", "api"],
    proficiency: 0,
    status: "locked",
  },
];

export const goals: Goal[] = [
  {
    id: "ai-engineer",
    title: "AI Engineer",
    status: "in_progress",
    tags: ["ai", "ml", "engineering"],
    description: "Build and deploy AI systems at scale",
    progress: 75,
  },
  {
    id: "fullstack-developer",
    title: "Full-Stack Developer",
    status: "achieved",
    tags: ["web", "fullstack", "engineering"],
    description: "End-to-end web application development",
    progress: 100,
  },
  {
    id: "seo-engineer",
    title: "SEO Engineer",
    status: "in_progress",
    tags: ["seo", "marketing", "technical"],
    description: "Technical SEO and optimization engineering",
    progress: 65,
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    status: "in_progress",
    tags: ["data", "engineering", "pipelines"],
    description: "Build data pipelines and analytics systems",
    progress: 70,
  },
  {
    id: "prompt-engineer",
    title: "Prompt Engineer",
    status: "in_progress",
    tags: ["ai", "llm", "optimization"],
    description: "Specialize in LLM optimization and prompt design",
    progress: 80,
  },
  {
    id: "ml-engineer",
    title: "ML Engineer",
    status: "in_progress",
    tags: ["ai", "ml", "production"],
    description: "Production machine learning systems",
    progress: 60,
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    status: "future",
    tags: ["devops", "automation", "infrastructure"],
    description: "Infrastructure and deployment automation",
    progress: 25,
  },
  {
    id: "platform-engineer",
    title: "Platform Engineer",
    status: "future",
    tags: ["platform", "infrastructure", "scaling"],
    description: "Build developer platforms and tooling",
    progress: 15,
  },
];

export const edges: Edge[] = [
  // Project -> Skill edges
  { id: "p1", from: "bells-bones", to: "html-css", type: "project->skill" },
  {
    id: "p2",
    from: "bells-bones",
    to: "responsive-ui",
    type: "project->skill",
  },
  { id: "p3", from: "bells-bones", to: "seo-basics", type: "project->skill" },
  { id: "p4", from: "corevybe", to: "html-css", type: "project->skill" },
  { id: "p5", from: "corevybe", to: "seo-basics", type: "project->skill" },
  { id: "p6", from: "budget-tracker", to: "python", type: "project->skill" },
  { id: "p7", from: "budget-tracker", to: "fastapi", type: "project->skill" },
  { id: "p8", from: "budget-tracker", to: "react", type: "project->skill" },
  { id: "p9", from: "budget-tracker", to: "data-viz", type: "project->skill" },
  { id: "p10", from: "statsx", to: "python", type: "project->skill" },
  { id: "p11", from: "statsx", to: "react", type: "project->skill" },
  { id: "p12", from: "statsx", to: "data-viz", type: "project->skill" },
  { id: "p13", from: "statsx", to: "docker", type: "project->skill" },
  { id: "p14", from: "nexus", to: "supabase", type: "project->skill" },
  { id: "p15", from: "nexus", to: "api-integrations", type: "project->skill" },
  { id: "p16", from: "ai-resume-builder", to: "nlp", type: "project->skill" },
  {
    id: "p17",
    from: "ai-resume-builder",
    to: "openai-api",
    type: "project->skill",
  },
  {
    id: "p18",
    from: "ai-resume-builder",
    to: "prompt-engineering",
    type: "project->skill",
  },
  { id: "p19", from: "trading-bot", to: "python", type: "project->skill" },
  {
    id: "p20",
    from: "trading-bot",
    to: "ml-prediction",
    type: "project->skill",
  },
  { id: "p21", from: "trading-bot", to: "nlp", type: "project->skill" },
  { id: "p22", from: "trading-bot", to: "docker", type: "project->skill" },
  { id: "p23", from: "trainerdev", to: "react", type: "project->skill" },
  { id: "p24", from: "trainerdev", to: "supabase", type: "project->skill" },
  { id: "p25", from: "trainerdev", to: "stripe", type: "project->skill" },
  { id: "p26", from: "trainerdev", to: "seo-basics", type: "project->skill" },
  { id: "p27", from: "fitness-trainer", to: "react", type: "project->skill" },
  {
    id: "p28",
    from: "fitness-trainer",
    to: "api-integrations",
    type: "project->skill",
  },
  { id: "p29", from: "aicademy", to: "supabase", type: "project->skill" },
  { id: "p30", from: "aicademy", to: "react", type: "project->skill" },
  { id: "p31", from: "aicademy", to: "openai-api", type: "project->skill" },
  {
    id: "p32",
    from: "aicademy",
    to: "prompt-engineering",
    type: "project->skill",
  },
  { id: "p33", from: "aicademy", to: "data-viz", type: "project->skill" },
  { id: "p34", from: "seo-insights", to: "python", type: "project->skill" },
  { id: "p35", from: "seo-insights", to: "nlp", type: "project->skill" },
  { id: "p36", from: "seo-insights", to: "openai-api", type: "project->skill" },
  { id: "p37", from: "seo-insights", to: "data-viz", type: "project->skill" },
  {
    id: "p38",
    from: "botanically-crafted",
    to: "seo-basics",
    type: "project->skill",
  },
  { id: "p39", from: "claimsconnect", to: "react", type: "project->skill" },
  { id: "p40", from: "claimsconnect", to: "supabase", type: "project->skill" },
  {
    id: "p41",
    from: "claimsconnect",
    to: "n8n-automation",
    type: "project->skill",
  },
  {
    id: "p42",
    from: "claimsconnect",
    to: "api-integrations",
    type: "project->skill",
  },
  {
    id: "p43",
    from: "realty-edge",
    to: "n8n-automation",
    type: "project->skill",
  },
  {
    id: "p44",
    from: "realty-edge",
    to: "api-integrations",
    type: "project->skill",
  },

  // Skill -> Goal edges
  {
    id: "s1",
    from: "html-css",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.8,
  },
  {
    id: "s2",
    from: "responsive-ui",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.7,
  },
  {
    id: "s3",
    from: "javascript",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s4",
    from: "react",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.8,
  },
  {
    id: "s5",
    from: "python",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.6,
  },
  {
    id: "s6",
    from: "python",
    to: "ai-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s7",
    from: "python",
    to: "data-engineer",
    type: "skill->goal",
    weight: 0.8,
  },
  {
    id: "s8",
    from: "fastapi",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.7,
  },
  {
    id: "s9",
    from: "supabase",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.8,
  },
  {
    id: "s10",
    from: "supabase",
    to: "ai-engineer",
    type: "skill->goal",
    weight: 0.6,
  },
  {
    id: "s11",
    from: "seo-basics",
    to: "seo-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s12",
    from: "seo-basics",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.5,
  },
  {
    id: "s13",
    from: "nlp",
    to: "ai-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s14",
    from: "nlp",
    to: "nlp-engineer",
    type: "skill->goal",
    weight: 0.95,
  },
  {
    id: "s15",
    from: "openai-api",
    to: "ai-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s16",
    from: "openai-api",
    to: "prompt-engineer",
    type: "skill->goal",
    weight: 0.95,
  },
  {
    id: "s17",
    from: "prompt-engineering",
    to: "ai-engineer",
    type: "skill->goal",
    weight: 0.8,
  },
  {
    id: "s18",
    from: "prompt-engineering",
    to: "prompt-engineer",
    type: "skill->goal",
    weight: 0.95,
  },
  {
    id: "s19",
    from: "ml-prediction",
    to: "ai-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s20",
    from: "ml-prediction",
    to: "ml-engineer",
    type: "skill->goal",
    weight: 0.95,
  },
  {
    id: "s21",
    from: "data-viz",
    to: "data-engineer",
    type: "skill->goal",
    weight: 0.8,
  },
  {
    id: "s22",
    from: "data-viz",
    to: "ai-engineer",
    type: "skill->goal",
    weight: 0.6,
  },
  {
    id: "s23",
    from: "docker",
    to: "devops-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s24",
    from: "docker",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.6,
  },
  {
    id: "s25",
    from: "api-integrations",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.8,
  },
  {
    id: "s26",
    from: "api-integrations",
    to: "backend-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s27",
    from: "api-integrations",
    to: "ai-engineer",
    type: "skill->goal",
    weight: 0.6,
  },
  {
    id: "s28",
    from: "stripe",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.7,
  },
  {
    id: "s29",
    from: "stripe",
    to: "fintech-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s30",
    from: "n8n-automation",
    to: "automation-engineer",
    type: "skill->goal",
    weight: 0.9,
  },
  {
    id: "s31",
    from: "n8n-automation",
    to: "fullstack-developer",
    type: "skill->goal",
    weight: 0.6,
  },

  // Skill -> Skill dependencies
  { id: "d1", from: "html-css", to: "responsive-ui", type: "skill->skill" },
  { id: "d2", from: "javascript", to: "react", type: "skill->skill" },
  { id: "d3", from: "python", to: "fastapi", type: "skill->skill" },
  { id: "d4", from: "nlp", to: "prompt-engineering", type: "skill->skill" },
  { id: "d5", from: "ml-prediction", to: "tensorflow", type: "skill->skill" },
  { id: "d6", from: "docker", to: "kubernetes", type: "skill->skill" },
];

// Helper functions
export const getNodeById = (id: string) => {
  const project = projects.find((p) => p.id === id);
  if (project) return { ...project, type: "project" as const };

  const skill = skills.find((s) => s.id === id);
  if (skill) return { ...skill, type: "skill" as const };

  const goal = goals.find((g) => g.id === id);
  if (goal) return { ...goal, type: "goal" as const };

  return null;
};

export const getConnectedNodes = (nodeId: string) => {
  const connected = edges.filter(
    (edge) => edge.from === nodeId || edge.to === nodeId
  );
  return connected
    .map((edge) => {
      const otherId = edge.from === nodeId ? edge.to : edge.from;
      return getNodeById(otherId);
    })
    .filter(Boolean);
};

export const calculateGoalProgress = (goalId: string) => {
  const goalSkills = edges
    .filter((edge) => edge.type === "skill->goal" && edge.to === goalId)
    .map((edge) => ({ skillId: edge.from, weight: edge.weight || 1 }));

  let totalWeight = 0;
  let weightedProgress = 0;

  goalSkills.forEach(({ skillId, weight }) => {
    const skill = skills.find((s) => s.id === skillId);
    if (skill) {
      totalWeight += weight;
      weightedProgress += (skill.proficiency / 100) * weight;
    }
  });

  return totalWeight > 0
    ? Math.round((weightedProgress / totalWeight) * 100)
    : 0;
};

export const getRecommendedNextSteps = (goalId: string) => {
  const goalSkills = edges
    .filter((edge) => edge.type === "skill->goal" && edge.to === goalId)
    .map((edge) => ({ skillId: edge.from, weight: edge.weight || 1 }));

  return goalSkills
    .map(({ skillId, weight }) => {
      const skill = skills.find((s) => s.id === skillId);
      if (skill && skill.proficiency < 100) {
        return {
          skill,
          weight,
          impact: (weight * (100 - skill.proficiency)) / 100,
        };
      }
      return null;
    })
    .filter(Boolean)
    .sort((a, b) => (b?.impact || 0) - (a?.impact || 0))
    .slice(0, 3);
};
