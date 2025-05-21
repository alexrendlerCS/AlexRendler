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
        Pivoting from Just a Chatbot to a Full AI-Powered Learning Platform
      </motion.h1>

      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on May 21, 2025 · Tags:{" "}
        <span className="italic">EdTech, AI, Learning Tools</span>
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        When I first started this project, the goal was simple: create an{" "}
        <strong>AI chatbot that helps students think deeper</strong>. It would
        ask better questions, avoid spoon-feeding answers, and encourage
        students to reflect before solving. That foundation is still there — but
        the vision has evolved.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Over the past few weeks, I've pivoted from just building an AI assistant
        into building an{" "}
        <strong>entire teacher-powered learning ecosystem</strong>. The AI is no
        longer the sole experience — it's now one piece of a broader platform
        that enables teachers to create and manage structured learning content.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        🧑‍🏫 Teacher-Driven Content Creation
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Teachers can now create classrooms, invite students (or let them join
        via code), and build full learning modules. Each module contains
        lesson(s) and associated quizzes — all tied to a real class structure.
        This gives educators full control over how content is delivered and who
        it's assigned to.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I've almost completed the full class setup and module workflow,
        including:
      </p>

      <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-200 mb-4">
        <li>Creating and managing class groups</li>
        <li>Assigning students manually or via join codes</li>
        <li>Uploading or writing lessons directly into the platform</li>
        <li>Adding quizzes that test student understanding</li>
        <li>Assigning modules to specific classes or individuals</li>
      </ul>

      <div className="my-6">
        <img
          src="/student_dashboard.png"
          alt="Student Dashboard Preview"
          className="rounded-lg shadow-md w-full"
        />
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 text-center">
          A sneak peek at the redesigned student dashboard with class modules,
          lesson access, and progress tracking.
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        🧠 The AI Assistant’s Role Has Shifted
      </h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        The AI assistant is still here — but now it serves as a{" "}
        <strong>personalized companion within a larger learning journey</strong>
        . Instead of just answering open-ended prompts, it will help students by
        summarizing lessons, guiding them through quiz questions, and nudging
        them toward discovery — not shortcuts.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        The goal is not to make an answer machine, but a tutor that challenges
        students to <em>think</em>. When implemented, the AI will adapt its
        responses depending on quiz attempts, offering increasing guidance only
        after a student struggles. It's teaching through struggle, not bypassing
        it.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">🚧 What’s Coming Next</h2>
      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        The final piece I'm working on is the AI-powered quiz assistant. Soon,
        students will be able to attempt quiz questions with the help of our AI
        — which will know when to hint, when to ask questions, and when to step
        back. Think of it as a learning coach embedded directly into every
        assessment.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        With this structure in place, EduAI is becoming more than a tool — it’s
        shaping into a true learning environment where{" "}
        <strong>AI augments teaching</strong>, not replaces it.
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
