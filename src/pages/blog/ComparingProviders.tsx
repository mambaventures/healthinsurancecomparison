import React from 'react';
import { Calendar, Clock, ArrowLeft, Shield, Star, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

const ComparingProviders: React.FC = () => {
  return (
    <>
      <SEO
        title="Comparing Health Insurance Providers NZ 2025 | HealthCompare NZ"
        description="In-depth comparison of New Zealand's top health insurance providers. Compare coverage, prices, and benefits from Southern Cross, nib, AIA and more."
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Top Health Insurance Providers in NZ: 2025 Comparison",
          "description": "Comprehensive comparison of New Zealand health insurance providers",
          "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=600",
          "datePublished": "2025-02-10",
          "dateModified": new Date().toISOString(),
          "author": {
            "@type": "Organization",
            "name": "HealthCompare NZ"
          }
        }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-4">
            Comparison
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Top Health Insurance Providers in NZ: 2025 Comparison
          </h1>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>February 10, 2025</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>15 min read</span>
          </div>
        </header>

        <img
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=600"
          alt="Comparing Health Insurance Providers"
          className="w-full rounded-lg mb-8"
        />

        <div className="prose max-w-none">
          <h2>Introduction to Health Insurance Providers in New Zealand</h2>
          <p>
            Choosing the right health insurance provider is a crucial decision that can significantly impact your healthcare experience and financial well-being. New Zealand's health insurance market features several established providers, each offering unique benefits and coverage options. This comprehensive comparison will help you understand the key differences between major providers and make an informed decision about your health insurance coverage.
          </p>

          <h2>Major Health Insurance Providers Overview</h2>
          
          <h3>Southern Cross Healthcare</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">Company Profile</h4>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1">4.8/5</span>
              </div>
            </div>
            <p className="mb-4">
              As New Zealand's largest health insurance provider, Southern Cross operates as a not-for-profit organization, reinvesting surplus funds into member benefits. With over 60 years of experience, they serve approximately 900,000 New Zealanders.
            </p>
            <h5 className="font-semibold mb-2">Key Strengths:</h5>
            <ul>
              <li>Extensive provider network</li>
              <li>Competitive premiums due to not-for-profit status</li>
              <li>High member satisfaction rates</li>
              <li>Easy-to-use digital services</li>
              <li>Comprehensive coverage options</li>
            </ul>
            <h5 className="font-semibold mt-4 mb-2">Popular Plans:</h5>
            <ul>
              <li>Wellbeing Starter</li>
              <li>Wellbeing One</li>
              <li>Wellbeing Two</li>
              <li>UltraCare</li>
            </ul>
          </div>

          <h3>nib New Zealand</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">Company Profile</h4>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1">4.6/5</span>
              </div>
            </div>
            <p className="mb-4">
              nib is known for their innovative approach to health insurance and digital-first services. They offer flexible plans that can be customized to individual needs and budgets.
            </p>
            <h5 className="font-semibold mb-2">Key Strengths:</h5>
            <ul>
              <li>Flexible coverage options</li>
              <li>Digital health services</li>
              <li>Competitive pricing for young adults</li>
              <li>Easy online claims process</li>
              <li>Telehealth services</li>
            </ul>
            <h5 className="font-semibold mt-4 mb-2">Popular Plans:</h5>
            <ul>
              <li>Basic Hospital Cover</li>
              <li>Standard Hospital Cover</li>
              <li>Premium Hospital Cover</li>
              <li>Ultimate Health Max</li>
            </ul>
          </div>

          <h3>AIA New Zealand</h3>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">Company Profile</h4>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-1">4.7/5</span>
              </div>
            </div>
            <p className="mb-4">
              AIA distinguishes itself through the AIA Vitality program, which rewards healthy lifestyle choices. Their comprehensive coverage options include both traditional health insurance and innovative wellness benefits.
            </p>
            <h5 className="font-semibold mb-2">Key Strengths:</h5>
            <ul>
              <li>AIA Vitality wellness program</li>
              <li>Comprehensive mental health coverage</li>
              <li>Lifestyle rewards and benefits</li>
              <li>Strong international presence</li>
              <li>Integrated health management approach</li>
            </ul>
            <h5 className="font-semibold mt-4 mb-2">Popular Plans:</h5>
            <ul>
              <li>Real Health</li>
              <li>Private Health Plus</li>
              <li>Private Health</li>
              <li>Vitality Health Plus</li>
            </ul>
          </div>

          <h2>Detailed Coverage Comparison</h2>
          
          <h3>Hospital Coverage</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Southern Cross</th>
                  <th>nib</th>
                  <th>AIA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Private Hospital</td>
                  <td>Full coverage</td>
                  <td>Full coverage</td>
                  <td>Full coverage</td>
                </tr>
                <tr>
                  <td>Non-Pharmac Medicines</td>
                  <td>Optional</td>
                  <td>Included in premium plans</td>
                  <td>Included in premium plans</td>
                </tr>
                <tr>
                  <td>Specialist Fees</td>
                  <td>Full coverage</td>
                  <td>Full coverage</td>
                  <td>Full coverage</td>
                </tr>
                <tr>
                  <td>Cancer Treatment</td>
                  <td>Comprehensive</td>
                  <td>Comprehensive</td>
                  <td>Comprehensive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Additional Benefits Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Southern Cross</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Easy-claim app</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Member discounts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Wellness resources</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">nib</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Digital health platform</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Telehealth services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Reward programs</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">AIA</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>AIA Vitality program</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Mental health support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Lifestyle benefits</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>Premium Structures and Pricing</h2>
          <p>
            Insurance premiums vary based on several factors:
          </p>
          <ul>
            <li>Age and gender</li>
            <li>Smoking status</li>
            <li>Level of coverage</li>
            <li>Excess options</li>
            <li>Pre-existing conditions</li>
          </ul>

          <h3>Premium Comparison Example</h3>
          <p>
            Below is a general comparison for a 35-year-old non-smoker seeking comprehensive coverage:
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm my-4">
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>Southern Cross Wellbeing Two</span>
                <span className="font-semibold">$45-60 per month</span>
              </li>
              <li className="flex justify-between items-center">
                <span>nib Premium Hospital Cover</span>
                <span className="font-semibold">$40-55 per month</span>
              </li>
              <li className="flex justify-between items-center">
                <span>AIA Private Health Plus</span>
                <span className="font-semibold">$50-65 per month</span>
              </li>
            </ul>
          </div>

          <h2>Claims Process Comparison</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Southern Cross</h3>
              <ul className="space-y-2">
                <li>Digital claims through My Southern Cross app</li>
                <li>Easy-claim at participating providers</li>
                <li>Online portal for claims tracking</li>
                <li>48-hour claim processing target</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">nib</h3>
              <ul className="space-y-2">
                <li>Online claims portal</li>
                <li>Mobile app for claims submission</li>
                <li>Direct provider claiming available</li>
                <li>Real-time claims tracking</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">AIA</h3>
              <ul className="space-y-2">
                <li>Digital claims platform</li>
                <li>Integration with AIA Vitality</li>
                <li>Provider direct billing</li>
                <li>Fast-track claims processing</li>
              </ul>
            </div>
          </div>

          <h2>Customer Service and Support</h2>
          <div className="space-y-4">
            <p>
              Each provider offers different levels of customer support:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Support Channels</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold">Southern Cross</h4>
                  <ul className="space-y-2">
                    <li>24/7 online support</li>
                    <li>Phone support</li>
                    <li>Branch network</li>
                    <li>Mobile app support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">nib</h4>
                  <ul className="space-y-2">
                    <li>Online chat</li>
                    <li>Phone support</li>
                    <li>Digital help center</li>
                    <li>Email support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold">AIA</h4>
                  <ul className="space-y-2">
                    <li>Personal advisers</li>
                    <li>Phone support</li>
                    <li>Online portal</li>
                    <li>Vitality support team</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Making Your Decision</h2>
          <div className="space-y-4">
            <p>
              Consider these factors when choosing a provider:
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4">Decision Checklist</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Compare coverage levels and benefits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Evaluate premium costs and payment options</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Review provider networks and accessibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Consider additional benefits and rewards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>Assess customer service quality</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>Conclusion</h2>
          <p>
            Each health insurance provider in New Zealand offers unique advantages and specializes in different areas. Southern Cross excels in comprehensive coverage and member benefits, nib stands out for flexibility and digital services, while AIA differentiates itself through wellness integration and rewards. The best choice depends on your individual needs, budget, and healthcare priorities.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Compare Health Insurance Plans?</h3>
            <p className="mb-4">
              Use our comparison tool to find the best health insurance plan for your needs.
            </p>
            <Link
              to="/compare"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Compare Plans Now
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default ComparingProviders;