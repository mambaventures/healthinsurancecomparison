import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, DollarSign, Search, CheckCircle, AlertCircle, Calendar, Brain, Heart } from 'lucide-react';

function InsuranceGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Smart Ways to Find Affordable Health Insurance in New Zealand (2025 Guide)
        </h1>
        <p className="text-xl text-gray-600">
          A comprehensive guide to securing quality health coverage without breaking the bank
        </p>
        <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-2" />
          Last Updated: {new Date().toLocaleDateString('en-NZ')}
        </div>
      </header>

      {/* Quick Navigation */}
      <nav className="bg-gray-50 p-6 rounded-lg mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <li>
            <a href="#understanding" className="text-blue-600 hover:underline">Understanding NZ Health Insurance</a>
          </li>
          <li>
            <a href="#key-considerations" className="text-blue-600 hover:underline">Key Considerations</a>
          </li>
          <li>
            <a href="#money-saving" className="text-blue-600 hover:underline">Money-Saving Strategies</a>
          </li>
          <li>
            <a href="#providers" className="text-blue-600 hover:underline">Top Insurance Providers</a>
          </li>
        </ul>
      </nav>

      {/* Introduction */}
      <section className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Navigating Health Insurance on a Budget in 2025
        </h2>
        <p className="text-gray-600 leading-relaxed">
          In today's challenging economic environment, finding affordable health insurance that provides comprehensive coverage is more important than ever. With rising healthcare costs and increasing demand for private medical services, New Zealanders need smart strategies to secure quality health coverage without compromising their financial wellbeing.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
          <p className="text-blue-900">
            <strong>Key Takeaway:</strong> Quality health insurance doesn't always mean expensive premiums. This guide will show you how to find the right balance between cost and coverage.
          </p>
        </div>
      </section>

      {/* Understanding the Landscape */}
      <section id="understanding" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Understanding New Zealand's Health Insurance Landscape
        </h2>
        <p className="text-gray-600 leading-relaxed">
          New Zealand's healthcare system combines public and private options, creating a unique environment for insurance seekers. While the public system provides essential services, private health insurance offers additional benefits and faster access to treatment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Public Healthcare</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Essential medical services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Accident coverage through ACC</span>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                <span>Potential waiting times for non-urgent care</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Private Insurance Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Faster access to treatment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Choice of healthcare providers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Coverage for non-urgent procedures</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Considerations */}
      <section id="key-considerations" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Key Considerations for Budget-Conscious Insurance Shoppers
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Assess Your Individual Needs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Brain className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Personal Health Profile</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Current health conditions</li>
                  <li>Family medical history</li>
                  <li>Lifestyle factors</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Heart className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Coverage Requirements</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Essential treatments</li>
                  <li>Specialist care needs</li>
                  <li>Preventive care</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Budget Constraints</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Monthly premium capacity</li>
                  <li>Excess preferences</li>
                  <li>Long-term affordability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money-Saving Strategies */}
      <section id="money-saving" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Proven Strategies to Save on Health Insurance
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Choose the Right Coverage Level</h3>
            <p className="text-gray-600 mb-4">
              Match your coverage to your actual needs. Consider these options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Basic Plans</h4>
                <p className="text-sm text-gray-600">Perfect for young, healthy individuals needing essential coverage</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Mid-Tier Plans</h4>
                <p className="text-sm text-gray-600">Balanced coverage for families and individuals with occasional health needs</p>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Comprehensive Plans</h4>
                <p className="text-sm text-gray-600">Full coverage for those with specific health conditions or frequent medical needs</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Take Advantage of Discounts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Non-smoker discounts can save up to 15% on premiums</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Wellness program participation often leads to reduced rates</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span className="text-gray-600">Multi-policy discounts for bundling insurance products</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Top Providers Section */}
      <section id="providers" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Leading Health Insurance Providers in New Zealand
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/reviews/southern-cross" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Southern Cross</h3>
            <p className="text-gray-600 mb-4">New Zealand's largest health insurer, known for comprehensive coverage and excellent customer service.</p>
            <span className="text-blue-600 hover:underline">Read full review →</span>
          </Link>
          
          <Link to="/reviews/nib" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">nib</h3>
            <p className="text-gray-600 mb-4">Offers flexible plans and innovative digital health services at competitive rates.</p>
            <span className="text-blue-600 hover:underline">Read full review →</span>
          </Link>
          
          <Link to="/reviews/aia" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">AIA</h3>
            <p className="text-gray-600 mb-4">Features unique wellness programs and comprehensive health coverage options.</p>
            <span className="text-blue-600 hover:underline">Read full review →</span>
          </Link>
          
          <Link to="/reviews/partners-life" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Partners Life</h3>
            <p className="text-gray-600 mb-4">Known for innovative policy features and excellent trauma coverage.</p>
            <span className="text-blue-600 hover:underline">Read full review →</span>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
              How much should I expect to pay for health insurance in New Zealand?
            </summary>
            <p className="mt-4 text-gray-600">
              Monthly premiums typically range from $30 to $300, depending on your age, coverage level, and chosen provider. Young, healthy individuals can often secure basic coverage for under $50 per month, while comprehensive family plans may cost $200 or more.
            </p>
          </details>
          
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
              What's the best time to purchase health insurance?
            </summary>
            <p className="mt-4 text-gray-600">
              The best time to buy is when you're young and healthy, as premiums are lower and you'll have fewer pre-existing condition exclusions. Many providers also offer special promotions at the start of the financial year or during specific campaign periods.
            </p>
          </details>
          
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
              Can I change providers if I find a better deal?
            </summary>
            <p className="mt-4 text-gray-600">
              Yes, you can switch providers, but be careful to review waiting periods and pre-existing condition terms. It's important to maintain continuous coverage during the transition to avoid new waiting periods.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Health Insurance Plan?</h2>
        <p className="text-blue-100 mb-6">
          Compare top providers and get personalized quotes tailored to your needs and budget.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/compare"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
          >
            Compare Plans
          </Link>
          <Link
            to="/quotes"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Author Info */}
      <footer className="mt-12 border-t pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="w-12 h-12 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">HealthCompare NZ</p>
              <p className="text-sm text-gray-600">Your trusted source for health insurance information</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-NZ')}</p>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default InsuranceGuide;