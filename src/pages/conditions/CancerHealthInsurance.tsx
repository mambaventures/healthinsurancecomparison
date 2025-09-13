import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, Activity } from 'lucide-react';
import SEO from '../../components/SEO';

function CancerHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Cancer Cover NZ 2025 | Cancer Treatment Coverage"
        description="Comprehensive guide to health insurance cancer coverage in New Zealand. Understand treatment costs, waiting periods, and find the best cancer insurance options."
        keywords="health insurance cancer cover NZ, cancer treatment insurance, oncology coverage, chemotherapy insurance, radiation therapy cover"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-16 w-16 text-pink-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance for Cancer Cover</h1>
          </div>
          <p className="text-xl text-pink-100 text-center max-w-3xl mx-auto">
            Understanding cancer coverage in New Zealand health insurance. Treatment options, costs, and choosing the right protection.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-pink-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">25,000+</h3>
            <p className="text-gray-600">New Cancer Cases Annually</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">$100,000+</h3>
            <p className="text-gray-600">Average Treatment Costs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">6-12 Months</h3>
            <p className="text-gray-600">Typical Waiting Periods</p>
          </div>
        </div>

        {/* Why Cancer Cover Matters */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Cancer Cover is Essential</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                High Treatment Costs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Chemotherapy can cost $50,000+ per year</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Radiation therapy sessions $2,000-5,000 each</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Surgery costs $20,000-80,000+</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Targeted therapy drugs $100,000+ annually</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                Public vs Private Treatment
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Faster access to specialists and treatment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Access to newer treatments and clinical trials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Choice of oncologist and treatment facility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private room and enhanced comfort</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cancer Coverage by Type */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancer Coverage by Treatment Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Surgery & Procedures</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Tumor removal surgery</li>
                <li>• Biopsy procedures</li>
                <li>• Reconstructive surgery</li>
                <li>• Port implantation</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Medical Treatments</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Chemotherapy sessions</li>
                <li>• Radiation therapy</li>
                <li>• Immunotherapy</li>
                <li>• Targeted therapy drugs</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support Services</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Oncology consultations</li>
                <li>• Diagnostic imaging</li>
                <li>• Pathology tests</li>
                <li>• Pain management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Cancer Cover */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance Plans for Cancer Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing One</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Comprehensive Cancer Cover</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Unlimited cancer treatment</li>
                <li>✓ Latest chemotherapy drugs</li>
                <li>✓ Radiation therapy included</li>
                <li>✓ Access to private oncologists</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Cancer Cover Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Ultimate Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Maximum Cancer Protection</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Up to $600k surgical benefits</li>
                <li>✓ $300k non-surgical treatment</li>
                <li>✓ Specialist consultations</li>
                <li>✓ Advanced treatment options</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Cancer Cover Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Premier Care</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Comprehensive Treatment</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Cancer treatment covered</li>
                <li>✓ Vitality wellness support</li>
                <li>✓ Second opinion services</li>
                <li>✓ Mental health support</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Cancer Cover Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Important Considerations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Cancer Coverage Considerations</h2>
          <div className="bg-orange-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Waiting Periods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Most plans have 6-12 month waiting periods</li>
                  <li>• Pre-existing cancer typically excluded</li>
                  <li>• Some plans offer immediate accident coverage</li>
                  <li>• Review terms carefully before enrolling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Limits</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Check annual and lifetime benefit limits</li>
                  <li>• Understand drug formulary coverage</li>
                  <li>• Verify specialist and facility networks</li>
                  <li>• Review exclusions and restrictions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Will health insurance cover my cancer if I'm already diagnosed?</h3>
              <p className="text-gray-700">
                Pre-existing cancer conditions are typically excluded from new health insurance policies. However, you may still be able to get coverage for future, unrelated health conditions. It's important to apply for coverage before any diagnosis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long are the waiting periods for cancer coverage?</h3>
              <p className="text-gray-700">
                Most health insurance plans have waiting periods of 6-12 months for cancer coverage. This means you must hold the policy for this period before cancer-related claims will be covered.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What cancer treatments are typically covered?</h3>
              <p className="text-gray-700">
                Comprehensive plans typically cover surgery, chemotherapy, radiation therapy, specialist consultations, diagnostic tests, and hospital stays. Some plans also cover newer treatments like immunotherapy and targeted therapy.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Get Peace of Mind with Cancer Coverage</h2>
          <p className="text-pink-100 mb-6">
            Compare health insurance plans with comprehensive cancer coverage from New Zealand's leading providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-pink-700 rounded-lg hover:bg-pink-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Cancer Cover Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-pink-700 font-semibold"
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

export default CancerHealthInsurance;