import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Shield, DollarSign, Users, CheckCircle, Star, ArrowRight, Calculator, Heart, AlertTriangle } from 'lucide-react';
import SEO from '../../components/SEO';

function StudentsHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Students NZ - Student Discounts & Affordable Plans 2025"
        description="Affordable health insurance for students in New Zealand. Compare student-friendly plans, discounts, university requirements and find the best coverage for your budget."
        canonicalUrl="https://healthinsurancecomparison.co.nz/students-health-insurance"
        keywords={[
          'health insurance for students nz',
          'student health insurance new zealand',
          'cheap health insurance students',
          'student discount health insurance',
          'university health insurance nz'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Health Insurance for Students NZ",
          "description": "Affordable health insurance options for students in New Zealand",
          "audience": {
            "@type": "Audience",
            "audienceType": "Students",
            "geographicArea": {
              "@type": "Country",
              "name": "New Zealand"
            }
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Student Health Insurance",
            "serviceType": "Health Insurance for Students",
            "provider": {
              "@type": "Organization",
              "name": "Health Insurance Comparison NZ"
            }
          }
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <GraduationCap className="w-16 h-16 text-green-200" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Health Insurance for Students
              </h1>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Affordable health insurance plans designed specifically for New Zealand students. 
                Compare prices, find discounts, and get covered from just $25/month.
              </p>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-200">$25</div>
                    <div className="text-sm text-green-100">From per month</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-200">6</div>
                    <div className="text-sm text-green-100">Student-friendly providers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-200">24/7</div>
                    <div className="text-sm text-green-100">Online support</div>
                  </div>
                </div>
              </div>

              <Link
                to="/quotes"
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Get Student Quotes Now
              </Link>
              
              <p className="text-green-200 text-sm mt-4">
                ✓ Student discounts available ✓ University-approved plans ✓ No obligation quotes
              </p>
            </div>
          </div>
        </section>

        {/* Why Students Need Health Insurance */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Students Need Health Insurance
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                University life brings new challenges and risks. Stay protected with affordable health insurance tailored for students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Sports Injuries</h3>
                <p className="text-gray-600">
                  University sports and activities increase injury risk. Get covered for physiotherapy, x-rays, and specialist treatment.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mental Health Support</h3>
                <p className="text-gray-600">
                  University stress can impact mental health. Access counselling and psychology services when you need them.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Emergency Treatment</h3>
                <p className="text-gray-600">
                  Accidents happen. Avoid expensive emergency room bills and get private treatment when you need it most.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Student-Friendly Providers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Best Health Insurance for Students
              </h2>
              <p className="text-gray-600 text-lg">
                Compare student-friendly health insurance providers and find the perfect plan for your needs and budget.
              </p>
              <div className="mt-4">
                <Link to="/blog/student-health-insurance-nz" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  📚 Read our complete guide: Student Health Insurance NZ 2025
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* nib - Best Value */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Shield className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">nib Health Insurance</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">4.4/5 Student Rating</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Best Value
                    </div>
                    <div className="text-sm text-gray-600 mt-1">From $28/month</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Student Benefits:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ 15% student discount available</li>
                      <li>✓ Mental health coverage included</li>
                      <li>✓ Sports injury coverage</li>
                      <li>✓ Online GP consultations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Features:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Easy online application</li>
                      <li>• Mobile app for claims</li>
                      <li>• No annual limits on basics</li>
                      <li>• Fast approval process</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link to="/reviews/nib" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read Student Reviews →
                  </Link>
                  <Link to="/quotes" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium">
                    Get Quote
                  </Link>
                </div>
              </div>

              {/* Southern Cross - Most Comprehensive */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Shield className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">Southern Cross</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">4.2/5 Student Rating</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                    <div className="text-sm text-gray-600 mt-1">From $35/month</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Student Benefits:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ University-approved plans</li>
                      <li>✓ Largest provider network</li>
                      <li>✓ Student wellness programs</li>
                      <li>✓ 24/7 health helpline</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Features:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Fastest claims processing</li>
                      <li>• No excess for under 25s</li>
                      <li>• Comprehensive coverage</li>
                      <li>• Student support team</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link to="/reviews/southern-cross" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read Student Reviews →
                  </Link>
                  <Link to="/quotes" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* University Requirements */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                University Health Insurance Requirements
              </h2>
              <p className="text-gray-600 text-lg">
                Some universities and programs require health insurance. Check your institution's requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">International Students</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Most universities require comprehensive cover</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Student visa may require insurance proof</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Cover must last full study period</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Medical Programs</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Medical and nursing students often need insurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Clinical placements may require coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Professional indemnity often included</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3">Sports Scholarships</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Sports scholarship recipients need coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Enhanced sports injury coverage required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                    <span>Physiotherapy coverage essential</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Students Can Save Money
              </h2>
              <p className="text-gray-600 text-lg">
                Smart strategies to reduce your health insurance costs while studying.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Student Discounts</h3>
                <p className="text-sm text-gray-600">Up to 15% off with valid student ID</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Group Plans</h3>
                <p className="text-sm text-gray-600">Join with flatmates for better rates</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Calculator className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Higher Excess</h3>
                <p className="text-sm text-gray-600">Choose higher excess for lower premiums</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Basic Cover</h3>
                <p className="text-sm text-gray-600">Start with hospital-only coverage</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Student Health Insurance?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Compare plans from all major providers and find the best coverage for your student budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quotes"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Get Student Quotes
              </Link>
              <Link
                to="/blog/student-health-insurance-nz"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-green-700 transition-colors"
              >
                Student Guide
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            <p className="text-green-200 text-sm mt-6">
              ✓ Instant quotes ✓ Student discounts ✓ University-approved plans ✓ No obligation
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default StudentsHealthInsurance;