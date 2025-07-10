import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationHeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export function NavigationHeader({ currentSection, onNavigate }: NavigationHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "ℹ️" },
    { id: "research", label: "Research", icon: "🔬" },
    { id: "team", label: "Team", icon: "👥" },
    { id: "publications", label: "Publications", icon: "📚" },
    { id: "news", label: "News", icon: "📰" },
    { id: "contact", label: "Contact", icon: "📞" }
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-24 py-2 md:py-0 w-full gap-y-4 md:gap-y-0">
          {/* Left: Logos */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-center md:justify-start mb-2 md:mb-0">
            <img 
              src="/cint-lab-logo.png" 
              alt="CINT Lab Logo" 
              className="h-12 w-auto object-contain" 
            />
            <img 
              src="/iisc-logo.png" 
              alt="IISc Logo" 
              className="h-12 w-auto object-contain" 
            />
          </div>

          {/* Center: Lab Title and Institute */}
          <div className="flex flex-col items-center flex-1">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 text-center">Computational Intelligence Laboratory</h1>
            <p className="text-sm md:text-base text-gray-600 text-center">Department of Aerospace, Indian Institute of Science, Bangalore</p>
          </div>

          {/* Right: Social Media */}
          <div className="flex items-center space-x-3 w-full md:w-auto justify-center md:justify-end mt-2 md:mt-0">
            <a href="https://twitter.com/YOUR_X_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="h-7 w-7 hover:opacity-80 transition" />
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="h-7 w-7 hover:opacity-80 transition" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}