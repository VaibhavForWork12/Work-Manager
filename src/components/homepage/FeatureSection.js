"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTasks, faBell } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    title: 'Efficient Time Management',
    description: 'Our application ensures efficient time management to enhance productivity.',
    icon: faClock,
  },
  {
    title: 'Task Configuration',
    description: 'Easily configure tasks to suit your specific needs and preferences.',
    icon: faTasks,
  },
  {
    title: 'Due Date Reminder',
    description: 'Never miss a deadline with our automated due date reminders.',
    icon: faBell,
  },
];

const FeatureSection = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-blue-500 uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Our Outstanding Features
          </p>
          <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-500">
            Here are some of the best features that our product offers.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root px-6 pb-8 bg-white rounded-lg shadow-md">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-md">
                          <FontAwesomeIcon icon={feature.icon} />
                        </span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">{feature.title}</h3>
                      <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
