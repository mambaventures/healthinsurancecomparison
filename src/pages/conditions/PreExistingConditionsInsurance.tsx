import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, Info } from 'lucide-react';
import SEO from '../../components/SEO';

function PreExistingConditionsInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance with Pre-existing Conditions NZ 2025 | Coverage Guide"
        description="Complete guide to getting health insurance with pre-existing conditions in New Zealand. Options, exclusions, waiting periods, and coverage strategies."
        keywords="pre-existing conditions health insurance NZ, health insurance exclusions, medical conditions coverage, chronic illness insurance"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-16 w-16 text-orange-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Pre-existing Conditions Insurance</h1>
          </div>
          <p className="text-xl text-orange-100 text-center max-w-3xl mx-auto">
            Understanding health insurance options when you have pre-existing conditions. Coverage strategies, exclusions, and your rights in New Zealand.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">1.7 Million</h3>
            <p className="text-gray-600">Kiwis with Chronic Conditions</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">12 Months</h3>
            <p className="text-gray-600">Typical Exclusion Period</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Shield className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">Future Care</h3>
            <p className="text-gray-600">Often Still Covered</p>
          </div>
        </div>

        {/* Understanding Pre-existing Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What are Pre-existing Conditions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="h-6 w-6 text-blue-500 mr-2" />
                Definition & Scope
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Any condition diagnosed before policy start date</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Symptoms you've experienced but not yet diagnosed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Conditions you've had treatment for</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Ongoing medication or monitoring</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                Common Exclusions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Diabetes and related complications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Heart disease and cardiovascular conditions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cancer and previous malignancies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mental health conditions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Options with Pre-existing Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Insurance Options with Pre-existing Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Standard Policies with Exclusions</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Pre-existing conditions excluded permanently</li>
                <li>• Future unrelated conditions covered</li>
                <li>• Normal premiums for non-excluded coverage</li>
                <li>• Most common approach</li>
              </ul>
              <div className="bg-orange-100 p-3 rounded text-sm">
                <strong>Best for:</strong> People with well-managed conditions seeking protection for other health issues.
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Modified Coverage Plans</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• Limited coverage for pre-existing conditions</li>
                <li>• Higher premiums but some coverage</li>
                <li>• May cover complications or deterioration</li>
                <li>• Case-by-case assessment</li>
              </ul>
              <div className="bg-blue-100 p-3 rounded text-sm">
                <strong>Best for:</strong> Those seeking some coverage for their existing condition with higher budgets.
              </div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Group/Employer Plans</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-4">
                <li>• May offer guaranteed acceptance</li>
                <li>• Reduced or no exclusions</li>
                <li>• Group pricing benefits</li>
                <li>• Limited medical underwriting</li>
              </ul>
              <div className="bg-green-100 p-3 rounded text-sm">
                <strong>Best for:</strong> Employees with access to group health insurance benefits.
              </div>
            </div>
          </div>
        </div>

        {/* Strategies for Getting Coverage */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategies for Getting Coverage</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Diagnosis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apply for insurance before seeing specialists</li>
                  <li>• Don't delay if you suspect health issues</li>
                  <li>• Consider comprehensive coverage early</li>
                  <li>• Annual health checks can help with early detection</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">After Diagnosis</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Look for insurers with favorable pre-existing policies</li>
                  <li>• Consider guaranteed acceptance life insurance</li>
                  <li>• Explore group insurance options</li>
                  <li>• Focus on managing your condition well</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Top Insurers for Pre-existing Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Insurers with Pre-existing Condition Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-orange-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Modified Coverage</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Case-by-Case Assessment</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Individual underwriting review</li>
                <li>✓ May offer limited coverage</li>
                <li>✓ Specialist medical team assessment</li>
                <li>✓ Transparent exclusion policies</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-orange-600 text-white text-center py-2 rounded-lg hover:bg-orange-700">
                Explore Options
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-blue-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Simplified Underwriting</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Streamlined Process</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Digital application process</li>
                <li>✓ Clear exclusion guidelines</li>
                <li>✓ Fast approval decisions</li>
                <li>✓ Competitive pricing structure</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700">
                Explore Options
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-green-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellness Focus</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Vitality Programs</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Rewards for healthy lifestyle</li>
                <li>✓ Condition management support</li>
                <li>✓ Preventive care emphasis</li>
                <li>✓ Holistic health approach</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700">
                Explore Options
              </Link>
            </div>
          </div>
        </div>

        {/* Common Pre-existing Conditions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Specific Conditions are Typically Handled</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Usually Excluded</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Diabetes:</strong> Type 1 and Type 2, plus complications</li>
                <li>• <strong>Heart Disease:</strong> Previous heart attacks, angina, bypass surgery</li>
                <li>• <strong>Cancer:</strong> Previous malignancies and related treatments</li>
                <li>• <strong>Mental Health:</strong> Depression, anxiety, bipolar disorder</li>
                <li>• <strong>Autoimmune:</strong> Rheumatoid arthritis, lupus, MS</li>
                <li>• <strong>Kidney Disease:</strong> Chronic kidney problems</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">May Get Modified Coverage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Hypertension:</strong> Well-controlled high blood pressure</li>
                <li>• <strong>Asthma:</strong> Mild, well-managed cases</li>
                <li>• <strong>Previous Injuries:</strong> Fully recovered sports injuries</li>
                <li>• <strong>Skin Conditions:</strong> Eczema, psoriasis</li>
                <li>• <strong>Migraines:</strong> Occasional, controlled headaches</li>
                <li>• <strong>Sleep Apnea:</strong> Treated with CPAP</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rights and Protections */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights and Protections</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What Insurers Can Do</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Exclude pre-existing conditions permanently</li>
                  <li>• Charge higher premiums for increased risk</li>
                  <li>• Require medical examinations or reports</li>
                  <li>• Request full medical history disclosure</li>
                  <li>• Apply waiting periods for related conditions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What They Cannot Do</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Discriminate based on genetic testing results</li>
                  <li>• Cancel existing policies due to claims</li>
                  <li>• Change terms mid-policy without consent</li>
                  <li>• Refuse to explain exclusions clearly</li>
                  <li>• Apply exclusions to unrelated conditions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Making the Most of Limited Coverage */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maximizing Your Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Focus on Prevention</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Use covered preventive services</li>
                <li>• Manage existing conditions well</li>
                <li>• Get regular health screenings</li>
                <li>• Maintain healthy lifestyle</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Understand Your Policy</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Read exclusions carefully</li>
                <li>• Know what's covered vs excluded</li>
                <li>• Understand claims procedures</li>
                <li>• Keep detailed medical records</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan for the Future</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Consider life insurance options</li>
                <li>• Look into income protection</li>
                <li>• Build emergency medical fund</li>
                <li>• Review coverage annually</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I don't declare a pre-existing condition?</h3>
              <p className="text-gray-700">
                Failing to declare a pre-existing condition is considered fraud and can result in your policy being cancelled, claims being denied, and potential legal consequences. Always be completely honest in your application.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can exclusions ever be removed from my policy?</h3>
              <p className="text-gray-700">
                Generally, exclusions for pre-existing conditions are permanent. However, some insurers may reconsider after several years of being condition-free or may offer modified terms. It's worth discussing with your insurer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I still get insurance if my condition will be excluded?</h3>
              <p className="text-gray-700">
                Yes, insurance can still provide valuable protection for other health issues that may arise in the future. You'll be covered for any new, unrelated conditions that develop after your policy starts.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Find Coverage That Works for Your Situation</h2>
          <p className="text-orange-100 mb-6">
            Even with pre-existing conditions, you have options. Get quotes and compare what coverage is available to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-orange-700 rounded-lg hover:bg-orange-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Quotes with Pre-existing Conditions
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-orange-700 font-semibold"
            >
              Compare All Options
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreExistingConditionsInsurance;