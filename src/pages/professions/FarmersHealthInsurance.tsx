import React from 'react';
import { Link } from 'react-router-dom';
import { Wheat, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';

function FarmersHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Farmers NZ 2025 | Rural Healthcare Coverage"
        description="Health insurance guide for New Zealand farmers and rural workers. Compare plans, understand rural healthcare challenges, and find coverage for agricultural workers."
        keywords="health insurance farmers NZ, rural health insurance, agricultural worker insurance, farm health coverage"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Wheat className="h-16 w-16 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance for Farmers</h1>
          </div>
          <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
            Specialized health insurance guidance for New Zealand farmers and agricultural workers. Protection for those who feed the nation.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">42,000+</h3>
            <p className="text-gray-600">Farm Businesses in NZ</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Remote</h3>
            <p className="text-gray-600">Limited Healthcare Access</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">High Risk</h3>
            <p className="text-gray-600">Machinery & Animal Injuries</p>
          </div>
        </div>

        {/* Why Farmers Need Health Insurance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Farmers Need Specialized Health Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-6 w-6 text-blue-500 mr-2" />
                Rural Healthcare Challenges
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Limited access to specialists in rural areas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Long travel distances to healthcare facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Need for private healthcare to avoid waiting lists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Seasonal work patterns affecting healthcare timing</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                Agricultural Occupational Hazards
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Machinery accidents and equipment injuries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Animal-related injuries and zoonotic diseases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Chemical and pesticide exposure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Weather-related health risks and skin cancer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Farmers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance Plans for Farmers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing Two</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $85/month</span>
                <span className="text-gray-600 text-sm block">Comprehensive rural coverage</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Unlimited surgical cover</li>
                <li>✓ Specialist consultations</li>
                <li>✓ Travel allowances for treatment</li>
                <li>✓ Emergency helicopter cover</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Farm Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Ultimate Health Max</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $95/month</span>
                <span className="text-gray-600 text-sm block">Maximum protection</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Up to $600k surgical benefits</li>
                <li>✓ Non-PHARMAC drug coverage</li>
                <li>✓ Overseas treatment $30k</li>
                <li>✓ Telehealth services</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Farm Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-200">
              <div className="flex items-center mb-4">
                <img src="/logos/PartnersLife_logo.png" alt="Partners Life" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Rural Package</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $90/month</span>
                <span className="text-gray-600 text-sm block">Tailored for rural workers</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Private medical cover</li>
                <li>✓ Trauma & income protection</li>
                <li>✓ Seasonal work consideration</li>
                <li>✓ Fast rural claims processing</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-orange-600 text-white text-center py-2 rounded-lg hover:bg-orange-700">
                Get Farm Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Farmer-Specific Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Farmer-Specific Health Insurance Benefits</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Rural Healthcare Access</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Travel allowances for specialist appointments</li>
                  <li>• Emergency helicopter transport coverage</li>
                  <li>• Telehealth and remote consultation services</li>
                  <li>• Priority booking for urgent cases</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Agricultural Health Priorities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Skin cancer screening and treatment</li>
                  <li>• Respiratory health from dust/chemical exposure</li>
                  <li>• Musculoskeletal injury treatment</li>
                  <li>• Mental health support for rural isolation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Benefits for Farmers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Deductions for Farmers</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Expense Deductions</h3>
                <p className="text-gray-700 mb-4">
                  Farmers can generally claim health insurance premiums as tax-deductible business expenses.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Deductible against farm income</li>
                  <li>• Include in annual tax return</li>
                  <li>• Keep detailed premium records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Federated Farmers Benefits</h3>
                <p className="text-gray-700 mb-4">
                  Check with Federated Farmers about member discounts and group insurance options.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Member discount programs</li>
                  <li>• Group insurance schemes</li>
                  <li>• Advocacy for rural healthcare</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Protect Your Farm and Your Family</h2>
          <p className="text-green-100 mb-6">
            Compare health insurance plans designed for New Zealand farmers and rural workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-lg hover:bg-green-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Farm Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-green-800 font-semibold"
            >
              Compare All Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default FarmersHealthInsurance;