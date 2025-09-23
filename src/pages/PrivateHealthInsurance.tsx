import React from 'react';
import { Shield, Heart, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function PrivateHealthInsurance() {
  return (
    <>
      <SEO
        title="Private Health Insurance NZ - Complete Guide 2025 | HealthCompare"
        description="Everything you need to know about private health insurance in New Zealand. Compare providers, understand benefits, and find the best private health cover."
        canonicalUrl="https://healthinsurancecomparison.co.nz/private-health-insurance"
        keywords={[
          'private health insurance nz',
          'private medical insurance new zealand',
          'private healthcare nz',
          'private hospital cover'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Private Health Insurance in New Zealand: Complete Guide",
          "description": "Comprehensive guide to private health insurance in New Zealand",
          "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=630",
          "author": {
            "@type": "Organization",
            "name": "HealthCompare NZ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "HealthCompare NZ",
            "logo": {
              "@type": "ImageObject",
              "url": "https://healthinsurancecomparison.co.nz/logo.png"
            }
          },
          "datePublished": "2025-01-01",
          "dateModified": new Date().toISOString()
        }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Private Health Insurance in New Zealand
          </h1>
          <p className="text-xl text-gray-600">
            Your comprehensive guide to private health coverage
          </p>
        </header>

        <div className="prose max-w-none">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=630" 
            alt="Modern hospital facility in New Zealand showing private healthcare environment"
            className="w-full rounded-lg mb-8"
          />

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Private Health Insurance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Faster Access</h3>
                <p className="text-gray-600">Skip public waiting lists and get treatment when you need it</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heart className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Choice of Provider</h3>
                <p className="text-gray-600">Select your preferred specialists and hospitals</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Comprehensive Cover</h3>
                <p className="text-gray-600">Access treatments not covered by public healthcare</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2>Understanding Private Health Insurance</h2>
            <p>
              Private health insurance in New Zealand provides access to private healthcare services, 
              complementing the public health system. It offers faster access to treatment, choice of 
              healthcare providers, and coverage for services not available through public healthcare.
            </p>
          </section>

          <section className="mb-12">
            <h2>Key Benefits of Private Health Insurance</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Shorter waiting times for treatment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Choice of specialist and hospital</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Access to latest treatments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Private hospital rooms</span>
              </li>
            </ul>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2>Compare Private Health Insurance Plans</h2>
            <p className="mb-6">
              Find the best private health insurance plan for your needs. Compare coverage options,
              premiums, and benefits from top NZ providers.
            </p>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Compare Plans Now
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}

export default PrivateHealthInsurance;