import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { SITE_URL } from '../config/constants';
import Breadcrumbs from '../components/Breadcrumbs';

const HealthInsuranceFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Health Insurance FAQ', href: '/health-insurance-faq' }
  ];

  // NZ-specific health insurance questions based on research data
  const faqs = [
    {
      category: "Understanding Health Insurance",
      questions: [
        {
          question: "What is health insurance?",
          answer: "Health insurance is a type of insurance that covers medical expenses. In New Zealand, private health insurance works alongside our public healthcare system to provide faster access to treatment, choice of specialists, and coverage for services not fully covered by the public system."
        },
        {
          question: "What does health insurance cover?",
          answer: "Health insurance in New Zealand typically covers private hospital treatment, specialist consultations, diagnostic tests, surgery, and some prescription medications. Many plans also offer extras like dental, optical, and physiotherapy coverage."
        },
        {
          question: "Do I need health insurance in New Zealand?",
          answer: "Health insurance is not mandatory in New Zealand as we have a public healthcare system. However, private health insurance can provide benefits like shorter waiting times, choice of specialists, private rooms, and coverage for extras like dental and optical care."
        },
        {
          question: "What is the cost of health insurance in New Zealand?",
          answer: "Health insurance costs vary widely based on age, coverage level, and provider. Basic hospital plans start from around $40-80 per month, while comprehensive plans can cost $150-300+ per month for individuals. Family plans typically range from $150-500+ monthly."
        }
      ]
    },
    {
      category: "Coverage and Benefits",
      questions: [
        {
          question: "Does health insurance cover dental care?",
          answer: "Basic health insurance plans typically don't include dental coverage. Dental care is usually available as an optional extra or part of comprehensive plans. Coverage may include check-ups, basic treatments, and sometimes major dental work with annual limits."
        },
        {
          question: "Does health insurance cover hearing aids?",
          answer: "Some health insurance policies cover hearing aids, typically in comprehensive plans or as optional extras. Coverage is usually limited to $1,000-3,000 every few years, and waiting periods often apply."
        },
        {
          question: "Are ambulance rides covered by health insurance?",
          answer: "In New Zealand, emergency ambulance services are partially subsidized by the government. Most health insurance policies provide additional coverage for ambulance services, reducing or eliminating the patient contribution required."
        },
        {
          question: "What does health insurance cover for surgery?",
          answer: "Health insurance typically covers medically necessary surgery in private hospitals, including surgeon fees, hospital accommodation, theatre costs, and related medical expenses. Cosmetic surgery is usually excluded unless reconstructive."
        }
      ]
    },
    {
      category: "Plans and Providers",
      questions: [
        {
          question: "Can you have 2 health insurance plans?",
          answer: "Yes, you can have multiple health insurance policies in New Zealand. Some people have separate hospital and extras coverage, or individual and group policies through work. However, you typically can't claim the same expense from multiple insurers."
        },
        {
          question: "What are the main health insurance providers in New Zealand?",
          answer: "The main providers include Southern Cross (largest, not-for-profit), NIB (competitive plans), AIA/Sovereign (comprehensive options), Accuro (boutique service), and AA Insurance. Each offers different plans and pricing structures."
        },
        {
          question: "How do I choose the best health insurance plan?",
          answer: "Consider your budget, health needs, age, and priorities. Compare hospital coverage, extras benefits, excess amounts, waiting periods, and exclusions. Use comparison tools and get quotes from multiple providers."
        },
        {
          question: "What is the difference between hospital and comprehensive cover?",
          answer: "Hospital cover includes private hospital treatment and specialist care. Comprehensive cover includes hospital benefits plus extras like dental, optical, physiotherapy, and alternative therapies."
        }
      ]
    },
    {
      category: "Claims and Practical Questions",
      questions: [
        {
          question: "How do health insurance claims work?",
          answer: "Most NZ health insurers offer direct payment to providers for covered services. For other claims, you pay upfront and submit receipts. Many insurers have online portals and mobile apps for easy claim submission."
        },
        {
          question: "What is an excess in health insurance?",
          answer: "An excess is the amount you pay towards each claim before insurance coverage kicks in. Higher excess usually means lower premiums. In NZ, excesses typically range from $100-500 per claim or per year."
        },
        {
          question: "Can I get health insurance with pre-existing conditions?",
          answer: "Yes, but pre-existing conditions may be excluded from coverage for a waiting period or permanently. Some insurers offer coverage with loadings (higher premiums) for pre-existing conditions."
        },
        {
          question: "When can I claim on my health insurance?",
          answer: "Most health insurance policies have waiting periods before you can claim - typically 6 months for pre-existing conditions and 2-12 months for specific treatments like dental or maternity care."
        }
      ]
    },
    {
      category: "Costs and Value",
      questions: [
        {
          question: "Is health insurance worth it in New Zealand?",
          answer: "This depends on your circumstances. Health insurance can provide value through faster treatment access, specialist choice, private rooms, and extras coverage. Consider your health needs, budget, and priorities when deciding."
        },
        {
          question: "What affects health insurance premiums?",
          answer: "Premiums are affected by age, coverage level, excess amount, location, health history, and lifestyle factors. Premiums typically increase annually and with age."
        },
        {
          question: "Can I get tax benefits for health insurance?",
          answer: "In New Zealand, health insurance premiums are generally not tax deductible for individuals. However, some employer-provided health insurance may have tax advantages."
        },
        {
          question: "How much should I budget for health insurance?",
          answer: "A general guideline is 2-5% of gross income for health insurance, but this varies widely based on age, health needs, and coverage preferences. Compare plans to find the best value for your situation."
        }
      ]
    },
    {
      category: "Special Situations",
      questions: [
        {
          question: "What happens if I cancel my health insurance?",
          answer: "You can usually cancel anytime with 30 days notice. You'll lose coverage immediately and may face waiting periods if you rejoin later. Consider carefully as age-based premiums may be higher when you return."
        },
        {
          question: "Can I get temporary health insurance?",
          answer: "Some NZ insurers offer short-term or temporary health insurance for specific situations like gap coverage between jobs or visitors to New Zealand. Coverage and terms are usually more limited than standard policies."
        },
        {
          question: "Do I need health insurance as a visitor to New Zealand?",
          answer: "Visitors to New Zealand should have travel insurance with medical coverage as they're not covered by the public health system. Some visitors may be eligible for emergency treatment only."
        },
        {
          question: "What happens to health insurance when I turn 65?",
          answer: "You can continue private health insurance after 65 in New Zealand. While you become eligible for more subsidized public healthcare, many people keep private cover for faster access and extra benefits."
        }
      ]
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  let questionIndex = 0;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  };

  return (
    <>
      <Helmet>
        <title>Health Insurance FAQ New Zealand - 50+ Common Questions Answered</title>
        <meta name="description" content="Get answers to the most common health insurance questions in New Zealand. Coverage, costs, claims, providers and more - all your questions answered in one place." />
        <meta name="keywords" content="health insurance faq nz, health insurance questions, health insurance help, health coverage questions new zealand" />
        <link rel="canonical" href={`${SITE_URL}/health-insurance-faq`} />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Health Insurance FAQ New Zealand
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get answers to the most common health insurance questions in New Zealand. Everything you need to know about coverage, costs, claims, and choosing the right plan.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">❓</div>
                  <h3 className="font-semibold text-gray-900 mb-2">50+ Questions</h3>
                  <p className="text-gray-600 text-sm">Comprehensive answers to all your health insurance queries</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">🇳🇿</div>
                  <h3 className="font-semibold text-gray-900 mb-2">NZ Specific</h3>
                  <p className="text-gray-600 text-sm">All information tailored for the New Zealand healthcare system</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Advice</h3>
                  <p className="text-gray-600 text-sm">Professional guidance to help you make informed decisions</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Navigation</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {faqs.map((category, index) => (
                    <a
                      key={index}
                      href={`#${category.category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-900">{category.category}</h3>
                      <p className="text-sm text-gray-600">{category.questions.length} questions</p>
                    </a>
                  ))}
                </div>
              </div>

              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 
                    id={category.category.toLowerCase().replace(/\s+/g, '-')}
                    className="text-2xl font-bold text-gray-900 mb-6"
                  >
                    {category.category}
                  </h2>
                  
                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const currentIndex = questionIndex++;
                      return (
                        <div
                          key={faqIndex}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFaq(currentIndex)}
                            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                          >
                            <div className="flex justify-between items-center">
                              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                {faq.question}
                              </h3>
                              <ChevronDown
                                className={`h-5 w-5 text-gray-500 transition-transform ${
                                  openFaq === currentIndex ? 'rotate-180' : ''
                                }`}
                              />
                            </div>
                          </button>
                          
                          {openFaq === currentIndex && (
                            <div className="px-6 py-4 bg-white border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl mt-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-lg mb-6">
                    Can't find the answer you're looking for? Get personalized quotes and advice from New Zealand's top health insurance providers.
                  </p>
                  <div className="space-x-4">
                    <a 
                      href="/compare" 
                      className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      Compare Plans
                    </a>
                    <a 
                      href="/quotes" 
                      className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Compare Providers</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    See how Southern Cross, NIB, AIA, and other providers stack up.
                  </p>
                  <a href="/compare" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Compare Now →
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Coverage Guides</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Detailed guides on what different types of health insurance cover.
                  </p>
                  <a href="/guides" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Read Guides →
                  </a>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Provider Reviews</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Real customer reviews and ratings of NZ health insurance providers.
                  </p>
                  <a href="/reviews" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Read Reviews →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HealthInsuranceFAQ;