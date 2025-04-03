import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-accent text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-accent/90 transition duration-200"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
}
