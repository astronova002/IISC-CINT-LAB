import React, { useEffect, useState } from 'react';

export function PublicationsSection() {
  const [publications, setPublications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch('http://127.0.0.1:8000/api/publications/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch publications');
        return res.json();
      })
      .then(setPublications)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Publications</h2>
      {loading && <div>Loading publications...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && publications.length === 0 && <div>No publications available.</div>}
      <ul className="space-y-6">
        {publications.map(pub => (
          <li key={pub.id} className="bg-white rounded-xl shadow p-4">
            <div className="font-semibold text-lg text-primary">{pub.title}</div>
            <div className="text-gray-800 whitespace-pre-line mt-1">{pub.authors}</div>
            <div className="text-xs text-gray-500 mt-2">{pub.journal} ({pub.year})</div>
          </li>
        ))}
      </ul>
    </section>
  );
}