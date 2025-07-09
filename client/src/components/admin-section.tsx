import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Users, FileText, Edit } from "lucide-react";

export function AdminSection() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Admin Panel</h2>
        <p className="text-gray-600">Manage team members and news content</p>
      </div>

      {/* Admin Instructions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Content Management Instructions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Team Members Management</h3>
              <p className="text-sm text-blue-800 mb-2">
                To add or update team members, edit the file: <code className="bg-blue-100 px-2 py-1 rounded">client/src/data/admin-data.ts</code>
              </p>
              <ul className="text-xs text-blue-700 space-y-1">
                <li>• Update the <code>adminTeamMembers</code> array</li>
                <li>• Set <code>isActive: true</code> to show the member</li>
                <li>• Set <code>isActive: false</code> to hide the member</li>
                <li>• Add image URLs, email, LinkedIn, and ResearchGate profiles</li>
                <li>• Categories: faculty, phd, masters, alumni, postdoc, research_staff</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">News & Updates Management</h3>
              <p className="text-sm text-green-800 mb-2">
                To add or update news items, edit the file: <code className="bg-green-100 px-2 py-1 rounded">client/src/data/admin-data.ts</code>
              </p>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• Update the <code>adminNewsItems</code> array</li>
                <li>• Set <code>isPublished: true</code> to show the news item</li>
                <li>• Set <code>isPublished: false</code> to hide the news item</li>
                <li>• Types: award, news, collaboration, achievement, publication</li>
                <li>• Use ISO date format (YYYY-MM-DD) for proper sorting</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-xl font-bold">Easy</div>
            <div className="text-sm text-gray-600">Team Updates</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <FileText className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold">Simple</div>
            <div className="text-sm text-gray-600">News Management</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Edit className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <div className="text-xl font-bold">No Code</div>
            <div className="text-sm text-gray-600">Required</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Settings className="h-6 w-6 text-orange-500 mx-auto mb-2" />
            <div className="text-xl font-bold">Instant</div>
            <div className="text-sm text-gray-600">Updates</div>
          </CardContent>
        </Card>
      </div>

      {/* Data File Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Team Member Example</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-xs text-gray-800 overflow-x-auto">
{`{
  id: "new_member",
  name: "Dr. New Researcher",
  title: "Research Scientist",
  specialization: "AI Applications",
  category: "faculty",
  image: "https://example.com/photo.jpg",
  email: "researcher@iisc.ac.in",
  linkedin: "https://linkedin.com/...",
  researchgate: "https://researchgate.net/...",
  isActive: true,
  joinDate: "2025-01-01",
  bio: "Expert in AI research..."
}`}
              </pre>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>News Item Example</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="text-xs text-gray-800 overflow-x-auto">
{`{
  id: "news_new",
  title: "New Research Breakthrough",
  summary: "Major discovery in AI field",
  content: "Detailed description...",
  date: "2025-01-15",
  type: "achievement",
  isPublished: true,
  author: "Dr. Researcher",
  externalLink: "https://example.com"
}`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* File Locations */}
      <Card>
        <CardHeader>
          <CardTitle>File Locations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold">Admin Data File</div>
                <div className="text-sm text-gray-600">Contains all editable team and news data</div>
              </div>
              <Badge variant="outline">client/src/data/admin-data.ts</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold">Team Section</div>
                <div className="text-sm text-gray-600">Displays team members from admin data</div>
              </div>
              <Badge variant="outline">client/src/components/sections/team-section.tsx</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold">News Section</div>
                <div className="text-sm text-gray-600">Displays news items from admin data</div>
              </div>
              <Badge variant="outline">client/src/components/sections/news-section.tsx</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}