import React from 'react';
import { Shield, Star, CheckCircle, AlertCircle, Users, Clock, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import InsuranceProductSchema from '../../components/InsuranceProductSchema';

function SouthernCrossReview() {
  const insuranceProduct = {
    name: "Wellbeing Starter",
    provider: "Southern Cross",
    description: "Comprehensive health insurance plan with hospital and surgical coverage, specialist consultations, and diagnostic tests.",
    monthlyPrice: 45.99,
    benefits: [
      "No excess for children",
      "Unlimited hospital cover",
      "Specialist consultations",
      "Free health screening"
    ],
    url: "https://healthinsurancecomparison.co.nz/reviews/southern-cross"
  };

  return (
    <>
      <SEO
        title="Southern Cross Health Insurance Review 2025 | Health Insurance Comparison"
        description="Comprehensive review of Southern Cross health insurance. Compare plans, coverage options, and pricing. Read our expert analysis and customer reviews."
      />
      <InsuranceProductSchema product={insuranceProduct} />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold">Southern Cross Health Insurance Review</h1>
            <p className="mt-4 text-xl text-blue-100">
              Comprehensive review of New Zealand's largest health insurer
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Company Overview */}
          <div className="mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src="/main/logos/southern-cross.png" 
                  alt="Southern Cross logo" 
                  className="h-16 w-auto mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">About Southern Cross</h2>
                  <div className="flex items-center mt-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.8/5</span>
                    <span className="ml-2 text-gray-600">(1,250 reviews)</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                As New Zealand's largest health insurance provider, Southern Cross operates as a not-for-profit organization, 
                reinvesting surplus funds into member benefits. With over 60 years of experience, they serve approximately 
                900,000 New Zealanders with comprehensive health coverage and excellent customer service.
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
                  <span>Monthly Premium: ${insuranceProduct.monthlyPrice}</span>
                </p>
                <p className="text-gray-700">{insuranceProduct.description}</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold">Great Value For:</p>
                  <ul className="text-green-700 text-sm mt-2">
                    <li>• Families with children</li>
                    <li>• Comprehensive coverage seekers</li>
                    <li>• Long-term health planning</li>
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
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hospital Cover</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Private hospital accommodation</li>
                  <li>• Surgical procedures</li>
                  <li>• Specialist fees</li>
                  <li>• Theatre and anaesthetist costs</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Member Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Easy-claim app</li>
                  <li>• Member discounts</li>
                  <li>• Health screenings</li>
                  <li>• Wellness resources</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• No excess for children</li>
                  <li>• Extensive provider network</li>
                  <li>• 24/7 support</li>
                  <li>• Not-for-profit benefits</li>
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
                    <span className="text-green-700">Largest provider network in NZ</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-green-700">Not-for-profit organization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-green-700">Excellent customer service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-green-700">Comprehensive coverage options</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-4">Cons</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-red-700">Higher premiums for some plans</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-red-700">Waiting periods for pre-existing conditions</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-red-700">Complex plan structures</span>
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
                <p className="text-gray-700 mb-4">"Excellent service and comprehensive coverage. The no excess for children is fantastic."</p>
                <p className="text-sm text-gray-500">- Emma K., Auckland</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">5/5</span>
                </div>
                <p className="text-gray-700 mb-4">"Been with Southern Cross for 15 years. Great claims process and wide network of providers."</p>
                <p className="text-sm text-gray-500">- David R., Wellington</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Southern Cross</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">0800 800 181</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@southerncross.co.nz</p>
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
                { name: "nib", logo: "/main/logos/nib.png", slug: "nib" },
                { name: "AIA", logo: "/main/logos/AIA.png", slug: "aia" },
                { name: "Partners Life", logo: "/main/logos/PartnersLife_logo.png", slug: "partners-life" },
                { name: "Accuro", logo: "/main/logos/accuro.png", slug: "accuro" }
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
            <h2 className="text-2xl font-bold mb-4">Ready to Get a Quote from Southern Cross?</h2>
            <p className="text-blue-100 mb-6">
              Compare Southern Cross with other providers and find the best plan for your needs.
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

export default SouthernCrossReview;