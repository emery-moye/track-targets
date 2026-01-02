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
    <div className="glass-card rounded-2xl shadow-2xl p-8 mb-8 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Select value={event} onValueChange={setEvent}>
              <SelectTrigger className="h-14 rounded-xl border-2 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-200">
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
              className="h-14 rounded-xl border-2 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-200"
            />
          </div>
          
          <div>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger className="h-14 rounded-xl border-2 border-border/50 focus:border-primary focus:ring-primary/20 transition-all duration-200">
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
        
        <div className="flex justify-center mt-6">
          <div className="relative">
            {/* Pulsing glow effect behind button */}
            <div className="absolute inset-0 bg-primary/40 rounded-2xl blur-xl animate-pulse-glow" />
            <Button 
              type="submit" 
              className="relative px-10 h-16 rounded-2xl shadow-xl text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300"
            >
              <Search className="mr-3 h-6 w-6" />
              Search Colleges
            </Button>
          </div>
        </div>
        
        {error && (
          <p className="text-destructive text-sm text-center mt-4 font-medium">{error}</p>
        )}
      </form>
    </div>
  );
};