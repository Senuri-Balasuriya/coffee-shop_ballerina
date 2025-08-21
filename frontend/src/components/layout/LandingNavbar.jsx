import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useAuth } from '@/hooks/useAuth';

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/coffee_logo.png" alt="Coffee Shop" className="h-10 w-10" />
            <span className="text-2xl font-cursive text-primary font-bold">
              Coffee Shop
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
              Menu
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/shop" className="text-gray-700 hover:text-primary transition-colors">
                  <FaShoppingCart className="h-5 w-5" />
                </Link>
                <Link to="/profile" className="text-gray-700 hover:text-primary transition-colors">
                  <FaUser className="h-5 w-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full hover:scale-105 transition-transform"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="border-t pt-4">
                {isAuthenticated ? (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/shop"
                      className="text-gray-700 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <FaShoppingCart className="h-4 w-4" />
                        <span>Cart</span>
                      </div>
                    </Link>
                    <Link
                      to="/profile"
                      className="text-gray-700 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-2">
                        <FaUser className="h-4 w-4" />
                        <span>Profile</span>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <Link
                      to="/login"
                      className="text-gray-700 hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LandingNavbar;
