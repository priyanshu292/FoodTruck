import React from 'react';
import foodbg from "../assets/foodbg.jfif";

const HomeRight = () => {
  return (
    <div className='w-[50%]' style={{ position: 'relative' }}>
      <button className='absolute w-32 h-11 border border-x-2 bg-red-500 text-white rounded-full mt-11 ml-32 z-10' style={{ position: 'absolute', top: 20, right: 50 }}>
        Get In Touch
      </button>
      <img className='absolute w-[735px] h-[804px] ml-6 gap-0 rounded-bl-[198.9px]' alt='foodbg' src={foodbg} />
      <svg className='absolute ml-[0.4rem]' width="752" height="839" viewBox="0 0 752 839" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744"/>
      </svg>
    </div>
  );
};

export default HomeRight;