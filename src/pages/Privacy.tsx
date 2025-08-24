import React from 'react';
import SEO from '../components/SEO';

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Health Insurance Comparison"
        description="Read our privacy policy. Learn how we collect, use, and protect your personal information at Health Insurance Comparison."
        canonicalUrl="https://healthinsurancecomparison.co.nz/privacy"
        keywords={[
          'privacy policy',
          'health insurance comparison privacy',
          'data protection',
          'privacy statement'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Privacy Policy",
          "description": "Privacy policy for Health Insurance Comparison services"
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Privacy</h2>
            <p className="text-gray-600 mb-4">
              At Health Insurance Comparison NZ, your privacy matters. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect the following types of information when you use our site:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name and contact details (e.g., email address, phone number, location)</li>
              <li>Date of birth and age</li>
              <li>Insurance preferences and requirements</li>
              <li>Health or lifestyle information relevant to health insurance</li>
              <li>Any additional details you provide during the quote process</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Uses:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>To provide personalized health insurance quotes</li>
              <li>To connect you with suitable licensed insurance providers or brokers</li>
              <li>To improve your user experience and provide customer support</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secondary Uses:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Analytics and service improvements</li>
              <li>Regulatory compliance and risk management</li>
              <li>Fraud prevention and technical monitoring</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Share Your Information With</h2>
            <p className="text-gray-600 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Licensed insurance providers and brokers</strong> — to deliver quotes and offers relevant to your needs</li>
              <li><strong>Service providers</strong> — who help operate our platform (e.g., hosting, form handling, analytics)</li>
              <li><strong>Regulators or legal authorities</strong> — if required by law or to protect users from fraud</li>
            </ul>
            <p className="text-gray-600 mb-4">
              All providers and brokers we work with are required to be registered on New Zealand's Financial Service Providers Register (FSP) and comply with all applicable laws and industry standards.
            </p>
            <p className="text-gray-600">
              We do not sell your personal information to unrelated third parties for advertising or marketing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              We take security seriously. Your data is protected through:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Encryption of data in transit and at rest</li>
              <li>Access controls and secure infrastructure</li>
              <li>Regular system monitoring and privacy training</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-600 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Request access to your personal data</li>
              <li>Correct or update information you've provided</li>
              <li>Request deletion of your data (where legally allowed)</li>
              <li>Withdraw consent for future communications</li>
              <li>File a complaint with the NZ Privacy Commissioner</li>
            </ul>
            <p className="text-gray-600">
              To exercise any of these rights, please email us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-600">privacy@healthinsurancecomparison.co.nz</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. The latest version will always be published on our website.
            </p>
          </section>

          <section>
            <p className="text-sm text-gray-500 italic">
              Last updated: July 2025
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Privacy;