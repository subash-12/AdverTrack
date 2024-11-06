import React from 'react';
import { Strategy } from '../types/strategy';
import { Download, TrendingUp, Calendar, DollarSign } from 'lucide-react';

interface StrategyResultProps {
  strategy: Strategy;
}

const StrategyResult: React.FC<StrategyResultProps> = ({ strategy }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-2">Strategy Summary</h3>
        <p>{strategy.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-cyan-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <Calendar className="h-5 w-5 text-cyan-500 mr-2" />
            <h4 className="font-semibold text-gray-900">Timeline</h4>
          </div>
          <p className="text-gray-600">{strategy.timeline}</p>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <DollarSign className="h-5 w-5 text-purple-500 mr-2" />
            <h4 className="font-semibold text-gray-900">Budget</h4>
          </div>
          <p className="text-gray-600">${strategy.totalBudget}</p>
        </div>

        <div className="bg-cyan-50 p-4 rounded-lg">
          <div className="flex items-center mb-2">
            <TrendingUp className="h-5 w-5 text-cyan-500 mr-2" />
            <h4 className="font-semibold text-gray-900">KPIs</h4>
          </div>
          <p className="text-gray-600">{strategy.kpis.length} Key Metrics</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Recommended Actions</h3>
        {strategy.recommendations.map((rec, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900 mb-2">{rec.title}</h4>
            <p className="text-gray-600 mb-2">{rec.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Budget: ${rec.budget}</span>
              <span>Timeline: {rec.timeline}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Performance Indicators</h3>
        <ul className="space-y-2">
          {strategy.kpis.map((kpi, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <span className="h-1.5 w-1.5 bg-cyan-500 rounded-full mr-2"></span>
              {kpi}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => {/* Implement PDF download */}}
        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
      >
        <Download className="h-4 w-4 mr-2" />
        Download Strategy PDF
      </button>
    </div>
  );
};

export default StrategyResult;