import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

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
    { label: "Streams", href: "/research/streams" },
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
    <nav aria-label="Main Navigation" className="w-full bg-white border-b border-gray-200">
      <ul ref={navRef} className="flex flex-wrap justify-center items-center gap-2 md:gap-6 py-2" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative group"
            style={{ position: 'relative' }}
            onMouseEnter={() => !isMobile && item.dropdown && setOpenDropdown(item.label)}
            onMouseLeave={() => !isMobile && item.dropdown && setOpenDropdown(null)}
          >
            <Link
              href={item.href}
              className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 transition-all duration-200 ease-in-out hover:bg-white hover:text-blue-900 hover:underline hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-700"
              aria-haspopup={item.dropdown ? "true" : undefined}
              aria-expanded={openDropdown === item.label ? "true" : undefined}
              tabIndex={0}
              id={`nav-btn-${item.label.replace(/\s+/g, '').toLowerCase()}`}
              onClick={e => {
                if (isMobile && item.dropdown) {
                  e.preventDefault();
                  setOpenDropdown(openDropdown === item.label ? null : item.label);
                }
              }}
            >
              {item.label}
            </Link>
            {item.dropdown && (
              <ul
                className={`dropdown-menu absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10 transition-all duration-200 ease-in-out
                  ${openDropdown === item.label ? 'opacity-100 visible pointer-events-auto translate-y-0' : 'opacity-0 invisible pointer-events-none -translate-y-2'}
                  group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0
                `}
                role="menu"
                aria-label={item.label + ' submenu'}
                onMouseEnter={() => !isMobile && setOpenDropdown(item.label)}
                onMouseLeave={() => !isMobile && setOpenDropdown(null)}
              >
                {item.dropdown.map((sub) => (
                  <li key={sub.label} role="none">
                    <Link
                      href={sub.href}
                      className="block px-4 py-2 text-blue-900 bg-white hover:bg-blue-900 hover:text-white focus:bg-blue-900 focus:text-white transition-colors rounded"
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
