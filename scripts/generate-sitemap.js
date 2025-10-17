import { schoolStandards } from '../src/data/schoolStandards.ts';
import { generateSchoolSlug } from '../src/lib/schoolPageUtils.ts';
import { writeFileSync } from 'fs';

const baseUrl = 'https://track-targets.com';
const today = new Date().toISOString().split('T')[0];

const generateSitemap = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

  // Add all school pages
  schoolStandards.forEach(school => {
    const slug = generateSchoolSlug(school.schoolName);
    sitemap += `  <url>
    <loc>${baseUrl}/schools/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;

  // Write sitemap to public folder
  writeFileSync('./public/sitemap.xml', sitemap, 'utf-8');
  
  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📊 Total URLs: ${schoolStandards.length + 1}`);
  console.log(`📍 Sitemap location: public/sitemap.xml`);
  console.log(`🌐 Sitemap URL: ${baseUrl}/sitemap.xml`);
};

generateSitemap();
