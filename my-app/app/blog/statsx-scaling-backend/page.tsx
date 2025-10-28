/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

const codeSnippet = `const { data } = await supabase.from("players_to_watch").select("*");

const enrichedData = data.map((player) => ({
  ...player,
  performance_gap: Math.abs((player.last_3_avg || 0) - (player.season_avg || 0)),
}));

const groupedByPosition: Record<string, any[]> = {};
enrichedData.forEach((player) => {
  if (!groupedByPosition[player.position]) {
    groupedByPosition[player.position] = [];
  }
  groupedByPosition[player.position].push(player);
});

const topPlayers = ["QB", "RB", "WR", "TE"].flatMap((position) =>
  (groupedByPosition[position] || [])
    .sort((a, b) => b.performance_gap - a.performance_gap)
    .slice(0, 2)
);`;

export default function BlogPost() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-3xl">
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Scaling StatsX: Moving NFL Projections to the Backend and Preparing for
        AI
      </motion.h1>

      <p className="text-zinc-600 dark:text-zinc-300 mb-6 text-sm">
        Posted on April 25, 2025 · Tags:{" "}
        <span className="italic">
          AI, Backend Development, Scalability, Sports Analytics
        </span>
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Scaling StatsX: Moving NFL Projections to the Backend and Preparing for AI",
            description:
              "Refactoring StatsX to move heavy calculations server-side and prepare for AI integrations — backend architecture and web development best practices.",
            author: { "@type": "Person", name: "Alex Rendler" },
            datePublished: "2025-04-25",
            image: "https://rendlr.dev/og/statsx-scaling-backend.png",
            publisher: {
              "@type": "Organization",
              name: "Rendlr",
              logo: { "@type": "ImageObject", url: "https://rendlr.dev/logo.png" },
            },
          }),
        }}
      />

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        When I first launched StatsX, the focus was on getting real-time NFL
        player analysis working smoothly. Early on, I handled calculations like
        hot/cold player detection, matchup advantages, and projections directly
        in React components. While this approach worked at small scale, it
        wasn't sustainable as the app grew.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        After stepping away to work on other projects like my AIcademy, I
        returned to StatsX with fresh eyes and a deeper understanding of
        scalable architecture. I realized that for long-term growth — and
        especially for AI integration — I needed to move heavy calculations to
        the backend.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Today, I'm proud to say that StatsX now fully supports backend-driven
        player calculations: - Players to Watch (hot/cold players based on last
        3 games) - Top Picks (top 2 players per position based on performance
        gap) - Weekly Stat Leaders (best players across NFL stat categories)
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Here's a glimpse of the code that now powers smarter backend
        aggregation, fetching only the most important players per position:
      </p>

      <div className="mb-6 rounded-md overflow-hidden">
        <SyntaxHighlighter language="tsx" style={oneDark} wrapLongLines>
          {codeSnippet}
        </SyntaxHighlighter>
      </div>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Moving this logic server-side made the app dramatically faster, cleaner,
        and more scalable — exactly the kind of structure that hiring managers
        and senior engineers value when evaluating backend or AI engineering
        projects.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Thanks to these changes, StatsX is now ready to take the next step: AI
        integration. With a clean, normalized dataset and a scalable backend
        architecture, we can confidently introduce predictive models, confidence
        percentages, and natural language stat querying.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        With around 65% baseline accuracy already achieved through calculated
        performance trends, I'm excited to see how much smarter the system can
        become once true machine learning models are in place.
      </p>

      <p className="mb-4 text-zinc-700 dark:text-zinc-200">
        Reflecting on this journey, I realize how much I've grown as a developer
        — not just writing code, but designing systems that scale, adapt, and
        set the foundation for AI to thrive.
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
