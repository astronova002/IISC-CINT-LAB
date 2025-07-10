export function BrandingFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* IISc Branding */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img 
                src="/cint-lab-logo.png" 
                alt="IISc Logo" 
                className="h-12 w-12 bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-lg font-bold">Indian Institute of Science</h3>
                <p className="text-sm text-gray-400">Established 1909</p>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              "Discover & Innovate; Transform & Transcend; Serve & Lead"
            </p>
          </div>

          {/* Department Branding */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-4">Department of Aerospace Engineering</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Established: 1942</p>
              <p>Chair: Joseph Mathew</p>
              <p>Faculty: 32</p>
              <p>Students: 150+</p>
            </div>
          </div>

          {/* Contact & Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <div className="text-sm text-gray-400 space-y-2">
              <p>Room AE123, IISc Campus</p>
              <p>Bangalore, Karnataka 560012</p>
              <p>Phone: +91-80-2293-2735</p>
              <p>Email: omkar@iisc.ac.in</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Indian Institute of Science. All rights reserved. 
            <span className="mx-2">|</span>
            Computational Intelligence Laboratory
          </p>
        </div>
      </div>
    </footer>
  );
}