import React from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="h-full flex flex-col justify-center items-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl text-center mb-12">
              Explore the world's most beautiful destinations
            </p>

            {/* Search Box */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Where to?"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-3 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
                title: "Bali, Indonesia",
                price: "$899"
              },
              {
                image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
                title: "Santorini, Greece",
                price: "$1299"
              },
              {
                image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
                title: "Venice, Italy",
                price: "$999"
              }
            ].map((destination, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                  <p className="text-gray-600">Starting from</p>
                  <p className="text-2xl font-bold text-blue-500">{destination.price}</p>
                  <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;