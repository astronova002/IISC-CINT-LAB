import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";

export default function People() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      <div className="w-full shadow-sm bg-white">
        <div className="max-w-screen-xl mx-auto">
          <NavigationHeader currentSection="people" onNavigate={() => {}} />
        </div>
      </div>
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto">
          <MainNavBar />
        </div>
      </div>
      <main className="flex-1 w-full max-w-screen-xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">People</h1>
        <nav aria-label="People Subpages" className="mb-8">
          <ul className="flex flex-wrap gap-4">
            <li><Link href="/people/faculty" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Faculty</Link></li>
            <li><Link href="/people/interns" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Interns</Link></li>
            <li><Link href="/people/researchers" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Researchers</Link></li>
            <li><Link href="/people/committee" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Committee Members</Link></li>
            <li><Link href="/people/staff" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Staff</Link></li>
            <li><Link href="/people/alumni" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Alumni</Link></li>
          </ul>
        </nav>
        <p>This is the People page. Add team and member info here.</p>
      </main>
      <footer className="w-full bg-gray-900 text-white mt-auto">
        <div className="max-w-screen-xl mx-auto">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 