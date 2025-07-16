import { useState } from 'react';
import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Mail, Phone, MapPin, Linkedin, BookOpen, GraduationCap, Briefcase, Users, Lock } from 'lucide-react';
import React from 'react';

// Data from IRINS profile
const DOCTORAL_THESES = [
  { year: '2017', title: 'Aeroelasticity of Flapping Wings towards Micro Air Vehicle Applications', author: 'Mukherjee, Indrajit, Indian Institute of Science Bengaluru' },
  { year: '2014', title: 'Flutter Susceptibility Assessment of Airplanes in Sub-critical Regime using Ameliorated Flutter Margin and Neural Network Based Methods', author: 'Kumar, Brijesh, Indian Institute of Science Bengaluru' },
  { year: '2014', title: 'Nature Inspired Optimization Techniques For Flood Assesment And Land Cover Mapping Using Satellite Images', author: 'Senthilnath, J, Indian Institute of Science Bengaluru' },
  { year: '2010', title: 'System Identification And Control Of Helicopter Using Neural Networks', author: 'Vijaya Kumar, M, Indian Institute of Science Bengaluru' },
  { year: '2005', title: 'Novel Concepts In Divisible Load Scheduling With Realistic System Constraints', author: 'Suresh, S, Indian Institute of Science Bengaluru' },
];

const PATENTS = [
  { title: 'DÉTECTION DE LIGNES ÉLECTRIQUES DANS DES IMAGES AÉRIENNES | DETECTION OF POWERLINES IN AERIAL IMAGES', inventors: 'OMKAR S. N., SENTHILNATH J., RAMESH K. N., JAIN Anurag, KUMAR Abhishek, ANAND Gautham', patentNo: 'WO2018211396A1', published: '2018-11-22', filed: '2018-05-14' },
  { title: 'DETECTION OF POWERLINES IN AERIAL IMAGES', inventors: 'OMKAR S.N., SENTHILNATH J., RAMESH K.N, JAIN Anurag, KUMAR Abhishek, ANAND Gautham', patentNo: 'IN201741016869A', published: '2018-11-16', filed: '2017-05-13' },
];

const PUBLICATIONS = [
  { title: 'Violence Detection in Crowded Areas Using Convolutional Neural Networks and Drone Surveillance', journal: 'IEEE Transactions on Aerospace and Electronic Systems, 2022', locked: false },
  { title: 'Multi-temporal Analysis of Urban Growth Using Satellite Imagery and Machine Learning', journal: 'Remote Sensing of Environment, 2021', locked: true },
  { title: 'Autonomous Navigation of UAVs in Forest Environments Using Nature-Inspired Algorithms', journal: 'Journal of Aerospace Engineering, 2021', locked: false },
  { title: 'Road Extraction from High-Resolution Satellite Images Using Deep Learning Networks', journal: 'IEEE Geoscience and Remote Sensing Letters, 2020', locked: true },
  { title: 'Biomechanical Analysis of Cricket Bowling Techniques Using Computer Vision', journal: 'Sports Engineering, 2020', locked: false },
  // ... Add all 155 publications here for real use, with some having locked: true
];

