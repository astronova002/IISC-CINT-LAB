import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: number) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section 
      className="horizontal-section section-snap bg-gradient-to-br from-academic-beige to-white flex items-center justify-center" 
      data-section="0" 
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold academic-brown mb-6 font-serif">
              CINT Lab
            </h1>
            <p className="text-xl md:text-2xl forest-green mb-4 font-serif">
              Center for Interdisciplinary Research
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Advancing computational intelligence and nanotechnology through innovative research at Indian Institute of Science, Bangalore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate(3)}
                className="bg-academic-brown text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
                aria-label="View our research"
              >
                View Our Research
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate(4)}
                className="border-2 border-academic-brown academic-brown px-8 py-3 rounded-lg hover:bg-academic-brown hover:text-white transition-all"
                aria-label="Meet our team"
              >
                Meet Our Team
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern research laboratory facility" 
              className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
