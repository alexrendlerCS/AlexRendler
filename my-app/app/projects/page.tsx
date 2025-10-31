"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Code,
  Database,
  Server,
  Layout,
  UserCheck,
  BarChart3,
  Globe2,
  User2,
  BrainCog,
  ShieldCheck,
  Users,
  FolderGit2,
  Activity,
} from "lucide-react";

const projects = [
  {
    title: "RealtyEdge - Housing Market Deals & Connections",
    description:
      "I was a full stack developer for a project called RealtyEdge in which I worked with a team to utilize an automated flow of finding the newest on-market houses for under-market price using various workflow automations. This website offered a B2B marketplace connecting potential homebuyers, real estate agents and lenders in the homebuying process and providing them with deals on properties to work with.",
    skills: [
      "Workflow automation",
      "Supabase",
      "Next.js",
      "Tailwind",
      "Data Security",
      "Full Stack",
      "Data Analytics",
      "APIs",
      "Data Viz",
      "Responsive UI",
    ],
    categories: ["Web Development", "Personal Finance", "Data Analyzing"],
  image: "/Realty-Edge-Thumbnail.png",
    icon: <Globe2 className="h-6 w-6" />,
    link: "#",
  },
  {
    title: "TrainerDev: Custom Sites for Fitness Coaches",
    description:
      "A tailored website platform for personal trainers to grow their brand and manage clients. Includes mobile-friendly landing pages, booking flows, payment integrations, SEO optimization, and managed hosting. Built to be customized per trainer, combining marketing and functionality. Designed with dark green, black, and white branding, and optimized for conversions.",
    skills: [
      "Next.js",
      "Stripe",
      "Supabase",
      "Tailwind",
      "Vercel",
      "ShadCN UI",
      "Responsive Design",
      "Landing Page Design",
      "Payment Integration",
      "Client Portals",
      "SEO",
      "Full Stack",
    ],
    categories: ["Web Development"],
    image: "/webfit.png",
    icon: <Code className="h-6 w-6" />,
    link: "https://trainerdev.vercel.app/",
  },
  {
    title: "Fitness Trainer Platform",
    description:
      "A full-stack scheduling and session management platform built for personal trainers and their clients. Includes secure role-based login, contract signing, calendar syncing, session booking, and Stripe-powered payments. Designed to scale for multiple trainers while preserving unique training styles. Developed with Next.js, Supabase, and Stripe, with a sleek UI using ShadCN components.",
    skills: [
      "Next.js",
      "Supabase",
      "Stripe",
      "OAuth",
      "Role-Based Auth",
      "PostgreSQL",
      "Scheduling Systems",
      "Full Stack",
      "UI/UX",
      "Google Calendar API",
      "Authentication",
    ],
    categories: ["Web Development"],
    image: "/fitness_trainer_platform.png",
    icon: <Code className="h-6 w-6" />,
    link: "https://www.coachkilday.com",
  },
  {
    title: "SEO Insights Project",
    description:
      "AI-powered dashboard that analyzes Google Ads performance, clusters underperforming keywords, and uses LLMs to suggest optimizations. Built with Python, NLP, and Prompt Engineering, it features interactive data visualizations, keyword clustering, and OpenAI-generated meta content to enhance SEO strategy.",
    skills: [
      "Full Stack",
      "Python",
      "Data Viz",
      "Charts",
      "NLP",
      "OpenAI API",
      "Prompt Engineering",
      "AI Analysis",
      "SEO",
      "APIs",
      "Client Work",
      "Responsive UI",
      "Content",
    ],
    categories: ["Machine Learning", "Data Analyzing", "AI Integration"],
    image: "/seo_insight.png",
    icon: <BrainCog className="h-6 w-6" />,
    link: "https://github.com/alexrendlerCS/SEO_Insight",
  },
  {
    title: "Aicademy - AI Tutor for K–12 Education",
    description:
      "Designed and developed an interactive AI tutor that guides students aged 9–12 through learning activities using NLP and adaptive prompts. Focused on enhancing understanding through Socratic questioning rather than giving answers. Tracks user performance, XP, and question difficulty through a Supabase backend. Offers personalized feedback and visual progress analytics, designed for future integration into classroom settings.",
    skills: [
      "Full Stack",
      "OpenAI API",
      "Prompt Engineering",
      "Supabase",
      "React",
      "Data Viz",
      "NLP",
      "EdTech",
    ],
    categories: ["AI Integration", "Data Analyzing"],
    image: "/Aicademy.png",
    icon: <BrainCog className="h-6 w-6" />,
    link: "https://github.com/alexrendlerCS/AITutor", // Or your live demo if deployed
  },
  {
    title: "Automated Stock Trading Bot",
    description:
      "Algorithmic trading system that predicts market moves and executes trades automatically using historical data and live signals. Developed in Python with ML prediction logic, finance analytics, and modular API integration, it includes visualized performance dashboards and optional Docker deployment.",
    skills: [
      "Python",
      "Prediction Logic",
      "NLP",
      "AI Analysis",
      "Data Parsing",
      "Finance",
      "APIs",
      "Docker",
      "Full Stack",
      "Charts",
      "Data Viz",
    ],
    categories: ["Machine Learning", "Data Analyzing"],
    image: "/stock_trading_bot.png",
    icon: <Database className="h-6 w-6" />,
    link: "https://aicademy-six.vercel.app/",
  },
  {
    title: "Nexus - Crypto Brokerage",
    description:
      "Collaborated in a development team practicing agile methodologies, meeting weekly to deliver a cryptocurrency advice platform for new investors. Implemented portfolio analysis tools, role-based user access, and integrated live crypto and political sentiment data. This project highlights my ability to work under real deadlines, gain team trust, and contribute to full-scale product direction and architecture.",
    skills: [
      "Team Dev",
      "Agile",
      "Role Auth",
      "PostgreSQL",
      "Supabase",
      "Finance",
      "AI Analysis",
    ],
    categories: ["Data Analyzing", "Personal Finance"],
    image: "/nexus.png",
    icon: <Database className="h-6 w-6" />,
    link: "https://nexus-brokerage.netlify.app/",
  },
  {
    title: "StatsX - Sports Analyzer",
    description:
      "Independently designed and built a sports analytics platform from scratch, showcasing full-stack development with data pipelines, scraping, API integration, and real-time visual insights. Developed a normalized MySQL database structure to run matchup-based analysis and predictions. Demonstrates strong architectural design, problem-solving, and complete project ownership.",
    skills: [
      "Full Stack",
      "Web Scraping",
      "Prediction Logic",
      "MySQL",
      "Docker",
      "Charts",
      "API",
    ],
    categories: ["Data Analyzing", "Web Development"],
    image: "/statsx.png",
    icon: <Database className="h-6 w-6" />,
    link: "https://www.statsx.online/",
  },
  {
    title: "AI Resume Builder",
    description:
      "Built an AI-powered resume analyzer that categorizes content from uploaded resumes and aligns it with job descriptions. Leveraged NLP and OpenAI APIs to generate context-aware edits, demonstrating my curiosity for AI and ability to integrate LLMs in real-world applications. A testament to my initiative to learn and apply new tools.",
    skills: [
      "OpenAI API",
      "NLP",
      "Resume AI",
      "Flask",
      "Data Parsing",
      "API",
      "Full Stack",
    ],
    categories: ["AI Integration"],
    image: "/resumebuilder.png",
    icon: <Code className="h-6 w-6" />,
    link: "https://github.com/alexrendlerCS/AIResume",
  },
  {
    title: "Budget Tracker",
    description:
      "Developed a finance tracker with JWT-based user authentication, category-based spending tracking, and visualized analytics via charts. Emphasized backend logic using FastAPI and frontend polish using React and Tailwind. This project combines my passion for finance, backend security, and user-facing dashboards.",
    skills: [
      "JWT Auth",
      "FastAPI",
      "Data Viz",
      "Expense Tracking",
      "Charts",
      "Finance",
      "Full Stack",
    ],
    categories: ["Personal Finance", "Data Analyzing"],
    image: "/budgettracker.png",
    icon: <Database className="h-6 w-6" />,
    link: "https://github.com/alexrendlerCS/BudgetTracker",
  },
  {
    title: "Bells and Bones Online Shop",
    description:
      "One of my first paid freelance projects, this e-commerce site taught me how to collaborate with a client on requirements that evolved over time. Delivered a fully responsive basket store with secure checkout and clean UX. While simple, it reflects my early ability to ship real-world products.",
    skills: ["Client Work", "E-Commerce", "Responsive UI", "SEO", "Stripe"],
    categories: ["Web Development"],
    image: "/bellsandbones.png",
    icon: <Server className="h-6 w-6" />,
    link: "https://bandb-one.vercel.app/",
  },
  {
    title: "CoreVybe Care Provider Solutions",
    description:
      "Built a custom site for a senior wellness company to improve communication of services and scheduling. Managed all frontend logic while working directly with a small business client. This was one of my earliest paid contracts and shows my growth from contract development to full-stack product delivery.",
    skills: ["Client Work", "SEO", "Accessibility", "Responsive UI", "Content"],
    categories: ["Web Development"],
    image: "/CoreVybe.jpg",
    icon: <Code className="h-6 w-6" />,
    link: "https://corevybe.com/",
  },
  // RealtyEdge moved to top of the list
];

