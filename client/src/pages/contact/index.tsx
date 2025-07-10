import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Link } from "wouter";

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
      <main className="flex-1 w-full max-w-screen-xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h1>
        <nav aria-label="Contact Subpages" className="mb-8">
          <ul className="flex flex-wrap gap-4">
            <li><Link href="/contact/chief-scientist" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Chief Scientist Contact</Link></li>
            <li><Link href="/contact/reaching" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Reaching</Link></li>
            <li><Link href="/contact/contact-info" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Contact</Link></li>
            <li><Link href="/contact/visitor-info" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Visitor Info</Link></li>
            <li><Link href="/contact/feedback" className="nav-btn px-4 py-2 rounded font-medium text-white bg-blue-900 hover:bg-white hover:text-blue-900 hover:underline transition">Feedback</Link></li>
          </ul>
        </nav>
        <p>This is the Contact Us page. Add contact details and forms here.</p>
      </main>
      <footer className="w-full bg-gray-900 text-white mt-auto">
        <div className="max-w-screen-xl mx-auto">
          <BrandingFooter />
        </div>
      </footer>
    </div>
  );
} 