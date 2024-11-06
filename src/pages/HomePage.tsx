import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, BarChart, Shield, Zap, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-purple-700"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Transform Your App Analytics
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get powerful insights and optimize your app's performance with real-time tracking and advanced analytics.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-purple-900 bg-white hover:bg-gray-100 transition duration-150">
                Start Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/platform" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white border-2 border-white hover:bg-white/10 transition duration-150">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full text-white" viewBox="0 0 1440 100" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you track, analyze, and optimize your app's performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <BarChart className="h-8 w-8 text-purple-600" />,
                title: "Real-time Analytics",
                description: "Track user behavior and engagement in real-time"
              },
              {
                icon: <Shield className="h-8 w-8 text-purple-600" />,
                title: "Advanced Security",
                description: "Enterprise-grade security and data protection"
              },
              {
                icon: <Zap className="h-8 w-8 text-purple-600" />,
                title: "Fast Integration",
                description: "Quick and easy setup with any platform"
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "User Insights",
                description: "Deep understanding of your user base"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-purple-100 hover:border-purple-200 transition-colors duration-200">
                <div className="bg-purple-50 rounded-lg p-3 inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-purple-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10M+", label: "Data Points Tracked" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Support Available" },
              { number: "50K+", label: "Active Users" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of companies using AdverTrack to grow their business.
          </p>
          <Link to="/signup" className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition duration-150">
            Start Your Free Trial
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;