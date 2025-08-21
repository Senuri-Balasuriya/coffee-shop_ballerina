import React from 'react';


const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-coffee-texture">
      <h1 className="text-4xl font-bold mb-4 text-coffee">Contact Us</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-xl text-center">
        We'd love to hear from you! Fill out the form below or reach us at <a href="mailto:info@coffeeshop.com" className="text-coffee underline">info@coffeeshop.com</a>.
      </p>
      <form className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2 rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded" rows={4} required></textarea>
        </div>
        <button type="submit" className="bg-coffee text-white px-4 py-2 rounded hover:bg-coffee-dark">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
