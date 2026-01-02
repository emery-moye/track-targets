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
    <div className="min-h-screen gradient-bg pb-28">
      <Header onReset={handleReset} />
      
      <main className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary rounded-full pulse-dot"></span>
            500+ College Programs
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
            Find Your Perfect
            <span className="gradient-text"> College Match</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mt-5 max-w-xl mx-auto leading-relaxed">
            Compare your personal bests against recruiting standards from top track & field programs
          </p>
        </div>
        
        <SearchForm onSearch={handleSearch} initialValues={initialFormData} />
        
        {!hasSearched && (
          <div className="gradient-card rounded-2xl p-8 md:p-10 max-w-2xl mx-auto text-center soft-shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Need Help With Recruitment?
            </h3>
            <p className="text-white/80 mb-6 text-lg">
              Get personalized guidance from our expert team
            </p>
            <a 
              href="https://start.thepreferredrecruit.com/home-page317375" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold h-12 px-8 rounded-xl btn-smooth shadow-lg">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        )}
        
        {hasSearched && (
          <Suspense fallback={
            <div className="bg-card rounded-2xl soft-shadow-lg p-8 text-center text-muted-foreground">
              Loading results...
            </div>
          }>
            <ResultsTable results={results} />
          </Suspense>
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 glass border-t border-border/50 py-4 px-6 z-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <a 
              href="https://app.thepreferredrecruit.com/quiz/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold h-11 px-6 rounded-xl btn-smooth glow-primary">
                Free Recruitment Quiz
              </Button>
            </a>
            
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/preferredrecruit/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <img 
                  src="/lovable-uploads/3c147542-29e4-4c27-9198-0d365762fd02.png" 
                  alt="Instagram" 
                  className="w-5 h-5"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </a>
              <a
                href="https://www.tiktok.com/@preferredrecruit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="Follow us on TikTok"
              >
                <img 
                  src="/lovable-uploads/82c35b69-d949-4123-bc13-1914a86a4454.png" 
                  alt="TikTok" 
                  className="w-5 h-5"
                  loading="lazy"
                  width="20"
                  height="20"
                />
              </a>
              <a
                href="https://www.youtube.com/@thepreferredrecruit/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <img 
                  src="/lovable-uploads/e6f73d11-1cba-49c6-8fc5-fa310e18e051.png" 
                  alt="YouTube" 
                  className="h-5 w-auto object-contain"
                  loading="lazy"
                  width="20"
                  height="20"
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
