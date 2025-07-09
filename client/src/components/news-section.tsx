import { Award, Trophy, Handshake, Calendar, MapPin, Mail, Phone } from "lucide-react";
import { news, events, contact } from "@/data/lab-data";

const newsIconMap = {
  award: Award,
  achievement: Trophy,
  collaboration: Handshake,
  news: Award
};

const eventColors = [
  { border: "border-academic-brown", bg: "bg-academic-brown" },
  { border: "border-forest-green", bg: "bg-forest-green" },
  { border: "border-sandy-brown", bg: "bg-sandy-brown" }
];

export function NewsSection() {
  return (
    <section 
      className="horizontal-section section-snap bg-gradient-to-br from-academic-beige to-white flex items-center justify-center py-20" 
      data-section="6" 
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="news-heading" className="text-4xl md:text-5xl font-bold academic-brown mb-6 font-serif">
            News & Events
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated with our latest achievements and upcoming events
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent News */}
          <div>
            <h3 className="text-2xl font-bold academic-brown mb-8 flex items-center">
              <Award className="mr-3" aria-hidden="true" />
              Recent News
            </h3>
            <div className="space-y-6">
              {news.map((newsItem) => {
                const IconComponent = newsIconMap[newsItem.type];
                const iconColors = {
                  award: "bg-academic-brown",
                  achievement: "bg-forest-green",
                  collaboration: "bg-sandy-brown",
                  news: "bg-academic-brown"
                };
                
                return (
                  <div key={newsItem.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${iconColors[newsItem.type]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="text-white" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-2">{newsItem.date}</div>
                        <h4 className="text-lg font-bold academic-brown mb-2">{newsItem.title}</h4>
                        <p className="text-gray-700 text-sm">{newsItem.summary}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold forest-green mb-8 flex items-center">
              <Calendar className="mr-3" aria-hidden="true" />
              Upcoming Events
            </h3>
            <div className="space-y-6">
              {events.map((event, index) => {
                const colorScheme = eventColors[index % eventColors.length];
                
                return (
                  <div key={event.id} className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 ${colorScheme.border}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`${colorScheme.bg} text-white px-3 py-1 rounded-lg text-sm font-bold`}>
                            {event.date}
                          </div>
                          <div className="text-sm text-gray-500">{event.time}</div>
                        </div>
                        <h4 className="text-lg font-bold academic-brown mb-2">{event.title}</h4>
                        <p className="text-gray-700 text-sm mb-3">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="mr-2" size={16} aria-hidden="true" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold academic-brown mb-6">Get In Touch</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="text-3xl academic-brown mb-4 mx-auto" aria-hidden="true" />
              <h4 className="font-bold academic-brown mb-2">Email Us</h4>
              <p className="text-gray-700">{contact.email}</p>
            </div>
            <div className="text-center">
              <Phone className="text-3xl forest-green mb-4 mx-auto" aria-hidden="true" />
              <h4 className="font-bold forest-green mb-2">Call Us</h4>
              <p className="text-gray-700">{contact.phone}</p>
            </div>
            <div className="text-center">
              <MapPin className="text-3xl sandy-brown mb-4 mx-auto" aria-hidden="true" />
              <h4 className="font-bold sandy-brown mb-2">Visit Us</h4>
              <p className="text-gray-700 whitespace-pre-line">{contact.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
