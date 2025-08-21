import { useState } from 'react';

const initialCart = [
  { name: 'Espresso', price: 2.5, image: '/coffee2.png', quantity: 1 },
  { name: 'Latte', price: 3.75, image: '/coffee-white.png', quantity: 2 },
];

export default function AddToCartPage() {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (idx: number, qty: number) => {
    setCart(cart =>
      cart.map((item, i) =>
        i === idx ? { ...item, quantity: qty > 0 ? qty : 1 } : item
      )
    );
  };

  const removeItem = (idx: number) => {
    setCart(cart => cart.filter((_, i) => i !== idx));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brandDark mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-600">Your cart is empty.</div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full mb-6">
            <thead>
              <tr>
                <th className="py-2">Product</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Subtotal</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 flex items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-3" />
                    <span>{item.name}</span>
                  </td>
                  <td className="py-2">${item.price.toFixed(2)}</td>
                  <td className="py-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e => updateQuantity(idx, parseInt(e.target.value))}
                      className="w-16 p-1 border rounded-lg text-center"
                    />
                  </td>
                  <td className="py-2">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="py-2">
                    <button
                      className="bg-secondary text-white px-3 py-1 rounded"
                      onClick={() => removeItem(idx)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total: ${total.toFixed(2)}</span>
            <span className="text-gray-600">Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
          </div>
          <div className="flex space-x-4">
            <a href="/checkout">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg">Proceed to Checkout</button>
            </a>
            <a href="/products">
              <button className="bg-brandDark text-white px-6 py-2 rounded-lg">Continue Shopping</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
