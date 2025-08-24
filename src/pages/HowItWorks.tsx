import React from 'react';
import { Search, FileCheck, UserCheck, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import ProcessFlow from '../components/ProcessFlow';
import NeedsAssessment from '../components/NeedsAssessment';

function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Compare Plans",
      description: "Enter your details and preferences to see side-by-side comparisons of health insurance plans from top providers."
    },
    {
      icon: FileCheck,
      title: "Choose Your Plan",
      description: "Review coverage options, prices, and benefits to select the plan that best fits your needs and budget."
    },
    {
      icon: UserCheck,
      title: "Apply Online",
      description: "Complete your application online in minutes. Our team is here to help if you need assistance."
    },
    {
      icon: CheckCircle,
      title: "Get Covered",
      description: "Once approved, your coverage begins immediately or after any applicable waiting periods."
    }
  ];

  const benefits = [
    {
      title: "Free Comparison Service",
      description: "Our service is completely free to use. We receive commission from providers when you purchase a policy."
    },
    {
      title: "Unbiased Information",
      description: "We provide transparent, factual comparisons to help you make informed decisions."
    },
    {
      title: "Expert Support",
      description: "Our team of insurance experts is available to answer your questions and provide guidance."
    },
    {
      title: "Save Time and Money",
      description: "Compare multiple providers in one place to find the best value for your needs."
    }
  ];

  return (
    <>
      <SEO
        title="How Health Insurance Comparison Works | HealthCompare NZ"
        description="Learn how to compare and find the best health insurance in NZ. Simple step-by-step guide to choosing the right coverage for your needs."
        schema={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Compare Health Insurance",
          "step": [
            {
              "@type": "HowToStep",
              "text": "Enter your details and preferences to see side-by-side comparisons of health insurance plans."
            },
            {
              "name": "Choose Your Plan",
              "text": "Review coverage options, prices, and benefits to select the best plan."
            },
            {
              "@type": "HowToStep",
              "name": "Apply Online",
              "text": "Complete your application online in minutes with expert assistance available."
            },
            {
              "@type": "HowToStep",
              "name": "Get Covered",
              "text": "Start enjoying your health insurance benefits."
            }
          ]
        }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold">How It Works</h1>
            <p className="mt-4 text-xl text-blue-100">
              Finding the right health insurance is easy with HealthCompare NZ
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <ProcessFlow />
          
          {/* Steps Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-full p-6 w-20 h-20 mx-auto flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              We make it easy to find and compare health insurance plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">Ready to Find Your Perfect Plan?</h2>
            <p className="mt-4 text-xl text-blue-100">
              Compare health insurance plans from top providers in minutes
            </p>
            <div className="mt-8">
              <a
                href="/quotes"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Your Quote Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;