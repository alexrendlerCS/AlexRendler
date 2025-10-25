"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink, Code2, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Skills from "@/components/skills"
import Tag from "../components/ui/tag"

import heroBg from "../homepage/hero-background.png"
import modernCode from "../homepage/modern-code-editor-interface-with-ai-suggestions.jpg"

const videos = [
	{
		title: "Building a Real-Time Chat App",
		description: "15 min walkthrough • WebSocket implementation and scaling strategies",
		thumbnail: "/VideoThumbnail.png",
		link: "#",
	},
	{
		title: "Optimizing Next.js Performance",
		description: "22 min walkthrough • Advanced caching and image optimization techniques",
		thumbnail: "/VideoThumbnail2.png",
		link: "#",
	},
]

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section
				className="relative flex items-center justify-center px-0 py-0 overflow-hidden"
				style={{
					left: "50%",
					right: "50%",
					marginLeft: "-50vw",
					marginRight: "-50vw",
					width: "100vw",
					position: "relative",
					top: 0,
					marginTop:
						"-88px" /* pull up to compensate for header (56px) + main padding (32px) */,
					minHeight: "calc(100vh + 88px)",
				}}
			>
				<div className="absolute inset-0">
					<Image
						src={heroBg}
						alt="Office background"
						fill
						className="object-cover object-center blur-sm scale-105"
						priority
					/>
					{/* Reduce white overlay intensity in light mode while keeping strong overlay in dark mode */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/70 dark:to-background/95" />
					<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-chart-1/10" />
				</div>

				<div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
					<div className="space-y-4">
						<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-white">
							Hi, I&apos;m{" "}
							<span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
								Alex Rendler
							</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto text-balance">
							Full-stack developer crafting elegant solutions to complex
							problems
						</p>
					</div>

					<div className="flex flex-wrap gap-4 justify-center">
						<Link href="/projects" className="">
							<Button
								size="lg"
								className="gap-2 bg-white hover:bg-gray-100 text-black shadow-lg shadow-white/20"
							>
								View My Work
								<ArrowRight className="h-4 w-4" />
							</Button>
						</Link>
						<Link href="/contact">
							<Button
								size="lg"
								variant="outline"
								className="gap-2 border-white/30 hover:bg-white/10 bg-white/5 text-white backdrop-blur-sm"
							>
								<Mail className="h-4 w-4" />
								Get In Touch
							</Button>
						</Link>
					</div>

					<div className="flex flex-wrap gap-3 justify-center pt-8">
						{["React", "TypeScript", "Next.js", "Node.js", "PostgreSQL"].map(
							(tech) => (
								<Tag key={tech} className="text-white">
									{tech}
								</Tag>
							)
						)}
					</div>
				</div>

				{/* scroll indicator removed */}
			</section>

			{/* Current Focus + Featured Projects */}
			<section className="border-b border-border/40 bg-gradient-to-b from-background to-muted/20">
				<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
					<div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
						<div className="space-y-6">
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
								<Sparkles className="h-4 w-4" />
								Current Focus
							</div>
							<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
								Securing Data And Powering Payroll Intelligence
							</h2>
							<div className="space-y-4 text-lg text-muted-foreground text-pretty">
								<p>
									I currently work full-time as a Cyber Security Data
									Integration Specialist, building and operating secure data
									pipelines that ingest, normalize, and protect high-volume
									enterprise datasets. My day-to-day focuses include SQL-driven
									analysis, scripting and automation, Python tooling for ETL and
									integrations, and ensuring data integrity and observability
									across downstream systems.
								</p>
								<p>
									Alongside my full-time role I maintain contract work as a
									full-stack developer. Right now I am developing an innovative
									payroll platform that combines deep analytics with multi-step
									submission and approval workflows — designed to handle complex
									approval chains, reconciliation, and auditing. The payroll
									project uses a React frontend, Node.js backend, and a flexible
									NoSQL datastore to support rapid iteration and rich reporting.
								</p>
							</div>
											<div className="flex flex-wrap gap-3 pt-4">
												{[
													"Scripting",
													"SSMS",
													"Data Integration",
													"React",
													"Node.js",
												].map((tech) => (
													<Tag key={tech} className="bg-primary/10 border-primary/20 text-primary dark:text-white">
														{tech}
													</Tag>
												))}
											</div>
						</div>

						<div className="relative group">
							<div className="absolute -inset-1 bg-gradient-to-r from-primary via-chart-1 to-chart-3 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
							<div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
								<Image
									src={modernCode}
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

			<section className="relative border-b border-border/40">
				{/* full-bleed background panel behind the cards (stretches viewport-wide) */}
				<div className="pointer-events-none">
					{/* use left/right 50% + negative margins so the gradient spans the full viewport width */}
					<div
						className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-600/30 to-orange-500/25"
						style={{
							position: "absolute",
							left: "50%",
							right: "50%",
							marginLeft: "-50vw",
							marginRight: "-50vw",
							width: "100vw",
							top: 0,
							bottom: 0,
						}}
					/>
				</div>
				<div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
					<div className="mb-12 space-y-4 text-center">
						<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance text-foreground dark:text-white">
							Featured Projects
						</h2>
										<p className="text-lg text-foreground dark:text-gray-300 max-w-2xl mx-auto">
							A selection of my recent work showcasing full-stack development
							and modern web technologies
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						<Card className="group overflow-hidden backdrop-blur-md bg-white/30 border border-white/20 text-foreground transition-all duration-500 hover:bg-white/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
							<CardHeader className="px-6 pt-6">
								<CardTitle className="flex items-center justify-between text-xl">
									Realty Edge{" "}
									<Code2 className="h-5 w-5 text-muted-foreground transition-colors" />
								</CardTitle>
								<CardDescription className="text-base">
									Modern property listing and analytics with responsive mapping and search.
								</CardDescription>
							</CardHeader>
							<div className="relative aspect-video overflow-hidden bg-muted mx-6 my-4 rounded-lg">
								<Image
									src="/realty-edge-showcase.png"
									alt="Realty Edge"
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-teal-500/100 via-teal-500/10 to-transparent opacity-65 group-hover:opacity-80 transition-opacity duration-300" />
							</div>
							<CardContent className="px-6 pb-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{["Next.js", "React", "Real-Estate"].map((tech) => (
										<Tag key={tech}>{tech}</Tag>
									))}
								</div>
								<Button variant="outline" className="w-full gap-2 bg-white text-black hover:bg-gray-100 border-white/20" asChild>
									<a href="https://realtyedge.vercel.app" target="_blank" rel="noopener noreferrer">View Project <ExternalLink className="h-3 w-3" /></a>
								</Button>
							</CardContent>
						</Card>

						<Card className="group overflow-hidden backdrop-blur-md bg-white/30 border border-white/20 text-foreground transition-all duration-500 hover:bg-white/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
							<CardHeader className="px-6 pt-6">
								<CardTitle className="flex items-center justify-between text-xl">
									Fitness Trainer Platform{" "}
									<Code2 className="h-5 w-5 text-muted-foreground transition-colors" />
								</CardTitle>
								<CardDescription className="text-base">
									Fitness platform with scheduling, client management, and payments.
								</CardDescription>
							</CardHeader>
							<div className="relative aspect-video overflow-hidden bg-muted mx-6 my-4 rounded-lg">
								<Image
									src="/fitness-trainer-showcase.png"
									alt="Fitness Trainer Platform"
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-red-600/100 via-red-600/10 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-300" />
							</div>
							<CardContent className="px-6 pb-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{["React", "Node.js", "Payments"].map((tech) => (
										<Tag key={tech}>{tech}</Tag>
									))}
								</div>
								<Button variant="outline" className="w-full gap-2 bg-white text-black hover:bg-gray-100 border-white/20" asChild>
									<a href="https://www.coachkilday.com/" target="_blank" rel="noopener noreferrer">View Project <ExternalLink className="h-3 w-3" /></a>
								</Button>
							</CardContent>
						</Card>

						<Card className="group overflow-hidden backdrop-blur-md bg-white/30 border border-white/20 text-foreground transition-all duration-500 hover:bg-white/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1">
							<CardHeader className="px-6 pt-6">
								<CardTitle className="flex items-center justify-between text-xl">
									Aicademy{" "}
									<Code2 className="h-5 w-5 text-muted-foreground transition-colors" />
								</CardTitle>
								<CardDescription className="text-base">
									AI-powered education platform with demo accounts, and intelligent tutoring features.
								</CardDescription>
							</CardHeader>
							<div className="relative aspect-video overflow-hidden bg-muted mx-6 my-4 rounded-lg">
								<Image
									src="/aicademy-showcase.png"
									alt="Aicademy"
									fill
									className="object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-orange-500/100 via-orange-500/10 to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-300" />
							</div>
							<CardContent className="px-6 pb-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{["React", "AI Engineering", "Analytics"].map((tech) => (
										<Tag key={tech}>{tech}</Tag>
									))}
								</div>
								<Button variant="outline" className="w-full gap-2 bg-white text-black hover:bg-gray-100 border-white/20" asChild>
									<a href="https://aicademy-six.vercel.app/" target="_blank" rel="noopener noreferrer">View Project <ExternalLink className="h-3 w-3" /></a>
								</Button>
							</CardContent>
						</Card>
					</div>

					<div className="mt-12 text-center">
						<Link href="/projects">
							<Button
								variant="outline"
								size="lg"
								className="gap-2 bg-white text-black hover:bg-gray-100 border-white/20"
							>
								View All Projects <ExternalLink className="h-4 w-4" />
							</Button>
						</Link>
					</div>
				</div>
			</section>

			<section className="border-b border-border/40 bg-gradient-to-b from-muted/20 to-background">
				<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
					<div className="mb-12 space-y-4 text-center">
						<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
							Project Walkthroughs
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Deep dives into my projects, development process, and technical
							decisions
						</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2">
						{videos.map((video, idx) => (
							<Card
								key={idx}
								className="group overflow-hidden backdrop-blur-sm bg-card/50 border-border/50 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
							>
								<div className="relative aspect-video overflow-hidden bg-muted">
									<Image
										src={video.thumbnail}
										alt={video.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors">
										<div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm group-hover:scale-110 transition-transform shadow-2xl">
											<svg
												className="h-8 w-8 text-black ml-1"
												fill="currentColor"
												viewBox="0 0 24 24"
											>
												<path d="M8 5v14l11-7z" />
											</svg>
										</div>
									</div>
								</div>
								<CardHeader>
									<CardTitle className="text-xl">{video.title}</CardTitle>
									<CardDescription className="text-base">
										{video.description}
									</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Insert Skills section from previous homepage to preserve skills list */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<Skills />
				</div>
			</section>
		</div>
	)
}
