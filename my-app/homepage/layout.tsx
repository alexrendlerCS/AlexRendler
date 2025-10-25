import type React from "react"
import type { Metadata } from "next"
// removed invalid font imports - using system fonts via Tailwind `font-sans`
import "./globals.css"

// previously attempted to load custom fonts here; not needed for build

export const metadata: Metadata = {
  title: "Software Developer Portfolio",
  description: "Portfolio showcasing my software development projects and experience",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // This layout should not include <html> or <body> because the root
  // `app/layout.tsx` already provides them. Returning only the children
  // ensures theme classes and global CSS from the root layout apply.
  return <>{children}</>
}
