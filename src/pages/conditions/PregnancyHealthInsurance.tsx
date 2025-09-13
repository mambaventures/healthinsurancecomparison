import React from 'react';
import { Link } from 'react-router-dom';
import { Baby, Shield, CheckCircle, AlertTriangle, Calculator, Users, ArrowRight, Clock, DollarSign, Heart } from 'lucide-react';
import SEO from '../../components/SEO';

function PregnancyHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Pregnancy NZ 2025 | Maternity Coverage Guide"
        description="Complete guide to pregnancy and maternity coverage in New Zealand health insurance. Birth, prenatal care, complications, and family planning covered."
        keywords="pregnancy health insurance NZ, maternity coverage, birth insurance, prenatal care, pregnancy complications cover"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Baby className="h-16 w-16 text-pink-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Pregnancy & Maternity Insurance</h1>
          </div>
          <p className="text-xl text-pink-100 text-center max-w-3xl mx-auto">
            Comprehensive guide to pregnancy coverage in New Zealand health insurance. Maternity care, birth options, and family planning support.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Users className="h-8 w-8 text-pink-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">60,000+</h3>
            <p className="text-gray-600">Births in NZ Annually</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">$15,000+</h3>
            <p className="text-gray-600">Private Birth Costs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">12 Months</h3>
            <p className="text-gray-600">Typical Waiting Period</p>
          </div>
        </div>

        {/* Why Pregnancy Coverage Matters */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Pregnancy Coverage is Important</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-500 mr-2" />
                Private Maternity Costs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private obstetrician care $8,000-12,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private hospital birth $3,000-8,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Caesarean section $15,000-25,000</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pregnancy complications $20,000+</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 text-blue-500 mr-2" />
                Benefits of Private Care
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Choice of obstetrician and hospital</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private room and enhanced comfort</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Flexible scheduling and appointments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Shorter wait times for procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pregnancy Coverage Stages */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coverage Throughout Your Pregnancy Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Prenatal Care</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Private obstetrician consultations</li>
                <li>• Specialist pregnancy scans</li>
                <li>• Genetic testing and screening</li>
                <li>• Prenatal classes and education</li>
                <li>• High-risk pregnancy management</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Birth & Delivery</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Private hospital delivery</li>
                <li>• Caesarean section if required</li>
                <li>• Epidural and pain management</li>
                <li>• Extended hospital stays</li>
                <li>• Emergency delivery procedures</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Postnatal Care</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Postnatal specialist consultations</li>
                <li>• Newborn pediatric care</li>
                <li>• Breastfeeding support services</li>
                <li>• Postnatal depression treatment</li>
                <li>• Family planning consultations</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Plans for Pregnancy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Health Insurance for Pregnancy Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-200">
              <div className="flex items-center mb-4">
                <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Wellbeing Two</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Comprehensive Maternity</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Full pregnancy and birth coverage</li>
                <li>✓ Private obstetrician access</li>
                <li>✓ Pregnancy complications covered</li>
                <li>✓ Newborn care included</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-pink-600 text-white text-center py-2 rounded-lg hover:bg-pink-700">
                Get Pregnancy Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-rose-200">
              <div className="flex items-center mb-4">
                <img src="/logos/nib.png" alt="nib" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Ultimate Health</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Premium Pregnancy Care</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Up to $600k surgical benefits</li>
                <li>✓ No excess on maternity claims</li>
                <li>✓ Private hospital choice</li>
                <li>✓ Specialist consultation cover</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-rose-600 text-white text-center py-2 rounded-lg hover:bg-rose-700">
                Get Pregnancy Quote
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-purple-200">
              <div className="flex items-center mb-4">
                <img src="/logos/AIA.png" alt="AIA" className="h-8 w-auto mr-3" />
                <h3 className="text-lg font-semibold">Premier Family</h3>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-gray-900">Family-Focused Care</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>✓ Pregnancy and childbirth cover</li>
                <li>✓ Vitality pregnancy programs</li>
                <li>✓ Mental health support included</li>
                <li>✓ Family wellness benefits</li>
              </ul>
              <Link to="/quotes" className="block w-full bg-purple-600 text-white text-center py-2 rounded-lg hover:bg-purple-700">
                Get Pregnancy Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Planning for Pregnancy */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Planning for Pregnancy Coverage</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Before Conception</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Apply for coverage at least 12 months before planning pregnancy</li>
                  <li>• Check waiting periods for maternity benefits</li>
                  <li>• Understand what's covered vs excluded</li>
                  <li>• Consider upgrading to comprehensive coverage</li>
                  <li>• Review pre-existing condition exclusions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">During Pregnancy</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Notify your insurer of pregnancy early</li>
                  <li>• Understand pre-authorization requirements</li>
                  <li>• Choose your preferred obstetrician and hospital</li>
                  <li>• Keep all receipts and documentation</li>
                  <li>• Know your emergency procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Pregnancy Complications Coverage */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coverage for Pregnancy Complications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Complications Covered</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Gestational diabetes management</li>
                <li>• Pre-eclampsia treatment</li>
                <li>• Premature labor and delivery</li>
                <li>• Placental complications</li>
                <li>• Multiple births (twins, triplets)</li>
                <li>• Emergency caesarean sections</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">NICU and Special Care</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Neonatal intensive care unit stays</li>
                <li>• Premature baby specialist care</li>
                <li>• Birth defect treatment</li>
                <li>• Extended hospital stays for baby</li>
                <li>• Pediatric specialist consultations</li>
                <li>• Medical equipment for newborns</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Waiting Periods and Exclusions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Important Coverage Considerations</h2>
          <div className="bg-orange-50 p-8 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Waiting Periods</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Standard maternity waiting period: 12 months</li>
                  <li>• No waiting for pregnancy complications once covered</li>
                  <li>• Switching policies may reset waiting periods</li>
                  <li>• Emergency pregnancy care may be covered immediately</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What May Not Be Covered</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Fertility treatments and IVF</li>
                  <li>• Pregnancy if conceived before policy start</li>
                  <li>• Elective procedures during pregnancy</li>
                  <li>• Some alternative birthing methods</li>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">When should I get pregnancy coverage?</h3>
              <p className="text-gray-700">
                It's best to get coverage at least 12 months before you plan to conceive, as most health insurance policies have a 12-month waiting period for maternity benefits. If you're already pregnant, the pregnancy won't be covered by a new policy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I have pregnancy complications?</h3>
              <p className="text-gray-700">
                Once your maternity waiting period is complete, pregnancy complications are typically covered in full, even if they result in significant medical costs. This includes emergency caesareans, premature births, and NICU care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Does my partner need separate coverage?</h3>
              <p className="text-gray-700">
                Yes, if your partner wants private healthcare coverage, they need their own policy. However, once your baby is born, you can add them to either parent's policy, usually within 30 days of birth without waiting periods.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Plan Ahead for Your Family's Future</h2>
          <p className="text-pink-100 mb-6">
            Get comprehensive pregnancy coverage to ensure you have choice and peace of mind during this special time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 bg-white text-pink-700 rounded-lg hover:bg-pink-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Get Pregnancy Coverage Quotes
            </Link>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-pink-600 font-semibold"
            >
              Compare Family Plans
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PregnancyHealthInsurance;