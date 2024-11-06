import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, ArrowUp, ArrowDown, Activity, DollarSign, BarChart2 } from 'lucide-react';
import AIStrategyGenerator from '../components/AIStrategyGenerator';

// Mock data for charts
const userActivityData = [
  { name: 'Jan', users: 4000, sessions: 2400 },
  { name: 'Feb', users: 3000, sessions: 1398 },
  { name: 'Mar', users: 2000, sessions: 9800 },
  { name: 'Apr', users: 2780, sessions: 3908 },
  { name: 'May', users: 1890, sessions: 4800 },
  { name: 'Jun', users: 2390, sessions: 3800 },
];

const conversionData = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 9800 },
  { name: 'Thu', value: 3908 },
  { name: 'Fri', value: 4800 },
  { name: 'Sat', value: 3800 },
  { name: 'Sun', value: 4300 },
];

const platformData = [
  { name: 'iOS', value: 400 },
  { name: 'Android', value: 300 },
  { name: 'Web', value: 300 },
];

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
];

const StatCard: React.FC<{
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}> = ({ title, value, change, icon }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <div className={`flex items-center mt-2 ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {change >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          <span className="text-sm ml-1">{Math.abs(change)}% vs last month</span>
        </div>
      </div>
      <div className="bg-cyan-100 p-3 rounded-full">
        {icon}
      </div>
    </div>
  </div>
);

const DashboardPage: React.FC = () => {
  const [showAIStrategy, setShowAIStrategy] = useState(false);
  const user = JSON.parse(localStorage.getItem('registeredUser') || '{}');

  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Welcome back, {user.fullName}</h1>
            <p className="text-gray-600 mt-1">Here's what's happening with your campaigns</p>
          </div>
          <button
            onClick={() => setShowAIStrategy(!showAIStrategy)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            {showAIStrategy ? 'Hide AI Strategy Generator' : 'Generate AI Strategy'}
          </button>
        </div>

        {showAIStrategy && (
          <div className="mb-8">
            <AIStrategyGenerator />
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value="24,532"
            change={12}
            icon={<Users className="h-6 w-6 text-cyan-600" />}
          />
          <StatCard
            title="Active Sessions"
            value="1,429"
            change={-8}
            icon={<Activity className="h-6 w-6 text-cyan-600" />}
          />
          <StatCard
            title="Revenue"
            value="$52,325"
            change={23}
            icon={<DollarSign className="h-6 w-6 text-cyan-600" />}
          />
          <StatCard
            title="Conversion Rate"
            value="3.2%"
            change={5}
            icon={<BarChart2 className="h-6 w-6 text-cyan-600" />}
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Activity Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">User Activity</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={userActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="users" stroke="#0891b2" />
                  <Line type="monotone" dataKey="sessions" stroke="#6b21a8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stroke="#0891b2" fill="#0891b2" fillOpacity={0.2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Conversion Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Daily Conversions</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#6b21a8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Platform Distribution */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Platform Distribution</h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#0891b2"
                    dataKey="value"
                    label
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { time: '2 hours ago', event: 'New user registration', details: 'John Doe signed up via Google OAuth' },
                { time: '4 hours ago', event: 'Campaign launched', details: 'Summer Sale 2024 campaign went live' },
                { time: '6 hours ago', event: 'Revenue milestone', details: 'Monthly revenue target exceeded by 25%' },
                { time: '12 hours ago', event: 'System update', details: 'Analytics engine updated to version 2.1.0' },
              ].map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="h-3 w-3 rounded-full bg-cyan-500 mt-2"></div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{activity.event}</p>
                    <p className="text-sm text-gray-500">{activity.details}</p>
                    <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;