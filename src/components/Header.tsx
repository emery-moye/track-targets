import { CollegeSearchBar } from "./CollegeSearchBar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-lg border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="hover:opacity-80 transition-opacity"
            >
              <img src="/lovable-uploads/4ca0176f-3dba-455d-b5ef-eeb16d0fab1e.png" alt="PR Preferred Recruit Logo" className="h-16" />
            </Link>
          </div>
          
          <div className="flex-1 max-w-md mx-8">
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