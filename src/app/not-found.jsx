'use client'

import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] bg-gray-50 text-center px-6">
      <h1 className="text-7xl font-bold text-green-600">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-900">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition shadow"
      >
        <FaHome /> Back to Home
      </Link>
    </div>
  )
}
