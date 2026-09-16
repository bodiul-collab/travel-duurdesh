import fs from 'fs';
import path from 'path';

/**
 * Automated Sitemap Generator for Travel DuurDesh
 * Domain: https://www.travelduurdesh.com
 * Supports Google Search Console & Bing Webmaster Tools
 */

const DOMAIN = 'https://www.travelduurdesh.com';
const TODAY = new Date().toISOString().split('T')[0]; // e.g., 2026-09-16

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

// 1. Core General Pages
const PAGES: SitemapUrl[] = [
  { loc: `${DOMAIN}/`, lastmod: TODAY, changefreq: 'daily', priority: '1.0' },
  { loc: `${DOMAIN}/food`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/tools`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/about`, lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: `${DOMAIN}/contact`, lastmod: TODAY, changefreq: 'monthly', priority: '0.70' },
  { loc: `${DOMAIN}/privacy`, lastmod: TODAY, changefreq: 'monthly', priority: '0.50' },
  { loc: `${DOMAIN}/terms`, lastmod: TODAY, changefreq: 'monthly', priority: '0.50' }
];

// 2. Destinations (Cities & Heritage Sites)
const DESTINATIONS: SitemapUrl[] = [
  { loc: `${DOMAIN}/destinations`, lastmod: TODAY, changefreq: 'weekly', priority: '0.95' },
  { loc: `${DOMAIN}/destinations/makkah`, lastmod: TODAY, changefreq: 'weekly', priority: '0.95' },
  { loc: `${DOMAIN}/destinations/madinah`, lastmod: TODAY, changefreq: 'weekly', priority: '0.95' },
  { loc: `${DOMAIN}/destinations/alula`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/destinations/dubai`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/destinations/istanbul`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/destinations/new-york`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/destinations/london`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/destinations/kuala-lumpur`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/destinations/dhaka`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' }
];

// 3. Countries
const COUNTRIES: SitemapUrl[] = [
  { loc: `${DOMAIN}/destinations/bangladesh`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/destinations/malaysia`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/destinations/turkey`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/destinations/usa`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/destinations/uk`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' }
];

// 4. Hotels & Stays
const HOTELS: SitemapUrl[] = [
  { loc: `${DOMAIN}/hotels`, lastmod: TODAY, changefreq: 'daily', priority: '0.95' },
  { loc: `${DOMAIN}/hotels/makkah`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/hotels/madinah`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/hotels/dubai`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/hotels/istanbul`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/hotels/london`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/hotels/kuala-lumpur`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/hotels/dhaka`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' }
];

// 5. Flights & Airfares
const FLIGHTS: SitemapUrl[] = [
  { loc: `${DOMAIN}/flights`, lastmod: TODAY, changefreq: 'daily', priority: '0.95' },
  { loc: `${DOMAIN}/flights/jeddah-umrah`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/flights/madinah`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/flights/dubai`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/flights/istanbul`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/flights/london`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/flights/dhaka`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/flights/kuala-lumpur`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' },
  { loc: `${DOMAIN}/flights/new-york`, lastmod: TODAY, changefreq: 'weekly', priority: '0.85' }
];

// 6. Umrah Pilgrimage Guide Hub & Sub-Guides
const UMRAH: SitemapUrl[] = [
  { loc: `${DOMAIN}/umrah`, lastmod: TODAY, changefreq: 'weekly', priority: '1.0' },
  { loc: `${DOMAIN}/blog/umrah-travel/first-time-umrah-travel-guide`, lastmod: TODAY, changefreq: 'weekly', priority: '0.95' },
  { loc: `${DOMAIN}/blog/umrah-travel/what-to-pack-for-umrah`, lastmod: TODAY, changefreq: 'weekly', priority: '0.95' }
];

// 7. Travel & Food Blog Articles
const BLOG: SitemapUrl[] = [
  { loc: `${DOMAIN}/blog`, lastmod: TODAY, changefreq: 'daily', priority: '0.90' },
  { loc: `${DOMAIN}/blog/travel-guides/makkah-travel-guide-first-time-visitors`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/blog/umrah-travel/first-time-umrah-travel-guide`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' },
  { loc: `${DOMAIN}/blog/umrah-travel/what-to-pack-for-umrah`, lastmod: TODAY, changefreq: 'weekly', priority: '0.90' }
];

function buildUrlsetXml(urls: SitemapUrl[]): string {
  const urlNodes = urls
    .map(
      (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlNodes}
</urlset>
`;
}

function buildSitemapIndexXml(sitemaps: { loc: string; lastmod: string }[]): string {
  const sitemapNodes = sitemaps
    .map(
      (s) => `  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapNodes}
</sitemapindex>
`;
}

function generate() {
  const publicDir = path.resolve(process.cwd(), 'public');
  const sitemapsDir = path.join(publicDir, 'sitemaps');

  if (!fs.existsSync(sitemapsDir)) {
    fs.mkdirSync(sitemapsDir, { recursive: true });
  }

  // 1. Write individual child sitemaps
  const files: Record<string, SitemapUrl[]> = {
    'pages.xml': PAGES,
    'destinations.xml': DESTINATIONS,
    'countries.xml': COUNTRIES,
    'hotels.xml': HOTELS,
    'flights.xml': FLIGHTS,
    'umrah.xml': UMRAH,
    'blog.xml': BLOG
  };

  const sitemapList: { loc: string; lastmod: string }[] = [];

  for (const [filename, urls] of Object.entries(files)) {
    const filePath = path.join(sitemapsDir, filename);
    const xml = buildUrlsetXml(urls);
    fs.writeFileSync(filePath, xml, 'utf8');
    console.log(`Generated: public/sitemaps/${filename} (${urls.length} URLs)`);

    sitemapList.push({
      loc: `${DOMAIN}/sitemaps/${filename}`,
      lastmod: TODAY
    });
  }

  // 2. Write master sitemap index at public/sitemap.xml
  const masterIndexXml = buildSitemapIndexXml(sitemapList);
  const masterIndexPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(masterIndexPath, masterIndexXml, 'utf8');
  console.log(`Generated: public/sitemap.xml (Master Index with ${sitemapList.length} sub-sitemaps)`);
}

generate();
