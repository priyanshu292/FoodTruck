import React from 'react'
import foodtruck from "../assets/foodtruck.png"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { PiCopyright } from "react-icons/pi";



const Footer = () => {
  return (
    <div className='flex mt-40 bg-gray-100'>
      <div>
        <img className="w-40 h-32 m-24" alt='logo' src={foodtruck} />
      </div>
      <div className='pt-16 pl-20'>
        <h3 className='pb-4 font-bold text-blue-800'>Contact Us</h3>
        <p className='text-gray-500'>Lorem Ipsum Pvt Ltd.5/1, Magalton</p>
        <p className='text-gray-500'>Road, Phartosh Gate near YTM</p>
        <p className='text-gray-500'>Market, XYZ-343434</p>
        <p className='pt-4 text-gray-500'>example2020@gmail.com</p>
        <p className='pt-4 text-gray-500'>(904) 443-0343</p>
      </div>
      <div className='pt-16 pl-40'>
        <h3 className='pb-4 font-bold text-blue-800'>More</h3>
        <p className='text-gray-500'>About Us</p>
        <p className='pt-4 text-gray-500'>Products</p>
        <p className='pt-4 text-gray-500'>Career</p>
        <p className='pt-4 text-gray-500'>Contact Us</p>
      </div>
      <div>
        <h3 className='pt-16 pl-80 font-bold text-blue-800'>Social Links</h3>
        <div className='text-blue-800 pt-4 pl-72 flex'>
            <FaInstagram className='m-4' />
            <FaTwitter className='m-4' />
            <FaFacebookF className='m-4' />
        </div>
        <p className='text-gray-500 mt-16 ml-72 flex'><PiCopyright />2022 Food Truck Example</p>
      </div>
    </div>
  )
}

export default Footer
