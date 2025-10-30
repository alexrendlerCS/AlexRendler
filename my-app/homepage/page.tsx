import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code2, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Tag from "../components/ui/tag"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-background.png"
            alt="Office background"
            fill
            className="object-cover object-center blur-sm scale-105"
            priority
          />
          {/* Dark overlay for text readability */}
          {/* Reduce white overlay intensity in light mode while keeping strong overlay in dark mode */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/70 dark:to-background/95" />
          {/* Additional gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-chart-1/10" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Alex Rendler
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto text-balance">
              Full-stack developer crafting elegant solutions to complex problems
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-white hover:bg-gray-100 text-black shadow-lg shadow-white/20">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-white/30 hover:bg-white/10 bg-white/5 text-white backdrop-blur-sm"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </Button>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-3 justify-center pt-8">
            {["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"].map((tech) => (
              <Tag key={tech} className="text-white">{tech}</Tag>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-white animate-pulse" />
          </div>
        </div>
      </section>

      <section className="border-b border-border/40 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Current Focus
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                Building the Future of Web Development
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground text-pretty">
                <p>
                  I'm currently focused on developing a revolutionary AI-powered code review platform that helps teams
                  ship better software faster. The platform uses machine learning to identify potential bugs, security
                  vulnerabilities, and performance bottlenecks before they reach production.
                </p>
                <p>
                  This project combines my passion for developer tools with cutting-edge AI technology, featuring
                  real-time collaboration, intelligent suggestions, and seamless integration with popular version
                  control systems.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                {["Next.js 15", "AI SDK", "WebSockets", "Supabase", "Vercel"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-chart-1 to-chart-3 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
                <Image
                  src="/modern-code-editor-interface-with-ai-suggestions.jpg"
                  alt="Current project screenshot"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4 text-center">
            <div className="flex items-center justify-center">
              <span className="text-sm uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-foreground dark:text-white">Featured Projects</h2>

            <div className="mx-auto my-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-chart-1 opacity-90" />

            <p className="text-lg text-foreground/95 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              A selection of my recent work showcasing full-stack development and modern web technologies
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card 1 */}
            <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src="/modern-web-dashboard.jpg"
                  alt="Project 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  E-Commerce Platform
                  <Code2 className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                </CardTitle>
                <CardDescription className="text-base">
                  A full-stack e-commerce solution with real-time inventory management and payment processing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs text-foreground">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="text-xs text-foreground">
                    Stripe
                  </Badge>
                  <Badge variant="outline" className="text-xs text-foreground">
                    PostgreSQL
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-white text-black hover:bg-gray-100 border-white/20"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Project Card 2 */}
            <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src="/task-management-app.png"
                  alt="Project 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  Task Manager Pro
                  <Code2 className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                </CardTitle>
                <CardDescription className="text-base">
                  Collaborative task management tool with real-time updates and team analytics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs text-foreground">
                    React
                  </Badge>
                  <Badge variant="outline" className="text-xs text-foreground">
                    WebSocket
                  </Badge>
                  <Badge variant="outline" className="text-xs text-foreground">
                    MongoDB
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-white text-black hover:bg-gray-100 border-white/20"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Project Card 3 */}
            <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src="/ai-chatbot-interface.png"
                  alt="Project 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-xl">
                  AI Assistant
                  <Code2 className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                </CardTitle>
                <CardDescription className="text-base">
                  Intelligent chatbot powered by GPT-4 with custom training and context awareness
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="text-xs text-foreground">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="text-xs text-foreground">
                    OpenAI
                  </Badge>
                  <Badge variant="outline" className="text-xs text-foreground">
                    Vercel AI
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  className="w-full gap-2 bg-white text-black hover:bg-gray-100 border-white/20"
                  asChild
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="gap-2 bg-white text-black hover:bg-gray-100 border-white/20">
              View All Projects
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-border/40 bg-gradient-to-b from-muted/20 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Project Walkthroughs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deep dives into my projects, development process, and technical decisions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Video Card 1 */}
            <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src="/video-thumbnail-coding.jpg"
                  alt="Video 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm group-hover:scale-110 transition-transform shadow-2xl">
                    <svg className="h-8 w-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Building a Real-Time Chat App</CardTitle>
                <CardDescription className="text-base">
                  15 min walkthrough • WebSocket implementation and scaling strategies
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Video Card 2 */}
            <Card className="group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src="/video-thumbnail-development.jpg"
                  alt="Video 2"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm group-hover:scale-110 transition-transform shadow-2xl">
                    <svg className="h-8 w-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Optimizing Next.js Performance</CardTitle>
                <CardDescription className="text-base">
                  22 min walkthrough • Advanced caching and image optimization techniques
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Ready to Grow CTA + Reviews */}
      <section className="border-b border-border/40 bg-gradient-to-b from-muted/10 to-background/0">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to Grow Your Business with Rendlr?</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional sites and booking systems designed to convert visitors into customers. Trusted by coaches
              and small businesses.
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Review 1 */}
              <blockquote className="rounded-2xl p-6 bg-white/6 backdrop-blur-md border border-white/8 text-foreground dark:bg-zinc-900/40 dark:border-zinc-800">
                <p className="text-sm leading-relaxed">"The quick delivery time and amazing design exceeded my expectations. Alex went above and beyond what was expected, creating a platform that perfectly fits my practice needs."</p>
                <footer className="mt-4 text-sm font-medium text-muted-foreground">— Kimberly Joyce</footer>
              </blockquote>

              {/* Review 2 */}
              <blockquote className="rounded-2xl p-6 bg-white/6 backdrop-blur-md border border-white/8 text-foreground dark:bg-zinc-900/40 dark:border-zinc-800">
                <p className="text-sm leading-relaxed">"FitWeb Studio has made managing my business so much easier! Booking clients and selling session packages is now completely seamless. Their team is responsive, reliable, and truly attentive to every detail. My clients love how easy the new system is to use—it's been a total game changer!"</p>
                <footer className="mt-4 text-sm font-medium text-muted-foreground">— Coach Kilday</footer>
              </blockquote>

              {/* Review 3 */}
              <blockquote className="rounded-2xl p-6 bg-white/6 backdrop-blur-md border border-white/8 text-foreground dark:bg-zinc-900/40 dark:border-zinc-800">
                <p className="text-sm leading-relaxed">"Alex delivered a product better than what was expected and added more features than expected, making the website better than what was asked for. Truly exceptional work!"</p>
                <footer className="mt-4 text-sm font-medium text-muted-foreground">— Michael Marx</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">© 2025 Alex Rendler. Built with Next.js and Tailwind CSS.</p>
            <div className="flex gap-4">
              <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
