import { useState, useEffect } from "react";

interface ResearchMetrics {
  publications: number;
  citations: number;
  hIndex: number;
  trainedInterns: number;
  activeProjects: number;
  collaborators: number;
  lastUpdated: Date;
}

export function useRealTimeData() {
  const [metrics, setMetrics] = useState<ResearchMetrics>({
    publications: 164,
    citations: 4193,
    hIndex: 35,
    trainedInterns: 200,
    activeProjects: 12,
    collaborators: 25,
    lastUpdated: new Date()
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate real-time updates every 30 seconds
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        citations: prev.citations + Math.floor(Math.random() * 3), // Simulate new citations
        trainedInterns: prev.trainedInterns + (Math.random() > 0.95 ? 1 : 0), // Occasional new intern
        activeProjects: Math.max(8, prev.activeProjects + (Math.random() > 0.8 ? (Math.random() > 0.5 ? 1 : -1) : 0)), // Project changes
        lastUpdated: new Date()
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const refreshData = async () => {
    setIsLoading(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setMetrics(prev => ({
      ...prev,
      citations: prev.citations + Math.floor(Math.random() * 5),
      lastUpdated: new Date()
    }));
    
    setIsLoading(false);
  };

  return { metrics, isLoading, refreshData };
}

// Hook for fetching live news updates
export function useRealTimeNews() {
  const [newsItems, setNewsItems] = useState([
    {
      id: "1",
      title: "New Research Paper Accepted",
      summary: "Latest work on UAV surveillance systems accepted at IEEE conference",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      type: "achievement" as const
    },
    {
      id: "2", 
      title: "Industry Collaboration Announced",
      summary: "New partnership with leading aerospace company for drone technology",
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000), // 6 hours ago
      type: "collaboration" as const
    },
    {
      id: "3",
      title: "Citation Milestone Reached",
      summary: "Research publications have now been cited over 4,200 times",
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      type: "achievement" as const
    }
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());

  useEffect(() => {
    // Simulate periodic news updates
    const interval = setInterval(() => {
      const randomNews = [
        "New intern joins the research team",
        "Paper under review at top-tier journal",
        "Conference presentation scheduled",
        "Research collaboration proposal submitted",
        "Lab equipment upgrade completed"
      ];

      if (Math.random() > 0.7) { // 30% chance of new news
        const newItem = {
          id: Date.now().toString(),
          title: randomNews[Math.floor(Math.random() * randomNews.length)],
          summary: "Latest update from Dr. Omkar's research laboratories",
          timestamp: new Date(),
          type: "news" as const
        };

        setNewsItems(prev => [newItem, ...prev.slice(0, 4)]); // Keep only latest 5 items
        setLastUpdated(new Date());
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return { newsItems, lastUpdated };
}