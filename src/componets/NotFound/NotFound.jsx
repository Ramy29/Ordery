import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl mb-2">Oops! Page not found</h2>
      <p className="mb-6 text-gray-500">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-800 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  )
}
