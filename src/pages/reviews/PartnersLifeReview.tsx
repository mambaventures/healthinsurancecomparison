import React from 'react';
import { Shield, Star, CheckCircle, AlertCircle, Users, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InsuranceProductSchema from '../../components/InsuranceProductSchema';

function PartnersLifeReview() {
  const insuranceProduct = {
    name: "Private Medical Cover",
    provider: "Partners Life",
    description: "Comprehensive health insurance providing quick access to private medical treatment with tailored coverage options.",
    monthlyPrice: "Get Quote (18% increase April 2025)",
    benefits: [
      "Quick access to private medical sector",
      "Choice of treatment providers",
      "89% claims payout rate",
      "Tailored coverage options",
      "Hospital Cash Cover available"
    ],
    url: "https://healthinsurancecomparison.co.nz/reviews/partners-life"
  };

  return (
    <>
      <SEO
        title="Partners Life Health Insurance Review 2025 | Health Insurance Comparison"
        description="Expert review of Partners Life health insurance. Compare plans, pricing, and innovative features. Read our detailed analysis and customer reviews."
      />
      <InsuranceProductSchema product={insuranceProduct} />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold">Partners Life Health Insurance Review</h1>
            <p className="mt-4 text-xl text-blue-100">
              Comprehensive review of Partners Life's innovative insurance solutions
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Company Overview */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="/logos/PartnersLife_logo.png" 
                  alt="Partners Life logo" 
                  className="h-16 w-auto mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">About Partners Life</h2>
                  <div className="flex items-center mt-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">89%</span>
                    <span className="ml-2 text-gray-600">claims payout rate</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Partners Life began as a New Zealand start-up around a decade ago and has grown to become one of
                New Zealand's most trusted health, life, and business insurance providers. They pay out around 89%
                of claims each year and offer tailored insurance solutions including Private Medical Cover with
                Specialists and Tests options.
              </p>
            </div>
          </div>

          {/* Plan Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold">Plan Features</h2>
              </div>
              <ul className="space-y-3">
                {insuranceProduct.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-semibold">Pricing & Value</h2>
              </div>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-500" />
                  <span>Pricing: Contact for quote (18% increase April 2025)</span>
                </p>
                <p className="text-gray-700">{insuranceProduct.description}</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">Great Value For:</p>
                  <ul className="text-green-700 text-sm mt-2">
                    <li>• Those seeking tailored coverage</li>
                    <li>• People wanting quick private treatment access</li>
                    <li>• Customers prioritizing choice of providers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Coverage */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Coverage Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Private Medical Cover</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quick access to private medical sector</li>
                  <li>• Choice of treatment providers</li>
                  <li>• Specialists and Tests option available</li>
                  <li>• Coverage in NZ and Australia (worldwide with limitations)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hospital Cash Cover</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Cash benefit for hospital admission 3+ nights</li>
                  <li>• Private or public hospital coverage</li>
                  <li>• Hospice care included</li>
                  <li>• Stand-alone or add-on option</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Products</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Specific Condition Cover</li>
                  <li>• Trauma Cover (separate product)</li>
                  <li>• Income Cover (separate product)</li>
                  <li>• Mix and match policy options</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros & Cons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-4">Pros</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-green-700">Innovative policy features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-green-700">Excellent trauma coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-green-700">Digital-first approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-green-700">Competitive pricing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-4">Cons</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-red-700">Smaller provider network</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-red-700">Limited physical branches</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-red-700">Complex policy terms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">"Excellent trauma coverage and innovative features. The digital platform is very user-friendly."</p>
                <p className="text-sm text-gray-500">- Rachel T., Hamilton</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <Star className="w-4 h-4 text-gray-300" />
                  </div>
                  <span className="ml-2 text-gray-600">4/5</span>
                </div>
                <p className="text-gray-700 mb-4">"Good value for money and fast claims processing. Would like more provider options in my area."</p>
                <p className="text-sm text-gray-500">- Mark S., Tauranga</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Partners Life</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">0800 14 54 33</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@partnerslife.co.nz</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compare with Other Providers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Compare with Other Providers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Southern Cross", logo: "/logos/southern-cross.png", slug: "southern-cross" },
                { name: "nib", logo: "/logos/nib.png", slug: "nib" },
                { name: "AIA", logo: "/logos/AIA.png", slug: "aia" },
                { name: "Accuro", logo: "/logos/accuro.png", slug: "accuro" }
              ].map(provider => (
                <Link
                  key={provider.slug}
                  to={`/reviews/${provider.slug}`}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                >
                  <img 
                    src={provider.logo} 
                    alt={`${provider.name} logo`} 
                    className="h-8 w-auto mx-auto mb-2"
                  />
                  <p className="text-sm font-medium text-gray-900">{provider.name}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get a Quote from Partners Life?</h2>
            <p className="text-blue-100 mb-6">
              Compare Partners Life with other providers and find the best plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quotes"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/compare"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
              >
                Compare All Plans
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PartnersLifeReview;