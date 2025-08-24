import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Star, CheckCircle, Shield, AlertCircle, DollarSign, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import CoverageComparison from '../components/CoverageComparison';
import PremiumCalculator from '../components/PremiumCalculator';

type InsurancePlan = {
  id: string;
  provider: string;
  logo: string;
  planName: string;
  monthlyPrice: number;
  rating: number;
  reviews: number;
  features: string[];
  coverage: {
    hospital: number;
    specialist: number;
    dental: number;
    optical: number;
    physio: number;
  };
  waitingPeriods: {
    hospital: number;
    extras: number;
  };
  bestFor: string[];
};

const insurancePlans: InsurancePlan[] = [
  {
    id: "southern-cross-1",
    provider: "Southern Cross",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=100&h=100",
    planName: "Wellbeing Starter",
    monthlyPrice: 45.99,
    rating: 4.8,
    reviews: 1250,
    features: [
      "No excess for children",
      "Unlimited hospital cover",
      "Specialist consultations",
      "Free health screening"
    ],
    coverage: {
      hospital: 100,
      specialist: 80,
      dental: 60,
      optical: 50,
      physio: 70
    },
    waitingPeriods: {
      hospital: 30,
      extras: 60
    },
    bestFor: ["Families", "Comprehensive coverage"]
  },
  {
    id: "nib-1",
    provider: "nib",
    logo: "https://github.com/mambaventures/healthinsurancecomparison/blob/4a058346a1493099f50a6440ad785bb567faaafe/main/logos/nib.png?raw=true",
    planName: "Essential Health Plus",
    monthlyPrice: 39.99,
    rating: 4.5,
    reviews: 980,
    features: [
      "Low premium option",
      "Basic hospital cover",
      "GP visits included",
      "Digital health services"
    ],
    coverage: {
      hospital: 90,
      specialist: 70,
      dental: 50,
      optical: 40,
      physio: 60
    },
    waitingPeriods: {
      hospital: 60,
      extras: 90
    },
    bestFor: ["Young professionals", "Budget-conscious"]
  },
  {
    id: "aia-1",
    provider: "AIA",
    logo: "https://github.com/mambaventures/healthinsurancecomparison/blob/43218b7c29f7e5081ecaefad96816bab4fa8b126/main/logos/AIA.png?raw=true",
    planName: "Real Health",
    monthlyPrice: 52.99,
    rating: 4.7,
    reviews: 1100,
    features: [
      "Mental health support",
      "Alternative therapies",
      "Vitality rewards program",
      "Cancer care coverage"
    ],
    coverage: {
      hospital: 100,
      specialist: 90,
      dental: 70,
      optical: 60,
      physio: 80
    },
    waitingPeriods: {
      hospital: 30,
      extras: 60
    },
    bestFor: ["Comprehensive coverage", "Health enthusiasts"]
  },
  {
    id: "partners-life-1",
    provider: "Partners Life",
    logo: "https://github.com/mambaventures/healthinsurancecomparison/blob/f364b3eb97e017c6d77190cbc71e27c01942bd4d/main/logos/PartnersLife_logo.png?raw=true",
    planName: "Private Hospital Cover",
    monthlyPrice: 49.99,
    rating: 4.6,
    reviews: 850,
    features: [
      "Comprehensive trauma coverage",
      "Innovative policy features",
      "Digital claims process",
      "Specialist consultations"
    ],
    coverage: {
      hospital: 95,
      specialist: 85,
      dental: 55,
      optical: 45,
      physio: 65
    },
    waitingPeriods: {
      hospital: 45,
      extras: 75
    },
    bestFor: ["Comprehensive coverage", "Digital-first users"]
  },
  {
    id: "accuro-1",
    provider: "Accuro",
    logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100",
    planName: "SmartCare",
    monthlyPrice: 42.99,
    rating: 4.5,
    reviews: 720,
    features: [
      "Pre-existing conditions coverage",
      "Member-focused approach",
      "Competitive premiums",
      "Basic hospital cover"
    ],
    coverage: {
      hospital: 85,
      specialist: 75,
      dental: 45,
      optical: 35,
      physio: 55
    },
    waitingPeriods: {
      hospital: 50,
      extras: 80
    },
    bestFor: ["Pre-existing conditions", "Value seekers"]
  },
  {
    id: "unimed-1",
    provider: "UniMed",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=100&h=100",
    planName: "HealthCare Plus",
    monthlyPrice: 44.99,
    rating: 4.4,
    reviews: 680,
    features: [
      "Workplace health plans",
      "Family coverage options",
      "Preventive care focus",
      "Day-to-day healthcare"
    ],
    coverage: {
      hospital: 80,
      specialist: 70,
      dental: 40,
      optical: 30,
      physio: 50
    },
    waitingPeriods: {
      hospital: 55,
      extras: 85
    },
    bestFor: ["Workplace plans", "Families"]
  }
];

