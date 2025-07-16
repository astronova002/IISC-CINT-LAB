import { useState, useEffect } from "react";
import { NavigationHeader } from "@/components/navigation-header";
import { BrandingFooter } from "@/components/branding-footer";
import { MainNavBar } from "@/components/navigation";
import LabCarousel from '@/components/lab-carousel';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useLocation } from "wouter";
import path from "path";
import { fileURLToPath } from "url";
import { getPublishedNews } from "@/data/admin-data";
import { projects } from "@/data/lab-data";
import { ArrowUpRight, Newspaper, FolderOpen, Megaphone } from "lucide-react";

interface CarouselNewsItem {
  id: number;
  imageUrl: string;
  title?: string;
  summary?: string;
}

export default function Home() {
  const [carouselNews, setCarouselNews] = useState<CarouselNewsItem[]>([]);
  const [, navigate] = useLocation();
  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        // Only use news with type 'carousel' and a valid imageUrl
        setCarouselNews(
          (data || []).filter((item: any) => item.type === 'carousel' && item.imageUrl)
        );
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-light-gray">
      {/* Header and Navigation */}
      <NavigationHeader currentSection="home" onNavigate={() => {}} />
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <MainNavBar />
      </div>
      {/* Full-width Image Movement Carousel - now below header/nav */}
      <div className="w-full flex" style={{ minHeight: 450, background: '#22252a' }}>
        <div className="relative w-full">
          <Carousel opts={{ loop: true, align: 'center' }} className="w-full" style={{ height: 450 }}>
            {/* Arrows above images, inside Carousel context */}
            <div className="flex justify-between items-center absolute w-full top-0 left-0 z-30" style={{ height: 40, pointerEvents: 'none' }}>
              <CarouselPrevious className="!static !left-0 !top-0 !-translate-y-0 text-3xl" style={{ fontSize: 32, color: '#948979', background: 'rgba(34,37,42,0.7)', border: 'none', pointerEvents: 'auto' }}>
                &lt;
              </CarouselPrevious>
              <CarouselNext className="!static !right-0 !top-0 !-translate-y-0 text-3xl" style={{ fontSize: 32, color: '#948979', background: 'rgba(34,37,42,0.7)', border: 'none', pointerEvents: 'auto' }}>
                &gt;
              </CarouselNext>
            </div>
            <CarouselContent>
              {carouselNews.length === 0 ? (
                <CarouselItem className="flex items-center justify-center">
                  <div style={{ width: '100vw', height: '450px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888', fontSize: 32 }}>
                    No images to display
                  </div>
                </CarouselItem>
              ) : (
                carouselNews.map((item, idx) => (
                  <CarouselItem key={item.id} className="flex items-center justify-center">
                    <div
                      style={{ position: 'relative', width: '100vw', height: '450px', cursor: 'pointer' }}
                      onClick={() => navigate(`/news?id=${item.id}`)}
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title || `Home Slide ${idx + 1}`}
                        style={{ width: '100vw', height: '450px', objectFit: 'cover', borderRadius: 0 }}
                      />
                      {item.summary && (
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          background: 'rgba(0,0,0,0.5)',
                          color: '#fff',
                          padding: '16px 32px',
                          fontSize: 20,
                          fontWeight: 500,
                          letterSpacing: 0.2,
                          textShadow: '0 2px 8px #000',
                          borderBottomLeftRadius: 0,
                          borderBottomRightRadius: 0
                        }}>
                          {item.summary}
                        </div>
                      )}
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full bg-neutral-light-gray">
        {/* Three sky blue boxes below the carousel: Ongoing Projects, Latest News, Bulletins */}
        <div className="w-full flex flex-col md:flex-row gap-6 px-4 md:px-16 py-10 max-w-7xl mx-auto">
          {/* Ongoing Projects Box */}
          <div className="flex-1 bg-sky-100 rounded-2xl shadow-lg p-6 min-h-[320px] flex flex-col border border-sky-200 relative">
            <div className="flex items-center mb-4">
              <FolderOpen className="text-sky-500 mr-2" size={28} />
              <h2 className="text-2xl font-semibold text-sky-800 flex-1">Ongoing Projects</h2>
              <button
                className="ml-2 px-2 py-1 text-xs bg-sky-200 text-sky-700 rounded hover:bg-sky-300 transition"
                onClick={() => navigate('/admin?tab=projects')}
                title="Manage Projects"
              >
                Manage <ArrowUpRight size={14} className="inline ml-1" />
              </button>
            </div>
            {/* Vertical slider for projects */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              <ul className="space-y-4">
                {projects.slice(0, 6).map((project) => (
                  <li key={project.id} className="bg-white/80 rounded-lg p-3 shadow hover:shadow-md transition cursor-pointer border border-sky-200 hover:bg-sky-50 flex gap-4 items-start">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-20 h-20 object-cover rounded-xl border border-sky-100 flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-sky-700 text-lg mb-1 flex items-center">
                        <FolderOpen className="mr-2 text-sky-400" size={18} />
                        {project.title}
                      </div>
                      <div className="text-sky-900 text-sm mb-1">{project.description || 'No description.'}</div>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {project.tags.map((tag, idx) => (
                          <span key={idx} className="bg-sky-200 text-sky-700 px-2 py-0.5 rounded-full text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Latest News Box */}
          <div className="flex-1 bg-sky-100 rounded-2xl shadow-lg p-6 min-h-[320px] flex flex-col border border-sky-200 relative">
            <div className="flex items-center mb-4">
              <Newspaper className="text-sky-500 mr-2" size={28} />
              <h2 className="text-2xl font-semibold text-sky-800 flex-1">Latest News</h2>
              <button
                className="ml-2 px-2 py-1 text-xs bg-sky-200 text-sky-700 rounded hover:bg-sky-300 transition"
                onClick={() => navigate('/admin?tab=news')}
                title="Manage News"
              >
                Manage <ArrowUpRight size={14} className="inline ml-1" />
              </button>
            </div>
            {/* Vertical slider for news */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              <ul className="space-y-4">
                {getPublishedNews(6).map((news) => (
                  <li key={news.id} className="bg-white/80 rounded-lg p-3 shadow hover:shadow-md transition cursor-pointer border border-sky-200 hover:bg-sky-50">
                    <div className="font-bold text-sky-700 text-lg mb-1 flex items-center">
                      <Newspaper className="mr-2 text-sky-400" size={18} />
                      {news.title}
                    </div>
                    <div className="text-sky-900 text-sm mb-1">{news.summary}</div>
                    <div className="text-xs text-sky-600 mt-1">{news.date}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Bulletins Box */}
          <div className="flex-1 bg-sky-100 rounded-2xl shadow-lg p-6 min-h-[320px] flex flex-col border border-sky-200 relative">
            <div className="flex items-center mb-4">
              <Megaphone className="text-sky-500 mr-2" size={28} />
              <h2 className="text-2xl font-semibold text-sky-800 flex-1">Bulletins</h2>
              <button
                className="ml-2 px-2 py-1 text-xs bg-sky-200 text-sky-700 rounded hover:bg-sky-300 transition"
                onClick={() => navigate('/admin?tab=bulletins')}
                title="Manage Bulletins"
              >
                Manage <ArrowUpRight size={14} className="inline ml-1" />
              </button>
            </div>
            {/* Vertical slider for bulletins (placeholder) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
              <ul className="space-y-4">
                <li className="bg-white/80 rounded-lg p-3 shadow hover:shadow-md transition cursor-pointer border border-sky-200 hover:bg-sky-50">
                  <div className="font-bold text-sky-700 text-lg mb-1 flex items-center">
                    <Megaphone className="mr-2 text-sky-400" size={18} />
                    Semester break from Aug 1-15
                  </div>
                  <div className="text-sky-900 text-sm mb-1">All lab activities will be paused during this period.</div>
                  <div className="text-xs text-sky-600 mt-1">July 2024</div>
                </li>
                <li className="bg-white/80 rounded-lg p-3 shadow hover:shadow-md transition cursor-pointer border border-sky-200 hover:bg-sky-50">
                  <div className="font-bold text-sky-700 text-lg mb-1 flex items-center">
                    <Megaphone className="mr-2 text-sky-400" size={18} />
                    New safety protocols in effect
                  </div>
                  <div className="text-sky-900 text-sm mb-1">Please review the updated safety guidelines on the lab portal.</div>
                  <div className="text-xs text-sky-600 mt-1">July 2024</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Smaller, stretched Footer */}
      <footer className="flex-none w-full bg-neutral-light-gray text-neutral-dark-gray z-10 p-0 m-0">
        <div className="w-full p-0 m-0">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
}

/* Add this to your CSS (e.g., index.css) for custom-scrollbar if not present:
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
  background: #e0f2fe;
  border-radius: 8px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #bae6fd;
  border-radius: 8px;
}
*/