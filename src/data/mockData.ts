import { SchoolMatch } from "@/components/ResultsTable";
import { TierType } from "@/components/TierBadge";

// Mock data for demonstration
export const mockSchools: SchoolMatch[] = [
  {
    id: "1",
    schoolName: "Ohio State University",
    division: "D1",
    conference: "Big Ten",
    tier: "target" as TierType,
    state: "OH"
  },
  {
    id: "2", 
    schoolName: "University of Akron",
    division: "D1",
    conference: "MAC",
    tier: "recruit" as TierType,
    state: "OH"
  },
  {
    id: "3",
    schoolName: "Duquesne University", 
    division: "D1",
    conference: "Atlantic 10",
    tier: "walkon" as TierType,
    state: "PA"
  },
  {
    id: "4",
    schoolName: "University of Michigan",
    division: "D1", 
    conference: "Big Ten",
    tier: "target" as TierType,
    state: "MI"
  },
  {
    id: "5",
    schoolName: "Miami University",
    division: "D1",
    conference: "MAC",
    tier: "recruit" as TierType,
    state: "OH"
  },
  {
    id: "6",
    schoolName: "Kent State University",
    division: "D1",
    conference: "MAC", 
    tier: "walkon" as TierType,
    state: "OH"
  },
  {
    id: "7",
    schoolName: "Case Western Reserve",
    division: "D3",
    conference: "UAA",
    tier: "nomatch" as TierType,
    state: "OH"
  },
  {
    id: "8",
    schoolName: "Carnegie Mellon",
    division: "D3",
    conference: "UAA",
    tier: "recruit" as TierType,
    state: "PA"
  }
];

// Mock matching logic - in a real app this would be more sophisticated
export const generateMatches = (gradeLevel: string, event: string, personalBest: string): SchoolMatch[] => {
  // Simple mock logic - just return a subset based on event type
  const eventCategory = getEventCategory(event);
  
  return mockSchools.filter(school => {
    // Mock logic: show different schools based on event category
    if (eventCategory === "sprint") {
      return ["target", "recruit", "walkon"].includes(school.tier);
    } else if (eventCategory === "distance") {
      return school.division === "D1" || school.tier === "recruit";
    } else {
      return true; // Show all for field events
    }
  });
};

const getEventCategory = (event: string): string => {
  const sprints = ["100m", "200m", "400m", "110m Hurdles", "400m Hurdles"];
  const distance = ["800m", "1500m", "Mile", "3000m", "5000m", "10000m", "3000m Steeplechase"];
  const field = ["High Jump", "Pole Vault", "Long Jump", "Triple Jump", "Shot Put", "Discus", "Hammer", "Javelin"];
  
  if (sprints.includes(event)) return "sprint";
  if (distance.includes(event)) return "distance";
  if (field.includes(event)) return "field";
  return "other";
};