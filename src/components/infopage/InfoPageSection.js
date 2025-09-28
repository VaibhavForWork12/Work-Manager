import Image from 'next/image'
import React from 'react'
import developer from '../../../public/developer.jpg'

const InfoPageSection = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-center">About the Developer</h1>
          <div className='flex justify-center '>
            <Image src={developer}
            alt='Developer Image'
            height={150}
            width={150}
            className='rounded-full' 
            />
          </div>
      <p className="text-lg">
        This app is created by Mr. Vaibhav Wankar, a dedicated and passionate developer with a keen interest in building
        efficient and user-friendly applications. The development of this application was made possible with the guidance
        provided by various YouTube tutorial videos and the invaluable assistance of our co-pilot, Mr. ChatGPT.
      </p>
      <p className="mt-4 text-lg">
        Vaibhav Wankar has a strong background in web development, specializing in technologies like React, Next.js, and
        Tailwind CSS. His commitment to continuous learning and improvement is evident in the quality of this application.
      </p>
      <p className="mt-4 text-lg">
        The project leverages modern web development practices and tools to deliver a seamless user experience. Special thanks
        to the YouTube content creators and the OpenAI team for providing the resources and tools that made this project a
        reality.
      </p>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Technologies Used:</h2>
        <ul className="mt-2 ml-4 list-disc list-inside">
          <li>React</li>
          <li>Next.js</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
          <li>SweetAlert2 for user notifications</li>
          <li>Context API for state management</li>
          <li>Axios for HTTP requests</li>
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Special Acknowledgements:</h2>
        <ul className="mt-2 ml-4 list-disc list-inside">
          <li>YouTube tutorial creators</li>
          <li>OpenAI's ChatGPT for guidance and support</li>
          <li>All the developers and contributors to the open-source libraries used in this project</li>
        </ul>
      </div>
      <div className="mt-6 text-center">
        <p className="text-lg">Thank you for using this application. We hope it meets your needs and exceeds your expectations!</p>
      </div>
    </div>
  )
}

export default InfoPageSection

