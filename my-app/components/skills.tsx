"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Database, Server, Layout, Terminal, GitBranch } from 'lucide-react'

const skills = [
  { name: "Team Dev", icon: <GitBranch className="h-4 w-4 mr-1" /> },
  { name: "Role Auth", icon: <Code className="h-4 w-4 mr-1" /> },
  { name: "PostgreSQL", icon: <Database className="h-4 w-4 mr-1" /> },
  { name: "Supabase", icon: <Database className="h-4 w-4 mr-1" /> },
  { name: "Python", icon: <Code className="h-4 w-4 mr-1" /> },
  { name: "React", icon: <Code className="h-4 w-4 mr-1" /> },
  { name: "TypeScript", icon: <Code className="h-4 w-4 mr-1" /> },
  { name: "Java", icon: <Code className="h-4 w-4 mr-1" /> },
  { name: "C", icon: <Terminal className="h-4 w-4 mr-1" /> },
  { name: "C++", icon: <Terminal className="h-4 w-4 mr-1" /> },
  { name: "Svelte", icon: <Terminal className="h-4 w-4 mr-1" /> },
  { name: "JavaScript", icon: <Code className="h-4 w-4 mr-1" /> },
  { name: "HTML", icon: <Layout className="h-4 w-4 mr-1" /> },
  { name: "CSS", icon: <Layout className="h-4 w-4 mr-1" /> },
  { name: "Responsive Design", icon: <Layout className="h-4 w-4 mr-1" /> },
  { name: "Accessibility", icon: <Layout className="h-4 w-4 mr-1" /> },
  { name: "E-Commerce", icon: <Layout className="h-4 w-4 mr-1" /> },
  { name: "SQL", icon: <Database className="h-4 w-4 mr-1" /> },
  { name: "Git", icon: <GitBranch className="h-4 w-4 mr-1" /> },
  { name: "Jira", icon: <Server className="h-4 w-4 mr-1" /> },
  { name: "AWS", icon: <Server className="h-4 w-4 mr-1" /> },
  { name: "APIs", icon: <Server className="h-4 w-4 mr-1" /> },
  { name: "Scripts", icon: <Server className="h-4 w-4 mr-1" /> },
  { name: "Docker", icon: <Server className="h-4 w-4 mr-1" /> },
  { name: "Linux", icon: <Terminal className="h-4 w-4 mr-1" /> },
  { name: "Windows", icon: <Terminal className="h-4 w-4 mr-1" /> },
  { name: "Scrum", icon: <GitBranch className="h-4 w-4 mr-1" /> },
  { name: "Agile", icon: <GitBranch className="h-4 w-4 mr-1" /> },
  { name: "UI/UX Design", icon: <Layout className="h-4 w-4 mr-1" /> },
  { name: "Data Analytics", icon: <Database className="h-4 w-4 mr-1" /> },
  { name: "SEO", icon: <Database className="h-4 w-4 mr-1" /> },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.95, y: 0 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.03,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.07,
            y: -6,
            boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)",
            transition: {
              type: "spring",
              stiffness: 250,
              damping: 20,
            },
          }}
        >
          <Badge
            variant="secondary"
            className="text-sm py-1 px-3 flex items-center bg-zinc-100 dark:bg-zinc-800"
          >
            {skill.icon}
            {skill.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}

export default Skills

