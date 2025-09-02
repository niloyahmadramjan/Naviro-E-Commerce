'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { FaChevronLeft, FaChevronRight, FaRegHeart } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'
import { IoIosArrowRoundForward } from 'react-icons/io'

const products = [
  {
    id: 1,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-50-346x310.jpg',
    title: 'Fresh-Cut Organic Broccoli',
    price: 2.99,
    oldPrice: 3.79,
    stock: true,
    discount: '21%',
    description:
      'Crisp, organic broccoli florets, ready for cooking or snacking.',
  },
  {
    id: 2,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-44-346x310.jpg',
    title: 'Natural Almond Milk',
    price: 3.49,
    oldPrice: 4.19,
    stock: true,
    discount: '17%',
    description: 'Unsweetened almond milk, a great dairy-free alternative.',
  },
  {
    id: 3,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-48-346x310.jpg',
    title: 'Boneless Skinless Chicken Breast',
    price: 8.99,
    oldPrice: 10.99,
    stock: false,
    discount: '18%',
    description: 'Premium, lean chicken breast, ideal for a variety of meals.',
  },
  {
    id: 4,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-49-346x310.jpg',
    title: 'Organic Cage-Free Brown Eggs (Dozen)',
    price: 4.99,
    oldPrice: 5.99,
    stock: true,
    discount: '17%',
    recommended: true,
    description: 'Farm-fresh, large brown eggs from cage-free hens.',
  },
  {
    id: 5,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-47-346x310.jpg',
    title: 'Spaghetti Sauce with Basil & Garlic',
    price: 2.79,
    oldPrice: 3.49,
    stock: true,
    discount: '20%',
    description: 'A rich and flavorful sauce with a hint of basil and garlic.',
  },
  {
    id: 6,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-45-346x310.jpg',
    title: 'Whole Grain Bread',
    price: 3.29,
    oldPrice: 3.99,
    stock: false,
    discount: '18%',
    description: 'Soft and wholesome bread, baked with whole grains.',
  },
  {
    id: 7,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-46-346x310.jpg',
    title: 'Frozen Blackberries (12 oz)',
    price: 4.49,
    oldPrice: 5.29,
    stock: true,
    discount: '15%',
    description: 'Sweet, frozen blackberries, perfect for smoothies.',
  },
  {
    id: 8,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-43-346x310.jpg',
    title: 'Ground Beef (85% Lean)',
    price: 6.99,
    oldPrice: 8.79,
    stock: true,
    discount: '20%',
    description:
      'Fresh and flavorful ground beef, great for burgers and tacos.',
  },
  {
    id: 9,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-42-346x310.jpg',
    title: 'Unsalted Butter Sticks (4-pack)',
    price: 3.89,
    oldPrice: 4.69,
    stock: true,
    discount: '17%',
    recommended: true,
    description: 'High-quality unsalted butter, a baking essential.',
  },
  {
    id: 10,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-41-346x310.jpg',
    title: 'Honeycrisp Apples (each)',
    price: 1.29,
    oldPrice: 1.79,
    stock: true,
    discount: '28%',
    description: 'Crisp and juicy Honeycrisp apples with a sweet taste.',
  },
  {
    id: 11,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-40-346x310.jpg',
    title: 'Whole Wheat Flour',
    price: 4.19,
    oldPrice: 5.09,
    stock: true,
    discount: '18%',
    description: 'Finely ground whole wheat flour for healthier baking.',
  },
  {
    id: 12,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-39-346x310.jpg',
    title: 'Plain Greek Yogurt (32 oz)',
    price: 5.49,
    oldPrice: 6.79,
    stock: false,
    discount: '19%',
    description: 'Creamy and protein-rich Greek yogurt, perfect for parfaits.',
  },
  {
    id: 13,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-38-346x310.jpg',
    title: 'Frozen Pizza (Pepperoni)',
    price: 7.99,
    oldPrice: 9.99,
    stock: true,
    discount: '20%',
    recommended: true,
    description: 'A delicious frozen pizza topped with savory pepperoni.',
  },
  {
    id: 14,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-37-346x310.jpg',
    title: 'Family Size Cereal (Honey Oats)',
    price: 5.99,
    oldPrice: 7.49,
    stock: true,
    discount: '20%',
    description: 'Sweetened whole grain cereal with a touch of honey.',
  },
  {
    id: 15,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-36-346x310.jpg',
    title: 'Sparkling Water (Assorted Flavors)',
    price: 5.49,
    oldPrice: 6.99,
    stock: true,
    discount: '21%',
    description:
      'A refreshing pack of sparkling water in various fruit flavors.',
  },
  {
    id: 16,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-35-346x310.jpg',
    title: 'Sriracha Hot Chili Sauce',
    price: 4.29,
    oldPrice: 5.09,
    stock: true,
    discount: '16%',
    description: 'A spicy and tangy sauce to add heat to any dish.',
  },
  {
    id: 17,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-34-346x310.jpg',
    title: 'Deli Sliced Smoked Turkey',
    price: 6.49,
    oldPrice: 7.99,
    stock: true,
    discount: '19%',
    description: 'Thinly sliced, smoked turkey, perfect for sandwiches.',
  },
  {
    id: 18,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-33-346x310.jpg',
    title: 'Cinnamon Raisin Bagels',
    price: 3.99,
    oldPrice: 4.99,
    stock: true,
    discount: '20%',
    description: 'Soft and chewy bagels with cinnamon and plump raisins.',
  },
  {
    id: 19,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-32-346x310.jpg',
    title: 'Organic Baby Carrots',
    price: 1.99,
    oldPrice: 2.49,
    stock: false,
    discount: '20%',
    recommended: true,
    description: 'Sweet and tender baby carrots, great for a healthy snack.',
  },
  {
    id: 20,
    img: 'https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-31-346x310.jpg',
    title: 'Greek Olives (Kalamata)',
    price: 5.29,
    oldPrice: 6.19,
    stock: true,
    discount: '14%',
    description: 'Authentic Kalamata olives, rich in flavor.',
  },
]

export default function BestSellers() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleWishlist = (product) => {
    toast.success(`${product.title} added to wishlist!`, {
      position: 'bottom-left',
    })
  }

  return (
    <div className="w-full py-8 overflow-hidden">
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
