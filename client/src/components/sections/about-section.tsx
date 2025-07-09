import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar, Award, Users } from "lucide-react";

export function AboutSection() {
  const achievements = [
    "BBC Feature: Violence detection research featured by BBC",
    "TCS Research Advisor: Strategic research partnerships",
    "ACDOS Founder: Automatic Control and Dynamic Optimization Society",
    "Multiple Patents: Including WO2018211396A1",
    "International Recognition: 4,193+ citations worldwide"
  ];

  const affiliations = [
    "Indian Society for Remote Sensing",
    "American Helicopter Society", 
    "Indian Society for Advancement of Materials and Process Engineering",
    "Automatic Control and Dynamic Optimization Society (ACDOS)"
  ];

  return (
    <div className="space-y-8">
      {/* Chief Scientist Profile */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="md:flex">
            <div className="md:w-1/3">
              <img
                src="https://aero.iisc.ac.in/wp-content/uploads/elementor/thumbs/SN-Omkar-qtlqf0ienj915ldm6bcsijyq3rkucv7pmu385w70rk.jpg"
                alt="Dr. S.N. Omkar"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Dr. S. N. Omkar</h2>
                  <p className="text-lg text-gray-600">Chief Research Scientist</p>
                  <p className="text-sm text-gray-500">Guidance & Control, Aerospace Engineering</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Room AE123, IISc Campus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Experience: 20+ years</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Dr. S.N. Omkar is a Chief Research Scientist in the Guidance & Control area of the Department of Aerospace Engineering at Indian Institute of Science, Bangalore. He leads three specialized research laboratories focusing on computational intelligence, UAV systems, and biomechanics applications in aerospace engineering.
              </p>

              <div className="flex space-x-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://sites.google.com/site/compintellab/" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Lab Website
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://iiscprofiles.irins.org/profile/3996" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    IRINS Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-xl font-bold">164+</div>
            <div className="text-sm text-gray-600">Publications</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-xl font-bold">200+</div>
            <div className="text-sm text-gray-600">Trained Interns</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold">35</div>
            <div className="text-sm text-gray-600">H-Index</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <div className="text-xl font-bold">4,193+</div>
            <div className="text-sm text-gray-600">Citations</div>
          </CardContent>
        </Card>
      </div>

      {/* Education & Qualifications */}
      <Card>
        <CardHeader>
          <CardTitle>Education & Qualifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Badge variant="outline">Ph.D.</Badge>
              <span className="text-sm">Aerospace Engineering, Indian Institute of Science</span>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline">M.Sc.</Badge>
              <span className="text-sm">Aerospace Engineering, Indian Institute of Science</span>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline">B.E.</Badge>
              <span className="text-sm">Mechanical Engineering, Bangalore University</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Research Areas */}
      <Card>
        <CardHeader>
          <CardTitle>Research Interests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {[
              "Helicopter Dynamics",
              "Satellite Image Processing",
              "Biomechanics",
              "Uninhabited Air Vehicles (UAV)",
              "Autonomous Navigation of UAVs",
              "Composite Design Optimization",
              "Structural Health Monitoring"
            ].map((interest, index) => (
              <Badge key={index} variant="secondary">{interest}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Key Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Professional Affiliations */}
      <Card>
        <CardHeader>
          <CardTitle>Professional Affiliations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">{affiliation}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}