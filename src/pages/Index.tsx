import { useState, useEffect, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { SchoolMatch } from "@/components/ResultsTable";
import { generateMatches } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-background pb-24 neo-pattern">
      <Header onReset={handleReset} />
      
      <main className="container mx-auto px-4 md:px-6 py-8">
        {/* Hero Section - Neobrutalist Style */}
        <div className="neo-border neo-shadow bg-card p-8 md:p-12 mb-10 max-w-4xl mx-auto neo-hover">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight">
            Find Your Best{" "}
            <span className="text-primary underline decoration-4 underline-offset-4">College Matches</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mt-4 font-medium">
            Compare your times against 500+ college track & field programs instantly
          </p>
        </div>
        
        <SearchForm onSearch={handleSearch} initialValues={initialFormData} />
        
        {!hasSearched && (
          <div className="neo-border neo-shadow neo-accent-yellow p-8 mb-8 max-w-2xl mx-auto neo-hover">
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3">
              Want Help With Your Recruitment?
            </h3>
            <p className="text-foreground/80 mb-6 font-medium">
              Get personalized guidance from our expert team
            </p>
            <a 
              href="https://start.thepreferredrecruit.com/home-page317375" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="neo-border bg-foreground text-background font-black h-14 px-8 rounded-none neo-shadow-sm neo-btn text-lg">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        )}
        
        {hasSearched && (
          <Suspense fallback={
            <div className="neo-border neo-shadow bg-card p-8 text-center font-bold">
              Loading results...
            </div>
          }>
            <ResultsTable results={results} />
          </Suspense>
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 neo-footer py-4 px-6 z-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <a 
              href="https://app.thepreferredrecruit.com/quiz/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="neo-border-primary bg-primary text-primary-foreground font-black h-12 px-6 rounded-none neo-shadow-sm neo-btn">
                Free Recruitment Quiz
              </Button>
            </a>
            
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/preferredrecruit/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-border bg-card p-2 neo-shadow-sm neo-hover"
                aria-label="Follow us on Instagram"
              >
                <img 
                  src="/lovable-uploads/3c147542-29e4-4c27-9198-0d365762fd02.png" 
                  alt="Instagram" 
                  className="w-6 h-6"
                  loading="lazy"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://www.tiktok.com/@preferredrecruit"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-border bg-card p-2 neo-shadow-sm neo-hover"
                aria-label="Follow us on TikTok"
              >
                <img 
                  src="/lovable-uploads/82c35b69-d949-4123-bc13-1914a86a4454.png" 
                  alt="TikTok" 
                  className="w-6 h-6"
                  loading="lazy"
                  width="24"
                  height="24"
                />
              </a>
              <a
                href="https://www.youtube.com/@thepreferredrecruit/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-border bg-card p-2 neo-shadow-sm neo-hover"
                aria-label="Subscribe to our YouTube channel"
              >
                <img 
                  src="/lovable-uploads/e6f73d11-1cba-49c6-8fc5-fa310e18e051.png" 
                  alt="YouTube" 
                  className="h-6 w-auto object-contain"
                  loading="lazy"
                  width="24"
                  height="24"
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