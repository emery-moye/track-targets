import { CollegeSearchBar } from "./CollegeSearchBar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-lg border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-primary flex items-center hover:opacity-80 transition-opacity">
              <img src="/lovable-uploads/7e28bf6a-3ac4-489c-8c75-609b71b60312.png" alt="Track Targets Logo" className="h-12 w-12 mr-3" />
              Track Targets
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