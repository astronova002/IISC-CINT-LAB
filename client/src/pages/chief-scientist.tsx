import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";
import { Linkedin, BookOpen } from 'lucide-react';
import React from 'react';

// ResearchGate SVG icon
const ResearchGateIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.667 0H1.333C.6 0 0 .6 0 1.333v21.333C0 23.4.6 24 1.333 24h21.333C23.4 24 24 23.4 24 22.667V1.333C24 .6 23.4 0 22.667 0zM19.2 17.067c-.267.4-.8.533-1.2.267-1.067-.667-2.133-1.6-3.067-2.667-.267-.267-.267-.667 0-.933.267-.267.667-.267.933 0 .8.8 1.6 1.467 2.4 2.133.267.267.267.667 0 .933zm-2.267-3.2c-.267.267-.667.267-.933 0-1.067-1.067-2.133-2.267-3.067-3.467-.267-.267-.267-.667 0-.933.267-.267.667-.267.933 0 1.067 1.2 2.133 2.4 3.067 3.467.267.267.267.667 0 .933zm-3.2-3.2c-.267.267-.667.267-.933 0-.8-.8-1.6-1.6-2.267-2.4-.267-.267-.267-.667 0-.933.267-.267.667-.267.933 0 .8.8 1.6 1.6 2.267 2.4.267.267.267.667 0 .933z"/>
  </svg>
);

export default function ChiefScientist() {
  return (
    <div className="min-h-screen bg-gray-400 flex flex-col w-full">
      <NavigationHeader currentSection="chief-scientist" onNavigate={() => {}} />
      <MainNavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src="/sn%20omkar.jpg"
            alt="Dr. S. N. Omkar"
            className="rounded-2xl object-cover w-64 h-80 shadow-[0_0_24px_4px_rgba(37,99,235,0.25)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_rgba(37,99,235,0.35)] bg-white"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Dr. S. N. Omkar</h1>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Chief Research Scientist, Guidance & Control</h2>
          <div className="mb-4 text-sm text-gray-700">
            <p><span className="font-semibold">Email:</span> <a href="mailto:omkar@iisc.ac.in" className="text-blue-800 underline">omkar@iisc.ac.in</a></p>
            <p><span className="font-semibold">Office:</span> AE123</p>
            <p><span className="font-semibold">Phone:</span> +91 80 22932417</p>
          </div>
          <div className="flex flex-wrap gap-4 mt-2 mb-4">
            <a href="https://www.linkedin.com/company/iisc-aerospace-engineering/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline font-semibold flex items-center gap-1"><Linkedin className="w-5 h-5" />LinkedIn</a>
            <a href="https://iiscprofiles.irins.org/profile/3996" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline font-semibold flex items-center gap-1"><BookOpen className="w-5 h-5" />IRINS Profile</a>
            <a href="https://www.researchgate.net/profile/S_N_Omkar" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline font-semibold flex items-center gap-1"><ResearchGateIcon />ResearchGate</a>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Research Interests</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Helicopter Dynamics</li>
              <li>Satellite Image Processing</li>
              <li>Biomechanics</li>
              <li>Uninhabited Air Vehicles (UAV)</li>
              <li>Autonomous Navigation of UAVs</li>
              <li>Composite Design Optimization</li>
              <li>Structural Health Monitoring</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Education</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Ph.D. – Aerospace Engineering, Indian Institute of Science</li>
              <li>M.Sc – Aerospace Engineering, Indian Institute of Science</li>
              <li>B.E. – Mechanical Engineering, Bangalore University</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-lg text-gray-800 mb-1">Work Experience & Memberships</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              <li>Founder Member, Treasurer, ACDOS (affiliated to IFAC)</li>
              <li>Member, Indian Society for Advancement of Materials and Process Engineering</li>
              <li>Member, Indian Society for Remote Sensing</li>
              <li>Member, American Helicopter Society</li>
              <li>Research Advisor, Tata Consultancy Services</li>
              <li>Member, Review Committee on Land Resources Information System for Karnataka</li>
              <li>Member, Detailed Designs Review – Development of Fixed-wing Micro UAV, ADE</li>
              <li>Member, Review of R&D Projects – Development of Fixed-wing Micro UAV, NAL</li>
            </ul>
          </div>
        </div>
      </main>
      <BrandingFooter />
    </div>
  );
} 