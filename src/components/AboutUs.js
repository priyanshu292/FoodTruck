import React from 'react';
import aboutimg from "../assets/aboutimg.jfif";

const AboutUs = () => {
  return (
    <div className='mt-96 mb-96 bg-gray-100 flex'>
      <div>
        <img className='w-[384px] h-[468px] ml-60' src={aboutimg} alt='about' />
      </div>
      <div>
        <h1 className='text'>About Us</h1>
        <p className='para-about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi perferendis fuga dolor. Eos ipsam ipsum, ea obcaecati beatae repellendus cum doloremque sint blanditiis numquam officiis ad autem at adipisci id accusantium nulla eum sapiente molestiae. Ab repellat voluptatum non dolor corporis blanditiis minus, vitae veritatis, debitis commodi quia officia!</p>
        <button className='w-48 h-16 border border-none bg-red-500 text-white font-bold rounded-full mt-12 ml-32'>Read More</button>
      </div>
    </div>
  );
};

export default AboutUs;
