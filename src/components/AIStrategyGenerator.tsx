import React, { useState } from 'react';
import { Send, Loader, AlertCircle } from 'lucide-react';
import StrategyResult from './StrategyResult';
import PromptForm from './PromptForm';
import { Strategy } from '../types/strategy';

const AIStrategyGenerator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [strategy, setStrategy] = useState<Strategy | null>(null);

  const generateStrategy = async (formData: {
    industry: string;
    target: string;
    budget: string;
    goals: string;
    timeline: string;
  }) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Simulate API call to AI service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock AI response
      const mockStrategy: Strategy = {
        summary: `Comprehensive ${formData.timeline} marketing strategy for ${formData.industry} targeting ${formData.target}`,
        recommendations: [
          {
            title: 'Social Media Campaign',
            description: `Launch targeted ads on platforms where ${formData.target} are most active`,
            budget: `${Math.floor(parseInt(formData.budget) * 0.4)}`,
            timeline: '1-2 months'
          },
          {
            title: 'Content Marketing',
            description: 'Create engaging blog posts and videos showcasing product benefits',
            budget: `${Math.floor(parseInt(formData.budget) * 0.3)}`,
            timeline: '2-3 months'
          },
          {
            title: 'Influencer Partnerships',
            description: 'Collaborate with industry influencers for authentic promotion',
            budget: `${Math.floor(parseInt(formData.budget) * 0.3)}`,
            timeline: '1-3 months'
          }
        ],
        kpis: [
          'Increase social media engagement by 50%',
          'Achieve 25% increase in website traffic',
          'Generate 30% more qualified leads',
          'Improve conversion rate by 15%'
        ],
        timeline: formData.timeline,
        totalBudget: formData.budget
      };

      setStrategy(mockStrategy);
    } catch (err) {
      setError('Failed to generate strategy. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Strategy Generator</h2>
      
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-md p-4 flex items-center">
          <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      {!strategy ? (
        <PromptForm onSubmit={generateStrategy} isLoading={isLoading} />
      ) : (
        <div>
          <StrategyResult strategy={strategy} />
          <button
            onClick={() => setStrategy(null)}
            className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Generate Another Strategy
          </button>
        </div>
      )}
    </div>
  );
};

export default AIStrategyGenerator;