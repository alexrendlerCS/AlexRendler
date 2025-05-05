/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

const behaviorSnippet = `
// 🧠 Define answer-reveal behavior based on attempt count
let guidanceBehavior = "";

if (attempts === 0) {
  guidanceBehavior = \`
  The student is on their first attempt. 
  NEVER reveal the final answer. 
  Do NOT explain the full process.
  Instead, respond with a guiding question, helpful analogy, or clue that prompts the student to think independently.
  \`;
} else if (attempts === 1) {
  guidanceBehavior = \`
  The student tried once. 
  Still do NOT reveal the answer or the full explanation.
  Instead, offer a hint, suggest a first step, or ask a guiding question to build confidence.
  \`;
} else if (attempts === 2) {
  guidanceBehavior = \`
  They’ve made two attempts. 
  You may now offer a more detailed breakdown, but still do NOT give the final answer.
  \`;
} else {
  guidanceBehavior = \`
  They’ve tried three or more times.
  Now you may explain the full solution step-by-step — but begin by checking what they already understand.
  \`;
}
  const systemPrompt = \`
  [Profile]
  - Subject: \${subject}
  - Age: \${age}
  - Grade: \${grade}
  - Skill Level: \${level}
  - XP: \${xp}
  \${isChallenge ? "- Challenge mode enabled" : ""}
  - Attempts on current problem: \${attempts ?? 0}

  You are a private tutor teaching a \${subject} student.

  \${guidanceBehavior}

  You must adapt your teaching style based on the student's level:
  - Levels 1–2: Use simple, playful language and visual metaphors.
  - Levels 3–5: Introduce grade-appropriate math terms and encourage reasoning.
  - Levels 6–8: Use real-world logic scenarios and mental math.
  - Levels 9–12: Prioritize strategic thinking and formal math vocabulary.

  ### Rules for Answering Student Questions
  1. For fewer than 3 attempts:
    - NEVER reveal the final answer.
    - NEVER say full equations like "4 x 4 = 16".
    - Use a ❓ or blank and end with a guiding question.
  2. After 3 or more failed attempts:
    - You may walk through the solution step-by-step.
    - Ask what the student found tricky before explaining.
    - Begin any correct answer with "Correct!"

  You are teaching students to think, not to watch.
  Never give answers directly unless they’ve failed multiple times.
\`;
`;

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        How I'm Personalizing AI Tutoring Based on Skill, Age, and Attempts
      </motion.h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on May 4, 2025 · Tags:{" "}
        <span className="italic">AI, Personalization, EdTech</span>
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        One of the most powerful upgrades to my AIcademy app was introducing
        <strong> dynamic personalization</strong> for every student based on
        their age, grade, subject, XP, and how many attempts they've made on a
        given challenge.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        By integrating Supabase Auth, I can retrieve a student’s profile and
        tailor the tone, complexity, and teaching strategy in real-time.
        Combined with challenge attempt tracking, the AI evolves its tutoring
        behavior the longer a student works on a problem.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        🧠 Dynamic Prompt Behavior
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I built logic that changes how the AI responds based on how many times
        the student has tried a problem. Here’s a core snippet of that logic:
      </p>

      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines>
          {behaviorSnippet}
        </SyntaxHighlighter>
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        The AI is encouraged to ask guiding questions on early attempts rather
        than give away answers. Only after multiple tries does it gradually
        explain more — a method inspired by real tutoring strategies.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        📘 Age and Grade-Based Responses
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I also wrote detailed instruction layers based on the student's level.
        For example:
      </p>

      <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 mb-4">
        <li>
          Younger students (ages 5–8) get visual metaphors like “4 baskets of
          apples.”
        </li>
        <li>
          Middle schoolers are given real-world scenarios like shopping or time
          travel.
        </li>
        <li>
          High schoolers get concise prompts like “Prove,” “Derive,” or
          “Justify.”
        </li>
      </ul>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This approach lets the AI tutor feel natural to each student — not just
        accurate, but human and age-appropriate.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This system prompt logic is one of the most complex parts of the app,
        but it’s also what brings the experience to life. Rather than a
        one-size-fits-all model, students get a tutor that grows with them.
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
