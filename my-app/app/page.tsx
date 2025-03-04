"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
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
      <motion.div
        className="flex space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link
          href="https://github.com/alexrendlerCS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/alex-rendler"
          target="_blank"
          rel="noopener noreferrer"
        >
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
          rel="noopener noreferrer"
          download="AlexRendlerResume.pdf"
        >
          <Button variant="outline" size="icon">
            <FileText className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>
      <motion.p
        className="text-center max-w-2xl mb-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Motivated and innovative Computer Science graduate with a passion for
        data analytics and design, eager to bring creative ideas to life through
        code. Dedicated to continuous learning and achieving excellence, I
        aspire to leverage my problem-solving, communication, and leadership
        skills to lead teams in delivering impactful projects.
      </motion.p>

      {/* New section for YouTube video with local thumbnail */}
      <motion.div
        className="flex items-center justify-between w-full max-w-3xl mt-8 p-4 bg-gray-50 rounded-lg shadow-md mb-12"  
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="w-1/3">
          <a
            href="https://www.youtube.com/watch?v=cnReBkbceek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/VideoThumbnail.png"  // Local thumbnail image path
              alt="Video Thumbnail"
              width={300}
              height={169}
              className="rounded-lg"
            />
          </a>
        </div>
        <div className="w-2/3 pl-6">
          <h3 className="text-2xl font-semibold mb-2">
            StatsX Showcase ( Data Analytics )
          </h3>
          <p className="text-lg text-gray-700">
            In this video, I walk through one of my recent projects, showcasing
            the design, functionality, and implementation. I hope this gives you
            a clear understanding of how I approach problem-solving and project
            development.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        className="mt-8 space-x-4"
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
    </div>
  );
}
