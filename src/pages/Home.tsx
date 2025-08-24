import React from 'react';
import { Shield, Heart, DollarSign, Users, CheckCircle, ArrowRight, Calendar, Clock, Star, ArrowUpRight, Search, FileText, Award } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Health Insurance Comparison - Compare Health Insurance Plans in New Zealand"
        description="Compare health insurance plans from top NZ providers. Get instant quotes, compare benefits, and find the best coverage for you and your family."
        canonicalUrl="https://healthinsurancecomparison.co.nz/"
        keywords={[
          'health insurance nz',
          'health insurance new zealand',
          'health insurance comparison',
          'compare health insurance',
          'southern cross health insurance',
          'nib health insurance',
          'aia health insurance'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Health Insurance Comparison NZ",
          "url": "https://healthinsurancecomparison.co.nz",
          "description": "Compare health insurance plans from top New Zealand providers",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://healthinsurancecomparison.co.nz/quotes?query={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "about": [
            {
              "@type": "Service",
              "name": "Health Insurance Comparison",
              "serviceType": "Insurance Comparison Service",
              "provider": {
                "@type": "Organization",
                "name": "Health Insurance Comparison NZ"
              },
              "areaServed": {
                "@type": "Country",
                "name": "New Zealand"
              }
            }
          ],
          "mainEntity": {
            "@type": "Organization",
            "name": "Health Insurance Comparison NZ",
            "url": "https://healthinsurancecomparison.co.nz",
            "logo": "https://healthinsurancecomparison.co.nz/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "areaServed": "NZ",
              "availableLanguage": "English"
            },
            "serviceArea": {
              "@type": "Country",
              "name": "New Zealand"
            }
          }
        }}
      />
      <main>
        {/* Hero Section with Green Background */}
        <section className="relative bg-gradient-to-br from-blue-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Best Health Insurance NZ 2025 - Compare Plans & Get Quotes
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Find affordable health cover from $25/month. Compare top NZ providers instantly.
            </p>
            
            {/* Key Stats */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
              <div className="flex items-center bg-blue-600/30 px-6 py-3 rounded-full">
                <Shield className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">Trusted NZ Providers</span>
              </div>
              <div className="flex items-center bg-blue-600/30 px-6 py-3 rounded-full">
                <DollarSign className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">From $25/month</span>
              </div>
              <div className="flex items-center bg-blue-600/30 px-6 py-3 rounded-full">
                <Heart className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">Seniors Welcome</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/quotes"
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg"
            >
              <Search className="w-6 h-6 mr-3" />
              Compare Health Insurance Quotes
            </Link>
            
            <p className="text-blue-200 text-sm mt-4">
              Free comparison service • No obligation • Instant quotes
            </p>

            {/* Trust Indicators */}
            <div className="mt-12">
              <p className="text-blue-200 mb-6">Trusted by leading NZ providers</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                {[
                  { name: "Southern Cross", logo: "/logos/southern-cross.png" },
                  { name: "nib", logo: "/logos/nib.png" },
                  { name: "AIA", logo: "/logos/AIA.png" },
                  { name: "Partners Life", logo: "/logos/PartnersLife_logo.png" },
                  { name: "Accuro", logo: "/logos/accuro.png" }
                ].map(provider => (
                  <div key={provider.name} className="bg-white/10 rounded-lg p-4 h-16 flex items-center justify-center min-w-[120px]">
                    <img 
                      src={provider.logo} 
                      alt={provider.name} 
                      className="h-8 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Understanding Health Insurance Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Compare Top Health Insurance Providers in New Zealand</h2>
              <p className="text-xl text-gray-600">Find the cheapest health insurance NZ and compare plans from leading providers</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">What is Health Insurance?</h3>
                <p className="text-gray-600 mb-6">
                  Health insurance provides a lump sum payment to help cover medical costs and related expenses.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Coverage from $5,000 to $50,000</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">No medical tests required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Immediate accidental death cover</span>
                  </li>
                </ul>
                <Link to="/guides/medical-insurance" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">How Does It Work?</h3>
                <p className="text-gray-600 mb-6">
                  Understand the process, from application to claims, and how health insurance protects your family.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Simple application process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Flexible payment options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Quick claim payments</span>
                  </li>
                </ul>
                <Link to="/how-it-works" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Types of Cover</h3>
                <p className="text-gray-600 mb-6">
                  Explore different types of health cover available in New Zealand.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Standard health insurance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Over 50s health plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Pre-paid health plans</span>
                  </li>
                </ul>
                <Link to="/guides" className="text-blue-600 hover:text-blue-700 font-semibold">
                  Learn More →
                </Link>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/guides"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                View All Guides
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Compare Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Compare Health Insurance with Us?</h2>
              <p className="text-xl text-gray-600">We help thousands of Kiwis find the right health cover at the best price</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leading NZ Providers</h3>
                <p className="text-gray-600">
                  Compare trusted health insurance providers in one place
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Cover</h3>
                <p className="text-gray-600">
                  Plans from $25/month with flexible payment options
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Seniors Welcome</h3>
                <p className="text-gray-600">
                  Specialized health cover for over 50s
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Quotes</h3>
                <p className="text-gray-600">
                  Compare prices and apply online in minutes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Provider Comparison Table */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Health Insurance Companies NZ - Get Quotes & Compare</h2>
              <p className="text-xl text-gray-600">
                We've analyzed New Zealand's leading health insurance providers to help you make an informed choice
              </p>
            </div>

            {/* Filter Controls */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>Monthly Premium</option>
                    <option>Rating</option>
                    <option>Coverage Amount</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Amount</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>All Amounts</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Provider Type</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>All Providers</option>
                    <option>Major Insurers</option>
                    <option>Specialist Providers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option>All Ratings</option>
                    <option>4.5+ Stars</option>
                    <option>4.0+ Stars</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-700 text-white p-4">
                <div className="grid grid-cols-6 gap-4 font-semibold">
                  <div>Provider</div>
                  <div className="text-center">Rating</div>
                  <div className="text-center">Monthly Premium</div>
                  <div className="text-center">Cover Amount</div>
                  <div>Key Features</div>
                  <div className="text-center">Action</div>
                </div>
              </div>
              
              {[
                {
                  provider: "Southern Cross",
                  logo: "/logos/southern-cross.png",
                  rating: 4.8,
                  premium: "$45",
                  coverAmount: "$50,000",
                  features: ["Level premiums available", "NZ-based support", "Family cover options"],
                  slug: "southern-cross"
                },
                {
                  provider: "nib",
                  logo: "/logos/nib.png", 
                  rating: 4.6,
                  premium: "$39",
                  coverAmount: "$40,000",
                  features: ["No waiting period", "Fixed premiums", "24/7 claims support"],
                  slug: "nib"
                },
                {
                  provider: "AIA",
                  logo: "/logos/AIA.png",
                  rating: 4.7,
                  premium: "$52",
                  coverAmount: "$60,000",
                  features: ["Premium freeze option", "Multi-policy discounts", "Online claims portal"],
                  slug: "aia"
                },
                {
                  provider: "Partners Life",
                  logo: "/logos/PartnersLife_logo.png",
                  rating: 4.6,
                  premium: "$49",
                  coverAmount: "$50,000",
                  features: ["Worldwide coverage", "Guaranteed acceptance", "24/7 online support"],
                  slug: "partners-life"
                },
                {
                  provider: "Accuro",
                  logo: "/logos/accuro.png",
                  rating: 4.5,
                  premium: "$42",
                  coverAmount: "$35,000",
                  features: ["Specialised for 50+", "Quick online application", "Dedicated seniors support"],
                  slug: "accuro"
                },
                {
                  provider: "UniMed",
                  logo: "/logos/unimed.png",
                  rating: 4.4,
                  premium: "$44",
                  coverAmount: "$40,000",
                  features: ["AA Member discounts", "Immediate accidental cover", "NZ-based service"],
                  slug: "unimed"
                }
              ].map((provider, index) => (
                <div key={provider.provider} className={`p-4 border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                  <div className="grid grid-cols-6 gap-4 items-center">
                    <div className="flex items-center">
                      <img 
                        src={provider.logo} 
                        alt={`${provider.provider} logo`} 
                        className="h-8 w-auto mr-3"
                      />
                      <span className="font-semibold text-gray-900">{provider.provider}</span>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-semibold">{provider.rating}</span>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <span className="font-bold text-blue-600">{provider.premium}</span>
                      <div className="text-xs text-gray-500">per month</div>
                    </div>
                    
                    <div className="text-center">
                      <span className="font-bold text-gray-900">{provider.coverAmount}</span>
                      <div className="text-xs text-gray-500">cover amount</div>
                    </div>
                    
                    <div>
                      <ul className="space-y-1">
                        {provider.features.map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <CheckCircle className="w-3 h-3 text-blue-500 mr-1 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-center">
                      <Link
                        to="/quotes"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Licensed Providers</h3>
                <p className="text-gray-600 text-sm">All providers are licensed and regulated in New Zealand</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Independent Reviews</h3>
                <p className="text-gray-600 text-sm">Ratings based on real customer experiences</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Updated Monthly</h3>
                <p className="text-gray-600 text-sm">Latest rates and features verified monthly</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find answers to common questions about health insurance in New Zealand</p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What is health insurance?",
                  answer: "Health insurance provides financial protection against medical expenses. It helps cover costs for hospital stays, specialist treatments, and other healthcare services not fully covered by the public health system."
                },
                {
                  question: "How much does health insurance cost in New Zealand?",
                  answer: "Health insurance premiums vary based on age, coverage level, and provider. Basic plans start from around $25-40 per month, while comprehensive coverage typically ranges from $60-200+ monthly."
                },
                {
                  question: "What's the difference between health insurance and life insurance?",
                  answer: "Health insurance covers medical expenses while you're alive, helping with treatment costs. Life insurance provides a lump sum payment to beneficiaries after death to help with financial obligations."
                },
                {
                  question: "What happens if I stop paying my premiums?",
                  answer: "If you stop paying premiums, your coverage will typically be suspended after a grace period (usually 30 days). You may be able to reinstate your policy by paying outstanding premiums, but this varies by provider."
                }
              ].map((faq, index) => (
                <details key={index} className="bg-white rounded-lg shadow-md group">
                  <summary className="p-6 cursor-pointer list-none">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <ArrowRight className="w-5 h-5 text-blue-600 transform group-open:rotate-90 transition-transform" />
                    </div>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Still have questions? We're here to help.</p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Contact our support team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Audience-Specific Guides */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Coverage for Your Situation</h2>
              <p className="text-xl text-gray-600">Specialized guides for different life situations and needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/students-health-insurance" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-green-600 mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600">Students</h3>
                <p className="text-gray-600 text-sm mb-4">University requirements, discounts, and affordable plans</p>
                <span className="text-green-600 text-sm font-medium inline-flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>

              <Link to="/foreigners-health-insurance" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-blue-600 mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">Foreigners & Expats</h3>
                <p className="text-gray-600 text-sm mb-4">Visa requirements and non-resident coverage options</p>
                <span className="text-blue-600 text-sm font-medium inline-flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>

              <Link to="/guides/seniors" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-purple-600 mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-600">Seniors</h3>
                <p className="text-gray-600 text-sm mb-4">Coverage options for older adults and pre-existing conditions</p>
                <span className="text-purple-600 text-sm font-medium inline-flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>

              <Link to="/cheapest-health-insurance-nz" className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-orange-600 mb-4">
                  <DollarSign className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600">Budget Options</h3>
                <p className="text-gray-600 text-sm mb-4">Find the cheapest health insurance without compromising coverage</p>
                <span className="text-orange-600 text-sm font-medium inline-flex items-center">
                  Learn More <ArrowRight className="w-3 h-3 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Guides Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Health Insurance Guides</h2>
              <p className="text-xl text-gray-600">Expert advice and insights to help you make informed decisions about health insurance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Is Health Insurance Worth It?",
                  description: "An in-depth analysis of health insurance value, costs, and benefits for New Zealand families.",
                  image: "/images/family-healthcare.jpg",
                  readTime: "7 min read",
                  link: "/blog/understanding-health-insurance"
                },
                {
                  title: "How to Choose the Right Health Insurance Plan",
                  description: "Expert guide to selecting the best health insurance coverage for your needs and budget.",
                  image: "/images/medical-checkup.jpg",
                  readTime: "8 min read",
                  link: "/blog/comparing-providers"
                },
                {
                  title: "Understanding Health Insurance Waiting Periods",
                  description: "Everything you need to know about waiting periods, coverage start dates, and immediate cover options.",
                  image: "/images/business-meeting.jpg",
                  readTime: "6 min read",
                  link: "/blog/mental-health-coverage"
                },
                {
                  title: "Health Insurance for Students in New Zealand",
                  description: "Complete guide for students including university requirements, affordable plans, and student discounts.",
                  image: "/images/healthcare-costs.jpg",
                  readTime: "10 min read",
                  link: "/blog/student-health-insurance-nz"
                },
                {
                  title: "Common Health Insurance Mistakes to Avoid",
                  description: "Don't make these critical mistakes when choosing health insurance coverage.",
                  image: "/images/savings-piggybank.jpg",
                  readTime: "5 min read",
                  link: "/blog/save-on-premiums"
                },
                {
                  title: "Health Insurance for Foreigners in NZ",
                  description: "Complete guide for expats, visitors and foreign residents including visa requirements and provider options.",
                  image: "/images/blog-healthcare.jpg",
                  readTime: "8 min read",
                  link: "/blog/health-insurance-foreigners-new-zealand"
                }
              ].map((guide, index) => (
                <Link key={index} to={guide.link} className="group">
                  <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                          <Clock className="w-3 h-3 inline mr-1" />
                          {guide.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{guide.description}</p>
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                        <span className="font-semibold">Read More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/guides"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
              >
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Coverage?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Compare quotes from leading New Zealand providers today
            </p>
            <Link
              to="/quotes"
              className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-400 transition-all transform hover:scale-105 shadow-lg"
            >
              Get Free Quote
              <ArrowRight className="ml-3 w-6 h-6" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;