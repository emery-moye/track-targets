import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { schoolStandards } from '@/data/schoolStandards';
import { generateSchoolSlug } from '@/lib/schoolPageUtils';
import { Download, Copy, Check } from 'lucide-react';
import { toast } from 'sonner';

export default function GenerateSitemap() {
  const [copied, setCopied] = useState(false);
  const baseUrl = 'https://trackandfieldstandards.com';
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
    return sitemap;
  };

  const handleDownload = () => {
    const sitemap = generateSitemap();
    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    a.click();
    URL.revokeObjectURL(url);
    toast.success('Sitemap downloaded successfully!');
  };

  const handleCopy = async () => {
    const sitemap = generateSitemap();
    await navigator.clipboard.writeText(sitemap);
    setCopied(true);
    toast.success('Sitemap copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const totalUrls = schoolStandards.length + 1;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Generate Complete Sitemap</CardTitle>
            <CardDescription>
              Generate sitemap.xml with all {schoolStandards.length} schools + homepage = {totalUrls} total URLs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <Button onClick={handleDownload} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download sitemap.xml
              </Button>
              <Button 
                onClick={handleCopy} 
                variant="outline" 
                className="flex items-center gap-2"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </Button>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What to do next:</h3>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>Download the sitemap.xml file using the button above</li>
                <li>Replace the existing <code className="bg-background px-1 py-0.5 rounded">public/sitemap.xml</code> file with the downloaded one</li>
                <li>Publish your site</li>
                <li>Submit <code className="bg-background px-1 py-0.5 rounded">sitemap.xml</code> to Google Search Console</li>
              </ol>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> The sitemap will be auto-generated during build time going forward, 
                but you can use this page anytime to manually generate and download it.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
            <CardDescription>First 10 lines of the generated sitemap</CardDescription>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-lg text-xs overflow-x-auto">
              {generateSitemap().split('\n').slice(0, 10).join('\n')}
              {'\n... (remaining URLs)'}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
