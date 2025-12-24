import { useState } from 'react';
import { Calendar, Clock, MapPin, User, Mail, Phone, ArrowLeft } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function BookingPage() {
  const { booking, setBooking, navigate } = useApp();

  const [formData, setFormData] = useState({
    name: booking?.name || '',
    email: booking?.email || '',
    phone: booking?.phone || '',
    pickupDate: booking?.pickupDate || '',
    pickupTime: booking?.pickupTime || '',
    returnDate: booking?.returnDate || '',
    returnTime: booking?.returnTime || '',
    location: booking?.location || 'Mumbai',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No booking selected
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/[- ]/g, '')))
      newErrors.phone = 'Phone must be 10 digits';
    if (!formData.pickupDate) newErrors.pickupDate = 'Pickup date is required';
    if (!formData.pickupTime) newErrors.pickupTime = 'Pickup time is required';
    if (!formData.returnDate) newErrors.returnDate = 'Return date is required';
    if (!formData.returnTime) newErrors.returnTime = 'Return time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setBooking({ ...booking, ...formData });
      navigate('payment');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('bike-details', booking.bikeId)}
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Vehicle Details</span>
        </button>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-8">
            <h1 className="text-3xl font-bold text-white mb-2">Complete Your Booking</h1>
            <p className="text-blue-100">Just a few more details to confirm your rental</p>
          </div>

          <div className="p-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Selected Vehicle: {booking.bikeName}
              </h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  {booking.duration} {booking.durationType}
                </span>
                <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  ₹{booking.totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.name
                          ? 'border-red-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.email
                          ? 'border-red-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.phone
                          ? 'border-red-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                      placeholder="9876543210"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pickup Location *
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pickup Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.pickupDate
                          ? 'border-red-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                  </div>
                  {errors.pickupDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.pickupDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pickup Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="time"
                      name="pickupTime"
                      value={formData.pickupTime}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.pickupTime
                          ? 'border-red-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                  </div>
                  {errors.pickupTime && (
                    <p className="text-red-500 text-sm mt-1">{errors.pickupTime}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Return Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      min={formData.pickupDate || new Date().toISOString().split('T')[0]}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.returnDate
                          ? 'border-red-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                  </div>
                  {errors.returnDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.returnDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Return Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="time"
                      name="returnTime"
                      value={formData.returnTime}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white ${
                        errors.returnTime
                          ? 'border-red-500'
                          : 'border-gray-300 dark:border-gray-600'
                      }`}
                    />
                  </div>
                  {errors.returnTime && (
                    <p className="text-red-500 text-sm mt-1">{errors.returnTime}</p>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 dark:text-gray-300">
                    I agree to the{' '}
                    <button
                      type="button"
                      onClick={() => navigate('rental-rules')}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Terms and Conditions
                    </button>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Amount</p>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    ₹{booking.totalAmount.toLocaleString()}
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-105"
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
