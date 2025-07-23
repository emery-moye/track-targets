import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type TierType = "target" | "recruit" | "walkon" | "nomatch";

interface TierBadgeProps {
  tier: TierType;
  className?: string;
}

const tierConfig = {
  target: {
    label: "Target",
    emoji: "🟩",
    className: "bg-tier-target text-white hover:bg-tier-target/80"
  },
  recruit: {
    label: "Recruit", 
    emoji: "🟨",
    className: "bg-tier-recruit text-black hover:bg-tier-recruit/80"
  },
  walkon: {
    label: "Walk-On",
    emoji: "🟥", 
    className: "bg-tier-walkon text-white hover:bg-tier-walkon/80"
  },
  nomatch: {
    label: "No Match",
    emoji: "⬜",
    className: "bg-tier-nomatch text-white hover:bg-tier-nomatch/80"
  }
};

export const TierBadge = ({ tier, className }: TierBadgeProps) => {
  const config = tierConfig[tier];
  
  return (
    <Badge 
      variant="secondary"
      className={cn(
        "font-medium px-3 py-1 rounded-full",
        config.className,
        className
      )}
    >
      <span className="mr-1">{config.emoji}</span>
      {config.label}
    </Badge>
  );
};