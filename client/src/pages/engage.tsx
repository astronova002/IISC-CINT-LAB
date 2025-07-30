import { Link } from "wouter";

export default function EngageWithLab() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 relative">
      {/* Back button */}
      <Link href="/">
        <button className="absolute top-8 left-8 bg-white/80 hover:bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg shadow transition-all flex items-center gap-2">
          <span className="text-lg">←</span> Back to Home
        </button>
      </Link>
      <div className="flex flex-col items-center justify-center text-center p-8 bg-white/80 rounded-3xl shadow-2xl max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-900">Engage With Our Lab</h1>
        <p className="text-lg text-neutral-700 mb-8 max-w-xl">
          Interested in collaborating, visiting, or learning more about the Computational Intelligence Lab? We welcome students, researchers, and industry partners to connect with us for internships, research projects, workshops, and more.
        </p>
        <div className="flex flex-col gap-4 w-full">
          <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow transition-all text-lg">Contact Us</a>
          <a href="/pages/about/opportunities" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow transition-all text-lg">See Opportunities</a>
          <a href="/pages/contact/feedback" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl shadow transition-all text-lg">Give Feedback</a>
        </div>
      </div>
    </div>
  );
} 