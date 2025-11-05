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
      "Rendlr, modern web design, SEO, and AI-driven automation to help businesses grow online.",
    metadataBase: new URL("https://www.rendlr.dev"),
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
      { name: "Rendlr Web Design, SEO & Solutions", url: "https://www.rendlr.dev" },
    ],
    openGraph: {
      title: "Rendlr",
      description: "Rendlr, modern web design, SEO, and AI-driven automation to help businesses grow online.",
      url: "https://www.rendlr.dev",
      siteName: "Rendlr",
      images: ["/Logos/Logo.png"],
      type: "website",
    },
    twitter: {
      title: "Rendlr",
      card: "summary_large_image",
      images: ["/Logos/Logo.png"],
    },
    // prefer the repo's canonical favicons: /favicon.ico (legacy) and /favicon.png (modern)
    icons: {
      // Use query-string versioning so browsers/CDNs treat this as a fresh asset.
      icon: "/favicon-v3.ico",
      apple: "/favicon-v3.png",
      other: [
        { rel: "shortcut icon", url: "/favicon-v3.ico" },
        { rel: "icon", url: "/favicon-v3.png", type: "image/png" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rendlr",
              url: "https://www.rendlr.dev",
              logo: {
                "@type": "ImageObject",
                url: "https://www.rendlr.dev/Logos/Logo.png",
                width: 1200,
                height: 1200,
              },
            }),
          }}
        />
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
