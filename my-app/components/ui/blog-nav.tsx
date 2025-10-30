"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, posts as postDetails } from "@/lib/blog-posts";
import BackToBlog from "@/components/ui/back-to-blog";

export default function BlogNav({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative flex items-start justify-between mb-4 ${className ?? ""}`}>
      <div>
        <button
          onClick={() => setOpen((s) => !s)}
          aria-expanded={open}
          aria-label="Open post navigation"
          className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-foreground hover:border-white/50 hover:bg-white/15 transition-all dark:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <BackToBlog />
      </div>

      {open && (
        <div
          role="menu"
          aria-label="All posts"
          className="absolute left-4 top-16 z-50 w-80 max-w-[92%] rounded-2xl bg-white/6 backdrop-blur-md border border-white/10 dark:bg-zinc-900/40 dark:border-zinc-800 shadow-lg p-3"
        >
          <div className="flex items-center justify-between mb-3">
            <strong className="text-sm">All Posts</strong>
            <button
              className="inline-flex items-center justify-center h-8 w-8 rounded-full text-foreground hover:bg-white/5 dark:hover:bg-white/6"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-2" role="none">
            {blogPosts.map((p) => {
              const detail = postDetails.find((x) => x.slug === p.slug);
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  onClick={() => setOpen(false)}
                  role="menuitem"
                  className="group flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/8 dark:hover:bg-zinc-800/40 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-white/20"
                >
                  {detail?.thumbnail ? (
                    <div className="relative h-10 w-10 flex-none rounded-md overflow-hidden bg-zinc-50/50">
                      <Image src={detail.thumbnail} alt={detail.title} width={40} height={40} className="object-cover" />
                    </div>
                  ) : (
                    <div className="h-10 w-10 flex-none rounded-md bg-zinc-200/30 flex items-center justify-center text-xs text-zinc-700"> 
                      {p.title.split(" ").slice(0,2).map(t=>t[0]).join("")}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{p.title}</div>
                    {detail?.description && (
                      <div className="text-xs text-zinc-600 dark:text-zinc-400 truncate">{detail.description}</div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
