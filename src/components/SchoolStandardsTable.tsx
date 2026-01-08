import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EventStandards } from "@/data/schoolStandards";
import { TierBadge } from "@/components/TierBadge";

interface SchoolStandardsTableProps {
  title: string;
  standards: Record<string, EventStandards>;
}

// Helper to check if a value is valid (not TBD, empty, or undefined)
const isValidValue = (value: string | undefined): boolean => {
  return !!value && value !== "TBD" && value !== "N/A";
};

// Helper to display value or dash
const displayValue = (value: string | undefined): string => {
  if (!value || value === "TBD" || value === "N/A") return "-";
  return value;
};

export const SchoolStandardsTable = ({ title, standards }: SchoolStandardsTableProps) => {
  // Filter out events where ALL values are TBD or missing
  const filteredEvents = Object.keys(standards).filter((event) => {
    const std = standards[event];
    return isValidValue(std.target) || isValidValue(std.recruit) || isValidValue(std.walkon);
  });

  // Check if any event has walk-on standards
  const hasWalkonStandards = filteredEvents.some((event) => isValidValue(standards[event].walkon));

  if (filteredEvents.length === 0) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-semibold">Event</TableHead>
                <TableHead className="font-semibold"><TierBadge tier="target" /></TableHead>
                <TableHead className="font-semibold"><TierBadge tier="recruit" /></TableHead>
                {hasWalkonStandards && (
                  <TableHead className="font-semibold"><TierBadge tier="walkon" /></TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEvents.map((event) => (
                <TableRow key={event}>
                  <TableCell className="font-medium">{event}</TableCell>
                  <TableCell>{displayValue(standards[event].target)}</TableCell>
                  <TableCell>{displayValue(standards[event].recruit)}</TableCell>
                  {hasWalkonStandards && (
                    <TableCell>{displayValue(standards[event].walkon)}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
