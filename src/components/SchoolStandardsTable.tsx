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

export const SchoolStandardsTable = ({ title, standards }: SchoolStandardsTableProps) => {
  const events = Object.keys(standards);

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
                <TableHead className="font-semibold"><TierBadge tier="walkon" /></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event}>
                  <TableCell className="font-medium">{event}</TableCell>
                  <TableCell>{standards[event].target}</TableCell>
                  <TableCell>{standards[event].recruit}</TableCell>
                  <TableCell>{standards[event].walkon || 'N/A'}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
