'use client'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="w-full  py-8 grid grid-cols-12 gap-6">
      {/* 🔹 Left Card */}
      <div
        className="relative col-span-12 md:col-span-8 w-full h-[300px] md:h-[480px] overflow-hidden bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://klbtheme.com/bacola/wp-content/uploads/2021/05/slider-image-8.jpg')",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r"></div>

        <div className="relative z-10 p-6 md:p-12 text-back max-w-lg">
          <h3 className="text-sm md:text-lg font-semibold mb-2 flex items-center gap-2">
            EXCLUSIVE OFFER
            <span className="px-3 py-1 bg-green-500 rounded-full text-xs md:text-sm text-white">
              -20% OFF
            </span>
          </h3>

          <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-snug">
            Feed your family <br /> the best
          </h1>

          <p className="text-sm md:text-lg mb-4">
            Only this week. Don&apos;t miss...
          </p>

          <p className="mb-6 text-lg md:text-xl">
            from{' '}
            <span className="font-bold text-2xl md:text-4xl text-red-400">
              $3.34
            </span>
          </p>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-white text-black font-medium px-4 md:px-5 py-2 md:py-3 rounded-lg hover:bg-green-500 hover:text-white transition"
          >
            Shop Now <IoIosArrowRoundForward size={22} />
          </Link>
        </div>
      </div>

      {/* 🔹 Right Card */}
      <div className="col-span-12 md:col-span-4  overflow-hidden">
        <img
          className="w-full h-[200px] md:h-[480px] object-cover"
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif"
          alt="Sidebar Banner"
        />
      </div>
    </div>
  )
}
