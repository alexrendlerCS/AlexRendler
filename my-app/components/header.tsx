"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";
import { useEffect, useState } from "react";

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
          ? "bg-white/95 supports-[backdrop-filter]:bg-white/95 dark:bg-background/95"
          : "bg-transparent"
      } ${!isTop ? "shadow-sm" : ""} backdrop-blur`}
    >
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
