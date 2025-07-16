import { useState, useEffect } from 'react';

interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content?: string;
  imageUrl?: string;
  type: string;
  isPublished: boolean;
  publishedAt: string;
  externalLink?: string;
}

interface NewsCarouselProps {
  className?: string;
}

export function NewsCarousel({ className = "" }: NewsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch news from API
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (response.ok) {
          const data = await response.json();
          setNews(data);
        } else {
          console.error('Failed to fetch news');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (isPaused || news.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused, news.length]);

  const getNewsTypeIcon = (type: string) => {
    switch (type) {
      case 'award':
        return '🏆';
      case 'news':
        return '📰';
      case 'collaboration':
        return '🤝';
      case 'achievement':
        return '⭐';
      default:
        return '📢';
    }
  };

  const getNewsTypeColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'from-yellow-400 to-orange-500';
      case 'news':
        return 'from-blue-400 to-cyan-500';
      case 'collaboration':
        return 'from-green-400 to-emerald-500';
      case 'achievement':
        return 'from-purple-400 to-pink-500';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  if (isLoading) {
    return (
      <div className={`absolute left-4 md:left-8 top-20 z-50 ${className}`}>
        <div className="w-80 md:w-96 lg:w-[28rem] p-6 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl">
          <div className="text-center text-slate-400">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-400 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Latest News</h3>
            <p className="text-sm">Loading news...</p>
          </div>
        </div>
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <div className={`absolute left-4 md:left-8 top-20 z-50 ${className}`}>
        <div className="w-80 md:w-96 lg:w-[28rem] p-6 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl">
          <div className="text-center text-slate-400">
            <div className="text-4xl mb-4">📰</div>
            <h3 className="text-xl font-semibold mb-2">Latest News</h3>
            <p className="text-sm">No news available at the moment</p>
          </div>
        </div>
      </div>
    );
  }

  const currentNews = news[currentIndex];

  return (
    <div 
      className={`absolute left-4 md:left-8 top-20 z-50 ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="w-80 md:w-96 lg:w-[28rem] bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-b border-slate-600/30">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-white">Latest News</h3>
            <div className="flex space-x-1">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-400 to-cyan-400 scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full"></div>
        </div>

        {/* News Content */}
        <div className="p-6">
          <div className="relative group">
            {/* News Card */}
            <div className="bg-gradient-to-br from-slate-800/90 to-slate-700/90 rounded-2xl p-6 border border-slate-600/30 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
              {/* News Type Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getNewsTypeColor(currentNews.type)} text-white text-xs font-semibold`}>
                  <span className="mr-2">{getNewsTypeIcon(currentNews.type)}</span>
                  {currentNews.type.charAt(0).toUpperCase() + currentNews.type.slice(1)}
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  {new Date(currentNews.publishedAt).toLocaleDateString()}
                </div>
              </div>

              {/* News Image */}
              {currentNews.imageUrl && (
                <div className="mb-4 relative overflow-hidden rounded-xl">
                  <img 
                    src={currentNews.imageUrl} 
                    alt={currentNews.title}
                    className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}

              {/* News Title */}
              <h4 className="text-lg font-bold text-white mb-3 leading-tight line-clamp-2">
                {currentNews.title}
              </h4>

              {/* News Summary */}
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 mb-4">
                {currentNews.summary}
              </p>

              {/* Action Button */}
              <div className="flex items-center justify-between">
                <button 
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 hover:shadow-lg hover:scale-105"
                  onClick={() => {
                    if (currentNews.externalLink) {
                      window.open(currentNews.externalLink, '_blank');
                    }
                  }}
                >
                  {currentNews.externalLink ? 'Read More' : 'View Details'}
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Progress Indicator */}
                <div className="flex items-center space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            {news.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + news.length) % news.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % news.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-800/80 hover:bg-slate-700/80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 