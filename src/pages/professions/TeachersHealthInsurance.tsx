import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Shield, CheckCircle, AlertTriangle, Calculator, Users, Phone, Mail, ArrowRight, Clock, DollarSign } from 'lucide-react';
import SEO from '../../components/SEO';

function TeachersHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Teachers NZ 2025 | Education Sector Coverage"
        description="Comprehensive health insurance guide for New Zealand teachers. Compare plans, understand education sector benefits, and find the best coverage for your teaching career."
        keywords="health insurance teachers NZ, education sector health insurance, teacher health benefits, NZEI health insurance, PPTA health insurance"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-blue-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance for Teachers</h1>
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Dedicated health insurance guidance for New Zealand educators. Protect your health while you protect young minds.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">50,000+</h3>
            <p className="text-gray-600">Teachers in NZ</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Term Time</h3>
            <p className="text-gray-600">Stress & Recovery Periods</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-purple-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Tax Deductible</h3>
            <p className="text-gray-600">Professional Expenses</p>
          </div>
        </div>

        {/* Why Teachers Need Health Insurance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Teachers Need Specialized Health Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                Occupational Health Risks
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>High exposure to childhood illnesses and infections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Voice strain and throat problems from constant speaking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Back and neck issues from standing and bending</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Stress-related conditions from workload pressures</span>
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
                  <span>Need quick treatment to avoid taking sick leave</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mental health support for job-related stress</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Preventive care to maintain voice and physical health</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Coverage during school holidays when salary may be reduced</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Teachers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance Plans for Teachers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Southern Cross Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing Starter</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $45/month</span>
                <span className="text-gray-600 text-sm block">Entry-level coverage</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ $500,000 surgical cover</li>
                <li>✓ $60,000 cancer care</li>
                <li>✓ GP visits covered 75%</li>
                <li>✓ Great for younger teachers</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Teacher Quote
              </Link>
            </div>

            {/* NIB Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Easy Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $50/month</span>
                <span className="text-gray-600 text-sm block">Comprehensive coverage</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Surgery & cancer treatment</li>
                <li>✓ Non-PHARMAC medicines</li>
                <li>✓ Overseas treatment $30k</li>
                <li>✓ Digital health services</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Teacher Quote
              </Link>
            </div>

            {/* AIA Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">AIA + Vitality</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $55/month</span>
                <span className="text-gray-600 text-sm block">+ $11.50 Vitality fee</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ 10% premium discount</li>
                <li>✓ $260/year rewards</li>
                <li>✓ Mental health support</li>
                <li>✓ Wellness programs</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Teacher Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Teacher-Specific Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Teacher-Specific Health Insurance Benefits</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental Health & Stress Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Counselling sessions for work-related stress</li>
                  <li>• Mental health consultations</li>
                  <li>• Stress management programs</li>
                  <li>• Burnout prevention resources</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Physical Health Priorities</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• ENT specialist cover for voice issues</li>
                  <li>• Physiotherapy for back/neck problems</li>
                  <li>• Immunizations and preventive care</li>
                  <li>• Quick treatment to minimize sick days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Implications */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Deductions for Teachers</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Development</h3>
                <p className="text-gray-700 mb-4">
                  Health insurance premiums may be tax-deductible as a professional expense if directly related to your teaching role.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Voice therapy coverage</li>
                  <li>• Occupational health assessments</li>
                  <li>• Stress management programs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">NZEI & PPTA Members</h3>
                <p className="text-gray-700 mb-4">
                  Check with your union about group insurance discounts and professional development allowances.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Union member discounts available</li>
                  <li>• Professional development support</li>
                  <li>• Collective bargaining benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ for Teachers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need health insurance if I work in a public school?</h3>
              <p className="text-gray-700">
                Yes. While public healthcare is available, private health insurance provides faster access to specialists,
                which is crucial for teachers who can't afford extended sick leave during term time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What about coverage during school holidays?</h3>
              <p className="text-gray-700">
                Most health insurance plans provide year-round coverage regardless of your employment status.
                This is particularly important for teachers on fixed-term contracts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I claim health insurance as a tax deduction?</h3>
              <p className="text-gray-700">
                Potentially yes, if the health insurance is directly related to your professional requirements.
                Consult with a tax advisor about your specific situation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Protect Your Teaching Career?</h2>
          <p className="text-blue-100 mb-6">
            Compare health insurance plans designed for New Zealand teachers. Get quotes from top providers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Teacher Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
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

export default TeachersHealthInsurance;