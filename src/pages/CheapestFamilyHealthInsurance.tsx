import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Users, Shield, CheckCircle, TrendingDown, Calculator, ArrowRight, Heart } from 'lucide-react';
import SEO from '../components/SEO';

function CheapestFamilyHealthInsurance() {
  return (
    <>
      <SEO
        title="Cheapest Family Health Insurance NZ 2025 | Budget Family Plans"
        description="Find the cheapest family health insurance in New Zealand. Compare budget-friendly family plans, discounts, and ways to save on health insurance for families."
        keywords="cheapest family health insurance NZ, budget family health cover, affordable family insurance, family health insurance discounts"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-16 w-16 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Cheapest Family Health Insurance</h1>
          </div>
          <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
            Find affordable health insurance for your family in New Zealand. Compare budget plans and save money without compromising coverage.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">From $120</h3>
            <p className="text-gray-600">Monthly Family Premium</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <TrendingDown className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Save 40%</h3>
            <p className="text-gray-600">Family vs Individual Plans</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Kids Free</h3>
            <p className="text-gray-600">Under 18 with Some Plans</p>
          </div>
        </div>

        {/* Cheapest Family Plans */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cheapest Family Health Insurance Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing Starter Family</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $120/month</span>
                <span className="text-gray-600 text-sm block">Family of 4 estimate</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ $500,000 surgical cover per person</li>
                <li>✓ $60,000 cancer care per person</li>
                <li>✓ Basic GP visit coverage</li>
                <li>✓ Kids under 18 often included</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Family Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Easy Health Family</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $140/month</span>
                <span className="text-gray-600 text-sm block">Family of 4 estimate</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Surgery and cancer treatment</li>
                <li>✓ Specialist consultations</li>
                <li>✓ Non-PHARMAC medicines</li>
                <li>✓ Family-friendly digital services</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Family Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/PartnersLife_logo.png" alt="Partners Life" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Private Medical Family</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $160/month</span>
                <span className="text-gray-600 text-sm block">Family of 4 estimate</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Private hospital access</li>
                <li>✓ Quick family appointments</li>
                <li>✓ Tailored family coverage</li>
                <li>✓ Add trauma cover options</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Family Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Ways to Save */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Save Money on Family Health Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Savings Strategies</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Choose higher excess to reduce premiums (kids often exempt)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pay annually instead of monthly for 5-10% discounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Start with basic plans and upgrade as budget allows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Take advantage of family plan discounts</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Optimization</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Focus on major medical coverage over minor benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Consider separate plans for different family members if cheaper</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Review and compare plans annually</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Use employer health benefits where available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Family-Specific Considerations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Family Health Insurance Considerations</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Children's Coverage</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Many plans include children at no extra cost</li>
                  <li>• Some insurers offer free coverage for kids under 18</li>
                  <li>• Children typically have no excess requirements</li>
                  <li>• Pediatric specialists usually covered</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Benefits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Shared annual limits across family members</li>
                  <li>• Maternity and pregnancy coverage options</li>
                  <li>• Mental health support for all ages</li>
                  <li>• Preventive care and vaccinations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Calculator */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Estimate Your Family Costs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Couple + 1 Child</h3>
                <p className="text-2xl font-bold text-green-600">$95-140/month</p>
                <p className="text-sm text-gray-600">Basic to comprehensive</p>
              </div>
              <div className="text-center p-4 border rounded-lg bg-blue-50">
                <h3 className="text-lg font-semibold mb-2">Couple + 2 Children</h3>
                <p className="text-2xl font-bold text-blue-600">$120-180/month</p>
                <p className="text-sm text-gray-600">Most popular family size</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Large Family (5+)</h3>
                <p className="text-2xl font-bold text-purple-600">$150-250/month</p>
                <p className="text-sm text-gray-600">Maximum family benefits</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Protect Your Family for Less</h2>
          <p className="text-green-100 mb-6">
            Compare the cheapest family health insurance plans and start saving today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 font-semibold"
            >
              <Users className="mr-2 w-5 h-5" />
              Get Family Quotes
            </Link>
            <Link
              to="/health-insurance-cost-calculator-nz"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-green-700 font-semibold"
            >
              Calculate Family Costs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheapestFamilyHealthInsurance;