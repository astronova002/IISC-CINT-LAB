import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about", dropdown: [
    { label: "Chairperson", href: "/about/chairperson" },
    { label: "History", href: "/about/history" },
  ] },
  { label: "Research", href: "/research", dropdown: [
    { label: "Projects", href: "/research/projects" },
    { label: "Facilities", href: "/research/facilities" },
    { label: "Reports", href: "/research/reports" },
  ] },
  { label: "People", href: "/people", dropdown: [
    { label: "Interns", href: "/people/interns" },
    { label: "Researchers", href: "/people/researchers" },
    { label: "Alumni", href: "/people/alumni" },
  ] },
  { label: "News/Events", href: "/news" },
  { label: "Chief Scientist", href: "/chief-scientist" },
  { label: "Contact Us", href: "/contact", dropdown: [
    { label: "Contact Info", href: "/contact/contact-info" },
    { label: "Feedback", href: "/contact/feedback" },
    { label: "Reaching", href: "/contact/reaching" },
  ] },
  { label: "Engage with Lab", href: "/contact/engage" },
  { label: "Opportunities", href: "/about/opportunities" }, // keep as main nav, not in About dropdown
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
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <nav aria-label="Main Navigation" className="w-full" style={{ background: '#393E46', boxShadow: 'none', border: 'none', borderBottom: 'none' }}>
      <ul ref={navRef} className="flex flex-wrap justify-center items-center gap-3 md:gap-8 py-3 w-full" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative group"
            style={{ position: 'relative' }}
          >
            <div
              {...(!isMobile && item.dropdown ? {
                onMouseEnter: () => setOpenDropdown(item.label),
                onMouseLeave: () => setOpenDropdown(null),
                onFocus: () => setOpenDropdown(item.label),
                onBlur: () => setOpenDropdown(null),
              } : {})}
              {...(isMobile && item.dropdown ? {
                onClick: (e: any) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === item.label ? null : item.label);
                }
              } : {})}
              style={{ cursor: item.dropdown ? 'pointer' : undefined }}
            >
              <Link
                href={item.href}
                className="px-5 py-2 font-body font-semibold text-neutral-white bg-transparent border-none shadow-none transition-colors duration-200 hover:text-secondary-gold focus:outline-none relative group flex items-center gap-1"
                tabIndex={0}
                id={`nav-btn-${item.label.replace(/\s+/g, '').toLowerCase()}`}
                aria-haspopup={item.dropdown ? "true" : undefined}
                aria-expanded={openDropdown === item.label ? "true" : undefined}
                onClick={e => {
                  if (item.dropdown) {
                    e.preventDefault();
                    if (isMobile) {
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    }
                  } else {
                    setOpenDropdown(null);
                  }
                }}
                onFocus={() => !isMobile && item.dropdown && setOpenDropdown(item.label)}
                onBlur={() => !isMobile && item.dropdown && setOpenDropdown(null)}
              >
                <span className="inline-block group-hover:text-blue-700 transition-colors duration-200">
                  {item.label}
                </span>
                {item.dropdown && (
                  <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                )}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-700 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              {item.dropdown && (
                <ul
                  className={`dropdown-menu absolute left-1/2 -translate-x-1/2 w-56 bg-neutral-white backdrop-blur-sm border border-neutral-gray rounded-lg shadow-lg z-10 transition-all duration-300 ease-in-out origin-top scale-95 opacity-0 pointer-events-none ${openDropdown === item.label ? 'scale-100 opacity-100 pointer-events-auto' : ''}`}
                  style={{ top: 'calc(100% - 2px)', left: '50%', transform: 'translateX(-50%)', marginTop: 0, paddingTop: 0, borderTop: 'none' }}
                  role="menu"
                  aria-label={item.label + ' submenu'}
                  onClick={() => setOpenDropdown(null)}
                >
                  {item.dropdown.map((sub) => (
                    <li key={sub.label} role="none">
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 text-neutral-dark-gray bg-neutral-white hover:bg-neutral-light-gray hover:text-primary-navy focus:bg-neutral-light-gray focus:text-primary-navy transition-colors rounded border border-transparent hover:border-neutral-gray font-body"
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
    </nav>
  );
}
