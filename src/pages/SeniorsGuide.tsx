import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, Calendar, CheckCircle, AlertCircle, Brain, Activity, Clock } from 'lucide-react';

function SeniorsGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Complete Guide to Health Insurance for Seniors and Pre-Retirees in New Zealand (2025)
        </h1>
        <p className="text-xl text-gray-600">
          Expert advice on securing comprehensive health coverage after 50
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
            <a href="#why-matters" className="text-blue-600 hover:underline">Why It Matters</a>
          </li>
          <li>
            <a href="#key-coverage" className="text-blue-600 hover:underline">Key Coverage Areas</a>
          </li>
          <li>
            <a href="#providers" className="text-blue-600 hover:underline">Best Providers for Seniors</a>
          </li>
          <li>
            <a href="#strategies" className="text-blue-600 hover:underline">Cost-Saving Strategies</a>
          </li>
        </ul>
      </nav>

      {/* Introduction */}
      <section className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Understanding Health Insurance Needs as You Age
        </h2>
        <p className="text-gray-600 leading-relaxed">
          As we enter our 50s and beyond, our healthcare needs evolve, making comprehensive health insurance coverage more crucial than ever. This guide will help you navigate the complexities of health insurance in New Zealand's unique healthcare landscape.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
          <p className="text-blue-900">
            <strong>Key Takeaway:</strong> While New Zealand's public healthcare system provides essential services, private health insurance offers seniors faster access to specialists, broader treatment options, and peace of mind during retirement years.
          </p>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why-matters" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Health Insurance Matters More After 50
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Activity className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Increased Health Risks</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Higher likelihood of chronic conditions</li>
              <li>More frequent medical check-ups</li>
              <li>Greater need for specialist care</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Clock className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Faster Access</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Reduced waiting times</li>
              <li>Choice of specialists</li>
              <li>Convenient appointment scheduling</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Shield className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Protection</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Coverage for major procedures</li>
              <li>Protection against high medical costs</li>
              <li>Preserve retirement savings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Coverage Areas */}
      <section id="key-coverage" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Critical Coverage Areas for Seniors
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Essential Coverage Components</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Medical Services</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Specialist consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Diagnostic testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Surgical procedures</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Additional Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Prescription medication support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Rehabilitation services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Mental health support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Providers Section */}
      <section id="providers" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Top Insurance Providers for Seniors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/reviews/southern-cross" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Southern Cross</h3>
            <p className="text-gray-600 mb-4">Comprehensive senior-specific plans with extensive provider network and proven track record.</p>
            <span className="text-blue-600 hover:underline">View Senior Plans →</span>
          </Link>
          
          <Link to="/reviews/nib" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">nib</h3>
            <p className="text-gray-600 mb-4">Flexible coverage options with competitive rates for over-50s and retirees.</p>
            <span className="text-blue-600 hover:underline">View Senior Plans →</span>
          </Link>
        </div>
      </section>

      {/* Cost-Saving Strategies */}
      <section id="strategies" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Smart Ways to Manage Insurance Costs
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Practical Tips</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Choose the Right Excess</span>
                  <p className="text-gray-600">Opt for a higher excess to reduce premiums, but ensure it's manageable for your budget.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Take Advantage of Discounts</span>
                  <p className="text-gray-600">Many insurers offer loyalty rewards and wellness program benefits for seniors.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold">Review Annually</span>
                  <p className="text-gray-600">Regular policy reviews ensure you're not paying for coverage you don't need.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Common Questions from Seniors
        </h2>
        <div className="space-y-6">
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
              Can I get health insurance after 50?
            </summary>
            <p className="mt-4 text-gray-600">
              Yes, many insurers offer specialized plans for seniors. While premiums may be higher, the coverage benefits often outweigh the costs. Some providers even offer specific advantages for long-term members.
            </p>
          </details>
          
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
              What about pre-existing conditions?
            </summary>
            <p className="mt-4 text-gray-600">
              Pre-existing conditions may be covered with specific terms or waiting periods. It's essential to be upfront about your medical history when applying. Some insurers offer more favorable terms for certain pre-existing conditions.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Secure Your Health Coverage?</h2>
        <p className="text-blue-100 mb-6">
          Compare senior-friendly health insurance plans and find coverage that fits your needs.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/compare"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50"
          >
            Compare Senior Plans
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
              <p className="text-sm text-gray-600">Helping seniors make informed healthcare decisions</p>
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

export default SeniorsGuide;