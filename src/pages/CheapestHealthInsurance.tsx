import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Shield, CheckCircle, ArrowRight, Star, TrendingDown } from 'lucide-react';
import SEO from '../components/SEO';

function CheapestHealthInsurance() {
  return (
    <>
      <SEO
        title="Cheapest Health Insurance NZ 2025 - Compare Low-Cost Plans from $25/month"
        description="Find the cheapest health insurance in New Zealand. Compare affordable plans from top providers starting from just $25/month. Get quotes instantly and save up to 40%."
        canonicalUrl="https://healthinsurancecomparison.co.nz/cheapest-health-insurance-nz"
        keywords={[
          'cheapest health insurance nz',
          'cheap health insurance new zealand',
          'affordable health insurance nz',
          'low cost health insurance',
          'budget health insurance nz',
          'cheap health cover nz'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Cheapest Health Insurance NZ",
          "description": "Find the most affordable health insurance plans in New Zealand",
          "url": "https://healthinsurancecomparison.co.nz/cheapest-health-insurance-nz"
        }}
      />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Cheapest Health Insurance NZ 2025
              </h1>
              <p className="text-xl sm:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
                Compare affordable health insurance plans from just $25/month. Save up to 40% with our exclusive deals.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
                <div className="flex items-center bg-green-500/30 px-6 py-3 rounded-full">
                  <TrendingDown className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Plans from $25/month</span>
                </div>
                <div className="flex items-center bg-green-500/30 px-6 py-3 rounded-full">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Save up to 40%</span>
                </div>
              </div>
              
              <Link
                to="/quotes"
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg"
              >
                Compare Cheapest Plans Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Cheapest Plans Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Most Affordable Health Insurance Plans NZ
              </h2>
              <p className="text-xl text-gray-600">
                Compare the lowest-cost health insurance options from trusted NZ providers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  provider: "Accuro Health",
                  plan: "Basic Cover",
                  price: 25,
                  features: ["$5,000 cover amount", "No medical tests", "Accident cover included", "Online application"]
                },
                {
                  provider: "nib Health",
                  plan: "Starter Plan",
                  price: 29,
                  features: ["$7,500 cover amount", "Pre-existing conditions covered", "Mental health support", "24/7 helpline"]
                },
                {
                  provider: "Partners Life",
                  plan: "Essential Health",
                  price: 32,
                  features: ["$10,000 cover amount", "Family discounts available", "Direct claim payments", "No waiting periods"]
                }
              ].map((plan) => (
                <div key={plan.provider} className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.provider}</h3>
                    <p className="text-gray-600 mb-4">{plan.plan}</p>
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      ${plan.price}
                      <span className="text-lg font-normal text-gray-600">/month</span>
                    </div>
                    <p className="text-sm text-gray-500">Cheapest rate shown</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/quotes"
                    className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Money Saving Tips */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How to Find Cheap Health Insurance in New Zealand
              </h2>
              <p className="text-xl text-gray-600">
                Expert tips to reduce your health insurance costs without compromising on cover
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Compare Multiple Providers</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Don't settle for the first quote. Health insurance prices can vary by up to 40% between providers for similar cover.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Get quotes from at least 3-4 providers</li>
                  <li>• Compare cover amounts and benefits</li>
                  <li>• Look for special promotions and discounts</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Choose the Right Cover Level</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Higher cover amounts cost more. Consider your financial situation and health needs when choosing cover.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• $5,000-$10,000: Basic protection</li>
                  <li>• $10,000-$25,000: Moderate cover</li>
                  <li>• $25,000+: Comprehensive protection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Cheapest Health Insurance?
            </h2>
            <p className="text-xl mb-8">
              Compare plans from all major NZ providers in under 2 minutes. No obligations, completely free.
            </p>
            <Link
              to="/quotes"
              className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-bold rounded-lg hover:bg-gray-50 transition-colors text-lg"
            >
              Compare Cheapest Plans Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default CheapestHealthInsurance;