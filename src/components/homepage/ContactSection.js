"use client";

import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log('Form submitted:', formData);
  };

  return (
    <div className="py-12 bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-white">
            Contact Us
          </h2>
          <p className="mb-8 text-lg text-gray-200">
            Have questions or want to get in touch? Fill out the form below!
          </p>
        </div>
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-gray-100 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
