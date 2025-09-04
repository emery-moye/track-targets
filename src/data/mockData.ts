import { SchoolMatch } from "@/components/ResultsTable";
import { schoolStandards } from "./schoolStandards";

// Helper function to convert time/distance to comparable number
const parsePerformance = (performance: string, event: string): number => {
  // Handle time formats (mm:ss.xx or ss.xx)
  if (performance.includes(':')) {
    const [minutes, seconds] = performance.split(':');
    return parseInt(minutes) * 60 + parseFloat(seconds);
  }
  
  // Handle distance formats - support both straight and curly quotes
  const straightApostrophe = "'";
  const curlyApostrophe = "\u2019";
  const straightQuote = '"';
  const curlyQuote = "\u201D";
  if (performance.includes(straightApostrophe) || performance.includes(straightQuote) || 
      performance.includes(curlyApostrophe) || performance.includes(curlyQuote)) {
    // Match both straight and curly quotes for feet and inches
    const feetMatch = performance.match(/(\d+)[\u0027\u2019]/);
    const inchMatch = performance.match(/(\d+)[\u0022\u201D]/);
    const feet = feetMatch ? parseInt(feetMatch[1]) : 0;
    const inches = inchMatch ? parseInt(inchMatch[1]) : 0;
    return feet * 12 + inches; // Convert to total inches
  }
  
  // Handle regular numbers (remove any non-numeric characters except decimal)
  const cleaned = performance.replace(/[^\d.]/g, '');
  return parseFloat(cleaned) || 0;
};

// Helper function to determine tier based on performance
const determineTier = (userPerformance: string, standards: any, event: string): "target" | "recruit" | "walkon" | null => {
  if (!standards || !standards[event]) return null;
  
  const userValue = parsePerformance(userPerformance, event);
  const targetValue = parsePerformance(standards[event].target, event);
  const recruitValue = parsePerformance(standards[event].recruit, event);
  const walkonValue = standards[event].walkon ? parsePerformance(standards[event].walkon, event) : null;
  
  console.log(`Event: ${event}, User: ${userPerformance} (${userValue}), Target: ${standards[event].target} (${targetValue}), Recruit: ${standards[event].recruit} (${recruitValue}), Walk-on: ${standards[event].walkon || 'N/A'} (${walkonValue || 'N/A'})`);
  
  // For track events (time-based), lower is better
  const isTimeBased = event.includes('m') && !event.includes('Jump') && !event.includes('Put') && !event.includes('Throw') && !event.includes('Discus') && !event.includes('Hammer') && !event.includes('Javelin');
  
  console.log(`Is time based: ${isTimeBased}`);
  
  if (isTimeBased) {
    if (userValue <= targetValue) return "target";
    if (userValue <= recruitValue) return "recruit";
    if (walkonValue !== null && userValue <= walkonValue) return "walkon";
  } else {
    // For field events (distance/height), higher is better
    // Check if user meets each tier's minimum requirement
    if (userValue >= targetValue) return "target";
    if (userValue >= recruitValue) return "recruit";
    if (walkonValue !== null && userValue >= walkonValue) return "walkon";
  }
  
  return null;
};

export const generateMatches = (gradeLevel: string, event: string, personalBest: string, gender: string): SchoolMatch[] => {
  const matches: SchoolMatch[] = [];
  
  console.log(`=== GENERATING MATCHES ===`);
  console.log(`Event: ${event}, Personal Best: ${personalBest}, Gender: ${gender}`);
  
  schoolStandards.forEach(school => {
    const standards = gender === "Men's" ? school.maleStandards : school.femaleStandards;
    console.log(`\n--- ${school.schoolName} (ID: ${school.id}, Conference: ${school.conference}) ---`);
    console.log(`Standards object:`, standards);
    console.log(`Has standards:`, !!standards);
    console.log(`Has event standards:`, standards && !!standards[event]);
    
    // Skip if standards don't exist for this gender or specific event
    if (!standards || !standards[event]) {
      console.log(`No standards for ${event} in ${gender} category - SKIPPING`);
      return;
    }
    
    console.log(`Standards for ${event}:`, standards[event]);
    const tier = determineTier(personalBest, standards, event);
    console.log(`Tier result: ${tier}`);
    
    if (tier) {
      const match = {
        id: school.id,
        schoolName: school.schoolName,
        division: school.division,
        conference: school.conference,
        state: school.state,
        tier
      };
      console.log(`Adding match:`, match);
      matches.push(match);
    }
  });
  
  // Sort by tier priority (target > recruit > walkon)
  const tierOrder = { target: 0, recruit: 1, walkon: 2 };
  return matches.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);
};
