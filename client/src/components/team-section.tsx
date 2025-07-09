import { useState } from "react";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers, TeamMember } from "@/data/lab-data";

type TeamCategory = 'all' | 'faculty' | 'phd' | 'masters' | 'alumni';

export function TeamSection() {
  const [activeCategory, setActiveCategory] = useState<TeamCategory>('all');

  const categories = [
    { key: 'all' as const, label: 'All Team' },
    { key: 'faculty' as const, label: 'Faculty' },
    { key: 'phd' as const, label: 'PhD Students' },
    { key: 'masters' as const, label: 'Masters Students' },
    { key: 'alumni' as const, label: 'Alumni' }
  ];

  const filteredMembers = activeCategory === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === activeCategory);

  return (
    <section 
      className="horizontal-section section-snap bg-academic-beige flex items-center justify-center py-20" 
      data-section="4" 
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="team-heading" className="text-4xl md:text-5xl font-bold academic-brown mb-6 font-serif">
            Our Team
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Brilliant minds working together to push the boundaries of science
          </p>
        </div>
        
        {/* Team Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.key
                  ? 'bg-academic-brown text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
        
        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <img 
                src={member.image}
                alt={`${member.name} professional headshot`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
              />
              <h3 className="text-lg font-bold academic-brown mb-1">{member.name}</h3>
              <p className="text-sm forest-green mb-2">{member.title}</p>
              <p className="text-xs text-gray-600 mb-3">{member.specialization}</p>
              <div className="flex justify-center space-x-2">
                {member.email && (
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-academic-brown transition-colors" 
                    aria-label="Email"
                  >
                    <Mail size={16} aria-hidden="true" />
                  </a>
                )}
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-academic-brown transition-colors" 
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