function Compare() {
  const location = useLocation();
  const [selectedPlans, setSelectedPlans] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'price' | 'rating'>('rating');
  const [filterProvider, setFilterProvider] = useState<string>('all');

  const providers = Array.from(new Set(insurancePlans.map(plan => plan.provider)));
  
  const sortedPlans = [...insurancePlans].sort((a, b) => {
    if (sortBy === 'price') return a.monthlyPrice - b.monthlyPrice;
    return b.rating - a.rating;
  });

  const filteredPlans = sortedPlans.filter(plan => 
    filterProvider === 'all' || plan.provider === filterProvider
  );

  const togglePlanSelection = (planId: string) => {
    setSelectedPlans(prev => 
      prev.includes(planId)
        ? prev.filter(id => id !== planId)
        : [...prev, planId]
    );
  };

  return (
    <>
      <SEO
        title="Compare Health Insurance Plans NZ | HealthCompare NZ"
        description="Compare health insurance plans side by side. See coverage options, premiums, and benefits from Southern Cross, nib, AIA and more NZ providers."
        canonicalUrl="https://healthinsurancecomparison.co.nz/compare"
        keywords={[
          'compare health insurance nz',
          'health insurance comparison',
          'compare health insurance plans',
          'health insurance providers nz',
          'best health insurance nz'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Health Insurance Plan Comparison Service",
          "description": "Compare health insurance plans from top New Zealand providers",
          "provider": {
            "@type": "Organization",
            "@name": "Health Insurance Comparison NZ",
            "url": "https://healthinsurancecomparison.co.nz"
          },
          "areaServed": {
            "@type": "Country",
            "name": "New Zealand"
          },
          "serviceType": "Insurance Comparison",
          "offers": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Southern Cross Health Insurance",
                "category": "Health Insurance",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "NZD",
                  "price": "45.99",
                  "priceValidUntil": "2025-12-31"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "nib Health Insurance",
                "category": "Health Insurance", 
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "NZD",
                  "price": "38.99",
                  "priceValidUntil": "2025-12-31"
                }
              }
            }
          ]
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Sorting */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Compare Health Insurance Plans</h2>
              <p className="text-gray-600 mt-1">Compare and find the best health insurance plan for you</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={filterProvider}
                onChange={(e) => setFilterProvider(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="all">All Providers</option>
                {providers.map(provider => (
                  <option key={provider} value={provider}>{provider}</option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'price' | 'rating')}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="rating">Sort by Rating</option>
                <option value="price">Sort by Price</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <PremiumCalculator />
          <CoverageComparison />
          {filteredPlans.map(plan => (
            <div
              key={plan.id}
              className={`bg-white rounded-lg shadow-lg p-6 transition-all duration-200 ${
                selectedPlans.includes(plan.id) ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Provider Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-4">
                    <img
                      src={plan.logo}
                      alt={`${plan.provider} logo`}
                      className="w-16 h-16 rounded-full object-contain"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{plan.provider}</h3>
                      <p className="text-blue-600">{plan.planName}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{plan.rating}</span>
                      <span className="ml-1 text-gray-500">({plan.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="lg:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.bestFor.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="lg:col-span-1 flex flex-col justify-between">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">
                      ${plan.monthlyPrice}
                      <span className="text-sm text-gray-500 font-normal">/month</span>
                    </p>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <Shield className="w-4 h-4 mr-2" />
                        <span>Hospital wait: {plan.waitingPeriods.hospital} days</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        <span>Extras wait: {plan.waitingPeriods.extras} days</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <button
                      onClick={() => togglePlanSelection(plan.id)}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {selectedPlans.includes(plan.id) ? 'Remove from Compare' : 'Add to Compare'}
                    </button>
                    <a
                      href={`/reviews/${plan.provider.toLowerCase().replace(' ', '-')}`}
                      className="w-full block text-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      View Full Details
                    </a>
                  </div>
                </div>
              </div>

              {/* Coverage Details */}
              <div className="mt-8 border-t pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Coverage Details</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {Object.entries(plan.coverage).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 capitalize">{key}</p>
                      <div className="mt-2 flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                        <span className="ml-2 text-sm font-medium text-gray-900">{value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* New CTA Section */}
        <div className="mt-16 mb-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get the Best Health Insurance Deal?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our expert advisors will help you find the perfect plan for your needs and budget. Get started with a free quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Free Comparison Service</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Licensed Insurance Advisors</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Save Up To 30% On Premiums</span>
            </div>
          </div>
        </div>

        {/* Selected Plans Comparison */}
        {selectedPlans.length > 0 && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600">
                    {selectedPlans.length} plan{selectedPlans.length > 1 ? 's' : ''} selected
                  </p>
                </div>
                <a
                  href="/quotes"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Get Quotes for Selected Plans
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Compare;