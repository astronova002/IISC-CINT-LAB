import React, { useState, useEffect } from 'react';

const TABS = ["News", "Team", "Research", "Publications"];

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem("admin_token", data.token);
        onLogin();
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Network error");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-16 bg-white p-8 rounded-xl shadow-lg flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-primary mb-2">Admin Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border rounded px-3 py-2" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border rounded px-3 py-2" required />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button type="submit" className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-accent transition">Login</button>
    </form>
  );
}

function NewsManager() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editing, setEditing] = useState<any>(null);
  const token = localStorage.getItem("admin_token");

  const fetchNews = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/news", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to fetch news");
      setNews(await res.json());
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => { fetchNews(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(editing ? `/api/news/${editing.id}` : "/api/news", {
        method: editing ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ title, content })
      });
      if (!res.ok) throw new Error("Failed to save news");
      setTitle(""); setContent(""); setEditing(null);
      fetchNews();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEdit = (item: any) => {
    setEditing(item);
    setTitle(item.title);
    setContent(item.content);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this news item?")) return;
    setError("");
    try {
      const res = await fetch(`/api/news/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Failed to delete news");
      fetchNews();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage News</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6 bg-gray-50 p-4 rounded-lg">
        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="border rounded px-3 py-2" required />
        <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} className="border rounded px-3 py-2" required />
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <div className="flex gap-2">
          <button type="submit" className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-accent transition">
            {editing ? "Update" : "Add"} News
          </button>
          {editing && <button type="button" onClick={() => { setEditing(null); setTitle(""); setContent(""); }} className="bg-gray-300 text-gray-800 rounded px-4 py-2 font-semibold">Cancel</button>}
        </div>
      </form>
      {loading ? <div>Loading...</div> : (
        <ul className="space-y-4">
          {news.map(item => (
            <li key={item.id} className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-semibold text-lg">{item.title}</div>
                <div className="text-gray-700 whitespace-pre-line">{item.content}</div>
                <div className="text-xs text-gray-500 mt-1">{new Date(item.publishedAt).toLocaleString()}</div>
              </div>
              <div className="flex gap-2 mt-2 md:mt-0">
                <button onClick={() => handleEdit(item)} className="bg-accent text-primary rounded px-3 py-1 font-semibold hover:bg-primary hover:text-white transition">Edit</button>
                <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white rounded px-3 py-1 font-semibold hover:bg-red-700 transition">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("admin_token"));
  const [tab, setTab] = useState(TABS[0]);

  if (!loggedIn) {
    return <LoginForm onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col w-full">
      <div className="w-full bg-primary text-white py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button onClick={() => { localStorage.removeItem("admin_token"); setLoggedIn(false); }} className="bg-accent text-primary rounded px-3 py-1 font-semibold hover:bg-white transition">Logout</button>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-8">
        <div className="flex gap-4 mb-6">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded font-semibold ${tab === t ? 'bg-primary text-white' : 'bg-white text-primary border border-primary'} transition`}>
              {t}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-xl shadow p-6 min-h-[300px]">
          {tab === "News" && <NewsManager />}
          {tab === "Team" && <div>Team management coming soon...</div>}
          {tab === "Research" && <div>Research management coming soon...</div>}
          {tab === "Publications" && <div>Publications management coming soon...</div>}
        </div>
      </div>
    </div>
  );
} 