export const blogPosts = [
  {
    slug: "building-personal-brand",
    title: "Starting My Personal Brand: From Portfolio to Product",
  },
  {
    slug: "seo-integration",
    title: "How I Used AI & Machine Learning to Transform SEO Keyword Strategy",
  },
  {
    slug: "ai-tutor-platform-evolution",
    title: "Pivoting from Just a Chatbot to a Full AI-Powered Learning Platform",
  },
  {
    slug: "admin-dashboard-analytics",
    title: "Visualizing Student Progress in Real Time with Recharts and Supabase",
  },
  {
    slug: "ai-personalization",
    title: "How I'm Personalizing AI Tutoring Based on Skill, Age, and Attempts",
  },
  {
    slug: "intro-skill-assessment",
    title: "Building an Introductory Skill Assessment for Smarter AI Tutoring",
  },
  {
    slug: "statsx-scaling-backend",
    title: "Scaling StatsX: Moving NFL Projections to the Backend and Preparing for AI",
  },
  {
    slug: "ai-tutor-prompt-engineering",
    title: "Designing Prompts to Encourage Learning, Not Replace It",
  },
  {
    slug: "ai-tutor-tracking-correctness",
    title: "How I'm Tracking Student Performance in My AIcademy",
  },
];
export const posts = [
  {
    slug: "seo-integration",
    title: "How I Used AI & Machine Learning to Transform SEO Keyword Strategy",
    description:
      "How I used NLP, clustering, and data analytics to group keywords, score opportunities, and generate intelligent SEO recommendations.",
    date: new Date("2025-06-20"),
    tags: ["AI", "Machine Learning", "SEO", "Data Analytics"],
    thumbnail: "/seo_insight.png",
  },
  {
    slug: "ai-tutor-platform-evolution",
    title:
      "Pivoting from Just a Chatbot to a Full AI-Powered Learning Platform",
    description:
      "How I evolved my AI tutor into a full education platform where teachers can create modules, assign lessons, and guide learning with AI-powered support.",
    date: new Date("2025-05-21"),
    tags: ["EdTech", "AI", "Learning Tools"],
    thumbnail: "/new_aicademy.png",
  },
  {
    slug: "admin-dashboard-analytics",
    title:
      "Visualizing Student Progress in Real Time with Recharts and Supabase",
    description:
      "How I built an interactive Admin Dashboard to track XP, difficulty, and learning trends using Supabase and Recharts.",
    date: new Date("2025-05-04"),
    tags: ["Data Analytics", "EdTech", "Visualization"],
    thumbnail: "/Aicademy.png",
  },
  {
    slug: "ai-personalization",
    title:
      "How I'm Personalizing AI Tutoring Based on Skill, Age, and Attempts",
    description:
      "A behind-the-scenes look at how my tutoring app adjusts tone, complexity, and guidance using student data like grade, XP, and attempt history.",
    date: new Date("2025-05-04"),
    tags: ["AI", "Personalization", "EdTech"],
    thumbnail: "/Aicademy.png",
  },
  {
    slug: "intro-skill-assessment",
    title: "Building an Introductory Skill Assessment for Smarter AI Tutoring",
    description:
      "How I implemented an entry quiz system to personalize learning paths, scale challenge difficulty, and inform parents of student starting levels.",
    date: new Date("2025-05-04"),
    tags: ["AI", "EdTech", "Personalization"],
    thumbnail: "/Aicademy.png",
  },
  {
    slug: "statsx-scaling-backend",
    title:
      "Scaling StatsX: Moving NFL Projections to the Backend and Preparing for AI",
    description:
      "How I transitioned StatsX from frontend-heavy calculations to scalable backend logic, improved the user experience, and laid the foundation for AI-driven player projections.",
    date: new Date("2025-04-25"),
    tags: ["AI", "Backend Development", "Scalability", "Sports Analytics"],
    thumbnail: "/statsx.png",
  },
  {
    slug: "ai-tutor-prompt-engineering",
    title: "Designing Prompts to Encourage Learning, Not Replace It",
    description:
      "How I use prompt engineering in my AIcademy to support deeper student understanding through guided questions and positive feedback.",
    date: new Date("2025-04-22"),
    tags: ["AI", "Prompt Engineering", "EdTech"],
    thumbnail: "/Aicademy.png",
  },
  {
    slug: "ai-tutor-tracking-correctness",
    title: "How I'm Tracking Student Performance in My AIcademy",
    description:
      "Exploring how I detect correct answers, track attempts, and categorize question difficulty to prepare for student performance analytics.",
    date: new Date("2025-04-21"),
    tags: ["AI", "EdTech", "Data Analytics"],
    thumbnail: "/Aicademy.png",
  },
  {
    slug: "building-personal-brand",
    title: "Starting My Personal Brand: From Portfolio to Product",
    description:
      "My journey transforming a portfolio into a personal brand: contract work, building web products, and using SEO and design to prove what I can do for clients.",
    date: new Date("2025-10-29"),
    tags: ["Personal Brand", "Portfolio", "SEO"],
    thumbnail: "/Logos/Logo-Dark.png",
  },
];

export type BlogPost = (typeof posts)[number];
