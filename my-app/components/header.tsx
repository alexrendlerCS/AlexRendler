"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect, useState } from "react";

function MobileMenu({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden flex items-center">
      <button
        aria-label="Open menu"
        className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-14 left-0 w-full bg-background shadow-lg z-50 animate-fade-in">
          <nav className="flex flex-col items-center py-4 space-y-2 text-base font-medium">
            <Link href="/" className={pathname === "/" ? "text-foreground" : "text-foreground/60 hover:text-foreground transition-colors"} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/projects" className={pathname === "/projects" ? "text-foreground" : "text-foreground/60 hover:text-foreground transition-colors"} onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/blog" className={pathname === "/blog" ? "text-foreground" : "text-foreground/60 hover:text-foreground transition-colors"} onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/journey" className={pathname === "/journey" ? "text-foreground" : "text-foreground/60 hover:text-foreground transition-colors"} onClick={() => setOpen(false)}>My Journey</Link>
          </nav>
        </div>
      )}
    </div>
  );
}

const Header = () => {
  const pathname = usePathname();
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY === 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
        isTop
          ? "bg-white/95 supports-[backdrop-filter]:bg-white/95 dark:bg-background"
          : "bg-transparent"
      } ${!isTop ? "shadow-sm" : ""} backdrop-blur`}
    >
      <div className="container flex h-14 items-center px-4 md:px-6 justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-4 flex items-center space-x-2">
            <span className="font-bold">Alex Rendler</span>
          </Link>
          <div className="hidden md:flex">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className={pathname === "/" ? "text-foreground" : "text-foreground/60 hover:text-foreground transition-colors"}>Home</Link>
              <Link href="/projects" className={pathname === "/projects" ? "text-foreground" : "text-foreground/60 hover:text-foreground transition-colors"}>Projects</Link>
              <Link href="/blog" className={pathname === "/blog" ? "text-foreground" : "text-foreground/60 hover:text-foreground transition-colors"}>Blog</Link>
              <Link href="/journey" className={pathname === "/journey" ? "text-foreground" : "text-foreground/60 hover:text-foreground transition-colors"}>My Journey</Link>
            </nav>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MobileMenu pathname={pathname} />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
