export function BrandingFooter() {
  return (
    <div className="w-full bg-gray-400 text-gray-900 p-0 m-0 flex flex-col">
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-4 gap-8">
        {/* IISc Branding */}
        <div className="flex-1 min-w-0 md:text-left text-center">
          <div className="flex items-center md:justify-start justify-center space-x-3 mb-4">
            <img 
              src="/cint-lab-logo.png" 
              alt="IISc Logo" 
              className="h-12 w-12 bg-white rounded-full p-1"
            />
            <div>
              <h3 className="text-lg font-bold">Indian Institute of Science</h3>
              <p className="text-sm text-gray-600">Established 1909</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            "Discover & Innovate; Transform & Transcend; Serve & Lead"
          </p>
        </div>

        {/* Department Branding */}
        <div className="flex-1 min-w-0 text-center">
          <h3 className="text-lg font-bold mb-4">Department of Aerospace Engineering</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>Established: 1942</p>
            <p>Chair: Joseph Mathew</p>
            <p>Faculty: 32</p>
            <p>Students: 150+</p>
          </div>
        </div>

        {/* Contact & Links */}
        <div className="flex-1 min-w-0 md:text-right text-center">
          <h3 className="text-lg font-bold mb-4">Contact Information</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p>Room AE123, IISc Campus</p>
            <p>Bangalore, Karnataka 560012</p>
            <p>Phone: +91-80-2293-2735</p>
            <p>Email: omkar@iisc.ac.in</p>
          </div>
        </div>
      </div>

      <div className="w-full mt-2 pt-2 text-center border-t border-gray-300">
        <p className="text-sm text-gray-600">
          © 2025 Indian Institute of Science. All rights reserved. 
          <span className="mx-2">|</span>
          Computational Intelligence Laboratory
        </p>
      </div>
    </div>
  );
}