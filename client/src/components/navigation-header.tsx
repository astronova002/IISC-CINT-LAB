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
    <header className="bg-gray-400 backdrop-blur-sm w-full py-2 md:py-3">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row items-center justify-center h-auto md:h-24 w-full gap-y-2 md:gap-y-0">
          {/* Top Left: Logos */}
          <div className="absolute left-0 top-0 flex items-center space-x-4 pl-2 pt-2">
            <img 
              src="/cint-lab-logo.png" 
              alt="CINT Lab Logo" 
              className="h-20 w-auto object-contain drop-shadow-lg" 
            />
            <img 
              src="/iisc-logo.png" 
              alt="IISc Logo" 
              className="h-20 w-auto object-contain drop-shadow-lg" 
            />
          </div>

          {/* Top Right: Social Media */}
          <div className="absolute right-0 top-0 flex items-center space-x-4 pr-2 pt-2">
            <a href="https://twitter.com/YOUR_X_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/x.svg" alt="X" className="h-9 w-9 hover:opacity-80 transition" />
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" className="h-9 w-9 hover:opacity-80 transition" />
            </a>
          </div>

          {/* Center: Lab Title and Institute */}
          <div className="flex flex-col items-center flex-1">
            <h1 className="text-2xl md:text-4xl font-bold text-white text-center">Computational Intelligence Laboratory</h1>
            <p className="text-base md:text-xl text-gray-200 text-center">Department of Aerospace, Indian Institute of Science, Bangalore</p>
          </div>
        </div>
      </div>
    </header>
  );
}