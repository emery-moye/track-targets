import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFormProps {
  onSearch: (data: { event: string; personalBest: string; gender: string }) => void;
  initialValues?: { event: string; personalBest: string; gender: string } | null;
}

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
  "1600m",
  "Mile",
  "3000m",
  "5000m",
  "10000m",
  "100m Hurdles",
  "110m Hurdles",
  "300m Hurdles",
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
  const [event, setEvent] = useState("");
  const [personalBest, setPersonalBest] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  // Populate form with initial values if provided
  useEffect(() => {
    if (initialValues) {
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
    
    if (!event || !personalBest || !gender) {
      setError("Please fill in all fields");
      return;
    }
    
    if (!validatePersonalBest(personalBest)) {
      setError("Please enter a valid time (e.g., 10.5, 1:23.45, 6'6\")");
      return;
    }
    
    setError("");
    onSearch({ event, personalBest, gender });
  };

  return (
    <div className="neo-border neo-shadow-primary bg-card p-6 md:p-8 mb-8 neo-hover">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Select value={event} onValueChange={setEvent}>
              <SelectTrigger className="h-14 rounded-none neo-border bg-background font-medium focus:ring-0 focus:ring-offset-0 focus:border-primary">
                <SelectValue placeholder="Select Event" />
              </SelectTrigger>
              <SelectContent className="neo-border rounded-none">
                {eventOptions.map((eventName) => (
                  <SelectItem key={eventName} value={eventName} className="font-medium">
                    {eventName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Input
              type="text"
              placeholder="Personal Best (e.g., 10.5, 1:23.45)"
              value={personalBest}
              onChange={(e) => setPersonalBest(e.target.value)}
              className="h-14 rounded-none neo-border bg-background font-medium focus:ring-0 focus:ring-offset-0 focus:border-primary focus-visible:ring-0"
            />
          </div>
          
          <div>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger className="h-14 rounded-none neo-border bg-background font-medium focus:ring-0 focus:ring-offset-0 focus:border-primary">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent className="neo-border rounded-none">
                {genderOptions.map((genderOption) => (
                  <SelectItem key={genderOption} value={genderOption} className="font-medium">
                    {genderOption}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-center mt-6">
          <Button 
            type="submit" 
            className="neo-border bg-primary text-primary-foreground px-12 h-16 rounded-none font-black text-lg neo-shadow neo-btn"
          >
            <Search className="mr-3 h-6 w-6" />
            Search Colleges
          </Button>
        </div>
        
        {error && (
          <p className="text-destructive text-sm text-center mt-4 font-bold">{error}</p>
        )}
      </form>
    </div>
  );
};