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
