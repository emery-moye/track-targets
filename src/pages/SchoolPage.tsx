import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { findSchoolBySlug, generateSchoolMetaDescription, generateSchoolPageTitle } from "@/lib/schoolPageUtils";
import { SchoolStandardsTable } from "@/components/SchoolStandardsTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ChevronRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const SchoolPage = () => {
  const { schoolSlug } = useParams<{ schoolSlug: string }>();
  const navigate = useNavigate();

  const school = schoolSlug ? findSchoolBySlug(schoolSlug) : undefined;

  useEffect(() => {
    if (!school) {
      navigate('/404', { replace: true });
    }
  }, [school, navigate]);

  if (!school) {
    return null;
  }

  const metaDescription = generateSchoolMetaDescription(school);
  const pageTitle = generateSchoolPageTitle(school);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsOrganization",
    "name": school.schoolName,
    "sport": "Track and Field",
    "description": metaDescription,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": school.state
    },
    "memberOf": {
      "@type": "SportsOrganization",
      "name": school.conference
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${school.schoolName} Track & Field Standards`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="keywords" content={`${school.schoolName} track standards, ${school.schoolName} track and field, ${school.conference} track standards, ${school.division} track recruiting, ${school.schoolName} recruiting standards`} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <button 
              onClick={() => navigate(-1)} 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Results
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8 space-y-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Schools</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{school.schoolName}</span>
          </nav>

          {/* School Header */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center gap-3">
              {school.schoolName} Track & Field Recruiting Standards
              {school.hasOfficialStandards && (
                <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              )}
            </h1>
            
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {school.division}
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                {school.conference}
              </Badge>
              <Badge variant="outline" className="text-lg px-4 py-2">
                {school.state}
              </Badge>
            </div>

            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Discover the track and field recruiting standards for {school.schoolName}, a {school.division} program competing in the {school.conference} conference. 
                  Below you'll find comprehensive performance benchmarks for both men's and women's track and field events, including sprints, distance, hurdles, jumps, and throws. 
                  These standards will help you understand what it takes to compete at {school.schoolName}.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Men's Standards */}
          {school.maleStandards && (
            <section>
              <h2 className="text-3xl font-bold mb-4">Men's Track & Field Standards</h2>
              <SchoolStandardsTable 
                title="Men's Events" 
                standards={school.maleStandards} 
              />
            </section>
          )}

          {/* Women's Standards */}
          {school.femaleStandards && (
            <section>
              <h2 className="text-3xl font-bold mb-4">Women's Track & Field Standards</h2>
              <SchoolStandardsTable 
                title="Women's Events" 
                standards={school.femaleStandards} 
              />
            </section>
          )}

          {/* CTA Section */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="pt-6 pb-6 text-center space-y-4">
              <h3 className="text-2xl font-bold">Ready to Take the Next Step?</h3>
              <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                Connect with college track and field coaches and discover more recruiting opportunities through Preferred Recruit.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe5TZaBW-tCz8Tw2pEcGrQa5AV1OKnxDU7G1Zj3L3_ULp6S7A/viewform', '_blank')}
              >
                Apply Now
              </Button>
            </CardContent>
          </Card>

          {/* Search More Schools */}
          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/')}
            >
              Search More Schools
            </Button>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t mt-16 py-8 bg-card/50">
          <div className="container mx-auto px-4 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Preferred Recruit. All rights reserved.
            </p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://www.instagram.com/preferred_recruit/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.tiktok.com/@preferred_recruit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                TikTok
              </a>
              <a 
                href="https://www.youtube.com/@PreferredRecruit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SchoolPage;
