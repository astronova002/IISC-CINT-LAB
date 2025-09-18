import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chief Scientist", href: "/chief-scientist" },
  { label: "Opportunities", href: "/about/opportunities" },
];

export function MainNavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const [location] = useLocation();

  // Detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close dropdown on outside click (mobile only)
  useEffect(() => {
    if (!isMobile || !openDropdown) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isMobile, openDropdown]);

  return (
    <nav
      aria-label="Main Navigation"
      className="w-full"
      style={{
        background: "#393E46",
        boxShadow: "none",
        border: "none",
        borderBottom: "none",
      }}
    >
      <ul
        ref={navRef}
        className="flex justify-evenly items-center py-3 w-full"
        style={{ margin: 0, padding: 0, listStyle: "none" }}
      >
        {navItems.map((item) => (
          <li key={item.label} className="relative group">
            <div>
              <Link
                href={item.href}
                className="px-5 py-2 font-body font-semibold text-neutral-white bg-transparent border-none shadow-none transition-colors duration-200 hover:text-secondary-gold focus:outline-none relative group flex items-center gap-1"
                tabIndex={0}
                id={`nav-btn-${item.label.replace(/\s+/g, "").toLowerCase()}`}
                onClick={() => setOpenDropdown(null)}
              >
                <span className="inline-block group-hover:text-blue-700 transition-colors duration-200">
                  {item.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
