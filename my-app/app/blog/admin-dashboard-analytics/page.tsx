/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

const xpSnippet = `
// Fetch and group XP history by date and subject
const { data, error } = await supabase
  .from("user_prompt_attempts")
  .select("subject_id, xp_earned, timestamp")
  .order("timestamp", { ascending: true });

const subjectMap = {
  1: "Math",
  2: "Reading",
  3: "Spelling",
  4: "Exploration",
};

const grouped = {};
data.forEach((entry) => {
  const date = new Date(entry.timestamp).toISOString().split("T")[0];
  const subject = subjectMap[entry.subject_id] || "Unknown";
  if (!grouped[date]) grouped[date] = {};
  grouped[date][subject] = (grouped[date][subject] || 0) + entry.xp_earned;
});

// Build cumulative XP chart data
const cumulative = [];
const totals = { Math: 0, Reading: 0, Spelling: 0, Exploration: 0 };
for (const date of Object.keys(grouped).sort()) {
  for (const subject of Object.keys(totals)) {
    totals[subject] += grouped[date][subject] || 0;
  }
  cumulative.push({ date, ...totals });
}
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
        Visualizing Student Progress in Real Time with Recharts and Supabase
      </motion.h1>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on May 4, 2025 · Tags:{" "}
        <span className="italic">Data Analytics, EdTech, Visualization</span>
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        I built an Admin Dashboard to help visualize how students are
        progressing across subjects — including XP earned, performance trends,
        and subject mastery. This is critical for evaluating where students are
        thriving and where they may need help.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Using Supabase for data storage and Recharts for rendering, I
        implemented multiple charts that reflect:
      </p>

      <ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200">
        <li>Total XP and Level by Subject</li>
        <li>XP Earned from Freeform Prompts</li>
        <li>Average XP per Attempt</li>
        <li>Attempt Volume per Subject</li>
        <li>XP Growth Over Time</li>
      </ul>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        One of my favorite parts was building the XP-over-time line chart, which
        helps visualize skill growth. Here’s a snippet of how I gathered and
        processed that data:
      </p>

      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines>
          {xpSnippet}
        </SyntaxHighlighter>
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        By grouping XP earned by date and subject, I could generate cumulative
        learning progress that updates in real time as students interact with
        the AI assistant. Teachers or parents viewing the dashboard see a clear
        visual story of engagement and growth.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        This analytics foundation not only supports performance tracking, but
        also lays the groundwork for adaptive learning features — such as
        personalized goals, trend alerts, and difficulty calibration.
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
