/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Building an Introductory Skill Assessment for Smarter AI Tutoring
      </motion.h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on May 4, 2025 · Tags:{" "}
        <span className="italic">AI, EdTech, Personalization</span>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Building an Introductory Skill Assessment for Smarter AI Tutoring",
            description:
              "Designing an introductory skill assessment to personalize AI tutoring — insights on adaptive learning, AI integrations, and web development best practices.",
            author: { "@type": "Person", name: "Alex Rendler" },
            datePublished: "2025-05-04",
            image: "https://rendlr.dev/og/intro-skill-assessment.png",
            publisher: {
              "@type": "Organization",
              name: "Rendlr",
              logo: { "@type": "ImageObject", url: "https://rendlr.dev/logo.png" },
            },
          }),
        }}
      />

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        When I began developing the AIcademy, one of my goals was to create a
        tutor that adjusts to each student’s unique skill level from the very
        beginning. That led me to implement an{" "}
        <strong>Introductory Skill Assessment</strong> system.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        The assessment provides a short subject-specific quiz when a student
        first signs up. Based on their responses, I determine a baseline skill
        level for each subject. This helps in three ways:
      </p>

      <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 mb-4">
        <li>Sets an appropriate starting XP and challenge difficulty</li>
        <li>Feeds into AI prompt personalization based on skill</li>
        <li>Gives parents a snapshot of their child’s initial level</li>
      </ul>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Instead of overwhelming or under-challenging students, this ensures the
        AI starts off on the right foot. From there, the XP system and
        difficulty scaling continue to adjust dynamically based on performance.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This initial quiz is short, intuitive, and sets the tone for a more
        personalized learning journey. Combined with Supabase-authenticated user
        data like age and grade, it forms the foundation of adaptive AI tutoring
        in the app.
      </p>

      <Link
        href="/blog"
        className="text-blue-600 dark:text-blue-400 hover:underline"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}
