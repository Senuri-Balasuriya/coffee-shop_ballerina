import { Link } from 'react-router-dom';

export default function AppNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/shop" className="flex items-center space-x-2">
            <span className="text-xl font-cursive text-primary font-bold">Coffee Shop</span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/shop" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-primary transition-colors">
              Menu
            </Link>
            <Link to="/orders" className="text-gray-700 hover:text-primary transition-colors">
              Orders
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-primary transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 9M7 13V6a1 1 0 011-1h5a1 1 0 011 1v7" /></svg>
              Cart
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-primary transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9.001 9.001 0 0112 15c2.21 0 4.21.805 5.879 2.146M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
