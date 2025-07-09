import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Award, Newspaper, Users, ExternalLink } from "lucide-react";
import { adminNewsItems, getPublishedNews, getNewsByType } from "@/data/admin-data";

export function NewsSection() {
  const recentNews = getPublishedNews(6); // Get 6 most recent published news items
  
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "award":
        return <Award className="h-4 w-4 text-yellow-500" />;
      case "collaboration":
        return <Users className="h-4 w-4 text-blue-500" />;
      case "achievement":
        return <Award className="h-4 w-4 text-green-500" />;
      default:
        return <Newspaper className="h-4 w-4 text-gray-500" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "award":
        return "bg-yellow-50 text-yellow-800";
      case "collaboration":
        return "bg-blue-50 text-blue-800";
      case "achievement":
        return "bg-green-50 text-green-800";
      default:
        return "bg-gray-50 text-gray-800";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest News & Updates</h2>
        <p className="text-gray-600">Recent achievements, collaborations, and research developments</p>
      </div>

      {/* News Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-xl font-bold">
              {getNewsByType('award').length}
            </div>
            <div className="text-sm text-gray-600">Awards</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-xl font-bold">
              {getNewsByType('collaboration').length}
            </div>
            <div className="text-sm text-gray-600">Collaborations</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold">
              {getNewsByType('achievement').length}
            </div>
            <div className="text-sm text-gray-600">Achievements</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Newspaper className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <div className="text-xl font-bold">{getPublishedNews().length}</div>
            <div className="text-sm text-gray-600">Total Updates</div>
          </CardContent>
        </Card>
      </div>

      {/* Featured News */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-900">
            <Award className="h-5 w-5 mr-2" />
            Featured Achievement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-blue-900">
              BBC Features Violence Detection Research
            </h3>
            <p className="text-sm text-blue-800">
              Dr. Omkar's groundbreaking research on crowd violence detection using drone surveillance 
              and convolutional neural networks has been featured by the BBC, highlighting its potential 
              for public safety applications.
            </p>
            <div className="flex items-center justify-between">
              <Badge className="bg-blue-100 text-blue-800">International Recognition</Badge>
              <Button size="sm" variant="outline" asChild>
                <a href="https://sites.google.com/site/compintellab/" target="_blank">
                  Learn More <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent News List */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900">Recent Updates</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {recentNews.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(item.type)}
                      <Badge variant="outline" className={getTypeColor(item.type)}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </Badge>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(item.date)}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.summary}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Research Highlights */}
      <Card>
        <CardHeader>
          <CardTitle>Research Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Media Coverage</h4>
                <p className="text-sm text-yellow-800">
                  Research featured by BBC and other international media outlets for its innovative approach to public safety
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Industry Impact</h4>
                <p className="text-sm text-green-800">
                  Serving as Research Advisor to Tata Consultancy Services and other leading technology companies
                </p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Recent Achievements:</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• 4,193+ citations across research publications</li>
                <li>• 200+ interns trained in cutting-edge research methods</li>
                <li>• Multiple patents including WO2018211396A1</li>
                <li>• Founder member of Automatic Control and Dynamic Optimization Society (ACDOS)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold">Research Collaboration Meeting</h4>
              <p className="text-sm text-gray-600">Industry partnerships and joint research initiatives</p>
              <p className="text-xs text-gray-500">Next Quarter</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold">Student Research Presentations</h4>
              <p className="text-sm text-gray-600">PhD and M.Tech students presenting their latest findings</p>
              <p className="text-xs text-gray-500">Monthly</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold">International Conference Participation</h4>
              <p className="text-sm text-gray-600">Presenting research at aerospace and AI conferences</p>
              <p className="text-xs text-gray-500">Ongoing</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}