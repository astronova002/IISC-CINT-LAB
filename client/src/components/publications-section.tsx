import { useState } from "react";
import { Quote, Star, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publications, stats } from "@/data/lab-data";

type PublicationYear = 'all' | '2024' | '2023' | '2022';

export function PublicationsSection() {
  const [activeYear, setActiveYear] = useState<PublicationYear>('all');

  const years = [
    { key: 'all' as const, label: 'All Years' },
    { key: '2024' as const, label: '2024' },
    { key: '2023' as const, label: '2023' },
    { key: '2022' as const, label: '2022' }
  ];

  const filteredPublications = activeYear === 'all' 
    ? publications 
    : publications.filter(pub => pub.year === activeYear);

  return (
    <section 
      className="horizontal-section section-snap bg-white flex items-center justify-center py-20" 
      data-section="5" 
      aria-labelledby="publications-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="publications-heading" className="text-4xl md:text-5xl font-bold academic-brown mb-6 font-serif">
            Publications
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Recent research contributions and scholarly achievements
          </p>
        </div>
        
        {/* Publication Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold academic-brown mb-2">{stats.totalPapers}</div>
            <div className="text-gray-600">Published Papers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold forest-green mb-2">{stats.totalCitations}</div>
            <div className="text-gray-600">Citations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold sandy-brown mb-2">{stats.hIndex}</div>
            <div className="text-gray-600">H-Index</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold academic-brown mb-2">{stats.patents}</div>
            <div className="text-gray-600">Patents</div>
          </div>
        </div>
        
        {/* Recent Publications */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold academic-brown mb-8 text-center">Recent Publications</h3>
          
          {/* Year Filter */}
          <div className="flex justify-center gap-4 mb-8">
            {years.map((year) => (
              <Button
                key={year.key}
                onClick={() => setActiveYear(year.key)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  activeYear === year.key
                    ? 'bg-academic-brown text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {year.label}
              </Button>
            ))}
          </div>
          
          <div className="space-y-6">
            {filteredPublications.map((publication) => (
              <div key={publication.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold academic-brown mb-2">
                      "{publication.title}"
                    </h4>
                    <p className="text-gray-700 mb-3">
                      {publication.authors}
                    </p>
                    <p className="text-sm forest-green mb-2">
                      <em>{publication.journal}</em>
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Quote className="mr-2" size={16} aria-hidden="true" />
                        Cited by {publication.citations}
                      </span>
                      {publication.impactFactor && (
                        <span className="flex items-center">
                          <Star className="mr-2" size={16} aria-hidden="true" />
                          Impact Factor: {publication.impactFactor}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 ml-6">
                    <Button
                      size="sm"
                      className="bg-academic-brown text-white hover:bg-opacity-90"
                    >
                      <Download className="mr-2" size={16} aria-hidden="true" />
                      PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-academic-brown academic-brown hover:bg-academic-brown hover:text-white"
                    >
                      <ExternalLink className="mr-2" size={16} aria-hidden="true" />
                      DOI
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <a href="#" className="inline-flex items-center academic-brown hover:opacity-80 transition-colors">
              <span>View All Publications</span>
              <ExternalLink className="ml-2" size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
