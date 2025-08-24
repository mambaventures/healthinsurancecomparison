import React from 'react';
import { Shield, Stethoscope, CheckCircle, AlertCircle, Calendar, DollarSign, Users, Clock, ArrowRight, Star, Brain, Heart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

function SpecialistCoverageGuide() {
  return (
    <>
      <SEO
        title="Specialist Coverage Insurance Guide NZ 2025 | HealthCompare"
        description="Expert guide to specialist coverage in NZ health insurance. Compare specialist benefits, understand coverage options, and find the best specialist insurance."
        keywords={[
          'specialist coverage nz',
          'specialist insurance',
          'medical specialist cover',
          'specialist consultation insurance',
          'specialist health insurance'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Specialist Coverage Insurance Guide NZ",
          "description": "Complete guide to specialist coverage in New Zealand health insurance",
          "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=630",
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
            <li><a href="#understanding" className="text-blue-600 hover:underline">Understanding Specialist Coverage</a></li>
            <li><a href="#types" className="text-blue-600 hover:underline">Types of Specialists</a></li>
            <li><a href="#coverage-levels" className="text-blue-600 hover:underline">Coverage Levels</a></li>
            <li><a href="#providers" className="text-blue-600 hover:underline">Provider Comparison</a></li>
          </ul>
        </nav>

        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Specialist Coverage Guide for New Zealand
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about specialist medical coverage
          </p>
          <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            Last Updated: {new Date().toLocaleDateString('en-NZ')}
          </div>
        </header>

        <div className="prose max-w-none">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&h=630"
            alt="Medical specialist consultation showing healthcare professional"
            className="w-full rounded-lg mb-8"
          />

          <section id="understanding" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Understanding Specialist Coverage in New Zealand
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Specialist coverage is a crucial component of health insurance that provides access to medical specialists when you need specialized care. In New Zealand's healthcare system, specialist coverage bridges the gap between public healthcare waiting times and immediate access to expert medical care.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Why Specialist Coverage Matters</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Faster access to specialists (weeks vs months)</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Choice of specialist and location</span>
                </li>
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Coverage for private specialist fees</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span className="text-blue-800">Peace of mind for complex health issues</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Public vs Private Specialist Care</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Public System</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Free specialist care</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>High-quality medical care</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Waiting lists for non-urgent care</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Limited choice of specialist</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">Private System</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Immediate or rapid access</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Choice of specialist</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Convenient appointment times</span>
                    </li>
                    <li className="flex items-start">
                      <DollarSign className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Costs involved (covered by insurance)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="types" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Types of Medical Specialists Covered
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Heart className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Cardiovascular</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cardiologists</li>
                  <li>• Cardiac surgeons</li>
                  <li>• Vascular surgeons</li>
                  <li>• Electrophysiologists</li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded">
                  <p className="text-xs text-red-700">
                    <strong>Typical consultation:</strong> $250-$400
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Brain className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Neurological</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Neurologists</li>
                  <li>• Neurosurgeons</li>
                  <li>• Psychiatrists</li>
                  <li>• Neuropsychologists</li>
                </ul>
                <div className="mt-4 p-3 bg-purple-50 rounded">
                  <p className="text-xs text-purple-700">
                    <strong>Typical consultation:</strong> $300-$500
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Stethoscope className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Surgical</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Orthopedic surgeons</li>
                  <li>• General surgeons</li>
                  <li>• Plastic surgeons</li>
                  <li>• ENT surgeons</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-xs text-blue-700">
                    <strong>Typical consultation:</strong> $200-$350
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Eye className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Sensory</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Ophthalmologists</li>
                  <li>• Optometrists</li>
                  <li>• Audiologists</li>
                  <li>• ENT specialists</li>
                </ul>
                <div className="mt-4 p-3 bg-green-50 rounded">
                  <p className="text-xs text-green-700">
                    <strong>Typical consultation:</strong> $180-$300
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Women's Health</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Gynecologists</li>
                  <li>• Obstetricians</li>
                  <li>• Fertility specialists</li>
                  <li>• Breast surgeons</li>
                </ul>
                <div className="mt-4 p-3 bg-orange-50 rounded">
                  <p className="text-xs text-orange-700">
                    <strong>Typical consultation:</strong> $220-$380
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="w-8 h-8 text-indigo-500 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Oncology</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Medical oncologists</li>
                  <li>• Radiation oncologists</li>
                  <li>• Surgical oncologists</li>
                  <li>• Hematologists</li>
                </ul>
                <div className="mt-4 p-3 bg-indigo-50 rounded">
                  <p className="text-xs text-indigo-700">
                    <strong>Typical consultation:</strong> $350-$600
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="coverage-levels" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Specialist Coverage Levels and Costs
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Basic Specialist Coverage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's Included</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Initial specialist consultations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Basic diagnostic tests</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Follow-up consultations (limited)</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Annual limits apply</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Cost Information</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-medium">Monthly Premium</p>
                        <p className="text-lg font-bold text-blue-600">$25-$45</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium">Annual Benefit Limit</p>
                        <p className="text-lg font-bold text-gray-700">$2,000-$5,000</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-medium">Typical Coverage</p>
                        <p className="text-lg font-bold text-green-600">70-80%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Specialist Coverage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's Included</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Unlimited specialist consultations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Advanced diagnostic procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Ongoing specialist care</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Second opinion coverage</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Cost Information</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-medium">Monthly Premium</p>
                        <p className="text-lg font-bold text-blue-600">$60-$120</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium">Annual Benefit Limit</p>
                        <p className="text-lg font-bold text-gray-700">$15,000-$50,000</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-medium">Typical Coverage</p>
                        <p className="text-lg font-bold text-green-600">90-100%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-purple-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Specialist Coverage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What's Included</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>All comprehensive benefits</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>International specialist coverage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Experimental treatment options</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Concierge health services</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Cost Information</h4>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-medium">Monthly Premium</p>
                        <p className="text-lg font-bold text-blue-600">$120-$250</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded">
                        <p className="font-medium">Annual Benefit Limit</p>
                        <p className="text-lg font-bold text-gray-700">Unlimited</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-medium">Typical Coverage</p>
                        <p className="text-lg font-bold text-green-600">100%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Specialist Coverage Works
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Referral Process</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">GP Consultation</h4>
                      <p className="text-gray-600 text-sm">Visit your GP to discuss symptoms and get a referral to an appropriate specialist.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Choose Your Specialist</h4>
                      <p className="text-gray-600 text-sm">Select from your insurer's network of specialists or choose your preferred specialist.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Book Appointment</h4>
                      <p className="text-gray-600 text-sm">Schedule your consultation, often within days or weeks rather than months.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Attend Consultation</h4>
                      <p className="text-gray-600 text-sm">Meet with the specialist for diagnosis, treatment planning, or ongoing care.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Submit Claim</h4>
                      <p className="text-gray-600 text-sm">Submit your claim through your insurer's app, website, or by post.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Claims and Reimbursement</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Direct Billing</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Many specialists offer direct billing to your insurer, meaning you only pay any excess or gap fees.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• No upfront payment required</li>
                      <li>• Faster processing</li>
                      <li>• Less paperwork</li>
                      <li>• Available with most major insurers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Claim and Reimburse</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Pay the specialist directly and submit a claim for reimbursement from your insurer.
                    </p>
                    <ul className="space-y-1 text-sm">
                      <li>• Pay specialist fees upfront</li>
                      <li>• Submit receipts and referrals</li>
                      <li>• Receive reimbursement within 5-10 days</li>
                      <li>• Keep records for tax purposes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="providers" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Best Providers for Specialist Coverage
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src="/logos/southern-cross.png" alt="Southern Cross" className="h-12 w-auto mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Southern Cross</h3>
                      <p className="text-gray-600">Largest specialist network</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.8/5</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Network Size</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 2,500+ specialists</li>
                      <li>• All major cities covered</li>
                      <li>• Rural area access</li>
                      <li>• International partnerships</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Coverage Benefits</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Up to 100% coverage</li>
                      <li>• No annual limits on many plans</li>
                      <li>• Direct billing available</li>
                      <li>• Fast pre-approval process</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Special Features</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Easy-claim app</li>
                      <li>• 24/7 support</li>
                      <li>• Member health resources</li>
                      <li>• Wellness programs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Best for: Comprehensive specialist access, families</span>
                  <Link to="/reviews/southern-cross" className="text-blue-600 hover:underline text-sm">
                    Read full review →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src="/logos/AIA.png" alt="AIA" className="h-12 w-auto mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">AIA</h3>
                      <p className="text-gray-600">Best for mental health specialists</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.7/5</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Specialist Focus</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Mental health specialists</li>
                      <li>• Wellness-focused care</li>
                      <li>• Preventive specialists</li>
                      <li>• Alternative therapy providers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Unique Benefits</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Vitality program integration</li>
                      <li>• Lifestyle coaching</li>
                      <li>• Health screening rewards</li>
                      <li>• Mental wellness support</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Coverage Highlights</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Mental health: $2,000/year</li>
                      <li>• Alternative therapies: $1,500/year</li>
                      <li>• Specialist consultations: Unlimited</li>
                      <li>• International coverage available</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Best for: Mental health focus, wellness enthusiasts</span>
                  <Link to="/reviews/aia" className="text-blue-600 hover:underline text-sm">
                    Read full review →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img src="/logos/nib.png" alt="nib" className="h-12 w-auto mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">nib</h3>
                      <p className="text-gray-600">Best digital specialist services</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">4.6/5</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Digital Innovation</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Telehealth consultations</li>
                      <li>• Digital health platform</li>
                      <li>• Online specialist booking</li>
                      <li>• Virtual second opinions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Network Quality</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• 1,800+ specialists</li>
                      <li>• Major urban centers</li>
                      <li>• Quality-focused selection</li>
                      <li>• Regular network updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Value Proposition</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Competitive pricing</li>
                      <li>• Fast claims processing</li>
                      <li>• Digital-first experience</li>
                      <li>• Flexible coverage options</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-600">Best for: Tech-savvy users, telehealth preference</span>
                  <Link to="/reviews/nib" className="text-blue-600 hover:underline text-sm">
                    Read full review →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Specialist Coverage by Medical Condition
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cancer Care</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Covered Services</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Oncology consultations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Chemotherapy and radiation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Surgical oncology</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Palliative care</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Coverage Limits</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Southern Cross: Unlimited</li>
                      <li>• AIA: Up to $100,000/year</li>
                      <li>• nib: Up to $75,000/year</li>
                      <li>• Most plans: 100% coverage</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mental Health Specialists</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Covered Professionals</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Psychiatrists</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Clinical psychologists</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Counselors and therapists</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Addiction specialists</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Annual Limits</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Southern Cross: $750-$2,000</li>
                      <li>• AIA: $2,000-$5,000</li>
                      <li>• nib: $1,000-$3,000</li>
                      <li>• Sessions: 8-20 per year</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cardiac Specialists</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Specialist Types</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Cardiologists</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Cardiac surgeons</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Electrophysiologists</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Vascular surgeons</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Typical Procedures</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Angioplasty: $15,000-$25,000</li>
                      <li>• Bypass surgery: $35,000-$55,000</li>
                      <li>• Pacemaker insertion: $20,000-$30,000</li>
                      <li>• Cardiac catheterization: $8,000-$12,000</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Maximizing Your Specialist Coverage
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting the Most Value</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Smart Strategies</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Use network specialists when possible</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Get pre-approval for expensive procedures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Combine consultations when appropriate</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Use telehealth options for follow-ups</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Avoid These Pitfalls</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Going to non-network specialists</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Not getting proper referrals</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Exceeding annual benefit limits</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Missing claim submission deadlines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding Waiting Periods</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Condition Type</th>
                        <th className="text-center py-3 px-4">Southern Cross</th>
                        <th className="text-center py-3 px-4">AIA</th>
                        <th className="text-center py-3 px-4">nib</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Accidents</td>
                        <td className="text-center py-3 px-4">0 days</td>
                        <td className="text-center py-3 px-4">0 days</td>
                        <td className="text-center py-3 px-4">0 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">General conditions</td>
                        <td className="text-center py-3 px-4">30 days</td>
                        <td className="text-center py-3 px-4">30 days</td>
                        <td className="text-center py-3 px-4">60 days</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Pre-existing conditions</td>
                        <td className="text-center py-3 px-4">12 months</td>
                        <td className="text-center py-3 px-4">12 months</td>
                        <td className="text-center py-3 px-4">12 months</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Mental health</td>
                        <td className="text-center py-3 px-4">60 days</td>
                        <td className="text-center py-3 px-4">30 days</td>
                        <td className="text-center py-3 px-4">90 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                  Do I need a referral to see a specialist?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    For insurance purposes, most plans require a GP referral to see a specialist. This ensures appropriate care pathways and helps control costs. However, some plans allow direct access to certain specialists like dermatologists or ophthalmologists.
                  </p>
                  <p className="mt-3">
                    The referral process typically involves:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• GP assessment of your condition</li>
                    <li>• Written referral to appropriate specialist</li>
                    <li>• Specialist appointment booking</li>
                    <li>• Insurance pre-approval if required</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  How much do specialist consultations cost without insurance?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    Specialist consultation fees in New Zealand vary significantly by specialty and location:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>• General specialists: $200-$350</li>
                    <li>• Surgical specialists: $300-$500</li>
                    <li>• Highly specialized fields: $400-$600</li>
                    <li>• Follow-up consultations: $150-$300</li>
                  </ul>
                  <p className="mt-3">
                    Additional costs may include diagnostic tests, procedures, and ongoing treatment, which can quickly add up to thousands of dollars.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  Can I choose any specialist I want?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    Your choice of specialist depends on your insurance plan:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>• <strong>Network specialists:</strong> Full coverage, direct billing available</li>
                    <li>• <strong>Non-network specialists:</strong> Partial coverage, you pay the difference</li>
                    <li>• <strong>Premium plans:</strong> Often allow choice of any specialist</li>
                    <li>• <strong>Basic plans:</strong> May be limited to network providers</li>
                  </ul>
                  <p className="mt-3">
                    Most insurers have extensive specialist networks covering all major specialties and locations.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  What if I need to see a specialist overseas?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    Overseas specialist coverage varies by plan:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>• <strong>Emergency treatment:</strong> Usually covered up to certain limits</li>
                    <li>• <strong>Planned treatment:</strong> May be covered if not available in NZ</li>
                    <li>• <strong>Premium plans:</strong> Often include international specialist coverage</li>
                    <li>• <strong>Pre-approval:</strong> Usually required for overseas treatment</li>
                  </ul>
                  <p className="mt-3">
                    AIA and some Southern Cross plans offer the most comprehensive overseas specialist coverage.
                  </p>
                </div>
              </details>

              <details className="bg-white p-6 rounded-lg shadow-sm">
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                  How long do I have to wait to see a specialist?
                </summary>
                <div className="mt-4 text-gray-600">
                  <p>
                    With private health insurance, specialist waiting times are typically:
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li>• <strong>Urgent cases:</strong> Same day to 1 week</li>
                    <li>• <strong>Semi-urgent:</strong> 1-3 weeks</li>
                    <li>• <strong>Routine consultations:</strong> 2-6 weeks</li>
                    <li>• <strong>Highly specialized fields:</strong> 4-8 weeks</li>
                  </ul>
                  <p className="mt-3">
                    This compares favorably to public system waiting times, which can range from months to over a year for non-urgent specialist care.
                  </p>
                </div>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Cost-Saving Tips for Specialist Coverage
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reducing Out-of-Pocket Costs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Smart Strategies</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Choose network specialists (save 20-40%)</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Use telehealth for follow-ups (save 30-50%)</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Bundle multiple consultations (save 10-15%)</span>
                      </li>
                      <li className="flex items-start">
                        <DollarSign className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Time procedures strategically</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">Plan Optimization</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Choose appropriate coverage level</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Consider higher excess for lower premiums</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Review and adjust annually</span>
                      </li>
                      <li className="flex items-start">
                        <Shield className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Take advantage of wellness discounts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Annual Benefit Limits by Provider</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Provider</th>
                        <th className="text-center py-3 px-4">Basic Plan</th>
                        <th className="text-center py-3 px-4">Standard Plan</th>
                        <th className="text-center py-3 px-4">Premium Plan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">Southern Cross</td>
                        <td className="text-center py-3 px-4">$5,000</td>
                        <td className="text-center py-3 px-4">$15,000</td>
                        <td className="text-center py-3 px-4">Unlimited</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">AIA</td>
                        <td className="text-center py-3 px-4">$3,000</td>
                        <td className="text-center py-3 px-4">$10,000</td>
                        <td className="text-center py-3 px-4">$50,000</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3 px-4 font-medium">nib</td>
                        <td className="text-center py-3 px-4">$2,500</td>
                        <td className="text-center py-3 px-4">$8,000</td>
                        <td className="text-center py-3 px-4">$25,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Partners Life</td>
                        <td className="text-center py-3 px-4">$4,000</td>
                        <td className="text-center py-3 px-4">$12,000</td>
                        <td className="text-center py-3 px-4">$40,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Specialist Coverage for Different Life Stages
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Young Adults (18-35)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Priority Specialists</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Dermatologists (skin health)</li>
                      <li>• Sports medicine specialists</li>
                      <li>• Mental health professionals</li>
                      <li>• Gynecologists/urologists</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Coverage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Basic to standard specialist coverage</li>
                      <li>• Focus on mental health benefits</li>
                      <li>• Sports injury coverage</li>
                      <li>• Preventive care specialists</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Middle Age (35-55)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Priority Specialists</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Cardiologists</li>
                      <li>• Endocrinologists</li>
                      <li>• Gastroenterologists</li>
                      <li>• Orthopedic specialists</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Coverage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Comprehensive specialist coverage</li>
                      <li>• Higher annual limits</li>
                      <li>• Preventive screening coverage</li>
                      <li>• Family specialist benefits</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Seniors (55+)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Priority Specialists</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Oncologists</li>
                      <li>• Cardiologists</li>
                      <li>• Neurologists</li>
                      <li>• Rheumatologists</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Recommended Coverage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Premium specialist coverage</li>
                      <li>• Unlimited or high annual limits</li>
                      <li>• Cancer care specialists</li>
                      <li>• Geriatric specialist access</li>
                    </ul>
                  </div>
                </div>
                <Link to="/guides/seniors" className="inline-flex items-center text-blue-600 hover:underline mt-4">
                  Read our Seniors Health Insurance Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Compare Specialist Coverage Plans</h2>
            <p className="text-gray-600 mb-6">
              Find the best specialist coverage for your needs. Compare options from
              leading NZ health insurance providers and get expert recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/compare"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold"
              >
                Compare Specialist Cover
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

export default SpecialistCoverageGuide;