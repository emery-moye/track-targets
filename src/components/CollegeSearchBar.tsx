import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { searchSchools, SchoolStandards } from "@/data/schoolStandards";
import { SchoolDetailsModal } from "./SchoolDetailsModal";

export const CollegeSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SchoolStandards[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<SchoolStandards | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = searchSchools(searchQuery);
      setSearchResults(results);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleSchoolClick = (school: SchoolStandards) => {
    setSelectedSchool(school);
    setIsModalOpen(true);
    setShowResults(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search colleges..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="h-10"
        />
        <Button onClick={handleSearch} size="sm" className="h-10">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {searchResults.map((school) => (
            <div
              key={school.id}
              className="p-3 hover:bg-muted/30 cursor-pointer border-b last:border-b-0"
              onClick={() => handleSchoolClick(school)}
            >
              <div className="font-medium">{school.schoolName}</div>
              <div className="text-sm text-muted-foreground">
                {school.division} • {school.conference} • {school.state}
              </div>
            </div>
          ))}
        </div>
      )}

      {showResults && searchResults.length === 0 && searchQuery.trim() && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border rounded-lg shadow-lg z-50 p-3">
          <div className="text-sm text-muted-foreground">No schools found</div>
        </div>
      )}

      <SchoolDetailsModal
        school={selectedSchool}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};