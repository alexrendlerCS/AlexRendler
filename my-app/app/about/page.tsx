"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, ExternalLink, Code2, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Skills from "@/components/skills"
import Tag from "../../components/ui/tag"

import heroBg from "../../homepage/hero-background.png"
import aicademyExample from "../../public/aicadmy_example.png"

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
					minHeight: "100vh",
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
						{["Full-Stack Development", "AI Engineering", "Cybersecurity", "SQL", "Dev Ops"].map(
							(tech) => (
								<Tag key={tech} className="text-white">
									{tech}
								</Tag>
							)
						)}
					</div>

					{/* Certification Badges */}
					<div className="flex flex-wrap justify-center gap-4 pt-6 max-w-6xl mx-auto">
						{/* IBM AI Engineering Badge */}
						<div className="relative w-full sm:w-[calc(33.333%-0.67rem)] max-w-sm group cursor-pointer">
							<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
							<div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-xl p-5 border border-blue-500/20 shadow-xl group-hover:border-blue-500/40 group-hover:scale-105 transition-all duration-300 h-full">
								<div className="flex items-center gap-4">
									{/* IBM Logo */}
									<div className="flex-shrink-0">
										<div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-shadow duration-300">
											<svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
												<path d="M0 4h6v2H0V4zm0 4h6v2H0V8zm0 4h6v2H0v-2zm0 4h6v2H0v-2zm8-12h8v2H8V4zm0 4h8v2H8V8zm0 4h8v2H8v-2zm0 4h8v2H8v-2zm10-12h6v2h-6V4zm0 4h6v2h-6V8zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2z"/>
											</svg>
										</div>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2 mb-1">
											<svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
											</svg>
											<h3 className="text-base font-bold text-white">AI Engineer</h3>
										</div>
										<p className="text-sm font-semibold text-blue-400">IBM AI Engineering Professional Certificate</p>
									</div>
								</div>
							</div>
						</div>

						{/* SIMS Security Badge */}
						<div className="relative w-full sm:w-[calc(33.333%-0.67rem)] max-w-sm group cursor-pointer">
							<div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-emerald-400 to-emerald-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
							<div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-xl p-5 border border-emerald-500/20 shadow-xl group-hover:border-emerald-500/40 group-hover:scale-105 transition-all duration-300 h-full">
								<div className="flex items-center gap-4">
									{/* Database/Security Icon */}
									<div className="flex-shrink-0">
										<div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/50 transition-shadow duration-300">
											<svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm6 14c0 .55-2.69 2-6 2s-6-1.45-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4.55c-1.3.95-3.58 1.55-6 1.55s-4.7-.6-6-1.55V9.64c1.47.83 3.61 1.36 6 1.36s4.53-.53 6-1.36v2.81zM12 9C8.69 9 6 7.55 6 7s2.69-2 6-2 6 1.45 6 2-2.69 2-6 2z"/>
											</svg>
										</div>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2 mb-1">
											<svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
											</svg>
											<h3 className="text-base font-bold text-white">Data Engineer</h3>
										</div>
										<p className="text-sm font-semibold text-emerald-400">SIMS Security & SQL Developer</p>
									</div>
								</div>
							</div>
						</div>

						{/* Rendlr Founder Badge */}
						<div className="relative w-full sm:w-[calc(33.333%-0.67rem)] max-w-sm group cursor-pointer">
							<div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-400 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
							<div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-xl p-5 border border-purple-500/20 shadow-xl group-hover:border-purple-500/40 group-hover:scale-105 transition-all duration-300 h-full">
								<div className="flex items-center gap-4">
									{/* Code Icon */}
									<div className="flex-shrink-0">
										<div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-violet-400 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-300">
											<svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
											</svg>
										</div>
									</div>
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-2 mb-1">
											<svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
											</svg>
											<h3 className="text-base font-bold text-white">Full Stack Developer</h3>
										</div>
										<p className="text-sm font-semibold text-purple-400">Founder of Rendlr</p>
									</div>
								</div>
							</div>
						</div>
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
								Designing Artificial Intelligence That Builds Intelligence
							</h2>
							<div className="space-y-4 text-lg text-muted-foreground text-pretty">
								<p>
									At AIcademy, I engineered an AI tutor system that fundamentally 
									reimagines how students interact with educational content. Instead 
									of providing direct answers, the AI acts as a learning coach,dynamically 
									injecting real-time lesson content, student progress data, and quiz 
									scores into its context to deliver personalized, Socratic-method guidance.
								</p>
								<p>
									The technical innovation lies in the prompt engineering and response 
									architecture: every AI interaction references specific curriculum material, 
									asks three guiding questions, and enforces a consistent pedagogical 
									structure through post-processing. This prevents passive learning while 
									teaching students to leverage AI as a thinking partner rather than an 
									answer machine—critical skills for the AI-driven workplace.
								</p>
							</div>
											<div className="flex flex-wrap gap-3 pt-4">
												{[
													"Next.js",
													"R.A.G",
													"AI Engineering",
													"Ollama",
													"Local LLM",
													"Prompt Design",
												].map((tech) => (
													<Tag key={tech} className="bg-primary/10 border-primary/20 text-primary dark:text-white">
														{tech}
													</Tag>
												))}
											</div>
						</div>

						<div className="relative group">
							<div className="absolute -inset-1 bg-gradient-to-r from-primary via-chart-1 to-chart-3 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
							<div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-2xl">
								<Image
									src={aicademyExample}
									alt="AICademy AI tutor using Socratic method to guide student learning"
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
						<div className="flex items-center justify-center">
							<span className="text-sm uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
								Selected Work
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-balance text-foreground dark:text-white">
							Featured Projects
						</h2>

						<div className="mx-auto my-3 h-1 w-24 rounded-full bg-gradient-to-r from-primary to-chart-1 opacity-90" />

						<p className="text-lg text-foreground/95 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
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
							<div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
								<div className="space-y-6">
									<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
										<Sparkles className="h-4 w-4" />
										Project Walkthroughs
									</div>
									<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
										Project Walkthroughs
									</h2>
									<div className="space-y-4 text-lg text-muted-foreground text-pretty">
										<p>
											Deep dives into my projects, development process, and technical
											decisions. Browse short walkthroughs that highlight architecture,
											implementation, and trade-offs.
										</p>
									</div>

									{/* left column: header + paragraph only; walkthrough cards moved to right column */}
								</div>

								<div className="space-y-4">
									{videos.map((video, idx) => (
										<Card key={idx} className="group overflow-hidden bg-card/50 border-border/50 transition-all">
											<div className="flex items-center gap-4 p-4">
												<div className="w-28 h-16 relative rounded-md overflow-hidden bg-muted flex-shrink-0">
													<Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
												</div>
												<div className="flex-1">
													<h3 className="text-base font-semibold">{video.title}</h3>
													<p className="text-sm text-muted-foreground">{video.description}</p>
												</div>
											</div>
										</Card>
									))}
								</div>
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
