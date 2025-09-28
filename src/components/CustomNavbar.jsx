"use client";

import UserContext from '@/context/userContext';
import { logout } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const CustomNavbar = () => {
  const router = useRouter();
  const { user, setUser, loading } = useContext(UserContext);

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(null);
      router.push("/");
      toast.success("User logged Out!!");
    } catch (error) {
      console.log(error);
      toast.error("Logged out problem");
    }
  }

  if(loading){
    return null;
  }

  
  return (
    <nav className="flex items-center justify-between px-5 py-3 text-white bg-gray-600 shadow-md">
      <div className="brand">
        <h1 className="text-3xl font-bold text-gray-200 transition duration-300 hover:text-gray-100">
          <Link href="/">Work Manager</Link>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-8 text-lg">
          {user && (
            <>
              <li>
                <Link href="/" className="transition duration-300 hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="transition duration-300 hover:text-gray-400">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href="/show-tasks" className="transition duration-300 hover:text-gray-400">
                  Show Tasks
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-4 text-lg">
          {user ? (
            <>
              <li>
                <Link href="/profile" className="transition duration-300 hover:text-gray-400">
                  {user.name}
                </Link>
              </li>
              <li>
                <button
                  onClick={doLogout}
                  className="transition duration-300 hover:text-gray-400"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className="transition duration-300 hover:text-gray-400">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="transition duration-300 hover:text-gray-400">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
