import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { chiefScientist } from "@/data/lab-data";

const projectAssociateImg = "/building-placeholder.jpg";

export default function ContactInfo() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-light-gray">
      <NavigationHeader currentSection="contact" onNavigate={() => {}} />
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <MainNavBar />
      </div>
      <main className="flex-1 flex flex-col w-full bg-neutral-light-gray">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center px-4 md:px-16 py-10 max-w-6xl mx-auto">
          {/* Chief Scientist Section */}
          <div className="flex-1 group bg-sky-100 rounded-2xl shadow-lg p-0 flex flex-col border border-sky-200 relative max-w-xs mx-auto md:mx-0 overflow-hidden min-h-[320px]">
            <img src={chiefScientist.image} alt={chiefScientist.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-0" />
            <div className="relative z-10 flex flex-col h-full justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="font-bold text-sky-800 text-lg mb-2">Chief Scientist</div>
              <div className="text-sky-900 text-sm mb-1">Name: {chiefScientist.name}</div>
              <div className="text-sky-900 text-sm mb-1">Email: <a href={`mailto:${chiefScientist.email}`} className="underline text-blue-900">{chiefScientist.email}</a></div>
              <div className="text-sky-900 text-sm">Phone: +91 80 2293 2417</div>
            </div>
          </div>
          {/* Project Associate 1 */}
          <div className="flex-1 group bg-sky-100 rounded-2xl shadow-lg p-0 flex flex-col border border-sky-200 relative max-w-xs mx-auto md:mx-0 overflow-hidden min-h-[320px]">
            <img src={projectAssociateImg} alt="Project Associate 1" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-0" />
            <div className="relative z-10 flex flex-col h-full justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="font-bold text-sky-800 text-lg mb-2">Project Associate</div>
              <div className="text-sky-900 text-sm mb-1">Name: [Project Associate 1]</div>
              <div className="text-sky-900 text-sm mb-1">Email: <a href="mailto:project1@iisc.ac.in" className="underline text-blue-900">project1@iisc.ac.in</a></div>
              <div className="text-sky-900 text-sm">Phone: [Phone Number]</div>
            </div>
          </div>
          {/* Project Associate 2 */}
          <div className="flex-1 group bg-sky-100 rounded-2xl shadow-lg p-0 flex flex-col border border-sky-200 relative max-w-xs mx-auto md:mx-0 overflow-hidden min-h-[320px]">
            <img src={projectAssociateImg} alt="Project Associate 2" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-0" />
            <div className="relative z-10 flex flex-col h-full justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="font-bold text-sky-800 text-lg mb-2">Project Associate</div>
              <div className="text-sky-900 text-sm mb-1">Name: [Project Associate 2]</div>
              <div className="text-sky-900 text-sm mb-1">Email: <a href="mailto:project2@iisc.ac.in" className="underline text-blue-900">project2@iisc.ac.in</a></div>
              <div className="text-sky-900 text-sm">Phone: [Phone Number]</div>
            </div>
          </div>
          {/* Project Associate 3 */}
          <div className="flex-1 group bg-sky-100 rounded-2xl shadow-lg p-0 flex flex-col border border-sky-200 relative max-w-xs mx-auto md:mx-0 overflow-hidden min-h-[320px]">
            <img src={projectAssociateImg} alt="Project Associate 3" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-0 transition-opacity duration-500 z-0" />
            <div className="relative z-10 flex flex-col h-full justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="font-bold text-sky-800 text-lg mb-2">Project Associate</div>
              <div className="text-sky-900 text-sm mb-1">Name: [Project Associate 3]</div>
              <div className="text-sky-900 text-sm mb-1">Email: <a href="mailto:project3@iisc.ac.in" className="underline text-blue-900">project3@iisc.ac.in</a></div>
              <div className="text-sky-900 text-sm">Phone: [Phone Number]</div>
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