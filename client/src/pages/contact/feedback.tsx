import { useState } from "react";
import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";

export default function Feedback() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to submit feedback");
      }
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Failed to submit feedback");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-light-gray">
      <NavigationHeader currentSection="contact" onNavigate={() => {}} />
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <MainNavBar />
      </div>
      <main className="flex-1 flex flex-col w-full bg-neutral-light-gray">
        <div className="w-full flex justify-center px-4 md:px-16 py-10 max-w-3xl mx-auto">
          <div className="flex-1 bg-sky-100 rounded-2xl shadow-lg p-6 min-h-[220px] flex flex-col border border-sky-200 relative max-w-xl mx-auto">
            <div className="flex items-center mb-4">
              <span className="text-sky-500 mr-2" style={{ fontSize: 28 }}>💬</span>
              <h2 className="text-xl font-semibold text-sky-800 flex-1">Feedback</h2>
            </div>
            {success ? (
              <div className="text-green-700 text-center font-semibold text-lg py-8">Thank you for your feedback! 😊</div>
            ) : (
              <form className="flex-1 flex flex-col gap-2" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="border border-sky-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="border border-sky-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-sky-200"
                  value={form.email}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />
                <textarea
                  name="message"
                  placeholder="Your Feedback"
                  className="border border-sky-200 rounded-lg px-3 py-1 min-h-[60px] focus:outline-none focus:ring-2 focus:ring-sky-200"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                />
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white rounded-lg py-1 font-semibold hover:bg-white hover:text-blue-900 border border-blue-900 transition mt-2"
                  disabled={submitting}
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
                {error && <div className="text-red-600 text-sm mt-2 text-center">{error}</div>}
              </form>
            )}
          </div>
        </div>
      </main>
      <footer className="flex-none w-full bg-neutral-light-gray text-neutral-dark-gray z-10 p-0 m-0">
        <div className="w-full p-0 m-0">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 