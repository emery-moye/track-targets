import { useState, useEffect, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { SchoolMatch } from "@/components/ResultsTable";
import { generateMatches } from "@/data/mockData";
import { Button } from "@/components/ui/button";

// Lazy load ResultsTable for better performance
const ResultsTable = lazy(() => import("@/components/ResultsTable").then(module => ({ default: module.ResultsTable })));

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState<SchoolMatch[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [initialFormData, setInitialFormData] = useState<{ event: string; personalBest: string; gender: string } | null>(null);

  // On mount, check if we have search params from URL
  useEffect(() => {
    const event = searchParams.get('event');
    const personalBest = searchParams.get('personalBest');
    const gender = searchParams.get('gender');

    if (event && personalBest && gender) {
      // Auto-populate form and trigger search
      const formData = { event, personalBest, gender };
      setInitialFormData(formData);
      
      const matches = generateMatches(event, personalBest, gender);
      setResults(matches);
      setHasSearched(true);
    }
  }, []); // Only run once on mount

  const handleSearch = (data: { event: string; personalBest: string; gender: string }) => {
    const matches = generateMatches(data.event, data.personalBest, data.gender);
    setResults(matches);
    setHasSearched(true);
    
    // Update URL with search params
    setSearchParams({
      event: data.event,
      personalBest: data.personalBest,
      gender: data.gender
    });
  };

  const handleReset = () => {
    setResults([]);
    setHasSearched(false);
    setInitialFormData(null);
    setSearchParams({}); // Clear URL params
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <Header onReset={handleReset} />
      
      <main className="container mx-auto px-6 py-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-foreground">Find your best college matches instantly</h2>
        </div>
        
        <SearchForm onSearch={handleSearch} initialValues={initialFormData} />
        
        {!hasSearched && (
          <>
            <div className="text-center mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Want Help With Your Recruitment Process?
              </h3>
              <a 
                href="https://start.thepreferredrecruit.com/home-page317375" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                Click here to learn more about our services
              </a>
            </div>
          </>
        )}
        
        {hasSearched && (
          <Suspense fallback={<div className="bg-card rounded-xl shadow-lg p-8 text-center">Loading results...</div>}>
            <ResultsTable results={results} />
          </Suspense>
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-4 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://app.thepreferredrecruit.com/page_3tfle/?utm_source=PRstandards&utm_medium=web&utm_campaign=PR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Apply Now
            </a>
            
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/preferredrecruit/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Follow us on Instagram"
              >
                <img 
                  src="/lovable-uploads/3c147542-29e4-4c27-9198-0d365762fd02.png" 
                  alt="Instagram" 
                  className="w-8 h-8"
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </a>
              <a
                href="https://www.tiktok.com/@preferredrecruit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Follow us on TikTok"
              >
                <img 
                  src="/lovable-uploads/82c35b69-d949-4123-bc13-1914a86a4454.png" 
                  alt="TikTok" 
                  className="w-8 h-8"
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </a>
              <a
                href="https://www.youtube.com/@thepreferredrecruit/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Subscribe to our YouTube channel"
              >
                <img 
                  src="/lovable-uploads/e6f73d11-1cba-49c6-8fc5-fa310e18e051.png" 
                  alt="YouTube" 
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                  width="32"
                  height="32"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
