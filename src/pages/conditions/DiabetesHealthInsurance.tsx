import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, TrendingUp } from 'lucide-react';
import SEO from '../../components/SEO';

function DiabetesHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Diabetes NZ 2025 | Diabetic Coverage Guide"
        description="Complete guide to health insurance for diabetes in New Zealand. Coverage options for Type 1 and Type 2 diabetes, complications, and ongoing care."
        keywords="health insurance diabetes NZ, diabetic health cover, Type 1 diabetes insurance, Type 2 diabetes coverage, insulin coverage"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Activity className="h-16 w-16 text-blue-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance for Diabetes</h1>
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Comprehensive coverage guide for diabetes management in New Zealand. Understanding your options for Type 1, Type 2, and complications.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">250,000+</h3>
            <p className="text-gray-600">Kiwis with Diabetes</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">5%</h3>
            <p className="text-gray-600">Of NZ Population</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">$2,000+</h3>
            <p className="text-gray-600">Annual Management Costs</p>
          </div>
        </div>

        {/* Diabetes Coverage Needs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Diabetics Need Health Insurance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                Ongoing Management Costs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular endocrinologist consultations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Continuous glucose monitoring devices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Insulin pumps and supplies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular blood tests and monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                Complication Prevention
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular eye examinations for retinopathy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Kidney function monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cardiovascular health screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Foot care and podiatry services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Type-Specific Coverage */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coverage by Diabetes Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Type 1 Diabetes</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Insulin therapy and delivery systems</li>
                <li>• Continuous glucose monitors (CGM)</li>
                <li>• Insulin pump supplies and maintenance</li>
                <li>• Emergency hypoglycemia treatment</li>
                <li>• Pediatric endocrinology (for children)</li>
              </ul>
              <div className="bg-blue-100 p-3 rounded text-sm">
                <strong>Key Note:</strong> Type 1 diabetes diagnosed before age 30 may have different coverage considerations.
              </div>
            </div>
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Type 2 Diabetes</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Oral medication coverage</li>
                <li>• Lifestyle intervention programs</li>
                <li>• Dietitian consultations</li>
                <li>• Blood glucose monitoring supplies</li>
                <li>• Weight management support</li>
              </ul>
              <div className="bg-teal-100 p-3 rounded text-sm">
                <strong>Key Note:</strong> Type 2 diabetes may be considered pre-existing if diagnosed before policy start.
              </div>
            </div>
          </div>
        </div>

        {/* Best Plans for Diabetics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Recommended Health Insurance for Diabetics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing Starter</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Basic Diabetic Support</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Specialist consultations covered</li>
                <li>✓ Diagnostic tests included</li>
                <li>✓ Emergency treatment coverage</li>
                <li>✓ Good for newly diagnosed</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Get Diabetes Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-teal-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Easy Health Plus</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Comprehensive Care</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Endocrinologist access</li>
                <li>✓ Advanced monitoring coverage</li>
                <li>✓ Complication screening</li>
                <li>✓ Pharmacy benefits included</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-teal-600 text-white text-center py-2 rounded-lg hover:bg-teal-700">
                Get Diabetes Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Premier Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Premium Diabetic Care</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Vitality wellness programs</li>
                <li>✓ Nutrition coaching included</li>
                <li>✓ Latest treatment options</li>
                <li>✓ Preventive care focus</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Diabetes Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Pre-existing Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Diabetes as a Pre-existing Condition</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What This Means</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Diabetes diagnosed before policy start is typically excluded</li>
                  <li>• Related complications may not be covered</li>
                  <li>• Some insurers offer modified coverage</li>
                  <li>• Future unrelated conditions may still be covered</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Look for insurers with diabetic-friendly policies</li>
                  <li>• Consider plans with shorter exclusion periods</li>
                  <li>• Explore group insurance through employers</li>
                  <li>• Focus on preventing complications early</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Management and Prevention */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Diabetes Management and Prevention Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Regular Monitoring</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• HbA1c testing every 3-6 months</li>
                <li>• Annual comprehensive eye exams</li>
                <li>• Kidney function tests</li>
                <li>• Cholesterol and blood pressure checks</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lifestyle Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Diabetes education programs</li>
                <li>• Dietitian consultations</li>
                <li>• Exercise physiology sessions</li>
                <li>• Mental health support</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology & Devices</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Continuous glucose monitors</li>
                <li>• Insulin pumps and supplies</li>
                <li>• Smart insulin pens</li>
                <li>• Mobile health apps</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I get health insurance if I already have diabetes?</h3>
              <p className="text-gray-700">
                Yes, you can get health insurance with diabetes, but your existing diabetes condition will likely be excluded as a pre-existing condition. You'll still be covered for other health issues that may arise in the future.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Will my insulin and medication be covered?</h3>
              <p className="text-gray-700">
                Coverage for diabetes medications depends on your specific policy and whether diabetes is considered a pre-existing condition. Many plans include pharmacy benefits, but you'll need to check what's specifically covered.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What about diabetes complications?</h3>
              <p className="text-gray-700">
                Complications related to pre-existing diabetes are typically excluded. However, if you develop diabetes after your policy starts, future complications would generally be covered after any waiting periods.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Find the Right Coverage for Your Diabetes Management</h2>
          <p className="text-blue-100 mb-6">
            Compare health insurance options that support your diabetes care and overall health needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Diabetes Coverage Quotes
            </Link>
            <Link
              to="/health-insurance-pre-existing-conditions-nz"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Pre-existing Conditions Guide
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DiabetesHealthInsurance;