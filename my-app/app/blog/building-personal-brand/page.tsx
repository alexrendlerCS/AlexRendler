"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import BlogNav from "@/components/ui/blog-nav";

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <BlogNav />

      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Building My Personal Brand: How Freelance Projects Became Rendlr Modern Web Solutions
      </motion.h1>

      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on October 29, 2025 · Tags: <span className="italic">Personal Brand, Portfolio, SEO</span>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Building My Personal Brand: How Freelance Projects Became Rendlr Modern Web Solutions",
            description:
              "My journey transforming freelance projects into Rendlr Modern Web Solutions — building purposeful platforms, improving workflows, and using SEO and design to grow businesses.",
            author: { "@type": "Person", name: "Alex Rendler" },
            datePublished: "2025-10-29",
            image: "https://rendlr.dev/Logos/Logo-Dark.png",
            keywords: [
              "personal brand web developer",
              "freelance web development journey",
              "modern web solutions",
              "small business website builder",
              "web design and SEO services",
              "custom web platforms for businesses",
              "Rendlr Modern Web Solutions",
            ],
            publisher: {
              "@type": "Organization",
              name: "Rendlr",
              logo: { "@type": "ImageObject", url: "https://rendlr.dev/Logos/Logo.png" },
            },
          }),
        }}
      />

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        When I first started building websites, my goal was simple — learn, grow, and showcase my skills through real projects. Over time, those projects evolved into something much bigger: a vision for helping businesses simplify their workflows, grow their online presence, and modernize the way they operate.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Now, that journey has led me to create <strong>Rendlr Modern Web Solutions</strong> — my personal brand focused on modern web development, SEO, and business automation.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">From Freelance Projects to Purposeful Platforms</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Over the past year, I’ve had the opportunity to work on a variety of contract projects across different industries. Each one taught me something new about design, usability, and scalability.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">1. Payroll Entry Platform</h3>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        One of my earliest projects was a custom payroll entry platform for a growing company that wanted to move away from the chaos of sending Excel sheets back and forth between employees, managers, and owners.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I built a system that centralized payroll submissions, approvals, and edits in one simple, secure dashboard. This solution helped the company save hours every week, reduce costly errors, and eliminate the stress of manual tracking. It was one of my first experiences transforming a real business problem into a seamless digital workflow.
      </p>

      <h3 className="text-lg font-semibold mt-4 mb-2">2. Fitness Trainer Platform</h3>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Next came something completely different — a fitness trainer management platform. The goal was to help a personal trainer manage clients, bookings, and payments all in one place.
      </p>
      <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 mb-4">
        <li>Accept and manage client bookings</li>
        <li>Handle secure payments</li>
        <li>Customize session types and packages</li>
        <li>Build a professional online brand that attracts new clients</li>
      </ul>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Seeing how a well-built web platform could free up a business owner’s time and help them grow was what truly sparked my passion for full-stack development and business-oriented design.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Evolving from a Portfolio to a Brand</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        At first, my website was just a portfolio — a place to show what I could do. But as I continued to take on projects, I realized I wasn’t just building websites. I was building brands, optimizing SEO strategies, and creating systems that helped businesses thrive online.
      </p>
      <div className="mb-6">
        <Image
          src="/rendlr-web-analytics-blog.png"
          alt="Rendlr — modern web solutions and analytics"
          width={1200}
          height={630}
          className="w-full rounded-md object-cover"
        />
      </div>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        That’s why I decided to evolve my website into Rendlr Modern Web Solutions — a personal brand that reflects not only my work but also my philosophy:
      </p>
      <blockquote className="pl-4 border-l-4 border-zinc-200 dark:border-zinc-700 italic text-zinc-700 dark:text-zinc-300 mb-4">
        “Every business deserves a modern, secure, and results-driven web presence.”
      </blockquote>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Now, I’m using my own site as a living example — implementing advanced SEO techniques, improving organic traffic, and continuing to prove that my strategies work.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">What’s Next for Rendlr</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        As I continue growing Rendlr, my mission is simple: to help individuals and businesses turn ideas into digital experiences — from concept to code, and from website to brand.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Through modern web design, SEO optimization, AI integration, and automation, I aim to make the web more accessible, efficient, and effective for everyone I work with.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Closing Thoughts</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Building my personal brand has been one of the most exciting parts of my journey so far. Each project — whether it’s a payroll system or a fitness app — has taught me that thoughtful design and strategic development go hand in hand.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        If you’re a small business owner, creator, or professional looking to take your online presence to the next level, I’d love to show you what’s possible.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">📩 Let’s connect — whether you need a complete website build, SEO strategy, or digital automation plan, Rendlr Modern Web Solutions is here to help.</p>

      <div />
    </div>
  );
}
