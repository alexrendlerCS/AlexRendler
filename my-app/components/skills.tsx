"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Database, Server, Layout, Terminal, GitBranch } from 'lucide-react'

const skills = [
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
  { name: "SEO", icon: <Database className="h-4 w-4 mr-1" /> }

]

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.1 }}
        >
          <Badge variant="secondary" className="text-sm py-1 px-2 flex items-center">
            {skill.icon}
            {skill.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  )
}

export default Skills

