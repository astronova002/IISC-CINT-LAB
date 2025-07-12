import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";
import { Linkedin, BookOpen, ChevronRight, ChevronDown, Mail, Phone, MapPin, Award, GraduationCap, Briefcase, Users, Globe } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

// ResearchGate SVG icon
const ResearchGateIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.667 0H1.333C.6 0 0 .6 0 1.333v21.333C0 23.4.6 24 1.333 24h21.333C23.4 24 24 23.4 24 22.667V1.333C24 .6 23.4 0 22.667 0zM19.2 17.067c-.267.4-.8.533-1.2.267-1.067-.667-2.133-1.6-3.067-2.667-.267-.267-.267-.667 0-.933.267-.267.667-.267.933 0 .8.8 1.6 1.467 2.4 2.133.267.267.267.667 0 .933zm-2.267-3.2c-.267.267-.667.267-.933 0-1.067-1.067-2.133-2.267-3.067-3.467-.267-.267-.267-.667 0-.933.267-.267.667-.267.933 0 1.067 1.2 2.133 2.4 3.067 3.467.267.267.267.667 0 .933zm-3.2-3.2c-.267.267-.667.267-.933 0-.8-.8-1.6-1.6-2.267-2.4-.267-.267-.267-.667 0-.933.267-.267.667-.267.933 0 .8.8 1.6 1.6 2.267 2.4.267.267.267.667 0 .933z"/>
  </svg>
);

interface BoxProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  position: { x: number; y: number };
  index: number;
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseUp: () => void;
}

const ConnectedBox: React.FC<BoxProps> = ({ 
  title, icon, children, isActive, onClick, position, index, 
  isDragging, onMouseDown, onMouseMove, onMouseUp 
}) => {
  return (
    <div 
      className="absolute cursor-grab active:cursor-grabbing"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
        zIndex: isDragging ? 1000 : 10
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      {/* Chain Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" 
             style={{ 
               left: '50%', 
               top: '50%', 
               transform: 'translate(-50%, -50%)',
               animationDelay: `${index * 0.3}s`
             }} />
        <div className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping" 
             style={{ 
               left: '50%', 
               top: '50%', 
               transform: 'translate(-50%, -50%)',
               animationDelay: `${index * 0.3 + 0.1}s`
             }} />
      </div>
      
      <div
        className={`
          relative w-40 h-40 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-sm rounded-2xl shadow-lg border-2 border-gray-200/50
          transition-all duration-500 ease-in-out group
          ${isActive 
            ? 'scale-110 shadow-2xl border-blue-300 bg-white/95 ring-4 ring-blue-200/50' 
            : 'hover:scale-105 hover:shadow-xl hover:border-blue-200 hover:ring-2 hover:ring-blue-100/50'
          }
          ${isDragging ? 'scale-110 shadow-2xl ring-4 ring-yellow-300/50 rotate-2' : ''}
          transform-gpu
        `}
      >
        {/* Glow effect */}
        <div className={`
          absolute inset-0 rounded-2xl transition-all duration-500
          ${isActive 
            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-100' 
            : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-50'
          }
          ${isDragging ? 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 opacity-100' : ''}
        `} />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
          <div className={`
            p-3 rounded-xl transition-all duration-300 mb-3
            ${isActive 
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
            }
            ${isDragging ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg' : ''}
          `}>
            {icon}
          </div>
          <h3 className={`
            font-bold text-sm transition-colors duration-300
            ${isActive ? 'text-blue-900' : 'text-gray-800 group-hover:text-blue-800'}
            ${isDragging ? 'text-yellow-900' : ''}
          `}>
            {title}
          </h3>
          
          {/* Expand indicator */}
          <div className={`
            absolute top-2 right-2 transition-all duration-300
            ${isActive ? 'rotate-90 text-blue-600' : 'text-gray-400 group-hover:text-blue-500'}
            ${isDragging ? 'text-yellow-600' : ''}
          `}>
            {isActive ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
          
          {/* Drag indicator */}
          {isDragging && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DataModal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode; title: string }> = ({ 
  isOpen, onClose, children, title 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-200/50 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-blue-900">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronDown size={20} className="text-gray-600" />
          </button>
        </div>
        <div className="space-y-3 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function ChiefScientist() {
  const [activeBox, setActiveBox] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [draggedBox, setDraggedBox] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [dragStartPos, setDragStartPos] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [boxPositions, setBoxPositions] = useState([
    { x: 25, y: 25 },
    { x: 75, y: 25 },
    { x: 25, y: 75 },
    { x: 75, y: 75 }
  ]);
  const originalPositions = [
    { x: 25, y: 25 },
    { x: 75, y: 25 },
    { x: 25, y: 75 },
    { x: 75, y: 75 }
  ];

  const boxes = [
    {
      title: "Personal Info",
      icon: <Users size={24} />,
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-600" />
            <a href="mailto:omkar@iisc.ac.in" className="text-blue-800 underline hover:text-blue-600">
              omkar@iisc.ac.in
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-600" />
            <span>Office: AE123</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-blue-600" />
            <span>+91 80 22932417</span>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <a href="https://www.linkedin.com/company/iisc-aerospace-engineering/posts/?feedView=all" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Linkedin size={16} className="text-blue-600" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a href="https://iiscprofiles.irins.org/profile/3996" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <BookOpen size={16} className="text-blue-600" />
              <span className="text-sm font-medium">IRINS Profile</span>
            </a>
            <a href="https://www.researchgate.net/profile/S-N-Omkar" 
               target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <ResearchGateIcon />
              <span className="text-sm font-medium">ResearchGate</span>
            </a>
          </div>
        </div>
      )
    },
    {
      title: "Education & Experience",
      icon: <GraduationCap size={24} />,
      content: (
        <div className="space-y-4">
          <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900">Education</h4>
            <p className="text-sm text-gray-600">Ph.D. in Aerospace Engineering</p>
            <p className="text-sm text-gray-600">Indian Institute of Science, Bangalore</p>
          </div>
          <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-semibold text-blue-900">Current Position</h4>
            <p className="text-sm text-gray-600">Chief Research Scientist</p>
            <p className="text-sm text-gray-600">Guidance & Control Division</p>
          </div>
          <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
            <h4 className="font-semibold text-purple-900">Research Advisor</h4>
            <p className="text-sm text-gray-600">Tata Consultancy Services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              "Member, Indian Society for Advancement of Materials and Process Engineering",
              "Member, Indian Society for Remote Sensing",
              "Member, American Helicopter Society",
              "Member, Review Committee on Land Resources Information System for Karnataka",
              "Member, Detailed Designs Review – Development of Fixed-wing Micro UAV, ADE",
              "Member, Review of R&D Projects – Development of Fixed-wing Micro UAV, NAL"
            ].map((membership, index) => (
              <div key={index} className="p-2 bg-gray-50 rounded-lg text-xs">
                <span className="text-gray-700">{membership}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Research Areas",
      icon: <Briefcase size={24} />,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { title: "Helicopter Dynamics", desc: "Rotor dynamics and flight control systems" },
              { title: "Satellite Image Processing", desc: "Remote sensing and image analysis" },
              { title: "UAV Technology", desc: "Autonomous navigation and control" },
              { title: "Structural Health Monitoring", desc: "Real-time monitoring systems" },
              { title: "Guidance & Control", desc: "Advanced control algorithms" },
              { title: "Aerospace Systems", desc: "Integrated aerospace solutions" }
            ].map((area, index) => (
              <div key={index} className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 text-sm">{area.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      title: "Publications & Awards",
      icon: <Award size={24} />,
      content: (
        <div className="space-y-4">
          <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-500">
            <h4 className="font-semibold text-yellow-900">Publications</h4>
            <p className="text-sm text-gray-600">100+ peer-reviewed publications</p>
            <p className="text-sm text-gray-600">International journals and conferences</p>
          </div>
          <div className="p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900">Awards & Recognition</h4>
            <p className="text-sm text-gray-600">Distinguished Researcher Award</p>
            <p className="text-sm text-gray-600">Best Paper Awards</p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              "IEEE Transactions on Aerospace and Electronic Systems",
              "Journal of Guidance, Control, and Dynamics",
              "AIAA Journal of Aircraft",
              "International Journal of Control",
              "Journal of Intelligent & Robotic Systems"
            ].map((journal, index) => (
              <div key={index} className="p-2 bg-gray-50 rounded-lg text-xs">
                <span className="text-gray-700">{journal}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setDragOffset({ x: offsetX, y: offsetY });
    setDragStartPos({ x: e.clientX, y: e.clientY });
    setDraggedBox(index);
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedBox === null) return;
    
    // Check if we've moved enough to consider it a drag
    const moveDistance = Math.sqrt(
      Math.pow(e.clientX - dragStartPos.x, 2) + 
      Math.pow(e.clientY - dragStartPos.y, 2)
    );
    
    if (moveDistance > 5) { // 5px threshold
      setIsDragging(true);
    }
    
    if (isDragging || moveDistance > 5) {
      const container = e.currentTarget.closest('.relative');
      if (!container) return;
      
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left - dragOffset.x) / rect.width) * 100;
      const y = ((e.clientY - rect.top - dragOffset.y) / rect.height) * 100;
      
      // Constrain to container bounds
      const constrainedX = Math.max(10, Math.min(90, x));
      const constrainedY = Math.max(10, Math.min(90, y));
      
      setBoxPositions(prev => {
        const newPositions = [...prev];
        newPositions[draggedBox] = { x: constrainedX, y: constrainedY };
        return newPositions;
      });
    }
  };

  const handleMouseUp = () => {
    if (draggedBox !== null) {
      if (!isDragging) {
        // This was a click, not a drag
        setActiveBox(activeBox === draggedBox ? null : draggedBox);
      } else {
        // This was a drag, animate back to original position
        setTimeout(() => {
          setBoxPositions(originalPositions);
        }, 100);
      }
      setDraggedBox(null);
      setIsDragging(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gray-400 flex flex-col w-full relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Subtle hover animation around the page */}
      <div className={`
        absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none
        ${isHovering ? 'bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5' : ''}
      `} />
      
      <NavigationHeader currentSection="chief-scientist" onNavigate={() => {}} />
      <MainNavBar />
      
      <main className="flex-1 w-full py-12 px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Chief Research Scientist</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse group-hover:opacity-50 transition-opacity duration-500"></div>
                <img
                  src="/sn%20omkar.jpg"
                  alt="Dr. S. N. Omkar"
                  className="relative rounded-3xl object-cover w-72 h-96 shadow-2xl border-4 border-white/50 transition-all duration-500 hover:scale-105 hover:shadow-3xl group-hover:border-blue-200/50"
                />
                {/* Floating particles around image */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-70"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-70" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="bg-gradient-to-br from-blue-900/90 via-purple-900/90 to-indigo-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200/30 text-white relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-4 right-4 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">Dr. S. N. Omkar</h2>
                  <h3 className="text-xl font-semibold text-blue-200 mb-4">Chief Research Scientist, Guidance & Control</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Distinguished researcher with expertise in helicopter dynamics, satellite image processing, 
                    and autonomous navigation systems. Leading innovative research in UAV technology and 
                    structural health monitoring at IISc Bangalore.
                  </p>
                  
                  {/* Enhanced Quick Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl font-bold text-yellow-300">25+</div>
                      <div className="text-xs text-blue-200">Years Experience</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl font-bold text-pink-300">100+</div>
                      <div className="text-xs text-blue-200">Publications</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl font-bold text-green-300">15+</div>
                      <div className="text-xs text-blue-200">Research Areas</div>
                    </div>
                    <div className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                      <div className="text-2xl font-bold text-orange-300">8</div>
                      <div className="text-xs text-blue-200">Memberships</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connected Boxes with Chain Animation */}
          <div className="relative h-96 w-full" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            {/* Chain lines connecting boxes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
              <defs>
                <linearGradient id="chainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              {/* Chain lines */}
              <line x1="25%" y1="25%" x2="75%" y2="25%" stroke="url(#chainGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
              <line x1="25%" y1="25%" x2="25%" y2="75%" stroke="url(#chainGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{animationDelay: '0.5s'}} />
              <line x1="75%" y1="25%" x2="75%" y2="75%" stroke="url(#chainGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{animationDelay: '1s'}} />
              <line x1="25%" y1="75%" x2="75%" y2="75%" stroke="url(#chainGradient)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" style={{animationDelay: '1.5s'}} />
              {/* Diagonal connections */}
              <line x1="25%" y1="25%" x2="75%" y2="75%" stroke="url(#chainGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{animationDelay: '2s'}} />
              <line x1="75%" y1="25%" x2="25%" y2="75%" stroke="url(#chainGradient)" strokeWidth="1" strokeDasharray="3,3" className="animate-pulse" style={{animationDelay: '2.5s'}} />
            </svg>
            
            {boxes.map((box, index) => (
              <ConnectedBox
                key={index}
                title={box.title}
                icon={box.icon}
                isActive={activeBox === index}
                onClick={() => setActiveBox(activeBox === index ? null : index)}
                position={boxPositions[index]}
                index={index}
                isDragging={draggedBox === index && isDragging}
                onMouseDown={(e) => handleMouseDown(e, index)}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
              >
                {box.content}
              </ConnectedBox>
            ))}
          </div>
        </div>
      </main>
      
      {/* Data Modal */}
      <DataModal 
        isOpen={activeBox !== null}
        onClose={() => setActiveBox(null)}
        title={activeBox !== null ? boxes[activeBox].title : ""}
      >
        {activeBox !== null && boxes[activeBox].content}
      </DataModal>
      
      <BrandingFooter />
    </div>
  );
} 