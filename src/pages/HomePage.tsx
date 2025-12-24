import { Calendar, MapPin, Search, Star, Shield, Clock, Headphones } from 'lucide-react';
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import bikesData from '../data/bikes.json';
import testimonialsData from '../data/testimonials.json';
import { Bike, Testimonial } from '../types';

const bikes = bikesData as Bike[];
const testimonials = testimonialsData as Testimonial[];

export default function HomePage() {
  const { navigate, setSearchParams } = useApp();
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [location, setLocation] = useState('Mumbai');

  const handleSearch = () => {
    setSearchParams({ pickupDate, returnDate, location });
    navigate('bikes');
  };

  const featuredBikes = bikes.filter((bike) => bike.available).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1327038/pexels-photo-1327038.jpeg?auto=compress&cs=tinysrgb&w=1260)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Your Journey Starts Here
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Premium bikes and cars at unbeatable prices
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto animate-slide-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Return Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    min={pickupDate || new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white appearance-none"
                  >
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Pune</option>
                    <option>Goa</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              onClick={handleSearch}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Search Vehicles</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'All vehicles are sanitized and fully insured',
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Round the clock customer service',
              },
              {
                icon: Star,
                title: 'Best Prices',
                description: 'Competitive rates with no hidden charges',
              },
              {
                icon: Headphones,
                title: 'Easy Booking',
                description: 'Book in minutes with instant confirmation',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Vehicles
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our most popular bikes and cars
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBikes.map((bike) => (
              <div
                key={bike.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate('bike-details', bike.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {bike.type === 'bike' ? 'Bike' : 'Car'}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                    {bike.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{bike.category}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {bike.rating}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        ({bike.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="border-t dark:border-gray-700 pt-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Starting from</p>
                      <p className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        ₹{bike.pricePerDay}
                        <span className="text-sm font-normal">/day</span>
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigate('bikes')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105"
            >
              View All Vehicles
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Real experiences from real riders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t dark:border-gray-700 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.bike}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your perfect ride today and experience the freedom
          </p>
          <button
            onClick={() => navigate('bikes')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
          >
            Book Now
          </button>
        </div>
      </section>
    </div>
  );
}
