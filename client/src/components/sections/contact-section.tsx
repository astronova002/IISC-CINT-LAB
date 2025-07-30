import React, { useEffect, useState } from 'react';

export function ContactSection() {
  const [settings, setSettings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch('http://127.0.0.1:8000/api/settings/')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch contact info');
        return res.json();
      })
      .then(setSettings)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
      {loading && <div>Loading contact info...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && settings.length === 0 && <div>No contact info available.</div>}
      <ul className="space-y-6">
        {settings.map(setting => (
          <li key={setting.id} className="bg-white rounded-xl shadow p-4">
            <div className="font-semibold text-lg text-primary">{setting.key}</div>
            <div className="text-gray-800 whitespace-pre-line mt-1">{setting.value}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}