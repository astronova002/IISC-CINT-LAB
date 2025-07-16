import { useState, useEffect } from 'react';
import { projects } from '@/data/lab-data';

interface ProjectsCarouselProps {
  className?: string;
}

export function ProjectsCarousel({ className = "" }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || projects.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, projects.length]);

  const getProjectIcon = (icon: string) => {
    switch (icon) {
      case 'project-diagram':
        return '🛸';
      case 'microchip':
        return '🛰️';
      case 'dna':
        return '🧬';
      case 'leaf':
        return '🧘';
      default:
        return '🔬';
    }
  };

  const getProjectColor = (icon: string) => {
    switch (icon) {
      case 'project-diagram':
        return 'from-purple-400 to-pink-500';
      case 'microchip':
        return 'from-blue-400 to-indigo-500';
      case 'dna':
        return 'from-green-400 to-teal-500';
      case 'leaf':
        return 'from-emerald-400 to-green-500';
      default:
        return 'from-orange-400 to-red-500';
    }
  };

  if (projects.length === 0) {
    return (
      <div className={`absolute right-4 md:right-8 top-20 z-50 ${className}`}>
        <div className="w-80 md:w-96 lg:w-[28rem] p-6 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl">
          <div className="text-center text-slate-400">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-semibold mb-2">Ongoing Projects</h3>
            <p className="text-sm">No projects available at the moment</p>
          </div>
        </div>
      </div>
    );
  }

  const currentProject = projects[currentIndex];

  return (
    <div 
      className={`absolute right-4 md:right-8 top-20 z-50 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-80 md:w-96 lg:w-[28rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-b border-slate-600/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Ongoing Projects</h3>
            <div className="flex space-x-1">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 rounded-full"></div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="relative group">
            {/* Project Card */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-slate-600/30 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getProjectColor(currentProject.icon)} flex items-center justify-center text-2xl shadow-lg`}>
                    {getProjectIcon(currentProject.icon)}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white leading-tight line-clamp-2">
                      {currentProject.title}
                    </h4>
                    <div className="text-xs text-slate-400 mt-1">Active Project</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">Live</span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-4">
                {currentProject.description}
              </p>

              {/* Project Tags */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-slate-700/80 to-slate-600/80 text-slate-300 text-xs font-medium rounded-full border border-slate-500/30 hover:border-slate-400/50 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400 font-medium">Progress</span>
                  <span className="text-xs text-slate-300 font-semibold">75%</span>
                </div>
                <div className="w-full bg-slate-700/50 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-purple-600 hover:to-pink-600 hover:shadow-lg hover:scale-105">
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
                
                {/* Progress Indicator */}
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {projects.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 