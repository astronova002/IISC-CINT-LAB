import { useState } from "react";
import { AdminDashboardLayout } from "@/components/admin-dashboard-layout";
import AdminAnalyticsDashboard from "@/components/admin-analytics-dashboard";
import { AdminNewsManagement } from "@/components/admin-news-management";
import { AdminProjectsManagement } from "@/components/admin-projects-management";
import AdminInternshipApplications from "@/components/admin-internship-applications";
// Import other admin management components as needed
// import AdminProjectsManagement from "@/components/admin-projects-management";
// import AdminNewsManagement from "@/components/admin-news-management";
// import AdminPublicationsManagement from "@/components/admin-publications-management";
// import AdminTeamManagement from "@/components/admin-team-management";
// import AdminSettingsManagement from "@/components/admin-settings-management";
// import { Tabs, Tab } from "@/components/ui/tabs"; // Remove this line, not needed

const TABS = [
  { label: "Projects", key: "projects" },
  { label: "Internship Applications", key: "internships" },
  { label: "News", key: "news" },
  { label: "Publications", key: "publications" },
  { label: "Team", key: "team" },
  { label: "Settings", key: "settings" },
  { label: "Feedback", key: "feedback" },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState("projects");

  // Placeholder logout handler
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.reload();
  };

  return (
    <AdminDashboardLayout
      currentSection={tab}
      onSectionChange={setTab}
      onLogout={handleLogout}
    >
      {/* Main Content for each tab */}
      {tab === "projects" && <AdminProjectsManagement />}
      {tab === "internships" && <AdminInternshipApplications />}
      {tab === "news" && <AdminNewsManagement />}
      {tab === "publications" && (
        <div className="space-y-6">
          {/* Analytics cards and charts for Publications will go here */}
          <div className="text-lg text-gray-700">Publications management coming soon...</div>
        </div>
      )}
      {tab === "team" && (
        <div className="space-y-6">
          {/* Team management segmented control */}
          <TeamAdminTabs />
        </div>
      )}
      {tab === "settings" && (
        <div className="space-y-6">
          {/* Settings management UI will go here */}
          <div className="text-lg text-gray-700">Settings management coming soon...</div>
        </div>
      )}
      {tab === "feedback" && <AdminAnalyticsDashboard />}
    </AdminDashboardLayout>
  );
}

function TeamAdminTabs() {
  const [teamTab, setTeamTab] = useState("interns");
  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button
          className={`px-4 py-2 rounded-lg font-medium transition text-blue-900 hover:bg-sky-100 ${teamTab === "interns" ? "bg-sky-200" : ""}`}
          onClick={() => setTeamTab("interns")}
        >
          Interns
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition text-blue-900 hover:bg-sky-100 ${teamTab === "researchers" ? "bg-sky-200" : ""}`}
          onClick={() => setTeamTab("researchers")}
        >
          Researchers
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-medium transition text-blue-900 hover:bg-sky-100 ${teamTab === "alumni" ? "bg-sky-200" : ""}`}
          onClick={() => setTeamTab("alumni")}
        >
          Alumni
        </button>
      </div>
      <div>
        {teamTab === "interns" && <div className="text-lg text-gray-700">Interns management coming soon...</div>}
        {teamTab === "researchers" && <div className="text-lg text-gray-700">Researchers management coming soon...</div>}
        {teamTab === "alumni" && <div className="text-lg text-gray-700">Alumni management coming soon...</div>}
      </div>
    </div>
  );
} 