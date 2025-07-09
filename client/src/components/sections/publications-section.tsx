import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, TrendingUp, Award, ExternalLink, Filter } from "lucide-react";
import { publications } from "@/data/lab-data";

export function PublicationsSection() {
  const [yearFilter, setYearFilter] = useState<string>("all");
  
  const years = ["all", "2024", "2023", "2022", "2021"];
  
  const filteredPublications = yearFilter === "all" 
    ? publications 
    : publications.filter(pub => pub.year === yearFilter);

  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);
  const avgImpactFactor = publications
    .filter(pub => pub.impactFactor)
    .reduce((sum, pub) => sum + (pub.impactFactor || 0), 0) / 
    publications.filter(pub => pub.impactFactor).length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Publications</h2>
        <p className="text-gray-600">Research publications and scholarly contributions</p>
      </div>

      {/* Publication Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="p-4">
            <BookOpen className="h-6 w-6 text-blue-500 mx-auto mb-2" />
            <div className="text-xl font-bold">{publications.length}</div>
            <div className="text-sm text-gray-600">Publications</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <TrendingUp className="h-6 w-6 text-green-500 mx-auto mb-2" />
            <div className="text-xl font-bold">{totalCitations.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Total Citations</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <Award className="h-6 w-6 text-purple-500 mx-auto mb-2" />
            <div className="text-xl font-bold">{avgImpactFactor.toFixed(1)}</div>
            <div className="text-sm text-gray-600">Avg Impact Factor</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-4">
            <BookOpen className="h-6 w-6 text-orange-500 mx-auto mb-2" />
            <div className="text-xl font-bold">35</div>
            <div className="text-sm text-gray-600">H-Index</div>
          </CardContent>
        </Card>
      </div>

      {/* Year Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filter by Year
            </span>
            <Badge variant="secondary">
              {filteredPublications.length} publications
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {years.map(year => (
              <Button
                key={year}
                variant={yearFilter === year ? "default" : "outline"}
                size="sm"
                onClick={() => setYearFilter(year)}
              >
                {year === "all" ? "All Years" : year}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Publications List */}
      <div className="space-y-4">
        {filteredPublications.map((publication, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-gray-900 text-lg leading-tight">
                    {publication.title}
                  </h3>
                  <Badge variant="outline">{publication.year}</Badge>
                </div>
                
                <p className="text-sm text-gray-600">
                  <strong>Authors:</strong> {publication.authors}
                </p>
                
                <p className="text-sm text-blue-600">
                  <strong>Journal:</strong> {publication.journal}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">{publication.citations} citations</span>
                    </div>
                    {publication.impactFactor && (
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-purple-500" />
                        <span className="text-sm font-medium">IF: {publication.impactFactor}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2">
                    {publication.doi && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={`https://doi.org/${publication.doi}`} target="_blank" rel="noopener noreferrer">
                          DOI <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    )}
                    {publication.pdfUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={publication.pdfUrl} target="_blank" rel="noopener noreferrer">
                          PDF <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Research Impact */}
      <Card>
        <CardHeader>
          <CardTitle>Research Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">High-Impact Journals</h4>
                <p className="text-sm text-blue-800">
                  Publications in top-tier journals with impact factors ranging from 4.4 to 13.85
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">Global Recognition</h4>
                <p className="text-sm text-green-800">
                  Research cited by international scholars and featured by major media outlets like BBC
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibent text-purple-900 mb-2">Collaborative Work</h4>
                <p className="text-sm text-purple-800">
                  Co-authored publications with leading researchers in aerospace and computational intelligence
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Featured Research Areas:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Violence Detection</Badge>
                <Badge variant="secondary">Satellite Image Processing</Badge>
                <Badge variant="secondary">UAV Surveillance</Badge>
                <Badge variant="secondary">Biomechanics</Badge>
                <Badge variant="secondary">Machine Learning</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}