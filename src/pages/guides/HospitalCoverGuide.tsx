import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Building2, Heart, Calendar, CheckCircle, AlertCircle, DollarSign, Users, Star, ArrowRight, Clock, Target, Stethoscope } from 'lucide-react';
import SEO from '../../components/SEO';

function HospitalCoverGuide() {
  return (
    <>
      <SEO
        title="Hospital Cover Guide NZ 2025 | Complete Guide to Private Hospital Insurance"
        description="Comprehensive guide to hospital cover insurance in New Zealand. Compare plans, understand benefits, and find the best private hospital insurance for your needs."
        keywords={[
          'hospital cover nz',
          'private hospital insurance',
          'hospital insurance new zealand',
          'surgical cover nz',
          'private hospital cover'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Complete Guide to Hospital Cover Insurance in New Zealand",
          "description": "Comprehensive guide to hospital cover insurance options in NZ",
          "image": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=630",
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
            <li><a href="#what-is-hospital-cover" className="text-blue-600 hover:underline">What is Hospital Cover?</a></li>
            <li><a href="#coverage-levels" className="text-blue-600 hover:underline">Coverage Levels</a></li>
            <li><a href="#provider-comparison" className="text-blue-600 hover:underline">Provider Comparison</a></li>
            <li><a href="#choosing-guide" className="text-blue-600 hover:underline">How to Choose</a></li>
          </ul>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Guide to Hospital Cover Insurance in New Zealand
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about private hospital insurance coverage
          </p>
          <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Last Updated: {new Date().toLocaleDateString('en-NZ')}
          </div>
        </header>

        <div className="prose max-w-none">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=630"
            alt="Modern private hospital facility in New Zealand"
            className="w-full rounded-lg mb-8"
          />

          <section id="what-is-hospital-cover" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is Hospital Cover Insurance?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hospital cover insurance provides access to private hospital treatment in New Zealand, offering an alternative to the public healthcare system. This type of insurance covers the costs associated with private hospital stays, surgical procedures, and specialist treatments, giving you faster access to care and greater choice in your healthcare providers.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Why Hospital Cover Matters</h3>
              <p className="text-blue-800 mb-3">
                While New Zealand's public healthcare system provides excellent emergency and essential care, private hospital cover offers significant advantages for planned procedures and specialist treatments.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Avoid public waiting lists (average 4-6 months for elective surgery)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Choose your surgeon and hospital</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Access to latest treatments and technology</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Building2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Private Hospital Access</h3>
                <p className="text-gray-600">Access to New Zealand's network of private hospitals with modern facilities and shorter waiting times.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Stethoscope className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Specialist Choice</h3>
                <p className="text-gray-600">Choose your preferred specialists and surgeons rather than being assigned through the public system.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Clock className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Faster Treatment</h3>
                <p className="text-gray-600">Get treatment when you need it, without waiting months for non-urgent procedures.</p>
              </div>
            </div>
          </section>

          <section id="coverage-levels" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hospital Cover Levels and Pricing
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Basic Hospital Cover</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">$35-60</p>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">What's Included</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Essential surgical procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Private or semi-private rooms</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Surgeon and anaesthetist fees</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic diagnostic tests</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Best For</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Young adults (18-35)</li>
                      <li>• Budget-conscious individuals</li>
                      <li>• Generally healthy people</li>
                      <li>• First-time insurance buyers</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pricing by Age Group</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>18-30: $35-45/month</div>
                    <div>31-50: $45-55/month</div>
                    <div>51+: $55-60/month</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Standard Hospital Cover</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">$60-120</p>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">What's Included</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>All basic cover benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Specialist consultations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Advanced diagnostic imaging</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Day surgery procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Post-operative care</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Best For</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Families with children</li>
                      <li>• People with ongoing health needs</li>
                      <li>• Those wanting specialist access</li>
                      <li>• Middle-income earners</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pricing by Age Group</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>18-30: $60-80/month</div>
                    <div>31-50: $80-100/month</div>
                    <div>51+: $100-120/month</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">Comprehensive Hospital Cover</h3>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">$120-250</p>
                    <p className="text-sm text-gray-500">per month</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">What's Included</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>All standard cover benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Non-Pharmac funded medicines</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Cancer treatment coverage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Overseas emergency treatment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Mental health support</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Best For</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• High-income professionals</li>
                      <li>• People with chronic conditions</li>
                      <li>• Those wanting premium care</li>
                      <li>• Frequent travelers</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Pricing by Age Group</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>18-30: $120-160/month</div>
                    <div>31-50: $160-200/month</div>
                    <div>51+: $200-250/month</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What Hospital Cover Includes
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hospital Accommodation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Private Rooms</span>
                      <p className="text-sm text-gray-600">Single occupancy rooms with private facilities</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Nursing Care</span>
                      <p className="text-sm text-gray-600">24/7 professional nursing support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Meals and Amenities</span>
                      <p className="text-sm text-gray-600">Quality meals and comfortable facilities</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Surgical Procedures</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Elective Surgery</span>
                      <p className="text-sm text-gray-600">Planned surgical procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Day Surgery</span>
                      <p className="text-sm text-gray-600">Same-day surgical procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Emergency Surgery</span>
                      <p className="text-sm text-gray-600">Urgent surgical interventions</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialist Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Consultant Fees</span>
                      <p className="text-sm text-gray-600">Specialist consultation costs</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Follow-up Care</span>
                      <p className="text-sm text-gray-600">Post-treatment specialist visits</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Second Opinions</span>
                      <p className="text-sm text-gray-600">Additional specialist consultations</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Diagnostic Services</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Medical Imaging</span>
                      <p className="text-sm text-gray-600">MRI, CT scans, ultrasounds</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Laboratory Tests</span>
                      <p className="text-sm text-gray-600">Blood tests and pathology</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Cardiac Testing</span>
                      <p className="text-sm text-gray-600">ECGs, stress tests, echocardiograms</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="provider-comparison" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hospital Cover Provider Comparison
            </h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img 
                      src="/main/logos/southern-cross.png" 
                      alt="Southern Cross logo" 
                      className="h-12 w-auto mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Southern Cross</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">4.8/5 (1,250 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">$45-180/month</p>
                    <p className="text-sm text-gray-500">Most comprehensive network</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Strengths</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Largest provider network (95% of specialists)</li>
                      <li>• Not-for-profit organization</li>
                      <li>• No excess for children under 18</li>
                      <li>• Excellent customer service</li>
                      <li>• Easy-claim digital platform</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Popular Plans</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Wellbeing Starter: $45-65/month</li>
                      <li>• Wellbeing One: $65-95/month</li>
                      <li>• Wellbeing Two: $95-140/month</li>
                      <li>• UltraCare: $140-180/month</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Best For</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Families with children</li>
                      <li>• Comprehensive coverage seekers</li>
                      <li>• Rural area residents</li>
                      <li>• Long-term health planning</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/reviews/southern-cross" className="inline-flex items-center text-blue-600 hover:underline">
                    Read detailed review <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img 
                      src="/main/logos/nib.png" 
                      alt="nib logo" 
                      className="h-12 w-auto mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">nib</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">4.6/5 (980 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">$35-140/month</p>
                    <p className="text-sm text-gray-500">Best digital experience</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Strengths</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Competitive pricing for young adults</li>
                      <li>• Excellent digital platform and app</li>
                      <li>• Flexible plan customization</li>
                      <li>• Fast claims processing</li>
                      <li>• Telehealth services included</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Popular Plans</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Basic Hospital Cover: $35-50/month</li>
                      <li>• Standard Hospital Cover: $50-75/month</li>
                      <li>• Premium Hospital Cover: $75-110/month</li>
                      <li>• Ultimate Health Max: $110-140/month</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Best For</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Young professionals</li>
                      <li>• Tech-savvy users</li>
                      <li>• Budget-conscious individuals</li>
                      <li>• Digital health enthusiasts</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/reviews/nib" className="inline-flex items-center text-blue-600 hover:underline">
                    Read detailed review <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img 
                      src="/main/logos/AIA.png" 
                      alt="AIA logo" 
                      className="h-12 w-auto mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">AIA</h3>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">4.7/5 (1,100 reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-blue-600">$50-180/month</p>
                    <p className="text-sm text-gray-500">Best wellness benefits</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Strengths</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• AIA Vitality wellness program</li>
                      <li>• Excellent mental health coverage</li>
                      <li>• Lifestyle rewards and discounts</li>
                      <li>• Strong international presence</li>
                      <li>• Comprehensive cancer coverage</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Popular Plans</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Real Health: $50-70/month</li>
                      <li>• Private Health: $70-100/month</li>
                      <li>• Private Health Plus: $100-140/month</li>
                      <li>• Vitality Health Plus: $140-180/month</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-600">Best For</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Health enthusiasts</li>
                      <li>• Mental health support seekers</li>
                      <li>• Wellness program participants</li>
                      <li>• International travelers</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/reviews/aia" className="inline-flex items-center text-blue-600 hover:underline">
                    Read detailed review <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Waiting Periods
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Standard Waiting Periods</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Treatment Type</th>
                      <th className="text-center py-3 px-4">Southern Cross</th>
                      <th className="text-center py-3 px-4">nib</th>
                      <th className="text-center py-3 px-4">AIA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4">Accidents</td>
                      <td className="text-center py-3 px-4">0 days</td>
                      <td className="text-center py-3 px-4">0 days</td>
                      <td className="text-center py-3 px-4">0 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">General Hospital Treatment</td>
                      <td className="text-center py-3 px-4">30 days</td>
                      <td className="text-center py-3 px-4">60 days</td>
                      <td className="text-center py-3 px-4">30 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Pre-existing Conditions</td>
                      <td className="text-center py-3 px-4">12 months</td>
                      <td className="text-center py-3 px-4">12 months</td>
                      <td className="text-center py-3 px-4">12 months</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4">Pregnancy</td>
                      <td className="text-center py-3 px-4">12 months</td>
                      <td className="text-center py-3 px-4">12 months</td>
                      <td className="text-center py-3 px-4">12 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Claims Process and Reimbursement
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Make a Claim</h3>
                <ol className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                    <div>
                      <span className="font-medium">Get Pre-approval</span>
                      <p className="text-sm text-gray-600">For planned procedures, obtain pre-approval from your insurer</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                    <div>
                      <span className="font-medium">Receive Treatment</span>
                      <p className="text-sm text-gray-600">Get your treatment at an approved provider</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                    <div>
                      <span className="font-medium">Submit Claim</span>
                      <p className="text-sm text-gray-600">Submit your claim with required documentation</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</div>
                    <div>
                      <span className="font-medium">Get Reimbursed</span>
                      <p className="text-sm text-gray-600">Receive payment within 5-10 business days</p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reimbursement Options</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-600">Direct Billing</h4>
                    <p className="text-sm text-gray-600">Provider bills insurer directly - you pay nothing upfront</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-600">Claim Back</h4>
                    <p className="text-sm text-gray-600">Pay upfront and claim reimbursement later</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-purple-600">Partial Payment</h4>
                    <p className="text-sm text-gray-600">Pay excess/co-payment, insurer covers the rest</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cost-Saving Strategies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excess Options</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">$0 Excess</h4>
                    <p className="text-sm text-gray-600 mb-2">Higher premiums, no out-of-pocket costs</p>
                    <p className="text-xs text-green-600">Best for: Frequent users, families</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">$500 Excess</h4>
                    <p className="text-sm text-gray-600 mb-2">Moderate premiums, $500 per claim</p>
                    <p className="text-xs text-blue-600">Best for: Occasional users</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">$1,000+ Excess</h4>
                    <p className="text-sm text-gray-600 mb-2">Lowest premiums, higher out-of-pocket</p>
                    <p className="text-xs text-purple-600">Best for: Emergency-only coverage</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Money-Saving Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Annual Payment Discount</span>
                      <p className="text-sm text-gray-600">Save 3-5% by paying annually</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Non-smoker Discount</span>
                      <p className="text-sm text-gray-600">Save up to 15% with non-smoker rates</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Loyalty Benefits</span>
                      <p className="text-sm text-gray-600">Long-term customer rewards and upgrades</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Wellness Programs</span>
                      <p className="text-sm text-gray-600">Earn discounts through health activities</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="choosing-guide" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to Choose the Right Hospital Cover
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Assessment Framework</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Target className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold mb-2">1. Assess Your Needs</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Current health status</li>
                      <li>• Family medical history</li>
                      <li>• Planned procedures</li>
                      <li>• Risk tolerance</li>
                    </ul>
                  </div>
                  <div>
                    <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold mb-2">2. Set Your Budget</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Monthly premium capacity</li>
                      <li>• Excess preferences</li>
                      <li>• Long-term affordability</li>
                      <li>• Emergency fund availability</li>
                    </ul>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-blue-600 mb-3" />
                    <h4 className="font-semibold mb-2">3. Compare Options</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Coverage levels</li>
                      <li>• Provider networks</li>
                      <li>• Waiting periods</li>
                      <li>• Additional benefits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Decision Guide</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">If you're looking for...</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-blue-600">Budget-friendly option</p>
                        <p className="text-sm text-gray-600">→ nib Basic Hospital Cover ($35-50/month)</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-600">Family coverage</p>
                        <p className="text-sm text-gray-600">→ Southern Cross Wellbeing Two ($95-140/month)</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-600">Wellness benefits</p>
                        <p className="text-sm text-gray-600">→ AIA Vitality Health Plus ($140-180/month)</p>
                      </div>
                      <div>
                        <p className="font-medium text-blue-600">Digital-first experience</p>
                        <p className="text-sm text-gray-600">→ nib Premium Hospital Cover ($75-110/month)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Hospital Cover by Life Stage
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Young Adults (18-35)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Recommended Coverage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Basic to Standard hospital cover</li>
                      <li>• Higher excess to reduce premiums</li>
                      <li>• Focus on accident coverage</li>
                      <li>• Consider wellness programs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Budget Range</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Basic: $35-50/month</li>
                      <li>• Standard: $60-80/month</li>
                      <li>• Excess: $500-1,000</li>
                      <li>• Annual cost: $420-960</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/guides/young-professionals" className="inline-flex items-center text-blue-600 hover:underline">
                    Read Young Professionals Guide <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Families (35-55)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Recommended Coverage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Standard to Comprehensive cover</li>
                      <li>• Family-friendly policies</li>
                      <li>• No excess for children</li>
                      <li>• Maternity coverage if planning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Budget Range</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Standard: $80-120/month</li>
                      <li>• Comprehensive: $120-200/month</li>
                      <li>• Family plans: $200-400/month</li>
                      <li>• Annual cost: $960-4,800</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Seniors (55+)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Recommended Coverage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Comprehensive hospital cover</li>
                      <li>• Cancer treatment coverage</li>
                      <li>• Cardiac and specialist care</li>
                      <li>• Lower excess options</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Budget Range</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Standard: $100-150/month</li>
                      <li>• Comprehensive: $150-250/month</li>
                      <li>• Excess: $0-500</li>
                      <li>• Annual cost: $1,200-3,000</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/guides/seniors" className="inline-flex items-center text-blue-600 hover:underline">
                    Read Seniors Guide <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Common Exclusions and Limitations
            </h2>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Typically Not Covered</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">General Exclusions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Cosmetic surgery (unless reconstructive)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Experimental treatments</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Self-inflicted injuries</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Treatment outside NZ (unless specified)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-orange-600">Pre-existing Conditions</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>12-month waiting period typically applies</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Some conditions may be permanently excluded</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Full disclosure required at application</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex justify-between items-center">
                    <span>What's the difference between public and private hospital treatment?</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-4">
                    Public hospital treatment is free but may involve waiting lists for non-urgent procedures. Private hospital treatment offers:
                  </p>
                  <ul className="space-y-2">
                    <li>• Immediate or scheduled treatment timing</li>
                    <li>• Choice of surgeon and hospital</li>
                    <li>• Private or semi-private rooms</li>
                    <li>• Access to latest treatments and technology</li>
                    <li>• Shorter recovery times due to better facilities</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex justify-between items-center">
                    <span>How much does hospital treatment cost without insurance?</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-4">Private hospital treatment costs can be substantial:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2">Common Procedures</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Appendectomy: $8,000-12,000</li>
                        <li>• Gallbladder removal: $10,000-15,000</li>
                        <li>• Hip replacement: $25,000-35,000</li>
                        <li>• Heart surgery: $50,000-80,000</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Additional Costs</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Specialist consultations: $300-500</li>
                        <li>• Diagnostic imaging: $500-2,000</li>
                        <li>• Anaesthetist fees: $1,000-3,000</li>
                        <li>• Hospital accommodation: $800-1,500/night</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex justify-between items-center">
                    <span>Can I upgrade my hospital cover later?</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-4">
                    Yes, you can usually upgrade your hospital cover, but there are important considerations:
                  </p>
                  <ul className="space-y-2">
                    <li>• New waiting periods may apply for upgraded benefits</li>
                    <li>• Premium increases will take effect immediately</li>
                    <li>• Some insurers allow one free upgrade per year</li>
                    <li>• Health assessments may be required for significant upgrades</li>
                    <li>• Best to upgrade when healthy to avoid exclusions</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex justify-between items-center">
                    <span>What happens if I need emergency treatment?</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-4">
                    Emergency treatment is handled differently depending on the situation:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold mb-2 text-green-600">Life-threatening Emergencies</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Public system provides immediate care</li>
                        <li>• No waiting periods apply</li>
                        <li>• Insurance covers private room upgrade</li>
                        <li>• Specialist choice after stabilization</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2 text-blue-600">Urgent but Non-life-threatening</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Can choose private treatment immediately</li>
                        <li>• Full insurance benefits apply</li>
                        <li>• Faster access to specialists</li>
                        <li>• Better recovery environment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-lg group">
                <summary className="text-xl font-semibold text-gray-900 cursor-pointer list-none">
                  <div className="flex justify-between items-center">
                    <span>How do I find approved hospitals and specialists?</span>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-open:rotate-90 transition-transform" />
                  </div>
                </summary>
                <div className="mt-4 text-gray-600">
                  <p className="mb-4">
                    Each insurer maintains a network of approved providers:
                  </p>
                  <ul className="space-y-2">
                    <li>• Check your insurer's website for provider directories</li>
                    <li>• Use mobile apps to find nearby approved providers</li>
                    <li>• Call customer service for recommendations</li>
                    <li>• Ask your GP for referrals to covered specialists</li>
                    <li>• Verify coverage before booking appointments</li>
                  </ul>
                </div>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Smart Usage Tips
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Maximizing Your Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Use Preferred Providers</span>
                      <p className="text-sm text-gray-600">Stay within your insurer's network for maximum coverage</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Get Pre-approval</span>
                      <p className="text-sm text-gray-600">Always get pre-approval for planned procedures</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Target className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Keep Records</span>
                      <p className="text-sm text-gray-600">Maintain detailed records of all treatments and claims</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Avoiding Common Pitfalls</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Don't Skip Pre-approval</span>
                      <p className="text-sm text-gray-600">Claims may be declined without proper pre-approval</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Understand Your Excess</span>
                      <p className="text-sm text-gray-600">Know exactly what you'll pay out-of-pocket</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-medium">Read Policy Documents</span>
                      <p className="text-sm text-gray-600">Understand exclusions and limitations before you need care</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Your Perfect Hospital Cover</h2>
            <p className="text-gray-600 mb-6">
              Ready to secure comprehensive hospital coverage? Compare plans from New Zealand's 
              top providers and find the perfect balance of coverage and cost for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/compare"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
              >
                Compare Hospital Cover Plans
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

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Related Guides
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/guides/medical-insurance"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Stethoscope className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical Insurance Guide</h3>
                <p className="text-gray-600 text-sm">Complete guide to medical insurance options in New Zealand</p>
              </Link>

              <Link
                to="/guides/specialist-coverage"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Heart className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Specialist Coverage Guide</h3>
                <p className="text-gray-600 text-sm">Understanding specialist medical coverage and benefits</p>
              </Link>

              <Link
                to="/guides/best-health-insurance"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Health Insurance Guide</h3>
                <p className="text-gray-600 text-sm">Expert recommendations for the best health insurance plans</p>
              </Link>
            </div>
          </section>
        </div>

        {/* Author Info */}
        <footer className="mt-12 border-t pt-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Shield className="w-12 h-12 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900">HealthCompare NZ</p>
                <p className="text-sm text-gray-600">Your trusted guide to hospital cover insurance</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString('en-NZ')}</p>
            </div>
          </div>
        </footer>
      </article>
    </>
  );
}

export default HospitalCoverGuide;