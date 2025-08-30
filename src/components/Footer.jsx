'use client'

import {
  FaApple,
  FaGooglePlay,
  FaPhoneAlt,
  FaClock,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCookieBite,
} from 'react-icons/fa'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { AiOutlineFileProtect } from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="text-gray-800">
      {/* 5 Columns */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        {/* Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">
            FRUIT & VEGETABLES
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              'Fresh Vegetables',
              'Herbs & Seasonings',
              'Fresh Fruits',
              'Cuts & Sprouts',
              'Exotic Fruits & Veggies',
              'Packaged Produce',
              'Party Trays',
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:underline transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">
            Breakfast & Dairy
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              'Milk & Flavoured Milk',
              'Butter and Margarine',
              'Cheese',
              'Eggs Substitutes',
              'Honey',
              'Marmalades',
              'Sour Cream and Dips',
              'Yogurt',
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:underline transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">
            Meat & Seafood
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              'Breakfast Sausage',
              'Dinner Sausage',
              'Beef',
              'Chicken',
              'Sliced Deli Meat',
              'Shrimp',
              'Wild Caught Fillets',
              'Crab and Shellfish',
              'Farm Raised Fillets',
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:underline transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">Beverages</h3>
          <ul className="space-y-2 text-sm">
            {[
              'Water',
              'Sparkling Water',
              'Soda & Pop',
              'Coffee',
              'Milk & Plant-Based Milk',
              'Tea & Kombucha',
              'Drink Boxes & Pouches',
              'Craft Beer',
              'Wine',
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:underline transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-black">
            Breads & Bakery
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              'Milk & Flavoured Milk',
              'Butter and Margarine',
              'Cheese',
              'Eggs Substitutes',
              'Honey',
              'Marmalades',
              'Sour Cream and Dips',
              'Yogurt',
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 hover:underline transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact + App Download */}
      <div className="bg-black-50 shadow-inner py-8 bg-gray-300">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className='flex gap-5 justify-center items-center'>
            <h4 className="text-xl font-bold flex items-center gap-2 text-black">
              <FaPhoneAlt className="text-blue-600" /> 8 800 555-55
            </h4>
            <p className="text-gray-600 flex items-center gap-2">
              <FaClock className="text-blue-600" /> Working 8:00 - 22:00
            </p>
            <p className="mt-2 text-sm text-gray-700">
              Download App on Mobile :
            </p>
            <p className="text-sm text-blue-600 font-medium">
              15% discount on your first purchase
            </p>
          </div>

          {/* App Buttons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-800 transition"
            >
              <FaGooglePlay className="text-lg" /> Google Play
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-800 transition"
            >
              <FaApple className="text-lg" /> App Store
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-300 text-sm py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-center md:text-left">
            © 2025 <span className="text-white font-semibold">NUVIRO</span>. All
            rights reserved. Powered by{' '}
            <span className="text-green-500 font-medium">NAR Developer</span>.
          </p>

          {/* Links */}
          <div className="flex flex-wrap gap-6 text-gray-400 justify-center">
            <a
              href="#"
              className="flex items-center gap-1 hover:text-green-500 hover:underline transition"
            >
              <MdOutlinePrivacyTip /> Privacy Policy
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-green-500 hover:underline transition"
            >
              <AiOutlineFileProtect /> Terms
            </a>
            <a
              href="#"
              className="flex items-center gap-1 hover:text-green-500 hover:underline transition"
            >
              <FaCookieBite /> Cookie
            </a>
          </div>

          {/* Payment Logos */}
          <div className="flex gap-4 text-2xl">
            <FaCcVisa className="hover:text-green-500 transition" />
            <FaCcMastercard className="hover:text-green-500 transition" />
            <FaCcPaypal className="hover:text-green-500 transition" />
          </div>
        </div>
      </div>
    </footer>
  )
}
