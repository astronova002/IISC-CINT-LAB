import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ChiefScientistSection } from "@/components/chief-scientist-section";
import { LabSection } from "@/components/lab-section";
import { TeamSection } from "@/components/team-section";
import { PublicationsSection } from "@/components/publications-section";
import { NewsSection } from "@/components/news-section";
import { useHorizontalScroll } from "@/hooks/use-horizontal-scroll";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Home() {
  const { currentSection, scrollToSection, containerRef } = useHorizontalScroll(7);

  return (
    <div className="bg-academic-beige">
      <Navigation 
        currentSection={currentSection}
        onSectionChange={scrollToSection}
        totalSections={7}
      />

      <main 
        className="horizontal-container horizontal-scroll pt-16" 
        ref={containerRef}
        role="main"
      >
        <HeroSection onNavigate={scrollToSection} />
        <AboutSection />
        <ChiefScientistSection />
        <LabSection />
        <TeamSection />
        <PublicationsSection />
        <NewsSection />
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-academic-brown text-white py-4 z-40" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span className="text-sm">© 2024 CINT Lab, IISc Bangalore</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-sandy-brown transition-colors" aria-label="Email">
                <Mail size={16} aria-hidden="true" />
              </a>
              <a href="#" className="text-white hover:text-sandy-brown transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a href="#" className="text-white hover:text-sandy-brown transition-colors" aria-label="Twitter">
                <Twitter size={16} aria-hidden="true" />
              </a>
              <a href="#" className="text-white hover:text-sandy-brown transition-colors" aria-label="GitHub">
                <Github size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
