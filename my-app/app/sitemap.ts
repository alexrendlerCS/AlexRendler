import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.rendlr.dev'
  
  // Static pages
  const routes = [
    '',
    '/about',
    '/projects', 
    '/blog',
    '/getting-started',
    '/journey',
    '/journey/demo',
  ]

  // Blog posts
  const blogPosts = [
    '/blog/building-personal-brand',
    '/blog/seo-integration',
    '/blog/ai-tutor-platform-evolution',
    '/blog/admin-dashboard-analytics',
    '/blog/ai-personalization',
    '/blog/intro-skill-assessment',
    '/blog/statsx-scaling-backend',
    '/blog/ai-tutor-prompt-engineering',
    '/blog/ai-tutor-tracking-correctness',
  ]

  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}${post}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}