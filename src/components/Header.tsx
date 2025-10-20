import { CollegeSearchBar } from "./CollegeSearchBar";
import { Link } from "react-router-dom";

interface HeaderProps {
  onReset?: () => void;
}

export const Header = ({ onReset }: HeaderProps) => {
  const handleLogoClick = () => {
    onReset?.();
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-card shadow-lg border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="hover:opacity-80 transition-opacity"
              onClick={handleLogoClick}
            >
              <img 
                src="/lovable-uploads/32e64d19-2b4a-46c0-bcb0-0c1657cf2992.png" 
                alt="PR Preferred Recruit Logo" 
                className="h-12"
                fetchPriority="high"
                width="48"
                height="48"
              />
            </Link>
          </div>
          
          {/* Desktop Search - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8 justify-center">
            <CollegeSearchBar />
          </div>
          
          {/* Mobile Search - Only visible on mobile */}
          <div className="md:hidden flex-1 mx-4">
            <CollegeSearchBar />
          </div>
          
          <div className="text-sm text-muted-foreground hidden md:block">
            Find your perfect college match
          </div>
        </div>
      </div>
    </header>
  );
};