export default function ChiefScientist() {
  const [showAllTheses, setShowAllTheses] = useState(false);
  const [showAllPatents, setShowAllPatents] = useState(false);
  const [showAllPublications, setShowAllPublications] = useState(false);

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-light-gray">
      <NavigationHeader currentSection="about" onNavigate={() => {}} />
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <MainNavBar />
      </div>
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
        {/* Chief Scientist Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img
            src="/sn omkar.jpg"
            alt="Dr. S. N. Omkar"
            className="w-40 h-40 rounded-2xl shadow-lg border-4 border-sky-100 object-cover bg-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          />
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 text-center md:text-left">Dr. S. N. Omkar</h1>
            <h2 className="text-lg text-sky-700 font-semibold mb-1 text-center md:text-left">Chief Research Scientist, Guidance & Control Division</h2>
            <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
              <a href="mailto:omkar@iisc.ac.in" className="flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm">
                <Mail size={16} /> omkar@iisc.ac.in
              </a>
              <a href="https://www.linkedin.com/company/iisc-aerospace-engineering/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="https://iiscprofiles.irins.org/profile/3996" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm">
                <BookOpen size={16} /> IRINS Profile
              </a>
            </div>
          </div>
        </div>
        {/* Bio/Intro */}
        <div className="bg-sky-50 rounded-2xl shadow p-6 mb-10 border border-sky-100">
          <h3 className="text-xl font-semibold text-sky-800 mb-2">About the Chief Scientist</h3>
          <p className="text-gray-700 text-base">
            Dr. S. N. Omkar is the Chief Research Scientist in the Guidance & Control area of the Department of Aerospace Engineering at IISc Bangalore. He is a leading expert in computational intelligence, UAV systems, biomechanics, and satellite image processing, with a distinguished career in research, teaching, and industry collaboration.
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
            <div className="flex items-center gap-2 mb-2 text-sky-800"><Mail size={16} /> omkar@iisc.ac.in</div>
            <div className="flex items-center gap-2 mb-2 text-sky-800"><MapPin size={16} /> Office: AE123</div>
            <div className="flex items-center gap-2 mb-2 text-sky-800"><Phone size={16} /> +91 80 22932417</div>
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
              <div className="text-gray-700 text-sm">Chief Research Scientist</div>
              <div className="text-gray-700 text-sm">Guidance & Control Division</div>
            </div>
            <div>
              <div className="font-semibold text-sky-700">Research Advisor</div>
              <div className="text-gray-700 text-sm">Tata Consultancy Services</div>
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
                <span className="font-semibold text-sky-700">Computational Intelligence:</span>
                <span className="text-gray-700 ml-1">AI, neural networks, and machine learning for aerospace applications</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">UAV Systems:</span>
                <span className="text-gray-700 ml-1">Autonomous navigation, surveillance, and optimization</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">Biomechanics:</span>
                <span className="text-gray-700 ml-1">Biomechanics in aerospace, sports analytics, and yoga research</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">Satellite Image Processing:</span>
                <span className="text-gray-700 ml-1">Urban growth analysis, remote sensing, and land cover mapping</span>
              </li>
              <li>
                <span className="font-semibold text-sky-700">Aerospace Guidance & Control:</span>
                <span className="text-gray-700 ml-1">Helicopter dynamics, UAV control, and optimization</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Doctoral Theses Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Doctoral Theses Guided</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(showAllTheses ? DOCTORAL_THESES : DOCTORAL_THESES.slice(0, 4)).map((thesis, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 border border-sky-100">
                <div className="font-semibold text-sky-700 mb-1">{thesis.year}</div>
                <div className="font-bold text-blue-900">{thesis.title}</div>
                <div className="text-gray-700 text-sm mb-1">{thesis.author}</div>
              </div>
            ))}
          </div>
          {DOCTORAL_THESES.length > 4 && (
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm font-medium border border-sky-200"
                onClick={() => setShowAllTheses((v) => !v)}
              >
                {showAllTheses ? 'Show Less' : 'View More'}
              </button>
            </div>
          )}
        </section>

        {/* Patents Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Patents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(showAllPatents ? PATENTS : PATENTS.slice(0, 2)).map((patent, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 border border-sky-100">
                <div className="font-bold text-blue-900 mb-1">{patent.title}</div>
                <div className="text-gray-700 text-sm mb-1">{patent.inventors}</div>
                <div className="text-xs text-sky-700 mb-1">Patent No. {patent.patentNo}, Published {patent.published}</div>
                <div className="text-xs text-gray-500">Filed {patent.filed}</div>
              </div>
            ))}
          </div>
          {PATENTS.length > 2 && (
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm font-medium border border-sky-200"
                onClick={() => setShowAllPatents((v) => !v)}
              >
                {showAllPatents ? 'Show Less' : 'View More'}
              </button>
            </div>
          )}
        </section>

        {/* Publications Section */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Publications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4 border border-sky-100 flex items-start gap-2">
                <div className="flex-1">
                  <div className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                    {pub.title}
                    {pub.locked && <Lock size={18} className="text-sky-400" />}
                  </div>
                  <div className="text-gray-700 text-sm mb-1">{pub.journal}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="flex-none w-full bg-neutral-light-gray text-neutral-dark-gray z-10 p-0 m-0">
        <div className="w-full p-0 m-0">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 