import React from 'react';
import { Shield, CheckCircle, ArrowRight, Star, Clock, Lock, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Adv1() {
  return (
    <>
      <SEO
        title="REVEALED: How Kiwis Are Saving 30% On Health Insurance | Special Report"
        description="Exclusive: New comparison service helps New Zealanders save up to 30% on health insurance. Limited time offer - Compare now and save."
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Headline Section */}
        <div className="bg-white py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">SPECIAL REPORT</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              REVEALED: How Kiwis Are Saving Up To
              <span className="text-red-600"> 30% On Health Insurance</span>
            </h1>
          </div>
        </div>

        {/* Hero Section with Background Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=2000"
            alt="Medical Professional"
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <p className="text-lg sm:text-xl md:text-2xl text-black font-semibold mb-6 sm:mb-8 bg-white/80 p-4 rounded-lg inline-block">
                  New Comparison Service Helps New Zealand Families Save Hundreds on Health Coverage
                </p>
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center bg-white/80 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    <span className="ml-2 text-black">Rated 4.8/5 by Customers</span>
                  </div>
                  <div className="flex items-center bg-white/80 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    <span className="ml-2 text-black">FSP Licensed Service</span>
                  </div>
                  <div className="flex items-center bg-white/80 px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    <span className="ml-2 text-black">Takes Only 2 Minutes</span>
                  </div>
                </div>
                <Link
                  to="/quotes"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-red-600 text-white rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors transform hover:scale-105"
                >
                  Compare & Save Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-16 relative z-10">
          {/* Featured Story */}
          <div className="bg-white rounded-xl shadow-xl p-6 sm:p-8 mb-8">
            <span className="text-sm font-semibold text-gray-500">ADVERTORIAL</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4 mb-6">
              "I Saved $840 Per Year By Comparing Health Insurance Plans"
            </h2>
            <p className="text-gray-700 mb-6">
              Auckland resident Sarah Thompson couldn't believe how much she was overpaying for health insurance until she discovered this new comparison service. "I was skeptical at first, but after a quick 2-minute comparison, I found a better plan that saved me $70 every month. The process was incredibly easy!"
            </p>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-900 font-semibold">
                Thousands of Kiwis are using this free service to save money on their health insurance. Here's how you can too:
              </p>
            </div>
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <p className="text-gray-700">Compare quotes from top NZ providers in one place</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <p className="text-gray-700">Licensed advisors help you find the best coverage</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <p className="text-gray-700">Save up to 30% on your premiums</p>
              </div>
            </div>
            <Link
              to="/quotes"
              className="block w-full bg-red-600 text-white text-center px-6 py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors transform hover:scale-105"
            >
              Get Your Free Quote Now
            </Link>
            <p className="text-center text-sm text-gray-500 mt-4">
              Free Comparison Service • No Obligation • 100% Secure
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
            {[
              {
                name: "Chubb Insurance",
                logo: "/logos/chubb.jpg"
              },
              {
                name: "nib Insurance",
                logo: "/logos/nib.png"
              },
              {
                name: "AIA Insurance",
                logo: "/logos/AIA.png"
              },
              {
                name: "Partners Life",
                logo: "/logos/PartnersLife_logo.png"
              }
            ].map(provider => (
              <div
                key={provider.name}
                className="bg-white rounded-lg p-4 flex items-center justify-center h-16 hover:shadow-md transition-shadow"
              >
                <img 
                  src={provider.logo} 
                  alt={provider.name} 
                  className="h-8 sm:h-10 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Customer Stories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Real Stories from Real Kiwis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  name: "David Wilson",
                  location: "Wellington",
                  saving: "$520",
                  text: "Found better coverage for less than what I was paying. The comparison tool made it so easy to find the right plan."
                },
                {
                  name: "Michelle Lee",
                  location: "Christchurch",
                  saving: "$720",
                  text: "I was paying too much for years! Switched providers and now have better coverage for less."
                },
                {
                  name: "John Parker",
                  location: "Hamilton",
                  saving: "$940",
                  text: "Couldn't believe how much I could save. The whole process took less than 5 minutes."
                }
              ].map((story, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">"{story.text}"</p>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">{story.name}</p>
                    <p className="text-gray-500">{story.location}</p>
                    <p className="text-green-600 font-semibold mt-2">Saved {story.saving}/year</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Don't Wait - Start Saving Today!</h2>
            <p className="text-blue-100 mb-6">
              Join thousands of Kiwis who are saving money on their health insurance.
            </p>
            <Link
              to="/quotes"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors transform hover:scale-105"
            >
              Compare & Save Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Simple Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <span className="ml-2 text-xl font-bold text-gray-900">Health Insurance Comparison</span>
                </div>
                <p className="text-sm text-gray-600">
                  Helping New Zealanders find the right health insurance coverage.
                </p>
              </div>
              <div className="text-right">
                <div className="space-y-2">
                  <div className="flex items-center justify-end text-sm text-gray-600">
                    <Lock className="w-4 h-4 mr-2" />
                    <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                  </div>
                  <div className="flex items-center justify-end text-sm text-gray-600">
                    <FileCheck className="w-4 h-4 mr-2" />
                    <Link to="/terms" className="hover:text-blue-600">Terms of Service</Link>
                  </div>
                  <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Health Insurance Comparison
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Adv1;