import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Calendar, Info } from 'lucide-react';
import SEO from '../../components/SEO';

function HealthInsuranceWaitingPeriods() {
  return (
    <>
      <SEO
        title="Health Insurance Waiting Periods Explained NZ 2025 | Coverage Guide"
        description="Complete guide to health insurance waiting periods in New Zealand. Understand when coverage starts, exceptions, and how to minimize waiting times."
        keywords="health insurance waiting periods NZ, coverage start date, pre-existing conditions waiting, insurance exclusions"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Clock className="h-16 w-16 text-amber-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Waiting Periods Explained</h1>
          </div>
          <p className="text-xl text-amber-100 text-center max-w-3xl mx-auto">
            Understanding health insurance waiting periods in New Zealand. When your coverage starts, what's covered immediately, and how to plan ahead.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* What Are Waiting Periods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Are Waiting Periods?</h2>
          <div className="bg-amber-50 p-8 rounded-lg">
            <div className="flex items-start">
              <Info className="h-8 w-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Waiting periods are specific timeframes after your health insurance policy starts during which certain conditions or treatments are not covered. These periods protect insurers from people who only buy insurance when they need immediate medical care.
                </p>
                <p className="text-gray-700">
                  During a waiting period, you still have an active policy and may be covered for other conditions, but specific treatments or condition categories are excluded until the waiting period expires.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Waiting Periods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Waiting Periods by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">General Medical</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Accidents:</span>
                  <span className="font-semibold text-green-600">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">General illness:</span>
                  <span className="font-semibold text-orange-600">30-90 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Specialist care:</span>
                  <span className="font-semibold text-orange-600">30-90 days</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Surgical Procedures</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">General surgery:</span>
                  <span className="font-semibold text-red-600">6 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Joint replacement:</span>
                  <span className="font-semibold text-red-600">6-12 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cardiac surgery:</span>
                  <span className="font-semibold text-red-600">6-12 months</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specific Conditions</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pregnancy:</span>
                  <span className="font-semibold text-red-600">12 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Mental health:</span>
                  <span className="font-semibold text-orange-600">2-6 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pre-existing:</span>
                  <span className="font-semibold text-red-600">12 months+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coverage Timeline Example</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <div className="text-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-semibold">Policy Start</div>
                  <div className="text-xs text-gray-500">Day 1</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-semibold">Accidents Covered</div>
                  <div className="text-xs text-gray-500">24-48 hours</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-semibold">General Illness</div>
                  <div className="text-xs text-gray-500">30-90 days</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-semibold">Surgery</div>
                  <div className="text-xs text-gray-500">6 months</div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mx-auto mb-2"></div>
                  <div className="text-sm font-semibold">Pregnancy</div>
                  <div className="text-xs text-gray-500">12 months</div>
                </div>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-gradient-to-r from-green-500 via-orange-500 via-blue-500 via-purple-500 to-red-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Covered Immediately */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Usually Covered Immediately</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                No Waiting Period
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Emergency accident treatment</li>
                <li>• Life-threatening emergencies</li>
                <li>• Ambulance services</li>
                <li>• Emergency room visits</li>
                <li>• Urgent medical conditions</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Clock className="h-6 w-6 text-orange-500 mr-2" />
                Short Waiting (24-48 hours)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Accidental injuries</li>
                <li>• Sports injuries</li>
                <li>• Home accidents</li>
                <li>• Workplace injuries (if not ACC covered)</li>
                <li>• Sudden onset medical conditions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategies to Minimize Waiting */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategies to Minimize Waiting Periods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply Early</h3>
              <p className="text-gray-700 text-sm mb-4">
                The best time to get health insurance is when you're healthy and don't need it immediately.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Get coverage before you need it</li>
                <li>• Don't wait for health issues to arise</li>
                <li>• Consider coverage in your 20s-30s</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Continuous Coverage</h3>
              <p className="text-gray-700 text-sm mb-4">
                Switching between similar policies may reduce or eliminate waiting periods.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Avoid gaps in coverage</li>
                <li>• Transfer between similar plans</li>
                <li>• Check insurer transfer policies</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Employer Plans</h3>
              <p className="text-gray-700 text-sm mb-4">
                Group insurance through employers often has reduced waiting periods.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Group plans have shorter waits</li>
                <li>• Some offer immediate coverage</li>
                <li>• Check employer benefits</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Provider Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Waiting Periods by Provider</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Provider</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">General Illness</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Surgery</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Pregnancy</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Mental Health</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Southern Cross</td>
                  <td className="px-6 py-4 text-center text-sm">30 days</td>
                  <td className="px-6 py-4 text-center text-sm">6 months</td>
                  <td className="px-6 py-4 text-center text-sm">12 months</td>
                  <td className="px-6 py-4 text-center text-sm">6 months</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">nib</td>
                  <td className="px-6 py-4 text-center text-sm">30 days</td>
                  <td className="px-6 py-4 text-center text-sm">6 months</td>
                  <td className="px-6 py-4 text-center text-sm">12 months</td>
                  <td className="px-6 py-4 text-center text-sm">2 months</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">AIA</td>
                  <td className="px-6 py-4 text-center text-sm">90 days</td>
                  <td className="px-6 py-4 text-center text-sm">12 months</td>
                  <td className="px-6 py-4 text-center text-sm">12 months</td>
                  <td className="px-6 py-4 text-center text-sm">6 months</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Partners Life</td>
                  <td className="px-6 py-4 text-center text-sm">30 days</td>
                  <td className="px-6 py-4 text-center text-sm">6 months</td>
                  <td className="px-6 py-4 text-center text-sm">12 months</td>
                  <td className="px-6 py-4 text-center text-sm">6 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can waiting periods be waived?</h3>
              <p className="text-gray-700">
                In some cases, yes. If you're switching from comparable coverage without a gap, some insurers may waive or reduce waiting periods. Group insurance plans may also have shorter or no waiting periods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I need treatment during a waiting period?</h3>
              <p className="text-gray-700">
                You would need to pay for the treatment yourself or rely on the public health system. The condition would likely then become a pre-existing condition for insurance purposes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do waiting periods reset if I change plans?</h3>
              <p className="text-gray-700">
                Not always. If you move to a plan with similar or less coverage with the same insurer, waiting periods may be credited. However, upgrading to better coverage or changing insurers may restart some waiting periods.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Don't Wait - Get Protected Today</h2>
          <p className="text-amber-100 mb-6">
            The best time to get health insurance is before you need it. Compare plans and start your coverage to begin your waiting periods now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-amber-700 rounded-lg hover:bg-amber-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Quotes Today
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-amber-700 font-semibold"
            >
              Compare Waiting Periods
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsuranceWaitingPeriods;