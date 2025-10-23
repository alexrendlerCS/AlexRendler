"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, ExternalLink } from "lucide-react";
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
    <div className="flex flex-col items-center justify-start min-h-screen w-full">
      {/* HERO */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Layers */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200 opacity-60 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#0000, #0000 3.9rem, rgba(0,0,0,0.02) 3.9rem)] mask-[radial-gradient(ellipse_at_center,_80%_50%_at_50%_50%)] opacity-10" />
        </div>

        <div className="container max-w-7xl px-4 mx-auto z-10">
          <div className="flex flex-col items-center text-center py-20">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Image src="/profile.jpg" alt="Alex Rendler's Profile Picture" width={160} height={160} className="rounded-full mx-auto mb-6 shadow-lg" />
            </motion.div>

            <motion.h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-500 bg-clip-text text-transparent">Alex Rendler</span>
            </motion.h1>

            <motion.h2 className="mt-4 text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              Software Engineer & Computer Science Graduate — motivated and innovative, focused on data analytics, AI integrations, and product design.
            </motion.h2>

            <motion.p className="mt-6 text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              Motivated and innovative Software Developer with a passion for data analytics and design, eager to bring creative ideas to life through code. Dedicated to continuous learning and achieving excellence.
            </motion.p>

            <motion.div className="mt-8 flex flex-wrap gap-3 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.25 }}>
              <Button asChild>
                <Link href="/projects">View Projects →</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact</Link>
              </Button>
            </motion.div>

            {/* Tech stack badges (compact) */}
            <motion.div className="mt-8 flex flex-wrap gap-2 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
              {['Next.js','TypeScript','Tailwind','Supabase','OpenAI'].map((t) => (
                <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/60 dark:bg-zinc-800/60 border border-zinc-200/50 dark:border-zinc-700/50">{t}</span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="w-6 h-10 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex items-start justify-center p-1">
            <div className="w-2 h-2 rounded-full bg-zinc-600 dark:bg-zinc-200 animate-bounce" />
          </div>
        </div>
      </section>


      {/* Combined layout: Current Focus (left) + Social / Skills / CTAs (right) */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl w-full px-4 mb-8">
        <motion.div
          className="md:col-span-2 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 rounded-lg shadow-md p-6 transform translate-y-0 transition-all duration-300 hover:-translate-y-6 hover:scale-[1.05] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:hover:shadow-[0_35px_65px_-10px_rgba(173,216,230,0.25)]"
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
            Demo of the SecondGlance.ai platform showcasing housing leads and CRM
            connections.
          </p>

          {/* Progress Bar */}
          <div className="mt-4 max-w-[480px] mx-auto">
            <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-[55%] transition-all duration-500" />
            </div>
            <p className="text-xs text-center text-zinc-500 dark:text-zinc-400 mt-1">
              Project Completion Status: 55%
            </p>
          </div>
        </motion.div>

        <motion.div className="flex flex-col items-center md:items-stretch space-y-6">
          {/* Social Links (now in right column) */}
          <motion.div
            className="flex space-x-4 justify-center md:justify-start"
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
            <Link href="/Resume.pdf" target="_blank" download="AlexRendlerResume.pdf">
              <Button variant="outline" size="icon">
                <FileText className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Skills compact card */}
          <motion.div
            className="w-full rounded-lg bg-zinc-100 dark:bg-zinc-800 p-4 shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.4 }}
          >
            <h4 className="text-sm font-semibold mb-2">Skills</h4>
            <Skills />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="w-full flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.6 }}
          >
            <Button asChild className="w-full">
              <Link href="/journey">Explore My Journey</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Featured Projects Section (mirrors Projects page style) */}
      <motion.h2
        className="text-3xl font-bold mb-6 mt-6 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Featured Projects
      </motion.h2>

      {/* Small featured projects grid */}
      {/** A small curated list of featured projects that mirrors the Projects page cards **/}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full px-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {[
          {
            title: "StatsX - Sports Analyzer",
            description:
              "A sports analytics platform with data pipelines, scraping, and real-time visual insights.",
            image: "/statsx.png",
            link: "https://www.statsx.online/",
          },
          {
            title: "AI Resume Builder",
            description:
              "AI-powered resume analyzer that aligns resumes with job descriptions using NLP and OpenAI.",
            image: "/resumebuilder.png",
            link: "https://github.com/alexrendlerCS/AIResume",
          },
          {
            title: "Aicademy - AI Tutor",
            description:
              "Interactive AI tutor for K–12 that adapts prompts and tracks progress with a Supabase backend.",
            image: "/Aicademy.png",
            link: "https://github.com/alexrendlerCS/AITutor",
          },
        ].map((p, i) => (
          <motion.div
            key={i}
            className="rounded-lg p-4 flex flex-col bg-zinc-100 dark:bg-zinc-800 shadow-md transform translate-y-0 transition-all duration-300 hover:-translate-y-4 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <a href={p.link} target="_blank" rel="noopener noreferrer">
              <div className="w-full h-40 relative rounded overflow-hidden mb-4">
                <Image src={p.image} alt={p.title} fill className="object-cover" />
              </div>
            </a>
            <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">{p.title}</h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 flex-grow">{p.description}</p>
            <div className="mt-4 flex justify-center">
              <Link href={p.link} target="_blank" rel="noopener noreferrer">
                <Button variant="link" className="text-primary">View Project</Button>
              </Link>
            </div>
          </motion.div>
        ))}
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

      {/* Experience Section */}
      <section className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <div className="container max-w-7xl px-4 mx-auto py-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Selected roles and responsibilities.</p>

          <div className="space-y-6">
            <div className="rounded-lg p-6 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/40 dark:border-zinc-700/40">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold">Software Engineer — Sample Company</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Jan 2023 — Present</p>
                </div>
                <span className="mt-3 sm:mt-0 inline-block px-3 py-1 text-xs rounded bg-zinc-50/60 dark:bg-zinc-700/60 border border-zinc-200/30">Remote</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3"><span className="text-primary">•</span> Led full-stack development for data-driven products.</li>
                <li className="flex items-start gap-3"><span className="text-primary">•</span> Implemented analytics, ETL pipelines, and visualization dashboards.</li>
              </ul>
            </div>

            <div className="rounded-lg p-6 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/40 dark:border-zinc-700/40">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h3 className="text-lg font-semibold">Freelance Developer — Various Clients</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">2019 — 2022</p>
                </div>
                <span className="mt-3 sm:mt-0 inline-block px-3 py-1 text-xs rounded bg-zinc-50/60 dark:bg-zinc-700/60 border border-zinc-200/30">Contract</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                <li className="flex items-start gap-3"><span className="text-primary">•</span> Built responsive client websites and e-commerce platforms.</li>
                <li className="flex items-start gap-3"><span className="text-primary">•</span> Optimized SEO and performance for local businesses.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full mt-12">
        <div className="container max-w-7xl px-4 mx-auto py-12">
          <div className="rounded-lg p-8 md:p-12 bg-gradient-to-br from-blue-50/30 to-indigo-50/10 dark:from-zinc-900/30 dark:to-zinc-800/10 backdrop-blur-sm border border-zinc-200/30 dark:border-zinc-700/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto mb-6">I'm available for contract and full-time roles — I enjoy building products that blend data, design, and AI.</p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button asChild>
                <Link href="mailto:alexrendler@yahoo.com">Email Me</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/alexrendlerCS">View GitHub</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 mt-12 py-8">
        <div className="container max-w-7xl px-4 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">© {new Date().getFullYear()} Alex Rendler. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/alexrendlerCS" target="_blank">
              <Github className="w-5 h-5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900" />
            </Link>
            <Link href="https://www.linkedin.com/in/alex-rendler" target="_blank">
              <Linkedin className="w-5 h-5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900" />
            </Link>
            <Link href="mailto:alexrendler@yahoo.com">
              <Mail className="w-5 h-5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
