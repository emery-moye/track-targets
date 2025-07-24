import { useState } from "react";
import { TierBadge, TierType } from "./TierBadge";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SchoolDetailsModal } from "./SchoolDetailsModal";
import { findSchoolStandards } from "@/data/schoolStandards";

export interface SchoolMatch {
  id: string;
  schoolName: string;
  division: string;
  conference: string;
  tier: TierType;
  state: string;
}

interface ResultsTableProps {
  results: SchoolMatch[];
}

export const ResultsTable = ({ results }: ResultsTableProps) => {
  const [divisionFilter, setDivisionFilter] = useState("all");
  const [conferenceFilter, setConferenceFilter] = useState("all");
  const [tierFilter, setTierFilter] = useState("all");
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const divisions = [...new Set(results.map(r => r.division))];
  const conferences = [...new Set(results.map(r => r.conference))];
  const tiers = ["target", "recruit", "walkon"];

  const filteredResults = results.filter(result => {
    const divMatch = divisionFilter === "all" || result.division === divisionFilter;
    const confMatch = conferenceFilter === "all" || result.conference === conferenceFilter;
    const tierMatch = tierFilter === "all" || result.tier === tierFilter;
    return divMatch && confMatch && tierMatch;
  });

  const handleSchoolClick = (schoolMatch: SchoolMatch) => {
    const schoolStandards = findSchoolStandards(schoolMatch.schoolName);
    if (schoolStandards) {
      setSelectedSchool(schoolStandards);
      setIsModalOpen(true);
    }
  };

  if (results.length === 0) {
    return (
      <div className="bg-card rounded-xl shadow-lg p-8 text-center">
        <p className="text-muted-foreground">Enter your information above to find college matches</p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          🎯 Your College Matches
        </h2>
        
        <div className="flex flex-wrap gap-4">
          <Select value={divisionFilter} onValueChange={setDivisionFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Divisions</SelectItem>
              {divisions.map(div => (
                <SelectItem key={div} value={div}>{div}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={conferenceFilter} onValueChange={setConferenceFilter}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Conferences</SelectItem>
              {conferences.map(conf => (
                <SelectItem key={conf} value={conf}>{conf}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={tierFilter} onValueChange={setTierFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tiers</SelectItem>
              {tiers.map(tier => (
                <SelectItem key={tier} value={tier}>
                  {tier.charAt(0).toUpperCase() + tier.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-semibold">School</th>
              <th className="text-left p-4 font-semibold">Division</th>
              <th className="text-left p-4 font-semibold">Conference</th>
              <th className="text-left p-4 font-semibold">Match Tier</th>
            </tr>
          </thead>
          <tbody>
            {filteredResults.map((result, index) => (
              <tr 
                key={result.id}
                className="border-b hover:bg-muted/30 hover:shadow-md transition-all duration-200 cursor-pointer"
                onClick={() => handleSchoolClick(result)}
              >
                <td className="p-4">
                  <span className="font-bold text-foreground">{result.schoolName}</span>
                </td>
                <td className="p-4">
                  <Badge variant="outline" className="text-muted-foreground">
                    {result.division}
                  </Badge>
                </td>
                <td className="p-4">
                  <span className="text-sm text-muted-foreground">{result.conference}</span>
                </td>
                <td className="p-4">
                  <TierBadge tier={result.tier} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredResults.length === 0 && results.length > 0 && (
        <div className="p-8 text-center">
          <p className="text-muted-foreground">No schools match your current filters</p>
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