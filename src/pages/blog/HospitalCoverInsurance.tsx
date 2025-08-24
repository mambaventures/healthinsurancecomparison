import React from 'react';
import { Calendar, Clock, ArrowLeft, Heart, Shield, Users, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function HospitalCoverInsurance() {
  return (
    <>
      <SEO
        title="Hospital Cover Insurance NZ 2025 - Complete Guide to Private Hospital Plans"
        description="Everything you need to know about hospital cover insurance in New Zealand. Compare private hospital plans, costs, benefits, and find the best coverage for your needs."
        canonicalUrl="https://healthinsurancecomparison.co.nz/blog/hospital-cover-insurance-nz"
        keywords={[
          'hospital cover insurance nz',
          'hospital cover insurance',
          'private hospital insurance nz',
          'hospital only insurance nz',
          'surgical cover insurance',
          'hospital treatment insurance'
        ]}
        publishedDate="2025-08-24"
        modifiedDate="2025-08-24"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Hospital Cover Insurance NZ 2025 - Complete Guide to Private Hospital Plans",
          "description": "Everything you need to know about hospital cover insurance in New Zealand",
          "image": "https://healthinsurancecomparison.co.nz/images/blog/hospital-cover-insurance.jpg",
          "author": {
            "@type": "Organization",
            "name": "Health Insurance Comparison NZ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Health Insurance Comparison NZ"
          },
          "datePublished": "2025-08-24",
          "dateModified": "2025-08-24"
        }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hospital Cover Insurance NZ: Complete Guide to Private Hospital Plans 2025
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>August 24, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>9 min read</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <Heart className="flex-shrink-0 h-5 w-5 text-blue-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-blue-700">
                  <strong>Key Takeaway:</strong> Hospital cover insurance provides coverage for private hospital treatment, surgery, and specialist care. Basic plans start from $25/month, while comprehensive hospital cover ranges from $60-120/month depending on your age and coverage level.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>What is Hospital Cover Insurance?</h2>
          
          <p>
            Hospital cover insurance is a type of health insurance that specifically covers the costs of private hospital 
            treatment in New Zealand. Unlike comprehensive health insurance, hospital cover focuses solely on inpatient 
            care, surgery, and hospital-based treatments.
          </p>

          <p>
            This type of insurance is ideal if you want to avoid long waiting times for non-emergency procedures in 
            the public system while keeping your premiums lower than full comprehensive cover.
          </p>

          <h2>What Does Hospital Cover Include?</h2>

          <div className="bg-green-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">✓ Typically Covered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Private hospital accommodation</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Surgical procedures</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Specialist consultations (in hospital)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Theatre and anesthetic costs</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Medical imaging (MRI, CT scans)</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Pathology tests</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Prostheses and medical devices</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-600 mr-2" />Emergency hospital treatment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-red-800 mb-4">✗ Not Typically Covered</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-600 mr-2" />GP visits</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-600 mr-2" />Outpatient specialist visits</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-600 mr-2" />Dental care</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-600 mr-2" />Optical services</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-600 mr-2" />Physiotherapy (outpatient)</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-600 mr-2" />Prescription medications</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-600 mr-2" />Mental health counseling</li>
                  <li className="flex items-center"><AlertTriangle className="w-4 h-4 text-red-600 mr-2" />Alternative therapies</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Types of Hospital Cover Plans</h2>

          <div className="space-y-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Basic Hospital Cover</h3>
                <span className="ml-auto bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">$25-45/month</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Includes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Public hospital private room upgrade</li>
                    <li>✓ Basic surgical procedures</li>
                    <li>✓ Emergency treatment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Best for:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Young, healthy individuals</li>
                    <li>• Budget-conscious buyers</li>
                    <li>• First-time insurance buyers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Standard Hospital Cover</h3>
                <span className="ml-auto bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">$60-90/month</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Includes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Private hospital access</li>
                    <li>✓ Wide range of surgical procedures</li>
                    <li>✓ Cancer treatment coverage</li>
                    <li>✓ Cardiac procedures</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Best for:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Most common choice</li>
                    <li>• Those with chronic conditions</li>
                    <li>• Families</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Premium Hospital Cover</h3>
                <span className="ml-auto bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full">$120-200/month</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Includes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ All surgical procedures covered</li>
                    <li>✓ No annual or lifetime limits</li>
                    <li>✓ Choice of specialist</li>
                    <li>✓ Premium private hospitals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Best for:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• High earners</li>
                    <li>• Those wanting maximum choice</li>
                    <li>• Pre-existing condition coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Major Providers of Hospital Cover</h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Provider</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Basic Plan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Standard Plan</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">Southern Cross</td>
                  <td className="px-4 py-3 text-sm">$35/month</td>
                  <td className="px-4 py-3 text-sm">$75/month</td>
                  <td className="px-4 py-3 text-sm">Largest network, fastest claims</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">nib</td>
                  <td className="px-4 py-3 text-sm">$30/month</td>
                  <td className="px-4 py-3 text-sm">$65/month</td>
                  <td className="px-4 py-3 text-sm">Competitive pricing, online tools</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Accuro</td>
                  <td className="px-4 py-3 text-sm">$28/month</td>
                  <td className="px-4 py-3 text-sm">$62/month</td>
                  <td className="px-4 py-3 text-sm">NZ-owned, personal service</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">AIA</td>
                  <td className="px-4 py-3 text-sm">$32/month</td>
                  <td className="px-4 py-3 text-sm">$68/month</td>
                  <td className="px-4 py-3 text-sm">Wellness programs, global coverage</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Is Hospital Cover Right for You?</h2>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">Hospital Cover is Ideal If:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-green-600 mb-2">✓ Good Fit</h4>
                <ul className="space-y-2 text-sm">
                  <li>• You want to avoid public hospital waiting lists</li>
                  <li>• You prefer private rooms and choice of timing</li>
                  <li>• You don't need extras coverage</li>
                  <li>• You want lower premiums than comprehensive plans</li>
                  <li>• You're planning surgery or procedures</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-orange-600 mb-2">⚠ Consider Alternatives If</h4>
                <ul className="space-y-2 text-sm">
                  <li>• You need GP visits and everyday healthcare</li>
                  <li>• You want dental and optical coverage</li>
                  <li>• You prefer comprehensive coverage</li>
                  <li>• You rarely need hospital treatment</li>
                  <li>• You're happy with public healthcare</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>How to Choose Hospital Cover</h2>

          <div className="space-y-4 my-8">
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm mr-4 mt-1">1</span>
              <div>
                <strong>Assess Your Risk:</strong> Consider your age, health status, and family medical history
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm mr-4 mt-1">2</span>
              <div>
                <strong>Set Your Budget:</strong> Determine how much you can afford monthly for premiums
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm mr-4 mt-1">3</span>
              <div>
                <strong>Compare Coverage:</strong> Look at waiting periods, exclusions, and annual limits
              </div>
            </div>
            <div className="flex items-start">
              <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm mr-4 mt-1">4</span>
              <div>
                <strong>Check Provider Networks:</strong> Ensure your preferred hospitals and specialists are covered
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Ready to Compare Hospital Cover Plans?</h3>
            <p className="text-blue-700 mb-4">
              Get personalized quotes from New Zealand's top hospital cover providers. 
              Compare coverage options, premiums, and find the best hospital insurance for your needs.
            </p>
            <Link 
              to="/quotes" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Hospital Cover Quotes
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default HospitalCoverInsurance;