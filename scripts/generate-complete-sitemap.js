import { schoolStandards } from '../src/data/schoolStandards.ts';

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
console.log(`Generating sitemap for ${schoolStandards.length} schools...`);

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
    console.log(`  Generated ${index + 1} URLs...`);
  }
});

sitemap += `</urlset>`;

// Output the sitemap
console.log(sitemap);
console.log(`\n✅ Sitemap generated successfully!`);
console.log(`📊 Total URLs: ${schoolStandards.length + 1}`);
console.log(`🌐 All ${schoolStandards.length} school pages included`);
