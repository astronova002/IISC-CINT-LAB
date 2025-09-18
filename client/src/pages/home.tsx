import { useState, useEffect } from "react";
import { NavigationHeader } from "@/components/navigation-header";
import { BrandingFooter } from "@/components/branding-footer";
import { MainNavBar } from "@/components/navigation";
import { useLocation } from "wouter";
import { getPublishedNews } from "@/data/admin-data";
import { projects } from "@/data/lab-data";
import { Newspaper, FolderOpen, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

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
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => {
        setCarouselNews(
          (data || []).filter(
            (item: any) => item.type === "carousel" && item.imageUrl
          )
        );
      });
  }, []);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const sections = [
    {
      id: 1,
      title: "Ongoing Projects",
      icon: <FolderOpen className="text-blue-500 mr-2" size={26} />,
      color: "blue",
      content: (
        <ul className="space-y-5">
          {projects.slice(0, 4).map((project) => (
            <li
              key={project.id}
              className="p-4 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-blue-50 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02] duration-300 cursor-pointer flex gap-4 items-start"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-28 h-28 object-cover rounded-xl border border-gray-200 flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1 flex items-center">
                  <FolderOpen className="mr-2 text-blue-400" size={16} />
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {project.description || "No description."}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ),
      image: "/1d.jpg",
    },
    {
      id: 2,
      title: "Latest News",
      icon: <Newspaper className="text-green-500 mr-2" size={26} />, 
      color: "green",
      content: (
        <ul className="space-y-5">
          {getPublishedNews(4).map((news) => (
            <li
              key={news.id}
              className="p-4 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-green-50 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02] duration-300 cursor-pointer"
            >
              <h3 className="font-semibold text-gray-800 flex items-center mb-1">
                <Newspaper className="mr-2 text-green-400" size={16} />
                {news.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-3">{news.summary}</p>
              <span className="text-xs text-gray-500 mt-2 block">{news.date}</span>
            </li>
          ))}
        </ul>
      ),
      image: "/1e.jpg",
    },
    {
      id: 3,
      title: "Bulletins",
      icon: <Megaphone className="text-purple-500 mr-2" size={26} />, 
      color: "purple",
      content: (
        <ul className="space-y-5">
          <li className="p-4 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-purple-50 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02] duration-300 cursor-pointer">
            <h3 className="font-semibold text-gray-800 flex items-center mb-1">
              <Megaphone className="mr-2 text-purple-400" size={16} />
              Semester break from Aug 1–15
            </h3>
            <p className="text-gray-600 text-sm">
              All lab activities will be paused during this period.
            </p>
            <span className="text-xs text-gray-500 mt-2 block">July 2024</span>
          </li>
          <li className="p-4 rounded-2xl border border-gray-200 bg-gray-50 hover:bg-purple-50 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02] duration-300 cursor-pointer">
            <h3 className="font-semibold text-gray-800 flex items-center mb-1">
              <Megaphone className="mr-2 text-purple-400" size={16} />
              New safety protocols in effect
            </h3>
            <p className="text-gray-600 text-sm">
              Please review the updated safety guidelines on the lab portal.
            </p>
            <span className="text-xs text-gray-500 mt-2 block">July 2024</span>
          </li>
        </ul>
      ),
      image: "/1f.jpg",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-50">
      {/* Header */}
      <NavigationHeader currentSection="home" onNavigate={() => {}} />
      <div className="sticky top-0 z-20 shadow bg-white">
        <MainNavBar />
      </div>

      {/* Main */}
      <main className="flex-1 flex flex-col w-[1200hv] max-w-7xl mx-auto px-6 py-12 space-y-24">
        {/* Full Width Half Screen Height Video */}
         <h1 className="text-4xl font-bold text-gray-900 mb-16 text-center">
          Welcome to the Research Lab Portal
        </h1>
      <div className="w-[800hv] h-[50vh] mb-12">
  <img
    src="1g.jpg"
    alt="Intro"
    className="w-full h-full object-cover rounded-2xl shadow-lg border border-gray-300"
  />
</div>

       

        {sections.map((section, idx) => (
          <motion.div
            key={section.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Content */}
            <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-200 p-8 hover:shadow-2xl transition duration-500">
              <header className="flex items-center mb-6">
                {section.icon}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h2>
              </header>
              {section.content}
            </div>

            {/* Image */}
            <motion.img
              src={section.image}
              alt={section.title}
              className="flex-1 w-full max-w-md rounded-2xl shadow-lg border border-gray-200 object-cover hover:scale-105 transition duration-500"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-12">
        <div className="max-w-16xl mx-auto p-6">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
}
