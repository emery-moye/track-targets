import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { ResultsTable, SchoolMatch } from "@/components/ResultsTable";
import { StandardsTables } from "@/components/StandardsTables";
import { generateMatches } from "@/data/mockData";
// import instagramLogo from "@/assets/instagram-logo.png";
// import tiktokLogo from "@/assets/tiktok-logo.png";

const Index = () => {
  const [results, setResults] = useState<SchoolMatch[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (data: { gradeLevel: string; event: string; personalBest: string; gender: string }) => {
    const matches = generateMatches(data.gradeLevel, data.event, data.personalBest, data.gender);
    setResults(matches);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <SearchForm onSearch={handleSearch} />
        
        {!hasSearched && (
          <>
            <div className="text-center text-lg text-foreground mb-8 max-w-4xl mx-auto font-medium space-y-4">
              <p>
                Only 1.9% of high school track and field athletes compete at the NCAA Division 1 level. Less than 7% of all high school track athletes will compete in any NCAA division. Athletes working with a recruitment agency are 5x more likely to be recruited by D1 programs. Athletes using recruitment services have a 90% higher chance of securing scholarship offers. 80% of athletes with a personalized recruitment strategy receive interest from multiple colleges.
              </p>
              <p>
                The Preferred Recruit is an elite athlete recruitment agency specializing in track and field. We guarantee direct contact with Division1 athletes and their coaches, leveraging a unique referral-based strategy to maximize recruitment success.
              </p>
              <p>
                <a href="https://start.thepreferredrecruit.com/home-page317375" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline underline">
                  Click here to learn more about our services
                </a>
              </p>
            </div>
            
            <StandardsTables />
          </>
        )}
        
        {hasSearched && (
          <ResultsTable results={results} />
        )}
      </main>
      
      <footer className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-4 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://calendly.com/ryanapsearl/1-on-1-with-ryan?month=2025-08&week=2025-08-10" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Book a Call
            </a>
            
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/preferredrecruit/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Follow us on Instagram"
              >
                <img src="/lovable-uploads/3c147542-29e4-4c27-9198-0d365762fd02.png" alt="Instagram" className="w-8 h-8" />
              </a>
              <a
                href="https://www.tiktok.com/@preferredrecruit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Follow us on TikTok"
              >
                <img src="/lovable-uploads/82c35b69-d949-4123-bc13-1914a86a4454.png" alt="TikTok" className="w-8 h-8" />
              </a>
              <a
                href="https://www.youtube.com/@thepreferredrecruit/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:opacity-80 transition-opacity"
                aria-label="Subscribe to our YouTube channel"
              >
                <img src="/lovable-uploads/e6f73d11-1cba-49c6-8fc5-fa310e18e051.png" alt="YouTube" className="h-8 w-auto object-contain" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
