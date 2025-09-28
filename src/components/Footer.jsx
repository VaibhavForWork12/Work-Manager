"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-gray-600 shadow-md">
      <div className="container flex justify-around mx-auto">
        <div className="flex flex-col justify-center text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-200">Welcome to Work Manager!!</h1>
          <p className="text-gray-300">
            We are a team of passionate developers building amazing web applications.
          </p>
        </div>
        <div className="text-center">
          <h1 className="mb-2 text-2xl font-bold text-gray-200">Important Links</h1>
          <ul className="space-y-2">
            <li>
              <a href="#!" className="transition duration-300 hover:text-gray-400">
                Facebook
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-300 hover:text-gray-400">
                Instagram
              </a>
            </li>
            <li>
              <a href="#!" className="transition duration-300 hover:text-gray-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
