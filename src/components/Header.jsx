import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Info, Phone, ShoppingCart, Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ease-in-out ${scrolled ? 'shadow-md py-2' : 'shadow-md py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors duration-300">
              Foodies🍔
            </Link>
            <div className="hidden md:flex items-center ml-6 text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Delhi</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-4">
            {[
              { name: 'Home', icon: Home, to: '/' },
              { name: 'About', icon: Info, to: '/about' },
              { name: 'Contact', icon: Phone, to: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-300"
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Link
              to="/cart"
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="ml-1 hidden sm:inline">Cart</span>
            </Link>
            <button
              className="ml-4 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-4 pb-3 space-y-1 sm:px-3">
          {[
            { name: 'Home', icon: Home, to: '/' },
            { name: 'About', icon: Info, to: '/about' },
            { name: 'Contact', icon: Phone, to: '/contact' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;