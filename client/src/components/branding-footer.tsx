export function BrandingFooter() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Inner content aligned but full-width background */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-8 gap-10 max-w-7xl mx-auto">
        
        {/* IISc Branding */}
        <div className="flex-1 min-w-0 md:text-left text-center">
          <div className="flex items-center md:justify-start justify-center space-x-4 mb-4">
            <img
              src="/cint-lab-logo.png"
              alt="IISc Logo"
              className="h-14 w-14 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold">Indian Institute of Science</h3>
              <p className="text-sm opacity-80">Established 1909</p>
            </div>
          </div>
          <p className="text-sm italic opacity-90">
            "Discover & Innovate; Transform & Transcend; Serve & Lead"
          </p>
        </div>

        {/* Department Branding */}
        <div className="flex-1 min-w-0 text-center">
          <h3 className="text-xl font-bold mb-4">
            Department of Aerospace Engineering
          </h3>
          <div className="text-sm space-y-1 opacity-90">
            <p>Established: 1942</p>
            <p>Chair: Joseph Mathew</p>
            <p>Faculty: 32</p>
            <p>Students: 150+</p>
          </div>
        </div>

        {/* Contact & Links */}
        <div className="flex-1 min-w-0 md:text-right text-center">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>
          <div className="text-sm space-y-1 opacity-90">
            <p>Room AE123, IISc Campus</p>
            <p>Bangalore, Karnataka 560012</p>
            <p>Phone: +91-80-2293-2735</p>
            <p>
              Email:{" "}
              <a
                href="mailto:omkar@iisc.ac.in"
                className="hover:text-blue-400 transition"
              >
                omkar@iisc.ac.in
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Full Width */}
      <div className="w-full mt-4 pt-4 border-t border-gray-700 text-center px-6">
        <p className="text-sm opacity-80">
          © 2025 Indian Institute of Science. All rights reserved. 
          <span className="mx-2">|</span>
          Computational Intelligence Laboratory
        </p>
      </div>
    </footer>
  );
  
}
  