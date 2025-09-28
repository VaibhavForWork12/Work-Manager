"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// images import 
const johnDoeImage = '/faces/face1.jpg';
const janeSmithImage = '/faces/face2.jpg';
const samJohnsonImage = '/faces/face3.jpg';
const aliceBrownImage = '/faces/face4.jpg';
const bobWilliamsImage = '/faces/face5.jpg';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO of Company',
    quote: 'This is the best service I have ever used. Highly recommend!',
    image: johnDoeImage, // Replace with actual image paths
  },
  {
    name: 'Jamie Smith',
    title: 'CTO of Startup',
    quote: 'Amazing experience. Will definitely use again.',
    image: janeSmithImage, // Replace with actual image paths
  },
  {
    name: 'Samy Johnson',
    title: 'Product Manager',
    quote: 'The team was fantastic and the product exceeded expectations.',
    image: samJohnsonImage, // Replace with actual image paths
  },
  {
    name: 'Alice Brown',
    title: 'Designer',
    quote: 'A wonderful service with great support. Wow a great app.',
    image: aliceBrownImage, // Replace with actual image paths
  },
  {
    name: 'Bob Williams',
    title: 'Developer',
    quote: 'I am very satisfied with the results!. Great app!!',
    image: bobWilliamsImage, // Replace with actual image paths
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-white">
          What Our Clients Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="flex flex-col items-center p-8 bg-gray-100 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 mb-4 rounded-full"
                />
                <p className="mb-4 text-lg text-center text-gray-800">{testimonial.quote}</p>
                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;
