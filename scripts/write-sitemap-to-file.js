import { schoolStandards } from '../src/data/schoolStandards.ts';
import { writeFileSync } from 'fs';

const baseUrl = 'https://trackandfieldstandards.com';
const today = new Date().toISOString().split('T')[0];

// Generate school slug function (matching the one in schoolPageUtils.ts)
function generateSchoolSlug(schoolName) {
  return schoolName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim() + '-track-standards';
}

console.log(`🚀 Starting sitemap generation...`);
console.log(`📚 Found ${schoolStandards.length} schools to process`);

// Generate sitemap header
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
schoolStandards.forEach((school, index) => {
  const slug = generateSchoolSlug(school.schoolName);
  sitemap += `  <url>
    <loc>${baseUrl}/schools/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
`;
  
  // Progress indicator
  if ((index + 1) % 50 === 0) {
    console.log(`  ✓ Generated ${index + 1} URLs...`);
  }
});

sitemap += `</urlset>`;

// Write sitemap to public folder
try {
  writeFileSync('./public/sitemap.xml', sitemap, 'utf-8');
  console.log(`\n✅ Sitemap generated successfully!`);
  console.log(`📊 Total URLs: ${schoolStandards.length + 1} (1 homepage + ${schoolStandards.length} schools)`);
  console.log(`📍 Sitemap location: public/sitemap.xml`);
  console.log(`🌐 Sitemap URL: ${baseUrl}/sitemap.xml`);
} catch (error) {
  console.error('❌ Error writing sitemap:', error);
  process.exit(1);
}
