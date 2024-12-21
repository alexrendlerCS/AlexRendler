"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "@/components/mode-toggle"

const Header = () => {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Alex Rendler</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={pathname === "/" ? "text-foreground" : "text-foreground/60"}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={pathname === "/projects" ? "text-foreground" : "text-foreground/60"}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-foreground" : "text-foreground/60"}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header

