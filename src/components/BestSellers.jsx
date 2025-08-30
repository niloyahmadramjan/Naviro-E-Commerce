'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

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
  },
  {
    id: 2,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
    title: 'Encore Seafoods Stuffed Alaskan Salmon',
    price: 27.49,
    oldPrice: 32.49,
    stock: false,
    discount: '16%',
  },
  {
    id: 3,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
    title: 'USDA Choice Angus Beef Stew Meat',
    price: 49.99,
    oldPrice: 79.99,
    stock: true,
    discount: '38%',
  },
  {
    id: 4,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
    title: 'All Natural Italian-Style Chicken Meatballs',
    price: 7.25,
    oldPrice: 9.35,
    stock: true,
    discount: '23%',
    recommended: true,
  },
  {
    id: 5,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-346x310.jpg',
    title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
    price: 7.99,
    oldPrice: null,
    stock: true,
  },
]

export default function BestSellers() {
  return (
    <div className="w-full py-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">BEST SELLERS</h2>
        <button className="text-sm text-gray-500 hover:text-gray-800">
          View All →
        </button>
      </div>
      <p className="text-gray-500 mb-6">
        Do not miss the current offers until the end of March.
      </p>

      <div className="relative border border-gray-200">
        {/* Custom Navigation */}
        <div className="absolute -left-5 top-1/2 z-10 cursor-pointer  shadow-md rounded-full p-2">
          <FaChevronLeft className="text-gray-700 swiper-button-prev" />
        </div>
        <div className="absolute -right-5 top-1/2 z-10 cursor-pointer  shadow-md rounded-full p-2">
          <FaChevronRight className="text-gray-700 swiper-button-next" />
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={0}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="flex flex-col h-full border border-gray-200 p-4 relative bg-white hover:shadow-md transition">
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

                {/* Product Image */}
                <div className="flex items-center justify-center h-40 mb-4">
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
                          : 'bg-gray-300 cursor-not-allowed text-gray-500'
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
    </div>
  )
}
