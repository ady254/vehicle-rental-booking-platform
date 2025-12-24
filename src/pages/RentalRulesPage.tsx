import { Shield, AlertCircle, FileText, CheckCircle } from 'lucide-react';

export default function RentalRulesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Rental Terms & Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Please read our rental policies carefully before booking
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Eligibility Requirements
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  Minimum age: 18 years for scooters/bikes up to 150cc, 21 years for bikes above
                  150cc and all cars
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  Valid driving license (minimum 1 year old for bikes, 2 years for cars)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  Government-issued photo ID (Aadhaar, PAN, Passport, or Voter ID)
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300">
                  Valid address proof (if different from ID)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Security Deposit
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                A refundable security deposit is required at the time of vehicle pickup:
              </p>
              <ul className="space-y-2 ml-5">
                <li className="text-gray-700 dark:text-gray-300">
                  • Scooters: ₹2,000
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Bikes (up to 350cc): ₹3,000 - ₹5,000
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Bikes (above 350cc): ₹5,000 - ₹10,000
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Cars: ₹5,000 - ₹15,000
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                The deposit will be refunded within 7 working days after vehicle return, subject to
                no damages or traffic violations.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Fuel Policy
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                Vehicles are provided with a specific fuel level. You must return the vehicle with
                the same fuel level. Any deficit will be charged at ₹150/liter plus service
                charges.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Insurance & Liability
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300">
                All vehicles come with comprehensive insurance. However:
              </p>
              <ul className="space-y-2 ml-5">
                <li className="text-gray-700 dark:text-gray-300">
                  • You're responsible for the first ₹5,000 of any damage claim
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Traffic violations and challans are customer's responsibility
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Insurance doesn't cover damages caused by negligence, drunk driving, or racing
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Full damage waiver available for additional ₹200-500/day
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Cancellation Policy
              </h2>
            </div>
            <div className="space-y-3">
              <ul className="space-y-2 ml-5">
                <li className="text-gray-700 dark:text-gray-300">
                  • Free cancellation: More than 24 hours before pickup (100% refund)
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • 24-6 hours before pickup: 50% cancellation charge
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Less than 6 hours before pickup: No refund
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • No-show: No refund, full rental amount charged
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Usage Restrictions
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-gray-700 dark:text-gray-300 font-semibold">
                The following are strictly prohibited:
              </p>
              <ul className="space-y-2 ml-5">
                <li className="text-gray-700 dark:text-gray-300">
                  • Subletting or sharing the vehicle with unauthorized persons
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Driving under the influence of alcohol or drugs
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Using the vehicle for racing, rallying, or illegal activities
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Overloading beyond specified seating capacity
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Smoking inside the vehicle (₹2,000 cleaning fee applies)
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Return Policy
              </h2>
            </div>
            <div className="space-y-3">
              <ul className="space-y-2 ml-5">
                <li className="text-gray-700 dark:text-gray-300">
                  • Vehicle must be returned at the agreed time and location
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Late returns: Hourly charges apply (up to 3 hours grace period)
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Delays beyond 3 hours: Full additional day charged
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Vehicle should be clean and in the same condition as provided
                </li>
                <li className="text-gray-700 dark:text-gray-300">
                  • Damage inspection will be done at the time of return
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Important Note
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  By confirming your booking, you acknowledge that you have read, understood, and
                  agree to comply with all the terms and conditions mentioned above. Violation of
                  any terms may result in immediate termination of the rental agreement and
                  forfeiture of the security deposit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
