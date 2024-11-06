import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      company: "TechStart Solutions",
      industry: "SaaS",
      challenge: "Needed to optimize their ad spend across multiple channels while scaling their customer acquisition.",
      solution: "Implemented AdverTrack's multi-channel attribution and AI-powered budget optimization.",
      results: [
        "45% increase in ROAS",
        "30% reduction in CAC",
        "2x increase in qualified leads"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "GlobalMart E-commerce",
      industry: "Retail",
      challenge: "Struggled with tracking cross-channel customer journeys and optimizing their marketing mix.",
      solution: "Deployed AdverTrack's e-commerce analytics suite with custom attribution modeling.",
      results: [
        "60% improvement in attribution accuracy",
        "35% increase in conversion rate",
        "₹2.5 Cr additional revenue"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "FinTech Pro",
      industry: "Financial Services",
      challenge: "Needed to improve lead quality while maintaining compliance with financial regulations.",
      solution: "Implemented AdverTrack's compliance-first tracking and lead scoring system.",
      results: [
        "50% improvement in lead quality",
        "40% reduction in non-compliant ad spend",
        "25% increase in conversion rate"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "HealthTech India",
      industry: "Healthcare",
      challenge: "Wanted to scale their digital presence while maintaining HIPAA compliance.",
      solution: "Used AdverTrack's healthcare-specific analytics and privacy-first tracking.",
      results: [
        "100% HIPAA compliance maintained",
        "3x increase in qualified leads",
        "45% reduction in cost per acquisition"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-900 to-cyan-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Customer Success Stories
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text<boltAction type="file" filePath="src/pages/CaseStudiesPage.tsx">-xl md:max-w-3xl">
              See how leading companies are transforming their advertising with AdverTrack
            </p>
          </div>
        </div>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={study.image}
                  alt={study.company}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{study.company}</h3>
                  <span className="px-3 py-1 text-sm text-cyan-600 bg-cyan-100 rounded-full">
                    {study.industry}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Challenge</h4>
                    <p className="mt-1 text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Solution</h4>
                    <p className="mt-1 text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Results</h4>
                    <ul className="mt-2 space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center text-gray-600">
                          <span className="h-2 w-2 bg-cyan-500 rounded-full mr-2"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
                  >
                    Read full case study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-900 to-cyan-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to achieve similar results?</span>
            <span className="block text-cyan-300">Start your success story today.</span>
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

export default CaseStudiesPage;