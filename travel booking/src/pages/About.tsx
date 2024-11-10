import React from 'react';
import { Star, Users, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About TravelGo</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Your trusted partner in creating unforgettable travel experiences since 2010.
              We believe in making travel accessible, enjoyable, and sustainable for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, stat: "50K+", label: "Happy Travelers" },
              { icon: Globe, stat: "100+", label: "Destinations" },
              { icon: Star, stat: "4.9/5", label: "Average Rating" },
              { icon: Award, stat: "15+", label: "Years Experience" }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <item.icon className="w-8 h-8 mx-auto mb-4 text-blue-500" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "New York, USA",
                rating: 5,
                review: "Amazing service! TravelGo made our honeymoon absolutely perfect. Every detail was taken care of.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              },
              {
                name: "Michael Chen",
                location: "Singapore",
                rating: 5,
                review: "Professional team, great destinations, and competitive prices. Couldn't ask for more!",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
              },
              {
                name: "Emma Williams",
                location: "London, UK",
                rating: 5,
                review: "Third time booking with TravelGo and they never disappoint. Their customer service is outstanding.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;