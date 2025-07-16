import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";

export default function PeopleAlumni() {
  return (
    <div className="min-h-screen bg-neutral-light-gray flex flex-col w-full">
      <NavigationHeader currentSection="people" onNavigate={() => {}} />
      <MainNavBar />
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