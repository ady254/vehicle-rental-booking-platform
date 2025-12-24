import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Footer() {
  const { navigate } = useApp();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              RideHub
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for premium bike and car rentals. Explore the city with comfort and style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('bikes')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Vehicles
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('faqs')}
                  className="hover:text-blue-400 transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('rental-rules')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Rental Rules
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Bike Rentals
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Car Rentals
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Long Term Rentals
              </li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">
                Corporate Bookings
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Rental Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@ridehub.com" className="hover:text-blue-400 transition-colors">
                  info@ridehub.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 RideHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
