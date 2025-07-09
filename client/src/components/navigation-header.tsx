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
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://seeklogo.com/images/I/indian-institute-of-science-logo-1B0E139DA3-seeklogo.com.png" 
                alt="IISc Logo" 
                className="h-10 w-10"
              />
              <div>
                <h1 className="text-lg font-bold text-gray-900">Computational Intelligence Laboratory</h1>
                <p className="text-xs text-gray-600">IISc Aerospace Engineering</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => onNavigate(item.id)}
                className="flex items-center space-x-2"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start"
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}