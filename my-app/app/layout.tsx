import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
      default: "Rendlr",
      template: "%s | Rendlr",
    },
    description:
      "Rendlr delivers modern, secure, and SEO-optimized websites built for growth. From sleek web design to AI-powered automation, we help your business thrive online.",
    metadataBase: new URL("https://rendlr.dev"),
    keywords: [
      "web design Carlsbad",
      "SEO solutions",
      "AI website automation",
      "cybersecurity web services",
      "modern web development",
      "web design",
      "SEO",
      "AI integrations",
      "business automation",
    ],
    authors: [
      { name: "Rendlr Web Design, SEO & Solutions", url: "https://rendlr.dev" },
    ],
    openGraph: {
      title: "Rendlr",
      description:
        "Rendlr delivers modern, secure, and SEO-optimized websites built for growth. From sleek web design to AI-powered automation, we help your business thrive online.",
      url: "https://rendlr.dev",
      siteName: "Rendlr",
      // images can be added here (e.g. '/og-image.png')
      type: "website",
    },
    twitter: {
      title: "Rendlr",
      card: "summary_large_image",
    },
    // prefer legacy .ico (added to public/) with PNG as a fallback for Apple/modern browsers
    icons: {
      icon: "/favicon.ico",
      apple: "/favicon.png",
      other: [
        { rel: "shortcut icon", url: "/favicon.ico" },
        { rel: "icon", url: "/favicon.png", type: "image/png" },
      ],
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
