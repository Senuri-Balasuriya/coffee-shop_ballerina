import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <a
          href="/"
          className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 transition-transform"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
