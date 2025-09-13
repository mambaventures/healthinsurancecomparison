import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Shield, CheckCircle, TrendingDown, Calculator, Users, ArrowRight, Coins } from 'lucide-react';
import SEO from '../../components/SEO';

function HealthInsuranceExcessGuide() {
  return (
    <>
      <SEO
        title="Health Insurance Excess Guide NZ 2025 | Deductibles Explained"
        description="Complete guide to health insurance excess in New Zealand. How deductibles work, choosing the right amount, and impact on premiums."
        keywords="health insurance excess NZ, deductible health insurance, excess amount, insurance premium reduction"
      />

      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Coins className="h-16 w-16 text-emerald-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance Excess Guide</h1>
          </div>
          <p className="text-xl text-emerald-100 text-center max-w-3xl mx-auto">
            Understanding health insurance excess in New Zealand. How deductibles work, choosing the right amount, and balancing premiums with out-of-pocket costs.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What is Excess */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Health Insurance Excess?</h2>
          <div className="bg-emerald-50 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              Health insurance excess (also called a deductible) is the amount you pay out-of-pocket before your insurance coverage kicks in for a claim. It's essentially your contribution towards each claim you make.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Example:</h3>
                <p className="text-gray-700 text-sm">
                  If you have a $500 excess and need surgery costing $8,000, you pay the first $500 and your insurance covers the remaining $7,500.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Key Point:</h3>
                <p className="text-gray-700 text-sm">
                  Higher excess = Lower monthly premiums<br/>
                  Lower excess = Higher monthly premiums
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Excess Amounts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Excess Amounts in NZ</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
              <div className="text-sm text-gray-600 mb-4">No Excess</div>
              <div className="text-xs text-gray-500">Highest premiums, no out-of-pocket costs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center border-2 border-emerald-500">
              <div className="text-3xl font-bold text-emerald-600 mb-2">$500</div>
              <div className="text-sm text-gray-600 mb-4">Most Popular</div>
              <div className="text-xs text-gray-500">Good balance of premium and out-of-pocket cost</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$1,000</div>
              <div className="text-sm text-gray-600 mb-4">Moderate Savings</div>
              <div className="text-xs text-gray-500">Lower premiums, manageable excess</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$2,500+</div>
              <div className="text-sm text-gray-600 mb-4">High Excess</div>
              <div className="text-xs text-gray-500">Lowest premiums, highest out-of-pocket</div>
            </div>
          </div>
        </div>

        {/* Premium Impact */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Excess Affects Your Premiums</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left">Excess Amount</th>
                    <th className="px-4 py-3 text-center">Monthly Premium Example*</th>
                    <th className="px-4 py-3 text-center">Annual Savings</th>
                    <th className="px-4 py-3 text-center">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold">$0</td>
                    <td className="px-4 py-3 text-center">$120</td>
                    <td className="px-4 py-3 text-center text-red-600">-</td>
                    <td className="px-4 py-3 text-center text-sm">Frequent users</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">$500</td>
                    <td className="px-4 py-3 text-center">$95</td>
                    <td className="px-4 py-3 text-center text-green-600">$300</td>
                    <td className="px-4 py-3 text-center text-sm">Most people</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold">$1,000</td>
                    <td className="px-4 py-3 text-center">$85</td>
                    <td className="px-4 py-3 text-center text-green-600">$420</td>
                    <td className="px-4 py-3 text-center text-sm">Infrequent users</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 font-semibold">$2,500</td>
                    <td className="px-4 py-3 text-center">$70</td>
                    <td className="px-4 py-3 text-center text-green-600">$600</td>
                    <td className="px-4 py-3 text-center text-sm">Emergency only</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">*Example for 35-year-old with comprehensive coverage</p>
          </div>
        </div>

        {/* When Excess Applies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When Does Excess Apply?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-6 w-6 text-red-600 mr-2" />
                Excess Usually Applies To:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Hospital admissions (per admission)</li>
                <li>• Surgical procedures</li>
                <li>• Emergency department visits</li>
                <li>• Specialist consultations (some policies)</li>
                <li>• Diagnostic procedures (MRI, CT scans)</li>
                <li>• Day surgery procedures</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                Excess Usually Doesn't Apply To:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Preventive health screenings</li>
                <li>• Some specialist consultations</li>
                <li>• Physiotherapy sessions</li>
                <li>• Psychology consultations</li>
                <li>• GP visits (if covered)</li>
                <li>• Prescription medications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Choosing Right Excess */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose the Right Excess</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Consider Your Financial Situation</h3>
              <p className="text-gray-700 mb-4">
                Choose an excess amount you can comfortably afford to pay if you need to make a claim. There's no point saving on premiums if you can't afford the excess when needed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded">
                  <div className="font-semibold text-green-600">If you have $500 easily available:</div>
                  <div className="text-sm text-gray-600">Consider $500 excess</div>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="font-semibold text-blue-600">If you have $1000+ in emergency fund:</div>
                  <div className="text-sm text-gray-600">Consider $1000+ excess</div>
                </div>
                <div className="bg-gray-50 p-4 rounded">
                  <div className="font-semibold text-orange-600">If money is tight:</div>
                  <div className="text-sm text-gray-600">Consider lower excess</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Think About Your Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">If you're young and healthy:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Consider higher excess ($1000+)</li>
                    <li>• Save on monthly premiums</li>
                    <li>• Lower chance of making claims</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">If you have health conditions:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Consider lower excess ($250-500)</li>
                    <li>• Higher chance of needing care</li>
                    <li>• Multiple claims may add up</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Multiple Claims Scenario */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Multiple Claims</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Important: Excess Applies Per Claim Event</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Scenario 1: Single Health Issue</h4>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Example:</strong> You need knee surgery requiring:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Initial consultation: $300</li>
                    <li>• MRI scan: $800</li>
                    <li>• Surgery: $15,000</li>
                    <li>• Physiotherapy: $1,200</li>
                  </ul>
                  <p className="text-sm font-semibold text-green-600 mt-2">
                    Total cost: $17,300<br/>
                    You pay: $500 excess<br/>
                    Insurance pays: $16,800
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Scenario 2: Separate Health Issues</h4>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Example:</strong> You have two unrelated issues:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Gallbladder surgery: $8,000</li>
                    <li>• Later: Skin cancer removal: $3,000</li>
                  </ul>
                  <p className="text-sm font-semibold text-orange-600 mt-2">
                    Total cost: $11,000<br/>
                    You pay: $1,000 excess (2 × $500)<br/>
                    Insurance pays: $10,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tips for Managing Excess */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips for Managing Your Excess</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Build an Emergency Fund</h3>
              <p className="text-gray-700 text-sm">
                Set aside money specifically for health emergencies. Aim to have at least your excess amount readily available.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Plans</h3>
              <p className="text-gray-700 text-sm">
                Many hospitals and specialists offer payment plans for excess amounts. Ask about options when booking treatment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Review Annually</h3>
              <p className="text-gray-700 text-sm">
                Review your excess choice annually. Your financial situation and health needs may change over time.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Find the Right Balance for Your Needs</h2>
          <p className="text-emerald-100 mb-6">
            Compare health insurance plans and excess options to find the perfect balance of premiums and out-of-pocket costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-emerald-700 rounded-lg hover:bg-emerald-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Compare Plans & Excess Options
            </Link>
            <Link
              to="/health-insurance-cost-calculator-nz"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-emerald-700 font-semibold"
            >
              Calculate Your Costs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsuranceExcessGuide;