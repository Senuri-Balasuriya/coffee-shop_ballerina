
export default function AppStore() {
  return (
    <div className="py-16 bg-brandDark text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-right" className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-4">Download Our App</h2>
            <h3 className="text-2xl font-cursive mb-6 text-primary">Get Coffee Delivered</h3>
            <p className="text-lg mb-8 text-gray-300">
              Download our mobile app for the best coffee ordering experience.
              Get exclusive offers, track your orders, and earn rewards with every purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2">
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2">
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          <div data-aos="fade-left" className="text-center">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8">
              <h4 className="text-2xl font-bold mb-4">App Features</h4>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Easy ordering and payment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Real-time order tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Exclusive app-only offers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Loyalty rewards program</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
