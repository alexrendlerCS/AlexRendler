/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { promptSnippet } from "@/lib/snippets/ai-tutor";

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Designing Prompts to Encourage Learning, Not Replace It
      </motion.h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on April 22, 2025 · Tags:{" "}
        <span className="italic">AI, Prompt Engineering, EdTech</span>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Designing Prompts to Encourage Learning, Not Replace It",
            description:
              "Practical insights on prompt engineering for tutoring systems — AI integrations and web development best practices to encourage learning rather than shortcuts.",
            author: { "@type": "Person", name: "Alex Rendler" },
            datePublished: "2025-04-22",
            image: "https://rendlr.dev/og/ai-tutor-prompt-engineering.png",
            publisher: {
              "@type": "Organization",
              name: "Rendlr",
              logo: { "@type": "ImageObject", url: "https://rendlr.dev/Logos/Logo.png" },
            },
          }),
        }}
      />
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        One of the most interesting challenges while building my AIcademy has
        been <strong>prompt engineering</strong>. Although I’m still relatively
        new to it, I&rsquo;ve quickly realized how powerful good prompts can
        be—not just for getting accurate answers, but for shaping <em>how</em>{" "}
        the AI behaves as a teacher.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I didn&rsquo;t want the AIcademy simply give students the correct
        answer. That would defeat the purpose of learning. Instead, I designed
        the system to act more like a supportive tutor who nudges students
        toward the answer through hints and encouragement.
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Here&rsquo;s the system prompt I use to guide the model:
      </p>

      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines>
          {promptSnippet}
        </SyntaxHighlighter>
      </div>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This prompt helps the assistant:
        <ul className="list-disc pl-6 mt-2">
          <li>
            Ask thought-provoking questions rather than giving away answers
          </li>
          <li>Tailor responses for younger students</li>
          <li>Promote persistence and effort</li>
          <li>Offer clarity while still keeping learning interactive</li>
        </ul>
      </p>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This is still evolving, but it's already changing how I think about
        AI—not as a replacement for learning, but as a tool to{" "}
        <strong>support</strong> and <strong>strengthen</strong> it. Eventually,
        I plan to fine-tune prompts per subject or based on student performance
        so that it grows more adaptive over time.
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
