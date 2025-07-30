import React from 'react';
import { useApi } from '../hooks/use-api';

export function NewsSection() {
  const { data: news, loading, error } = useApi('http://127.0.0.1:8000/api/news/');

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Latest News</h2>
      {loading && <div>Loading news...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && news && (!news.results || news.results.length === 0) && <div>No news available.</div>}
      <ul className="space-y-6">
        {news && news.results && news.results.map((item: any) => (
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
