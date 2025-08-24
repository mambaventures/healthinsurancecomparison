import React from 'react';
import { Calendar, Clock, ArrowLeft, Shield, Star, Trophy, Users, DollarSign, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function BestProviders() {
  return (
    <>
      <SEO
        title="Best Health Insurance Companies in New Zealand 2025 - Top Provider Rankings"
        description="Discover the best health insurance companies in New Zealand. Compare top providers, ratings, coverage options, and find the perfect health insurance for your needs."
        canonicalUrl="https://healthinsurancecomparison.co.nz/best-health-insurance-companies-nz"
        keywords={[
          'best health insurance companies nz',
          'best health insurance providers new zealand',
          'top health insurance companies nz',
          'health insurance companies nz ranking',
          'best health insurers new zealand'
        ]}
        publishedDate="2025-08-24"
        modifiedDate="2025-08-24"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Best Health Insurance Companies in New Zealand 2025 - Top Provider Rankings",
          "description": "Discover the best health insurance companies in New Zealand",
          "image": "https://healthinsurancecomparison.co.nz/images/best-health-insurance-companies.jpg",
          "author": {
            "@type": "Organization",
            "@name": "Health Insurance Comparison NZ"
          },
          "publisher": {
            "@type": "Organization",
            "@name": "Health Insurance Comparison NZ"
          },
          "datePublished": "2025-08-24",
          "dateModified": "2025-08-24"
        }}
      />
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/compare" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Compare
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Best Health Insurance Companies in New Zealand 2025
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6 space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>August 24, 2025</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span>15 min read</span>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <div className="flex">
              <Trophy className="flex-shrink-0 h-5 w-5 text-green-400 mt-0.5" />
              <div className="ml-3">
                <p className="text-green-700">
                  <strong>Our Top Picks 2025:</strong> Southern Cross leads in comprehensive coverage and network size, nib offers the best value for money, while Accuro provides excellent personalized service. Each has unique strengths depending on your priorities.
                </p>
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>How We Rank Health Insurance Companies</h2>
          
          <p>
            Our rankings are based on comprehensive analysis of key factors that matter most to New Zealand consumers:
            coverage options, pricing, customer service, claims processing speed, provider networks, and financial stability.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold">Coverage Quality</h3>
              <p className="text-sm text-gray-600">30% weighting</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold">Value for Money</h3>
              <p className="text-sm text-gray-600">25% weighting</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Star className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold">Customer Satisfaction</h3>
              <p className="text-sm text-gray-600">25% weighting</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <h3 className="font-semibold">Service & Claims</h3>
              <p className="text-sm text-gray-600">20% weighting</p>
            </div>
          </div>

          <h2>Top 6 Health Insurance Companies in New Zealand</h2>

          <div className="space-y-8 my-8">
            {/* #1 Southern Cross */}
            <div className="border border-gray-200 rounded-lg p-6 bg-gradient-to-r from-blue-50 to-white">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-yellow-400 text-yellow-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Southern Cross Health Society</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">4.2/5 (2,450 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Market Leader
                  </div>
                  <div className="text-sm text-gray-600 mt-1">60% market share</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Coverage Range</h4>
                  <p className="text-sm">$35-$180/month</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Claims Processing</h4>
                  <p className="text-sm">2-5 days (fastest)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Provider Network</h4>
                  <p className="text-sm">Largest in NZ</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Financial Rating</h4>
                  <p className="text-sm">AA- (Very Strong)</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Best For</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Comprehensive coverage seekers</li>
                    <li>✓ Fast claims processing priority</li>
                    <li>✓ Largest provider network access</li>
                    <li>✓ Established track record preference</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Key Strengths</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Most comprehensive plans available</li>
                    <li>• Fastest claims processing in industry</li>
                    <li>• 3,000+ healthcare providers</li>
                    <li>• Strong financial stability</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link to="/reviews/southern-cross" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Full Review →
                </Link>
                <Link to="/quotes" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* #2 nib */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">nib Health Insurance</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">4.4/5 (890 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Best Value
                  </div>
                  <div className="text-sm text-gray-600 mt-1">15% market share</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Coverage Range</h4>
                  <p className="text-sm">$28-$130/month</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Claims Processing</h4>
                  <p className="text-sm">3-7 days</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Provider Network</h4>
                  <p className="text-sm">Rapidly growing</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Financial Rating</h4>
                  <p className="text-sm">A+ (Strong)</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Best For</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Budget-conscious buyers</li>
                    <li>✓ Tech-savvy customers</li>
                    <li>✓ Flexible coverage needs</li>
                    <li>✓ Young professionals</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Key Strengths</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Most competitive pricing</li>
                    <li>• Excellent digital platform</li>
                    <li>• Flexible plan customization</li>
                    <li>• Strong customer satisfaction</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link to="/reviews/nib" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Full Review →
                </Link>
                <Link to="/quotes" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* #3 Accuro */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Accuro Health Insurance</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">4.1/5 (650 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                    NZ Owned
                  </div>
                  <div className="text-sm text-gray-600 mt-1">8% market share</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Best For</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Personal service preference</li>
                    <li>✓ Supporting NZ-owned business</li>
                    <li>✓ Tailored coverage solutions</li>
                    <li>✓ Mid-range budget</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Key Strengths</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Personalized customer service</li>
                    <li>• New Zealand owned and operated</li>
                    <li>• Competitive mid-tier pricing</li>
                    <li>• Tailored plan options</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link to="/reviews/accuro" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Full Review →
                </Link>
                <Link to="/quotes" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm font-medium">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* #4 AIA */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">AIA New Zealand</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">3.9/5 (420 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Wellness Focus
                  </div>
                  <div className="text-sm text-gray-600 mt-1">7% market share</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Best For</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Wellness program enthusiasts</li>
                    <li>✓ International coverage needs</li>
                    <li>✓ Life insurance bundling</li>
                    <li>✓ Premium service expectation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Key Strengths</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Comprehensive wellness programs</li>
                    <li>• Global network coverage</li>
                    <li>• Strong financial backing</li>
                    <li>• Integrated life insurance options</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link to="/reviews/aia" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Full Review →
                </Link>
                <Link to="/quotes" className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 text-sm font-medium">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* #5 Partners Life */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Partners Life</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">3.8/5 (310 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Specialist Focus
                  </div>
                  <div className="text-sm text-gray-600 mt-1">5% market share</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Best For</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Life insurance bundling</li>
                    <li>✓ Financial planning integration</li>
                    <li>✓ Specialist health needs</li>
                    <li>✓ Employer group schemes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Key Strengths</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Strong life insurance offerings</li>
                    <li>• Good employer group rates</li>
                    <li>• Specialist condition coverage</li>
                    <li>• Financial planning services</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link to="/reviews/partners-life" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Full Review →
                </Link>
                <Link to="/quotes" className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 text-sm font-medium">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* #6 Unimed */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    6
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Unimed</h3>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < 3 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">3.6/5 (180 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Budget Option
                  </div>
                  <div className="text-sm text-gray-600 mt-1">3% market share</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Best For</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Very budget-conscious buyers</li>
                    <li>✓ Basic coverage needs</li>
                    <li>✓ Simple plan requirements</li>
                    <li>✓ Occasional healthcare users</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Key Strengths</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Very competitive basic pricing</li>
                    <li>• Simple, straightforward plans</li>
                    <li>• Low-cost entry point</li>
                    <li>• Union-backed heritage</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link to="/reviews/unimed" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read Full Review →
                </Link>
                <Link to="/quotes" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm font-medium">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>

          <h2>Quick Comparison Table</h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Rank</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Provider</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Rating</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Price Range</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Best Feature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-bold text-yellow-600">1</td>
                  <td className="px-4 py-3 font-medium">Southern Cross</td>
                  <td className="px-4 py-3 text-center">4.2/5</td>
                  <td className="px-4 py-3 text-center">$35-$180</td>
                  <td className="px-4 py-3 text-center">Largest Network</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-gray-600">2</td>
                  <td className="px-4 py-3 font-medium">nib</td>
                  <td className="px-4 py-3 text-center">4.4/5</td>
                  <td className="px-4 py-3 text-center">$28-$130</td>
                  <td className="px-4 py-3 text-center">Best Value</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-gray-600">3</td>
                  <td className="px-4 py-3 font-medium">Accuro</td>
                  <td className="px-4 py-3 text-center">4.1/5</td>
                  <td className="px-4 py-3 text-center">$32-$145</td>
                  <td className="px-4 py-3 text-center">Personal Service</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-gray-600">4</td>
                  <td className="px-4 py-3 font-medium">AIA</td>
                  <td className="px-4 py-3 text-center">3.9/5</td>
                  <td className="px-4 py-3 text-center">$38-$165</td>
                  <td className="px-4 py-3 text-center">Wellness Programs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-gray-600">5</td>
                  <td className="px-4 py-3 font-medium">Partners Life</td>
                  <td className="px-4 py-3 text-center">3.8/5</td>
                  <td className="px-4 py-3 text-center">$35-$155</td>
                  <td className="px-4 py-3 text-center">Life Insurance Bundle</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-bold text-gray-600">6</td>
                  <td className="px-4 py-3 font-medium">Unimed</td>
                  <td className="px-4 py-3 text-center">3.6/5</td>
                  <td className="px-4 py-3 text-center">$22-$95</td>
                  <td className="px-4 py-3 text-center">Lowest Prices</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>How to Choose the Right Provider</h2>

          <div className="bg-gray-50 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold mb-4">Step-by-Step Selection Guide</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                <div>
                  <strong>Define Your Budget:</strong> Determine what you can afford monthly for health insurance premiums
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                <div>
                  <strong>Assess Your Health Needs:</strong> Consider your current health status, age, and likely healthcare usage
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                <div>
                  <strong>Prioritize Features:</strong> Decide what's most important - network size, price, service, or specific coverage
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                <div>
                  <strong>Compare Top 3:</strong> Get quotes from your top 3 providers and compare coverage details
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Ready to Find Your Perfect Match?</h3>
            <p className="text-green-700 mb-4">
              Compare personalized quotes from all top providers in New Zealand. 
              Our comparison tool makes it easy to find the best coverage for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/quotes" 
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                Compare All Providers
              </Link>
              <Link 
                to="/compare" 
                className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors"
              >
                View Detailed Comparison
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default BestProviders;