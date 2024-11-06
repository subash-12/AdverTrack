import React from 'react';
import { BarChart2, Shield, Zap, Users, Globe, PieChart, TrendingUp, MessageSquare } from 'lucide-react';

const PlatformPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart2 className="h-6 w-6 text-cyan-600" />,
      title: "Advanced Analytics",
      description: "Get deep insights into your advertising performance with real-time analytics and customizable dashboards."
    },
    {
      icon: <Shield className="h-6 w-6 text-cyan-600" />,
      title: "Data Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance with global data protection regulations."
    },
    {
      icon: <Zap className="h-6 w-6 text-cyan-600" />,
      title: "Fast Integration",
      description: "Quick and easy integration with major advertising platforms and marketing tools."
    },
    {
      icon: <Users className="h-6 w-6 text-cyan-600" />,
      title: "Audience Insights",
      description: "Understand your audience better with detailed demographic and behavioral analysis."
    },
    {
      icon: <Globe className="h-6 w-6 text-cyan-600" />,
      title: "Multi-Channel Support",
      description: "Track and optimize campaigns across all major digital advertising platforms."
    },
    {
      icon: <PieChart className="h-6 w-6 text-cyan-600" />,
      title: "Budget Optimization",
      description: "AI-powered budget allocation recommendations for maximum ROI."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-cyan-600" />,
      title: "Performance Tracking",
      description: "Monitor KPIs and track campaign performance in real-time."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-cyan-600" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support and dedicated account management."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-cyan-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              The Most Advanced Ad Analytics Platform
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Transform your advertising strategy with real-time insights, AI-powered recommendations, and comprehensive analytics.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything You Need to Succeed
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Powerful features designed to help you track, analyze, and optimize your advertising campaigns.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-cyan-50 rounded-lg p-3 inline-block">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
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
            <span className="block text-cyan-300">Start your free trial today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/signup"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-600"
              >
                Get started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-cyan-600 bg-white hover:bg-cyan-50"
              >
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformPage;