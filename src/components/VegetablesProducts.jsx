import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

export default function VegetablesProducts() {
  return (
    <section>
      {/* Fruit & Vegetables tilte */}
      <div className="flex justify-between items-center p-3">
        <div className="">
          <h1 className="text-xl text-black uppercase font-bold">
            Fruit & Vegetables
          </h1>
          <p className="text-gray-500 text-sm">
            The freshest greengrocer product as waiting for you
          </p>
        </div>
        <button className="btn text-sm border border-gray-300  px-4 py-2 flex gap-2 items-center rounded-full text-gray-400 hover:text-black cursor-pointer">
          View All <IoIosArrowRoundForward size={25} />
        </button>
      </div>
      <div>
        <div className="p-10">
          <h3 className="text-xl text-gray-600">Weekly Discount on </h3>
          <h2 className="text-2xl text-black font-semibold pb-2">
            Fruits and Vegetables
          </h2>
          <p className="text-md text-gray-700 mb-3">Bacola Weekend Discount</p>
          <button className="btn bg-violet-400 cursor-pointer text-black py-1 px-4 hover:text-white hover:px-5 hover:bg-violet-700 rounded-full transition-all duration-200 ease-in-out">
            View All
          </button>
        </div>
      </div>
    </section>
  )
}
