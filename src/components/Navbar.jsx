'use client'
import { useState } from 'react'
import Link from 'next/link'
import {
  ShoppingCart,
  User,
  Menu,
  Search,
  ChevronDown,
  X,
  Home,
  Layers,
  FileText,
  Phone,
} from 'lucide-react'

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)

  return (
    <div className="w-full border-b text-gray-800 shadow-md">
      {/* 🔹 Top Bar (Desktop only) */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm bg-gray-50 border-b text-gray-700">
        {/* 🔹 Left Links */}
        <div className="flex gap-6">
          <Link className="hover:text-blue-600 transition" href="/about">
            About Us
          </Link>
          <Link className="hover:text-blue-600 transition" href="/profile">
            My Account
          </Link>
          <Link className="hover:text-blue-600 transition" href="/wishlist">
            Wishlist
          </Link>
          <Link className="hover:text-blue-600 transition" href="/track-order">
            Order Tracking
          </Link>
        </div>

        {/* 🔹 Right Info */}
        <div className="flex items-center gap-6">
          <span className="text-gray-500">
            100% Secure delivery without contacting the courier
          </span>
          <span className="text-blue-600 font-medium flex gap-2 items-center">
            <Phone size={18} />
            +0020 500
          </span>

          {/* Language Selector */}
          <select
            className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
            <option value="ar">Arabic</option>
          </select>

          {/* Currency Selector */}
          <select
            className="border border-gray-300 rounded-md px-2 py-1 text-sm bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            defaultValue="bdt"
          >
            <option value="bdt">BDT</option>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
          </select>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="md:hidden text-gray-700"
        >
          <Menu size={26} />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center ">
          <img
            className="hidden md:block w-34 object-center"
            src="/navlogo.png"
            alt=""
          />
          <span className="md:hidden text-2xl font-bold text-black-700">
            Nuviro
          </span>
        </Link>

        {/* 🔎 Search Bar (Desktop/Tab only) */}
        <div className="hidden md:flex flex-1 mx-8">
          <input
            type="text"
            placeholder="Search for products..."
            className="border border-gray-300 w-full px-4 py-2 rounded-l-md focus:outline-none"
          />
          <button className="bg-blue-600 text-white px-4 rounded-r-md">
            <Search size={20} />
          </button>
        </div>

        {/* Account + Cart */}
        <div className="flex items-center gap-6">
          <Link href="/account">
            <User size={24} className="cursor-pointer text-gray-600" />
          </Link>
          <Link href="/cart" className="relative">
            <ShoppingCart size={24} className="text-gray-600" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              2
            </span>
          </Link>
        </div>
      </div>
      {/* 🔹 Bottom Nav (Desktop only) */}
      <div className="hidden md:flex items-center px-8 py-2 bg-gray-100 border-t">
        <div className="flex justify-between items-center w-full">
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-md flex items-center gap-2"
            >
              <Menu size={20} />
              ALL CATEGORIES
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isMegaMenuOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>

            {/* Mega Menu */}
            <div
              className={`absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-500 ease-in z-999 ${
                isMegaMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 grid grid-cols-1 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 hover:text-blue-400">
                    Bakery
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link className="hover:text-blue-400" href="#">
                        Bread
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-400" href="#">
                        Cookies
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-400" href="#">
                        Cakes
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 hover:text-blue-400">
                    Beverages
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link className="hover:text-blue-400" href="#">
                        Tea
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-400" href="#">
                        Coffee
                      </Link>
                    </li>
                    <li>
                      <Link className="hover:text-blue-400" href="#">
                        Juices
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Main Nav Links */}
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <Link href="/shop" className="hover:text-blue-600">
              Shop
            </Link>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Drawer (put this FIRST so it sticks left) */}
          <div
            className={`w-72 bg-white h-full shadow-xl p-6 transform transition-transform duration-500 ease-in-out ${
              isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-bold text-blue-600">Nuviro</span>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-gray-600 hover:text-red-500 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-4 text-gray-700 text-base font-medium">
              <Link
                href="/"
                onClick={() => setIsDrawerOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Home
              </Link>
              <Link
                href="/shop"
                onClick={() => setIsDrawerOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Shop
              </Link>
              <Link
                href="/categories"
                onClick={() => setIsDrawerOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Categories
              </Link>
              <Link
                href="/blog"
                onClick={() => setIsDrawerOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsDrawerOpen(false)}
                className="hover:text-blue-600 transition"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Overlay (click to close) */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setIsDrawerOpen(false)}
          />
        </div>
      )}

      {/* 🔹 Mobile Fixed Bottom Navbar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md flex justify-around items-center py-2 md:hidden z-40">
        <Link href="/" className="flex flex-col items-center text-gray-600">
          <Home size={22} />
          <span className="text-xs">Home</span>
        </Link>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="flex flex-col items-center text-gray-600"
        >
          <Layers size={22} />
          <span className="text-xs">Menu</span>
        </button>
        <Link href="/blog" className="flex flex-col items-center text-gray-600">
          <FileText size={22} />
          <span className="text-xs">Blog</span>
        </Link>
        <Link
          href="/cart"
          className="flex flex-col items-center relative text-gray-600"
        >
          <ShoppingCart size={22} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            2
          </span>
          <span className="text-xs">Cart</span>
        </Link>
      </div>
    </div>
  )
}
