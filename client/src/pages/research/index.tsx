import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";

export default function Research() {
  return (
    <div className="min-h-screen bg-gray-400 flex flex-col w-full">
      <div className="w-full">
        <NavigationHeader currentSection="research" onNavigate={() => {}} />
        <MainNavBar />
      </div>
      <main className="flex-1 w-full py-12 px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-4 font-display">Research</h1>
        <nav aria-label="Research Subpages" className="mb-8">
          <ul className="flex flex-wrap gap-4">
            <li><Link href="/research/projects" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Projects</Link></li>
            <li><Link href="/research/facilities" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Facilities</Link></li>
            <li><Link href="/research/reports" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Reports</Link></li>
          </ul>
        </nav>
        <p>This is the Research page. Add research themes and projects here.</p>
      </main>
      <footer className="w-full bg-gray-400 text-white mt-auto p-2 m-0">
        <BrandingFooter />
      </footer>
    </div>
  );
} 