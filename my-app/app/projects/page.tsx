"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Terminal,
  GitBranch,
} from "lucide-react";

const projects = [
  {
    title: "Nexus Crypto Brokerage",
    description:
      "Engineered predictive models for cryptocurrency price forecasting using historical data, integrating advanced preprocessing and feature scaling techniques to ensure high model accuracy.",
    technologies: ["SQL", "Python", "React", "TypeScript", "APIs", "Scripts", "Docker", "Svelte"],
    category: "Data Analyzing", 
    image: "/nexus.png",
    icon: <Database className="h-6 w-6" />,
    link: "  https://nexus-brokerage.netlify.app/", // Add the link to the project
  },
  {
    title: "StatsX Sports Analyzer",
    description:
      "A sports analytics website integrating MySQL databases, Docker containers, and AWS EC2 instances for scalable, up-to-date defensive statistics and player projections.",
    technologies: ["SQL", "Python", "React", "TypeScript", "APIs", "AWS", "Docker"],
    category: "Data Analyzing",
    image: "/statsx.png",
    icon: <Database className="h-6 w-6" />,
    link: "https://www.statsx.online/", // Add the link to the project
  },
  {
    title: "AI Resume Builder",
    description:
      "Developed an AI-powered resume generator leveraging natural language processing (NLP) to tailor resumes based on job descriptions, enhancing job application success rates.",
    technologies: ["Python", "AI", "NLP", "Flask", "React", "OpenAI"],
    category: "AI Integration",
    image: "/resumebuilder.png",
    icon: <Code className="h-6 w-6" />,
    link: "https://github.com/alexrendlerCS/AIResume",
  },
  {
    title: "Budget Tracker",
    description:
      "A financial tracking application allowing users to log expenses, categorize spending, and analyze trends over time using a modern Next.js frontend and FastAPI backend.",
    technologies: ["Python", "React", "APIs", "SQL", "React", "TypeScript"],
    category: "Personal Finance",
    image: "/budgettracker.png",
    icon: <Database className="h-6 w-6" />,
    link: "https://github.com/alexrendlerCS/BudgetTracker",
  },
  {
    title: "Bells and Bones Online Shop",
    description:
    "Developed a responsive e-commerce platform for handcrafted baskets, featuring intuitive navigation, high-quality imagery, and a seamless ordering process. Implemented secure payment options and optimized the site for both desktop and mobile devices to enhance user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "SEO", "AWS", "E-Commerce"],
    category: "Web Development",
    image: "/bellsandbones.png",
    icon: <Server className="h-6 w-6" />,
    link: "https://bandb-one.vercel.app/", // Add the link to the project
  },
  {
    title: "CoreVybe Care Provider Solutions",
    description: "Developed a comprehensive website for CoreVybe, a provider of innovative fitness and health solutions aimed at empowering older adults to live independently at home. The site features detailed information on services, team members, and wellness programs, with a focus on user-friendly navigation and accessibility.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "SEO"],
    category: "Web Development",
    image: "/CoreVybe.jpg",
    icon: <Code className="h-6 w-6" />,
    link: "https://corevybe.com/", // Add the link to the project
  },
];

const iconMap: Record<string, JSX.Element> = {
  SQL: <Database className="h-4 w-4" />,
  Flask: <Database className="h-4 w-4" />,
  Python: <Code className="h-4 w-4" />,
  HTML: <Layout className="h-4 w-4" />,
  AWS: <Server className="h-4 w-4" />,
  AI: <Server className="h-4 w-4" />,
  OpenAI: <Server className="h-4 w-4" />,
  NLP: <Server className="h-4 w-4" />,
  Docker: <Server className="h-4 w-4" />,
  JavaScript: <Code className="h-4 w-4" />,
  Jira: <GitBranch className="h-4 w-4" />,
  Figma: <Layout className="h-4 w-4" />,
  CSS: <Layout className="h-4 w-4" />,
  Firebase: <Server className="h-4 w-4" />,
  C: <Terminal className="h-4 w-4" />,
  "C++": <Terminal className="h-4 w-4" />, // Enclose this key in quotes
  Linux: <Terminal className="h-4 w-4" />,
  Bash: <Terminal className="h-4 w-4" />,
  "Responsive Design": <Layout className="h-4 w-4 mr-1" />,
  Accessibility: <Layout className="h-4 w-4 mr-1" />,
  "E-Commerce": <Layout className="h-4 w-4 mr-1" />,
  SEO: <Database className="h-4 w-4 mr-1" />,
  APIs: <Server className="h-4 w-4 mr-1" />,
  React: <Code className="h-4 w-4 mr-1" />,
  TypeScript: <Code className="h-4 w-4 mr-1" />,

};
const categories = ["All", "Data Analyzing", "Web Development", "AI Integration", "Personal Finance"];
const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    technologies: string[];
    category: string;
    image: string;
    icon: JSX.Element;
  } | null>(null);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

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
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
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
                <CardDescription>{project.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <p className="mb-4 line-clamp-3">{project.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="flex items-center"
                    >
                      {iconMap[tech]}
                      <span className="ml-1">{tech}</span>
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
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-60 object-cover mb-4 rounded"
            />
            <p className="mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <h3 className="font-bold mb-2">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="flex items-center"
                  >
                    {iconMap[tech]}
                    <span className="ml-1">{tech}</span>
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
