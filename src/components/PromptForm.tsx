import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface PromptFormProps {
  onSubmit: (formData: {
    industry: string;
    target: string;
    budget: string;
    goals: string;
    timeline: string;
  }) => void;
  isLoading: boolean;
}

const PromptForm: React.FC<PromptFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    industry: '',
    target: '',
    budget: '',
    goals: '',
    timeline: '3 months'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700">
          Industry
        </label>
        <input
          type="text"
          name="industry"
          id="industry"
          required
          value={formData.industry}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
          placeholder="e.g., E-commerce, SaaS, Healthcare"
        />
      </div>

      <div>
        <label htmlFor="target" className="block text-sm font-medium text-gray-700">
          Target Audience
        </label>
        <input
          type="text"
          name="target"
          id="target"
          required
          value={formData.target}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
          placeholder="e.g., Young professionals aged 25-35"
        />
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
          Monthly Budget (USD)
        </label>
        <input
          type="number"
          name="budget"
          id="budget"
          required
          min="100"
          value={formData.budget}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
          placeholder="e.g., 5000"
        />
      </div>

      <div>
        <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
          Marketing Goals
        </label>
        <textarea
          name="goals"
          id="goals"
          required
          value={formData.goals}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
          placeholder="e.g., Increase brand awareness, generate leads, boost sales"
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
          Campaign Timeline
        </label>
        <select
          name="timeline"
          id="timeline"
          required
          value={formData.timeline}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
        >
          <option value="1 month">1 month</option>
          <option value="3 months">3 months</option>
          <option value="6 months">6 months</option>
          <option value="12 months">12 months</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-cyan-500 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <span className="animate-spin mr-2">⌛</span>
            Generating Strategy...
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Generate Strategy
          </>
        )}
      </button>
    </form>
  );
};

export default PromptForm;