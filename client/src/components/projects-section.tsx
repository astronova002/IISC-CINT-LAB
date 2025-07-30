import React from 'react';
import { useApi } from '../hooks/use-api';

export function ProjectsSection() {
  const { data: projects, loading, error } = useApi('http://127.0.0.1:8000/api/projects/');

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Projects</h2>
      {loading && <div>Loading projects...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && projects && (!projects.results || projects.results.length === 0) && <div>No projects available.</div>}
      <ul className="space-y-6">
        {projects && projects.results && projects.results.map((item: any) => (
          <li key={item.id} className="bg-white rounded-xl shadow p-4">
            <div className="font-semibold text-lg text-primary">{item.title}</div>
            <div className="text-gray-800 whitespace-pre-line mt-1">{item.description}</div>
            <div className="text-xs text-gray-500 mt-2">{item.start_date} - {item.end_date || 'Ongoing'}</div>
          </li>
        ))}
      </ul>
    </section>
  );
} 