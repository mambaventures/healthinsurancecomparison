import React from 'react';
import SEO from '../components/SEO';

function Terms() {
  return (
    <>
      <SEO
        title="Terms of Use | HealthCompare NZ"
        description="Read our terms of use. Learn about our service terms, privacy policy, and user obligations for using HealthCompare NZ."
        canonicalUrl="https://healthinsurancecomparison.co.nz/terms"
        keywords={[
          'terms of use',
          'health insurance comparison terms',
          'healthcompare nz terms',
          'terms and conditions'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Terms of Use",
          "description": "Terms of use for using HealthCompare NZ services"
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>
        
        <div className="prose prose-blue max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600 mb-4">
              Welcome to Health Insurance Comparison NZ. By accessing or using our website (healthinsurancecomparison.co.nz), you agree to these Terms of Use. If you do not agree with any part of these terms, please do not use our service.
            </p>
            <p className="text-gray-600">
              We may update these Terms of Use at any time. The latest version will always be available on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 mb-4">
              Health Insurance Comparison NZ is a free comparison platform that helps users find and compare health insurance options. We are not an insurance company, financial adviser, or broker.
            </p>
            <p className="text-gray-600">
              We connect users with licensed third-party providers and brokers based on the information you provide. Quotes are supplied directly by those parties, and we may earn a referral fee if you proceed with one of their offers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Financial Advice</h2>
            <p className="text-gray-600">
              The content on this website is for informational purposes only and does not constitute financial advice. We do not provide personalised recommendations. You should consider seeking independent advice from a licensed financial adviser before making any decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of the Service</h2>
            <p className="text-gray-600 mb-4">
              By using this website, you agree that:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>All information you provide is accurate and up to date</li>
              <li>You are at least 18 years old</li>
              <li>You understand your data may be shared with relevant providers or brokers to deliver the quote service</li>
              <li>You will not use this site for unlawful purposes or interfere with its operation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Partner Responsibilities</h2>
            <p className="text-gray-600 mb-4">
              We aim to work only with licensed New Zealand health insurance providers and brokers. However, we do not guarantee the accuracy, availability, or suitability of any quote or product provided. Any agreement or engagement with a third-party provider is solely between you and that provider.
            </p>
            <p className="text-gray-600">
              We are not responsible for the terms, pricing, conduct, or outcomes of third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
            <p className="text-gray-600">
              We take your privacy seriously. By using our service, you agree to our Privacy Policy, which outlines how your data is collected, shared, and protected.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              To the fullest extent permitted by law, Health Insurance Comparison NZ, its owners, employees, and affiliates are not liable for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Any loss or damage resulting from use of this site or reliance on its content</li>
              <li>Any issues or disputes with third-party providers you are connected to</li>
              <li>Interruptions, errors, or technical problems on the website</li>
            </ul>
            <p className="text-gray-600">
              Our total liability, if any, is limited to the amount paid by you for using this website (which is zero).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600">
              These Terms are governed by the laws of New Zealand. Any disputes arising from the use of our service will be subject to the exclusive jurisdiction of the New Zealand courts.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">privacy@healthinsurancecomparison.co.nz</p>
            </div>
          </section>

          <section>
            <p className="text-gray-600 italic">
              Last updated: July 2025
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Terms;