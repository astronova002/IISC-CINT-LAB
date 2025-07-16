import Carousel from 'react-spring-3d-carousel';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    key: 1,
    content: (
      <img
        src="/attached_assets/image_1752045813057.png"
        alt="CINT Lab Building"
        className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-primary"
      />
    ),
  },
  {
    key: 2,
    content: (
      <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl shadow-lg border-4 border-primary text-2xl text-primary font-bold">
        Coming Soon
      </div>
    ),
  },
  {
    key: 3,
    content: (
      <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl shadow-lg border-4 border-primary text-2xl text-primary font-bold">
        More Images
      </div>
    ),
  },
];

export default function LabCarousel() {
  const [goToSlide, setGoToSlide] = useState(0);
  const totalSlides = slides.length;

  const prevSlide = () => setGoToSlide((goToSlide - 1 + totalSlides) % totalSlides);
  const nextSlide = () => setGoToSlide((goToSlide + 1) % totalSlides);

  return (
    <div className="w-full max-w-2xl mx-auto my-8 relative">
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={2}
        showNavigation={false}
        animationConfig={{ tension: 120, friction: 14 }}
      />
      {/* Clickable left/right overlays for navigation */}
      <button
        className="absolute top-0 left-0 h-full w-1/2 z-20 focus:outline-none"
        style={{ background: 'transparent', cursor: 'w-resize' }}
        onClick={prevSlide}
        aria-label="Previous slide"
      />
      <button
        className="absolute top-0 right-0 h-full w-1/2 z-20 focus:outline-none"
        style={{ background: 'transparent', cursor: 'e-resize' }}
        onClick={nextSlide}
        aria-label="Next slide"
      />
      <div className="flex justify-center gap-2 mt-4 relative z-30">
        {slides.map((slide, idx) => (
          <button
            key={slide.key}
            className={`w-3 h-3 rounded-full border-2 border-primary ${goToSlide === idx ? 'bg-[#393E46]' : 'bg-white'}`}
            onClick={() => setGoToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 