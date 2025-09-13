import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, Activity } from 'lucide-react';
import SEO from '../../components/SEO';

function HeartConditionsInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Heart Conditions NZ 2025 | Cardiac Coverage Guide"
        description="Comprehensive guide to health insurance for heart conditions in New Zealand. Coverage for cardiac treatment, surgery, and ongoing heart health management."
        keywords="heart conditions insurance NZ, cardiac health cover, heart disease insurance, cardiovascular coverage, heart surgery insurance"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-pink-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-16 w-16 text-red-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Heart Conditions Insurance</h1>
          </div>
          <p className="text-xl text-red-100 text-center max-w-3xl mx-auto">
            Essential coverage for heart conditions in New Zealand. Cardiac care, surgery, and ongoing cardiovascular health management.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">180,000+</h3>
            <p className="text-gray-600">Kiwis with Heart Disease</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">$100,000+</h3>
            <p className="text-gray-600">Heart Surgery Costs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Activity className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">#1 Cause</h3>
            <p className="text-gray-600">Of Death in NZ</p>
          </div>
        </div>

        {/* Why Heart Coverage Matters */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Heart Condition Coverage is Critical</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                High Treatment Costs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bypass surgery $80,000-120,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Angioplasty procedures $25,000-40,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Heart valve replacement $120,000+</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cardiac rehabilitation $5,000-10,000</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                Urgency of Care
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Immediate access to cardiac specialists</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Avoid public system waiting times</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Choice of cardiac surgeon and facility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Latest cardiac treatment technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Heart Conditions Covered */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Heart Conditions and Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Coronary Artery Disease</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Angioplasty and stent procedures</li>
                <li>• Coronary bypass surgery</li>
                <li>• Cardiac catheterization</li>
                <li>• Stress testing and imaging</li>
                <li>• Preventive medication management</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Heart Rhythm Disorders</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Pacemaker implantation</li>
                <li>• Defibrillator procedures</li>
                <li>• Electrophysiology studies</li>
                <li>• Ablation procedures</li>
                <li>• Monitoring and follow-up care</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Structural Heart Disease</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Heart valve repair/replacement</li>
                <li>• Congenital heart defect repair</li>
                <li>• Heart transplant coverage</li>
                <li>• Aortic aneurysm repair</li>
                <li>• Minimally invasive procedures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Heart Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance for Heart Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-red-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing One</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Comprehensive Cardiac Care</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Unlimited cardiac surgery cover</li>
                <li>✓ Specialist cardiologist access</li>
                <li>✓ Emergency cardiac procedures</li>
                <li>✓ Cardiac rehabilitation included</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-red-600 text-white text-center py-2 rounded-lg hover:bg-red-700">
                Get Heart Coverage Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Ultimate Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Maximum Cardiac Protection</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Up to $600k surgical benefits</li>
                <li>✓ No annual limits on cardiac care</li>
                <li>✓ Advanced cardiac procedures</li>
                <li>✓ International treatment options</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-pink-600 text-white text-center py-2 rounded-lg hover:bg-pink-700">
                Get Heart Coverage Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Premier Care</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Heart Health Focus</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Cardiac specialist network</li>
                <li>✓ Vitality heart health programs</li>
                <li>✓ Preventive cardiac screening</li>
                <li>✓ Lifestyle modification support</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Heart Coverage Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Pre-existing Heart Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pre-existing Heart Conditions</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What This Means</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Existing heart conditions typically excluded from new policies</li>
                  <li>• Related complications and treatments not covered</li>
                  <li>• Some insurers offer modified coverage with exclusions</li>
                  <li>• Future unrelated conditions may still be covered</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Options</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apply before any cardiac diagnosis if possible</li>
                  <li>• Look for group insurance through employers</li>
                  <li>• Consider guaranteed acceptance life insurance</li>
                  <li>• Focus on preventing complications and maintaining heart health</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cardiac Prevention and Monitoring */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Preventive Cardiac Care Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Screening & Diagnostics</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Echocardiograms</li>
                <li>• Stress tests and cardiac imaging</li>
                <li>• Cholesterol and lipid panels</li>
                <li>• Blood pressure monitoring</li>
                <li>• Cardiac risk assessments</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lifestyle Management</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Cardiac dietitian consultations</li>
                <li>• Exercise physiology programs</li>
                <li>• Smoking cessation support</li>
                <li>• Weight management programs</li>
                <li>• Stress management therapy</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Medication Management</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Specialist cardiology consultations</li>
                <li>• Medication reviews and adjustments</li>
                <li>• Drug interaction monitoring</li>
                <li>• Compliance support programs</li>
                <li>• Regular follow-up appointments</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Cardiac Care */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Cardiac Care Coverage</h2>
          <div className="bg-red-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Procedures</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Emergency angioplasty and stenting</li>
                  <li>• Emergency bypass surgery</li>
                  <li>• Heart attack treatment and stabilization</li>
                  <li>• Emergency pacemaker implantation</li>
                  <li>• Cardiac arrest resuscitation and care</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Critical Care Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cardiac intensive care unit stays</li>
                  <li>• Advanced life support systems</li>
                  <li>• Emergency cardiac catheterization</li>
                  <li>• Balloon pump and mechanical support</li>
                  <li>• Emergency consultation services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I get coverage if I already have heart disease?</h3>
              <p className="text-gray-700">
                If you already have a diagnosed heart condition, it will likely be excluded as a pre-existing condition in new health insurance policies. However, you can still get coverage for other health issues and future unrelated conditions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I have a family history of heart disease?</h3>
              <p className="text-gray-700">
                Family history alone typically doesn't exclude you from coverage, but insurers may ask about it during underwriting. It's important to be honest about family medical history when applying for insurance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are emergency cardiac procedures covered immediately?</h3>
              <p className="text-gray-700">
                Most health insurance policies cover emergency cardiac procedures immediately or after a short waiting period (typically 24-48 hours), even if you have waiting periods for other conditions. This includes emergency angioplasty and bypass surgery.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-pink-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Protect Your Heart Health with Comprehensive Coverage</h2>
          <p className="text-red-100 mb-6">
            Get health insurance that covers cardiac care, emergency procedures, and ongoing heart health management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-red-700 rounded-lg hover:bg-red-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Heart Coverage Quotes
            </Link>
            <Link
              to="/health-insurance-pre-existing-conditions-nz"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-red-700 font-semibold"
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

export default HeartConditionsInsurance;