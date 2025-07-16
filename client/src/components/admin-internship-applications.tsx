import { useEffect, useState } from "react";

interface InternshipApplication {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender?: string;
  profilePhotoUrl?: string;
  institution: string;
  degreeProgram: string;
  major: string;
  yearOfStudy: string;
  cgpa: string;
  transcriptUrl: string;
  duration: string;
  startDate: string;
  areasOfInterest: string;
  appliedBefore: boolean;
  resumeUrl: string;
  coverLetter?: string;
  skills: string;
  experience: string;
  github?: string;
  linkedin?: string;
  publications?: string;
  createdAt: string;
}

export default function AdminInternshipApplications() {
  const [applications, setApplications] = useState<InternshipApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<InternshipApplication | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("/api/internship-applications", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        });
        if (!res.ok) throw new Error("Failed to fetch applications");
        const data = await res.json();
        setApplications(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch applications");
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Internship Applications</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : applications.length === 0 ? (
        <div>No applications found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border bg-white rounded-lg shadow">
            <thead>
              <tr className="bg-sky-100 text-blue-900">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Institution</th>
                <th className="p-2 text-left">Degree</th>
                <th className="p-2 text-left">Applied Before</th>
                <th className="p-2 text-left">Submitted</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="border-t hover:bg-sky-50">
                  <td className="p-2">{app.fullName}</td>
                  <td className="p-2">{app.email}</td>
                  <td className="p-2">{app.institution}</td>
                  <td className="p-2">{app.degreeProgram}</td>
                  <td className="p-2">{app.appliedBefore ? "Yes" : "No"}</td>
                  <td className="p-2">{new Date(app.createdAt).toLocaleString()}</td>
                  <td className="p-2">
                    <button className="text-blue-700 underline" onClick={() => setSelected(app)}>
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Details Dialog */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl" onClick={() => setSelected(null)}>&times;</button>
            <h3 className="text-xl font-bold mb-2 text-blue-900">Application Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div><b>Name:</b> {selected.fullName}</div>
                <div><b>Email:</b> {selected.email}</div>
                <div><b>Phone:</b> {selected.phone}</div>
                <div><b>Date of Birth:</b> {selected.dateOfBirth}</div>
                <div><b>Gender:</b> {selected.gender || "-"}</div>
                <div><b>Institution:</b> {selected.institution}</div>
                <div><b>Degree Program:</b> {selected.degreeProgram}</div>
                <div><b>Major:</b> {selected.major}</div>
                <div><b>Year of Study:</b> {selected.yearOfStudy}</div>
                <div><b>CGPA/Percentage:</b> {selected.cgpa}</div>
                <div><b>Duration:</b> {selected.duration}</div>
                <div><b>Start Date:</b> {selected.startDate}</div>
                <div><b>Areas of Interest:</b> {selected.areasOfInterest}</div>
                <div><b>Applied Before:</b> {selected.appliedBefore ? "Yes" : "No"}</div>
                <div><b>Skills:</b> {selected.skills}</div>
                <div><b>Experience:</b> {selected.experience}</div>
                <div><b>GitHub:</b> {selected.github ? <a href={selected.github} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">{selected.github}</a> : "-"}</div>
                <div><b>LinkedIn:</b> {selected.linkedin ? <a href={selected.linkedin} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">{selected.linkedin}</a> : "-"}</div>
                <div><b>Publications:</b> {selected.publications || "-"}</div>
              </div>
              <div>
                {selected.profilePhotoUrl && (
                  <div className="mb-2">
                    <b>Profile Photo:</b><br />
                    <img src={selected.profilePhotoUrl} alt="Profile" className="w-32 h-32 object-cover rounded border" />
                  </div>
                )}
                <div className="mb-2">
                  <b>Transcript:</b> <a href={selected.transcriptUrl} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Download</a>
                </div>
                <div className="mb-2">
                  <b>Resume:</b> <a href={selected.resumeUrl} className="text-blue-700 underline" target="_blank" rel="noopener noreferrer">Download</a>
                </div>
                {selected.coverLetter && (
                  <div className="mb-2">
                    <b>Cover Letter:</b>
                    <div className="whitespace-pre-line border rounded p-2 bg-sky-50 mt-1">{selected.coverLetter}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 