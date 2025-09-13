import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, CheckCircle, AlertTriangle, Calculator, Users, Phone, Mail, ArrowRight, Clock, Activity } from 'lucide-react';
import SEO from '../../components/SEO';

function NursesHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Nurses NZ 2025 | Healthcare Worker Coverage"
        description="Specialized health insurance guide for New Zealand nurses and healthcare workers. Compare plans, understand healthcare sector benefits, and find coverage for shift workers."
        keywords="health insurance nurses NZ, healthcare worker insurance, nurse health benefits, NZNO health insurance, shift worker health insurance"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-16 w-16 text-green-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance for Nurses</h1>
          </div>
          <p className="text-xl text-green-100 text-center max-w-3xl mx-auto">
            Comprehensive health insurance guidance for New Zealand healthcare heroes. Protect those who protect others.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">55,000+</h3>
            <p className="text-gray-600">Registered Nurses in NZ</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600">Shift Work Coverage Needed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Activity className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">High Risk</h3>
            <p className="text-gray-600">Occupational Hazards</p>
          </div>
        </div>

        {/* Why Nurses Need Health Insurance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Nurses Need Specialized Health Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                Occupational Health Risks
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Exposure to infectious diseases and bloodborne pathogens</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Musculoskeletal injuries from lifting and moving patients</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Needle stick injuries and workplace accidents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mental health challenges from high-stress environments</span>
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
                  <span>Irregular shift patterns affecting appointment scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Need for rapid treatment to maintain fitness for duty</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Burnout and compassion fatigue management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Professional indemnity and liability considerations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Nurses */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance Plans for Nurses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Southern Cross Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing One</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $65/month</span>
                <span className="text-gray-600 text-sm block">Comprehensive coverage</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Unlimited surgical cover</li>
                <li>✓ Specialist consultations</li>
                <li>✓ Mental health support</li>
                <li>✓ Physiotherapy coverage</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Nurse Quote
              </Link>
            </div>

            {/* NIB Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Ultimate Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $75/month</span>
                <span className="text-gray-600 text-sm block">Premium coverage</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Up to $600k surgical benefits</li>
                <li>✓ $300k non-surgical benefits</li>
                <li>✓ Overseas treatment coverage</li>
                <li>✓ Telehealth services</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Nurse Quote
              </Link>
            </div>

            {/* AIA Option */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">AIA + Vitality</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $70/month</span>
                <span className="text-gray-600 text-sm block">+ $11.50 Vitality fee</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Mental health focus</li>
                <li>✓ Wellness rewards</li>
                <li>✓ Stress management programs</li>
                <li>✓ 10% premium discount</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Nurse Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Nurse-Specific Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nurse-Specific Health Insurance Benefits</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Occupational Health Coverage</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Hepatitis B vaccination coverage</li>
                  <li>• Post-exposure prophylaxis for needle stick injuries</li>
                  <li>• Regular health screenings and immunizations</li>
                  <li>• Work-related injury treatment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental Health & Wellbeing</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Burnout and compassion fatigue counselling</li>
                  <li>• Stress management programs</li>
                  <li>• Critical incident debriefing support</li>
                  <li>• PTSD treatment from traumatic cases</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Shift Worker Considerations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Insurance for Shift Workers</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Appointment Scheduling</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• 24/7 telehealth services</li>
                  <li>• Weekend and evening appointment coverage</li>
                  <li>• Online claims processing</li>
                  <li>• Mobile app access for shift workers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sleep & Circadian Health</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Sleep disorder assessment and treatment</li>
                  <li>• Circadian rhythm disorder support</li>
                  <li>• Fatigue management programs</li>
                  <li>• Sleep study coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* NZNO and Professional Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">NZNO Member Benefits</h2>
          <div className="bg-purple-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Union Member Discounts</h3>
                <p className="text-gray-700 mb-4">
                  New Zealand Nurses Organisation (NZNO) members may be eligible for group insurance discounts and special rates.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Group insurance rates</li>
                  <li>• Professional development support</li>
                  <li>• Legal protection insurance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Indemnity</h3>
                <p className="text-gray-700 mb-4">
                  Consider professional indemnity insurance to complement your health insurance coverage.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Malpractice protection</li>
                  <li>• Legal defense coverage</li>
                  <li>• Career protection benefits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ for Nurses */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">I work in a public hospital - do I still need private health insurance?</h3>
              <p className="text-gray-700">
                Yes. Private health insurance provides faster access to specialists and treatments, which is crucial for
                healthcare workers who need to maintain their fitness for duty and can't afford long waiting periods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What about coverage for work-related injuries?</h3>
              <p className="text-gray-700">
                ACC covers work-related injuries, but health insurance can provide additional coverage for pre-existing
                conditions, mental health support, and faster access to specialists for occupational health issues.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How does shift work affect my health insurance?</h3>
              <p className="text-gray-700">
                Most insurers offer 24/7 telehealth services and flexible appointment scheduling. Some plans specifically
                cater to shift workers with extended hours coverage and mobile-friendly claims processing.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-teal-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Protect Your Health While You Care for Others</h2>
          <p className="text-green-100 mb-6">
            Compare health insurance plans designed for New Zealand nurses and healthcare workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-green-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Nurse Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-green-700 font-semibold"
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

export default NursesHealthInsurance;