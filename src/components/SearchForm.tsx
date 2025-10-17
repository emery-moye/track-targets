import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFormProps {
  onSearch: (data: { gradeLevel: string; event: string; personalBest: string; gender: string }) => void;
  initialValues?: { gradeLevel: string; event: string; personalBest: string; gender: string } | null;
}

const gradeOptions = [
  "High School Freshman",
  "High School Sophomore", 
  "High School Junior",
  "High School Senior",
  "College Freshman",
  "College Sophomore",
  "College Junior",
  "College Senior"
];

const genderOptions = [
  "Men's",
  "Women's"
];

const eventOptions = [
  "100m",
  "200m", 
  "400m",
  "800m",
  "1500m",
  "Mile",
  "3000m",
  "5000m",
  "10000m",
  "100m Hurdles",
  "110m Hurdles",
  "400m Hurdles",
  "3000m Steeplechase",
  "High Jump",
  "Pole Vault",
  "Long Jump",
  "Triple Jump",
  "Shot Put",
  "Discus",
  "Hammer",
  "Javelin"
];

export const SearchForm = ({ onSearch, initialValues }: SearchFormProps) => {
  const [gradeLevel, setGradeLevel] = useState("");
  const [event, setEvent] = useState("");
  const [personalBest, setPersonalBest] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  // Populate form with initial values if provided
  useEffect(() => {
    if (initialValues) {
      setGradeLevel(initialValues.gradeLevel);
      setEvent(initialValues.event);
      setPersonalBest(initialValues.personalBest);
      setGender(initialValues.gender);
    }
  }, [initialValues]);

  const validatePersonalBest = (value: string) => {
    // Allow formats like: 10.5, 10.50, 1:23.45 for running events
    // Allow formats like: 6', 6'6, 6'6", 22'6", 10'5.5" for field events
    const timePattern = /^(\d+:)?\d+(\.\d+)?$/; // Running events
    // Field events: EXPLICIT straight and curly quotes - straight: ' " curly: ' "
    const fieldPattern = /^\d+['\u0027\u2019](\d+(\.\d+)?["\u0022\u201D]?)?$/; // Unicode for both quote types
    return timePattern.test(value.trim()) || fieldPattern.test(value.trim());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!gradeLevel || !event || !personalBest || !gender) {
      setError("Please fill in all fields");
      return;
    }
    
    if (!validatePersonalBest(personalBest)) {
      setError("Please enter a valid time (e.g., 10.5, 1:23.45, 6'6\")");
      return;
    }
    
    setError("");
    onSearch({ gradeLevel, event, personalBest, gender });
  };

  return (
    <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Select value={gradeLevel} onValueChange={setGradeLevel}>
              <SelectTrigger className="h-12 focus:ring-primary focus:border-primary">
                <SelectValue placeholder="Select Grade Level" />
              </SelectTrigger>
              <SelectContent>
                {gradeOptions.map((grade) => (
                  <SelectItem key={grade} value={grade}>
                    {grade}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Select value={event} onValueChange={setEvent}>
              <SelectTrigger className="h-12 focus:ring-primary focus:border-primary">
                <SelectValue placeholder="Select Event" />
              </SelectTrigger>
              <SelectContent>
                {eventOptions.map((eventName) => (
                  <SelectItem key={eventName} value={eventName}>
                    {eventName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Input
              type="text"
              placeholder="Personal Best (e.g., 10.5, 1:23.45, 6'6&quot;)"
              value={personalBest}
              onChange={(e) => setPersonalBest(e.target.value)}
              className="h-12 focus:ring-primary focus:border-primary"
            />
          </div>
          
          <div>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger className="h-12 focus:ring-primary focus:border-primary">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                {genderOptions.map((genderOption) => (
                  <SelectItem key={genderOption} value={genderOption}>
                    {genderOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="col-start-2 col-span-2 justify-self-center mt-4">
          <Button 
            type="submit" 
            className="px-8 h-16 rounded-xl shadow-lg hover:scale-105 transition-all duration-200 text-lg font-semibold"
          >
            <Search className="mr-3 h-5 w-5" />
            Search Colleges
          </Button>
        </div>
        
        {error && (
          <p className="text-destructive text-sm mt-4">{error}</p>
        )}
      </form>
    </div>
  );
};