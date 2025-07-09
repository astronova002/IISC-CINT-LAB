import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, ExternalLink, Clock, Building } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "omkar@iisc.ac.in",
      link: "mailto:omkar@iisc.ac.in"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91-80-2293-2735",
      link: "tel:+91-80-2293-2735"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Office",
      value: "Room AE123, IISc Campus",
      link: "https://maps.google.com/?q=IISc+Bangalore"
    },
    {
      icon: <Building className="h-5 w-5" />,
      label: "Department",
      value: "Aerospace Engineering",
      link: "https://aero.iisc.ac.in/"
    }
  ];

  const links = [
    {
      title: "Lab Website",
      url: "https://sites.google.com/site/compintellab/",
      description: "Computational Intelligence Lab"
    },
    {
      title: "IRINS Profile",
      url: "https://iiscprofiles.irins.org/profile/3996",
      description: "Official IISc Research Profile"
    },
    {
      title: "Department Website",
      url: "https://aero.iisc.ac.in/",
      description: "Aerospace Engineering Department"
    },
    {
      title: "IISc Main Website",
      url: "https://iisc.ac.in/",
      description: "Indian Institute of Science"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
        <p className="text-gray-600">Get in touch with Dr. S.N. Omkar's research team</p>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactInfo.map((info, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="text-blue-600">
                  {info.icon}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{info.label}</div>
                  <div className="text-sm text-gray-600">{info.value}</div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={info.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Address Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Address</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              <strong>Dr. S.N. Omkar</strong><br />
              Chief Research Scientist<br />
              Department of Aerospace Engineering<br />
              Room AE123, IISc Campus<br />
              Bangalore, Karnataka 560012<br />
              India
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">
                Office Hours: Monday - Friday, 9:00 AM - 5:00 PM
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Links */}
      <Card>
        <CardHeader>
          <CardTitle>Important Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {links.map((link, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-semibold text-gray-900">{link.title}</div>
                  <div className="text-sm text-gray-600">{link.description}</div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Research Collaboration */}
      <Card>
        <CardHeader>
          <CardTitle>Research Collaboration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Dr. Omkar's laboratories welcome collaboration opportunities in:
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Computational Intelligence</Badge>
              <Badge variant="outline">UAV Systems</Badge>
              <Badge variant="outline">Biomechanics</Badge>
              <Badge variant="outline">Satellite Image Processing</Badge>
              <Badge variant="outline">Machine Learning</Badge>
              <Badge variant="outline">Aerospace Applications</Badge>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">For Research Partnerships:</h4>
              <p className="text-sm text-blue-800">
                • Industry collaborations and consulting projects<br />
                • PhD and M.Tech student supervision<br />
                • Joint research proposals and publications<br />
                • Technical consultation and expertise sharing
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* IISc Campus Info */}
      <Card>
        <CardHeader>
          <CardTitle>About IISc Campus</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Campus Information</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Established: 1909</p>
                <p>• Campus Area: 400 acres</p>
                <p>• Location: Bangalore, Karnataka</p>
                <p>• Aerospace Department: Since 1942</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Getting to IISc</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <p>• Metro: Nearest station - Yeshwantpur</p>
                <p>• Bus: Well connected by city buses</p>
                <p>• Airport: 30 km from Kempegowda International Airport</p>
                <p>• Parking: Available on campus</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}