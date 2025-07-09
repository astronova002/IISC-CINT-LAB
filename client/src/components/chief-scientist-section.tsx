import { Mail, Linkedin, BookOpen } from "lucide-react";
import { chiefScientist } from "@/data/lab-data";

export function ChiefScientistSection() {
  return (
    <section 
      className="horizontal-section section-snap bg-gradient-to-br from-academic-beige to-gray-50 flex items-center justify-center py-20" 
      data-section="2" 
      aria-labelledby="chief-scientist-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="chief-scientist-heading" className="text-4xl md:text-5xl font-bold academic-brown mb-6 font-serif">
            Chief Scientist
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <img 
              src={chiefScientist.image}
              alt={`${chiefScientist.name} portrait in professional setting`}
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:mx-0 h-auto" 
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold academic-brown mb-2">{chiefScientist.name}</h3>
              <p className="text-xl forest-green mb-4">{chiefScientist.title}</p>
              <p className="text-lg text-gray-700 mb-6">{chiefScientist.qualification}</p>
            </div>
            
            <div className="prose prose-lg text-gray-700">
              <p>{chiefScientist.bio}</p>
              <p>{chiefScientist.extendedBio}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-bold academic-brown mb-3">Research Interests</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  {chiefScientist.researchInterests.map((interest, index) => (
                    <li key={index}>• {interest}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-bold forest-green mb-3">Contact & Social</h4>
                <div className="space-y-3">
                  <a 
                    href={`mailto:${chiefScientist.email}`} 
                    className="flex items-center text-sm text-gray-700 hover:text-academic-brown transition-colors"
                  >
                    <Mail className="w-5 mr-3" aria-hidden="true" />
                    <span>{chiefScientist.email}</span>
                  </a>
                  <a href="#" className="flex items-center text-sm text-gray-700 hover:text-academic-brown transition-colors">
                    <Linkedin className="w-5 mr-3" aria-hidden="true" />
                    LinkedIn Profile
                  </a>
                  <a href="#" className="flex items-center text-sm text-gray-700 hover:text-academic-brown transition-colors">
                    <BookOpen className="w-5 mr-3" aria-hidden="true" />
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
