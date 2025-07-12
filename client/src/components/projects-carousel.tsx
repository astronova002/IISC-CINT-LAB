import { useState } from 'react';
import { projects } from '@/data/lab-data';

interface ProjectsCarouselProps {
  className?: string;
}

export function ProjectsCarousel({ className = "" }: ProjectsCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);

  // Create a continuous loop of projects items
  const continuousProjects = [...projects, ...projects, ...projects]; // Triple the projects array for smooth looping
  
  // Debug: Log the number of projects
  console.log('Projects carousel loaded with', projects.length, 'projects');

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

  return (
    <div 
      className={`absolute right-4 md:right-8 top-20 z-50 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-80 md:w-96 lg:w-[28rem] p-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
        {/* Title Header */}
        <div className="mb-4 p-4 bg-black/90 backdrop-blur-sm rounded-xl border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Ongoing Projects</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative h-[32rem] overflow-hidden border-2 border-white">
          <div
            className={`transition-transform duration-1000 ease-linear ${
              isPaused ? 'animate-pause' : 'animate-scroll'
            }`}
            style={{
              animationDuration: `${continuousProjects.length * 3}s`,
            }}
          >
            {continuousProjects.map((item, index) => (
                              <div
                  key={`${item.id}-${index}`}
                  className="mb-8 p-6 bg-black/95 backdrop-blur-sm rounded-xl shadow-xl border-l-4 border-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <span className="text-3xl">{getProjectIcon(item.icon)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-semibold text-white line-clamp-2 mb-3 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-200 line-clamp-3 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="text-xs bg-black/80 text-white px-2 py-1 rounded-full border border-white/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 