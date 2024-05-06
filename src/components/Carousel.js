import React from 'react';
import { data } from '../constants';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settingsHorizontal = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    afterChange: (current) => setCurrentSlide(current),
    appendDots: (dots) => (
      <div style={{ textAlign: 'center' }}>
        <ul style={{ margin: '0' }}> {dots} </ul>
        <p>
          {Math.floor(currentSlide / settingsHorizontal.slidesToScroll) + 1}/{Math.ceil(data.length / settingsHorizontal.slidesToScroll)}
        </p>
      </div>
    ),
  };

  const settingsVertical = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    afterChange: (current) => setCurrentSlide(current),
    appendDots: (dots) => (
      <div style={{ textAlign: 'center' }}>
        <ul style={{ margin: '0' }}> {dots} </ul>
        <p>
        {Math.floor(currentSlide / settingsHorizontal.slidesToScroll) + 1}/{Math.ceil(data.length / settingsHorizontal.slidesToScroll)}
        </p>
      </div>
    ),
  };

  return (
    <div>
      <h1 className='mt-32 text-5xl text-blue-950 ml-14 md:ml-52'>Latest Articles</h1>
      <div className='w-3/4 m-auto'>
        <div className='mt-20'>
          <Slider {...(window.innerWidth < 768 ? settingsVertical : settingsHorizontal)}>
            {data.map((d) => (
              <div
                key={d.name} 
                className='bg-white w-[381px] h-[554px] border border-r-2 text-black rounded-xl'
              >
                <div className='rounded-xl mt-7 flex justify-center items-center'>
                  <img src={d.img} alt='' className='w-[326px] h-[257px] rounded-lg' />
                </div>
                <div className='w-[295.02px] h-[194.52px] m-auto mt-4'>
                  <h1 className='text-lg text-center md:text-start md:text-2xl font-bold text-blue-950'>{d.name}</h1>
                  <p className='pt-4 text-gray-800'>{d.review}</p>
                  <button className='ml-24 md:ml-0 rounded-full border border-gray-700 p-3 mt-4'>Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
