import { useParams } from 'react-router-dom';

export default function OrderDetailPage() {
  const { orderId } = useParams();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brandDark mb-6">Order Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-gray-600">Order ID: {orderId}</p>
        <p className="text-gray-600">Order details will be displayed here.</p>
      </div>
    </div>
  );
}
