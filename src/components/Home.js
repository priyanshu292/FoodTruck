import React from 'react'
import HomeLeft from './HomeLeft'
import HomeRight from './HomeRight'

const Home = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row'>
      <HomeLeft />
      <HomeRight />
    </div>
  )
}

export default Home
