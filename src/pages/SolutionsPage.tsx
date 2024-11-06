import React from 'react';
import { Target, BarChart, ShoppingBag, Building2, Smartphone, Globe2, Briefcase, Lightbulb } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: <ShoppingBag className="h-6 w-6 text-cyan-600" />,
      title: "E-commerce",
      description: "Optimize your online store's advertising with advanced tracking and conversion optimization.",
      features: [
        "Shopping campaign optimization",
        "Product feed management",
        "Cart abandonment tracking",
        "Cross-channel attribution"
      ]
    },
    {
      icon: <Building2 className="h-6 w-6 text-cyan-600" />,
      title: "Enterprise",
      description: "Scale your advertising efforts across multiple brands and markets with comprehensive analytics.",
      features: [
        "Multi-brand management",
        "Global market insights",
        "Team collaboration tools",
        "Custom reporting"
      ]
    },
    {
      icon: <Smartphone className="h-6 w-6 text-cyan-600" />,
      title: "Mobile Apps",
      description: "Track and optimize your mobile app advertising campaigns for better user acquisition.",
      features: [
        "App install tracking",
        "User engagement analytics",
        "In-app event tracking",
        "Attribution modeling"
      ]
    },
    {
      icon: <Globe2 className="h-6 w-6 text-cyan-600" />,
      title: "Digital Agencies",
      description: "Manage multiple client campaigns with detailed reporting and white-label solutions.",
      features: [
        "Client management",
        "White-label reporting",
        "Campaign automation",
        "Performance benchmarking"
      ]
    }
  ];

  const industries = [
    {
      icon: <Briefcase className="h-6 w-6 text-purple-600" />,
      title: "B2B",
      description: "Generate high-quality leads and track the entire B2B sales funnel."
    },
    {
      icon: <ShoppingBag className="h-6 w-6 text-purple-600" />,
      title: "Retail",
      description: "Drive in-store and online sales with integrated advertising analytics."
    },
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "Direct-to-Consumer",
      description: "Build direct relationships with customers through targeted advertising."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-purple-600" />,
      title: "SaaS",
      description: "Optimize your customer acquisition and reduce churn with detailed insights."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-cyan-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Solutions for Every Business
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Tailored advertising analytics solutions to help your business grow and succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Comprehensive Solutions
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Choose the solution that best fits your business needs
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="bg-cyan-50 rounded-lg p-3 inline-block">
                    {solution.icon}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {solution.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <BarChart className="h-5 w-5 text-cyan-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Industries We Serve
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Specialized solutions for different industry verticals
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-purple-50 rounded-lg p-3 inline-block">
                  {industry.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {industry.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900 to-cyan-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-cyan-300">Let us help you choose the right solution.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;