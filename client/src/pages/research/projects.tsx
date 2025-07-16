import { useState } from "react";
import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { projects, Project } from "@/data/lab-data";
import { FolderOpen, X } from "lucide-react";

export default function ResearchProjects() {
  const ongoing = projects.filter(p => p.status === 'ongoing');
  const completed = projects.filter(p => p.status === 'completed');
  const [modalProject, setModalProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-neutral-light-gray flex flex-col w-full">
      <NavigationHeader currentSection="research" onNavigate={() => {}} />
      <MainNavBar />
      <main className="flex-1 w-full max-w-7xl mx-auto py-12 px-4">
        {/* Manage Button */}
        <div className="flex justify-end mb-6">
          <a
            href="/admin?tab=projects"
            className="px-4 py-2 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition text-sm font-medium border border-sky-200 flex items-center gap-2"
            title="Manage Projects"
          >
            Manage Projects
          </a>
        </div>
        {/* Ongoing Projects */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2 font-display">Ongoing Projects</h1>
          <div className="w-20 h-1 bg-sky-300 rounded-full mb-6 mx-auto"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Explore our current research projects spanning AI, UAVs, biomechanics, and more.
          </p>
          {ongoing.length === 0 ? (
            <p className="text-gray-500">No ongoing projects at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoing.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-md p-6 border border-sky-100 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-sky-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-xl border border-sky-100 mb-4 bg-sky-50"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <FolderOpen className="text-sky-500" size={20} />
                    <h2 className="text-xl font-bold text-blue-900 flex-1">{project.title}</h2>
                  </div>
                  <p className="text-gray-700 text-sm mb-3 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto mb-3">
                    {project.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="bg-sky-200 text-sky-700 px-2 py-0.5 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                  <button
                    className="mt-auto px-3 py-1 bg-sky-100 text-sky-800 rounded hover:bg-sky-200 transition text-sm font-medium border border-sky-200"
                    onClick={() => setModalProject(project)}
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Completed Projects */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2 font-display">Completed Projects</h1>
          <div className="w-16 h-1 bg-sky-200 rounded-full mb-6 mx-auto"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Discover our completed research projects and their impact.
          </p>
          {completed.length === 0 ? (
            <p className="text-gray-500">No completed projects yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completed.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-md p-6 border border-sky-100 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-sky-300">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-xl border border-sky-100 mb-4 bg-sky-50"
                  />
                  <div className="flex items-center gap-2 mb-2">
                    <FolderOpen className="text-sky-500" size={20} />
                    <h2 className="text-xl font-bold text-blue-900 flex-1">{project.title}</h2>
                  </div>
                  <p className="text-gray-700 text-sm mb-3 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto mb-3">
                    {project.tags.map((tag: string, idx: number) => (
                      <span key={idx} className="bg-sky-200 text-sky-700 px-2 py-0.5 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                  <button
                    className="mt-auto px-3 py-1 bg-sky-100 text-sky-800 rounded hover:bg-sky-200 transition text-sm font-medium border border-sky-200"
                    onClick={() => setModalProject(project)}
                  >
                    Read More
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Project Modal */}
        {modalProject && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full relative border border-sky-200">
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-sky-600 transition"
                onClick={() => setModalProject(null)}
                aria-label="Close"
              >
                <X size={24} />
              </button>
              <img
                src={modalProject.image}
                alt={modalProject.title}
                className="w-full h-48 object-cover rounded-xl border border-sky-100 mb-4 bg-sky-50"
              />
              <div className="flex items-center gap-2 mb-2">
                <FolderOpen className="text-sky-500" size={20} />
                <h2 className="text-2xl font-bold text-blue-900 flex-1">{modalProject.title}</h2>
              </div>
              <p className="text-gray-700 text-base mb-3">{modalProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {modalProject.tags.map((tag: string, idx: number) => (
                  <span key={idx} className="bg-sky-200 text-sky-700 px-2 py-0.5 rounded-full text-xs">{tag}</span>
                ))}
              </div>
              <div className="text-xs text-sky-700 font-semibold mb-1">Status: {modalProject.status === 'ongoing' ? 'Ongoing' : 'Completed'}</div>
            </div>
          </div>
        )}
      </main>
      <footer className="flex-none w-full bg-neutral-light-gray text-neutral-dark-gray z-10 p-0 m-0">
        <div className="w-full p-0 m-0">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 