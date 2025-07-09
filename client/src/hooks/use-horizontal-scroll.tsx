import { useState, useEffect, useRef, useCallback } from "react";

export function useHorizontalScroll(totalSections: number) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = useCallback((sectionIndex: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const sectionWidth = window.innerWidth;
    
    if (!isMobile) {
      container.scrollTo({
        left: sectionIndex * sectionWidth,
        behavior: 'smooth'
      });
    } else {
      const section = document.querySelector(`[data-section="${sectionIndex}"]`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setCurrentSection(sectionIndex);
  }, [isMobile]);

  // Handle scroll detection
  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    const container = containerRef.current;
    
    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const sectionWidth = window.innerWidth;
      const newSection = Math.round(scrollLeft / sectionWidth);
      
      if (newSection !== currentSection && newSection >= 0 && newSection < totalSections) {
        setCurrentSection(newSection);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentSection, totalSections, isMobile]);

  // Keyboard navigation
  useEffect(() => {
    if (isMobile) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowLeft' && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSection, totalSections, scrollToSection, isMobile]);

  return {
    currentSection,
    scrollToSection,
    containerRef,
    isMobile
  };
}
