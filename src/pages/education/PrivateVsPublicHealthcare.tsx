import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Users, CheckCircle, X, Clock, DollarSign, ArrowRight, Calculator, Star, AlertTriangle } from 'lucide-react';
import SEO from '../../components/SEO';

function PrivateVsPublicHealthcare() {
  return (
    <>
      <SEO
        title="Private vs Public Healthcare NZ 2025 | Complete System Comparison"
        description="Comprehensive comparison of private and public healthcare in New Zealand. Costs, waiting times, quality, and when to choose each system."
        keywords="private vs public healthcare NZ, public health system, private hospital, healthcare comparison, NZ health system"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <Building className="h-12 w-12 text-purple-200 mr-3" />
              <span className="text-4xl font-bold">vs</span>
              <Users className="h-12 w-12 text-blue-200 ml-3" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Private vs Public Healthcare</h1>
          <p className="text-xl text-purple-100 text-center max-w-3xl mx-auto">
            Understanding New Zealand's healthcare systems. Compare costs, quality, access, and outcomes to make informed decisions about your health.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Healthcare Systems at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Public Healthcare</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Free at point of use for NZ residents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Funded by taxpayers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Emergency care prioritized</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Waiting lists for non-urgent procedures</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Building className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Private Healthcare</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fast access to specialists and procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Choice of doctor and hospital</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Enhanced comfort and privacy</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Requires insurance or out-of-pocket payment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed System Comparison</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Factor</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Public Healthcare</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Private Healthcare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Cost to Patient</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Free</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">$5,000-50,000+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Waiting Time (Non-urgent)</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">3-12+ months</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">1-4 weeks</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Emergency Care</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Excellent</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Excellent</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Choice of Specialist</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">Limited</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Full Choice</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Accommodation</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-semibold">Shared Rooms</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Private Rooms</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Latest Technology</td>
                    <td className="px-6 py-4 text-center text-orange-600 font-semibold">Available but Limited</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Latest Available</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Appointment Flexibility</td>
                    <td className="px-6 py-4 text-center text-red-600 font-semibold">Hospital Schedule</td>
                    <td className="px-6 py-4 text-center text-green-600 font-semibold">Your Schedule</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Waiting Times by Procedure */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Typical Waiting Times by Procedure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Public System Wait Times
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Hip replacement:</span>
                  <span className="font-semibold text-red-600">6-18 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Cataract surgery:</span>
                  <span className="font-semibold text-red-600">3-12 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Knee replacement:</span>
                  <span className="font-semibold text-red-600">6-24 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Cardiac surgery:</span>
                  <span className="font-semibold text-orange-600">2-6 months</span>
                </li>
                <li className="flex justify-between">
                  <span>Cancer treatment:</span>
                  <span className="font-semibold text-green-600">2-4 weeks</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building className="h-6 w-6 text-purple-600 mr-2" />
                Private System Wait Times
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex justify-between">
                  <span>Hip replacement:</span>
                  <span className="font-semibold text-green-600">2-6 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span>Cataract surgery:</span>
                  <span className="font-semibold text-green-600">1-3 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span>Knee replacement:</span>
                  <span className="font-semibold text-green-600">2-6 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span>Cardiac surgery:</span>
                  <span className="font-semibold text-green-600">1-3 weeks</span>
                </li>
                <li className="flex justify-between">
                  <span>Cancer treatment:</span>
                  <span className="font-semibold text-green-600">1-2 weeks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Healthcare Costs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Public System Costs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Hospital treatment:</strong> Free</li>
                <li><strong>Emergency care:</strong> Free</li>
                <li><strong>Specialist consultations:</strong> Free (if referred)</li>
                <li><strong>Prescription medicines:</strong> $5 per item (max $100/year)</li>
                <li><strong>GP visits:</strong> $30-80 (some subsidies available)</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Private System Costs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Hip replacement:</strong> $25,000-35,000</li>
                <li><strong>Heart surgery:</strong> $50,000-100,000+</li>
                <li><strong>Cataract surgery:</strong> $3,000-5,000 per eye</li>
                <li><strong>Specialist consultation:</strong> $200-500</li>
                <li><strong>Private hospital (per day):</strong> $1,500-3,000</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Costs</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li><strong>Basic coverage:</strong> $40-80/month</li>
                <li><strong>Comprehensive:</strong> $80-200/month</li>
                <li><strong>Premium plans:</strong> $200-400/month</li>
                <li><strong>Family coverage:</strong> $150-600/month</li>
                <li><strong>Annual excess:</strong> $250-2,500</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quality and Outcomes */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality and Patient Outcomes</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Clinical Quality</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Both systems use same qualified specialists</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Similar clinical outcomes for most procedures</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Public system handles complex cases excellently</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Patient Experience</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Private: Enhanced comfort and privacy</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Private: More personalized care</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Public: Less stress about costs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* When to Choose Each System */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">When to Choose Each System</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-2" />
                Choose Public When:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You need emergency or urgent care</li>
                <li>• Cost is a major concern</li>
                <li>• You have a complex medical condition</li>
                <li>• You can wait for non-urgent procedures</li>
                <li>• You need specialized treatments (like organ transplants)</li>
                <li>• You prefer not to deal with insurance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building className="h-6 w-6 text-purple-600 mr-2" />
                Choose Private When:
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You want to avoid waiting lists</li>
                <li>• You prefer to choose your specialist</li>
                <li>• You value privacy and comfort</li>
                <li>• You need elective or cosmetic procedures</li>
                <li>• You want flexible appointment times</li>
                <li>• You have health insurance coverage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hybrid Approach */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Hybrid Approach: Using Both Systems</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Many Kiwis Use Both Systems Strategically</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Use Public For:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emergency and acute care</li>
                  <li>• Complex conditions requiring specialized teams</li>
                  <li>• Long-term chronic condition management</li>
                  <li>• Treatments not covered by insurance</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Use Private For:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Elective surgery to avoid waiting</li>
                  <li>• Routine procedures and check-ups</li>
                  <li>• Specialist consultations for second opinions</li>
                  <li>• Procedures with long public waiting times</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-700 font-medium">This approach maximizes both cost-effectiveness and access to care.</p>
            </div>
          </div>
        </div>

        {/* Making Your Decision */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Decision Framework: What's Right for You?</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Consider Your Health Status</h3>
              <p className="text-gray-700">
                If you're generally healthy and young, the public system may meet most of your needs. If you have ongoing health concerns or are at higher risk of needing procedures, private insurance provides peace of mind and faster access.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Evaluate Your Financial Situation</h3>
              <p className="text-gray-700">
                Health insurance is an investment in faster, more convenient care. Consider whether the monthly premiums fit your budget and whether you can afford potential out-of-pocket costs for private treatment without insurance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Think About Your Priorities</h3>
              <p className="text-gray-700">
                If choice, speed, and comfort are important to you, private healthcare may be worth the cost. If you're comfortable with the public system and prefer to spend money elsewhere, that's equally valid.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore Private Healthcare Options?</h2>
          <p className="text-purple-100 mb-6">
            While New Zealand's public system is excellent, private health insurance can provide additional benefits and peace of mind. Compare your options.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-700 rounded-lg hover:bg-purple-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Health Insurance Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-purple-700 font-semibold"
            >
              Compare Plans & Costs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivateVsPublicHealthcare;