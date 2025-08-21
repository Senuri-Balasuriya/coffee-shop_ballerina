import { useParams } from 'react-router-dom';

export default function TrackOrderPage() {
  const { orderId } = useParams();
  // Simulated order status and location
  const status = 'Out for Delivery';
  const location = 'Near Bean City, 2 km away';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brandDark mb-6">Track Your Order</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Order Status</h2>
          <p className="text-gray-700">Order ID: {orderId}</p>
          <p className="text-gray-700">{status}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Current Location</h2>
          <p className="text-gray-700">{location}</p>
        </div>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">[Map Placeholder]</span>
        </div>
      </div>
    </div>
  );
}
