import React from 'react'
import foodtruck from "../assets/foodtruck.png"

const HomeLeft = () => {
  return (
    <div className='w-[50%] mt-[390px] md:mt-0 ml-16 md:ml-0'>
      <div className='hidden md:block'>
        <img className='w-28 h-20 mt-12 ml-32' alt='foodtruck' src={foodtruck} />
      </div>
      <h1 className='text'>Discover the <span className='text-red-500'>Best</span> Food and Drinks</h1>
      <p className='para'>Naturally made Healthcare Products for the better care & support of your body.</p>
      <div className=''>
        <button className='w-48 h-16 ml-10 mt-7 border border-none bg-red-500 text-white font-bold rounded-full md:mt-12 md:ml-32'>Explore Now!</button>
      </div>
    </div>
  )
}

export default HomeLeft
