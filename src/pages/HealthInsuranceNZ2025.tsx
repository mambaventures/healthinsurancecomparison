import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, DollarSign, Calculator, CheckCircle, ArrowRight, TrendingDown, Users, Clock } from 'lucide-react';
import SEO from '../components/SEO';

function HealthInsuranceNZ2025() {
  return (
    <>
      <SEO
        title="Health Insurance NZ 2025: Complete Guide to New Zealand Health Insurance"
        description="Everything you need to know about health insurance in New Zealand for 2025. Compare all providers, understand costs, coverage options, and find the best plan for your needs."
        keywords="health insurance nz, health insurance new zealand, nz health insurance 2025, health cover nz, medical insurance nz"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-blue-200 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">Health Insurance NZ 2025</h1>
          </div>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto mb-8">
            The ultimate guide to health insurance in New Zealand. Compare providers, understand costs, and find the perfect coverage for you and your family.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Compare Plans Now
            </Link>
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Get Free Quotes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* October 2025 Market Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">October 2025: New Zealand Health Insurance Market</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Major Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$55+</div>
              <div className="text-gray-600">From per month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">30+</div>
              <div className="text-gray-600">Plan Options</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1.4M</div>
              <div className="text-gray-600">Kiwis Insured</div>
            </div>
          </div>
          <p className="text-gray-700">
            As of October 2025, approximately 1.4 million New Zealanders have private health insurance.
            With public healthcare wait times increasing and more providers offering competitive rates,
            now is an excellent time to compare your options.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jump to Section:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#providers" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <span className="text-sm font-semibold">Providers</span>
            </a>
            <a href="#costs" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <span className="text-sm font-semibold">Costs</span>
            </a>
            <a href="#coverage" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Shield className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <span className="text-sm font-semibold">Coverage</span>
            </a>
            <a href="#comparison" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow text-center">
              <Calculator className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <span className="text-sm font-semibold">Comparison</span>
            </a>
          </div>
        </div>

        {/* What is Health Insurance in NZ */}
        <div className="mb-12" id="basics">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Health Insurance in New Zealand?</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="text-lg mb-4">
              Health insurance in New Zealand is private medical coverage that complements our public healthcare system.
              While ACC covers accidents and the public system provides essential care, private health insurance offers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Clock className="h-6 w-6 text-blue-500 mr-2" />
                  Faster Access to Treatment
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Avoid public hospital wait lists (often 6-12 months)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Book specialist appointments within weeks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Choose your preferred hospital and surgeon</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-6 w-6 text-red-500 mr-2" />
                  Comprehensive Coverage
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Specialist consultations and diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Surgery and hospital stays (private hospitals)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cancer treatment and ongoing care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Major Providers */}
        <div className="mb-12" id="providers">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top Health Insurance Providers in NZ (2025)</h2>
          <div className="space-y-6">
            {/* Southern Cross */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Southern Cross</h3>
                  <p className="text-gray-600">New Zealand's largest health insurer - 60% market share</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">From $55/mo</div>
                  <div className="text-sm text-gray-600">Wellbeing One</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                As a not-for-profit organization, Southern Cross has been protecting Kiwis since 1961.
                With over 870,000 members, they offer the most comprehensive network of affiliated providers.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <div className="text-center p-3 bg-blue-50 rounded">
                  <div className="font-bold text-blue-600">870,000+</div>
                  <div className="text-xs text-gray-600">Members</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded">
                  <div className="font-bold text-blue-600">$600M+</div>
                  <div className="text-xs text-gray-600">Claims/Year</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded">
                  <div className="font-bold text-blue-600">Not-for-Profit</div>
                  <div className="text-xs text-gray-600">Structure</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded">
                  <div className="font-bold text-blue-600">62 Years</div>
                  <div className="text-xs text-gray-600">History</div>
                </div>
              </div>
              <Link to="/reviews/southern-cross" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                View Full Review <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* nib */}
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">nib</h3>
                  <p className="text-gray-600">Australian-owned with 180,000+ NZ members</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">From $65/mo</div>
                  <div className="text-sm text-gray-600">Ultimate Health</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                nib offers innovative digital-first health insurance with excellent value for money.
                Their plans include comprehensive surgical cover and everyday health benefits.
              </p>
              <Link to="/reviews/nib" className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold">
                View Full Review <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            {/* Quick links to other providers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/reviews/aia" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">AIA</h4>
                <p className="text-sm text-gray-600">Global insurer with flexible plans</p>
              </Link>
              <Link to="/reviews/partners-life" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Partners Life</h4>
                <p className="text-sm text-gray-600">NZ-owned specialist insurer</p>
              </Link>
              <Link to="/reviews/accuro" className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-gray-900 mb-2">Accuro</h4>
                <p className="text-sm text-gray-600">Affordable plans from $35/month</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Costs Section */}
        <div className="mb-12 bg-green-50 p-8 rounded-xl" id="costs">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Health Insurance Costs in NZ (October 2025)</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Average Monthly Premiums by Age:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-sm text-gray-600 mb-2">Ages 25-35</div>
                <div className="text-3xl font-bold text-green-600 mb-2">$60-$90</div>
                <div className="text-sm text-gray-700">per month (comprehensive cover)</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-sm text-gray-600 mb-2">Ages 36-50</div>
                <div className="text-3xl font-bold text-green-600 mb-2">$90-$150</div>
                <div className="text-sm text-gray-700">per month (comprehensive cover)</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="text-sm text-gray-600 mb-2">Ages 51-65</div>
                <div className="text-3xl font-bold text-green-600 mb-2">$150-$250</div>
                <div className="text-sm text-gray-700">per month (comprehensive cover)</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Factors:</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Age:</strong> Premiums increase by approximately 5-10% per year as you age</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Excess:</strong> Higher excess ($500-$1,000) = lower premiums (20-30% savings)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Coverage Level:</strong> Basic hospital-only plans from $35/month vs comprehensive plans $80-$200/month</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Pre-existing Conditions:</strong> May require waiting periods or exclusions (12-36 months typical)</span>
              </li>
            </ul>
          </div>

          <Link to="/health-insurance-cost-calculator-nz" className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold">
            <Calculator className="mr-2 w-5 h-5" />
            Calculate Your Premium
          </Link>
        </div>

        {/* Coverage Types */}
        <div className="mb-12" id="coverage">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Types of Health Insurance Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hospital Cover */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Hospital & Surgical Cover</h3>
              <p className="text-gray-700 mb-4">
                Covers private hospital treatment, surgery, and specialist consultations. This is the core of health insurance.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Surgical procedures (hip replacements, cataract surgery, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Private hospital accommodation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Specialist consultations</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600 font-semibold">From $55/month</div>
            </div>

            {/* Specialist Cover */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialist & Diagnostic Cover</h3>
              <p className="text-gray-700 mb-4">
                Coverage for specialist appointments, scans, and diagnostic tests outside of hospital admissions.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>MRI, CT, and ultrasound scans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Specialist consultations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Blood tests and pathology</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600 font-semibold">Add-on from $15/month</div>
            </div>

            {/* GP & Everyday Cover */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">GP & Everyday Health</h3>
              <p className="text-gray-700 mb-4">
                Coverage for day-to-day health expenses like GP visits, prescriptions, and dental checkups.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>GP appointments (up to $50-$70 per visit)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Prescription medications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dental checkups and optical</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600 font-semibold">Add-on from $10/month</div>
            </div>

            {/* Cancer Cover */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cancer Cover</h3>
              <p className="text-gray-700 mb-4">
                Specialized coverage for cancer diagnosis, treatment, and ongoing care including chemotherapy.
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Chemotherapy and radiation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Oncology specialist consultations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Cancer surgery and hospital stays</span>
                </li>
              </ul>
              <div className="text-sm text-gray-600 font-semibold">Included or add-on</div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-12 bg-gray-50 p-8 rounded-xl" id="comparison">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Comparison: Top NZ Health Insurance Plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Provider</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Plan</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">From</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Southern Cross</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Wellbeing One</td>
                  <td className="px-6 py-4 text-sm font-semibold text-blue-600">$55/mo</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Comprehensive cover, largest network</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">nib</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Ultimate Health</td>
                  <td className="px-6 py-4 text-sm font-semibold text-green-600">$65/mo</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Digital-first, excellent value</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">AIA</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Health Cover</td>
                  <td className="px-6 py-4 text-sm font-semibold text-purple-600">$70/mo</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Flexible plans, wellness rewards</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Partners Life</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Wellbeing</td>
                  <td className="px-6 py-4 text-sm font-semibold text-orange-600">$75/mo</td>
                  <td className="px-6 py-4 text-sm text-gray-700">NZ-owned, personalized service</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">Accuro</td>
                  <td className="px-6 py-4 text-sm text-gray-700">HealthCarePlus</td>
                  <td className="px-6 py-4 text-sm font-semibold text-teal-600">$35/mo</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Budget-friendly, basic cover</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link to="/compare" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold">
              <Calculator className="mr-2 w-5 h-5" />
              Compare All Plans in Detail
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do I need health insurance if I have ACC?</h3>
              <p className="text-gray-700">
                ACC covers accidents only. Health insurance covers illnesses, elective surgery, and conditions not covered by ACC.
                Most hospital admissions (like cancer treatment, hip replacements, or heart surgery) are NOT accident-related and require health insurance for private treatment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What about pre-existing conditions?</h3>
              <p className="text-gray-700">
                Most insurers will cover pre-existing conditions after a waiting period (typically 12-36 months). Some may exclude specific conditions permanently.
                It's best to get insured while you're healthy to avoid exclusions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I claim on both public and private insurance?</h3>
              <p className="text-gray-700">
                You can choose public or private treatment, but cannot claim for the same treatment from both. Private insurance pays for private hospital care,
                which typically has much shorter wait times (weeks vs. months or years for public).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens if I miss a payment?</h3>
              <p className="text-gray-700">
                Most insurers offer a 1-month grace period. If payment isn't received, your policy may lapse. Re-applying later could mean higher premiums,
                new waiting periods, or exclusions for any conditions that developed during the lapsed period.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Health Insurance Plan?</h2>
          <p className="text-blue-100 mb-6">
            Compare all major NZ providers in one place. Get instant quotes and find coverage that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 font-semibold"
            >
              <Calculator className="mr-2 w-5 h-5" />
              Compare Plans Now
            </Link>
            <Link
              to="/quotes"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 font-semibold"
            >
              Get Free Quotes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthInsuranceNZ2025;
