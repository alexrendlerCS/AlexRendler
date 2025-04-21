// app/blog/ai-tutor-tracking-correctness/page.tsx

"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

const codeSnippet = `useEffect(() => {
  const handleAnswerAttempt = (e: Event) => {
    const customEvent = e as CustomEvent<{
      subject: Subject
      correct: boolean
      attempts: number
    }>
    const { subject, correct, attempts } = customEvent.detail

    let xpEarned = 2
    if (correct && attempts === 1) xpEarned = 10
    else if (correct && attempts <= 2) xpEarned = 7
    else if (correct) xpEarned = 5
    else xpEarned = 1

    setXpPoints((prev) => {
      const newXp = prev + xpEarned
      updateXpInDatabase(newXp)
      return newXp
    })

    console.log(\`Answer attempt:\`, { subject, correct, attempts, xpEarned })
  }

  window.addEventListener("answer-attempt", handleAnswerAttempt)
  return () => window.removeEventListener("answer-attempt", handleAnswerAttempt)
}, [activeSubject])`;

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        How I'm Tracking Student Performance in My AIcademy
      </motion.h1>

      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on April 21, 2025 · Tags:{" "}
        <span className="italic">AI, EdTech, Data Analytics</span>
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        In my AI-powered tutor project, I'm building a system to detect correct
        answers, track how many attempts a student takes, and assign XP
        accordingly. This lays the groundwork for future student performance
        analytics — helping teachers and guardians better understand how
        students are learning over time.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Below is a code snippet showing how I log each answer attempt with event
        listeners, and assign XP based on correctness and number of attempts:
      </p>

      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines>
          {codeSnippet}
        </SyntaxHighlighter>
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This is just the beginning. Eventually, this data will feed into
        personalized charts showing student growth, question difficulty trends,
        and subject-specific strengths. I'm also planning a teacher dashboard to
        surface this data in a meaningful, digestible way.
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
