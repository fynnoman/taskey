import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'msnbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'BingPreview',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'AdIdxBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Seznambot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Meta-ExternalFetcher',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'cohere-training-data-crawler',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'MistralAI-User',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'Diffbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup'],
      },
    ],
    sitemap: 'https://www.taskeyapp.com/sitemap.xml',
    host: 'https://www.taskeyapp.com',
  }
}