const iconMap: Record<string, JSX.Element> = {
  // Core Technologies
  Python: <Code className="h-4 w-4" />,
  React: <Code className="h-4 w-4" />,
  TypeScript: <Code className="h-4 w-4" />,
  JavaScript: <Code className="h-4 w-4" />,
  HTML: <Layout className="h-4 w-4" />,
  CSS: <Layout className="h-4 w-4" />,
  Flask: <Server className="h-4 w-4" />,
  SQL: <Database className="h-4 w-4" />,
  MySQL: <Database className="h-4 w-4" />,
  Supabase: <Database className="h-4 w-4" />,
  PostgreSQL: <Database className="h-4 w-4" />,
  APIs: <Server className="h-4 w-4" />,
  Docker: <Server className="h-4 w-4" />,
  AWS: <Server className="h-4 w-4" />,

  // Skills / Tags
  "Prompt Engineering": <BrainCog className="h-4 w-4" />,
  EdTech: <UserCheck className="h-4 w-4" />,
  "JWT Auth": <ShieldCheck className="h-4 w-4" />,
  FastAPI: <Server className="h-4 w-4" />,
  Charts: <BarChart3 className="h-4 w-4" />,
  "Data Viz": <BarChart3 className="h-4 w-4" />,
  "Expense Tracking": <Activity className="h-4 w-4" />,
  "OpenAI API": <BrainCog className="h-4 w-4" />,
  "Resume AI": <User2 className="h-4 w-4" />,
  NLP: <BrainCog className="h-4 w-4" />,
  "Data Parsing": <Code className="h-4 w-4" />,
  "Prediction Logic": <BrainCog className="h-4 w-4" />,
  "Web Scraping": <Server className="h-4 w-4" />,
  Stripe: <Layout className="h-4 w-4" />,
  "Client Work": <Users className="h-4 w-4" />,
  SEO: <Globe2 className="h-4 w-4" />,
  "Responsive UI": <Layout className="h-4 w-4" />,
  Accessibility: <UserCheck className="h-4 w-4" />,
  Content: <Layout className="h-4 w-4" />,
  API: <Server className="h-4 w-4" />,
  Finance: <Activity className="h-4 w-4" />,
  "AI Analysis": <BrainCog className="h-4 w-4" />,

  // Soft/Project Skills
  "Team Dev": <Users className="h-4 w-4" />,
  Agile: <FolderGit2 className="h-4 w-4" />,
  "Role Auth": <ShieldCheck className="h-4 w-4" />,
  "Full Stack": <Code className="h-4 w-4" />,
};

