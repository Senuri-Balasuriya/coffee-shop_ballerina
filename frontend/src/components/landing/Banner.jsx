import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div
            data-aos="fade-right"
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              Special Offer
            </h2>
            <h3 className="text-2xl font-cursive mb-6">
              50% Off on All Coffee
            </h3>
            <p className="text-lg mb-8 text-gray-100">
              Don't miss out on our amazing coffee deals! Get 50% off on all coffee drinks 
              this week. Perfect time to try our new seasonal flavors.
            </p>
            <Link
              to="/shop"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Order Now
            </Link>
          </div>
          <div
            data-aos="fade-left"
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h4 className="text-3xl font-bold text-white mb-4">
                Limited Time
              </h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">07</div>
                  <div className="text-sm text-gray-200">Days</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">24</div>
                  <div className="text-sm text-gray-200">Hours</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white">59</div>
                  <div className="text-sm text-gray-200">Minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
