'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosArrowForward, IoIosArrowRoundForward } from 'react-icons/io'

export default function BreakfastFood() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Dummy Products Data
  const products = [
    {
      id: 1,
      img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
      title: 'Chobani Complete Vanilla Greek Yogurt',
      price: 4.49,
      oldPrice: 5.49,
      stock: false,
      discount: '19%',
      recommended: true,
      description: 'Delicious vanilla Greek yogurt with complete nutrition.',
    },
    {
      id: 2,
      img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
      title: 'Encore Seafoods Stuffed Alaskan Salmon',
      price: 27.49,
      oldPrice: 32.49,
      stock: false,
      discount: '16%',
      description: 'Fresh stuffed Alaskan Salmon ready to cook.',
    },
    {
      id: 3,
      img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
      title: 'USDA Choice Angus Beef Stew Meat',
      price: 49.99,
      oldPrice: 79.99,
      stock: true,
      discount: '38%',
      description: 'Tender Angus beef stew meat for perfect meals.',
    },
    {
      id: 4,
      img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
      title: 'USDA Choice Angus Beef Stew Meat',
      price: 49.99,
      oldPrice: 79.99,
      stock: true,
      discount: '38%',
      description: 'Tender Angus beef stew meat for perfect meals.',
    },
    {
      id: 5234,
      img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
      title: 'USDA Choice Angus Beef Stew Meat',
      price: 49.99,
      oldPrice: 79.99,
      stock: true,
      discount: '38%',
      description: 'Tender Angus beef stew meat for perfect meals.',
    },
    {
      id: 54,
      img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
      title: 'USDA Choice Angus Beef Stew Meat',
      price: 49.99,
      oldPrice: 79.99,
      stock: true,
      discount: '38%',
      description: 'Tender Angus beef stew meat for perfect meals.',
    },
    {
      id: 524,
      img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
      title: 'USDA Choice Angus Beef Stew Meat',
      price: 49.99,
      oldPrice: 79.99,
      stock: true,
      discount: '38%',
      description: 'Tender Angus beef stew meat for perfect meals.',
    },
    {
      id: 35,
      img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
      title: 'USDA Choice Angus Beef Stew Meat',
      price: 49.99,
      oldPrice: 79.99,
      stock: true,
      discount: '38%',
      description: 'Tender Angus beef stew meat for perfect meals.',
    },
  ]

  // Wishlist Click Handler
  const handleWishlist = (product) => {
    console.log('Wishlist clicked:', product)
    // TODO: Save wishlist to MongoDB
  }

  return (
    <section className="p-4 md:p-8 border border-gray-200 my-10">
      {/* ===================== Title Section ===================== */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl md:text-2xl text-black uppercase font-bold">
            Breakfast & Dairy
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            The freshest greengrocer products are waiting for you
          </p>
        </div>
        <button className="text-sm border border-gray-300 px-4 py-2 flex gap-2 items-center rounded-full text-gray-400 hover:text-black transition cursor-pointer">
          View All <IoIosArrowRoundForward size={20} />
        </button>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* ===================== Left Banner ===================== */}
        <div className="col-span-12 lg:col-span-4 flex flex-col">
          <div
            className="h-64 md:h-80 w-full bg-center bg-cover rounded-md overflow-hidden"
            style={{
              backgroundImage:
                'url(https://klbtheme.com/bacola/wp-content/uploads/2021/08/category-banner-1.jpg)',
            }}
          >
            <div className="relative p-6 md:p-10">
              <h3 className="text-lg md:text-xl text-gray-600">
                Weekly Discount on
              </h3>
              <h2 className="text-xl md:text-2xl text-black font-semibold pb-2">
                Breakfast and Dairy
              </h2>
              <p className="text-sm md:text-md text-gray-700 mb-3">
                Bacola Weekend Discount
              </p>
              <button className="bg-violet-400 cursor-pointer text-black py-2 px-5 hover:text-white hover:bg-violet-700 rounded-full transition">
                View All
              </button>
            </div>
          </div>

          {/* Dairy & Eggs section */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <div>
              <h2 className="text-xl font-bold mb-5 text-gray-800">
                Dairy & Eggs
              </h2>

              {/* Category Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/butter-and-margarine"
                  className="text-gray-700 hover:text-violet-600 transition"
                >
                  Butter and Margarine
                </Link>
                <Link
                  href="/cheese"
                  className="text-gray-700 hover:text-violet-600 transition"
                >
                  Cheese
                </Link>
                <Link
                  href="/eggs-substitutes"
                  className="text-gray-700 hover:text-violet-600 transition"
                >
                  Eggs Substitutes
                </Link>
                <Link
                  href="/honey"
                  className="text-gray-700 hover:text-violet-600 transition"
                >
                  Honey
                </Link>
                <Link
                  href="/marmalades"
                  className="text-gray-700 hover:text-violet-600 transition"
                >
                  Marmalades
                </Link>
                <Link
                  href="/milk-and-flavoured-milk"
                  className="text-gray-700 hover:text-violet-600 transition"
                >
                  Milk & Flavoured Milk
                </Link>
                <Link
                  href="/sour-cream-and-dips"
                  className="text-gray-700 hover:text-violet-600 transition"
                >
                  Sour Cream and Dips
                </Link>
                <Link
                  href="/yogurt"
                  className="text-gray-700 hover:text-violet-600 transition"
                >
                  Yogurt
                </Link>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-6">
              <Link
                href="/dairy-and-eggs"
                className="flex items-center gap-2 text-violet-600 hover:text-violet-800 font-semibold transition"
              >
                Shop All Dairy & Eggs
                <IoIosArrowForward size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* ===================== Products Grid ===================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 col-span-12 lg:col-span-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col h-full border border-gray-200 p-4 relative bg-white rounded-md hover:shadow-lg transition"
            >
              {/* Discount & Recommended Tags */}
              {product.discount && (
                <span className="absolute top-2 left-2 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}
              {product.recommended && (
                <span className="absolute top-2 right-2 bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded">
                  RECOMMENDED
                </span>
              )}

              {/* Hover Buttons (Wishlist + Quick View) */}
              <div className="absolute top-2 lg:right-2 right-6 flex flex-col gap-2 transform translate-x-5 opacity-100 lg:opacity-0 transition-all duration-300 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
                <button
                  onClick={() => handleWishlist(product)}
                  className="p-2 bg-white shadow-md rounded-full hover:bg-gray-400 cursor-pointer"
                >
                  <FaRegHeart size={16} className="text-gray-600" />
                </button>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="p-2 bg-white shadow-md rounded-full hover:bg-gray-400 cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z"></path>
                  </svg>
                </button>
              </div>

              {/* Product Image */}
              <div className="flex items-center justify-center h-36 md:h-40 ">
                <img
                  src={product.img}
                  alt={product.title}
                  className="max-h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-sm font-semibold line-clamp-2 mb-2 min-h-[36px]">
                  {product.title}
                </h3>
                <div className="mb-2">
                  {product.oldPrice && (
                    <span className="text-gray-400 line-through mr-2 text-sm">
                      ${product.oldPrice}
                    </span>
                  )}
                  <span className="text-red-600 font-bold text-base">
                    ${product.price}
                  </span>
                </div>
                <p
                  className={`text-xs font-semibold mb-3 ${
                    product.stock ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {product.stock ? 'IN STOCK' : 'OUT OF STOCK'}
                </p>

                {/* Add to Cart Button */}
                <div className="mt-auto">
                  <button
                    disabled={!product.stock}
                    className={`w-full py-2 text-sm font-semibold rounded-xl  transition ${
                      product.stock
                        ? 'bg-yellow-400 hover:bg-yellow-500 cursor-pointer text-gray-800'
                        : 'bg-gray-200 cursor-not-allowed text-gray-500'
                    }`}
                  >
                    {product.stock ? 'Add to cart' : 'Read more'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== Product Modal ===================== */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4">
          <div className="bg-white w-full max-w-3xl rounded-xl shadow-lg relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl cursor-pointer"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              {/* Product Image */}
              <div className="flex items-center justify-center">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  className="object-contain max-h-80"
                />
              </div>

              {/* Product Details */}
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  {selectedProduct.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedProduct.description}
                </p>

                <div className="mb-4">
                  {selectedProduct.oldPrice && (
                    <span className="text-gray-400 line-through mr-2">
                      ${selectedProduct.oldPrice}
                    </span>
                  )}
                  <span className="text-red-600 font-bold text-xl">
                    ${selectedProduct.price}
                  </span>
                </div>

                <p
                  className={`text-sm font-semibold mb-4 ${
                    selectedProduct.stock ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {selectedProduct.stock ? 'IN STOCK' : 'OUT OF STOCK'}
                </p>

                <button
                  disabled={!selectedProduct.stock}
                  className={`w-full py-3 text-lg cursor-pointer font-semibold rounded-xl transition ${
                    selectedProduct.stock
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-800'
                      : 'bg-gray-200 cursor-not-allowed text-gray-500'
                  }`}
                >
                  {selectedProduct.stock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
