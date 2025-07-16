import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";
import { Mail, MessageSquare, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full">
      <div className="w-full shadow-sm bg-white">
        <div className="max-w-screen-xl mx-auto">
          <NavigationHeader currentSection="contact" onNavigate={() => {}} />
        </div>
      </div>
      <div className="w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-xl mx-auto">
          <MainNavBar />
        </div>
      </div>
      <main className="flex-1 flex flex-col w-full bg-neutral-light-gray">
        <div className="w-full flex flex-col md:flex-row gap-6 px-4 md:px-16 py-10 max-w-3xl mx-auto">
          {/* Reaching Box */}
          <div className="flex-1 bg-sky-100 rounded-2xl shadow-lg p-6 min-h-[220px] flex flex-col border border-sky-200 relative">
            <div className="flex items-center mb-4">
              <MapPin className="text-sky-500 mr-2" size={28} />
              <h2 className="text-xl font-semibold text-sky-800 flex-1">Reaching</h2>
            </div>
            <div className="flex-1 text-sky-900 text-sm">
              Campus: Indian Institute of Science, Bangalore<br/>
              Department: Aerospace Engineering<br/>
              Directions: Enter through the main gate, follow signs to Aerospace Engineering, CINT Lab is on the 2nd floor.
            </div>
          </div>
          {/* Contact Info Box */}
          <div className="flex-1 bg-sky-100 rounded-2xl shadow-lg p-6 min-h-[220px] flex flex-col border border-sky-200 relative">
            <div className="flex items-center mb-4">
              <Mail className="text-sky-500 mr-2" size={28} />
              <h2 className="text-xl font-semibold text-sky-800 flex-1">Contact</h2>
            </div>
            <div className="flex-1 text-sky-900 text-sm">
              Email: cintlab@iisc.ac.in<br/>
              Phone: +91 80 2293 2417<br/>
              Address: Computational Intelligence Lab, Dept. of Aerospace Engineering, IISc Bangalore
            </div>
          </div>
          {/* Feedback Box */}
          <div className="flex-1 bg-sky-100 rounded-2xl shadow-lg p-6 min-h-[220px] flex flex-col border border-sky-200 relative">
            <div className="flex items-center mb-4">
              <MessageSquare className="text-sky-500 mr-2" size={28} />
              <h2 className="text-xl font-semibold text-sky-800 flex-1">Feedback</h2>
            </div>
            <form className="flex-1 flex flex-col gap-2">
              <input type="text" placeholder="Your Name" className="border border-sky-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-sky-200" />
              <input type="email" placeholder="Your Email" className="border border-sky-200 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-sky-200" />
              <textarea placeholder="Your Feedback" className="border border-sky-200 rounded-lg px-3 py-1 min-h-[60px] focus:outline-none focus:ring-2 focus:ring-sky-200" />
              <button type="submit" className="w-full bg-blue-900 text-white rounded-lg py-1 font-semibold hover:bg-white hover:text-blue-900 border border-blue-900 transition mt-2">Submit</button>
            </form>
          </div>
        </div>
      </main>
      <footer className="w-full bg-gray-900 text-white mt-auto">
        <div className="max-w-screen-xl mx-auto">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 