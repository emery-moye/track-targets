import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { ResultsTable, SchoolMatch } from "@/components/ResultsTable";
import { StandardsTables } from "@/components/StandardsTables";
import { generateMatches } from "@/data/mockData";

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
                <a href="https://www.thepreferredrecruit.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
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
        <div className="container mx-auto text-center">
          <a 
            href="https://calendly.com/ryanapsearl/1-on-1-with-ryan?month=2025-08&week=2025-08-10" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
