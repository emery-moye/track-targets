import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { TierBadge } from "./TierBadge";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SchoolStandards } from "@/data/schoolStandards";

interface SchoolDetailsModalProps {
  school: SchoolStandards | null;
  isOpen: boolean;
  onClose: () => void;
}

export const SchoolDetailsModal = ({ school, isOpen, onClose }: SchoolDetailsModalProps) => {
  if (!school) return null;

  const renderStandardsTable = (standards: Record<string, any>, title: string) => (
    <div className="space-y-4">
      <h4 className="font-semibold text-lg">{title} Standards</h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 font-semibold">Event</th>
              <th className="text-left p-3 font-semibold">
                <TierBadge tier="target" /> Target
              </th>
              <th className="text-left p-3 font-semibold">
                <TierBadge tier="recruit" /> Recruit
              </th>
              <th className="text-left p-3 font-semibold">
                <TierBadge tier="walkon" /> Walk-On
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(standards).map(([event, eventStandards]) => (
              <tr key={event} className="border-b hover:bg-muted/30">
                <td className="p-3 font-medium">{event}</td>
                <td className="p-3 text-target">{eventStandards.target}</td>
                <td className="p-3 text-recruit">{eventStandards.recruit}</td>
                <td className="p-3 text-walkon">{eventStandards.walkon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            {school.schoolName}
            <Badge variant="outline">{school.division}</Badge>
          </DialogTitle>
          <div className="flex gap-2 text-sm text-muted-foreground">
            <span>{school.conference}</span>
            <span>•</span>
            <span>{school.state}</span>
          </div>
        </DialogHeader>
        
        <Tabs defaultValue="male" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="male">Men's Standards</TabsTrigger>
            <TabsTrigger value="female">Women's Standards</TabsTrigger>
          </TabsList>
          
          <TabsContent value="male" className="mt-6">
            {renderStandardsTable(school.maleStandards, "Men's")}
          </TabsContent>
          
          <TabsContent value="female" className="mt-6">
            {renderStandardsTable(school.femaleStandards, "Women's")}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};