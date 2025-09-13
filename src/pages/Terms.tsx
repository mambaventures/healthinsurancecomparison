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
              Health Insurance Comparison NZ is a free comparison platform that helps users find and compare health insurance options. We are not an insurance company, licensed financial adviser, or insurance broker under the Insurance (Prudential Supervision) Act 2010 or Financial Markets Conduct Act 2013.
            </p>
            <p className="text-gray-600 mb-4">
              We connect users with licensed third-party providers and brokers who are registered on New Zealand's Financial Service Providers Register (FSP). All quotes are supplied directly by licensed providers, and we may earn a referral commission if you proceed with their services.
            </p>
            <p className="text-gray-600">
              By using our service, you understand that we operate as an intermediary platform and are not responsible for the insurance products, terms, or services provided by third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Financial Advice</h2>
            <p className="text-gray-600 mb-4">
              The content on this website is for general informational purposes only and does not constitute personalized financial advice under the Financial Advisers Act 2008 or Financial Markets Conduct Act 2013. We do not provide regulated financial advice or recommendations.
            </p>
            <p className="text-gray-600 mb-4">
              Any information provided should not be relied upon as a substitute for independent professional advice. You should consider seeking advice from a licensed financial adviser (FAP licensed) or insurance adviser before making any insurance decisions.
            </p>
            <p className="text-gray-600">
              We make no representations about the suitability of any insurance product for your individual circumstances.
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Provider Relationships</h2>
            <p className="text-gray-600 mb-4">
              We work with licensed New Zealand health insurance providers and financial service providers who are registered on the FSP Register and comply with relevant legislation including the Insurance (Prudential Supervision) Act 2010 and Financial Markets Conduct Act 2013.
            </p>
            <p className="text-gray-600 mb-4">
              We do not guarantee the accuracy, availability, or suitability of any quote, product, or service provided by third parties. Any contractual relationship is solely between you and the relevant licensed provider.
            </p>
            <p className="text-gray-600 mb-4">
              We are not responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>The terms, conditions, pricing, or availability of insurance products</li>
              <li>The conduct, performance, or solvency of insurance providers</li>
              <li>Claims handling, disputes, or customer service issues with providers</li>
              <li>Changes to products or pricing after quotes are provided</li>
            </ul>
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
              To the fullest extent permitted by New Zealand law, including the Consumer Guarantees Act 1993 and Fair Trading Act 1986, Health Insurance Comparison NZ, its owners, employees, and affiliates limit liability for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Any loss or damage resulting from use of this site or reliance on its content</li>
              <li>Any issues, disputes, or claims with third-party providers</li>
              <li>Website interruptions, errors, or technical problems</li>
              <li>Inaccuracy, incompleteness, or currency of information</li>
              <li>Loss of profits, data, or other consequential damages</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Nothing in these terms excludes or limits liability for:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Death or personal injury caused by negligence</li>
              <li>Fraudulent misrepresentation</li>
              <li>Breaches that cannot be excluded under New Zealand law</li>
            </ul>
            <p className="text-gray-600">
              Where liability cannot be excluded, it is limited to the maximum extent permitted by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law and Dispute Resolution</h2>
            <p className="text-gray-600 mb-4">
              These Terms are governed by and construed in accordance with the laws of New Zealand. Any disputes will be subject to the exclusive jurisdiction of the New Zealand courts.
            </p>
            <p className="text-gray-600 mb-4">
              For consumer-related disputes, you may also have rights under the Consumer Guarantees Act 1993 and can contact:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Commerce Commission (Fair Trading Act matters)</li>
              <li>Financial Markets Authority (licensed provider issues)</li>
              <li>Insurance & Financial Services Ombudsman (provider disputes)</li>
            </ul>
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
              Last updated: September 2025
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Terms;