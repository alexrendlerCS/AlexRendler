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

      {/* Contact Banner Section */}
      <section className="mt-20 mb-8">
        <Card className="relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-primary/10 via-background to-chart-1/10 border-border/50 hover:border-white/30 transition-all duration-500">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-1/5" />
          
          <CardContent className="relative p-12 md:p-16 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Need help getting started?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Not sure which service is right for you? Let's discuss your project goals and find the perfect solution to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                onClick={() => setIsScheduleOpen(true)}
                className="px-6 py-3 bg-brand-blue hover:bg-brand-blue/90 text-white font-medium rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Schedule a Free Consultation
              </button>
              <Link 
                href="mailto:alexrendler@yahoo.com"
                className="px-6 py-3 bg-transparent hover:bg-white/5 text-foreground border border-border/50 hover:border-white/30 font-medium rounded-lg transition-all duration-300"
              >
                Send Email
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>📧 alexrendler@yahoo.com • 📞 (760) 653-9999</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
