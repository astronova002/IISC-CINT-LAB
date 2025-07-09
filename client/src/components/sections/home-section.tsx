
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, BookOpen, Award, Users } from "lucide-react";

interface HomeSectionProps {
  onNavigate: (section: string) => void;
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <div className="space-y-8">
      {/* Hero Section - Compact */}
      <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-lg p-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="https://seeklogo.com/images/I/indian-institute-of-science-logo-1B0E139DA3-seeklogo.com.png" 
              alt="IISc Logo" 
              className="h-16 w-16"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold">Computational Intelligence Laboratory</h1>
              <p className="text-xl text-blue-200">Department of Aerospace Engineering, IISc Bangalore</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary">Computational Intelligence</Badge>
            <Badge variant="secondary">UAV Systems</Badge>
            <Badge variant="secondary">Biomechanics</Badge>
            <Badge variant="secondary">Satellite Image Processing</Badge>
          </div>

          <div className="flex justify-center space-x-4">
            <Button onClick={() => onNavigate("research")} className="bg-white text-blue-900 hover:bg-gray-100">
              View Research <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" onClick={() => onNavigate("publications")} className="text-white border-white hover:bg-white/10">
              Publications
            </Button>
          </div>
        </div>
      </div>

      {/* Research Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <BookOpen className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-xl font-bold">164+</div>
            <div className="text-sm text-gray-600">Publications</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold">4,193+</div>
            <div className="text-sm text-gray-600">Citations</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <div className="text-xl font-bold">35</div>
            <div className="text-sm text-gray-600">H-Index</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="h-6 w-6 text-orange-500 mx-auto mb-2" />
            <div className="text-xl font-bold">200+</div>
            <div className="text-sm text-gray-600">Trained Interns</div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Research - Compact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("research")}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Violence Detection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">
              BBC-featured research on crowd violence detection using drone surveillance and CNN.
            </p>
            <Badge variant="outline">Featured by BBC</Badge>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("research")}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Satellite Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">
              Advanced satellite image processing for urban growth analysis and crop classification.
            </p>
            <Badge variant="outline">High Impact</Badge>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => onNavigate("research")}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Biomechanics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">
              Biomechanics applications in aerospace engineering and human space missions.
            </p>
            <Badge variant="outline">Innovative</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" size="sm" onClick={() => onNavigate("team")}>
            Meet the Team
          </Button>
          <Button variant="outline" size="sm" onClick={() => onNavigate("publications")}>
            Latest Publications
          </Button>
          <Button variant="outline" size="sm" onClick={() => onNavigate("news")}>
            Recent News
          </Button>
          <Button variant="outline" size="sm" onClick={() => onNavigate("contact")}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}