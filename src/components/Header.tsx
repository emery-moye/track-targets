import { CollegeSearchBar } from "./CollegeSearchBar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-card shadow-lg border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-primary flex items-center">
              🧡 Track Targets
            </h1>
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