import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, Hard Hat } from 'lucide-react';
import SEO from '../../components/SEO';

function TradiesHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Tradies NZ 2025 | Tradespeople Coverage"
        description="Health insurance guide for New Zealand tradespeople and skilled workers. Compare plans, understand occupational risks, and find coverage for trade workers."
        keywords="health insurance tradies NZ, tradespeople health insurance, electrician plumber health cover, skilled worker insurance"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Wrench className="h-16 w-16 text-yellow-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance for Tradies</h1>
          </div>
          <p className="text-xl text-yellow-100 text-center max-w-3xl mx-auto">
            Specialized health insurance guidance for New Zealand tradespeople and skilled workers. Protection built for those who build New Zealand.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-yellow-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">350,000+</h3>
            <p className="text-gray-600">Skilled Tradies in NZ</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <AlertTriangle className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">High Risk</h3>
            <p className="text-gray-600">Injury-Prone Work</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Time = Money</h3>
            <p className="text-gray-600">Quick Recovery Essential</p>
          </div>
        </div>

        {/* Why Tradies Need Health Insurance */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Tradies Need Specialized Health Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                High-Risk Occupational Hazards
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Power tool and machinery accidents</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Falls from heights and scaffolding</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cuts, burns, and electrical injuries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Repetitive strain and back injuries</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                Professional & Financial Needs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Physical work requires quick recovery</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Time off work equals lost income</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Need fast access to physiotherapy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Many tradies are self-employed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trades Coverage by Specialty */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coverage by Trade Specialty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Electricians</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Electrical burn treatment</li>
                <li>• Eye injury from arc flash</li>
                <li>• Fall injury from working at height</li>
                <li>• Hand and arm injury coverage</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Plumbers</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Back injury from heavy lifting</li>
                <li>• Cuts from pipes and tools</li>
                <li>• Respiratory issues from confined spaces</li>
                <li>• Knee problems from crawling</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Builders</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Fall injuries and fractures</li>
                <li>• Power tool accidents</li>
                <li>• Repetitive strain injuries</li>
                <li>• Dust and asbestos exposure</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Tradies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance Plans for Tradies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing One</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $55/month</span>
                <span className="text-gray-600 text-sm block">Comprehensive tradie cover</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Unlimited surgical cover</li>
                <li>✓ Specialist consultations</li>
                <li>✓ Physiotherapy coverage</li>
                <li>✓ Fast-track appointments</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Tradie Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Ultimate Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $65/month</span>
                <span className="text-gray-600 text-sm block">Maximum protection</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Up to $600k surgical benefits</li>
                <li>✓ $300k non-surgical benefits</li>
                <li>✓ Accident & emergency cover</li>
                <li>✓ Rehabilitation support</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Get Tradie Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-200">
              <div className="flex items-center mb-4">
                <img src="/logos/PartnersLife_logo.png" alt="Partners Life" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Trades Package</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-bold text-gray-900">From $70/month</span>
                <span className="text-gray-600 text-sm block">Health + income protection</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Private medical cover</li>
                <li>✓ Trauma cover option</li>
                <li>✓ Income protection add-on</li>
                <li>✓ Tailored for trades</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-orange-600 text-white text-center py-2 rounded-lg hover:bg-orange-700">
                Get Tradie Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Tradie-Specific Benefits */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tradie-Specific Health Insurance Benefits</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Injury Treatment Priority</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fast-track orthopedic surgery</li>
                  <li>• Immediate physiotherapy access</li>
                  <li>• Hand and wrist specialist treatment</li>
                  <li>• Sports medicine for physical workers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Work-Life Balance Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mental health support for work stress</li>
                  <li>• Substance abuse treatment programs</li>
                  <li>• Sleep disorder treatment for shift workers</li>
                  <li>• Preventive health screenings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tax Benefits for Tradies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Deductions for Tradies</h2>
          <div className="bg-green-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Self-Employed Tradies</h3>
                <p className="text-gray-700 mb-4">
                  Self-employed tradespeople can claim health insurance premiums as tax-deductible business expenses.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• 100% deductible as business expense</li>
                  <li>• Include in annual tax return</li>
                  <li>• Keep detailed payment records</li>
                  <li>• Consider income protection add-ons</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Employed Tradies</h3>
                <p className="text-gray-700 mb-4">
                  Even employed tradies may have tax-deductible health expenses related to their occupation.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Work-related injury treatment</li>
                  <li>• Occupational health assessments</li>
                  <li>• Protective equipment-related health costs</li>
                  <li>• Consult with tax advisor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ for Tradies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Don't I have ACC coverage for work injuries?</h3>
              <p className="text-gray-700">
                ACC covers work-related accidents, but health insurance covers illnesses, pre-existing conditions, and
                provides faster access to private specialists and physiotherapy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I can't work due to injury?</h3>
              <p className="text-gray-700">
                Health insurance helps you recover faster, but consider adding income protection or trauma cover to
                protect your income if you can't work for extended periods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are there group discounts for trade businesses?</h3>
              <p className="text-gray-700">
                Many insurers offer group discounts for businesses with multiple employees. Check with trade associations
                and industry groups for special rates.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-yellow-600 to-orange-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Protect Your Body, Protect Your Livelihood</h2>
          <p className="text-yellow-100 mb-6">
            Compare health insurance plans designed for New Zealand tradespeople and skilled workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-yellow-700 rounded-lg hover:bg-yellow-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Tradie Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-yellow-700 font-semibold"
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

export default TradiesHealthInsurance;