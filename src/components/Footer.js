import React from 'react';
import foodtruck from "../assets/foodtruck.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-100 py-8 px-4 md:px-8 mt-32">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto mt-10 mb-10">
        {/* Logo */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <img className="w-32 mx-auto md:mx-0" alt='logo' src={foodtruck} />
        </div>
        
        {/* Contact */}
        <div className=" ml-10 mt-8 md:ml-0 md:mt-0 w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-blue-800 font-bold mb-2">Contact Us</h3>
          <p className="text-gray-500">Lorem Ipsum Pvt Ltd.5/1, Magalton</p>
          <p className="text-gray-500">Road, Phartosh Gate near YTM</p>
          <p className="text-gray-500">Market, XYZ-343434</p>
          <p className="text-gray-500 mt-2">example2020@gmail.com</p>
          <p className="text-gray-500 mt-2">(904) 443-0343</p>
        </div>
        
        {/* More */}
        <div className=" ml-10 mt-8 md:ml-0 md:mt-0 w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-blue-800 font-bold mb-2">More</h3>
          <p className="text-gray-500">About Us</p>
          <p className="text-gray-500 mt-2">Products</p>
          <p className="text-gray-500 mt-2">Career</p>
          <p className="text-gray-500 mt-2">Contact Us</p>
        </div>
        
        {/* Social Links */}
        <div className=" ml-10 mt-8 md:ml-0 md:mt-0 w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-blue-800 font-bold mb-2 hidden md:block">Social Links</h3>
          <div className="flex items-center text-blue-800 mt-4">
            <FaInstagram className="mr-4" />
            <FaTwitter className="mr-4" />
            <FaFacebookF className="mr-4" />
          </div>
          <p className="text-gray-500 mt-20">&copy; 2022 Food Truck Example</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
