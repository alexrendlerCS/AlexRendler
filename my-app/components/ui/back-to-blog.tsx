"use client";

import Link from "next/link";

export default function BackToBlog({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Link
        href="/blog"
        aria-label="Back to Blog"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-foreground hover:border-white/50 hover:bg-white/15 transition-all dark:text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-4 h-4"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Blog</span>
      </Link>
    </div>
  );
}
