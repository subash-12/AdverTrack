import React from 'react';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '₹4,999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 advertising campaigns',
        'Basic analytics dashboard',
        'Email support',
        'Daily data updates',
        'Basic reporting',
        'Single user account'
      ],
      cta: 'Start free trial'
    },
    {
      name: 'Professional',
      price: '₹14,999',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 advertising campaigns',
        'Advanced analytics dashboard',
        'Priority email & chat support',
        'Real-time data updates',
        'Custom reporting',
        'Up to 5 user accounts',
        'API access',
        'Campaign automation'
      ],
      cta: 'Start free trial',
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited advertising campaigns',
        'Enterprise analytics suite',
        '24/7 dedicated support',
        'Real-time data updates',
        'Advanced custom reporting',
        'Unlimited user accounts',
        'Full API access',
        'Advanced automation',
        'Custom integrations',
        'SLA guarantee'
      ],
      cta: 'Contact sales'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-900 to-cyan-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg shadow-xl ${
                tier.featured ? 'ring-2 ring-cyan-500 transform scale-105' : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
                  <span className="inline-flex rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white">
                    Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>

                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-cyan-500 shrink-0" />
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <a
                    href={tier.cta === 'Contact sales' ? '/contact' : '/signup'}
                    className={`block w-full rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors duration-200 ${
                      tier.featured
                        ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                        : 'bg-purple-900 text-white hover:bg-purple-800'
                    }`}
                  >
                    {tier.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {[
            {
              question: "What's included in the free trial?",
              answer: "All features of the Professional plan are available during your 14-day free trial. No credit card required."
            },
            {
              question: "Can I change plans later?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
            },
            {
              question: "Do you offer custom solutions?",
              answer: "Yes, our Enterprise plan can be customized to meet your specific needs. Contact our sales team to learn more."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, UPI, and bank transfers for Indian businesses."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
              <p className="mt-2 text-gray-500">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;