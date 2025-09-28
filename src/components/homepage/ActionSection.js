"use client";

import React from 'react';
import Image from 'next/image';
import Mobilenote from '../../assets/Mobilenote.svg';

const ActionSection = () => {
  return (
    <div className="relative bg-gray-800">
      <div className="absolute inset-0 overflow-hidden">
        <div style={{position: 'relative', width:'100%', height:'auto'}}>
            <Image
            src={Mobilenote}
            alt="Image"
            //layout="intrinsic"
            width={800}
            height={600}
            style={{width:'100%', height:'auto'}}
          />
        </div>

        <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>
      <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Take Control of Your Tasks?
          </h2>
          <p className="mt-6 text-lg leading-6 text-gray-200">
            Join our task management platform today and boost your productivity.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href="/signup"
              className="px-6 py-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionSection;
