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
              At Health Insurance Comparison NZ, your privacy matters. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our services in accordance with the Privacy Act 2020 and other applicable New Zealand privacy laws.
            </p>
            <p className="text-gray-600">
              We are committed to protecting your privacy and handling your personal information in compliance with the 13 Privacy Principles set out in the Privacy Act 2020.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              In accordance with Privacy Principle 1 (Purpose of collection), we collect personal information only for lawful purposes connected with our function as a health insurance comparison service. We may collect:
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Name and contact details (email address, phone number, location)</li>
              <li>Date of birth and age</li>
              <li>Insurance preferences and requirements</li>
              <li>Health or lifestyle information relevant to health insurance quotes</li>
              <li>Any additional details you voluntarily provide during the quote process</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Information:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on our website</li>
              <li>Cookies and similar tracking technologies (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              Under Privacy Principle 2 (Source of personal information) and Principle 3 (Collection of information), we use your information only for the purposes disclosed at the time of collection and other directly related purposes.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Uses:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>To provide personalized health insurance quotes and comparisons</li>
              <li>To connect you with suitable licensed insurance providers or brokers registered on the FSP Register</li>
              <li>To facilitate communication between you and potential insurance providers</li>
              <li>To improve your user experience and provide customer support</li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Secondary Uses (with your consent where required):</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Website analytics and service improvements</li>
              <li>Regulatory compliance under Financial Markets Conduct Act 2013</li>
              <li>Fraud prevention and system security monitoring</li>
              <li>Marketing communications (only with explicit consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Share Your Information With</h2>
            <p className="text-gray-600 mb-4">
              In accordance with Privacy Principle 11 (Limits on disclosure), we only disclose your personal information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li><strong>Licensed insurance providers and brokers</strong> — including Evolve Group Limited (FSP711891) and other licensed providers registered on the Financial Service Providers Register (FSP) to deliver quotes and offers relevant to your needs. We may share your information with one or more of these partners depending on your location, insurance needs, and partner availability</li>
              <li><strong>Authorized service providers</strong> — who help operate our platform under strict confidentiality agreements (e.g., hosting, form handling, analytics)</li>
              <li><strong>Regulators or legal authorities</strong> — when required by law, court order, or to prevent fraud, including Financial Markets Authority or Privacy Commissioner</li>
              <li><strong>Related entities</strong> — within our corporate group, subject to the same privacy protections</li>
            </ul>
            <div className="bg-yellow-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-600">
                <strong>Important Note:</strong> Our partner network may change from time to time to ensure we provide you with the best possible service and coverage options. We only work with licensed providers who meet our strict quality and compliance standards.
              </p>
            </div>
            <p className="text-gray-600 mb-4">
              All third parties we work with are required to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Be registered on New Zealand's Financial Service Providers Register (where applicable)</li>
              <li>Comply with the Privacy Act 2020 and other applicable laws</li>
              <li>Use your information only for the specified purposes</li>
              <li>Maintain appropriate security measures</li>
            </ul>
            <p className="text-gray-600">
              We do not sell your personal information to unrelated third parties for advertising or marketing purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-600 mb-4">
              In compliance with Privacy Principle 5 (Storage and security), we implement reasonable security measures to protect your personal information against:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Loss, unauthorized access, use, disclosure, copying, or modification</li>
              <li>Cyber security threats and data breaches</li>
              <li>Accidental damage or destruction</li>
            </ul>
            <p className="text-gray-600 mb-4">Our security measures include:</p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>SSL/TLS encryption of data in transit</li>
              <li>Secure data storage with access controls</li>
              <li>Regular system monitoring and vulnerability assessments</li>
              <li>Staff privacy training and confidentiality agreements</li>
              <li>Incident response procedures for data breaches</li>
            </ul>
            <p className="text-gray-600">
              While we take reasonable steps to protect your information, no system is completely secure. We cannot guarantee absolute security of your data transmitted over the internet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights Under the Privacy Act 2020</h2>
            <p className="text-gray-600 mb-4">
              Under Privacy Principle 6 (Access to personal information) and other provisions, you have the following rights:
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Access Rights:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Request access to your personal information we hold</li>
              <li>Ask how we collected your information and why</li>
              <li>Request information about who we've shared your data with</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Correction Rights (Privacy Principle 7):</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Request correction of inaccurate or outdated information</li>
              <li>Update your contact details and preferences</li>
              <li>Request a note be attached if correction is disputed</li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Rights:</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Withdraw consent for marketing communications</li>
              <li>Request deletion of your data (subject to legal and business requirements)</li>
              <li>File a complaint with the Privacy Commissioner if you believe we've breached the Privacy Act</li>
              <li>Seek compensation through privacy proceedings if you suffer harm from a privacy breach</li>
            </ul>
            <p className="text-gray-600 mb-4">
              To exercise any of these rights, or if you have privacy concerns, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 font-semibold">privacy@healthinsurancecomparison.co.nz</p>
              <p className="text-gray-600 text-sm mt-2">We will respond to requests within 20 working days as required by the Privacy Act 2020.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention and Disposal</h2>
            <p className="text-gray-600 mb-4">
              In accordance with Privacy Principle 9 (Retention of personal information), we retain your personal information only as long as necessary for the purposes for which it was collected, or as required by law.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Quote requests: Retained for up to 2 years to facilitate follow-up services</li>
              <li>Contact information: Retained until you withdraw consent or request deletion</li>
              <li>Technical data: Generally retained for 12 months for security and analytics</li>
              <li>Compliance records: Retained as required under applicable financial services regulations</li>
            </ul>
            <p className="text-gray-600">
              When information is no longer needed, we securely dispose of it in accordance with Privacy Principle 9.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cross-Border Data Transfers</h2>
            <p className="text-gray-600 mb-4">
              Some of our service providers may be located overseas. In accordance with Privacy Principle 12 (Cross-border disclosure), when we transfer your information overseas, we ensure:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>The overseas recipient is subject to privacy laws substantially similar to the Privacy Act 2020, or</li>
              <li>We have taken reasonable steps to ensure your information will be protected, or</li>
              <li>You have consented to the transfer after being informed of the risks</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
            <p className="text-gray-600 mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. When we make material changes, we will:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
              <li>Publish the updated policy on our website</li>
              <li>Update the "Last updated" date below</li>
              <li>Notify you of significant changes if we have your contact information</li>
            </ul>
            <p className="text-gray-600">
              We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section className="mb-8">
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">⚠️ Important Disclaimer</h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Information Currency:</strong> The information contained in this Privacy Policy is current as of the "Last updated" date shown below. Our business practices, partner relationships, and data handling procedures may change from time to time, and this policy may not always reflect the most current information.
                </p>
                <p>
                  <strong>Partner Network:</strong> We work with various licensed insurance providers and brokers whose details may change without notice. While we strive to keep our website current, the specific partners mentioned may not represent our complete current network.
                </p>
                <p>
                  <strong>No Warranty:</strong> This Privacy Policy is provided for informational purposes. While we make reasonable efforts to ensure accuracy, we make no warranties about the completeness, reliability, or accuracy of this information.
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="text-sm text-gray-500 italic">
              Last updated: September 2025<br/>
              This Privacy Policy complies with the Privacy Act 2020 and other applicable New Zealand privacy laws.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default Privacy;