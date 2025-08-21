import React from 'react';

export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-brandDark mb-6 text-center">Login</h1>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:scale-105 transition-transform"
        >
          Login
        </button>
      </form>
    </div>
  );
}
