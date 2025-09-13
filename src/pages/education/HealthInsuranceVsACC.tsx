import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Briefcase, CheckCircle, X, ArrowRight, Calculator, Users, Clock, AlertTriangle } from 'lucide-react';
import SEO from '../../components/SEO';

function HealthInsuranceVsACC() {
  return (
    <>
      <SEO
        title="Health Insurance vs ACC NZ 2025 | Complete Coverage Comparison"
        description="Comprehensive guide comparing health insurance and ACC in New Zealand. Understand coverage gaps, benefits, and why you might need both for complete protection."
        keywords="health insurance vs ACC NZ, ACC coverage, private health insurance comparison, medical insurance ACC difference"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center">
              <Shield className="h-12 w-12 text-blue-200 mr-3" />
              <span className="text-4xl font-bold">vs</span>
              <Briefcase className="h-12 w-12 text-green-200 ml-3" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Health Insurance vs ACC</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Understanding the differences between New Zealand's ACC scheme and private health insurance. Why you might need both for complete coverage.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Overview */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">ACC vs Health Insurance: Quick Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">ACC (Accident Compensation Corporation)</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Covers accidents and injuries only</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Government-funded, no premiums</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Income compensation available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Rehabilitation and support</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Health Insurance</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Covers illness, disease, and elective procedures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private insurance with premiums</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private healthcare access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Choice of specialists and timing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Detailed Coverage Comparison</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Coverage Area</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">ACC</th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">Health Insurance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Accidents & Injuries</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-500 block">If not ACC-covered</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Illness & Disease</td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Cancer Treatment</td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Heart Disease</td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Elective Surgery</td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Mental Health</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-500 block">If accident-related</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Income Replacement</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      <span className="text-xs text-gray-500 block">80% of earnings</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                      <span className="text-xs text-gray-500 block">Separate policy needed</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Private Hospital Choice</td>
                    <td className="px-6 py-4 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* What ACC Covers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What ACC Covers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                Covered Accidents
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Workplace accidents and injuries</li>
                <li>• Motor vehicle accidents</li>
                <li>• Sports and recreational injuries</li>
                <li>• Home accidents (falls, cuts, burns)</li>
                <li>• Assault and criminal injuries</li>
                <li>• Medical misadventure (treatment injuries)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                ACC Benefits
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Medical treatment and rehabilitation</li>
                <li>• Weekly compensation (80% of earnings)</li>
                <li>• Vocational rehabilitation</li>
                <li>• Attendant care services</li>
                <li>• Home and vehicle modifications</li>
                <li>• Lump sum payments for permanent impairment</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Coverage Gaps */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coverage Gaps: Where You Need Health Insurance</h2>
          <div className="bg-red-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                  What ACC Doesn't Cover
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cancer and oncology treatment</li>
                  <li>• Heart disease and cardiovascular conditions</li>
                  <li>• Diabetes and metabolic disorders</li>
                  <li>• Mental health issues (unless accident-related)</li>
                  <li>• Pregnancy and maternity care</li>
                  <li>• Elective and cosmetic surgery</li>
                  <li>• Chronic illness management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-blue-500 mr-2" />
                  Why Health Insurance Matters
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Faster access to specialist care</li>
                  <li>• Private hospital treatment</li>
                  <li>• Choice of doctors and timing</li>
                  <li>• Latest medical treatments and technology</li>
                  <li>• Preventive health screenings</li>
                  <li>• Reduced waiting times</li>
                  <li>• Enhanced comfort and privacy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Scenarios */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Coverage Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario 1: Car Accident</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm"><strong>ACC:</strong> Covers all treatment, rehab, and income</span>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm"><strong>Health Insurance:</strong> May provide private room and faster surgery</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario 2: Cancer Diagnosis</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <X className="h-4 w-4 text-red-500 mr-2" />
                  <span className="text-sm"><strong>ACC:</strong> No coverage (not an accident)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm"><strong>Health Insurance:</strong> Full treatment coverage</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Scenario 3: Knee Surgery</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm"><strong>ACC:</strong> Only if injury-related</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm"><strong>Health Insurance:</strong> Covers elective procedures</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Myths vs Reality */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Myths About ACC and Health Insurance</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-red-600">❌ Myth: "ACC covers everything medical"</h3>
              <p className="text-gray-700">
                <strong>Reality:</strong> ACC only covers accidents and injuries. It doesn't cover illness, disease, or elective procedures. Most health conditions are not accident-related.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-red-600">❌ Myth: "I don't need health insurance if I have ACC"</h3>
              <p className="text-gray-700">
                <strong>Reality:</strong> ACC and health insurance serve different purposes. You need both for comprehensive protection against accidents AND illness.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-red-600">❌ Myth: "The public health system covers what ACC doesn't"</h3>
              <p className="text-gray-700">
                <strong>Reality:</strong> While the public system provides basic coverage, you may face long waiting times and limited choice. Health insurance provides faster, private care.
              </p>
            </div>
          </div>
        </div>

        {/* Decision Framework */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Do You Need Both ACC and Health Insurance?</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">The Answer: Yes, Here's Why</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">ACC Handles:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Work injuries and compensation</li>
                  <li>• Car accident treatment</li>
                  <li>• Sports injury rehabilitation</li>
                  <li>• Home accident care</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Health Insurance Handles:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cancer and chronic disease</li>
                  <li>• Heart conditions and surgery</li>
                  <li>• Elective procedures</li>
                  <li>• Private specialist care</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-700 font-medium">Together, they provide comprehensive protection for all health scenarios.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Complete Your Health Protection</h2>
          <p className="text-blue-100 mb-6">
            While ACC provides excellent accident coverage, health insurance fills the gaps for illness and disease. Get quotes to complete your protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Health Insurance Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Compare Health Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsuranceVsACC;