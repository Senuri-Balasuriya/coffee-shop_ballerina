
export default function ProceedToCheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brandDark mb-6">Checkout</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your name" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your email" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Delivery Address</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your address" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Payment Method</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg">
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Cash on Delivery</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:scale-105 transition-transform font-semibold">Place Order</button>
        </form>
      </div>
    </div>
  );
}
