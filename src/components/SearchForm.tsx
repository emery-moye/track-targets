import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFormProps {
  onSearch: (data: { gradeLevel: string; event: string; personalBest: string; gender: string }) => void;
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

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [gradeLevel, setGradeLevel] = useState("");
  const [event, setEvent] = useState("");
  const [personalBest, setPersonalBest] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const validatePersonalBest = (value: string) => {
    // Allow formats like: 10.5, 10.50, 1:23.45 for running events
    // Allow formats like: 10'5", 10'5.5", 6'6" for field events
    // Handle various quote characters that mobile devices might insert
    const timePattern = /^(\d+:)?\d+(\.\d+)?$/; // Running events
    const fieldPattern = /^\d+['ʼ'](\d+(\.\d+)?[""]?)?$/; // Field events with feet/inches - handles curly quotes
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
        
        {error && (
          <p className="text-destructive text-sm">{error}</p>
        )}
        
        <Button 
          type="submit" 
          className="w-full md:w-auto px-8 h-12 rounded-xl shadow-lg hover:scale-105 transition-all duration-200"
        >
          <Search className="mr-2 h-4 w-4" />
          Search Colleges
        </Button>
      </form>
    </div>
  );
};