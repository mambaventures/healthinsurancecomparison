import React from 'react';
import { Calendar, Clock, ArrowLeft, Globe, Shield, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function HealthInsuranceForeigners() {
  return (
    <>
      <SEO
        title="Health Insurance for Foreigners in New Zealand 2025 - Complete Guide"
        description="Complete guide to health insurance for foreigners living in New Zealand. Learn about eligibility, costs, best providers, and how to get coverage as a non-resident."
        canonicalUrl="https://healthinsurancecomparison.co.nz/blog/health-insurance-foreigners-new-zealand"
        keywords={[
          'health insurance for foreigners in new zealand',
          'health insurance foreigners nz',
          'expat health insurance new zealand',
          'non resident health insurance nz',
          'visitor health insurance new zealand',
          'international health insurance nz'
        ]}
        publishedDate="2025-08-24"
        modifiedDate="2025-08-24"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Health Insurance for Foreigners in New Zealand 2025 - Complete Guide",
          "description": "Complete guide to health insurance for foreigners living in New Zealand",
          "image": "https://healthinsurancecomparison.co.nz/images/blog/health-insurance-foreigners.jpg",
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
            Health Insurance for Foreigners in New Zealand: Complete Guide 2025
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>August 24, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <Globe className="flex-shrink-0 h-5 w-5 text-blue-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-blue-700">
                  <strong>Key Takeaway:</strong> Foreigners can get private health insurance in New Zealand, but eligibility and pricing vary by visa status. Most major providers offer coverage for non-residents, with premiums typically 10-30% higher than resident rates.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>Can Foreigners Get Health Insurance in New Zealand?</h2>
          
          <p>
            Yes, foreigners living in New Zealand can absolutely get private health insurance. However, your eligibility, 
            coverage options, and pricing will depend on several factors including your visa status, length of stay, 
            and the insurance provider you choose.
          </p>

          <p>
            While New Zealand provides free or heavily subsidized healthcare through the public system for residents 
            and some visa holders, many foreigners opt for private health insurance to:
          </p>

          <ul>
            <li>Avoid long waiting times for non-emergency procedures</li>
            <li>Access private hospitals and specialists</li>
            <li>Get coverage for services not fully covered by the public system</li>
            <li>Have peace of mind about unexpected medical costs</li>
          </ul>

          <h2>Eligibility by Visa Status</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold mb-4">Work Visa Holders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-green-600 mb-2">✓ Generally Eligible</h4>
                <ul className="text-sm space-y-1">
                  <li>• Work visa valid for 2+ years</li>
                  <li>• Essential Skills work visa</li>
                  <li>• Working Holiday visa</li>
                  <li>• Post-study work visa</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-600 mb-2">Requirements</h4>
                <ul className="text-sm space-y-1">
                  <li>• Valid NZ address</li>
                  <li>• Bank account (some providers)</li>
                  <li>• Medical declaration</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold mb-4">Student Visa Holders</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-green-600 mb-2">✓ Usually Eligible</h4>
                <ul className="text-sm space-y-1">
                  <li>• Student visa for 6+ months</li>
                  <li>• Enrolled in approved institution</li>
                  <li>• Some providers offer student-specific plans</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-orange-600 mb-2">⚠ Considerations</h4>
                <ul className="text-sm space-y-1">
                  <li>• May require student insurance first</li>
                  <li>• Limited coverage options</li>
                  <li>• Higher premiums for short-term cover</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Best Health Insurance Providers for Foreigners</h2>

          <div className="space-y-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Southern Cross Health Society</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Pros for Foreigners:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Accepts most visa types</li>
                    <li>✓ Largest provider network</li>
                    <li>✓ No residency requirement for some plans</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Considerations:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Higher premiums for non-residents</li>
                    <li>• Some plans require 2+ year visa</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold">nib Health Insurance</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Pros for Foreigners:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Competitive rates for non-residents</li>
                    <li>✓ Flexible visa requirements</li>
                    <li>✓ Online application process</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Best for:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Work visa holders</li>
                    <li>• Young professionals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Costs and Pricing for Non-Residents</h2>

          <p>
            Health insurance premiums for foreigners in New Zealand are typically 10-30% higher than resident rates. 
            Here's what you can expect to pay:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">Typical Monthly Premiums for Foreigners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">$35-60</div>
                <div className="text-sm text-gray-600">Basic Hospital Cover</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$80-150</div>
                <div className="text-sm text-gray-600">Comprehensive Cover</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">$120-250</div>
                <div className="text-sm text-gray-600">Premium Plans</div>
              </div>
            </div>
          </div>

          <h2>Application Process for Foreigners</h2>

          <div className="bg-blue-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">Step-by-Step Application Process</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm mr-3 mt-0.5">1</span>
                <div>
                  <strong>Gather Required Documents:</strong>
                  <ul className="text-sm mt-1 space-y-1">
                    <li>• Valid passport and visa</li>
                    <li>• NZ address proof</li>
                    <li>• Medical history (if required)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm mr-3 mt-0.5">2</span>
                <div>
                  <strong>Compare Providers:</strong> Use our comparison tool to find the best rates and coverage for your visa status
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm mr-3 mt-0.5">3</span>
                <div>
                  <strong>Submit Application:</strong> Most providers offer online applications with instant quotes
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm mr-3 mt-0.5">4</span>
                <div>
                  <strong>Await Approval:</strong> Processing typically takes 1-7 business days for standard applications
                </div>
              </li>
            </ol>
          </div>

          <h2>Tips for Getting the Best Deal</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <div>
                  <strong>Compare Multiple Providers:</strong> Rates can vary significantly between insurers
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <div>
                  <strong>Consider Your Visa Length:</strong> Longer visas often qualify for better rates
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <div>
                  <strong>Look for Discounts:</strong> Some providers offer online application discounts
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <div>
                  <strong>Start Early:</strong> Apply before your current coverage expires to avoid gaps
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <div>
                  <strong>Read the Fine Print:</strong> Understand waiting periods and exclusions
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                <div>
                  <strong>Ask About Extensions:</strong> Some policies can continue if you renew your visa
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Ready to Find Health Insurance?</h3>
            <p className="text-green-700 mb-4">
              Compare health insurance plans specifically available to foreigners in New Zealand. 
              Get quotes from multiple providers and find the best coverage for your situation.
            </p>
            <Link 
              to="/quotes" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Compare Plans Now
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default HealthInsuranceForeigners;