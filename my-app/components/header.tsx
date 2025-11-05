"use client";

import Link from "next/link";
import Image from "next/image";
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
            <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={pathname === "/" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"} onClick={() => setOpen(false)}>Home</Link>
            <Link href="/getting-started" aria-current={pathname === "/getting-started" ? "page" : undefined} className={pathname === "/getting-started" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"} onClick={() => setOpen(false)}>Get Started</Link>
            <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} className={pathname === "/about" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"} onClick={() => setOpen(false)}>About</Link>
            <Link href="/projects" aria-current={pathname === "/projects" ? "page" : undefined} className={pathname === "/projects" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"} onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/blog" aria-current={pathname === "/blog" ? "page" : undefined} className={pathname === "/blog" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"} onClick={() => setOpen(false)}>Blog</Link>
            <Link href="/journey" aria-current={pathname === "/journey" ? "page" : undefined} className={pathname === "/journey" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"} onClick={() => setOpen(false)}>My Journey</Link>
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
            {/* Use the header logo asset */}
            <Image src="/Logos/Logo-Header.png" alt="Rendlr" width={120} height={32} className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/" aria-current={pathname === "/" ? "page" : undefined} className={pathname === "/" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"}>Home</Link>
              <Link href="/getting-started" aria-current={pathname === "/getting-started" ? "page" : undefined} className={pathname === "/getting-started" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"}>Get Started</Link>
              <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined} className={pathname === "/about" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"}>About</Link>
              <Link href="/projects" aria-current={pathname === "/projects" ? "page" : undefined} className={pathname === "/projects" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"}>Projects</Link>
              <Link href="/blog" aria-current={pathname === "/blog" ? "page" : undefined} className={pathname === "/blog" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"}>Blog</Link>
              <Link href="/journey" aria-current={pathname === "/journey" ? "page" : undefined} className={pathname === "/journey" ? "text-brand-blue" : "text-white hover:text-brand-blue transition-colors"}>My Journey</Link>
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
