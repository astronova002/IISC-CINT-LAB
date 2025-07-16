import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";
import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";

export default function News() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [location] = useLocation();
  const listRefs = useRef<{ [id: number]: HTMLLIElement | null }>({});

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch("/api/news")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch news");
        return res.json();
      })
      .then(setNews)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Expand and scroll to news item if id param is present
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1] || '');
    const idParam = params.get('id');
    if (idParam && news.length > 0) {
      const idx = news.findIndex(n => String(n.id) === idParam);
      if (idx !== -1) {
        setExpanded(idx);
        setTimeout(() => {
          listRefs.current[news[idx].id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location, news]);

  return (
    <div className="min-h-screen bg-neutral-light-gray flex flex-col w-full">
      <div className="w-full">
        <NavigationHeader currentSection="news" onNavigate={() => {}} />
        <MainNavBar />
      </div>
      <main className="flex-1 w-full py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-primary text-3xl mb-8 text-center">Latest News & Updates</h1>
          {loading && (
            <div className="text-center text-neutral-dark-gray font-body">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-navy mx-auto mb-4"></div>
              Loading news...
            </div>
          )}
          {error && (
            <div className="text-accent-red font-body text-center p-4 bg-red-50 rounded-lg border border-red-200">
              {error}
            </div>
          )}
          {!loading && !error && news.length === 0 && (
            <div className="text-center text-neutral-dark-gray font-body p-8">
              No news available at the moment.
            </div>
          )}
          <ul className="space-y-6">
            {news.map((item, idx) => (
              <li
                key={item.id}
                className="card-professional p-6"
                ref={el => (listRefs.current[item.id] = el)}
                id={`news-${item.id}`}
              >
                <div className="flex gap-4">
                  {item.imageUrl && (
                    <img src={item.imageUrl} alt="news" className="w-32 h-32 object-cover rounded-lg flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <button
                        className="heading-primary text-lg hover:underline focus:outline-none transition-colors"
                        onClick={() => setExpanded(expanded === idx ? null : idx)}
                      >
                        {item.title}
                      </button>
                      <span className="text-xs text-secondary-warm-gray font-academic bg-neutral-light-gray px-2 py-1 rounded-full">
                        {item.type}
                      </span>
                    </div>
                    {item.summary && (
                      <div className="text-academic text-sm mb-2">{item.summary}</div>
                    )}
                    {expanded === idx && (
                      <div className="text-body mt-3 p-4 bg-neutral-light-gray rounded-lg">
                        {item.content}
                      </div>
                    )}
                    {item.externalLink && (
                      <a 
                        href={item.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary-light-blue underline text-sm block mt-2 font-body hover:text-primary-navy transition-colors"
                      >
                        Read more →
                      </a>
                    )}
                    <div className="text-xs text-neutral-gray mt-3 font-academic">
                      {new Date(item.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <footer className="w-full bg-neutral-light-gray text-neutral-dark-gray mt-auto p-2 m-0">
        <BrandingFooter />
      </footer>
    </div>
  );
} 