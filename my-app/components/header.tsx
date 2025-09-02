"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center px-4 md:px-6">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 ml-2 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Alex Rendler
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground transition-colors"
              }
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={
                pathname === "/projects"
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground transition-colors"
              }
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className={
                pathname === "/blog"
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground transition-colors"
              }
            >
              Blog
            </Link>
            <Link
              href="/journey"
              className={
                pathname === "/journey"
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground transition-colors"
              }
            >
              My Journey
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
