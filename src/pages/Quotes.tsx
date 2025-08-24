import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle, Lock, FileCheck, UserCheck, Clock } from 'lucide-react';
import SEO from '../components/SEO';

interface FormData {
  step: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age: string;
  smoker: string;
  location: string;
  coverage: string[];
  budget: string;
}

function Quotes() {
  const [formData, setFormData] = useState<FormData>({
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    smoker: '',
    location: '',
    coverage: [],
    budget: ''
  });

  function encode(obj: Record<string, string>) {
    return new URLSearchParams(obj).toString();
  }

  function seedHiddenMeta() {
    const params = new URLSearchParams(window.location.search);
    ["utm_source","utm_medium","utm_campaign","utm_term","utm_content","gclid","fbclid"].forEach(k => {
      const v = params.get(k);
      if (v) localStorage.setItem(k, v);
    });
    const get = (k: string) => params.get(k) || localStorage.getItem(k) || "";
    const gaCookie = document.cookie.split("; ").find(c => c.startsWith("_ga="));
    const gaClientId = gaCookie ? gaCookie.split(".").slice(-2).join(".") : "";
    
    return {
      pageUrl: window.location.href,
      pagePath: window.location.pathname,
      userAgent: navigator.userAgent,
      ga_client_id: gaClientId,
      session_id: crypto.randomUUID(),
      utm_source: get("utm_source"),
      utm_medium: get("utm_medium"),
      utm_campaign: get("utm_campaign"),
      utm_term: get("utm_term"),
      utm_content: get("utm_content"),
      gclid: get("gclid"),
      fbclid: get("fbclid"),
      source_form: "health-quote"
    };
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateNZPhone = (phone: string) => {
    const nzPhoneRegex = /^(02[12789])(\s*\d){7,8}$/;
    return nzPhoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '');
      let formatted = cleaned;
      if (cleaned.length >= 3) {
        formatted = cleaned.slice(0, 3) + ' ' + cleaned.slice(3);
        if (cleaned.length >= 6) {
          formatted = formatted.slice(0, 7) + ' ' + formatted.slice(7);
        }
      }
      setFormData(prev => ({ ...prev, [name]: formatted }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    const newCoverage = formData.coverage.includes(value)
      ? formData.coverage.filter(item => item !== value)
      : [...formData.coverage, value];
    setFormData({
      ...formData,
      coverage: newCoverage
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.step === 7) {
      if (!validateEmail(formData.email)) {
        alert('Please enter a valid email address');
        return;
      }
      if (!validateNZPhone(formData.phone)) {
        alert('Please enter a valid NZ mobile number (e.g., 021 123 4567)');
        return;
      }
      if (formData.firstName && formData.lastName && formData.email && formData.phone) {
        // Submit to Netlify Forms using fetch
        const metaData = seedHiddenMeta();
        const submitData = {
          'form-name': 'health-quote',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          age: formData.age,
          smoker: formData.smoker,
          location: formData.location,
          coverage: formData.coverage.join(', '),
          budget: formData.budget,
          ...metaData
        };
        
        try {
          await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode(submitData),
          });
          window.location.href = "/thank-you.html";
        } catch (error) {
          console.error('Form submission error:', error);
          alert('There was an error submitting your form. Please try again.');
        }
        return;
      }
    }

    setFormData(prev => ({ ...prev, step: prev.step + 1 }));
  };

  const renderStep = () => {
    switch (formData.step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">What is your age group?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">This helps us find the most suitable coverage options for you.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['18-30', '31-45', '46-60', '60+'].map((ageGroup) => (
                <button
                  key={ageGroup}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, age: ageGroup }));
                    handleSubmit(new Event('submit') as any);
                  }}
                  className={`p-4 sm:p-6 text-center rounded-lg border-2 transition-all hover:scale-105 ${
                    formData.age === ageGroup
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-600 hover:shadow-md'
                  }`}
                >
                  <span className="text-base sm:text-lg font-medium">{ageGroup}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Are you a smoker?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">This helps us provide accurate premium estimates.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['No', 'Yes'].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, smoker: option }));
                    handleSubmit(new Event('submit') as any);
                  }}
                  className={`p-4 sm:p-6 text-center rounded-lg border-2 transition-all hover:scale-105 ${
                    formData.smoker === option
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-600 hover:shadow-md'
                  }`}
                >
                  <span className="text-base sm:text-lg font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Where are you located?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Your location helps us determine available providers and coverage options.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Auckland', 'Wellington', 'Christchurch', 'Other'].map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, location: region.toLowerCase() }));
                    handleSubmit(new Event('submit') as any);
                  }}
                  className={`p-4 sm:p-6 text-center rounded-lg border-2 transition-all hover:scale-105 ${
                    formData.location === region.toLowerCase()
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-600 hover:shadow-md'
                  }`}
                >
                  <span className="text-base sm:text-lg font-medium">{region}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">What is your priority for coverage?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Select the type of coverage that matters most to you.</p>
            <div className="space-y-3">
              {[
                'Hospital & Surgical',
                'GP Visits',
                'Specialist Consultations',
                'Dental & Optical',
                'Mental Health Support',
                'Alternative Therapies'
              ].map((option) => (
                <button 
                  key={option} 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, coverage: [option] }));
                    handleSubmit(new Event('submit') as any);
                  }}
                  className={`w-full flex items-center p-3 sm:p-4 border-2 rounded-lg cursor-pointer transition-all hover:scale-105 ${
                    formData.coverage[0] === option
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-600 hover:shadow-md'
                  }`}
                >
                  <span className="text-sm sm:text-base">{option}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">What's your monthly budget?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">This helps us find plans that fit your financial preferences.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Under $50',
                '$50 - $100',
                '$100 - $150',
                'Over $150'
              ].map((budgetRange) => (
                <button
                  key={budgetRange}
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, budget: budgetRange.toLowerCase().replace(/\s/g, '-') }));
                    handleSubmit(new Event('submit') as any);
                  }}
                  className={`p-4 sm:p-6 text-center rounded-lg border-2 transition-all hover:scale-105 ${
                    formData.budget === budgetRange.toLowerCase().replace(/\s/g, '-')
                      ? 'border-blue-600 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-blue-600 hover:shadow-md'
                  }`}
                >
                  <div className="text-base sm:text-lg font-medium">{budgetRange}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-2">per month</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Tell us about yourself</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">Let's start with your name.</p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Almost there! How can we contact you?</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">We'll use this information to send your personalized quotes.</p>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all ${
                    formData.email && !validateEmail(formData.email) ? 'border-red-300' : ''
                  }`}
                  required
                />
                {formData.email && !validateEmail(formData.email) && (
                  <p className="mt-1 text-sm text-red-600">Please enter a valid email address</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="021 123 4567"
                  className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-all ${
                    formData.phone && !validateNZPhone(formData.phone) ? 'border-red-300' : ''
                  }`}
                  required
                />
                {formData.phone && !validateNZPhone(formData.phone) && (
                  <p className="mt-1 text-sm text-red-600">Please enter a valid NZ mobile number</p>
                )}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <SEO
        title="Get Health Insurance Quotes | Health Insurance Comparison"
        description="Get personalized health insurance quotes from top NZ providers. Compare plans and find the best coverage for your needs."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Health Insurance Quotes",
          "description": "Get personalized health insurance quotes",
          "offers": {
            "@type": "AggregateOffer",
            "category": "Health Insurance",
            "priceCurrency": "NZD"
          }
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
          {/* Progress Bar */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4, 5, 6, 7].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`flex items-center justify-center w-6 h-6 sm:w-10 sm:h-10 rounded-full transition-all ${
                    step <= formData.step ? 'bg-blue-600 text-white scale-110' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step < formData.step ? (
                      <CheckCircle className="w-3 h-3 sm:w-6 sm:h-6" />
                    ) : (
                      <span className="text-xs sm:text-base">{step}</span>
                    )}
                  </div>
                  {step < 7 && (
                    <div className={`w-4 sm:w-16 h-1 transition-all ${
                      step < formData.step ? 'bg-blue-600' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Card */}
          {/* Partner Logos Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 px-2">
              Get Your Personalized Quote
            </h1>
            <p className="text-sm sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
              Compare health insurance quotes from New Zealand's leading providers
            </p>
            <div className="bg-white rounded-xl shadow-lg p-3 sm:p-8">
              <div className="flex justify-center items-center gap-1 sm:gap-6 overflow-x-auto">
                {[
                  {
                    name: "Southern Cross",
                    logo: "https://logo.clearbit.com/southerncross.co.nz"
                  },
                  {
                    name: "nib Insurance",
                    logo: "https://logo.clearbit.com/nib.co.nz"
                  },
                  {
                    name: "AIA Insurance",
                    logo: "https://logo.clearbit.com/aia.co.nz"
                  },
                  {
                    name: "Accuro",
                    logo: "https://logo.clearbit.com/accuro.co.nz"
                  }
                ].map(provider => (
                  <div key={provider.name} className="flex items-center justify-center h-10 sm:h-20 min-w-[70px] sm:min-w-[80px] flex-shrink-0">
                    <img 
                      src={provider.logo} 
                      alt={provider.name} 
                      className="h-6 sm:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-4 sm:p-8 transition-all hover:shadow-2xl mb-4">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-8">
              
              {renderStep()}
              <div className="mt-4 sm:mt-8 flex justify-between items-center">
                {formData.step > 1 && formData.step !== 7 && (
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, step: prev.step - 1 }))}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-xs sm:text-base px-2 py-1"
                  >
                    Back
                  </button>
                )}
                {!['1', '2', '3', '5'].includes(formData.step.toString()) && (
                  <div className={formData.step === 7 ? "w-full" : "flex justify-center"}>
                    <button
                      type="submit"
                      className={`flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all hover:scale-105 font-medium text-sm sm:text-base ${
                        formData.step === 7 
                          ? 'bg-orange-500 text-white hover:bg-orange-600 w-full' 
                          : 'bg-blue-600 text-white hover:bg-blue-700 ml-auto'
                      }`}
                    >
                      {formData.step === 7 ? 'Get Quotes' : 'Next'}
                      <ArrowRight className="ml-1 sm:ml-2 w-3 h-3 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Privacy Notice */}
              <div className="mt-3 sm:mt-6 flex items-center justify-center space-x-1 text-xs sm:text-sm text-gray-600 px-2">
                <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                <span>Your information is protected.</span>
                <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </div>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-4 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8">
            <div className="bg-white rounded-lg p-3 sm:p-6 shadow-md transition-all hover:shadow-lg">
              <Shield className="w-5 h-5 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-1 sm:mb-3" />
              <p className="font-medium text-gray-900 text-xs sm:text-base text-center">100% Secure & Confidential</p>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 text-center">Your information is protected</p>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-6 shadow-md transition-all hover:shadow-lg">
              <CheckCircle className="w-5 h-5 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-1 sm:mb-3" />
              <p className="font-medium text-gray-900 text-xs sm:text-base text-center">Compare Top NZ Providers</p>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 text-center">Get quotes from leading insurers</p>
            </div>
            <div className="bg-white rounded-lg p-3 sm:p-6 shadow-md transition-all hover:shadow-lg">
              <Lock className="w-5 h-5 sm:w-8 sm:h-8 text-blue-600 mx-auto mb-1 sm:mb-3" />
              <p className="font-medium text-gray-900 text-xs sm:text-base text-center">Free, No-Obligation Quote</p>
              <p className="mt-1 text-xs sm:text-sm text-gray-600 text-center">Compare with no pressure</p>
            </div>
          </div>

          {/* Partners Section */}
          <div className="mt-4 sm:mt-16">
            <h2 className="text-base sm:text-2xl font-bold text-center text-gray-900 mb-3 sm:mb-8 px-2">Our Insurance Partners</h2>
            <div className="flex justify-center items-center gap-1 sm:gap-6 overflow-x-auto">
              {[
                {
                  name: "Southern Cross",
                  logo: "https://logo.clearbit.com/southerncross.co.nz"
                },
                {
                  name: "nib Insurance",
                  logo: "https://logo.clearbit.com/nib.co.nz"
                },
                {
                  name: "AIA Insurance",
                  logo: "https://logo.clearbit.com/aia.co.nz"
                },
                {
                  name: "Partners Life",
                  logo: "https://logo.clearbit.com/partnerslife.co.nz"
                }
              ].map(provider => (
                <div key={provider.name} className="bg-white rounded-lg p-2 sm:p-4 flex items-center justify-center h-8 sm:h-16 min-w-[70px] sm:min-w-[80px] flex-shrink-0 hover:shadow-md transition-shadow">
                  <img 
                    src={provider.logo} 
                    alt={provider.name} 
                    className="h-5 sm:h-10 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-4 sm:mt-12">
            <h2 className="text-base sm:text-2xl font-bold text-center text-gray-900 mb-3 sm:mb-8 px-2">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-8 px-2 sm:px-0">
              {[
                {
                  icon: FileCheck,
                  title: "1. Complete the Quote Form",
                  description: "Tell us a bit about yourself and what kind of health cover you're looking for — it only takes a minute."
                },
                {
                  icon: UserCheck,
                  title: "2. We Match You with an Adviser",
                  description: "We securely pass your info to a licensed broker or provider who can offer quotes tailored to your needs."
                },
                {
                  icon: Clock,
                  title: "3. Review Quotes & Get Covered",
                  description: "An adviser will contact you to explain your options. You choose the plan that suits you — no pressure, no obligation."
                }
              ].map(step => (
                <div key={step.title} className="bg-white rounded-lg p-3 sm:p-6 shadow-md text-center">
                  <div className="bg-blue-50 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <step.icon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <h3 className="text-sm sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 sm:mt-8 bg-gray-50 rounded-lg p-3 sm:p-6 mx-2 sm:mx-0">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              The information provided on this website is for general informational purposes only and does not constitute financial advice. It is not intended to be a substitute for professional advice. Any reliance you place on the information is solely at your own risk. We recommend you consult with a qualified financial advisor before making any financial decisions. We are not responsible for any losses or damages that may arise from the use of this information. The logos and trademarks shown are for illustration purposes only and this website has no direct affiliation with those displayed.
            </p>
          </div>
        </div>

        {/* Simple Footer */}
        <footer className="mt-6 sm:mt-16 pt-4 sm:pt-8 border-t border-gray-200 px-2 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                <span className="ml-2 text-base sm:text-xl font-bold text-gray-900">Health Insurance Comparison</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                Helping New Zealanders find the right health insurance coverage.
              </p>
            </div>
            <div className="text-left sm:text-right">
              <div className="space-y-2">
                <div className="flex items-center justify-start sm:justify-end text-xs sm:text-sm text-gray-600">
                  <Lock className="w-4 h-4 mr-2" />
                  <Link to="/privacy" className="hover:text-blue-600">Privacy Policy</Link>
                </div>
                <div className="flex items-center justify-start sm:justify-end text-xs sm:text-sm text-gray-600">
                  <FileCheck className="w-4 h-4 mr-2" />
                  <Link to="/terms" className="hover:text-blue-600">Terms of Service</Link>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">
                  © {new Date().getFullYear()} Health Insurance Comparison
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Quotes;