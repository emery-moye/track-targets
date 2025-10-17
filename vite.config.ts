import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";

// Custom plugin to generate sitemap at build time
function generateSitemapPlugin() {
  return {
    name: 'generate-sitemap',
    closeBundle: async () => {
      try {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        
        // Dynamically import the school data
        const { schoolStandards } = await import('./src/data/schoolStandards.ts');
        
        const baseUrl = 'https://trackandfieldstandards.com';
        const today = new Date().toISOString().split('T')[0];
        
        function generateSchoolSlug(schoolName: string) {
          return schoolName
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim() + '-track-standards';
        }
        
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;
        
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
        
        const outputPath = path.resolve(__dirname, 'public/sitemap.xml');
        writeFileSync(outputPath, sitemap, 'utf-8');
        
        console.log(`✅ Sitemap generated: ${schoolStandards.length + 1} URLs`);
      } catch (error) {
        console.error('❌ Error generating sitemap:', error);
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    generateSitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
