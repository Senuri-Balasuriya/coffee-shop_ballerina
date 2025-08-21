

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-extrabold text-brandDark mb-4">Welcome to Coffee Shop</h1>
          <p className="text-lg text-gray-700 mb-6">Discover the finest coffee blends, fresh pastries, and a cozy atmosphere. Order online and enjoy exclusive offers!</p>
          <a href="/products" className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold shadow hover:scale-105 transition-transform">Browse Menu</a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="/coffee2.png" alt="Coffee Cup" className="w-64 h-64 object-cover rounded-full shadow-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brandDark mb-4 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/coffee-logo.png" alt="Fresh Coffee" className="w-16 h-16 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Freshly Brewed Coffee</h3>
            <p className="text-gray-600 text-center">Enjoy a variety of coffee drinks made from premium beans, brewed to perfection.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/coffee-white.png" alt="Pastries" className="w-16 h-16 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Delicious Pastries</h3>
            <p className="text-gray-600 text-center">Pair your coffee with our selection of fresh pastries and baked goods.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/app_store.png" alt="Online Ordering" className="w-16 h-16 mb-2" />
            <h3 className="text-lg font-semibold mb-2">Easy Online Ordering</h3>
            <p className="text-gray-600 text-center">Order your favorites online and pick up in-store or get them delivered to your door.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-brandDark mb-4 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 italic mb-2">“Best coffee in town! The online ordering is super convenient.”</p>
            <span className="text-brandDark font-semibold">- Alex P.</span>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 italic mb-2">“Love the cozy atmosphere and the pastries are always fresh.”</p>
            <span className="text-brandDark font-semibold">- Jamie L.</span>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-brandDark mb-4">Get Our App</h2>
        <p className="text-gray-700 mb-4">Order on the go and get exclusive rewards. Download now:</p>
        <div className="flex justify-center space-x-4">
          <a href="#"><img src="/app_store.png" alt="App Store" className="w-32 h-10" /></a>
          <a href="#"><img src="/play_store.png" alt="Play Store" className="w-32 h-10" /></a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="text-primary underline mx-2">Terms & Conditions</a>
          <a href="/privacy" className="text-primary underline mx-2">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
