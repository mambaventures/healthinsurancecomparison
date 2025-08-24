import React from 'react';
import { Calendar, Clock, ArrowLeft, Building2, Star, TrendingUp, CheckCircle, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function HealthInsuranceCompaniesComparison() {
  return (
    <>
      <SEO
        title="Health Insurance Companies NZ 2025 - Compare All Major Providers"
        description="Complete comparison of health insurance companies in New Zealand. Compare Southern Cross, nib, AIA, Partners Life, Accuro & more. Find the best provider for you."
        canonicalUrl="https://healthinsurancecomparison.co.nz/blog/health-insurance-companies-nz-comparison"
        keywords={[
          'health insurance companies nz',
          'health insurance providers new zealand',
          'best health insurance company nz',
          'compare health insurance providers',
          'southern cross vs nib',
          'health insurance comparison nz'
        ]}
        publishedDate="2025-08-24"
        modifiedDate="2025-08-24"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Health Insurance Companies NZ 2025 - Compare All Major Providers",
          "description": "Complete comparison of health insurance companies in New Zealand",
          "image": "https://healthinsurancecomparison.co.nz/images/blog/health-insurance-companies.jpg",
          "author": {
            "@type": "Organization",
            "name": "Health Insurance Comparison NZ"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Health Insurance Comparison NZ"
          },
          "datePublished": "2025-08-24",
          "dateModified": "2025-08-24"
        }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Insurance Companies NZ 2025: Complete Provider Comparison
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>August 24, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>12 min read</span>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <div className="flex">
              <Building2 className="flex-shrink-0 h-5 w-5 text-green-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-green-700">
                  <strong>Key Insight:</strong> New Zealand has 6 major health insurance companies, with Southern Cross holding 60% market share. 
                  Premiums can vary by up to 50% between providers for similar coverage, making comparison essential.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>Overview of NZ Health Insurance Market</h2>
          
          <p>
            New Zealand's health insurance market is dominated by a few major players, each offering different 
            strengths and coverage options. Understanding these providers will help you make an informed choice 
            for your health coverage needs.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">Market Share Breakdown (2025)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">60%</div>
                <div className="text-sm">Southern Cross</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15%</div>
                <div className="text-sm">nib Health</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">10%</div>
                <div className="text-sm">AIA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">8%</div>
                <div className="text-sm">Partners Life</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">5%</div>
                <div className="text-sm">Accuro</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">2%</div>
                <div className="text-sm">Others</div>
              </div>
            </div>
          </div>

          <h2>Detailed Provider Comparison</h2>

          <div className="space-y-8 my-8">
            {/* Southern Cross */}
            <div className="border-2 border-blue-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Building2 className="w-8 h-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">Southern Cross Health Society</h3>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">4.5/5 Customer Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">Market Leader</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">✓ Strengths</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Largest provider network in NZ</li>
                    <li>• 85+ years in business</li>
                    <li>• Comprehensive plan options</li>
                    <li>• Not-for-profit organization</li>
                    <li>• Strong hospital partnerships</li>
                    <li>• 24/7 customer support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">✗ Considerations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Higher premiums than competitors</li>
                    <li>• Complex plan structure</li>
                    <li>• Longer application process</li>
                    <li>• Some plans have high excesses</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-3">Plans & Pricing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Basic: $65-95/month</li>
                    <li>• Standard: $95-145/month</li>
                    <li>• Comprehensive: $145-220/month</li>
                    <li>• UltraCare: $220+/month</li>
                  </ul>
                  <div className="mt-3">
                    <strong className="text-sm">Best for:</strong>
                    <p className="text-xs text-gray-600">Comprehensive coverage seekers, older adults</p>
                  </div>
                </div>
              </div>
            </div>

            {/* nib Health */}
            <div className="border-2 border-green-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Building2 className="w-8 h-8 text-green-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">nib Health Insurance</h3>
                    <div className="flex items-center">
                      {[1,2,3,4].map(star => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">4.2/5 Customer Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">Best Value</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">✓ Strengths</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Competitive pricing</li>
                    <li>• Simple plan structure</li>
                    <li>• Quick online quotes</li>
                    <li>• No lock-in contracts</li>
                    <li>• Good digital experience</li>
                    <li>• Fast claim processing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">✗ Considerations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Smaller provider network</li>
                    <li>• Limited specialist access</li>
                    <li>• Less comprehensive plans</li>
                    <li>• Newer to NZ market (since 2007)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">Plans & Pricing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Essential: $45-75/month</li>
                    <li>• Complete: $75-115/month</li>
                    <li>• Ultimate: $115-175/month</li>
                    <li>• Family discounts available</li>
                  </ul>
                  <div className="mt-3">
                    <strong className="text-sm">Best for:</strong>
                    <p className="text-xs text-gray-600">Young professionals, budget-conscious families</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AIA */}
            <div className="border-2 border-purple-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Building2 className="w-8 h-8 text-purple-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">AIA New Zealand</h3>
                    <div className="flex items-center">
                      {[1,2,3,4].map(star => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">4.0/5 Customer Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-3 py-1 rounded-full">Family Focus</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">✓ Strengths</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Strong financial backing</li>
                    <li>• Good family coverage options</li>
                    <li>• Wellness programs included</li>
                    <li>• International coverage</li>
                    <li>• Life insurance integration</li>
                    <li>• Flexible payment options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">✗ Considerations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Complex application process</li>
                    <li>• Higher premiums for older ages</li>
                    <li>• Limited solo practitioner access</li>
                    <li>• Some exclusions common</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-3">Plans & Pricing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Essential: $55-85/month</li>
                    <li>• Comprehensive: $85-135/month</li>
                    <li>• Premium: $135-195/month</li>
                    <li>• Family packages from $180</li>
                  </ul>
                  <div className="mt-3">
                    <strong className="text-sm">Best for:</strong>
                    <p className="text-xs text-gray-600">Families, international travelers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners Life */}
            <div className="border-2 border-orange-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Building2 className="w-8 h-8 text-orange-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">Partners Life Health Insurance</h3>
                    <div className="flex items-center">
                      {[1,2,3,4].map(star => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-2 text-sm text-gray-600">4.3/5 Customer Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">Simple Plans</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">✓ Strengths</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Simple, easy-to-understand plans</li>
                    <li>• Competitive pricing</li>
                    <li>• Fast application process</li>
                    <li>• Good customer service</li>
                    <li>• No medical tests for basic plans</li>
                    <li>• Transparent pricing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">✗ Considerations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Limited plan variety</li>
                    <li>• Smaller provider network</li>
                    <li>• Less comprehensive coverage</li>
                    <li>• Not suitable for complex needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-600 mb-3">Plans & Pricing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Essential: $35-65/month</li>
                    <li>• Complete: $65-105/month</li>
                    <li>• Premium: $105-155/month</li>
                    <li>• Fixed pricing available</li>
                  </ul>
                  <div className="mt-3">
                    <strong className="text-sm">Best for:</strong>
                    <p className="text-xs text-gray-600">Simple needs, first-time buyers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accuro */}
            <div className="border-2 border-red-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Building2 className="w-8 h-8 text-red-600 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">Accuro Health Insurance</h3>
                    <div className="flex items-center">
                      {[1,2,3,4].map(star => (
                        <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">3.9/5 Customer Rating</span>
                    </div>
                  </div>
                </div>
                <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">Budget Option</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3">✓ Strengths</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Most affordable premiums</li>
                    <li>• Quick online application</li>
                    <li>• No waiting periods for accidents</li>
                    <li>• Straightforward claims process</li>
                    <li>• Good for basic coverage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">✗ Considerations</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Limited coverage options</li>
                    <li>• Small provider network</li>
                    <li>• Basic customer support</li>
                    <li>• Many exclusions</li>
                    <li>• Not suitable for complex needs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3">Plans & Pricing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Basic: $25-45/month</li>
                    <li>• Standard: $45-75/month</li>
                    <li>• Comprehensive: $75-115/month</li>
                    <li>• No-frills approach</li>
                  </ul>
                  <div className="mt-3">
                    <strong className="text-sm">Best for:</strong>
                    <p className="text-xs text-gray-600">Budget seekers, basic coverage needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2>Side-by-Side Comparison Table</h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Feature</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Southern Cross</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">nib</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">AIA</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Partners Life</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Accuro</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Market Share</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">60%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">15%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">10%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">8%</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">5%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Starting Price/Month</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$65</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$45</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$55</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$35</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">$25</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Provider Network</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Plan Variety</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-medium">Online Experience</td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Which Provider Should You Choose?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Choose Southern Cross if:</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                <li>✓ You want the most comprehensive coverage</li>
                <li>✓ You value the largest provider network</li>
                <li>✓ You have complex medical needs</li>
                <li>✓ You don't mind paying premium rates</li>
                <li>✓ You prefer established, trusted brands</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">Choose nib if:</h3>
              <ul className="space-y-2 text-sm text-green-700">
                <li>✓ You want good value for money</li>
                <li>✓ You prefer simple, straightforward plans</li>
                <li>✓ You're comfortable with digital-first service</li>
                <li>✓ You're a young professional or family</li>
                <li>✓ You want flexible contract terms</li>
              </ul>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Choose AIA if:</h3>
              <ul className="space-y-2 text-sm text-purple-700">
                <li>✓ You have a family and want comprehensive coverage</li>
                <li>✓ You travel internationally frequently</li>
                <li>✓ You want wellness programs included</li>
                <li>✓ You value strong financial backing</li>
                <li>✓ You want integrated life insurance options</li>
              </ul>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">Choose Partners Life if:</h3>
              <ul className="space-y-2 text-sm text-orange-700">
                <li>✓ You want simple, easy-to-understand plans</li>
                <li>✓ You're a first-time health insurance buyer</li>
                <li>✓ You prefer transparent, fixed pricing</li>
                <li>✓ You have basic health coverage needs</li>
                <li>✓ You want fast application processing</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Ready to Compare Health Insurance Companies?</h3>
            <p className="text-green-700 mb-4">
              Don't just pick the biggest name - compare all major NZ health insurance providers to find 
              the best coverage and value for your specific needs and budget.
            </p>
            <Link 
              to="/quotes" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Compare All Providers Now
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default HealthInsuranceCompaniesComparison;