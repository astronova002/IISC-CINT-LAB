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
    <header className="w-full bg-black py-5 shadow flex items-center justify-between min-h-[110px]">
      {/* Left: CINT logo, title, motto */}
      <div className="flex items-center space-x-6 pl-12">
        <img 
          src="/cint-lab-logo.png" 
          alt="CINT Lab Logo" 
          className="h-28 w-28 object-contain" 
        />
        <div className="flex flex-col justify-center">
          <span className="text-4xl font-bold text-white leading-tight font-display">Indian Institute of Science</span>
          <span className="text-base text-neutral-light-gray font-display mt-1" style={{ fontWeight: 400, fontSize: '1.1rem', letterSpacing: '0.01em' }}>भारतीय विज्ञान संस्थान</span>
        </div>
      </div>
      {/* Right: IISc logo and lab label */}
      <div className="flex items-center space-x-3 pr-12">
        <img 
          src="/iisc-logo.png" 
          alt="IISc Logo" 
          className="h-28 w-28 object-contain" 
        />
        <div className="flex flex-col justify-center">
          {/* Use Montserrat for MIT-style geometric look. Make sure to include the Google Fonts import in your index.html: */}
          {/* <link href="https://fonts.googleapis.com/css?family=Montserrat:700,900&display=swap" rel="stylesheet"> */}
          <span className="text-2xl font-bold text-white leading-tight font-display">Computational Intelligence Lab</span>
          <span className="text-base text-neutral-light-gray font-display mt-1" style={{ fontWeight: 400, fontSize: '1.1rem', letterSpacing: '0.01em' }}>संगणनात्मक बुद्धिमत्ता प्रयोगशाला</span>
        </div>
      </div>
    </header>
  );
}