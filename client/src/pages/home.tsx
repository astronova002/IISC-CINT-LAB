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
import { MainNavBar } from "@/components/navigation";

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
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      {/* Unified header + nav */}
      <div className="w-full flex flex-col items-center bg-white shadow-lg rounded-b-2xl border-b border-gray-200">
        <div className="max-w-screen-xl w-full mx-auto px-4 pt-2">
          <div id="myStickyWrap" className="w-full flex flex-col items-center" style={{ minHeight: '72px' }}>
            <NavigationHeader 
              currentSection={currentSection}
              onNavigate={handleNavigate}
            />
          </div>
          <div className="w-full flex justify-center mt-2 mb-2">
            <MainNavBar />
          </div>
        </div>
      </div>
      {/* Hero/banner section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 py-8 flex flex-col items-center justify-center text-white min-h-[120px] border-b border-blue-200 shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 text-center drop-shadow-lg">Computational Intelligence Laboratory</h1>
        <p className="text-base md:text-xl text-center max-w-2xl drop-shadow">Department of Aerospace, Indian Institute of Science, Bangalore</p>
      </section>
      {/* 3D Rotating Logo Background and Ad Carousel */}
      <div className="relative w-full max-w-screen-xl mx-auto mb-8 min-h-[300px] flex flex-col items-center justify-center px-2 sm:px-4">
        <div id="rotating-logo-bg" className="absolute top-0 left-0 w-full h-[300px] z-0 flex items-center justify-center pointer-events-none" />
        <div id="ad-carousel" className="relative z-10 w-full max-w-2xl mx-auto py-6" />
      </div>
      {/* 3D Cover Flow Thumbnail Carousel */}
      <div id="thumbnail-carousel" className="w-full max-w-screen-xl mx-auto mb-8 px-2 sm:px-4 flex items-center justify-center" />
      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white mt-auto">
        <div className="max-w-screen-xl mx-auto">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
}