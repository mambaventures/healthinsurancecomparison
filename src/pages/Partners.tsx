import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Users, CheckCircle, Lock, FileCheck, ArrowRight, Heart, Handshake, Award, Clock } from 'lucide-react';
import SEO from '../components/SEO';

function Partners() {
  return (
    <>
      <SEO
        title="Our Health Insurance Partners | HealthInsuranceComparison.co.nz"
        description="Learn about our trusted health insurance partners and how we connect New Zealanders with licensed insurance experts for personalized quotes and guidance."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Our Health Insurance Partners",
          "description": "Information about our health insurance partners and referral process"
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🤝 Our Health Insurance Partners
          </h1>
          <p className="text-xl text-gray-600">
            At HealthInsuranceComparison.co.nz, we help New Zealanders explore and compare private health insurance by connecting them with trusted insurance experts. We're not an insurer ourselves — instead, we work with licensed third-party providers who can offer personalised quotes and guidance.
          </p>
        </header>

        <div className="prose prose-blue max-w-none">
          <section className="mb-12">
            <div className="bg-blue-50 rounded-lg p-8 mb-8">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">🔄 How It Works</h2>
              </div>
              <p className="text-gray-700 text-lg">
                When you complete a quote request on our website, we securely share your information with licensed insurance brokers or providers who may be able to assist with your needs. These professionals are authorised to offer regulated financial advice and health insurance products in New Zealand.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-green-50 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">✅ Why This Matters</h2>
              </div>
              <p className="text-gray-700 mb-6">Working with multiple partners means:</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">You get access to a wider range of policies and pricing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">You receive tailored recommendations based on your age, location, and coverage preferences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">You avoid the hassle of contacting multiple providers yourself</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-purple-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">🔒 Your Privacy is Our Priority</h2>
              </div>
              <p className="text-gray-700 text-lg">
                We only share your information for the purpose of helping you compare health insurance. We do not sell your data or use it for unrelated marketing. For more, see our{' '}
                <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-yellow-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 Transparency Statement</h2>
              <p className="text-gray-700 text-lg">
                We may receive a referral fee if you proceed with a policy from one of our partners. However, there's no cost to you, and you're under no obligation to proceed with any offer.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🏢 Our Trusted Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://github.com/mambaventures/healthinsurancecomparison/blob/02b4a9140412acccb2098457e896198814ee45c0/logos/legacy.png?raw=true"
                    alt="Legacy Group Logo"
                    className="h-12 object-contain mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Legacy Group</h3>
                    <p className="text-gray-600">Licensed Insurance Advisors</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">FSP Licensed & Regulated</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Specializes in Health Insurance</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">10+ Years Experience</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Legacy Group is our primary partner for health insurance advice and quotes. Their licensed advisors specialize in helping New Zealanders find the right health coverage for their needs and budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Handshake className="w-12 h-12 text-blue-600 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Additional Partners</h3>
                    <p className="text-gray-600">Licensed Insurance Providers</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">FSPR Registered Advisors</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Multiple Provider Access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Competitive Quotes</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  We work with a network of licensed insurance advisors and brokers across New Zealand to ensure you get access to the best possible quotes and advice for your situation.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Quality Assurance</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg mb-6">
                All our partners must meet strict criteria to ensure you receive the highest quality service:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Licensing Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">FSPR (Financial Service Providers Register) licensed</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Professional indemnity insurance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Ongoing compliance monitoring</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Standards</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Minimum 5 years industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Customer satisfaction ratings above 4.5/5</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Commitment to unbiased advice</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 What to Expect</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Contact</h3>
                    <p className="text-gray-600">
                      A licensed advisor will contact you within 24 hours to discuss your health insurance needs and preferences. This initial consultation is completely free and without obligation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Needs Assessment</h3>
                    <p className="text-gray-600">
                      Your advisor will conduct a thorough assessment of your health insurance needs, considering your age, health status, budget, and coverage preferences to identify the most suitable options.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Quotes</h3>
                    <p className="text-gray-600">
                      You'll receive personalized quotes from multiple providers, with clear explanations of coverage options, benefits, and costs. Your advisor will help you understand the differences between plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      If you choose to proceed with a policy, your advisor will assist with the application process and provide ongoing support for any questions or claims assistance you may need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-orange-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">🏆 Why Our Partners Choose Us</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Leads</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Pre-qualified prospects genuinely seeking health insurance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Detailed information about customer needs and preferences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Higher conversion rates compared to cold leads</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Standards</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Commitment to ethical business practices</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Focus on customer-first approach</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Ongoing professional development and training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🔍 Partner Selection Criteria</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg mb-6">
                We carefully vet all our partners to ensure they meet our high standards for professionalism and customer service:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Licensing & Compliance</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Valid FSPR registration</li>
                    <li>• Professional indemnity insurance</li>
                    <li>• Clean regulatory record</li>
                    <li>• Ongoing compliance monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Experience & Expertise</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Minimum 5 years industry experience</li>
                    <li>• Proven track record</li>
                    <li>• Specialized health insurance knowledge</li>
                    <li>• Regular professional development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Customer Service</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Customer satisfaction ratings 4.5+</li>
                    <li>• Responsive communication</li>
                    <li>• Ethical business practices</li>
                    <li>• Commitment to customer outcomes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <FileCheck className="w-8 h-8 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">📋 Note on Licensing</h2>
              </div>
              <p className="text-gray-700 text-lg">
                All insurance advice is provided by FSPR-registered financial advisers or licensed insurers, in accordance with New Zealand law. We do not provide insurance advice or make product recommendations ourselves.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-gray-900">Do I have to pay for the consultation?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-600">
                  No, the initial consultation and quote comparison service is completely free. There are no upfront costs or fees for using our service.
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-gray-900">Am I obligated to purchase a policy?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-600">
                  Absolutely not. You're under no obligation to purchase any policy. Our service is designed to help you explore your options and make an informed decision that's right for you.
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-gray-900">How do you choose which partner to connect me with?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-600">
                  We match you with partners based on your specific needs, location, and the type of coverage you're seeking. Our goal is to connect you with the advisor best equipped to help with your particular situation.
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span className="text-gray-900">What if I'm not satisfied with the service?</span>
                  <span className="transition group-open:rotate-180">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-gray-600">
                  We take customer satisfaction seriously. If you're not satisfied with the service provided by one of our partners, please contact us immediately. We'll work to resolve any issues and can connect you with an alternative advisor if needed.
                </div>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📞 Contact Information</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">General Inquiries</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-gray-700">support@healthinsurancecomparison.co.nz</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="text-gray-700">0800 123 456</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm text-gray-500 mt-3">
                      Emergency support available 24/7 for existing policyholders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🤝 Partnership Opportunities</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 text-lg mb-6">
                Are you a licensed insurance advisor or broker interested in partnering with us? We're always looking for quality partners who share our commitment to excellent customer service.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Partner Requirements</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Current FSPR registration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Minimum 3 years industry experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Professional indemnity insurance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Commitment to customer service excellence</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Partnership Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Access to qualified leads</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Marketing and lead generation support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Technology platform access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">Ongoing business development opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
                >
                  Inquire About Partnership
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="bg-blue-600 rounded-lg p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Ready to compare plans?</h2>
              <p className="text-blue-100 mb-6">
                Connect with our licensed partners and get personalized health insurance quotes tailored to your needs.
              </p>
              <Link
                to="/quotes"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors transform hover:scale-105"
              >
                Start Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Licensed Advisors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Partners;