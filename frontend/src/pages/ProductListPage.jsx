import { useState } from 'react';

const products = [
  { name: 'Espresso', description: 'Rich and bold espresso shot.', price: '$2.50', image: '/coffee2.png', category: 'Coffee', rating: 4.8 },
  { name: 'Cappuccino', description: 'Espresso with steamed milk and foam.', price: '$3.50', image: '/coffee-logo.png', category: 'Coffee', rating: 4.7 },
  { name: 'Latte', description: 'Smooth blend of espresso and milk.', price: '$3.75', image: '/coffee-white.png', category: 'Coffee', rating: 4.6 },
  { name: 'Mocha', description: 'Espresso, chocolate, and steamed milk.', price: '$4.00', image: '/coffee-footer.jpg', category: 'Coffee', rating: 4.9 },
  { name: 'Americano', description: 'Espresso with hot water.', price: '$2.75', image: '/coffee-beans-bg.png', category: 'Coffee', rating: 4.5 },
  { name: 'Cold Brew', description: 'Slow-steeped cold coffee.', price: '$3.25', image: '/coffee-texture.jpg', category: 'Coffee', rating: 4.7 },
  { name: 'Green Tea', description: 'Refreshing green tea.', price: '$2.00', image: '/vite.svg', category: 'Tea', rating: 4.3 },
  { name: 'Black Tea', description: 'Classic black tea.', price: '$2.00', image: '/vite.svg', category: 'Tea', rating: 4.2 },
  { name: 'Croissant', description: 'Buttery French pastry.', price: '$2.50', image: '/coffee-footer.jpg', category: 'Pastries', rating: 4.8 },
  { name: 'Muffin', description: 'Freshly baked muffin.', price: '$2.25', image: '/coffee-white.png', category: 'Pastries', rating: 4.6 },
];

const categories = ['All', 'Coffee', 'Tea', 'Pastries'];

export default function ProductListPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brandDark mb-6">Our Menu</h1>
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border rounded-lg w-full md:w-1/3"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="p-2 border rounded-lg w-full md:w-1/4"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500">No products found.</div>
        ) : (
          filteredProducts.map((product, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mb-4 rounded-full" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2 text-center">{product.description}</p>
              <span className="text-brandDark font-bold mb-2">{product.price}</span>
              <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-1">★</span>
                <span className="text-gray-700 font-medium">{product.rating}</span>
              </div>
              <a href="/cart">
                <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg hover:scale-105 transition-transform">Add to Cart</button>
              </a>
            </div>
          ))
        )}
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-brandDark text-white px-6 py-2 rounded-lg">Load More</button>
      </div>
    </div>
  );
}
