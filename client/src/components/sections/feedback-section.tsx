import React, { useEffect, useState } from 'react';

export function FeedbackSection() {
  const [feedback, setFeedback] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch('http://127.0.0.1:8000/api/feedback/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch feedback');
        return res.json();
      })
      .then(setFeedback)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Feedback</h2>
      {loading && <div>Loading feedback...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && feedback.length === 0 && <div>No feedback available.</div>}
      <ul className="space-y-6">
        {feedback.map(item => (
          <li key={item.id} className="bg-white rounded-xl shadow p-4">
            <div className="font-semibold text-lg text-primary">{item.name}</div>
            <div className="text-gray-800 whitespace-pre-line mt-1">{item.message}</div>
            <div className="text-xs text-gray-500 mt-2">{new Date(item.created_at).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </section>
  );
} 