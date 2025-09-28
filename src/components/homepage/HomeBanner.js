"use client";


import Image from 'next/image';
import React from 'react';
//import checklist from '../../assets/checklist.svg'
//import bannerhd from '../../assets/banner.png'
import bannerfinal from '../../assets/bannerfinal.png'

const BannerSection = () => {
  return (
    <div className="relative text-white bg-gray-800">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div className="ml-20 text-center md:text-left">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              Welcome to Our Work Manager
            </h1>
            <p className="mt-4 text-lg sm:text-xl md:text-2xl">
              Discover amazing content and get inspired!
            </p>
            <div className="flex justify-center mt-8 space-x-4 md:justify-start">
              <a
                href="/signup"
                className="px-6 py-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
              >
                Get Started
              </a>
              <a
                href="/info"
                className="px-6 py-3 font-bold text-blue-500 bg-white rounded-full hover:bg-gray-200"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="flex justify-center mr-20 rounded-2xl md:justify-end">
            <Image
              src={bannerfinal}
              alt='bannerfinal'
              style={{width:'70%'}}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
