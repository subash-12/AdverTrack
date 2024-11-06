import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('registeredUser');
    navigate('/login');
  };

  return (
    <nav className="bg-purple-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="/logo.svg" alt="AdverTrack" />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/platform" className="hover:bg-purple-800 px-3 py-2 rounded-md text-sm font-medium">Platform</Link>
                <Link to="/solutions" className="hover:bg-purple-800 px-3 py-2 rounded-md text-sm font-medium">Solutions</Link>
                <Link to="/pricing" className="hover:bg-purple-800 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
                <Link to="/case-studies" className="hover:bg-purple-800 px-3 py-2 rounded-md text-sm font-medium">Case Studies</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isAuthenticated ? (
                <>
                  <Link to="/dashboard" className="bg-purple-700 hover:bg-purple-600 px-3 py-2 rounded-md text-sm font-medium mr-3">Dashboard</Link>
                  <button
                    onClick={handleLogout}
                    className="bg-cyan-500 hover:bg-cyan-400 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="bg-purple-700 hover:bg-purple-600 px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                  <Link to="/signup" className="ml-3 bg-cyan-500 hover:bg-cyan-400 px-3 py-2 rounded-md text-sm font-medium">Sign Up</Link>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-purple-200 hover:text-white hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-900 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/platform" className="hover:bg-purple-800 block px-3 py-2 rounded-md text-base font-medium">Platform</Link>
            <Link to="/solutions" className="hover:bg-purple-800 block px-3 py-2 rounded-md text-base font-medium">Solutions</Link>
            <Link to="/pricing" className="hover:bg-purple-800 block px-3 py-2 rounded-md text-base font-medium">Pricing</Link>
            <Link to="/case-studies" className="hover:bg-purple-800 block px-3 py-2 rounded-md text-base font-medium">Case Studies</Link>
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="bg-purple-700 hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="bg-cyan-500 hover:bg-cyan-400 w-full text-left px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="bg-purple-700 hover:bg-purple-600 block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link to="/signup" className="bg-cyan-500 hover:bg-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;