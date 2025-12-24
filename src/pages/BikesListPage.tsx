import { useState, useMemo } from 'react';
import { Star, Filter, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import bikesData from '../data/bikes.json';
import { Bike } from '../types';

const bikes = bikesData as Bike[];

export default function BikesListPage() {
  const { navigate } = useApp();
  const [selectedType, setSelectedType] = useState<'all' | 'bike' | 'car'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');
  const [showFilters, setShowFilters] = useState(false);

  const categories = useMemo(() => {
    const cats = bikes.map((bike) => bike.category);
    return ['all', ...Array.from(new Set(cats))];
  }, []);

  const filteredBikes = useMemo(() => {
    let filtered = bikes;

    if (selectedType !== 'all') {
      filtered = filtered.filter((bike) => bike.type === selectedType);
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((bike) => bike.category === selectedCategory);
    }

    if (priceRange !== 'all') {
      filtered = filtered.filter((bike) => {
        switch (priceRange) {
          case 'low':
            return bike.pricePerDay < 1000;
          case 'medium':
            return bike.pricePerDay >= 1000 && bike.pricePerDay < 2000;
          case 'high':
            return bike.pricePerDay >= 2000;
          default:
            return true;
        }
      });
    }

    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.pricePerDay - b.pricePerDay);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.pricePerDay - a.pricePerDay);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered = [...filtered].sort((a, b) => b.reviews - a.reviews);
    }

    return filtered;
  }, [selectedType, selectedCategory, priceRange, sortBy]);

  const resetFilters = () => {
    setSelectedType('all');
    setSelectedCategory('all');
    setPriceRange('all');
    setSortBy('popular');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Our Fleet
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Browse through our collection of premium bikes and cars
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>

          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } lg:block w-full lg:w-64 flex-shrink-0`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Reset
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Vehicle Type
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Vehicles' },
                      { value: 'bike', label: 'Bikes Only' },
                      { value: 'car', label: 'Cars Only' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          value={option.value}
                          checked={selectedType === option.value}
                          onChange={(e) => setSelectedType(e.target.value as 'all' | 'bike' | 'car')}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat === 'all' ? 'All Categories' : cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Price Range (per day)
                  </label>
                  <div className="space-y-2">
                    {[
                      { value: 'all', label: 'All Prices' },
                      { value: 'low', label: 'Under ₹1,000' },
                      { value: 'medium', label: '₹1,000 - ₹2,000' },
                      { value: 'high', label: 'Above ₹2,000' },
                    ].map((option) => (
                      <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          value={option.value}
                          checked={priceRange === option.value}
                          onChange={(e) => setPriceRange(e.target.value)}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {filteredBikes.length} vehicle{filteredBikes.length !== 1 ? 's' : ''} found
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredBikes.map((bike) => (
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
                    <div className="absolute top-3 left-3 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400">
                      {bike.type === 'bike' ? 'Bike' : 'Car'}
                    </div>
                    {!bike.available && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
                          Not Available
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                      {bike.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {bike.brand} • {bike.category}
                    </p>

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

                    <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
                      <div className="bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded">
                        <span className="text-gray-500 dark:text-gray-400">Engine: </span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          {bike.specifications.engine}
                        </span>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-700 px-2 py-1 rounded">
                        <span className="text-gray-500 dark:text-gray-400">Seats: </span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          {bike.specifications.seating}
                        </span>
                      </div>
                    </div>

                    <div className="border-t dark:border-gray-700 pt-3 flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">From</p>
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                          ₹{bike.pricePerDay}
                          <span className="text-sm font-normal">/day</span>
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          ₹{bike.pricePerHour}/hr
                        </p>
                      </div>
                      {bike.available && (
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                          Book Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBikes.length === 0 && (
              <div className="text-center py-16">
                <X className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No vehicles found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Try adjusting your filters to see more results
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
