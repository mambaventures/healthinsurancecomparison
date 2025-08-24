import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Book, ArrowRight, Users, Heart, Building2, Stethoscope } from 'lucide-react';
import SEO from '../components/SEO';

function GuidesDirectory() {
  const guides = [
    {
      title: "Medical Insurance Guide",
      slug: "medical-insurance",
      description: "Complete guide to medical insurance options in New Zealand",
      icon: Stethoscope,
      category: "Insurance Types"
    },
    {
      title: "Best Health Insurance Guide",
      slug: "best-health-insurance", 
      description: "Expert recommendations for the best health insurance plans",
      icon: Shield,
      category: "Recommendations"
    },
    {
      title: "Hospital Cover Guide",
      slug: "hospital-cover",
      description: "Understanding hospital cover and private healthcare options",
      icon: Building2,
      category: "Coverage Types"
    },
    {
      title: "Specialist Coverage Guide",
      slug: "specialist-coverage",
      description: "Guide to specialist medical coverage and benefits",
      icon: Heart,
      category: "Coverage Types"
    },
    {
      title: "Seniors Health Insurance Guide",
      slug: "seniors",
      description: "Health insurance options for seniors and pre-retirees",
      icon: Users,
      category: "Life Stages"
    },
    {
      title: "Young Professionals Guide",
      slug: "young-professionals",
      description: "Health insurance guide for young professionals starting their careers",
      icon: Users,
      category: "Life Stages"
    }
  ];

  const categories = [...new Set(guides.map(guide => guide.category))];

  return (
    <>
      <SEO
        title="Health Insurance Guides | HealthCompare NZ"
        description="Comprehensive guides to health insurance in New Zealand. Expert advice on choosing the right coverage for your needs."
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Health Insurance Guides",
          "description": "Comprehensive health insurance guides and resources"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Insurance Guides
          </h1>
          <p className="text-xl text-gray-600">
            Expert guides to help you navigate health insurance in New Zealand
          </p>
        </div>

        {/* Guides by Category */}
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides
                .filter(guide => guide.category === category)
                .map(guide => (
                  <Link
                    key={guide.slug}
                    to={`/guides/${guide.slug}`}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 rounded-full p-3 mr-4">
                        <guide.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4">{guide.description}</p>
                    <div className="flex items-center text-blue-600 hover:text-blue-700">
                      <span>Read Guide</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        ))}

        {/* CTA Section */}
        <div className="mt-16 bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Need Personalized Advice?</h2>
          <p className="text-blue-100 mb-6">
            Get expert recommendations based on your specific needs and circumstances
          </p>
          <Link
            to="/quotes"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold"
          >
            Get Personalized Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default GuidesDirectory;