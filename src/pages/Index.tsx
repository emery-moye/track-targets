import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/SearchForm";
import { ResultsTable, SchoolMatch } from "@/components/ResultsTable";
import { generateMatches } from "@/data/mockData";

const Index = () => {
  const [results, setResults] = useState<SchoolMatch[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (data: { gradeLevel: string; event: string; personalBest: string }) => {
    const matches = generateMatches(data.gradeLevel, data.event, data.personalBest);
    setResults(matches);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <SearchForm onSearch={handleSearch} />
        
        {hasSearched && (
          <ResultsTable results={results} />
        )}
      </main>
    </div>
  );
};

export default Index;
