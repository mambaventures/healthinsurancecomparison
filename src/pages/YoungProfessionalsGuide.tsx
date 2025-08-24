import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Briefcase, Target, Calendar, CheckCircle, AlertCircle, Brain, DollarSign, Heart } from 'lucide-react';

function YoungProfessionalsGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Young Professionals' Guide to Health Insurance in New Zealand (2025)
        </h1>
        <p className="text-xl text-gray-600">
          Smart strategies for securing the right health coverage early in your career
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
            <a href="#coverage-options" className="text-blue-600 hover:underline">Coverage Options</a>
          </li>
          <li>
            <a href="#smart-choices" className="text-blue-600 hover:underline">Making Smart Choices</a>
          </li>
          <li>
            <a href="#providers" className="text-blue-600 hover:underline">Best Providers</a>
          </li>
        </ul>
      </nav>

      {/* Introduction */}
      <section className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Starting Your Health Insurance Journey
        </h2>
        <p className="text-gray-600 leading-relaxed">
          As a young professional in New Zealand, navigating health insurance might seem daunting, but it's a crucial step in building a secure future. This guide will help you understand your options and make informed decisions about your health coverage.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 my-6">
          <p className="text-blue-900">
            <strong>Key Takeaway:</strong> Starting health insurance early in your career often means lower premiums and better coverage options, setting a strong foundation for your future healthcare needs.
          </p>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section id="why-matters" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Why Health Insurance Matters for Young Professionals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Briefcase className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Career Protection</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Minimize work disruptions</li>
              <li>Quick access to treatment</li>
              <li>Support career momentum</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Target className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Future Planning</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Lock in lower premiums</li>
              <li>Build health history</li>
              <li>Avoid pre-existing conditions</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Heart className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifestyle Benefits</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Wellness programs</li>
              <li>Preventive care</li>
              <li>Mental health support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section id="coverage-options" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Understanding Your Coverage Options
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Coverage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Essential Coverage</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Hospital and surgical</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">GP visits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Prescription medicines</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Additional Benefits</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Mental health services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Dental and optical</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Wellness programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Choices Section */}
      <section id="smart-choices" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Making Smart Insurance Choices
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Considerations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Brain className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Assess Your Needs</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Current health status</li>
                  <li>Family history</li>
                  <li>Lifestyle factors</li>
                </ul>
              </div>
              <div>
                <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Budget Planning</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Premium affordability</li>
                  <li>Excess options</li>
                  <li>Payment flexibility</li>
                </ul>
              </div>
              <div>
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h4 className="font-semibold mb-2">Future-Proofing</h4>
                <ul className="text-gray-600 space-y-2">
                  <li>Career growth plans</li>
                  <li>Family planning</li>
                  <li>Long-term coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Providers Section */}
      <section id="providers" className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Top Insurance Providers for Young Professionals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/reviews/southern-cross" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Southern Cross</h3>
            <p className="text-gray-600 mb-4">Comprehensive plans with excellent digital services and wellness benefits.</p>
            <span className="text-blue-600 hover:underline">View Plans →</span>
          </Link>
          
          <Link to="/reviews/nib" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">nib</h3>
            <p className="text-gray-600 mb-4">Flexible coverage options with competitive rates for young professionals.</p>
            <span className="text-blue-600 hover:underline">View Plans →</span>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="prose max-w-none mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Common Questions from Young Professionals
        </h2>
        <div className="space-y-6">
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
              How much should I expect to pay for health insurance?
            </summary>
            <p className="mt-4 text-gray-600">
              As a young professional, you can expect to pay between $30-$150 per month, depending on your coverage level and provider. Starting early often means lower premiums and better long-term value.
            </p>
          </details>
          
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="text-xl font-semibold text-gray-900 cursor-pointer">
              Can I change my plan as my career progresses?
            </summary>
            <p className="mt-4 text-gray-600">
              Yes, most providers offer flexible plans that can be adjusted as your needs change. It's important to review your coverage annually and make adjustments as your career and life circumstances evolve.
            </p>
          </details>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Health Insurance Journey?</h2>
        <p className="text-blue-100 mb-6">
          Compare plans designed for young professionals and find coverage that fits your lifestyle.
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
              <p className="text-sm text-gray-600">Guiding young professionals to smart health coverage decisions</p>
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

export default YoungProfessionalsGuide;