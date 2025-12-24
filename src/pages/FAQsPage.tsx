import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import faqsData from '../data/faqs.json';
import { FAQ } from '../types';

const faqs = faqsData as FAQ[];

export default function FAQsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const categories = ['all', ...Array.from(new Set(faqs.map((faq) => faq.category)))];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our rental services
          </p>
        </div>

        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-blue-400'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-gray-400 transition-transform flex-shrink-0 ml-4 ${
                    openFAQ === faq.id ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openFAQ === faq.id && (
                <div className="px-6 pb-4 animate-slide-up">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No results found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter
            </p>
          </div>
        )}

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-blue-100 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
