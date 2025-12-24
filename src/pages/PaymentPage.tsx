import { useState } from 'react';
import { CreditCard, Smartphone, ArrowLeft, CheckCircle, Loader } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function PaymentPage() {
  const { booking, navigate } = useApp();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card'>('upi');
  const [processing, setProcessing] = useState(false);

  const [cardData, setCardData] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: '',
  });

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

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      navigate('confirmation');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('booking')}
          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Booking</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Choose Payment Method
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'upi'
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                  }`}
                >
                  <Smartphone
                    className={`w-8 h-8 mx-auto mb-2 ${
                      paymentMethod === 'upi'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400'
                    }`}
                  />
                  <p
                    className={`font-semibold ${
                      paymentMethod === 'upi'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    UPI / QR Code
                  </p>
                </button>

                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-300'
                  }`}
                >
                  <CreditCard
                    className={`w-8 h-8 mx-auto mb-2 ${
                      paymentMethod === 'card'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-400'
                    }`}
                  />
                  <p
                    className={`font-semibold ${
                      paymentMethod === 'card'
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    Credit / Debit Card
                  </p>
                </button>
              </div>

              {paymentMethod === 'upi' && (
                <div className="border-t dark:border-gray-700 pt-6">
                  <div className="text-center">
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl inline-block mb-4">
                      <div className="w-64 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-48 h-48 bg-white dark:bg-gray-800 mx-auto mb-4 rounded-lg flex items-center justify-center border-4 border-dashed border-gray-300 dark:border-gray-600">
                            <span className="text-gray-400 text-sm">QR Code</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Scan QR Code to Pay
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Use any UPI app (GPay, PhonePe, Paytm, etc.)
                    </p>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        Or pay directly using UPI ID:
                      </p>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        ridehub@upi
                      </p>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>Demo Mode:</strong> This is a demo payment. Click "Confirm Payment"
                        to proceed without actual payment.
                      </p>
                    </div>

                    <button
                      onClick={handlePayment}
                      disabled={processing}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {processing ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Confirm Payment</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="border-t dark:border-gray-700 pt-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardData.number}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 16);
                          setCardData({ ...cardData, number: value });
                        }}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        value={cardData.name}
                        onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                        placeholder="JOHN DOE"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white uppercase"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={cardData.expiry}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, '');
                            if (value.length >= 2) {
                              value = value.slice(0, 2) + '/' + value.slice(2, 4);
                            }
                            setCardData({ ...cardData, expiry: value });
                          }}
                          placeholder="MM/YY"
                          maxLength={5}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cardData.cvv}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 3);
                            setCardData({ ...cardData, cvv: value });
                          }}
                          placeholder="123"
                          maxLength={3}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        <strong>Demo Mode:</strong> This is a test payment. Use card number{' '}
                        <code className="bg-yellow-100 dark:bg-yellow-800 px-2 py-1 rounded">
                          4242424242424242
                        </code>{' '}
                        with any future expiry and CVV.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handlePayment}
                      disabled={processing}
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {processing ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          <span>Pay Now</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-20">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Booking Summary
              </h3>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Vehicle</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {booking.bikeName}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Duration</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {booking.duration} {booking.durationType}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Pickup</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {booking.pickupDate}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Return</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {booking.returnDate}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Location</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {booking.location}
                  </span>
                </div>
              </div>

              <div className="border-t dark:border-gray-700 pt-4 mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">Rental Charges</span>
                  <span className="text-gray-900 dark:text-white">
                    ₹{booking.totalAmount.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600 dark:text-gray-400">GST (18%)</span>
                  <span className="text-gray-900 dark:text-white">
                    ₹{Math.round(booking.totalAmount * 0.18).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="border-t dark:border-gray-700 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Total Amount
                  </span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ₹{Math.round(booking.totalAmount * 1.18).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                <p className="text-sm text-green-800 dark:text-green-200 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Secure payment protected</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
