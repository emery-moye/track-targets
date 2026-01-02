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
    <div className="min-h-screen bg-background pb-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 hero-gradient opacity-5 pointer-events-none" />
      
      {/* Athletic diagonal stripe accents */}
      <div className="fixed top-0 left-0 right-0 h-96 bg-gradient-to-br from-primary/10 via-transparent to-transparent transform -skew-y-2 pointer-events-none" />
      
      {/* Floating accent orbs */}
      <div className="fixed top-32 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="fixed top-64 left-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl animate-float-delayed pointer-events-none" />
      <div className="fixed bottom-48 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float pointer-events-none" />
      
      <Header onReset={handleReset} />
      
      <main className="container mx-auto px-6 py-8 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8 py-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient mb-4 tracking-tight">
            Find Your Best College Matches
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare your times against 500+ college track & field programs instantly
          </p>
        </div>
        
        <SearchForm onSearch={handleSearch} initialValues={initialFormData} />
        
        {!hasSearched && (
          <div className="glass-card rounded-2xl shadow-2xl p-8 mb-8 max-w-2xl mx-auto text-center hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want Help With Your Recruitment Process?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get personalized guidance from our expert team
            </p>
            <a 
              href="https://start.thepreferredrecruit.com/home-page317375" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Learn More About Our Services
            </a>
          </div>
        )}
        
        {hasSearched && (
          <Suspense fallback={<div className="glass-card rounded-2xl shadow-2xl p-8 text-center">Loading results...</div>}>
            <ResultsTable results={results} />
          </Suspense>
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 glass-footer py-4 px-6 z-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://app.thepreferredrecruit.com/quiz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Free Recruitment Quiz
            </a>
            
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/preferredrecruit/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:scale-110 hover:opacity-80 transition-all duration-200"
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
                className="p-2 hover:scale-110 hover:opacity-80 transition-all duration-200"
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
                className="p-2 hover:scale-110 hover:opacity-80 transition-all duration-200"
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
