import { useEffect, useState } from "react";

interface Feedback {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function AdminAnalyticsDashboard() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchFeedback = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/feedback");
      if (!res.ok) throw new Error("Failed to fetch feedback");
      const data = await res.json();
      setFeedback(data);
    } catch (err: any) {
      setError(err.message || "Failed to fetch feedback");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-900">Feedback Submissions</h2>
        <button
          onClick={fetchFeedback}
          className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-sky-100 text-sky-800">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Message</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {feedback.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center py-8 text-gray-500">No feedback yet.</td>
              </tr>
            ) : (
              feedback.map(fb => (
                <tr key={fb.id} className="border-b hover:bg-sky-50 transition">
                  <td className="py-2 px-4 font-medium text-sky-900">{fb.name}</td>
                  <td className="py-2 px-4 text-blue-700 underline"><a href={`mailto:${fb.email}`}>{fb.email}</a></td>
                  <td className="py-2 px-4 text-gray-800 max-w-xs break-words">{fb.message}</td>
                  <td className="py-2 px-4 text-gray-500">{new Date(fb.createdAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
} 