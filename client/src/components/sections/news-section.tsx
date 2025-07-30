import React, { useEffect, useState } from 'react';

export default function NewsSection() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch('http://127.0.0.1:8000/api/news/?is_published=true')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch news');
        return res.json();
      })
      .then(setNews)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Latest News</h2>
      {loading && <div>Loading news...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && news.length === 0 && <div>No news available.</div>}
      <ul className="space-y-6">
        {news.map(item => (
          <li key={item.id} className="bg-white rounded-xl shadow p-4">
            <div className="font-semibold text-lg text-primary">{item.title}</div>
            <div className="text-gray-800 whitespace-pre-line mt-1">{item.content}</div>
            <div className="text-xs text-gray-500 mt-2">{new Date(item.published_at).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}