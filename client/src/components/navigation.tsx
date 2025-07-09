import { useState } from "react";
import { Atom, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentSection: number;
  onSectionChange: (section: number) => void;
  totalSections: number;
}

const navigationItems = [
  { label: "Home", section: 0 },
  { label: "About", section: 1 },
  { label: "Chief Scientist", section: 2 },
  { label: "Lab", section: 3 },
  { label: "Team", section: 4 },
  { label: "Publications", section: 5 },
  { label: "News", section: 6 }
];

export function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (section: number) => {
    onSectionChange(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Atom className="text-2xl academic-brown" aria-hidden="true" />
            <span className="text-xl font-bold academic-brown">CINT Lab</span>
            <span className="text-sm text-gray-600 hidden sm:inline">IISc Bangalore</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => handleNavClick(item.section)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  currentSection === item.section 
                    ? 'bg-gray-100 academic-brown' 
                    : 'hover:bg-gray-100'
                }`}
                aria-label={`Go to ${item.label} section`}
              >
                {item.label}
              </Button>
            ))}
          </div>
          
          {/* Section Indicators */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {Array.from({ length: 7 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(index)}
                  className={`nav-indicator w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSection === index 
                      ? 'bg-academic-brown transform scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to section ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="academic-brown" /> : <Menu className="academic-brown" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            {navigationItems.map((item) => (
              <Button
                key={item.section}
                variant="ghost"
                onClick={() => handleNavClick(item.section)}
                className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
