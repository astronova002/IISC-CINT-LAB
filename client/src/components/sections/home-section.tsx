
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
            <Badge className="bg-black/80 text-white border-white/30" variant="outline">Featured by BBC</Badge>
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
            <Badge className="bg-black/80 text-white border-white/30" variant="outline">High Impact</Badge>
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
            <Badge className="bg-black/80 text-white border-white/30" variant="outline">Innovative</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="bg-black/90 backdrop-blur-sm rounded-lg p-6 border border-white/20">
        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button 
            className="bg-black/80 text-white border-white/30 hover:bg-black/90 hover:border-white/50" 
            variant="outline" 
            size="sm" 
            onClick={() => onNavigate("team")}
          >
            Meet the Team
          </Button>
          <Button 
            className="bg-black/80 text-white border-white/30 hover:bg-black/90 hover:border-white/50" 
            variant="outline" 
            size="sm" 
            onClick={() => onNavigate("publications")}
          >
            Latest Publications
          </Button>
          <Button 
            className="bg-black/80 text-white border-white/30 hover:bg-black/90 hover:border-white/50" 
            variant="outline" 
            size="sm" 
            onClick={() => onNavigate("news")}
          >
            Recent News
          </Button>
          <Button 
            className="bg-black/80 text-white border-white/30 hover:bg-black/90 hover:border-white/50" 
            variant="outline" 
            size="sm" 
            onClick={() => onNavigate("contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}