import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { searchSchools, SchoolStandards } from "@/data/schoolStandards";
import { generateSchoolSlug } from "@/lib/schoolPageUtils";

export const CollegeSearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SchoolStandards[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Real-time search with debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim().length >= 2) {
        const results = searchSchools(searchQuery).slice(0, 10);
        setSearchResults(results);
        setShowResults(true);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim().length >= 2) {
      const results = searchSchools(searchQuery).slice(0, 10);
      setSearchResults(results);
      setShowResults(true);
    }
  };

  const handleSchoolClick = (school: SchoolStandards) => {
    const slug = generateSchoolSlug(school.schoolName);
    navigate(`/schools/${slug}`);
    setShowResults(false);
    setIsMobileExpanded(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleMobileToggle = () => {
    setIsMobileExpanded(!isMobileExpanded);
    if (!isMobileExpanded) {
      setShowResults(false);
    }
  };

  const handleMobileClose = () => {
    setIsMobileExpanded(false);
    setShowResults(false);
    setSearchQuery("");
  };

  return (
    <>
      {/* Desktop Search */}
      <div ref={containerRef} className="hidden md:block relative w-full max-w-2xl mx-auto">
        <div className="flex gap-3">
          <Input
            type="text"
            placeholder="Search colleges..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="h-12 text-lg"
          />
          <Button onClick={handleSearch} size="lg" className="h-12 px-6">
            <Search className="h-5 w-5" />
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
      </div>

      {/* Mobile Search */}
      <div ref={containerRef} className="md:hidden relative w-full">
        {!isMobileExpanded ? (
          <Button
            onClick={handleMobileToggle}
            variant="outline"
            size="sm"
            className="w-full justify-start text-muted-foreground h-10"
          >
            <Search className="h-4 w-4 mr-2" />
            Search colleges...
          </Button>
        ) : (
          <div className="fixed inset-0 bg-card z-50 p-4">
            <div className="flex items-center gap-2 mb-4">
              <Input
                type="text"
                placeholder="Search colleges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                className="h-10 flex-1"
                autoFocus
              />
              <Button onClick={handleSearch} size="sm" className="h-10">
                <Search className="h-4 w-4" />
              </Button>
              <Button onClick={handleMobileClose} variant="outline" size="sm" className="h-10">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {showResults && searchResults.length > 0 && (
              <div className="bg-card border rounded-lg shadow-lg max-h-96 overflow-y-auto">
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
              <div className="bg-card border rounded-lg shadow-lg p-3">
                <div className="text-sm text-muted-foreground">No schools found</div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};