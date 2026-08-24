import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'msnbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'BingPreview',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'AdIdxBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'YandexBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Slurp',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Seznambot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Perplexity-User',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Claude-User',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Meta-ExternalAgent',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Meta-ExternalFetcher',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'LinkedInBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'cohere-training-data-crawler',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'YouBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'MistralAI-User',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'DuckAssistBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'Diffbot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/', '/410', '/dashboard', '/signup', '/redesign-preview', '/en/redesign-preview', '/fr/redesign-preview'],
      },
    ],
    sitemap: 'https://www.taskeyapp.com/sitemap.xml',
    host: 'https://www.taskeyapp.com',
  }
}
