import React from 'react';
import { Shield, Heart, CheckCircle, AlertCircle, Calendar, DollarSign, Users, Building2, Stethoscope, Clock, ArrowRight, Star, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function MedicalInsuranceGuide() {
  return (
    <>
      <SEO
        title="Medical Insurance NZ Complete Guide 2025 | HealthCompare"
        description="Complete guide to medical insurance in New Zealand. Compare coverage options, understand benefits, and find the best medical insurance for your needs."
        canonicalUrl="https://healthinsurancecomparison.co.nz/guides/medical-insurance"
        keywords={[
          'medical insurance nz',
          'medical insurance comparison',
          'health insurance comparison',
          'best medical cover nz',
          'medical insurance guide'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Medical Insurance Complete Guide NZ",
          "description": "Comprehensive guide to medical insurance in New Zealand",
          "image": "https://images.unsplash.com/photo-1631815589968-fdb09a223b3e?auto=format&fit=crop&w=1200&h=630",
          "author": {
            "@type": "Organization",
            "name": "HealthCompare NZ"
          },
          "datePublished": "2025-01-01",
          "dateModified": new Date().toISOString()
        }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Navigation */}
        <nav className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li><a href="#understanding" className="text-blue-600 hover:underline">Understanding Medical Insurance</a></li>
            <li><a href="#types" className="text-blue-600 hover:underline">Types of Coverage</a></li>
            <li><a href="#providers" className="text-blue-600 hover:underline">Provider Comparison</a></li>
            <li><a href="#choosing" className="text-blue-600 hover:underline">Choosing the Right Plan</a></li>
          </ul>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Medical Insurance Guide for New Zealand
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about medical insurance in New Zealand
          </p>
          <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Last Updated: {new Date().toLocaleDateString('en-NZ')}
          </div>
        </header>

        <div className="prose max-w-none">
          <img 
            src="https://images.unsplash.com/photo-1631815589968-fdb09a223b3e?auto=format&fit=crop&w=1200&h=630"
            alt="Modern medical facility showcasing healthcare services"
            className="w-full rounded-lg mb-8"
          />

          <section id="understanding" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Medical Insurance in New Zealand
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Medical insurance in New Zealand provides coverage for healthcare services beyond what's available through the public health system. While New Zealand's public healthcare system offers essential services, medical insurance gives you faster access to treatment, choice of providers, and coverage for additional services.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Why Medical Insurance Matters</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Faster access to specialists and treatments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Choice of healthcare providers and hospitals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Coverage for treatments not funded publicly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Financial protection against high medical costs</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="types" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Types of Medical Insurance Coverage
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hospital Cover</h3>
                <p className="text-gray-600 mb-4">Covers private hospital treatment, surgery, and specialist care.</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Typical Cost Range:</p>
                  <p className="text-lg font-bold text-blue-600">$40-$120/month</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Private hospital accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Surgical procedures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Specialist consultations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
                <Stethoscope className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Everyday Health</h3>
                <p className="text-gray-600 mb-4">Covers day-to-day healthcare like GP visits, dental, and optical.</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Typical Cost Range:</p>
                  <p className="text-lg font-bold text-green-600">$20-$80/month</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>GP consultations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dental care</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Optical services</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-600">
                <Heart className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive</h3>
                <p className="text-gray-600 mb-4">Combines hospital and everyday health coverage for complete protection.</p>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700">Typical Cost Range:</p>
                  <p className="text-lg font-bold text-purple-600">$60-$200/month</p>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All hospital benefits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>All everyday health benefits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium features</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Comparison by Age Group</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Age Group</th>
                      <th className="text-center py-3 px-4">Basic Hospital</th>
                      <th className="text-center py-3 px-4">Comprehensive</th>
                      <th className="text-center py-3 px-4">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">18-30 years</td>
                      <td className="text-center py-3 px-4">$35-$55</td>
                      <td className="text-center py-3 px-4">$60-$100</td>
                      <td className="text-center py-3 px-4">$90-$150</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">31-45 years</td>
                      <td className="text-center py-3 px-4">$45-$75</td>
                      <td className="text-center py-3 px-4">$80-$130</td>
                      <td className="text-center py-3 px-4">$120-$200</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">46-60 years</td>
                      <td className="text-center py-3 px-4">$65-$105</td>
                      <td className="text-center py-3 px-4">$110-$180</td>
                      <td className="text-center py-3 px-4">$160-$280</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">60+ years</td>
                      <td className="text-center py-3 px-4">$85-$140</td>
                      <td className="text-center py-3 px-4">$150-$250</td>
                      <td className="text-center py-3 px-4">$220-$400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">*Prices are monthly premiums and may vary based on individual circumstances</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Medical Insurance Covers
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hospital and Surgical Coverage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Inpatient Services</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Private hospital accommodation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Surgical procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Anaesthetist fees</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Theatre costs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Post-operative care</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Outpatient Services</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Specialist consultations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Diagnostic imaging (MRI, CT scans)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Laboratory tests</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Day surgery procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Cancer treatment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primary Healthcare Coverage</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">General Practice</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• GP consultations</li>
                      <li>• Nurse consultations</li>
                      <li>• Prescription medicines</li>
                      <li>• Basic diagnostic tests</li>
                      <li>• Vaccinations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Allied Health</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Physiotherapy</li>
                      <li>• Chiropractic care</li>
                      <li>• Osteopathy</li>
                      <li>• Podiatry</li>
                      <li>• Psychology/counseling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Preventive Care</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Health screenings</li>
                      <li>• Wellness checks</li>
                      <li>• Mammograms</li>
                      <li>• Colonoscopies</li>
                      <li>• Skin checks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="providers" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Leading Medical Insurance Providers
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src="/logos/southern-cross.png" 
                      alt="Southern Cross logo" 
                      className="h-12 w-auto mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Southern Cross</h3>
                      <p className="text-gray-600">New Zealand's largest health insurer</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.8/5</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Strengths</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Largest provider network</li>
                      <li>• Not-for-profit organization</li>
                      <li>• Excellent customer service</li>
                      <li>• Comprehensive coverage options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Popular Plans</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Wellbeing Starter ($45-65/month)</li>
                      <li>• Wellbeing One ($65-85/month)</li>
                      <li>• Wellbeing Two ($85-120/month)</li>
                      <li>• UltraCare ($120-180/month)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Best for: Comprehensive coverage, families</span>
                  <Link to="/reviews/southern-cross" className="text-blue-600 hover:underline text-sm">
                    Read full review →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src="/logos/nib.png" 
                      alt="nib logo" 
                      className="h-12 w-auto mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">nib</h3>
                      <p className="text-gray-600">Innovative digital-first insurer</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.6/5</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Strengths</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Competitive pricing</li>
                      <li>• Excellent digital platform</li>
                      <li>• Flexible plan options</li>
                      <li>• Fast claims processing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Popular Plans</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Basic Hospital Cover ($35-50/month)</li>
                      <li>• Standard Hospital Cover ($50-70/month)</li>
                      <li>• Premium Hospital Cover ($70-95/month)</li>
                      <li>• Ultimate Health Max ($95-140/month)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Best for: Young professionals, tech-savvy users</span>
                  <Link to="/reviews/nib" className="text-blue-600 hover:underline text-sm">
                    Read full review →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src="/logos/AIA.png" 
                      alt="AIA logo" 
                      className="h-12 w-auto mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">AIA</h3>
                      <p className="text-gray-600">Wellness-focused health insurance</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.7/5</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Strengths</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• AIA Vitality wellness program</li>
                      <li>• Mental health focus</li>
                      <li>• Lifestyle rewards</li>
                      <li>• International coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Popular Plans</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Real Health ($50-70/month)</li>
                      <li>• Private Health ($70-95/month)</li>
                      <li>• Private Health Plus ($95-130/month)</li>
                      <li>• Vitality Health Plus ($130-180/month)</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Best for: Health enthusiasts, wellness-focused individuals</span>
                  <Link to="/reviews/aia" className="text-blue-600 hover:underline text-sm">
                    Read full review →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section id="choosing" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Choose the Right Medical Insurance
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Assess Your Healthcare Needs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">Current Health</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Existing medical conditions</li>
                      <li>• Regular medications</li>
                      <li>• Ongoing treatments</li>
                      <li>• Recent health issues</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">Family History</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Hereditary conditions</li>
                      <li>• Cancer history</li>
                      <li>• Heart disease</li>
                      <li>• Diabetes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">Lifestyle Factors</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Activity level</li>
                      <li>• Smoking status</li>
                      <li>• Occupation risks</li>
                      <li>• Travel frequency</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Determine Your Budget</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Monthly Premium Considerations</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Affordable monthly payments</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Annual payment discounts (up to 4%)</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Direct debit savings (2-3%)</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Excess Options</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium">$0 Excess</p>
                        <p className="text-sm text-gray-600">Higher premiums, no out-of-pocket costs</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium">$500-$1000 Excess</p>
                        <p className="text-sm text-gray-600">Moderate premiums, some out-of-pocket costs</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium">$2000+ Excess</p>
                        <p className="text-sm text-gray-600">Lower premiums, higher out-of-pocket costs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Compare Coverage Options</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Essential Questions to Ask</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span>What are the waiting periods for different treatments?</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span>Are there any exclusions or limitations?</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span>What is the provider network like in my area?</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span>How are pre-existing conditions handled?</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                        <span>What are the annual benefit limits?</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Waiting Periods and Exclusions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Typical Waiting Periods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Hospital Cover</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Accidents</span>
                        <span className="font-medium">0 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>General conditions</span>
                        <span className="font-medium">30-60 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pre-existing conditions</span>
                        <span className="font-medium">12 months</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Pregnancy</span>
                        <span className="font-medium">10-12 months</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Everyday Health</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>GP visits</span>
                        <span className="font-medium">0-30 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Dental (basic)</span>
                        <span className="font-medium">60 days</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Dental (major)</span>
                        <span className="font-medium">12 months</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Optical</span>
                        <span className="font-medium">60 days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Exclusions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">Typically Not Covered</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Cosmetic surgery</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Experimental treatments</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Self-inflicted injuries</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                        <span>War-related injuries</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Often Covered</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Reconstructive surgery</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Mental health treatment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Alternative therapies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Overseas emergency treatment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Making Claims: A Step-by-Step Guide
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pre-Approval Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Get a Referral</h4>
                      <p className="text-gray-600">Visit your GP to get a referral to a specialist if required.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Specialist Consultation</h4>
                      <p className="text-gray-600">See the specialist who will assess your condition and recommend treatment.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Submit Pre-Approval</h4>
                      <p className="text-gray-600">Submit the specialist's treatment plan to your insurer for approval.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Receive Approval</h4>
                      <p className="text-gray-600">Get confirmation of coverage and any conditions or limitations.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Proceed with Treatment</h4>
                      <p className="text-gray-600">Book your treatment with confidence knowing you're covered.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Claims Submission Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Phone className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Mobile App</h4>
                    <p className="text-sm text-gray-600">Submit claims instantly with photo uploads</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Online Portal</h4>
                    <p className="text-sm text-gray-600">Access your account and submit claims online</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2">Email/Post</h4>
                    <p className="text-sm text-gray-600">Traditional submission methods still available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cost-Saving Strategies for Medical Insurance
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Discount Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Lifestyle Discounts</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Non-smoker discount</span>
                        <span className="font-medium text-green-600">Up to 15%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Wellness program participation</span>
                        <span className="font-medium text-green-600">5-10%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Health screening completion</span>
                        <span className="font-medium text-green-600">2-5%</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Payment Discounts</h4>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>Annual payment</span>
                        <span className="font-medium text-green-600">Up to 4%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Direct debit</span>
                        <span className="font-medium text-green-600">2-3%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Multi-policy bundle</span>
                        <span className="font-medium text-green-600">5-10%</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Usage Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Maximize Your Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Use preventive care benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Stay within provider networks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Understand your policy limits</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Avoid Common Mistakes</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Not getting pre-approval</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Using non-covered providers</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                        <span>Missing claim deadlines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Medical Insurance for Different Life Stages
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Young Adults (18-30)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Recommended Coverage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Basic hospital cover</li>
                      <li>• GP visit benefits</li>
                      <li>• Mental health support</li>
                      <li>• Sports injury coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Budget Considerations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Start with basic coverage</li>
                      <li>• Consider higher excess for lower premiums</li>
                      <li>• Take advantage of young adult discounts</li>
                      <li>• Build coverage as income increases</li>
                    </ul>
                  </div>
                </div>
                <Link to="/guides/young-professionals" className="inline-flex items-center text-blue-600 hover:underline mt-4">
                  Read our Young Professionals Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Families (30-50)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Family Coverage Needs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Comprehensive hospital cover</li>
                      <li>• Maternity benefits</li>
                      <li>• Children's health coverage</li>
                      <li>• Dental and optical for family</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Cost Management</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Family policy discounts</li>
                      <li>• No excess for children options</li>
                      <li>• Shared annual limits</li>
                      <li>• Preventive care benefits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Seniors (50+)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Priority Coverage Areas</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Comprehensive hospital cover</li>
                      <li>• Cancer treatment coverage</li>
                      <li>• Cardiac care</li>
                      <li>• Joint replacement surgery</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Special Considerations</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Pre-existing condition coverage</li>
                      <li>• Loyalty benefits</li>
                      <li>• Age-related premium increases</li>
                      <li>• Comprehensive wellness programs</li>
                    </ul>
                  </div>
                </div>
                <Link to="/guides/seniors" className="inline-flex items-center text-blue-600 hover:underline mt-4">
                  Read our Seniors Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  What's the difference between medical insurance and health insurance?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    In New Zealand, "medical insurance" and "health insurance" are often used interchangeably. Both terms refer to private insurance that covers healthcare services beyond the public system. Some providers may use "medical insurance" to specifically refer to hospital and specialist coverage, while "health insurance" might include everyday health benefits.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  How much does medical insurance cost in New Zealand?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    Medical insurance costs vary significantly based on age, coverage level, and provider. Basic hospital cover starts from around $35-50 per month for young adults, while comprehensive coverage can range from $60-200+ monthly. Factors affecting cost include:
                  </p>
                  <ul className="mt-3 space-y-1">
                    <li>• Age and health status</li>
                    <li>• Level of coverage chosen</li>
                    <li>• Excess amount selected</li>
                    <li>• Smoking status</li>
                    <li>• Location and provider network</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  Can I get medical insurance with pre-existing conditions?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    Yes, you can get medical insurance with pre-existing conditions, but coverage terms vary by provider. Options include:
                  </p>
                  <ul className="mt-3 space-y-1">
                    <li>• Coverage after a waiting period (typically 12 months)</li>
                    <li>• Exclusion of the specific condition</li>
                    <li>• Higher premiums to account for increased risk</li>
                    <li>• Some providers specialize in covering pre-existing conditions</li>
                  </ul>
                  <p className="mt-3">
                    It's important to be honest about your medical history when applying, as non-disclosure can void your policy.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  What's not covered by medical insurance?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    Common exclusions include:
                  </p>
                  <ul className="mt-3 space-y-1">
                    <li>• Cosmetic surgery (unless reconstructive)</li>
                    <li>• Experimental or unproven treatments</li>
                    <li>• Self-inflicted injuries</li>
                    <li>• War-related injuries</li>
                    <li>• Some alternative therapies (varies by provider)</li>
                    <li>• Fertility treatments (some providers offer limited coverage)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  How do I switch medical insurance providers?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    Switching providers involves several considerations:
                  </p>
                  <ul className="mt-3 space-y-1">
                    <li>• Compare coverage levels and benefits</li>
                    <li>• Understand new waiting periods</li>
                    <li>• Consider pre-existing condition terms</li>
                    <li>• Time the switch to avoid coverage gaps</li>
                    <li>• Review any loyalty benefits you might lose</li>
                  </ul>
                  <p className="mt-3">
                    It's often best to have your new policy approved before canceling your existing coverage.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  What should I look for in a medical insurance policy?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    Key factors to evaluate:
                  </p>
                  <ul className="mt-3 space-y-1">
                    <li>• Coverage scope and limits</li>
                    <li>• Provider network quality and size</li>
                    <li>• Waiting periods for different treatments</li>
                    <li>• Claims process and customer service</li>
                    <li>• Premium stability and increases</li>
                    <li>• Additional benefits and wellness programs</li>
                    <li>• Financial strength of the insurer</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Future of Medical Insurance in New Zealand
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emerging Trends</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">Technology Integration</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Telehealth consultations</li>
                    <li>• AI-powered health assessments</li>
                    <li>• Wearable device integration</li>
                    <li>• Digital health records</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">Personalized Coverage</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Risk-based pricing</li>
                    <li>• Customizable benefit packages</li>
                    <li>• Wellness-linked premiums</li>
                    <li>• Genetic testing considerations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Compare Medical Insurance Plans?</h2>
            <p className="text-gray-600 mb-6">
              Find the best medical insurance plan for your needs. Compare coverage options, 
              premiums, and benefits from New Zealand's top providers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/compare"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
              >
                Compare Plans Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/quotes"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold"
              >
                Get Personalized Quote
              </Link>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default MedicalInsuranceGuide;