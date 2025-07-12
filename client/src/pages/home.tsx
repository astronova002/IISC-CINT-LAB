import { useState } from "react";
import { NavigationHeader } from "@/components/navigation-header";
import { BrandingFooter } from "@/components/branding-footer";
import { HomeSection } from "@/components/sections/home-section";
import { AboutSection } from "@/components/sections/about-section";
import { ResearchSection } from "@/components/sections/research-section";
import { TeamSection } from "@/components/sections/team-section";
import { PublicationsSection } from "@/components/sections/publications-section";
import NewsSection from "@/components/sections/news-section";
import { ContactSection } from "@/components/sections/contact-section";
import { MainNavBar } from "@/components/navigation";
import LabCarousel from '@/components/lab-carousel';
import { Engine3DSection } from "@/components/3d-engine-section";

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
    <div className="flex flex-col min-h-screen w-full bg-gray-400">
      {/* Merged Header + 3D Section */}
      <div className="flex-1 flex flex-col w-full bg-gray-400">
        <NavigationHeader 
          currentSection={currentSection}
          onNavigate={handleNavigate}
        />
        <MainNavBar />
        <div className="flex-1 flex items-stretch w-full bg-gray-400">
          <Engine3DSection />
        </div>
      </div>
      {/* Smaller, stretched Footer */}
      <footer className="flex-none w-full bg-gray-400 text-white z-10 p-2 m-0">
        <div className="w-full max-w-screen-xl mx-auto p-0 m-0">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
}