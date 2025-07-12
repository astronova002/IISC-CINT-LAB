import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";

export default function AboutChairperson() {
  return (
    <div className="min-h-screen bg-gray-400 flex flex-col w-full">
      <NavigationHeader currentSection="about" onNavigate={() => {}} />
      <MainNavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src="/joseph%20matthew.jpg"
            alt="Prof. Joseph Mathew"
            className="rounded-2xl object-cover w-64 h-80 shadow-[0_0_24px_4px_rgba(37,99,235,0.25)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_rgba(37,99,235,0.35)] bg-white"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Prof. Joseph Mathew</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Chairperson, Department of Aerospace Engineering</h2>
          <p className="text-md text-gray-700 mb-2">Aerodynamics</p>
          <div className="mb-4 text-sm text-gray-700">
            <p><span className="font-semibold">Email:</span> <a href="mailto:joseph@iisc.ac.in" className="text-blue-800 underline">joseph@iisc.ac.in</a></p>
            <p><span className="font-semibold">Office:</span> AE206</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Education</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Ph.D. Mechanical Engg, MIT, USA, 1990</li>
              <li>M.S. Mechanical Engg, University of Missouri-Rolla, USA, 1986</li>
              <li>B.Tech. Mechanical Engg, IIT Madras, 1984</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Work Experience</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Research Associate, ICOMP at NASA Lewis Research Center, Cleveland, OH, USA (1990–1992)</li>
              <li>Fellow, National Aerospace Laboratories, Bangalore (1992)</li>
              <li>Assistant Professor, Department of Aerospace Engineering, IISc (1992–)</li>
              <li>Senior Research Associate, The National Academies, USA at Air Force Research Laboratory, WPAFB, OH, USA (2004–2005)</li>
              <li>Visiting Professor, Technische Universitaet Muenchen (2000–2006)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Research Interests</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Fluid mechanics</li>
              <li>Turbulence, Turbulent flow computations (especially Large Eddy Simulation)</li>
              <li>Aeroacoustics</li>
              <li>Combustion</li>
              <li>Flow design</li>
            </ul>
          </div>
          <div className="mb-4 text-sm text-gray-700">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Contact</h3>
            <p>Department of Aerospace Engineering, Indian Institute of Science, Bengaluru 560012</p>
            <p>Phone: +91 80 22932417</p>
            <p>Email: <a href="mailto:office.aero@iisc.ac.in" className="text-blue-800 underline">office.aero@iisc.ac.in</a></p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            {/* Department Profile Icon Link */}
            <a href="https://aero.iisc.ac.in/people/joseph-mathew/" target="_blank" rel="noopener noreferrer" aria-label="Department Profile" className="hover:scale-110 transition">
              {/* University/Building SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-900">
                <path d="M12 2L2 7v2h20V7L12 2zm0 2.18L18.09 7H5.91L12 4.18zM4 10v10h4v-6h8v6h4V10H4zm6 8v-4h4v4h-4z" />
              </svg>
            </a>
            {/* IRINS Profile Icon Link */}
            <a href="https://iiscprofiles.irins.org/profile/3989" target="_blank" rel="noopener noreferrer" aria-label="IRINS Profile" className="hover:scale-110 transition">
              {/* User/Profile SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-900">
                <path d="M12 12c2.7 0 8 1.34 8 4v4H4v-4c0-2.66 5.3-4 8-4zm0-2a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </a>
            {/* Add more icons/links as needed */}
          </div>
        </div>
      </main>
      <BrandingFooter />
    </div>
  );
} 