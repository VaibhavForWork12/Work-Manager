"use client";

import React, { useState } from 'react';
import SignUpp from '../../assets/SignUpp.svg';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SignUp } from '@/services/userService';



const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL: "https://static-00.iconduck.com/assets.00/profile-default-icon-1024x1023-4u5mrj2v.png",
  });

  const doSignUp = async (event) => {
    event.preventDefault();
    
    if (data.name.trim() === '') {
      toast.warning("Name is required!", { position: "top-center" });
      return;
    }
    if (data.email.trim() === '') {
      toast.warning("Email is required!", { position: "top-center" });
      return;
    }
    if (data.password.trim() === '') {
      toast.warning("Password is required!", { position: "top-center" });
      return;
    }

    // form submit service
    try {
      const result = await SignUp(data);
      console.log(result);
      toast.success("User is registered successfully", { position: "top-center" });
      
    setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://static-00.iconduck.com/assets.00/profile-default-icon-1024x1023-4u5mrj2v.png",
      });
    } catch (error) {
      console.log(error);
      toast.error("Sign up error"+ error.response.data.message, { position: "top-center" });
    }
  };
  
  const resetForm = () => {
    setData({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL: "https://static-00.iconduck.com/assets.00/profile-default-icon-1024x1023-4u5mrj2v.png",
    })
  }

  return (
    <div className='grid grid-cols-12 pt-3 pb-3 bg-gray-800'>
      <div className='w-full max-w-md col-span-4 col-start-5 p-6 mb-5 bg-white shadow-lg rounded-3xl'>
        <div className='py-5 bg-white rounded-lg shadow-sm'>
          <div className='flex justify-center'>
            <Image
              src={SignUpp}
              alt='Signup'
              width={200}
              height={200}
              priority={true}
            />
          </div>
          
          <h1 className='text-2xl text-center'>SignUp Here!!</h1>
          <form className='mt-5' onSubmit={doSignUp}>
            {/* Username */}
            <div className='mt-3'>
              <label htmlFor='user_name' className='block mb-1 text-sm font-medium'>Username</label>
              <input
                type='text'
                placeholder='Enter here'
                className='w-full p-3 placeholder-gray-100 bg-gray-400 border rounded-2xl focus:ring-gray-400 border-spacing-4'
                id='user_name'
                name='user_name'
                onChange={(event) => setData({ ...data, name: event.target.value })}
                value={data.name}
              />
            </div>

            {/* Email */}
            <div className='mt-3'>
              <label htmlFor='user_email' className='block mb-1 text-sm font-medium'>Email</label>
              <input
                type='email'
                placeholder='Enter here'
                id='user_email'
                className='w-full p-3 placeholder-gray-100 bg-gray-400 border rounded-2xl focus:ring-gray-400 border-spacing-4'
                name='user_email'
                onChange={(event) => setData({ ...data, email: event.target.value })}
                value={data.email}
              />
            </div>

            {/* Password */}
            <div className='mt-3'>
              <label htmlFor='user_password' className='block mb-1 text-sm font-medium'>Password</label>
              <input
                type='password'
                placeholder='Enter here'
                id='user_password'
                className='w-full p-3 placeholder-gray-100 bg-gray-400 border rounded-2xl focus:ring-gray-400 border-spacing-4'
                name='user_password'
                onChange={(event) => setData({ ...data, password: event.target.value })}
                value={data.password}
              />
            </div>

            {/* About */}
            <div className='mt-3'>
              <label htmlFor='user_about' className='block mb-1 text-sm font-medium'>About</label>
              <textarea
                placeholder='Enter here'
                id='user_about'
                name='user_about'
                onChange={(event) => setData({ ...data, about: event.target.value })}
                value={data.about}
                rows={3}
                className='w-full p-3 placeholder-gray-100 bg-gray-400 border rounded-2xl focus:ring-gray-400 border-spacing-4'
              ></textarea>
            </div>
            
            <div className='flex justify-center mt-4'>
              <button type="submit" className='px-3 py-2 bg-green-500 rounded ms-3 hover:bg-green-300'>
                SignUp
              </button>
              <button
                type='button'
                className='px-3 py-2 bg-orange-500 rounded ms-3 hover:bg-orange-300'
                onClick={resetForm}
              >
                Reset
              </button>
            </div>
            {JSON.stringify(data)}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
