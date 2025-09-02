'use client'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'

// Fake slider data (later connect MongoDB)
const sliderData = [
  {
    id: 1,
    title: 'Welcome to NUVIRO',
    description:
      'Your smarter shopping journey starts here. Discover exclusive offers and premium experiences.',
    image: 'https://i.ibb.co/NdK49C8p/2448261.jpg',
  },
  {
    id: 2,
    title: 'Fresh Deals Everyday',
    description:
      'Login or register to unlock daily discounts curated just for you.',
    image: 'https://i.ibb.co/8nk5kf1k/8747637.jpg',
  },
  {
    id: 3,
    title: 'Seamless Shopping',
    description:
      'NUVIRO gives you a smooth, secure, and rewarding shopping experience.',
    image: 'https://i.ibb.co/jkFKNZ6Z/2448638.jpg',
  },
]

// https://i.ibb.co/NdK49C8p/2448261.

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ email: '', password: '', name: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(isLogin ? 'Login Data:' : 'Register Data:', form)

    // === Backend connect later ===
    // const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register'
    // await fetch(endpoint, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form),
    // })
    // ==============================

    setForm({ email: '', password: '', name: '' })
  }

  return (
    <div className="lg:h-[500px] min-h-full my-5 flex flex-col md:flex-row">
      {/* Left Side - Slider */}
      <div className="hidden md:flex md:w-2/3">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/10" /> {/* overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 text-center text-white px-8"
                >
                  {/* <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="max-w-lg mx-auto text-lg opacity-90">
                    {slide.description}
                  </p> */}
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex flex-1 items-center justify-center  relative">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full p-8 relative z-10"
        >
          <motion.h2
            key={isLogin ? 'login-title' : 'register-title'}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-[#180680] mb-6 text-center"
          >
            {isLogin ? 'Login to NUVIRO' : 'Register for NUVIRO'}
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73168E]"
                />
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73168E]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#73168E]"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#180680] via-[#73168E] to-[#C35B89] text-white font-semibold shadow-md"
            >
              {isLogin ? 'Login' : 'Register'}
            </motion.button>
          </form>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-center text-sm text-gray-600"
          >
            {isLogin ? (
              <>
                Don’t have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-[#73168E] hover:underline font-medium"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-[#73168E] hover:underline font-medium"
                >
                  Login
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
