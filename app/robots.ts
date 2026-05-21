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
    ],
    sitemap: 'https://www.taskeyapp.com/sitemap.xml',
    host: 'https://www.taskeyapp.com',
  }
}