// Add new skill icons
iconMap["Workflow automation"] = <Activity className="h-4 w-4" />;
iconMap["Data Security"] = <ShieldCheck className="h-4 w-4" />;

const ProjectDescription = ({ description }: { description: string }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className="mt-4">
      <p
        className={`text-sm mb-2 ${
          !expanded ? "line-clamp-3 min-h-[72px]" : ""
        }`}
      >
        {description}
      </p>
      <div className="flex justify-center">
        <Button
          onClick={toggleExpanded}
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </Button>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    skills: string[];
    categories: string[]; // <-- updated here
    image: string;
    icon: JSX.Element;
    link: string;
  } | null>(null);


  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <Button asChild variant="outline" size="sm">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        <Button
          onClick={() => setFilter("All")}
          variant={filter === "All" ? "default" : "outline"}
        >
          All
        </Button>
        <Button
          onClick={() => setFilter("Machine Learning")}
          variant={filter === "Machine Learning" ? "default" : "outline"}
        >
          Machine Learning
        </Button>
        <Button
          onClick={() => setFilter("Data Analyzing")}
          variant={filter === "Data Analyzing" ? "default" : "outline"}
        >
          Data Analyzing
        </Button>
        <Button
          onClick={() => setFilter("AI Integration")}
          variant={filter === "AI Integration" ? "default" : "outline"}
        >
          AI Integration
        </Button>
        <Button
          onClick={() => setFilter("Personal Finance")}
          variant={filter === "Personal Finance" ? "default" : "outline"}
        >
          Personal Finance
        </Button>
        <Button
          onClick={() => setFilter("Web Development")}
          variant={filter === "Web Development" ? "default" : "outline"}
        >
          Web Development
        </Button>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <div className="flex items-center">
                    {project.icon}
                    <span className="ml-2">{project.title}</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardTitle>
                <CardDescription className="flex flex-wrap gap-2 mt-1 text-sm text-muted-foreground">
                  {project.categories.map((cat) => (
                    <Badge key={cat} variant="secondary" className="text-xs">
                      {cat}
                    </Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="relative w-full h-40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>

                <div className="mt-4">
                  <ProjectDescription description={project.description} />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.skills?.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs px-2 py-0.5 flex items-center"
                    >
                      {iconMap[skill] || <Code className="h-3 w-3 mr-1" />}
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
              <div className="mb-4 flex justify-center items-center">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="link" className="text-primary">
                    View Project
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-background p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold flex items-center">
                {selectedProject.icon}
                <span className="ml-2">{selectedProject.title}</span>
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProject(null)}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
            <div className="relative w-full h-60">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>

            <p className="mt-4 mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Skills Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center"
                  >
                    {iconMap[skill]}
                    <span className="ml-1">{skill}</span>
                  </Badge>
                ))}
              </div>
            </div>
            <Button onClick={() => setSelectedProject(null)} className="w-full">
              Close
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
