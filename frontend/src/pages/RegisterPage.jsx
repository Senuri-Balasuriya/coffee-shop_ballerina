
export default function RegisterPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-brandDark mb-6 text-center">Register</h1>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <div className="flex items-center">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-gray-600 text-sm">I agree to the <a href="/terms" className="text-primary underline">Terms & Conditions</a> and <a href="/privacy" className="text-primary underline">Privacy Policy</a></label>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:scale-105 transition-transform"
        >
          Register
        </button>
      </form>
      <div className="mt-4 text-center">
        <a href="/login" className="text-primary underline">Already have an account? Login</a>
      </div>
    </div>
  );
}
