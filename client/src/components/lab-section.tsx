import { Brain, Atom, Microscope, Zap } from "lucide-react";
import { projects } from "@/data/lab-data";

const iconMap = {
  'project-diagram': Zap,
  'microchip': Brain,
  'dna': Atom,
  'leaf': Microscope
};

export function LabSection() {
  const focusAreas = [
    {
      title: "Computational Intelligence",
      description: "Advanced AI algorithms, neural networks, and machine learning applications for complex problem solving.",
      icon: Brain,
      gradient: "from-academic-brown to-sandy-brown"
    },
    {
      title: "Nanotechnology",
      description: "Nanoscale materials research, device fabrication, and characterization using cutting-edge techniques.",
      icon: Atom,
      gradient: "from-forest-green to-academic-brown"
    },
    {
      title: "Interdisciplinary Research",
      description: "Combining computational methods with experimental techniques for breakthrough discoveries.",
      icon: Microscope,
      gradient: "from-sandy-brown to-forest-green"
    }
  ];

  return (
    <section 
      className="horizontal-section section-snap bg-white flex items-center justify-center py-20" 
      data-section="3" 
      aria-labelledby="lab-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="lab-heading" className="text-4xl md:text-5xl font-bold academic-brown mb-6 font-serif">
            Our Laboratory
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            State-of-the-art facilities and cutting-edge research projects
          </p>
        </div>
        
        {/* Research Focus Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {focusAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index}
                className={`bg-gradient-to-br ${area.gradient} rounded-xl p-8 text-white text-center hover:transform hover:scale-105 transition-all`}
              >
                <IconComponent className="text-4xl mb-6 mx-auto" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                <p>{area.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Current Projects */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold academic-brown mb-8 text-center">Current Research Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              const IconComponent = iconMap[project.icon as keyof typeof iconMap] || Zap;
              return (
                <div key={project.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-academic-brown rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold academic-brown mb-2">{project.title}</h4>
                      <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-3 py-1 bg-academic-beige academic-brown text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
