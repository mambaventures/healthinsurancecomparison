import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '../config/constants';
import Breadcrumbs from '../components/Breadcrumbs';

const WhatIsHealthInsurance: React.FC = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'What is Health Insurance', href: '/what-is-health-insurance' }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What is Health Insurance in New Zealand? Complete Guide 2025",
    "description": "Comprehensive guide to understanding health insurance in New Zealand. Learn about coverage, costs, providers, and how to choose the right plan for your needs.",
    "author": {
      "@type": "Organization",
      "name": SITE_NAME
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "datePublished": "2025-01-07",
    "dateModified": "2025-01-07"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is health insurance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured. In New Zealand, private health insurance works alongside the public healthcare system to provide additional coverage and faster access to treatment."
        }
      },
      {
        "@type": "Question",
        "name": "What does health insurance cover in New Zealand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Health insurance in New Zealand typically covers hospital treatment, specialist consultations, diagnostic tests, surgery, and some extras like dental and optical care. Coverage varies by provider and plan type."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need health insurance in New Zealand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Health insurance is not mandatory in New Zealand as we have a public healthcare system. However, private health insurance can provide faster access to treatment, choice of specialists, and coverage for services not fully covered by the public system."
        }
      },
      {
        "@type": "Question",
        "name": "How much does health insurance cost in New Zealand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Health insurance costs in New Zealand vary widely based on age, coverage level, and provider. Basic plans can start from around $30-50 per month, while comprehensive plans may cost $100-300+ per month for individuals."
        }
      },
      {
        "@type": "Question",
        "name": "What are the main health insurance providers in New Zealand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The main health insurance providers in New Zealand include Southern Cross, NIB, AIA, Accuro, and AA Insurance. Each offers different plans and coverage options to suit various needs and budgets."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>What is Health Insurance in New Zealand? Complete Guide 2025</title>
        <meta name="description" content="Comprehensive guide to understanding health insurance in New Zealand. Learn about coverage, costs, providers, and how to choose the right plan for your needs." />
        <meta name="keywords" content="what is health insurance, health insurance nz, health insurance explained, private health insurance new zealand, health coverage nz" />
        <link rel="canonical" href={`${SITE_URL}/what-is-health-insurance`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                What is Health Insurance in New Zealand? Complete Guide 2025
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Understanding health insurance in New Zealand: your comprehensive guide to coverage options, costs, and choosing the right plan for your healthcare needs.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🏥</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Hospital Coverage</h3>
                  <p className="text-gray-600 text-sm">Private hospital treatment and faster access to procedures</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">👨‍⚕️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Specialist Care</h3>
                  <p className="text-gray-600 text-sm">Direct access to specialists without GP referrals</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Extra Benefits</h3>
                  <p className="text-gray-600 text-sm">Dental, optical, and other healthcare extras</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Health Insurance in New Zealand</h2>
              
              <div className="prose max-w-none">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What is Health Insurance?</h3>
                <p className="text-gray-700 mb-6">
                  Health insurance is a type of insurance coverage that pays for medical and surgical expenses incurred by the insured person. In New Zealand, private health insurance works alongside our public healthcare system (funded by taxes) to provide additional benefits, faster access to treatment, and coverage for services not fully covered by the public system.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">How Health Insurance Works in New Zealand</h3>
                <p className="text-gray-700 mb-4">
                  New Zealand has a unique healthcare system where:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li><strong>Public Healthcare:</strong> Free or low-cost treatment through public hospitals and some GP visits</li>
                  <li><strong>Private Healthcare:</strong> Faster access, choice of specialists, and additional services</li>
                  <li><strong>Mixed System:</strong> Many people use both public and private healthcare depending on their needs</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">What Does Health Insurance Cover?</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-3">Typically Covered</h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Private hospital treatment</li>
                      <li>• Specialist consultations</li>
                      <li>• Diagnostic tests and scans</li>
                      <li>• Surgery and procedures</li>
                      <li>• Some prescription medications</li>
                      <li>• Physiotherapy (limited)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-3">Often Extra Coverage</h4>
                    <ul className="space-y-2 text-yellow-800">
                      <li>• Dental treatment</li>
                      <li>• Optical care and glasses</li>
                      <li>• Alternative therapies</li>
                      <li>• Psychology services</li>
                      <li>• Hearing aids</li>
                      <li>• Travel insurance</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Types of Health Insurance Plans</h3>
                <div className="space-y-4 mb-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Hospital Cover</h4>
                    <p className="text-gray-700">Covers private hospital treatment, surgery, and specialist care. Usually the most basic type of cover.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Comprehensive Cover</h4>
                    <p className="text-gray-700">Includes hospital cover plus extras like dental, optical, and alternative therapies.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Extras Only</h4>
                    <p className="text-gray-700">Covers services like dental, optical, and physiotherapy without hospital cover.</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Major Health Insurance Providers in New Zealand</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Southern Cross</h4>
                    <p className="text-gray-700 text-sm">New Zealand's largest health insurer, not-for-profit organization</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">NIB</h4>
                    <p className="text-gray-700 text-sm">Australian-owned insurer with competitive plans and good customer service</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">AIA (Sovereign)</h4>
                    <p className="text-gray-700 text-sm">International insurer offering comprehensive coverage options</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Accuro</h4>
                    <p className="text-gray-700 text-sm">Boutique insurer with personalized service and flexible plans</p>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Health Insurance Costs in New Zealand</h3>
                <p className="text-gray-700 mb-4">
                  Health insurance premiums in New Zealand depend on several factors:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700">
                  <li><strong>Age:</strong> Premiums increase with age</li>
                  <li><strong>Coverage Level:</strong> More comprehensive plans cost more</li>
                  <li><strong>Excess:</strong> Higher excess usually means lower premiums</li>
                  <li><strong>Location:</strong> Some regional variations apply</li>
                  <li><strong>Health History:</strong> Pre-existing conditions may affect pricing</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-semibold text-blue-900 mb-3">Typical Monthly Premiums (Individual)</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li><strong>Basic Hospital Cover:</strong> $40-80 per month</li>
                    <li><strong>Comprehensive Cover:</strong> $80-150 per month</li>
                    <li><strong>Premium Comprehensive:</strong> $150-300+ per month</li>
                    <li><strong>Extras Only:</strong> $20-60 per month</li>
                  </ul>
                  <p className="text-blue-700 text-sm mt-3">*Prices vary significantly by age, provider, and specific plan details</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Do I need health insurance in New Zealand?</h3>
                  <p className="text-gray-700">
                    Health insurance is not mandatory in New Zealand because we have a public healthcare system. However, private health insurance can provide faster access to treatment, choice of specialists, and coverage for services not fully covered by the public system. About 30% of New Zealanders have some form of private health insurance.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Can you have 2 health insurance plans in New Zealand?</h3>
                  <p className="text-gray-700">
                    Yes, you can have multiple health insurance policies in New Zealand. Some people have separate hospital cover and extras cover from different providers, or may have both individual and group policies through work. However, you typically can't claim the same expense from multiple insurers.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Does health insurance cover dental care?</h3>
                  <p className="text-gray-700">
                    Basic health insurance plans typically don't include dental coverage. Dental care is usually available as an optional extra or as part of comprehensive plans. Coverage may include routine check-ups, basic treatments, and sometimes major dental work, but there are usually annual limits and waiting periods.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What is the cost of health insurance for families?</h3>
                  <p className="text-gray-700">
                    Family health insurance costs vary widely but typically range from $150-500+ per month depending on the number of family members, ages, coverage level, and provider. Many insurers offer family discounts, and children are often covered at reduced rates or free when parents have cover.
                  </p>
                </div>

                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Does health insurance cover hearing aids?</h3>
                  <p className="text-gray-700">
                    Some health insurance policies in New Zealand do cover hearing aids, but it's typically only included in comprehensive plans or as an optional extra. Coverage amounts are usually limited (e.g., $1,000-3,000 every few years), and there may be waiting periods before you can claim.
                  </p>
                </div>

                <div className="pb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What does health insurance cover for surgery?</h3>
                  <p className="text-gray-700">
                    Health insurance typically covers medically necessary surgery performed in private hospitals, including surgeon fees, hospital accommodation, theatre costs, and related medical expenses. Cosmetic surgery is usually excluded unless it's reconstructive following an accident or illness. Pre-approval is often required for major procedures.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mt-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Ready to Compare Health Insurance?</h3>
                  <p className="text-lg mb-6">Get quotes from New Zealand's top health insurance providers and find the perfect plan for your needs.</p>
                  <div className="space-x-4">
                    <a 
                      href="/compare" 
                      className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Compare Plans Now
                    </a>
                    <a 
                      href="/quotes" 
                      className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsHealthInsurance;