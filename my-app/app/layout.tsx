import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alex Rendler - Software Developer Portfolio",
  description:
    "Portfolio of Alex Rendler, a Computer Science graduate from the University of Arizona",
  icons: {
    // prefer legacy .ico (added to public/) with PNG as a fallback for Apple/modern browsers
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
