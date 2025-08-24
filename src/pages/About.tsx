import React from 'react';
import { Shield, Users, Trophy, Heart } from 'lucide-react';
import SEO from '../components/SEO';

function About() {
  return (
    <>
      <SEO
        title="About Health Insurance Comparison | Your Health Insurance Comparison Experts"
        description="Learn about Health Insurance Comparison, your trusted source for health insurance comparisons in New Zealand. Meet our expert team and discover our mission."
        canonicalUrl="https://healthinsurancecomparison.co.nz/about"
        keywords={[
          'about health insurance comparison',
          'health insurance experts nz',
          'health insurance comparison team',
          'health insurance comparison service'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About Health Insurance Comparison",
          "description": "About Health Insurance Comparison - Your Health Insurance Comparison Experts",
          "mainEntity": {
            "@type": "Organization",
            "name": "Health Insurance Comparison",
            "description": "Health insurance comparison service in New Zealand",
            "url": "https://healthinsurancecomparison.co.nz",
            "foundingDate": "2024"
          }
        }}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
            <p className="text-gray-600">Your reliable partner in finding the right health insurance coverage</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Dedicated professionals with years of insurance industry experience</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Trophy className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Deals</h3>
            <p className="text-gray-600">We negotiate the best rates and coverage options for our clients</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
            <Heart className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
            <p className="text-gray-600">Personalized support throughout your insurance journey</p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-8">
            At Health Insurance Comparison, we're committed to simplifying the health insurance selection process for New Zealanders. Our goal is to provide transparent, unbiased comparisons and expert guidance to help you make informed decisions about your health coverage.
          </p>
          <p className="text-lg text-gray-700">
            Founded in 2024, we've quickly become a trusted resource for individuals, families, and businesses seeking the best health insurance solutions. Our team of experienced professionals works tirelessly to ensure you get the coverage you need at the best possible value.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;