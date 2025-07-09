import { useState } from "react";
import { NavigationHeader } from "@/components/navigation-header";
import { BrandingFooter } from "@/components/branding-footer";
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ResearchSection } from "@/components/sections/research-section";
import { TeamSection } from "@/components/sections/team-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import { NewsSection } from "@/components/sections/news-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("home");

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "home":
        return <HomeSection onNavigate={handleNavigate} />;
      case "about":
        return <AboutSection />;
      case "research":
        return <ResearchSection />;
      case "team":
        return <TeamSection />;
      case "publications":
        return <PublicationsSection />;
      case "news":
        return <NewsSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationHeader 
        currentSection={currentSection}
        onNavigate={handleNavigate}
      />
      
      <main className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderCurrentSection()}
        </div>
      </main>
      
      <BrandingFooter />
    </div>
  );
}