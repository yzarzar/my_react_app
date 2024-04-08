import React from 'react'
import { categories } from '../data/data'

export default function Categories() {
  return (
    <>
      <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='py-2 text-2xl font-bold text-center text-orange-500'>Trending Categories</h1>
        <div className='grid grid-cols-2 gap-5 px-2 py-5 md:grid-cols-6'>
            {
                categories.map((item) => (
                    <div key={item.id} className='flex items-center justify-center p-4 duration-300 hover:scale-105'>
                        <img src={item.image} alt={item.name} className='object-cover w-40 h-10 shadow-xl cursor-pointer rounded-xl' />
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}
