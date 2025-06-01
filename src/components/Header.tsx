import React, { useState } from 'react';
import { Video, Camera, Shirt, Menu, X, Zap, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-purple-900/80 backdrop-blur-sm border-b border-purple-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SF</span>
            </div>
            <span className="text-white font-bold text-xl">SwapFace</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Video Face Swap</a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors flex items-center space-x-1">
              <span>Clothes Swap</span>
              <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">Hot</span>
            </a>
            <div className="relative group">
              <button className="text-white hover:text-purple-300 transition-colors flex items-center space-x-1">
                <span>AI Tools</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-white hover:text-purple-300 transition-colors">Buy Credits</a>
          </nav>

          {/* User Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <Zap className="w-4 h-4" />
              <span>60 Credits</span>
            </div>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900">
              Sign in/Sign up
            </Button>
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-purple-700/50">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Video Face Swap</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Clothes Swap</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">AI Tools</a>
              <a href="#" className="text-white hover:text-purple-300 transition-colors">Buy Credits</a>
              <div className="flex items-center space-x-2 text-white">
                <Zap className="w-4 h-4" />
                <span>60 Credits</span>
              </div>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-900 w-fit">
                Sign in/Sign up
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;