import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, DollarSign, FileText, CheckCircle, AlertTriangle, TrendingDown, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

function HealthInsuranceTaxDeductions() {
  return (
    <>
      <SEO
        title="Health Insurance Tax Deductions NZ 2025 | Tax Benefits Guide"
        description="Complete guide to health insurance tax deductions in New Zealand. Learn what's deductible, how to claim, and maximize your tax benefits."
        keywords="health insurance tax deductions NZ, tax benefits health insurance, business expense deduction, IR3 health insurance"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="h-16 w-16 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance Tax Deductions</h1>
          </div>
          <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
            Complete guide to claiming health insurance tax deductions in New Zealand. Maximize your tax benefits legally.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">$1,500+</h3>
            <p className="text-gray-600">Average Annual Premium</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <TrendingDown className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">33%</h3>
            <p className="text-gray-600">Top Tax Rate Savings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FileText className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">IR3</h3>
            <p className="text-gray-600">Self-Employed Tax Return</p>
          </div>
        </div>

        {/* Who Can Claim */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who Can Claim Health Insurance Tax Deductions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Self-Employed & Contractors
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sole traders and independent contractors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Partnership business owners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Company shareholders working in the business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Freelancers and consultants</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                Limited Deductions for Employees
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>PAYE employees generally cannot claim personal health insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>May claim work-related medical expenses in some cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Professional health requirements may be deductible</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* What Can Be Claimed */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Health Insurance Expenses Are Deductible?</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-green-600">✓ Generally Deductible</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Monthly or annual health insurance premiums</li>
                  <li>• Business-related medical assessments</li>
                  <li>• Occupational health and safety requirements</li>
                  <li>• Professional medical examinations</li>
                  <li>• Work-related injury treatment (non-ACC)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-red-600">✗ Not Deductible</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Personal/family medical expenses</li>
                  <li>• Cosmetic procedures</li>
                  <li>• Non-work related treatments</li>
                  <li>• Dental care (unless work-related)</li>
                  <li>• Routine personal health check-ups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How to Claim */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Claim Health Insurance Tax Deductions</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 1: Keep Detailed Records</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• All premium payment receipts</li>
                <li>• Annual insurance statements</li>
                <li>• Business expense invoices</li>
                <li>• Bank statements showing payments</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Complete Your Tax Return</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Include in IR3 for self-employed</li>
                <li>• List under business expenses</li>
                <li>• Separate business vs personal expenses</li>
                <li>• Keep receipts for 7 years</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3: Professional Advice</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Consult a qualified tax advisor</li>
                <li>• Review IRD guidelines annually</li>
                <li>• Consider business structure implications</li>
                <li>• Plan for optimal tax efficiency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tax Savings Calculator */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Potential Tax Savings</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">10.5% Tax Rate</h3>
                <p className="text-gray-600 mb-4">Annual Premium: $1,500</p>
                <p className="text-2xl font-bold text-green-600">$158 saved</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">17.5% Tax Rate</h3>
                <p className="text-gray-600 mb-4">Annual Premium: $1,500</p>
                <p className="text-2xl font-bold text-green-600">$263 saved</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">33% Tax Rate</h3>
                <p className="text-gray-600 mb-4">Annual Premium: $1,500</p>
                <p className="text-2xl font-bold text-green-600">$495 saved</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-4">
              *Savings are based on your marginal tax rate and assume the premium is fully deductible
            </p>
          </div>
        </div>

        {/* Professional Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Deductions by Profession</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Healthcare Workers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Professional indemnity insurance</li>
                <li>• Occupational health screenings</li>
                <li>• Work-related vaccination costs</li>
                <li>• Mental health support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Contractors & Tradies</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Work-related injury coverage</li>
                <li>• Safety training medical requirements</li>
                <li>• Respiratory health assessments</li>
                <li>• Eye and hearing tests</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Services</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Executive health assessments</li>
                <li>• Stress management programs</li>
                <li>• Travel health insurance</li>
                <li>• Professional liability coverage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Disclaimers */}
        <div className="mb-12">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <div className="flex">
              <AlertTriangle className="h-6 w-6 text-yellow-400 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Disclaimer</h3>
                <p className="text-gray-700">
                  This information is general in nature and should not be considered professional tax advice.
                  Tax laws can change, and individual circumstances vary. Always consult with a qualified
                  tax advisor or accountant for advice specific to your situation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Start Saving on Your Health Insurance</h2>
          <p className="text-green-100 mb-6">
            Compare health insurance plans and start maximizing your tax benefits today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Tax-Deductible Quotes
            </Link>
            <Link
              to="/health-insurance-cost-calculator-nz"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-green-700 font-semibold"
            >
              Calculate Savings
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsuranceTaxDeductions;