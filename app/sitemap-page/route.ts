import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.taskey.de';
  const currentDate = new Date().toISOString();

  const pages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/was-ist-taskey', priority: '0.9', changefreq: 'monthly' },
    { url: '/features', priority: '0.9', changefreq: 'monthly' },
    { url: '/demo', priority: '0.95', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.9', changefreq: 'monthly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/rollen', priority: '0.7', changefreq: 'monthly' },
    { url: '/enterprise', priority: '0.8', changefreq: 'monthly' },
    { url: '/premium-manager', priority: '0.8', changefreq: 'monthly' },
    { url: '/impressum', priority: '0.3', changefreq: 'yearly' },
    { url: '/datenschutz', priority: '0.3', changefreq: 'yearly' },
    { url: '/agb', priority: '0.3', changefreq: 'yearly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
