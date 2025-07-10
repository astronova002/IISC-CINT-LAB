import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";

export default function ResearchReports() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      <div className="w-full shadow-sm bg-white">
        <div className="max-w-screen-xl mx-auto">
          <NavigationHeader currentSection="research" onNavigate={() => {}} />
        </div>
      </div>
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto">
          <MainNavBar />
        </div>
      </div>
      <main className="flex-1 w-full max-w-screen-xl mx-auto py-12 px-4">
        <Link href="/research" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition mb-6 inline-block">&larr; Back to Research</Link>
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Reports</h1>
        <p>This is the Reports page.</p>
      </main>
      <footer className="w-full bg-gray-900 text-white mt-auto">
        <div className="max-w-screen-xl mx-auto">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 