import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';
import SEO from '../../components/SEO';

function SelfEmployedHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Self-Employed NZ 2025 | Independent Worker Coverage"
        description="Health insurance guide for New Zealand self-employed workers and freelancers. Compare plans, understand tax benefits, and find coverage for independent professionals."
        keywords="health insurance self-employed NZ, freelancer health insurance, independent worker insurance, sole trader health cover"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Briefcase className="h-16 w-16 text-purple-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance for Self-Employed</h1>
          </div>
          <p className="text-xl text-purple-100 text-center max-w-3xl mx-auto">
            Comprehensive health insurance guidance for New Zealand self-employed workers and freelancers. Your health, your responsibility.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">650,000+</h3>
            <p className="text-gray-600">Self-Employed Kiwis</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Growing</h3>
            <p className="text-gray-600">15% increase since 2020</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Tax Deductible</h3>
            <p className="text-gray-600">Business Expense</p>
          </div>
        </div>

        {/* Why Self-Employed Need Health Insurance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Self-Employed Workers Need Health Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                No Safety Net
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>No employer-provided health benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>No paid sick leave protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Income directly tied to ability to work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Business continuity depends on personal health</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                Professional Considerations
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Need quick treatment to maintain client commitments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Stress from irregular income and workload</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mental health support for isolation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Preventive care to avoid work disruption</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Self-Employed */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance Plans for Self-Employed</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing Starter</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $38/month</span>
                <span className="text-gray-600 text-sm block">Budget-friendly starter</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ $500,000 surgical cover</li>
                <li>✓ $60,000 cancer care</li>
                <li>✓ GP visits 75% up to $150/year</li>
                <li>✓ Great for young entrepreneurs</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Self-Employed Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Easy Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $48/month</span>
                <span className="text-gray-600 text-sm block">Balanced coverage</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Surgery & cancer treatment</li>
                <li>✓ Specialist consultations</li>
                <li>✓ Digital health services</li>
                <li>✓ Flexible and customizable</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Self-Employed Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">AIA + Vitality</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $58/month</span>
                <span className="text-gray-600 text-sm block">+ $11.50 Vitality fee</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ 10% premium discount</li>
                <li>✓ Wellness rewards program</li>
                <li>✓ Mental health focus</li>
                <li>✓ $260/year cash rewards</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Self-Employed Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Self-Employed Specific Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Self-Employed Health Insurance Benefits</h2>
          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Continuity Protection</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fast-track treatment to minimize work disruption</li>
                  <li>• Telehealth for flexible scheduling</li>
                  <li>• Mental health support for work stress</li>
                  <li>• Preventive care to avoid serious illness</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Coverage Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Plans that adapt to changing income</li>
                  <li>• No employer restrictions on providers</li>
                  <li>• Add-on options for specific needs</li>
                  <li>• Portable coverage between jobs/clients</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Deductions for Self-Employed</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Expense Deductions</h3>
                <p className="text-gray-700 mb-4">
                  Self-employed individuals can generally claim health insurance premiums as tax-deductible business expenses.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 100% deductible against business income</li>
                  <li>• Reduces taxable income</li>
                  <li>• Include in IR3 tax return</li>
                  <li>• Keep detailed premium records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">GST Considerations</h3>
                <p className="text-gray-700 mb-4">
                  If you're GST registered, you may be able to claim GST on health insurance premiums.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Check GST registration requirements</li>
                  <li>• Claim input tax credits where applicable</li>
                  <li>• Consult with tax advisor</li>
                  <li>• Keep proper GST records</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Invest in Your Health and Your Business</h2>
          <p className="text-purple-100 mb-6">
            Compare health insurance plans designed for New Zealand self-employed workers and freelancers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Self-Employed Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-purple-700 font-semibold"
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

export default SelfEmployedHealthInsurance;