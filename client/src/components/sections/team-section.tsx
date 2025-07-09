import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Users, GraduationCap } from "lucide-react";
import { teamMembers } from "@/data/lab-data";

export function TeamSection() {
  const facultyMembers = teamMembers.filter(member => member.category === "faculty");
  const students = teamMembers.filter(member => member.category === "phd" || member.category === "masters");
  const alumni = teamMembers.filter(member => member.category === "alumni");

  const TeamCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => (
    <Card key={index} className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.title}</p>
            <p className="text-xs text-gray-500">{member.specialization}</p>
          </div>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" asChild>
              <a href={`mailto:${member.email}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Research Team</h2>
        <p className="text-gray-600">Meet the researchers and collaborators</p>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-xl font-bold">{facultyMembers.length}</div>
            <div className="text-sm text-gray-600">Faculty</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <GraduationCap className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold">{students.length}</div>
            <div className="text-sm text-gray-600">Students</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <div className="text-xl font-bold">{alumni.length}</div>
            <div className="text-sm text-gray-600">Alumni</div>
          </CardContent>
        </Card>
      </div>

      {/* Faculty & Collaborators */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Faculty & Research Collaborators
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {facultyMembers.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Current Students */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <GraduationCap className="h-5 w-5 mr-2" />
          Current Students
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {students.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Alumni */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <Users className="h-5 w-5 mr-2" />
          Alumni Representatives
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {alumni.map((member, index) => (
            <TeamCard key={index} member={member} index={index} />
          ))}
        </div>
      </div>

      {/* Research Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>Join Our Research Team</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Dr. Omkar's laboratories offer research opportunities for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">PhD Students</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>• Computational Intelligence</p>
                  <p>• UAV Systems & Autonomous Navigation</p>
                  <p>• Biomechanics Applications</p>
                  <p>• Satellite Image Processing</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">M.Tech Students</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>• Machine Learning Applications</p>
                  <p>• Drone Surveillance Systems</p>
                  <p>• Image Processing Algorithms</p>
                  <p>• Aerospace Engineering Projects</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Research Impact:</h4>
              <p className="text-sm text-blue-800">
                Our team has trained 200+ interns and produced research with 4,193+ citations. 
                Join us to work on cutting-edge projects that make a real-world impact.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}