'use client'
import { useState } from 'react'

export default function SubscribeBanner() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('User Email:', email)
    setEmail('')
  }

  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-violet-700 text-white rounded-2xl overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left Side - Text & Input */}
        <div className="p-8 md:p-14 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
             $20 discount for your first order
          </h2>
          <p className="text-sm md:text-base mb-6 text-gray-200">
            Join our newsletter and get updates on promotions and coupons.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg text-white shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white cursor-pointer text-indigo-700 font-semibold rounded-lg shadow hover:bg-indigo-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div
          className="h-48 md:h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png')",
          }}
        ></div>
      </div>
    </div>
  )
}
