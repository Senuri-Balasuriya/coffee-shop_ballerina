
const orders = [
  { id: '1001', date: '2025-08-01', items: ['Espresso', 'Latte'], total: '$6.25', status: 'Delivered' },
  { id: '1002', date: '2025-08-10', items: ['Cappuccino'], total: '$3.50', status: 'Processing' },
];

export default function OrderHistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brandDark mb-6">Order History</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full text-left mb-6">
          <thead>
            <tr>
              <th className="py-2">Order ID</th>
              <th className="py-2">Date</th>
              <th className="py-2">Items</th>
              <th className="py-2">Total</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id} className="border-t">
                <td className="py-2">{order.id}</td>
                <td className="py-2">{order.date}</td>
                <td className="py-2">{order.items.join(', ')}</td>
                <td className="py-2">{order.total}</td>
                <td className="py-2">{order.status}</td>
                <td className="py-2">
                  <a href={`/orders/${order.id}`}>
                    <button className="bg-primary text-white px-3 py-1 rounded mr-2">Details</button>
                  </a>
                  <button className="bg-secondary text-white px-3 py-1 rounded mr-2">Reorder</button>
                  <a href={`/track-order/${order.id}`}>
                    <button className="bg-brandDark text-white px-3 py-1 rounded">Track Order</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex space-x-4">
          <button className="bg-brandDark text-white px-4 py-2 rounded-lg">Filter</button>
          <button className="bg-primary text-white px-4 py-2 rounded-lg">Load More</button>
        </div>
      </div>
    </div>
  );
}
