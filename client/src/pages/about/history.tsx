import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";

export default function AboutHistory() {
  return (
    <div className="min-h-screen bg-neutral-light-gray flex flex-col w-full">
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <NavigationHeader currentSection="about" onNavigate={() => {}} />
        <MainNavBar />
      </div>
      <main className="flex-1 w-full max-w-7xl mx-auto py-12 px-4">
        {/* Main content intentionally left blank for now */}
      </main>
      <footer className="flex-none w-full bg-neutral-light-gray text-neutral-dark-gray z-10 p-0 m-0">
        <div className="w-full p-0 m-0">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 