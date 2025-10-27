import type React from "react"
import type { Metadata } from "next"
// font imports removed to avoid unused variable lint errors
// @vercel/analytics removed from this layout to avoid missing dependency/type errors in build
import Header from "@/components/header"
import "./globals.css"

// fonts intentionally not used here; remove to satisfy linter

export const metadata: Metadata = {
  title: "Rendlr - Modern Web Solutions",
  description:
    "Rendlr Web Design, SEO & Solutions builds modern, secure, and high-performing websites designed to grow your business.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
  <Header />
  {children}
      </body>
    </html>
  )
}
