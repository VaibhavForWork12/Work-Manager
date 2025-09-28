"use client";


import React, { useState } from 'react'
import addtask from '../../assets/addtask.svg'
import Image from 'next/image'
import { addTask } from '@/services/taskService';
import { toast } from 'react-toastify';

/*   export const metadata = {
    title: "Add-Task: Work Manager"
  };
*/

const AddTask = () => {
 // console.log("this is  client side component");
  const [task, setTask]=useState({
    title: "",
    content:"",
    status:"Pending",
    //temprory trial
    userId:"",
  });
  
  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);
    // validate data
    try {
      const resul = await addTask(task)
      console.log(resul);
      toast.success("Your task is added successfully!!", 
        {position: "top-center",});
    } catch (error) {
      console.log(error);
      toast.error("Task not added!!", 
        {position:'top-center',});
    }
  };
 
  return (
    <div className='grid grid-cols-12 pt-3 pb-3 bg-gray-800'>  
    <div className='w-full max-w-md col-span-4 col-start-5 p-6 bg-white shadow-lg rounded-3xl '>
      <div className='py-5 bg-white rounded-lg shadow-sm'>

        <div className='flex justify-center my-1'> 
          <Image src={addtask}
          alt="Add Task"
          style={{width:"50%"}}/>
        </div>
        <h1 className='text-2xl text-center'>Add your task here!!</h1>
       
        
        <form className="mt-1 mb-1 space-y-4" onSubmit={handleAddTask}>
          <div className='mt-1'>
            <label
              className='block mb-1 text-sm font-medium'
              htmlFor='task_title'
              >
              Title
            </label>
            <input
              type='text'
              className='w-full p-3 bg-gray-400 border rounded-2xl focus:ring-gray-400 border-spacing-4'
              id='task_title'
              name='task_title'
              onChange={(event)=>{
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
              >
                
            </input>
          </div>
          
        {/*CONTENT */}
        
          <div className='mt-4'>
            <label
              htmlFor='task_content'
              className='block mb-1 text-sm font-medium'>
              Content
            </label>
            <textarea
              className='w-full p-3 bg-gray-400 border rounded-2xl focus:ring-gray-400-100 border-spacing-4'
              id='task_content'
              rows={3}
              name='task_content'
              onChange={(event)=>{
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            />
          </div>
          
          {/*Status */}
          <div className='mt-4'>
            <label
              htmlFor='task_status'
              className='block mb-1 text-sm font-medium'>
              Status
            </label>
            <select
              className='w-full p-3 bg-gray-400 border rounded-2xl focus:ring-gray-400-100 border-spacing-4'
              id='task_status'
              name='task_status'
              onChange={(event)=>{
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
              >
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Justadded">Justadded</option>
            </select>
          </div>

          {/*Button */}
          <div className='flex justify-center mt-4'>
            <button className='px-3 py-2 bg-blue-400 rounded-lg hover:bg-blue-600 ms-3'>
              Add Todo
            </button>

            <button className='px-3 py-2 bg-red-400 rounded-lg hover:bg-red-600 ms-4'>
              Clear Task
            </button>
          </div>
          {
            JSON.stringify(task)
          }
        </form>
        </div>
      </div>
    </div>
  )
}

export default AddTask