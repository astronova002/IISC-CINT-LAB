import React, { useEffect, useState } from 'react';

function TeamList({ category, title }: { category: string, title: string }) {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    fetch(`http://127.0.0.1:8000/api/team-members/?category=${category}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch team members');
        return res.json();
      })
      .then(setMembers)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <section className="w-full max-w-4xl mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!loading && !error && members.length === 0 && <div>No members found.</div>}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {members.map(member => (
          <li key={member.id} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <img src={member.image || '/building-placeholder.jpg'} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-2" />
            <div className="font-semibold text-lg text-primary">{member.name}</div>
            <div className="text-gray-700 text-sm">{member.title}</div>
            <div className="text-xs text-gray-500">{member.specialization}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function TeamSection() {
  return (
    <div>
      <TeamList category="interns" title="Interns" />
      <TeamList category="researchers" title="Researchers" />
      <TeamList category="alumni" title="Alumni" />
    </div>
  );
}