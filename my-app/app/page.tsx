"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Search,
  Sparkles,
  Shield,
  ArrowRight,
  CheckCircle2,
  Code2,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScheduleCallModal from "@/components/ui/schedule-call-modal";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <ScheduleCallModal
        open={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center justify-center overflow-hidden w-screen left-1/2 -translate-x-1/2 -mt-8 px-0 py-0">
        <div className="absolute inset-0">
          <Image
            src="/bg.png"
            alt="Background"
            fill
            className="object-cover blur-sm transform-gpu scale-125 md:scale-115 lg:scale-105 xl:scale-105 2xl:scale-105 object-bottom md:object-bottom lg:object-center xl:object-center 2xl:object-center"
            priority
            quality={90}
          />
          {/* dark overlay (only in dark mode) */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-primary/30 dark:block hidden" />

          {/* subtle white overlay for light mode: bottom -> top */}
          <div className="absolute inset-0 pointer-events-none dark:hidden bg-gradient-to-t from-white/30 via-white/10 to-transparent" />

          {/* remove white bottom fade so background image reaches the page edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <div className="relative w-[800px] h-[800px]">
            <Image
              src="/Logos/Logo-Header.png"
              alt="Rendlr"
              fill
              className="object-contain animate-pulse"
            />
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-chart-1/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div
          className={`relative z-10 max-w-6xl mx-auto text-center space-y-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white mt-6 mb-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            <Sparkles className="h-4 w-4 animate-pulse" />
            Based in Carlsbad, CA
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-white">
            {/* Replace text logo with image logo (keep subtle float animation) */}
            <div className="flex justify-center mb-0">
              <div className="relative w-56 md:w-80 lg:w-96 h-20 md:h-28 lg:h-36 animate-float-sm">
                <Image
                  src="/Logos/logo-dark-transparent.png"
                  alt="Rendlr"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="block pt-4">
              <span className="text-6xl md:text-8xl bg-gradient-to-r from-white via-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Modern Web Solutions Built for Growth
              </span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto text-balance leading-relaxed">
            We build modern, secure, and high-performing websites designed to
            grow your business. Everything you need to succeed online in one
            place.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 justify-center pt-12 mb-12 text-sm text-gray-300">
            {[
              { icon: CheckCircle2, text: "Fast Delivery" },
              { icon: CheckCircle2, text: "SEO Optimized" },
              { icon: CheckCircle2, text: "Secure & Reliable" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="h-5 w-5 text-[#0A92F8]" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="border-t border-border/40 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
      >
        <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-3 pointer-events-none">
          <div className="relative w-[240px] h-[240px]">
            <Image
              src="/Logos/Logo-Header.png"
              alt="Rendlr"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 space-y-4 text-center fade-in-section opacity-0 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              What <span className="text-[#0A92F8]">Rendlr</span> Does
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your online presence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Globe,
                title: "Web Design",
                description:
                  "Beautiful, responsive websites that convert visitors into customers",
                color: "primary",
                delay: "0s",
              },
              {
                icon: Search,
                title: "SEO Optimization",
                description:
                  "Rank higher on Google and drive organic traffic to your site",
                color: "chart-1",
                delay: "0.1s",
              },
              {
                icon: Sparkles,
                title: "AI Integrations",
                description:
                  "Cutting-edge AI features to automate and enhance your business",
                color: "chart-2",
                delay: "0.2s",
              },
              {
                icon: Shield,
                title: "Digital Security",
                description:
                  "Protect your business with enterprise-grade security solutions",
                color: "chart-3",
                delay: "0.3s",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="fade-in-section opacity-0 group relative overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
                style={{ transitionDelay: service.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader className="relative">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-primary/50">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand-blue transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={whyUsRef}
        className="border-t border-border/40 relative overflow-hidden"
      >
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8 fade-in-section opacity-0 transition-all duration-1000">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                  Why Choose <span className="text-brand-blue">Rendlr</span>?
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  We combine technical expertise with business strategy to
                  deliver websites that don&apos;t just look great—they drive
                  results.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    description:
                      "Optimized for speed and performance to keep your visitors engaged",
                    color: "primary",
                  },
                  {
                    icon: Code2,
                    title: "Modern Technology",
                    description:
                      "Built with the latest frameworks and best practices for scalability",
                    color: "chart-1",
                  },
                  {
                    icon: Users,
                    title: "Dedicated Support",
                    description:
                      "We&apos;re here for you every step of the way, from launch to growth",
                    color: "chart-2",
                  },
                  {
                    icon: TrendingUp,
                    title: "Results Driven",
                    description:
                      "Focused on metrics that matter: conversions, traffic, and revenue",
                    color: "chart-3",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 group hover:translate-x-2 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-primary/50">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-brand-blue transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="relative fade-in-section opacity-0 transition-all duration-1000"
              style={{ transitionDelay: "0.3s" }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-chart-1 to-chart-3 rounded-2xl blur-3xl opacity-20 animate-pulse" />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-0 hidden sm:block">
                <div className="relative w-[300px] h-[300px]">
                  <Image
                    src="/Logos/Logo-Header.png"
                    alt="Rendlr"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <Card className="relative z-10 backdrop-blur-sm bg-card/50 border-border/50 p-8 transition-all duration-500">
                <div className="space-y-8">
                  {[
                    {
                      value: "30+",
                      label: "Websites Launched",
                      color: "text-primary",
                    },
                    {
                      value: "100%",
                      label: "Client Satisfaction",
                      color: "text-chart-1",
                    },
                    {
                      value: "24/7",
                      label: "Support Available",
                      color: "text-chart-2",
                    },
                  ].map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div
                        className={`text-6xl font-bold ${stat.color} inline-block`}
                      >
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-lg">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
          <div className="relative w-[700px] h-[700px]">
            <Image
              src="/Logos/Logo-Header.png"
              alt="Rendlr"
              fill
              className="object-contain animate-pulse"
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 relative z-10">
          <Card className="relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-primary/10 via-background to-chart-1/10 border-border/50 hover:border-white/30 transition-all duration-500 group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-1/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardContent className="relative p-12 md:p-16 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Ready to Grow Your Business with{" "}
                <span className="text-brand-blue">Rendlr</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Let&apos;s build something amazing together. Get a free
                consultation and see how we can help you succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="gap-2 bg-white hover:bg-gray-100 text-black shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <Link href="/getting-started">
                    Start Your Project
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent hover:bg-white/5 hover:scale-105 transition-all duration-300"
                  onClick={() => setIsScheduleOpen(true)}
                >
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 lg:h-5 lg:w-5">
                  <Image
                    src="/Logos/Logo-Header.png"
                    alt="Rendlr"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-base font-semibold lg:text-sm">
                  Rendlr
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs lg:text-sm">
                Modern web solutions built for growth. Based in Carlsbad, CA.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold">Services</h3>
              <ul className="space-y-1 text-sm lg:text-xs text-muted-foreground">
                {[
                  "Web Design",
                  "SEO Optimization",
                  "AI Integrations",
                  "Digital Security",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors hover:translate-x-1 inline-block duration-150 text-sm lg:text-xs"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold">Contact</h3>
              <ul className="space-y-1 text-sm lg:text-xs text-muted-foreground">
                <li>Carlsbad, CA</li>
                <li>
                  <a
                    href="mailto:alexrendler@yahoo.com"
                    className="hover:text-foreground transition-colors"
                  >
                    alexrendler@yahoo.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+17606539999"
                    className="hover:text-foreground transition-colors"
                  >
                    (760) 653-9999
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2025 Rendlr. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
