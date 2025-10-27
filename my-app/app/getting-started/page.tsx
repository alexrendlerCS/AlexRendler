import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Search, Sparkles, Shield, Code2, Zap, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Get Started — Rendlr",
}

export default function GettingStartedPage() {
  const products = [
    {
      icon: Globe,
      title: "Website Design",
      description: "Beautiful, responsive websites tailored to your brand and goals.",
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search rankings and drive qualified organic traffic.",
    },
    {
      icon: Code2,
      title: "SaaS & Custom Apps",
      description: "Build scalable SaaS products or custom web apps with modern stacks.",
    },
    {
      icon: Shield,
      title: "Securing Data",
      description: "Enterprise-grade security practices to protect your users and data.",
    },
    {
      icon: Sparkles,
      title: "AI Integrations",
      description: "Add AI features that automate workflows and personalize experiences.",
    },
    {
      icon: TrendingUp,
      title: "Full Projects",
      description: "End-to-end delivery: design, build, launch, and ongoing growth services.",
    },
  ]

  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Getting Started</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Choose the product that best fits your needs and click Get Started to begin.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, idx) => {
          const Icon = p.icon
          return (
            <Card key={idx} className="hover:shadow-2xl transition">
              <CardHeader>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <span className="sr-only">{p.title}</span>
                  <Icon className="h-6 w-6" />
                </div>
                <CardTitle className="mt-2 text-lg">{p.title}</CardTitle>
                <CardDescription className="mt-1">{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <Link href="/contact" className="text-sm text-brand-blue hover:underline">
                    Get Started →
                  </Link>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </main>
  )
}
