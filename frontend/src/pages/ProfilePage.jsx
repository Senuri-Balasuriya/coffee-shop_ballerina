
export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-brandDark mb-6">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <div className="flex items-center space-x-4">
          <img src="/coffee-logo.png" alt="User Avatar" className="w-20 h-20 rounded-full" />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">johndoe@email.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Saved Addresses</h3>
          <ul className="list-disc pl-5 text-gray-600">
            <li>123 Coffee St, Bean City</li>
            <li>456 Latte Ave, Mocha Town</li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-lg">Edit Profile</button>
          <button className="bg-brandDark text-white py-2 px-4 rounded-lg">Change Password</button>
        </div>
        <div>
          <a href="/order-history" className="text-primary underline">View Order History</a>
        </div>
      </div>
    </div>
  );
}
