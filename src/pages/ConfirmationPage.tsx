import { CheckCircle, Download, Home, Calendar, MapPin, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ConfirmationPage() {
  const { booking, navigate } = useApp();

  if (!booking) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No booking found
          </h2>
          <button
            onClick={() => navigate('home')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  const bookingId = `RH${Date.now().toString().slice(-8)}`;
  const totalWithTax = Math.round(booking.totalAmount * 1.18);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
            <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your rental has been successfully booked
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6 animate-slide-up">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-4">
            <div className="flex items-center justify-between text-white">
              <div>
                <p className="text-sm opacity-90">Booking ID</p>
                <p className="text-2xl font-bold">{bookingId}</p>
              </div>
              <button className="flex items-center space-x-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                <span className="text-sm">Download</span>
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Vehicle Details
              </h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {booking.bikeName}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {booking.duration} {booking.durationType} rental
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Pickup Details
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.pickupDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.pickupTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  Return Details
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Date</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.returnDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Time</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.returnTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {booking.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t dark:border-gray-700 pt-6">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                Customer Information
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Name</p>
                  <p className="font-medium text-gray-900 dark:text-white">{booking.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                  <p className="font-medium text-gray-900 dark:text-white">{booking.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                  <p className="font-medium text-gray-900 dark:text-white">{booking.phone}</p>
                </div>
              </div>
            </div>

            <div className="border-t dark:border-gray-700 pt-6 mt-6">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                Payment Summary
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Rental Charges</span>
                  <span className="text-gray-900 dark:text-white">
                    ₹{booking.totalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">GST (18%)</span>
                  <span className="text-gray-900 dark:text-white">
                    ₹{Math.round(booking.totalAmount * 0.18).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t dark:border-gray-700 pt-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Total Paid
                  </span>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    ₹{totalWithTax.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
            What happens next?
          </h3>
          <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-blue-600 dark:text-blue-400">1.</span>
              <span>You'll receive a confirmation email at {booking.email}</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-blue-600 dark:text-blue-400">2.</span>
              <span>Our team will contact you 24 hours before pickup</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-blue-600 dark:text-blue-400">3.</span>
              <span>Please bring your driving license and ID proof at pickup</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-blue-600 dark:text-blue-400">4.</span>
              <span>Enjoy your ride! Contact us anytime for support</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('home')}
            className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all"
          >
            <Home className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <button
            onClick={() => navigate('contact')}
            className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
