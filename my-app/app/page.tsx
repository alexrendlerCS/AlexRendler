"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Image from "next/image";
import { Rocket } from "lucide-react";

const videos = [
  {
    title: "StatsX Showcase ( Data Analytics )",
    description:
      "I walk through one of my recent projects, showcasing the design, functionality, and implementation.",
    thumbnail: "/VideoThumbnail.png",
    link: "https://www.youtube.com/watch?v=cnReBkbceek",
  },
  {
    title: "AI Resume Showcase ( AI Integration )",
    description:
      "This project uses AI to analyze a job posting and a user's resume to generate bullet points tailored to each experience.",
    thumbnail: "/VideoThumbnail2.png",
    link: "https://youtu.be/v4e7dGRmSlI",
  },
  {
    title: "Budget Tracker Walkthrough ( Backend Development )",
    description:
      "Highlights data visualization and backend skills. Features JWT authentication and charts for spending trends.",
    thumbnail: "/VideoThumbnail3.png",
    link: "https://youtu.be/eZ6gRU0800c",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Image
          src="/profile.jpg"
          alt="Alex Rendler's Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-2">Alex Rendler</h1>
        <h2 className="text-2xl mb-4">
          Software Engineer & Computer Science Graduate
        </h2>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://github.com/alexrendlerCS" target="_blank">
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/alex-rendler" target="_blank">
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="mailto:alexrendler@yahoo.com">
          <Button variant="outline" size="icon">
            <Mail className="h-4 w-4" />
          </Button>
        </Link>
        <Link
          href="/Resume.pdf"
          target="_blank"
          download="AlexRendlerResume.pdf"
        >
          <Button variant="outline" size="icon">
            <FileText className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>

      {/* About Me */}
      <motion.p
        className="text-center max-w-2xl mb-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Motivated and innovative Software Developer with a passion for data
        analytics and design, eager to bring creative ideas to life through
        code. Dedicated to continuous learning and achieving excellence, I
        leverage strong problem-solving, communication, and leadership skills to
        deliver impactful projects and contribute to team success.
      </motion.p>

      {/* Current Focus Section */}
      <motion.div
        className="bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg shadow-md p-6 max-w-[1000px] mx-auto mb-8 px-4 transform translate-y-0 transition-all duration-300 hover:-translate-y-6 hover:scale-[1.05] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_35px_65px_-10px_rgba(173,216,230,0.25)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-xl font-semibold mb-4 flex justify-center items-center gap-2 text-center">
          <Rocket className="h-5 w-5 text-primary" />
          Current Focus
        </h3>

        <div className="max-w-[650px] mx-auto">
          <p className="text-sm text-center text-zinc-700 dark:text-zinc-300">
            I am currently focused on two major projects while continuing to
            expand my technical skills. For Botanically Crafted Landscapes, I
            manage <strong>SEO strategy</strong> and execution, optimizing their
            Google Business Profile, blog content, and analytics to strengthen
            local search rankings. In parallel, I am leading{" "}
            <strong>full-stack development</strong> for SecondGlance.ai,
            creating a platform that displays foreclosure leads with detailed
            insights such as under-market auction prices, outstanding debt, and
            equity owed. Alongside these projects, I am actively pursuing the
            <strong> IBM Certified AI Engineer</strong> credential, having
            already completed six of the required certificates, which deepens my
            expertise in machine learning, data pipelines, and AI-driven
            solutions.
          </p>
        </div>

        {/* Screenshot Image */}
        <div className="mt-6 flex justify-center">
          <div className="w-[480px] rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-700 shadow">
            <Image
              src="/CurrentFocus.png"
              alt="Current Focus Preview"
              width={480}
              height={270}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Image Caption */}
        <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-2">
          Example of an AI response to a student prompt using lesson-specific
          information.
        </p>

        {/* Progress Bar */}
        <div className="mt-4 max-w-[480px] mx-auto">
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full w-[85%] transition-all duration-500" />
          </div>
          <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-1">
            Project Completion Status: 85%
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Skills />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button asChild>
          <Link href="/projects">View My Projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </motion.div>

      {/* Video Section Title */}
      <motion.h2
        className="text-3xl font-bold mb-6 mt-12 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Project Video Walkthroughs
      </motion.h2>

      {/* Video Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {videos.map((video, index) => (
          <motion.div
            key={index}
            className="rounded-lg p-4 flex flex-col bg-zinc-100 dark:bg-zinc-800 shadow-md dark:shadow-lg transform translate-y-0 transition-all duration-300 hover:-translate-y-4 hover:scale-[1.05] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_35px_65px_-10px_rgba(173,216,230,0.25)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a href={video.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={video.thumbnail}
                alt={`${video.title} Thumbnail`}
                width={300}
                height={169}
                className="rounded-lg w-full mb-4"
              />
            </a>
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
              {video.title}
            </h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              {video.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
