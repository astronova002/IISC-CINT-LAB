import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onNavigate: (section: number) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section 
      className="horizontal-section section-snap bg-gradient-academic flex items-center justify-center min-h-screen" 
      data-section="0" 
      aria-labelledby="hero-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => onNavigate(3)}
                className="btn-primary"
                aria-label="View our research"
              >
                View Our Research
              </Button>
              <Button 
                variant="outline"
                onClick={() => onNavigate(4)}
                className="btn-secondary"
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
