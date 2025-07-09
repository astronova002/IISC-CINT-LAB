import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Target, Brain, Satellite, Activity } from "lucide-react";

export function ResearchSection() {
  const researchAreas = [
    {
      title: "Computational Intelligence Lab",
      icon: <Brain className="h-6 w-6" />,
      description: "Machine learning, neural networks, and AI applications in aerospace engineering",
      projects: ["Violence Detection using CNN", "Crowd Behavior Analysis", "Pattern Recognition Systems"],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "UAV Systems Lab",
      icon: <Target className="h-6 w-6" />,
      description: "Unmanned aerial vehicles, autonomous navigation, and surveillance systems",
      projects: ["Drone Surveillance Systems", "Autonomous Navigation", "UAV Swarm Intelligence"],
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Biomechanics Lab",
      icon: <Activity className="h-6 w-6" />,
      description: "Biomechanics applications in aerospace, human factors, and space missions",
      projects: ["Human Space Mission Analysis", "Cricket Motion Analysis", "Aerospace Ergonomics"],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Satellite Image Processing",
      icon: <Satellite className="h-6 w-6" />,
      description: "Advanced satellite imagery analysis, urban growth monitoring, and crop classification",
      projects: ["Urban Growth Analysis", "Crop Classification", "Flood Assessment", "Road Extraction"],
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const featuredWork = [
    {
      title: "Violence Detection in Crowds",
      description: "BBC-featured research using drone surveillance and convolutional neural networks",
      status: "Featured by BBC",
      impact: "High",
      link: "https://sites.google.com/site/compintellab/"
    },
    {
      title: "Multi-temporal Urban Growth Analysis",
      description: "Satellite imagery analysis for urban development monitoring",
      status: "Published",
      impact: "High Impact Factor: 13.85",
      link: "https://sites.google.com/site/compintellab/"
    },
    {
      title: "Biomechanics in Space Missions",
      description: "Human factors analysis for aerospace applications",
      status: "Ongoing",
      impact: "Critical for Space Programs",
      link: "https://sites.google.com/site/compintellab/"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Research Areas</h2>
        <p className="text-gray-600">Cutting-edge research across multiple domains</p>
      </div>

      {/* Research Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {researchAreas.map((area, index) => (
          <Card key={index} className={`${area.bgColor} border-0`}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <div className={`${area.color}`}>
                  {area.icon}
                </div>
                <span className="text-lg">{area.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{area.description}</p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Active Projects:</h4>
                <div className="flex flex-wrap gap-1">
                  {area.projects.map((project, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {project}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Work */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Research</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featuredWork.map((work, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{work.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">{work.description}</p>
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <Badge variant="outline" className="text-xs">
                      {work.status}
                    </Badge>
                    <p className="text-xs text-gray-500">{work.impact}</p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <a href={work.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Research Metrics */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Research Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">164+</div>
            <div className="text-sm text-gray-600">Publications</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">4,193+</div>
            <div className="text-sm text-gray-600">Citations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">35</div>
            <div className="text-sm text-gray-600">H-Index</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">200+</div>
            <div className="text-sm text-gray-600">Trained Interns</div>
          </div>
        </div>
      </div>
    </div>
  );
}