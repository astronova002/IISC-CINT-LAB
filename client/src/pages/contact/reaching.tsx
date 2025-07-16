import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";

export default function Reaching() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-light-gray">
      <NavigationHeader currentSection="contact" onNavigate={() => {}} />
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <MainNavBar />
      </div>
      <main className="flex-1 flex flex-col w-full bg-neutral-light-gray">
        <div className="w-full flex justify-center px-4 md:px-16 py-10 max-w-3xl mx-auto">
          <div className="flex-1 bg-sky-100 rounded-2xl shadow-lg p-6 min-h-[220px] flex flex-col border border-sky-200 relative max-w-xl mx-auto">
            <div className="flex items-center mb-4">
              <span className="text-sky-500 mr-2" style={{ fontSize: 28 }}>📍</span>
              <h2 className="text-xl font-semibold text-sky-800 flex-1">Reaching</h2>
            </div>
            <div className="flex-1 text-sky-900 text-sm">
              Campus: Indian Institute of Science, Bangalore<br/>
              Department: Aerospace Engineering<br/>
              Directions: Enter through the main gate, follow signs to Aerospace Engineering, CINT Lab is on the 2nd floor.
            </div>
          </div>
        </div>
      </main>
      <footer className="flex-none w-full bg-neutral-light-gray text-neutral-dark-gray z-10 p-0 m-0">
        <div className="w-full p-0 m-0">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 