import React from "react";
import { Link } from "react-router-dom"; // or "react-router" depending on your setup
import { FiAlertCircle } from "react-icons/fi";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      <FiAlertCircle className="text-red-600 text-6xl mb-6" />
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
      <p className="mb-6 text-gray-700 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
