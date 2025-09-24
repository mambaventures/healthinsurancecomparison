import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Calendar, Clock, Shield, Mail, FileCheck, Lock } from 'lucide-react';
import SEO from '../components/SEO';
import { trackConversion } from '../utils/analytics';

function QuotesThankYou() {
  useEffect(() => {
    console.log('🔍 Thank you page mounted, starting conversion tracking...');

    // Check if gtag is available immediately
    if (typeof window.gtag === 'function') {
      console.log('✅ gtag is available immediately');
    } else {
      console.warn('⚠️ gtag not available immediately, will retry...');
    }

    // Small delay to ensure GA4 is loaded
    const timer = setTimeout(() => {
      console.log('🔍 Timer fired, checking gtag availability...');

      if (typeof window.gtag === 'function') {
        console.log('✅ gtag confirmed available, firing conversions...');

        // Fire Google Ads conversion event using utility function
        console.log('🚀 Firing trackConversion utility...');
        trackConversion('AW-17324751968');

        // Also fire enhanced conversion without label (backup method)
        console.log('🚀 Firing direct gtag conversion...');
        const transactionId = crypto.randomUUID();
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17324751968',
          'value': 1.0,
          'currency': 'NZD',
          'transaction_id': transactionId
        });
        console.log(`🎯 Enhanced conversion fired with ID: ${transactionId}`);

        // Test if dataLayer is receiving events
        console.log('📊 Current dataLayer:', window.dataLayer);

      } else {
        console.error('❌ gtag STILL not available after 500ms delay!');
        console.log('🔍 window.gtag:', typeof window.gtag);
        console.log('🔍 window.gtagReady:', (window as any).gtagReady);
        console.log('🔍 window.dataLayer:', window.dataLayer);
      }

      console.log('🎉 Conversion tracking attempt completed');
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO
        title="Thank You | Health Insurance Comparison"
        description="Thank you for requesting health insurance quotes. Our expert team will be in touch shortly to discuss your options."
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Thank You for Your Request!
            </h1>
            <p className="text-xl text-gray-600">
              Your health insurance quote is being prepared
            </p>
          </div>

          {/* Next Steps Card */}
          <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
            <div className="flex items-center justify-between mb-6 pb-6 border-b">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">What Happens Next?</h2>
                <p className="text-gray-600 mt-1">Here's what you can expect</p>
              </div>
              <img
                src="https://images.squarespace-cdn.com/content/v1/5785b287ebbd1aedaf8e21c0/1469758536973-I4IKTAGEFUBH2I9DP4FH/Evolve+Logo_White-01.png"
                alt="Evolve Group Limited Logo"
                className="h-12 object-contain"
                loading="lazy"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Consultation</h3>
                  <p className="text-gray-600">A licensed insurance advisor from Evolve Group Limited will call you within 24 hours to discuss your options.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email Confirmation</h3>
                  <p className="text-gray-600">Check your inbox for a confirmation email with your quote details.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personalized Quotes</h3>
                  <p className="text-gray-600">We'll prepare customized quotes from top NZ providers based on your needs.</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t">
              <div className="bg-blue-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Need to reach us?</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our team is available Monday to Friday, 9am - 5pm
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>✉️ support@healthinsurancecomparison.co.nz</p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Licensed Advisors</h3>
              <p className="text-sm text-gray-600">FSP Registered</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">No Obligation</h3>
              <p className="text-sm text-gray-600">Free Consultation</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900">Top Providers</h3>
              <p className="text-sm text-gray-600">Best Coverage Options</p>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-6">While You Wait</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/guides/best-health-insurance"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Insurance Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Learn about different types of coverage and what might suit you best.</p>
                <span className="text-blue-600 flex items-center text-sm">
                  Read More <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              <Link
                to="/faq"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-left"
              >
                <h3 className="font-semibold text-gray-900 mb-2">Common Questions</h3>
                <p className="text-gray-600 text-sm mb-4">Find answers to frequently asked questions about health insurance.</p>
                <span className="text-blue-600 flex items-center text-sm">
                  View FAQs <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Related Articles You Might Find Helpful</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Link
                to="/blog/understanding-health-insurance"
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src="/images/family-healthcare.jpg"
                    alt="Understanding Health Insurance"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Understanding Health Insurance in NZ</h3>
                <p className="text-gray-600 text-sm">A comprehensive guide to health insurance basics and coverage options.</p>
              </Link>

              <Link
                to="/blog/save-on-premiums"
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src="/images/savings-piggybank.jpg"
                    alt="Save on Premiums"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">10 Ways to Save on Premiums</h3>
                <p className="text-gray-600 text-sm">Smart strategies to reduce your health insurance costs without compromising coverage.</p>
              </Link>

              <Link
                to="/blog/comparing-providers"
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src="/images/medical-checkup.jpg"
                    alt="Comparing Providers"
                    className="w-full h-40 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Comparing Health Insurance Providers</h3>
                <p className="text-gray-600 text-sm">An in-depth look at NZ's top health insurance providers and their offerings.</p>
              </Link>
            </div>
          </div>

          {/* Simple Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Health Insurance Comparison</span>
                </div>
                <p className="text-sm text-gray-600">
                  Helping New Zealanders find the right health insurance coverage.
                </p>
              </div>
              <div className="text-right">
                <div className="space-y-2">
                  <div className="flex items-center justify-end text-sm text-gray-600">
                    <Lock className="w-4 h-4 mr-2" />
                    <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                  </div>
                  <div className="flex items-center justify-end text-sm text-gray-600">
                    <FileCheck className="w-4 h-4 mr-2" />
                    <Link to="/terms" className="hover:text-blue-600">Terms of Service</Link>
                  </div>
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Health Insurance Comparison
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default QuotesThankYou;