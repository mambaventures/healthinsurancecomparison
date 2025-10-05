import React from 'react';
import { Calendar, Clock, ArrowLeft, GraduationCap, Shield, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function StudentHealthInsurance() {
  return (
    <>
      <SEO
        title="Student Health Insurance NZ 2025 - Best Plans for International Students"
        description="Complete guide to health insurance for students in New Zealand. Compare affordable plans, understand requirements, and find the best coverage for your studies."
        canonicalUrl="https://healthinsurancecomparison.co.nz/blog/student-health-insurance-nz"
        keywords={[
          'student health insurance nz',
          'student insurance new zealand',
          'international student health insurance nz',
          'cheap student health insurance',
          'university health insurance nz',
          'student health cover new zealand'
        ]}
        publishedDate="2025-08-24"
        modifiedDate="2025-08-24"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Student Health Insurance NZ 2025 - Best Plans for International Students",
          "description": "Complete guide to health insurance for students in New Zealand",
          "image": "https://healthinsurancecomparison.co.nz/images/blog/student-health-insurance.jpg",
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
            Student Health Insurance NZ 2025: Complete Guide for International Students
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>August 24, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>7 min read</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <GraduationCap className="flex-shrink-0 h-5 w-5 text-blue-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-blue-700">
                  <strong>Quick Tip:</strong> International students in NZ can get private health insurance from $30-70/month. 
                  Some student visas require proof of health insurance, while others recommend it as essential protection.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>Do International Students Need Health Insurance in NZ?</h2>
          
          <p>
            While health insurance isn't always mandatory for international students in New Zealand, 
            it's highly recommended and sometimes required depending on your course length and visa type. 
            Here's what you need to know:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✓ When It's Required</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Courses longer than 2 years</li>
                <li>• Some scholarship programs</li>
                <li>• Specific university requirements</li>
                <li>• Exchange programs</li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠ When It's Recommended</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• All international students</li>
                <li>• Limited public healthcare access</li>
                <li>• Accident coverage gaps</li>
                <li>• Peace of mind</li>
              </ul>
            </div>
          </div>

          <h2>Student Health Insurance Requirements by Institution</h2>

          <div className="space-y-4 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">University of Auckland</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Mandatory for students &gt;6 months</li>
                    <li>• Minimum $100,000 cover</li>
                    <li>• Must include repatriation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recommended Providers:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Southern Cross</li>
                    <li>• Studentsafe</li>
                    <li>• Unicare</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Victoria University of Wellington</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Requirements:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Recommended for all international students</li>
                    <li>• Comprehensive coverage preferred</li>
                    <li>• Emergency evacuation included</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Student Services:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Insurance advice available</li>
                    <li>• Group discount schemes</li>
                    <li>• Claim support services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Best Health Insurance Plans for Students</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-blue-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Budget Student Plans</h3>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-blue-600">$30-50</div>
                <div className="text-sm text-gray-600">per month</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ Basic hospital cover</li>
                <li>✓ Emergency treatment</li>
                <li>✓ Prescription medications</li>
                <li>✓ GP visits (limited)</li>
                <li>✗ Dental coverage</li>
                <li>✗ Optical coverage</li>
              </ul>
              <div className="mt-4">
                <strong className="text-sm">Best for:</strong>
                <p className="text-sm text-gray-600">Short-term students, tight budgets</p>
              </div>
            </div>

            <div className="border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">Comprehensive Student Plans</h3>
              </div>
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-green-600">$70-120</div>
                <div className="text-sm text-gray-600">per month</div>
              </div>
              <ul className="space-y-2 text-sm">
                <li>✓ Hospital & surgical cover</li>
                <li>✓ Unlimited GP visits</li>
                <li>✓ Prescription medications</li>
                <li>✓ Basic dental ($500-1000)</li>
                <li>✓ Optical coverage ($300-500)</li>
                <li>✓ Physiotherapy</li>
              </ul>
              <div className="mt-4">
                <strong className="text-sm">Best for:</strong>
                <p className="text-sm text-gray-600">Long-term students, comprehensive needs</p>
              </div>
            </div>
          </div>

          <h2>Top Providers for Student Health Insurance</h2>

          <div className="space-y-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Link to="/reviews/southern-cross" className="text-xl font-semibold text-blue-600 hover:text-blue-800">Southern Cross Health Society →</Link>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Recommended</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Pros:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Student-specific plans</li>
                    <li>✓ University partnerships</li>
                    <li>✓ Largest provider network</li>
                    <li>✓ 24/7 support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Student Plans:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Basic Student Plan: $45/month</li>
                    <li>• Comprehensive: $85/month</li>
                    <li>• Group discounts available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Special Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Mental health support</li>
                    <li>• Travel coverage</li>
                    <li>• Online claims portal</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <Link to="/reviews/nib" className="text-xl font-semibold text-blue-600 hover:text-blue-800">nib Health Insurance →</Link>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Budget-Friendly</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Pros:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Competitive pricing</li>
                    <li>✓ Flexible coverage options</li>
                    <li>✓ Quick online quotes</li>
                    <li>✓ No lock-in contracts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Student Plans:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Essential Plan: $35/month</li>
                    <li>• Complete Cover: $75/month</li>
                    <li>• Student discounts: 10%</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Best For:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Budget-conscious students</li>
                    <li>• Short-term courses</li>
                    <li>• Young healthy students</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <p className="text-blue-900">
              Looking for student-specific health insurance options? Check out our comprehensive
              {' '}<Link to="/students-health-insurance" className="text-blue-600 hover:text-blue-800 font-semibold underline">student health insurance comparison page</Link>{' '}
              to compare affordable plans, discounts, and find the best coverage for your budget.
            </p>
          </div>

          <h2>How to Choose the Right Student Health Insurance</h2>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">Key Factors to Consider</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <DollarSign className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Budget:</strong>
                    <p className="text-sm text-gray-600">Balance premium costs with coverage needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Course Duration:</strong>
                    <p className="text-sm text-gray-600">Longer courses may qualify for better rates</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Coverage Level:</strong>
                    <p className="text-sm text-gray-600">Consider hospital, extras, and emergency cover</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <GraduationCap className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
                  <div>
                    <strong>University Requirements:</strong>
                    <p className="text-sm text-gray-600">Check your institution's specific requirements</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Health Needs:</strong>
                    <p className="text-sm text-gray-600">Consider pre-existing conditions and regular medications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                  <div>
                    <strong>Network Access:</strong>
                    <p className="text-sm text-gray-600">Ensure providers are available near your campus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>Money-Saving Tips for Students</h2>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-4">Top Ways to Save on Student Health Insurance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span className="text-sm"><strong>Student Discounts:</strong> Ask about education discounts (5-15% off)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span className="text-sm"><strong>Annual Payment:</strong> Pay yearly to avoid monthly fees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span className="text-sm"><strong>Group Plans:</strong> Join university group insurance schemes</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span className="text-sm"><strong>Compare Providers:</strong> Prices can vary by 40%+ between insurers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span className="text-sm"><strong>Higher Excess:</strong> Increase excess to lower premiums</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                  <span className="text-sm"><strong>Basic Cover:</strong> Start with essentials, upgrade later if needed</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>Application Process for Students</h2>

          <div className="bg-blue-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">How to Apply for Student Health Insurance</h3>
            <div className="space-y-4">
              <div className="flex">
                <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm mr-4 flex-shrink-0">1</span>
                <div>
                  <strong>Gather Documents:</strong>
                  <p className="text-sm text-gray-600 mt-1">Student visa, enrollment letter, passport, NZ address</p>
                </div>
              </div>
              <div className="flex">
                <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm mr-4 flex-shrink-0">2</span>
                <div>
                  <strong>Compare Plans:</strong>
                  <p className="text-sm text-gray-600 mt-1">Use our comparison tool to find student-friendly options</p>
                </div>
              </div>
              <div className="flex">
                <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm mr-4 flex-shrink-0">3</span>
                <div>
                  <strong>Apply Online:</strong>
                  <p className="text-sm text-gray-600 mt-1">Most providers offer instant online quotes and applications</p>
                </div>
              </div>
              <div className="flex">
                <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm mr-4 flex-shrink-0">4</span>
                <div>
                  <strong>Get Confirmation:</strong>
                  <p className="text-sm text-gray-600 mt-1">Provide proof to your university if required</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Ready to Find Student Health Insurance?</h3>
            <p className="text-blue-700 mb-4">
              Compare health insurance plans designed for students in New Zealand. 
              Get quotes from multiple providers and find affordable coverage that meets your university requirements.
            </p>
            <Link 
              to="/quotes" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Compare Student Plans
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default StudentHealthInsurance;