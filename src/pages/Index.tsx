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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <SearchForm onSearch={handleSearch} />
        
        <div className="text-center text-lg text-foreground mb-8 max-w-4xl mx-auto font-medium">
          <p>
            School standards are calculated using TFRRS and other statistics, while some come directly from school's websites. 
            Below are general recruitment standards for Division one track and field. If you need help with your recruitment 
            journey email us at: <a href="mailto:tracktargets@gmail.com" className="text-primary hover:underline">tracktargets@gmail.com</a>
          </p>
        </div>
        
        <StandardsTables />
        
        {hasSearched && (
          <ResultsTable results={results} />
        )}
      </main>
    </div>
  );
};

export default Index;
