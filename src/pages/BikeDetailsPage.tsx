import { useState, useMemo } from 'react';
import {
  Star,
  Calendar,
  Clock,
  ArrowLeft,
  Gauge,
  Fuel,
  Users,
  Settings,
  Zap,
  Shield,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import bikesData from '../data/bikes.json';
import { Bike } from '../types';

const bikes = bikesData as Bike[];

export default function BikeDetailsPage() {
  const { selectedBikeId, navigate, setBooking } = useApp();
  const bike = bikes.find((b) => b.id === selectedBikeId);

  const [selectedImage, setSelectedImage] = useState(0);
  const [rentalType, setRentalType] = useState<'hours' | 'days'>('days');
  const [duration, setDuration] = useState(1);

  const totalPrice = useMemo(() => {
    if (!bike) return 0;
    return rentalType === 'hours' ? bike.pricePerHour * duration : bike.pricePerDay * duration;
  }, [bike, rentalType, duration]);

  if (!bike) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Vehicle not found
          </h2>
          <button
            onClick={() => navigate('bikes')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Browse Vehicles
          </button>
        </div>
      </div>
    );
  }

  const handleBookNow = () => {
    setBooking({
      bikeId: bike.id,
      bikeName: bike.name,
      name: '',
      email: '',
      phone: '',
      pickupDate: '',
      pickupTime: '',
      returnDate: '',
      returnTime: '',
      location: '',
      totalAmount: totalPrice,
      duration,
      durationType: rentalType,
    });
    navigate('booking');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('bikes')}
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Vehicles</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-4">
              <img
                src={bike.images[selectedImage]}
                alt={bike.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {bike.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-blue-600 dark:border-blue-400'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <img src={image} alt={`${bike.name} ${index + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {bike.name}
                </h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {bike.brand} • {bike.category}
                </p>
              </div>
              <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold text-gray-900 dark:text-white">{bike.rating}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">({bike.reviews})</span>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-6">{bike.description}</p>

            <div className="border-t border-b dark:border-gray-700 py-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Engine</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {bike.specifications.engine}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Power</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {bike.specifications.power}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Fuel className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Fuel</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {bike.specifications.fuel}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Seating</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {bike.specifications.seating} Person
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Settings className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Transmission</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {bike.specifications.transmission}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Top Speed</p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {bike.specifications.topSpeed}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Calculate Your Rental
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Rental Type
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setRentalType('hours')}
                      className={`py-3 rounded-lg font-semibold transition-all ${
                        rentalType === 'hours'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <Clock className="w-5 h-5 mx-auto mb-1" />
                      Hourly
                    </button>
                    <button
                      onClick={() => setRentalType('days')}
                      className={`py-3 rounded-lg font-semibold transition-all ${
                        rentalType === 'days'
                          ? 'bg-blue-600 text-white'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
                      }`}
                    >
                      <Calendar className="w-5 h-5 mx-auto mb-1" />
                      Daily
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Duration ({rentalType === 'hours' ? 'hours' : 'days'})
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={rentalType === 'hours' ? 24 : 30}
                    value={duration}
                    onChange={(e) => setDuration(parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600 dark:text-gray-400">
                      ₹{rentalType === 'hours' ? bike.pricePerHour : bike.pricePerDay} × {duration}{' '}
                      {rentalType === 'hours' ? 'hours' : 'days'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-t dark:border-gray-700 pt-2">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Total Amount
                    </span>
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      ₹{totalPrice.toLocaleString()}
                    </span>
                  </div>
                </div>

                {bike.available ? (
                  <button
                    onClick={handleBookNow}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-[1.02]"
                  >
                    Book Now
                  </button>
                ) : (
                  <div className="w-full py-4 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg font-semibold text-center">
                    Currently Unavailable
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            What's Included
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Insurance Coverage',
                description: 'Comprehensive insurance included for your safety',
              },
              {
                icon: Users,
                title: bike.type === 'bike' ? '2 Helmets' : 'Comfortable Seating',
                description:
                  bike.type === 'bike' ? 'ISI-marked helmets provided' : 'Spacious and comfortable interiors',
              },
              {
                icon: Clock,
                title: '24/7 Support',
                description: 'Roadside assistance available anytime',
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
