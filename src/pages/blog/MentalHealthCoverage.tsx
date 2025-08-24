import React from 'react';
import { Calendar, Clock, ArrowLeft, Brain, Shield, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function MentalHealthCoverage() {
  return (
    <>
      <SEO
        title="Mental Health Coverage in NZ Health Insurance | HealthCompare NZ"
        description="Learn about mental health coverage in NZ health insurance plans. Compare mental health benefits, find the right coverage, and understand your options."
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Mental Health Coverage in NZ Health Insurance Plans",
          "description": "Understanding mental health coverage in health insurance",
          "image": "https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1200&h=600",
          "datePublished": "2025-01-30",
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "HealthCompare NZ"
          }
        }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
            Coverage
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mental Health Coverage in NZ Health Insurance Plans
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>January 30, 2025</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>15 min read</span>
          </div>
        </header>

        <img
          src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=1200&h=600"
          alt="Mental Health Coverage"
          className="w-full rounded-lg mb-8"
        />

        <div className="prose max-w-none">
          <h2>Introduction: The Importance of Mental Health Coverage</h2>
          <p>
            Mental health is an essential component of overall well-being, yet many New Zealanders are unsure about how their health insurance covers mental health services. This comprehensive guide explores mental health coverage in New Zealand health insurance plans, helping you understand your options and make informed decisions about your healthcare coverage.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
            <p className="text-blue-900">
              <strong>Key Takeaway:</strong> Mental health coverage varies significantly between providers and plans. Understanding these differences is crucial for ensuring you have access to the support you need when you need it.
            </p>
          </div>

          <h2>Understanding Mental Health Coverage in New Zealand</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-semibold mb-4">Types of Mental Health Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Outpatient Services</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Psychologist consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Psychiatrist visits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Counseling sessions</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Inpatient Services</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Hospital stays</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Residential treatment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Crisis intervention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Coverage Comparison by Provider</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Southern Cross</h3>
              <div className="space-y-4">
                <p>
                  Southern Cross offers comprehensive mental health coverage through their Wellbeing plans:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Up to $750 per year for counseling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Psychiatric hospitalization coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Access to online mental health resources</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">nib</h3>
              <div className="space-y-4">
                <p>
                  nib's mental health coverage includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Digital mental health platform</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Telehealth counseling services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Psychiatric treatment coverage</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">AIA</h3>
              <div className="space-y-4">
                <p>
                  AIA's mental health benefits include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Comprehensive mental health coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Vitality program mental wellness benefits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span>Stress management resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Key Coverage Areas</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Counseling and Therapy</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Individual counseling sessions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Group therapy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Family therapy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Online counseling options</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Psychiatric Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Psychiatric consultations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Medication management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Diagnostic assessments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Hospital and Residential Treatment</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Inpatient psychiatric care</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Residential treatment programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Day programs</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>Understanding Coverage Limits and Restrictions</h2>
          <div className="space-y-4">
            <p>
              Mental health coverage often comes with specific limits and conditions:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Common Limitations</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Annual benefit caps</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Session limits</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Provider restrictions</span>
                </li>
                <li className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Pre-existing condition clauses</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>Digital Mental Health Services</h2>
          <div className="space-y-4">
            <p>
              Many insurers now offer digital mental health services:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Digital Services</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Online therapy platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Mental health apps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Telehealth consultations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Online support groups</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>Making Mental Health Claims</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Claims Process</h3>
              <ol className="space-y-2">
                <li>1. Obtain a referral from your GP if required</li>
                <li>2. Choose a covered provider</li>
                <li>3. Submit pre-approval if necessary</li>
                <li>4. Attend treatment sessions</li>
                <li>5. Submit claims with required documentation</li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Required Documentation</h3>
              <ul className="space-y-2">
                <li>Medical referrals</li>
                <li>Treatment plans</li>
                <li>Provider invoices</li>
                <li>Progress reports</li>
              </ul>
            </div>
          </div>

          <h2>Choosing the Right Coverage</h2>
          <div className="space-y-4">
            <p>
              Consider these factors when selecting mental health coverage:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Selection Criteria</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Coverage limits and sublimits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Provider network</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Digital service options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Waiting periods</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>Future of Mental Health Coverage</h2>
          <div className="space-y-4">
            <p>
              Mental health coverage is evolving with new developments:
            </p>
            <ul className="space-y-2">
              <li>Expanded digital services</li>
              <li>Increased coverage limits</li>
              <li>More preventive care options</li>
              <li>Integration with wellness programs</li>
            </ul>
          </div>

          <h2>Conclusion</h2>
          <p>
            Mental health coverage is an increasingly important aspect of health insurance in New Zealand. Understanding your options and choosing the right coverage can ensure you have access to the support you need when you need it. Regular review of your coverage and staying informed about new options and benefits will help you maintain optimal mental health care access.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Compare Mental Health Coverage Options?</h3>
            <p className="mb-4">
              Use our comparison tool to find health insurance plans with comprehensive mental health coverage.
            </p>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Compare Plans Now
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default MentalHealthCoverage;