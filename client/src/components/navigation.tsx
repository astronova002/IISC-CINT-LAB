import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", dropdown: [
    { label: "Chairperson", href: "/about/chairperson" },
    { label: "History", href: "/about/history" },
    { label: "Opportunities", href: "/about/opportunities" },
  ]},
  { label: "Chief Scientist", href: "/chief-scientist" },
  { label: "People", href: "/people", dropdown: [
    { label: "Faculty", href: "/people/faculty" },
    { label: "Interns", href: "/people/interns" },
    { label: "Researchers", href: "/people/researchers" },
    { label: "Committee Members", href: "/people/committee" },
    { label: "Staff", href: "/people/staff" },
    { label: "Alumni", href: "/people/alumni" },
  ]},
  { label: "Research", href: "/research", dropdown: [
    { label: "Projects", href: "/research/streams" },
    { label: "Special Interests", href: "/research/special-interests" },
    { label: "Facilities", href: "/research/facilities" },
    { label: "Reports", href: "/research/reports" },
  ]},
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact", dropdown: [
    { label: "Chief Scientist Contact", href: "/contact/chief-scientist" },
    { label: "Reaching", href: "/contact/reaching" },
    { label: "Contact", href: "/contact/contact-info" },
    { label: "Visitor Info", href: "/contact/visitor-info" },
    { label: "Feedback", href: "/contact/feedback" },
  ]},
];

export function MainNavBar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Close dropdown on outside click (mobile only)
  useEffect(() => {
    if (!isMobile || !openDropdown) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMobile, openDropdown]);

  return (
    <nav aria-label="Main Navigation" className="w-full bg-gray-400 border-b border-gray-400">
      <ul ref={navRef} className="flex flex-wrap justify-center items-center gap-3 md:gap-8 py-2 w-full" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative group"
            style={{ position: 'relative' }}
          >
            <div
              onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className={`nav-btn px-5 py-2 rounded-lg font-semibold text-white bg-black/80 border border-white/30 transition-all duration-300 ease-in-out shadow-md hover:bg-black/90 hover:border-white/50 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 ${openDropdown === item.label ? 'ring-2 ring-white/50' : ''} flex items-center gap-2`}
                aria-haspopup={item.dropdown ? "true" : undefined}
                aria-expanded={openDropdown === item.label ? "true" : undefined}
                tabIndex={0}
                id={`nav-btn-${item.label.replace(/\s+/g, '').toLowerCase()}`}
                onClick={e => {
                  if (item.dropdown) {
                    e.preventDefault();
                    setOpenDropdown(openDropdown === item.label ? null : item.label);
                  }
                }}
                onFocus={() => item.dropdown && setOpenDropdown(item.label)}
              >
                {item.label}
                {item.dropdown && <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />}
              </Link>
              {item.dropdown && (
                <ul
                  className={`dropdown-menu absolute left-1/2 -translate-x-1/2 w-56 bg-black/95 backdrop-blur-sm border border-white/30 rounded shadow-lg z-10 transition-all duration-300 ease-in-out origin-top scale-95 opacity-0 pointer-events-none ${openDropdown === item.label ? 'scale-100 opacity-100 pointer-events-auto' : ''}`}
                  style={{ top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 0, paddingTop: 2 }}
                  role="menu"
                  aria-label={item.label + ' submenu'}
                >
                  {item.dropdown.map((sub) => (
                    <li key={sub.label} role="none">
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 text-white bg-black/80 hover:bg-black/90 hover:text-white focus:bg-black/90 focus:text-white transition-colors rounded border border-white/10 hover:border-white/30"
                        role="menuitem"
                        tabIndex={0}
                        onClick={() => setOpenDropdown(null)}
                      >
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
      <style>{`
        @media (min-width: 768px) {
          .dropdown-menu {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
