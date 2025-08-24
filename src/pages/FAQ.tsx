import React from 'react';
import { Plus, Minus } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSchema from '../components/FAQSchema';

function FAQ() {
  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What is HealthCompare NZ?",
          a: "HealthCompare NZ is a free online service that helps New Zealanders compare and find the best health insurance plans. We partner with leading insurance providers to offer you unbiased comparisons and help you make informed decisions about your health coverage."
        },
        {
          q: "Is your service free to use?",
          a: "Yes, our comparison service is completely free for users. We receive a commission from insurance providers when you purchase a policy through our platform, but this doesn't affect the price you pay."
        },
        {
          q: "How do you make money?",
          a: "We receive a commission from insurance providers when customers purchase policies through our platform. This doesn't affect the price you pay, and we remain unbiased in our comparisons."
        }
      ]
    },
    {
      category: "Insurance Coverage",
      questions: [
        {
          q: "What types of health insurance can I compare?",
          a: "We compare various types of health insurance including hospital cover, everyday health cover (extras), and comprehensive plans from major providers like Southern Cross, nib, and AIA."
        },
        {
          q: "Can I get coverage for pre-existing conditions?",
          a: "Coverage for pre-existing conditions varies by provider and condition. Some insurers may cover certain pre-existing conditions after a waiting period, while others may exclude them. We recommend discussing specific conditions with the insurance provider."
        },
        {
          q: "What are waiting periods?",
          a: "Waiting periods are the time you need to wait after purchasing a policy before you can claim benefits. These vary by provider and type of treatment, typically ranging from 0 days for accidents to 12 months for pre-existing conditions."
        }
      ]
    },
    {
      category: "Comparing and Choosing Plans",
      questions: [
        {
          q: "How do I compare health insurance plans?",
          a: "Simply use our comparison tool to enter your details and preferences. We'll show you side-by-side comparisons of different health insurance plans available in New Zealand, including coverage details, prices, and benefits."
        },
        {
          q: "What is the cheapest health insurance in New Zealand?",
          a: "The cheapest health insurance plans in NZ start from around $25-30 per month for basic coverage. Providers like Accuro, nib, and Partners Life offer affordable entry-level plans. However, the cheapest option may not provide the coverage you need, so it's important to compare benefits as well as price."
        },
        {
          q: "How much does health insurance cost in NZ?",
          a: "Health insurance in New Zealand typically costs between $25-150 per month depending on your age, coverage level, and provider. Basic plans start from $25/month, while comprehensive family coverage can cost $200+ per month."
        },
        {
          q: "Which health insurance company is best in New Zealand?",
          a: "The best health insurance company depends on your specific needs. Southern Cross is the largest provider with extensive networks, nib offers competitive pricing, AIA provides good value for families, and Partners Life specializes in simple, affordable coverage."
        },
        {
          q: "How do I know which plan is right for me?",
          a: "The right plan depends on your specific needs, budget, and circumstances. Consider factors like your age, health status, family situation, and what types of medical services you're likely to need. Our comparison tool helps you evaluate these factors."
        },
        {
          q: "Can I get health insurance with pre-existing conditions?",
          a: "Yes, but coverage varies by provider. Some insurers cover pre-existing conditions after waiting periods (usually 12 months), while others may exclude them permanently. It's important to declare all conditions during application."
        },
        {
          q: "Can I change my insurance provider?",
          a: "Yes, you can change providers at any time. However, be aware that new waiting periods may apply and pre-existing conditions may be assessed differently by the new provider."
        }
      ]
    },
    {
      category: "Cost and Pricing",
      questions: [
        {
          q: "How can I get cheaper health insurance?",
          a: "To get cheaper health insurance: compare multiple providers, choose a higher excess, opt for basic cover if suitable, pay annually instead of monthly, and look for discounts (family, online, loyalty). Use our comparison tool to find the best deals."
        },
        {
          q: "Do health insurance premiums increase with age?",
          a: "Yes, health insurance premiums typically increase as you get older, especially after age 50. Some providers offer age-based pricing while others use community rating. It's worth comparing providers to find the best rates for your age group."
        },
        {
          q: "Are there family discounts available?",
          a: "Yes, most health insurance providers in NZ offer family discounts. These can range from 5-15% off when covering multiple family members. Some providers also offer free cover for children when parents are insured."
        },
        {
          q: "Can foreigners get health insurance in New Zealand?",
          a: "Yes, foreigners living in New Zealand can get private health insurance. Some providers have specific policies for non-residents or temporary visa holders. Requirements and pricing may vary based on visa status and length of stay."
        }
      ]
    },
    {
      category: "Claims and Support",
      questions: [
        {
          q: "How do I make a claim?",
          a: "Claims processes vary by provider. Most insurers offer online claims portals, mobile apps, or paper-based claims. Specific claiming instructions will be provided in your policy documentation."
        },
        {
          q: "What if I need help choosing a plan?",
          a: "Our customer support team is available to help you compare plans and understand your options. You can contact us by phone, email, or through our website's contact form."
        },
        {
          q: "Can I cancel my policy if I'm not satisfied?",
          a: "Most health insurance policies come with a cooling-off period (usually 14 days) during which you can cancel without penalty. After this period, cancellation terms vary by provider."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Health Insurance FAQ NZ 2025 - Compare Plans, Costs & Providers"
        description="Get answers about health insurance in New Zealand. Find the cheapest health insurance, compare providers, understand costs, and choose the best plan for you."
        canonicalUrl="https://healthinsurancecomparison.co.nz/faq"
        keywords={[
          'health insurance faq nz',
          'cheapest health insurance nz',
          'health insurance cost nz',
          'best health insurance nz',
          'health insurance companies nz'
        ]}
      />
      <FAQSchema faqs={faqs} />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
            <p className="mt-4 text-xl text-blue-100">
              Find answers to common questions about health insurance in New Zealand
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-16">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h2>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <details key={faqIndex} className="group">
                      <summary className="flex justify-between items-center font-medium cursor-pointer list-none bg-gray-50 p-4 rounded-lg">
                        <span className="text-gray-900">{faq.q}</span>
                        <span className="transition group-open:rotate-180">
                          <Plus className="h-5 w-5 text-blue-600 group-open:hidden" />
                          <Minus className="h-5 w-5 text-blue-600 hidden group-open:block" />
                        </span>
                      </summary>
                      <div className="mt-3 text-gray-600 bg-white p-4 rounded-lg">
                        {faq.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Still Have Questions?</h2>
            <p className="mt-4 text-gray-600">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;