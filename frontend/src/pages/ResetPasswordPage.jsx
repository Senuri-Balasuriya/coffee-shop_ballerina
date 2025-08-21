
export default function ResetPasswordPage() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-brandDark mb-6 text-center">Reset Password</h1>
      <form className="space-y-4">
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:scale-105 transition-transform"
        >
          Update Password
        </button>
      </form>
      <div className="mt-4 text-center">
        <a href="/login" className="text-primary underline">Back to Login</a>
      </div>
    </div>
  );
}
