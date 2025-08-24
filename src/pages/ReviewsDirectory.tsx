import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Star, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

function ReviewsDirectory() {
  const providers = [
    {
      name: "Southern Cross",
      slug: "southern-cross",
      rating: 4.8,
      description: "New Zealand's largest health insurer with comprehensive coverage options",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "nib",
      slug: "nib", 
      rating: 4.6,
      description: "Innovative health insurance with flexible plans and digital services",
      logo: "https://github.com/mambaventures/healthinsurancecomparison/blob/4a058346a1493099f50a6440ad785bb567faaafe/logos/nib.png?raw=true"
    },
    {
      name: "AIA",
      slug: "aia",
      rating: 4.7,
      description: "Comprehensive health coverage with Vitality wellness program",
      logo: "https://github.com/mambaventures/healthinsurancecomparison/blob/43218b7c29f7e5081ecaefad96816bab4fa8b126/logos/AIA.png?raw=true"
    },
    {
      name: "Partners Life",
      slug: "partners-life",
      rating: 4.6,
      description: "Innovative insurance solutions with comprehensive trauma coverage",
      logo: "https://github.com/mambaventures/healthinsurancecomparison/blob/f364b3eb97e017c6d77190cbc71e27c01942bd4d/logos/PartnersLife_logo.png?raw=true"
    },
    {
      name: "Accuro",
      slug: "accuro",
      rating: 4.5,
      description: "Member-focused health insurance with competitive premiums",
      logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "UniMed",
      slug: "unimed",
      rating: 4.4,
      description: "Workplace health plans with family coverage options",
      logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <>
      <SEO
        title="Health Insurance Provider Reviews | HealthCompare NZ"
        description="Read expert reviews of New Zealand's top health insurance providers. Compare coverage, pricing, and customer satisfaction ratings."
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Health Insurance Provider Reviews",
          "description": "Reviews of health insurance providers in New Zealand"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Insurance Provider Reviews
          </h1>
          <p className="text-xl text-gray-600">
            Expert reviews and ratings of New Zealand's leading health insurance providers
          </p>
        </div>

        {/* Provider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map(provider => (
            <Link
              key={provider.slug}
              to={`/reviews/${provider.slug}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={provider.logo}
                    alt={`${provider.name} logo`}
                    className="w-12 h-12 rounded-full object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{provider.name}</h3>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{provider.rating}/5</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{provider.description}</p>
                <div className="flex items-center text-blue-600 hover:text-blue-700">
                  <span>Read Review</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Compare Plans?</h2>
          <p className="text-blue-100 mb-6">
            Use our comparison tool to find the best health insurance plan for your needs
          </p>
          <Link
            to="/compare"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold"
          >
            Compare Plans Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ReviewsDirectory;