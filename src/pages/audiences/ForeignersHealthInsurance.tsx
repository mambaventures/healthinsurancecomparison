import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Shield, Users, CheckCircle, Star, ArrowRight, Calculator, FileText, AlertCircle, Clock } from 'lucide-react';
import SEO from '../../components/SEO';

function ForeignersHealthInsurance() {
  return (
    <>
      <SEO
        title="Health Insurance for Foreigners in New Zealand - Expat & Visitor Coverage 2025"
        description="Health insurance for foreigners, expats and visitors in New Zealand. Compare providers, visa requirements, and find affordable coverage for non-residents."
        canonicalUrl="https://healthinsurancecomparison.co.nz/foreigners-health-insurance"
        keywords={[
          'health insurance for foreigners nz',
          'expat health insurance new zealand',
          'visitor health insurance nz',
          'non resident health insurance',
          'foreigner medical insurance nz'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Health Insurance for Foreigners in New Zealand",
          "description": "Health insurance coverage options for foreigners, expats and visitors in New Zealand",
          "audience": {
            "@type": "Audience",
            "audienceType": "Foreign Nationals",
            "geographicArea": {
              "@type": "Country",
              "name": "New Zealand"
            }
          },
          "mainEntity": {
            "@type": "Service",
            "name": "Health Insurance for Foreigners",
            "serviceType": "International Health Insurance",
            "provider": {
              "@type": "Organization",
              "name": "Health Insurance Comparison NZ"
            }
          }
        }}
      />
      
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Globe className="w-16 h-16 text-blue-200" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Health Insurance for Foreigners in New Zealand
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Comprehensive health insurance coverage for expats, visitors, and foreign residents. 
                Get protected with plans designed specifically for non-New Zealand citizens.
              </p>
              
              <div className="bg-white/10 rounded-lg p-6 mb-8 inline-block">
                <div className="flex items-center justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-200">6+</div>
                    <div className="text-sm text-blue-100">Visa types covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-200">95%</div>
                    <div className="text-sm text-blue-100">Applications approved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-200">48hr</div>
                    <div className="text-sm text-blue-100">Fast approval</div>
                  </div>
                </div>
              </div>

              <Link
                to="/quotes"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Get Foreigner Quotes
              </Link>
              
              <p className="text-blue-200 text-sm mt-4">
                ✓ All visa types welcome ✓ No residency requirement ✓ Instant online quotes
              </p>
            </div>
          </div>
        </section>

        {/* Visa Status Eligibility */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Eligibility by Visa Status
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Your visa type determines your health insurance options. Find out what coverage is available for your situation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Work Visas */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Work Visa Holders</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 mb-2">Eligible Visas:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Essential Skills Work Visa</li>
                    <li>• Working Holiday Visa</li>
                    <li>• Post-study Work Visa</li>
                    <li>• Work visa 2+ years duration</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Coverage Options:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Full comprehensive plans</li>
                    <li>• Hospital-only coverage</li>
                    <li>• Competitive pricing</li>
                    <li>• All major providers</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">
                    ✓ Best coverage options available
                  </p>
                </div>
              </div>

              {/* Student Visas */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Student Visa Holders</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 mb-2">Eligible Visas:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Student visa 6+ months</li>
                    <li>• PhD students</li>
                    <li>• Exchange students</li>
                    <li>• International students</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Special Features:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Student discount rates</li>
                    <li>• University-approved plans</li>
                    <li>• Mental health support</li>
                    <li>• Sports injury coverage</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-700 font-medium">
                    ✓ Student-focused benefits
                  </p>
                </div>
              </div>

              {/* Visitor/Tourist Visas */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 rounded-full p-3 mr-4">
                    <AlertCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold">Visitor Visa Holders</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-green-600 mb-2">Eligible Visas:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Tourist/visitor visa</li>
                    <li>• Transit visa</li>
                    <li>• Short-term visas</li>
                    <li>• Business visitor visa</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-blue-600 mb-2">Limited Options:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Travel insurance preferred</li>
                    <li>• Emergency coverage only</li>
                    <li>• Higher premiums</li>
                    <li>• Limited providers</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-orange-700 font-medium">
                    ⚠ Limited coverage available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Provider Comparison for Foreigners */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Best Providers for Foreigners
              </h2>
              <p className="text-gray-600 text-lg">
                These providers offer the best coverage and support for foreign residents in New Zealand.
              </p>
            </div>

            <div className="space-y-8">
              {/* Southern Cross */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Shield className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">Southern Cross Health Society</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">4.2/5 (2,450 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Most Comprehensive
                    </div>
                    <div className="text-sm text-gray-600 mt-1">From $42/month</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Foreigner Benefits:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Accepts most visa types</li>
                      <li>✓ No residency requirement</li>
                      <li>✓ Largest provider network</li>
                      <li>✓ Fast claims processing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Coverage Options:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Hospital-only from $42/month</li>
                      <li>• Comprehensive from $85/month</li>
                      <li>• Premium plans available</li>
                      <li>• Family coverage options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Requirements:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Valid visa documentation</li>
                      <li>• NZ address required</li>
                      <li>• Medical declaration</li>
                      <li>• 2+ year visa preferred</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link to="/reviews/southern-cross" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read Full Review →
                  </Link>
                  <Link to="/quotes" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
                    Get Quote
                  </Link>
                </div>
              </div>

              {/* nib */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Shield className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">nib Health Insurance</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">4.4/5 (890 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      Best Value
                    </div>
                    <div className="text-sm text-gray-600 mt-1">From $35/month</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Foreigner Benefits:</h4>
                    <ul className="text-sm space-y-1">
                      <li>✓ Competitive non-resident rates</li>
                      <li>✓ Flexible visa requirements</li>
                      <li>✓ Online application process</li>
                      <li>✓ Quick approval times</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Coverage Options:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Basic hospital from $35/month</li>
                      <li>• Mid-tier from $65/month</li>
                      <li>• Premium from $95/month</li>
                      <li>• Customizable extras</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Ideal For:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Work visa holders</li>
                      <li>• Students</li>
                      <li>• Young professionals</li>
                      <li>• Budget-conscious expats</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <Link to="/reviews/nib" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read Full Review →
                  </Link>
                  <Link to="/quotes" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium">
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Application Process for Foreigners
              </h2>
              <p className="text-gray-600 text-lg">
                Getting health insurance as a foreigner is straightforward. Follow these simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Gather Documents</h3>
                <p className="text-sm text-gray-600">Collect your passport, visa, NZ address proof, and medical history</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Compare Quotes</h3>
                <p className="text-sm text-gray-600">Use our comparison tool to find the best rates for your visa status</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Apply Online</h3>
                <p className="text-sm text-gray-600">Submit your application with instant quotes from multiple providers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Get Approved</h3>
                <p className="text-sm text-gray-600">Receive approval within 48 hours and start your coverage</p>
              </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Required Documents for Foreigners:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Essential Documents:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Valid passport</li>
                    <li>• Current NZ visa</li>
                    <li>• New Zealand address</li>
                    <li>• Contact phone number</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">May Be Required:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Medical history/records</li>
                    <li>• Bank account details</li>
                    <li>• Previous insurance certificates</li>
                    <li>• Employer letter (work visas)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pricing for Foreign Residents
              </h2>
              <p className="text-gray-600 text-lg">
                Health insurance premiums for foreigners are typically 10-30% higher than resident rates.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg font-semibold mb-4">Basic Hospital Cover</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">$35-60</div>
                <div className="text-gray-600 mb-4">per month</div>
                <ul className="text-sm space-y-2 text-left">
                  <li>✓ Hospital treatment</li>
                  <li>✓ Surgical procedures</li>
                  <li>✓ Specialist referrals</li>
                  <li>✓ Emergency care</li>
                </ul>
                <Link to="/quotes" className="mt-4 block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center border-green-200">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Most Popular
                </div>
                <h3 className="text-lg font-semibold mb-4">Comprehensive Cover</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$80-150</div>
                <div className="text-gray-600 mb-4">per month</div>
                <ul className="text-sm space-y-2 text-left">
                  <li>✓ Hospital + extras</li>
                  <li>✓ GP visits</li>
                  <li>✓ Dental coverage</li>
                  <li>✓ Optical benefits</li>
                  <li>✓ Physiotherapy</li>
                </ul>
                <Link to="/quotes" className="mt-4 block w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Get Quote
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center">
                <h3 className="text-lg font-semibold mb-4">Premium Plans</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$120-250</div>
                <div className="text-gray-600 mb-4">per month</div>
                <ul className="text-sm space-y-2 text-left">
                  <li>✓ Maximum coverage</li>
                  <li>✓ No annual limits</li>
                  <li>✓ Choice of specialist</li>
                  <li>✓ Private rooms</li>
                  <li>✓ International coverage</li>
                </ul>
                <Link to="/quotes" className="mt-4 block w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Health Insurance in New Zealand?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Compare plans from providers that welcome foreign residents. Get covered quickly and affordably.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quotes"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                <Calculator className="w-6 h-6 mr-3" />
                Get Quotes Now
              </Link>
              <Link
                to="/blog/health-insurance-foreigners-new-zealand"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                <FileText className="w-6 h-6 mr-3" />
                Complete Guide
              </Link>
            </div>
            
            <p className="text-blue-200 text-sm mt-6">
              ✓ All visa types ✓ Fast approval ✓ No residency required ✓ Instant quotes
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default ForeignersHealthInsurance;