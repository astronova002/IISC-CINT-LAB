import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Mail, Phone, MapPin, Linkedin, BookOpen, GraduationCap, Briefcase, Users } from 'lucide-react';
import React from 'react';

export default function AboutChairperson() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-light-gray">
      <NavigationHeader currentSection="about" onNavigate={() => {}} />
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <MainNavBar />
      </div>
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
        {/* Chairperson Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img
            src="/joseph matthew.jpg"
            alt="Prof. Joseph Mathew"
            className="w-40 h-40 rounded-2xl shadow-lg border-4 border-sky-100 object-cover bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 text-center md:text-left">Prof. Joseph Mathew</h1>
            <h2 className="text-lg text-sky-700 font-semibold mb-1 text-center md:text-left">Chairperson, Department of Aerospace Engineering</h2>
            <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
              <a href="mailto:joseph@aero.iisc.ac.in" className="flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm">
                <Mail size={16} /> joseph@aero.iisc.ac.in
              </a>
              <a href="https://www.linkedin.com/in/joseph-mathew-aerospace/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://iiscprofiles.irins.org/profile/3989" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm">
                <BookOpen size={16} /> IRINS Profile
              </a>
            </div>
          </div>
        </div>
        {/* Bio/Intro */}
        <div className="bg-sky-50 rounded-2xl shadow p-6 mb-10 border border-sky-100">
          <h3 className="text-xl font-semibold text-sky-800 mb-2">About the Chairperson</h3>
          <p className="text-gray-700 text-base">
            Prof. Joseph Mathew is the Chairperson of the Department of Aerospace Engineering at IISc Bangalore. He is a renowned expert in fluid mechanics, turbulence, and computational fluid dynamics, with a distinguished career in research and teaching. Prof. Mathew has held research positions in multiple countries and has contributed significantly to the advancement of aerospace engineering in India and abroad.
          </p>
        </div>
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Personal Info */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-sky-100 flex flex-col items-start transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-sky-300">
            <div className="flex items-center gap-2 mb-3">
              <Users size={22} className="text-sky-500" />
              <h4 className="text-lg font-bold text-blue-900">Personal Info</h4>
            </div>
            <div className="flex items-center gap-2 mb-2 text-sky-800"><Mail size={16} /> joseph@aero.iisc.ac.in</div>
            <div className="flex items-center gap-2 mb-2 text-sky-800"><MapPin size={16} /> Office: AE101</div>
            <div className="flex items-center gap-2 mb-2 text-sky-800"><Phone size={16} /> +91 80 22932415</div>
          </div>
          {/* Education & Experience */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-sky-100 flex flex-col items-start transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-sky-300">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={22} className="text-sky-500" />
              <h4 className="text-lg font-bold text-blue-900">Education & Experience</h4>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-sky-700">Education</div>
              <div className="text-gray-700 text-sm">Ph.D. in Aerospace Engineering</div>
              <div className="text-gray-700 text-sm">Indian Institute of Science, Bangalore</div>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-sky-700">Current Position</div>
              <div className="text-gray-700 text-sm">Chairperson</div>
              <div className="text-gray-700 text-sm">Department of Aerospace Engineering</div>
            </div>
            <div>
              <div className="font-semibold text-sky-700">Previous Experience</div>
              <div className="text-gray-700 text-sm">Professor, IISc Bangalore</div>
              <div className="text-gray-700 text-sm">Research positions in multiple countries</div>
            </div>
          </div>
          {/* Research Areas */}
          <div className="bg-white rounded-2xl shadow-md p-6 border border-sky-100 flex flex-col items-start transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-sky-300">
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={22} className="text-sky-500" />
              <h4 className="text-lg font-bold text-blue-900">Research Areas</h4>
            </div>
            <ul className="space-y-2 mt-2">
              <li>
                <span className="font-semibold text-sky-700">Fluid Mechanics:</span>
                <span className="text-gray-700 ml-1">Advanced fluid dynamics and flow analysis</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">Turbulence:</span>
                <span className="text-gray-700 ml-1">Turbulent flow computations and LES</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">Aeroacoustics:</span>
                <span className="text-gray-700 ml-1">Sound generation and propagation</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">Combustion:</span>
                <span className="text-gray-700 ml-1">Combustion dynamics and modeling</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">Flow Design:</span>
                <span className="text-gray-700 ml-1">Aerodynamic design optimization</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">Computational Fluid Dynamics:</span>
                <span className="text-gray-700 ml-1">Numerical simulation methods</span>
              </li>
            </ul>
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