import { Target, Eye, Lightbulb } from "lucide-react";

export function AboutSection() {
  const timeline = [
    {
      year: "1990s",
      title: "Career Start",
      description: "Established research in helicopter dynamics and aerospace engineering",
      color: "academic-brown"
    },
    {
      year: "2000s",
      title: "Lab Expansion",
      description: "Founded Computational Intelligence, UAV, and Biomechanics Labs",
      color: "forest-green"
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "BBC feature for violence detection research, 164+ publications",
      color: "sandy-brown"
    }
  ];

  return (
    <section 
      className="horizontal-section section-snap bg-white flex items-center justify-center py-20" 
      data-section="1" 
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold academic-brown mb-6 font-serif">
            About Our Research Labs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Three specialized laboratories led by Dr. S.N. Omkar at IISc's Department of Aerospace Engineering
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-academic-beige rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-academic-brown rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="text-white text-2xl" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold academic-brown mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To advance aerospace engineering through interdisciplinary research in UAV technology, satellite image processing, and biomechanics applications with real-world impact.
            </p>
          </div>
          
          <div className="bg-academic-beige rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-forest-green rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="text-white text-2xl" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold forest-green mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To pioneer autonomous systems and intelligent surveillance technologies that address societal challenges through innovative aerospace solutions.
            </p>
          </div>
          
          <div className="bg-academic-beige rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-sandy-brown rounded-full flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="text-white text-2xl" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold sandy-brown mb-4">Our Impact</h3>
            <p className="text-gray-700">
              164+ publications, 4,193+ citations, 200+ trained interns, and recognition from BBC for groundbreaking violence detection research.
            </p>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold academic-brown mb-8 text-center">Our Journey</h3>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {timeline.map((item, index) => (
              <div key={item.year} className="text-center flex-1">
                <div className={`w-16 h-16 bg-${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold">{item.year}</span>
                </div>
                <h4 className={`font-semibold ${item.color} mb-2`}>{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block w-full h-px bg-gray-300 mt-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
