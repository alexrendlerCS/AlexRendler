"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { format } from "date-fns";

const posts = [
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
    date: new Date("2025-04-25"), // today's date
    tags: ["AI", "Backend Development", "Scalability", "Sports Analytics"],
    thumbnail: "/statsx.png", // <-- optional, or reuse your logo if you don't have one yet
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
];




export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.slug}
            className="bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden shadow-md dark:shadow-lg transition-all duration-300 hover:-translate-y-4 hover:scale-[1.03] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_35px_65px_-10px_rgba(173,216,230,0.25)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="w-full h-40 relative">
                <Image
                  src={post.thumbnail}
                  alt={`${post.title} Thumbnail`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-1">
                  {format(post.date, "MMMM d, yyyy")}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
                  {post.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
