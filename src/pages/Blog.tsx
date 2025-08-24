import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 'health-insurance-foreigners-new-zealand',
    title: 'Health Insurance for Foreigners in New Zealand: Complete Guide 2025',
    excerpt: 'Complete guide to health insurance for foreigners living in New Zealand. Learn about eligibility, costs, best providers, and how to get coverage as a non-resident.',
    date: '2025-08-24',
    readTime: '8 min read',
    image: '/main/images/blog-healthcare.jpg',
    category: 'Audience Guide'
  },
  {
    id: 'student-health-insurance-nz',
    title: 'Student Health Insurance NZ: Complete Guide for 2025',
    excerpt: 'Everything students need to know about health insurance in New Zealand. Compare affordable plans, university requirements, and student discounts.',
    date: '2025-08-24',
    readTime: '10 min read',
    image: '/main/images/healthcare-costs.jpg',
    category: 'Audience Guide'
  },
  {
    id: 'health-insurance-companies-comparison',
    title: 'Health Insurance Companies in New Zealand: Complete 2025 Comparison',
    excerpt: 'Detailed comparison of all major health insurance companies in New Zealand. Compare coverage, pricing, customer service and find the best provider.',
    date: '2025-08-24',
    readTime: '12 min read',
    image: '/main/images/medical-checkup.jpg',
    category: 'Comparison'
  },
  {
    id: 'hospital-cover-insurance-nz',
    title: 'Hospital Cover Insurance NZ: Complete Guide to Private Hospital Plans 2025',
    excerpt: 'Everything you need to know about hospital cover insurance in New Zealand. Compare private hospital plans, costs, benefits, and find the best coverage.',
    date: '2025-08-24',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&h=400',
    category: 'Insurance Guide'
  },
  {
    id: 'understanding-health-insurance',
    title: 'Understanding Health Insurance in New Zealand: A Complete Guide',
    excerpt: 'Navigate the complexities of health insurance in New Zealand with our comprehensive guide covering everything from basic terms to advanced coverage options.',
    date: '2025-02-15',
    readTime: '8 min read',
    image: '/main/images/family-healthcare.jpg',
    category: 'Insurance Guide'
  },
  {
    id: 'comparing-providers',
    title: 'Top Health Insurance Providers in NZ: 2025 Comparison',
    excerpt: "An in-depth comparison of New Zealand's leading health insurance providers, including coverage options, prices, and customer satisfaction ratings.",
    date: '2025-02-10',
    readTime: '10 min read',
    image: '/main/images/medical-checkup.jpg',
    category: 'Comparison'
  },
  {
    id: 'save-on-premiums',
    title: '10 Ways to Save on Health Insurance Premiums',
    excerpt: 'Discover practical tips and strategies to reduce your health insurance premiums while maintaining comprehensive coverage.',
    date: '2025-02-05',
    readTime: '6 min read',
    image: '/main/images/savings-piggybank.jpg',
    category: 'Tips & Advice'
  },
  {
    id: 'mental-health-coverage',
    title: 'Mental Health Coverage in NZ Health Insurance Plans',
    excerpt: 'Learn about mental health coverage options in New Zealand health insurance plans and how to choose the right coverage for your needs.',
    date: '2025-01-30',
    readTime: '7 min read',
    image: '/main/images/business-meeting.jpg',
    category: 'Coverage'
  }
];

function Blog() {
  return (
    <>
      <SEO
        title="Health Insurance Blog & Resources | HealthCompare NZ"
        description="Expert insights on health insurance in New Zealand. Read our latest articles on coverage options, saving money on premiums, and insurance tips."
        canonicalUrl="https://healthinsurancecomparison.co.nz/blog"
        keywords={[
          'health insurance blog',
          'health insurance articles nz',
          'health insurance tips',
          'health insurance guides new zealand'
        ]}
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "HealthCompare NZ Blog",
          "description": "Health Insurance Insights and Resources",
          "publisher": {
            "@type": "Organization",
            "name": "HealthCompare NZ"
          }
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Insurance Insights
          </h1>
          <p className="text-xl text-gray-600">
            Expert advice and insights on health insurance in New Zealand
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Link to={`/blog/${blogPosts[0].id}`} className="block">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-3">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl font-bold text-white mb-2">{blogPosts[0].title}</h2>
                <div className="flex items-center text-white/80 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{new Date(blogPosts[0].date).toLocaleDateString('en-NZ')}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString('en-NZ')}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-600 rounded-lg shadow-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6">
            Get the latest health insurance insights delivered to your inbox
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 flex items-center"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Blog;