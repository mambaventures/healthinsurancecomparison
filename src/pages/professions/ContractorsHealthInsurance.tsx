import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, Briefcase } from 'lucide-react';
import SEO from '../../components/SEO';

function ContractorsHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Contractors NZ 2025 | Self-Employed Coverage"
        description="Health insurance guide for New Zealand contractors and self-employed workers. Compare plans, understand tax benefits, and find coverage for independent workers."
        keywords="health insurance contractors NZ, self-employed health insurance, independent contractor insurance, tradesman health insurance"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <HardHat className="h-16 w-16 text-orange-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance for Contractors</h1>
          </div>
          <p className="text-xl text-orange-100 text-center max-w-3xl mx-auto">
            Comprehensive health insurance guidance for New Zealand contractors and self-employed workers. Protect your income and health.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">500,000+</h3>
            <p className="text-gray-600">Self-Employed in NZ</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Tax Deductible</h3>
            <p className="text-gray-600">Business Expense</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">No Sick Leave</h3>
            <p className="text-gray-600">Self-Protection Essential</p>
          </div>
        </div>

        {/* Why Contractors Need Health Insurance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Contractors Need Health Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                Income Protection Needs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>No sick leave or employer health benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Time off work equals lost income</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Need quick treatment to return to work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Irregular income makes health costs challenging</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                Occupational Hazards
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Physical injury risks from tools and equipment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Repetitive strain injuries from manual work</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Exposure to hazardous materials and environments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Stress from irregular work and income</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Contractors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance Plans for Contractors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Southern Cross Budget Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing Starter</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $35/month</span>
                <span className="text-gray-600 text-sm block">Budget-friendly option</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ $500,000 surgical cover</li>
                <li>✓ Cancer care coverage</li>
                <li>✓ Basic GP visits</li>
                <li>✓ Tax deductible</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Contractor Quote
              </Link>
            </div>

            {/* NIB Flexible Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Easy Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $45/month</span>
                <span className="text-gray-600 text-sm block">Flexible coverage</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Surgical & non-surgical benefits</li>
                <li>✓ Specialist consultations</li>
                <li>✓ Digital health services</li>
                <li>✓ Overseas treatment</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Contractor Quote
              </Link>
            </div>

            {/* Partners Life Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/PartnersLife_logo.png" alt="Partners Life" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Private Medical + Trauma</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $60/month</span>
                <span className="text-gray-600 text-sm block">Comprehensive protection</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Private hospital access</li>
                <li>✓ Trauma cover add-on</li>
                <li>✓ Income protection option</li>
                <li>✓ Quick claims processing</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Contractor Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Tax Benefits for Contractors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Deductions for Contractors</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Expense Deductions</h3>
                <p className="text-gray-700 mb-4">
                  As a contractor, health insurance premiums are generally tax-deductible as a legitimate business expense.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Deduct premiums from taxable income</li>
                  <li>• Reduce overall tax liability</li>
                  <li>• Include in business expense records</li>
                  <li>• Consult tax advisor for specific situation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation Requirements</h3>
                <p className="text-gray-700 mb-4">
                  Keep detailed records of all health insurance payments and related medical expenses.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monthly premium payment receipts</li>
                  <li>• Annual insurance statements</li>
                  <li>• Medical expense records</li>
                  <li>• GST registration considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contractor-Specific Coverage Needs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contractor-Specific Coverage Priorities</h2>
          <div className="bg-orange-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Access to Treatment</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fast-track surgical procedures</li>
                  <li>• Immediate specialist consultations</li>
                  <li>• Emergency treatment coverage</li>
                  <li>• Physiotherapy for work injuries</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Income Protection Considerations</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Combine with income protection insurance</li>
                  <li>• Consider trauma cover add-ons</li>
                  <li>• Business interruption protection</li>
                  <li>• Disability insurance options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Common Contractor Health Issues */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Health Issues for Contractors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Briefcase className="h-8 w-8 text-orange-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Musculoskeletal Injuries</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Back and neck strain</li>
                <li>• Repetitive strain injuries</li>
                <li>• Joint problems</li>
                <li>• Muscle fatigue</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AlertTriangle className="h-8 w-8 text-red-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Workplace Injuries</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Cuts and lacerations</li>
                <li>• Burns from tools/chemicals</li>
                <li>• Eye injuries</li>
                <li>• Fall-related injuries</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Occupational Health</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Respiratory issues</li>
                <li>• Hearing problems</li>
                <li>• Skin conditions</li>
                <li>• Stress-related disorders</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ for Contractors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I deduct health insurance premiums as a business expense?</h3>
              <p className="text-gray-700">
                Yes, as a self-employed contractor, health insurance premiums are generally tax-deductible as a legitimate
                business expense. Consult with a tax advisor for your specific situation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between health insurance and ACC?</h3>
              <p className="text-gray-700">
                ACC covers work-related injuries, but health insurance covers illnesses, pre-existing conditions, and
                provides faster access to private healthcare when you need to get back to work quickly.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I combine health insurance with income protection?</h3>
              <p className="text-gray-700">
                Yes, many contractors benefit from combining health insurance with income protection or trauma cover to
                provide comprehensive financial protection when unable to work.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Protect Your Business and Your Health</h2>
          <p className="text-orange-100 mb-6">
            Compare health insurance plans designed for New Zealand contractors and self-employed workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Contractor Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-orange-700 font-semibold"
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

export default ContractorsHealthInsurance;