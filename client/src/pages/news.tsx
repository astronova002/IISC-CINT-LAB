import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";

export default function News() {
  return (
    <div className="min-h-screen bg-gray-400 flex flex-col w-full">
      <div className="w-full">
        <NavigationHeader currentSection="news" onNavigate={() => {}} />
        <MainNavBar />
      </div>
      <main className="flex-1 w-full py-12 px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">News</h1>
        <p>This is the News page.</p>
      </main>
      <footer className="w-full bg-gray-400 text-white mt-auto p-2 m-0">
        <BrandingFooter />
      </footer>
    </div>
  );
} 