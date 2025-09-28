"use client";
import UserContext from '@/context/userContext';
import { login } from '@/services/userService';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
//import { connectDb } from "@/helper/db";



const Login = () => {
    const router = useRouter()
    const context = useContext(UserContext);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const loginFormSubmitted = async (event) => {
        event.preventDefault();
        console.log(loginData);

        if (loginData.email.trim() === "") {
            toast.info("Invalid Email !!", {
                position: "top-center"
            });
            return;
        }

        if (loginData.password.trim() === "") {
            toast.info("Invalid password!!", {
                position: "top-center"
            });
            return;
        }

        // valid data 
        // login  
        try {
            const result = await login(loginData);
            console.log(result)
            toast.success("Logged In")
            //redirect to profile
            context.setUser(result.user)
            router.push('/profile/user')
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message ,{
                position:"top-center",
            })
            
        }
    };

    const resetForm = () => {
        setLoginData({
            email: "",
            password: "",
        });
    };

    return (
        <div className='grid grid-cols-12 pt-3 pb-3 bg-gray-800'>
            <div className='w-full max-w-md col-span-4 col-start-5 p-6 mb-5 bg-gray-400 shadow-lg rounded-3xl'>
                <div className='py-5 bg-gray-400 rounded-lg shadow-sm'>
                    <h1 className='text-2xl text-center'>Login Here!!</h1>

                    <form className='mt-5' onSubmit={loginFormSubmitted}>
                        {/* Email */}
                        <div className='mt-3'>
                            <label htmlFor='user_email' className='block mb-1 text-sm font-medium'>Email</label>
                            <input
                                type='email'
                                placeholder='Enter here'
                                id='user_email'
                                className='w-full p-3 placeholder-gray-400 bg-white border rounded-2xl focus:ring-gray-400 border-spacing-4'
                                name='user_email'
                                onChange={(event) => setLoginData({
                                    ...loginData,
                                    email: event.target.value
                                })}
                                value={loginData.email}
                            />
                        </div>

                        {/* Password */}
                        <div className='mt-3'>
                            <label htmlFor='user_password' className='block mb-1 text-sm font-medium'>Password</label>
                            <input
                                type='password'
                                placeholder='Enter here'
                                id='user_password'
                                className='w-full p-3 placeholder-gray-400 bg-white border rounded-2xl focus:ring-gray-400 border-spacing-4'
                                name='user_password'
                                onChange={(event) => setLoginData({
                                    ...loginData,
                                    password: event.target.value
                                })}
                                value={loginData.password}
                            />
                        </div>

                        <div className='flex justify-center mt-4'>
                            <button type="submit" className='px-3 py-2 bg-green-500 rounded ms-3 hover:bg-green-300'>
                                Login
                            </button>
                            <button type='button' className='px-3 py-2 bg-orange-500 rounded ms-3 hover:bg-orange-300'
                                onClick={resetForm}>
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {JSON.stringify(loginData)}
        </div>
    );
}

export default Login;

