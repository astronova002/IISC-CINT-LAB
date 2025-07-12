import { projects } from '@/data/lab-data';

export function TestCarousel() {
  return (
    <div className="absolute top-10 left-10 bg-red-500 p-4 z-50">
      <h3 className="text-white text-xl font-bold">Test Carousel</h3>
      <p className="text-white">Projects count: {projects.length}</p>
      <div className="bg-white p-2 mt-2 rounded">
        {projects.map((project, index) => (
          <div key={index} className="text-black mb-2">
            <strong>{project.title}</strong>
            <p className="text-sm">{project.description.substring(0, 50)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
} 