"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Search, Sparkles, Shield, Code2, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ScheduleCallModal from "@/components/ui/schedule-call-modal"

export default function GettingStartedPage() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false)
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
        <Link href="/" className="inline-block mx-auto mb-6" aria-label="Rendlr home">
          <div className="relative w-40 h-16 mx-auto">
            <Image src="/Logos/Logo-Header.png" alt="Rendlr logo" fill className="object-contain" />
          </div>
          <span className="sr-only">Rendlr — Go to homepage</span>
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold">Getting Started</h1>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">Choose the product that best fits your needs and click Get Started to begin.</p>
      </div>

      <>
        <ScheduleCallModal open={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => {
          const Icon = p.icon
          return (
            <Card
              key={idx}
              className="group relative overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
            >
              <CardHeader className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                  <span className="sr-only">{p.title}</span>
                  <Icon className="h-7 w-7" />
                </div>
                <CardTitle className="mt-2 text-lg group-hover:text-brand-blue transition-colors duration-300">{p.title}</CardTitle>
                <CardDescription className="mt-1">{p.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsScheduleOpen(true)}
                    className="text-sm text-brand-blue hover:underline"
                  >
                    Get Started →
                  </button>
                </div>
              </CardContent>
            </Card>
          )
          })}
        </div>
      </>
    </main>
  )
}
