import { NavigationHeader } from "@/components/navigation-header";
import { MainNavBar } from "@/components/navigation";
import { BrandingFooter } from "@/components/branding-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BookOpen } from "lucide-react";
import { useState } from "react";

export default function AboutOpportunities() {
  // Form state
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    profilePhoto: undefined,
    institution: "",
    degreeProgram: "",
    major: "",
    yearOfStudy: "",
    cgpa: "",
    transcript: undefined,
    duration: "",
    startDate: "",
    areasOfInterest: "",
    appliedBefore: "No",
    resume: undefined,
    coverLetter: "",
    skills: "",
    experience: "",
    github: "",
    linkedin: "",
    publications: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "file" ? (e.target as HTMLInputElement).files?.[0] : value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files?.[0] }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formData.append(key, value as any);
        }
      });
      // Convert Yes/No to boolean for appliedBefore
      formData.set("appliedBefore", form.appliedBefore === "Yes" ? "true" : "false");
      const res = await fetch("/api/internship-applications", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to submit application");
      }
      setSuccess(true);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        gender: "",
        profilePhoto: undefined,
        institution: "",
        degreeProgram: "",
        major: "",
        yearOfStudy: "",
        cgpa: "",
        transcript: undefined,
        duration: "",
        startDate: "",
        areasOfInterest: "",
        appliedBefore: "No",
        resume: undefined,
        coverLetter: "",
        skills: "",
        experience: "",
        github: "",
        linkedin: "",
        publications: "",
      });
    } catch (err: any) {
      setError(err.message || "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-neutral-light-gray">
      {/* Header and Navigation */}
      <NavigationHeader currentSection="about" onNavigate={() => {}} />
      <div className="w-full" style={{ position: 'relative', zIndex: 10 }}>
        <MainNavBar />
      </div>
      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full items-center justify-center py-16 px-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
          {/* Opportunities Cards */}
          <div className="w-full md:w-1/2">
            <Card className="bg-sky-50 border-sky-200 shadow-xl rounded-2xl p-8 mb-6 md:mb-0">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-blue-900 font-display mb-2">Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-sky-900 mb-6">
                  The Computational Intelligence Laboratory offers exciting research and academic opportunities for students and collaborators. Join us to work on cutting-edge projects in AI, UAVs, biomechanics, and more!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="flex flex-col items-center">
                    <Award className="h-10 w-10 text-yellow-500 mb-2" />
                    <div className="font-bold text-xl text-blue-900">PhD & M.Tech</div>
                    <div className="text-sm text-sky-800 text-center">Research positions for graduate students in AI, aerospace, and computational sciences.</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Users className="h-10 w-10 text-blue-500 mb-2" />
                    <div className="font-bold text-xl text-blue-900">Internships</div>
                    <div className="text-sm text-sky-800 text-center">Hands-on internships for undergraduates and postgraduates—200+ trained so far!</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <BookOpen className="h-10 w-10 text-green-500 mb-2" />
                    <div className="font-bold text-xl text-blue-900">Collaborations</div>
                    <div className="text-sm text-sky-800 text-center">Collaborate with leading researchers and industry partners on impactful projects.</div>
                  </div>
                </div>
                <div className="bg-blue-100 rounded-lg p-4 text-blue-900 text-center font-semibold">
                  Interested? Email <a href="mailto:omkar@iisc.ac.in" className="underline text-blue-700">omkar@iisc.ac.in</a> or visit us at IISc Bangalore.
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Internship Application Form */}
          <div className="w-full md:w-1/2">
            <Card className="bg-white border-sky-200 shadow-xl rounded-2xl p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-900 font-display mb-2">Apply for Internship</CardTitle>
              </CardHeader>
              <CardContent>
                {success ? (
                  <div className="text-green-700 text-center font-semibold text-lg py-8">Thank you for applying! We will review your application soon.</div>
                ) : (
                  <form className="flex flex-col gap-3" onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Personal Information */}
                    <div className="font-semibold text-blue-900 mt-2 mb-1">Personal Information</div>
                    <input type="text" name="fullName" placeholder="Full Name" className="input" value={form.fullName} onChange={handleChange} required disabled={submitting} />
                    <input type="email" name="email" placeholder="Email Address" className="input" value={form.email} onChange={handleChange} required disabled={submitting} />
                    <input type="tel" name="phone" placeholder="Phone Number" className="input" value={form.phone} onChange={handleChange} required disabled={submitting} />
                    <input type="date" name="dateOfBirth" placeholder="Date of Birth" className="input" value={form.dateOfBirth} onChange={handleChange} required disabled={submitting} />
                    <select name="gender" className="input" value={form.gender} onChange={handleChange} disabled={submitting}>
                      <option value="">Gender (Optional)</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer not to say</option>
                    </select>
                    <label className="text-xs text-gray-600">Profile Photo (Optional)</label>
                    <input type="file" name="profilePhoto" accept="image/*" className="input" onChange={handleFileChange} disabled={submitting} />
                    {/* Academic Details */}
                    <div className="font-semibold text-blue-900 mt-4 mb-1">Academic Details</div>
                    <input type="text" name="institution" placeholder="Current Institution" className="input" value={form.institution} onChange={handleChange} required disabled={submitting} />
                    <select name="degreeProgram" className="input" value={form.degreeProgram} onChange={handleChange} required disabled={submitting}>
                      <option value="">Degree Program</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="BSc">BSc</option>
                      <option value="MSc">MSc</option>
                      <option value="PhD">PhD</option>
                      <option value="Other">Other</option>
                    </select>
                    <select name="major" className="input" value={form.major} onChange={handleChange} required disabled={submitting}>
                      <option value="">Major/Branch</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Electrical Engineering">Electrical Engineering</option>
                      <option value="Mechanical Engineering">Mechanical Engineering</option>
                      <option value="Aerospace Engineering">Aerospace Engineering</option>
                      <option value="Physics">Physics</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Other">Other</option>
                    </select>
                    <select name="yearOfStudy" className="input" value={form.yearOfStudy} onChange={handleChange} required disabled={submitting}>
                      <option value="">Current Year of Study</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="5">5th Year</option>
                      <option value="Other">Other</option>
                    </select>
                    <input type="text" name="cgpa" placeholder="CGPA/Percentage" className="input" value={form.cgpa} onChange={handleChange} required disabled={submitting} />
                    <label className="text-xs text-gray-600">Transcript Upload (PDF)</label>
                    <input type="file" name="transcript" accept="application/pdf" className="input" onChange={handleFileChange} required disabled={submitting} />
                    {/* Internship Details */}
                    <div className="font-semibold text-blue-900 mt-4 mb-1">Internship Details</div>
                    <select name="duration" className="input" value={form.duration} onChange={handleChange} required disabled={submitting}>
                      <option value="">Preferred Internship Duration</option>
                      <option value="1 month">1 month</option>
                      <option value="2 months">2 months</option>
                      <option value="3 months">3 months</option>
                      <option value="6 months">6 months</option>
                      <option value="Other">Other</option>
                    </select>
                    <input type="date" name="startDate" placeholder="Available Start Date" className="input" value={form.startDate} onChange={handleChange} required disabled={submitting} />
                    <input type="text" name="areasOfInterest" placeholder="Areas of Interest / Research Topics" className="input" value={form.areasOfInterest} onChange={handleChange} required disabled={submitting} />
                    <select name="appliedBefore" className="input" value={form.appliedBefore} onChange={handleChange} required disabled={submitting}>
                      <option value="No">Have you applied before? (No)</option>
                      <option value="Yes">Yes</option>
                    </select>
                    <label className="text-xs text-gray-600">Resume / CV Upload (PDF)</label>
                    <input type="file" name="resume" accept="application/pdf" className="input" onChange={handleFileChange} required disabled={submitting} />
                    <label className="text-xs text-gray-600">Cover Letter / Statement of Purpose (Text or PDF)</label>
                    <textarea name="coverLetter" placeholder="Cover Letter / Statement of Purpose" className="input" value={form.coverLetter} onChange={handleChange} rows={3} disabled={submitting} />
                    {/* Skills & Experience */}
                    <div className="font-semibold text-blue-900 mt-4 mb-1">Skills & Experience</div>
                    <input type="text" name="skills" placeholder="Technical Skills (comma separated)" className="input" value={form.skills} onChange={handleChange} required disabled={submitting} />
                    <textarea name="experience" placeholder="Relevant Projects / Work Experience" className="input" value={form.experience} onChange={handleChange} rows={2} required disabled={submitting} />
                    <input type="text" name="github" placeholder="GitHub / Portfolio Link (Optional)" className="input" value={form.github} onChange={handleChange} disabled={submitting} />
                    <input type="text" name="linkedin" placeholder="LinkedIn Link (Optional)" className="input" value={form.linkedin} onChange={handleChange} disabled={submitting} />
                    <textarea name="publications" placeholder="Publications (if any) (Optional)" className="input" value={form.publications} onChange={handleChange} rows={2} disabled={submitting} />
                    <button type="submit" className="w-full bg-blue-900 text-white rounded-lg py-2 font-semibold hover:bg-white hover:text-blue-900 border border-blue-900 transition mt-2" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Application"}
                    </button>
                    {error && <div className="text-red-600 text-sm mt-2 text-center">{error}</div>}
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="w-full bg-gray-900 text-white mt-auto">
        <BrandingFooter />
      </footer>
    </div>
  );
} 