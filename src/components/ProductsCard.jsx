import React from 'react'

export default function ProductsCard() {
  return (
    <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 my-10 mx-3">
      <div
        className="p-10 flex flex-col gap-3 rounded-md border border-gray-300 bg-red-400 bg-cover "
        style={{
          backgroundImage:
            'url(https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-05.jpg)',
        }}
      >
        <h3 className="uppercase text-green-400 font-bold">
          weekend discount 20%
        </h3>
        <h2 className="font-bold text-2xl text-black">Natural Eggs</h2>
        <p className="text-gray-400 text-sm"> Eat one every day</p>
        <div>
          <button className="btn bg-gray-500 text-white px-6 text-sm py-3 mt-3 rounded-full cursor-pointer ">
            Shop Now
          </button>
        </div>
      </div>
      <div
        className="p-10 flex flex-col gap-4 rounded-md border border-gray-300 bg-red-400 bg-cover "
        style={{
          backgroundImage:
            'url(https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-06.jpg)',
        }}
      >
        <h3 className="uppercase text-green-400 font-bold">
          weekend discount 20%
        </h3>
        <h2 className="font-bold text-2xl text-black">Taste the Best</h2>
        <p className="text-gray-400 text-sm"> Shine the morning</p>
        <div>
          <button className="btn bg-gray-500 text-white px-6 text-sm py-3 mt-3 rounded-full cursor-pointer ">
            Shop Now
          </button>
        </div>
      </div>
      <div
        className="p-10 flex flex-col gap-4 rounded-md border border-gray-300 bg-red-400 bg-cover "
        style={{
          backgroundImage:
            'url(https://klbtheme.com/bacola/wp-content/uploads/2021/05/bacola-banner-10.jpg)',
        }}
      >
        <h3 className="uppercase text-green-400 font-bold">
          weekend discount 20%
        </h3>
        <h2 className="font-bold text-2xl text-black">Ditch the Junk</h2>
        <p className="text-gray-400 text-sm"> Breakfast mode better</p>
        <div>
          <button className="btn bg-gray-500 text-white px-6 text-sm py-3 mt-3 rounded-full cursor-pointer ">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  )
}
