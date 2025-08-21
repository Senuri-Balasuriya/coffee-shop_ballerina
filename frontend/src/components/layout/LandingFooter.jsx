import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const LandingFooter = () => {
  return (
    <footer className="bg-brandDark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/coffee_logo.png" alt="Coffee Shop" className="h-8 w-8" />
              <span className="text-xl font-cursive text-primary font-bold">
                Coffee Shop
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              We serve the richest coffee in the city. Experience premium coffee with authentic flavors and cozy atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Premium Coffee</li>
              <li className="text-gray-300">Fresh Pastries</li>
              <li className="text-gray-300">Catering</li>
              <li className="text-gray-300">Events</li>
              <li className="text-gray-300">Delivery</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-gray-300 text-sm">
                  123 Coffee Street, Downtown, City
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary" />
                <span className="text-gray-300 text-sm">info@coffeeshop.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Coffee Shop. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-gray-300 hover:text-primary transition-colors text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
