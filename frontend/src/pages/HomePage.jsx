

export default function HomePage() {
  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-between mb-10 md:flex-row">
        <div className="mb-6 md:w-1/2 md:mb-0">
          <h1 className="mb-4 text-4xl font-extrabold text-brandDark">Welcome to Coffee Shop</h1>
          <p className="mb-6 text-lg text-gray-700">Discover the finest coffee blends, fresh pastries, and a cozy atmosphere. Order online and enjoy exclusive offers!</p>
          <a href="/products" className="px-6 py-3 font-semibold text-white transition-transform rounded-lg shadow bg-gradient-to-r from-primary to-secondary hover:scale-105">Browse Menu</a>
        </div>
        <div className="flex justify-center md:w-1/2">
          <img src="/coffee2.png" alt="Coffee Cup" className="object-cover w-64 h-64 rounded-full shadow-lg" />
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold text-center text-brandDark">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img src="/coffee-logo.png" alt="Fresh Coffee" className="w-16 h-16 mb-2" />
            <h3 className="mb-2 text-lg font-semibold">Freshly Brewed Coffee</h3>
            <p className="text-center text-gray-600">Enjoy a variety of coffee drinks made from premium beans, brewed to perfection.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img src="/coffee-white.png" alt="Pastries" className="w-16 h-16 mb-2" />
            <h3 className="mb-2 text-lg font-semibold">Delicious Pastries</h3>
            <p className="text-center text-gray-600">Pair your coffee with our selection of fresh pastries and baked goods.</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
            <img src="/app_store.png" alt="Online Ordering" className="w-16 h-16 mb-2" />
            <h3 className="mb-2 text-lg font-semibold">Easy Online Ordering</h3>
            <p className="text-center text-gray-600">Order your favorites online and pick up in-store or get them delivered to your door.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold text-center text-brandDark">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="mb-2 italic text-gray-700">“Best coffee in town! The online ordering is super convenient.”</p>
            <span className="font-semibold text-brandDark">- Alex P.</span>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="mb-2 italic text-gray-700">“Love the cozy atmosphere and the pastries are always fresh.”</p>
            <span className="font-semibold text-brandDark">- Jamie L.</span>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="mb-10 text-center">
        <h2 className="mb-4 text-2xl font-bold text-brandDark">Get Our App</h2>
        <p className="mb-4 text-gray-700">Order on the go and get exclusive rewards. Download now:</p>
        <div className="flex justify-center space-x-4">
          <a href="#"><img src="/app_store.png" alt="App Store" className="w-32 h-10" /></a>
          <a href="#"><img src="/play_store.png" alt="Play Store" className="w-32 h-10" /></a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="mt-12 text-sm text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
        <div className="mt-2">
          <a href="/terms" className="mx-2 underline text-primary">Terms & Conditions</a>
          <a href="/privacy" className="mx-2 underline text-primary">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
