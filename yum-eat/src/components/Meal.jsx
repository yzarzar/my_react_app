import React, { useState } from 'react'
import { mealData } from '../data/data'
import { BsHeartArrow } from 'react-icons/bs'

export default function Meal() {
    const [food,setFood] = useState(mealData);
    const filterCat = (category) => {
        setFood(
            mealData.filter((item) => {
                return item.category === category
            })
        )
    }
  return (
    <div>
      <>
        <div className='max-w-[1520px] m-auto px-4 py-12'>
            <h1 className='py-2 text-2xl font-bold text-center text-orange-500 '>Our Meal</h1>
            <div className='flex flex-col justify-center lg:flex-row'>
                <div className='flex justify-center md:justify-center'>
                    <button onClick={() => setFood(mealData)} className='m-1 bg-yellow-300 border-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 text-sky-500'>All</button>
                    <button onClick={() => filterCat('pizza')} className='m-1 bg-yellow-300 border-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 text-sky-500'>Pizza</button>
                    <button onClick={() => filterCat('chicken')} className='m-1 bg-yellow-300 border-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 text-sky-500'>Chicken</button>
                    <button onClick={() => filterCat('salad')} className='m-1 bg-yellow-300 border-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 text-sky-500'>Sald</button>
                </div>
            </div>
            <div className='grid gap-4 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-4'>
                {
                    food.map((item) => (
                        <div key={item.id} className='duration-300 bg-blue-100 border-none rounded-lg hover:scale-105 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                            <img src={item.image} alt="" className='w-full h-[200px] object-cover rounded-lg'/>
                            <div className='flex justify-between px-4 py-2'>
                                <p className='px-2 py-4 -mt-10 text-white bg-orange-700 border-8 rounded-full w-18 h-18'>{item.price}</p>
                            </div>
                            <div className='flex py-4 pl-2'>
                                <p className='items-center text-indigo-600 '>View More</p>
                                <BsHeartArrow className='flex ml-2 text-yellow-600' size={25}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </>
    </div>
  )
}
