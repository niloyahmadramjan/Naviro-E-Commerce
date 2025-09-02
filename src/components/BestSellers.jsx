'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight, FaEye, FaRegHeart } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'
import { IoIosArrowRoundForward } from 'react-icons/io'

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
  // ... keep the rest same
]

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleWishlist = (product) => {
    toast.success(`${product.title} added to wishlist!`, {
      position: 'bottom-left',
    })
  }

  return (
    <div className="w-full py-8">
      <Toaster />
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">BEST SELLERS</h2>
         <button className='btn text-sm border border-gray-300  px-4 py-2 flex gap-2 items-center rounded-full text-gray-400 hover:text-black cursor-pointer'>View All <IoIosArrowRoundForward size={25}/></button>
      </div>
      <p className="text-gray-500 mb-6">
        Do not miss the current offers until the end of March.
      </p>

      <div className="relative border border-gray-200">
        {/* Custom Navigation */}
        <div className="absolute -left-5 top-1/2 z-10 cursor-pointer">
          <FaChevronLeft className="swiper-button-prev" />
        </div>
        <div className="absolute -right-5 top-1/2 z-10 cursor-pointer">
          <FaChevronRight className=" swiper-button-next" />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={0}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="group flex flex-col h-full border border-gray-200 p-4 relative bg-white hover:shadow-md transition">
                {/* Discount & Recommended tags */}
                {p.discount && (
                  <span className="absolute top-2 left-2 bg-sky-500 text-white text-xs font-semibold px-2 py-1 rounded">
                    {p.discount}
                  </span>
                )}
                {p.recommended && (
                  <span className="absolute top-2 right-2 bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded">
                    RECOMMENDED
                  </span>
                )}

                {/* Hover Action Buttons */}
                <div
                  className="absolute top-2 right-2 flex flex-col gap-2 
                transform translate-x-5 opacity-0 
                transition-all duration-300 ease-in-out 
                group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <button
                    onClick={() => handleWishlist(p)}
                    className="p-3 bg-white shadow-md rounded-full hover:bg-gray-400 cursor-pointer"
                  >
                    <FaRegHeart className="text-black-500" />
                  </button>
                  <button
                    onClick={() => setSelectedProduct(p)}
                    className="p-3 bg-white shadow-md rounded-full w-10 cursor-pointer hover:bg-gray-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M128 32V0H16C7.163 0 0 7.163 0 16v112h32V54.56L180.64 203.2l22.56-22.56L54.56 32H128zM496 0H384v32h73.44L308.8 180.64l22.56 22.56L480 54.56V128h32V16c0-8.837-7.163-16-16-16zM480 457.44L331.36 308.8l-22.56 22.56L457.44 480H384v32h112c8.837 0 16-7.163 16-16V384h-32v73.44zM180.64 308.64L32 457.44V384H0v112c0 8.837 7.163 16 16 16h112v-32H54.56L203.2 331.36l-22.56-22.72z"></path>
                    </svg>
                  </button>
                </div>

                {/* Product Image */}
                <div className="flex items-center justify-center h-50 mb-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="max-h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-sm font-semibold line-clamp-2 mb-2 min-h-[40px]">
                    {p.title}
                  </h3>

                  <div className="mb-2">
                    {p.oldPrice && (
                      <span className="text-gray-400 line-through mr-2 text-sm">
                        ${p.oldPrice}
                      </span>
                    )}
                    <span className="text-red-600 font-bold text-base">
                      ${p.price}
                    </span>
                  </div>

                  <p
                    className={`text-xs font-semibold mb-3 ${
                      p.stock ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {p.stock ? 'IN STOCK' : 'OUT OF STOCK'}
                  </p>

                  {/* Push button to bottom */}
                  <div className="mt-auto">
                    <button
                      disabled={!p.stock}
                      className={`w-full py-2 text-sm font-semibold rounded-xl transition ${
                        p.stock
                          ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-800'
                          : 'bg-blue-300 cursor-pointer text-gray-700'
                      }`}
                    >
                      {p.stock ? 'Add to cart' : 'Read more'}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedProduct(null)}
            >
              ✕
            </button>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-60 object-contain mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{selectedProduct.title}</h2>
            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
            <div className="flex items-center gap-3 mb-4">
              {selectedProduct.oldPrice && (
                <span className="text-gray-400 line-through">
                  ${selectedProduct.oldPrice}
                </span>
              )}
              <span className="text-red-600 font-bold text-lg">
                ${selectedProduct.price}
              </span>
            </div>
            <button className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 rounded-xl font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
