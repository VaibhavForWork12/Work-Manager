"use client";
import UserContext from '@/context/userContext';
import { deleteTask, getTaskbyId } from '@/services/taskService'
import React, { useContext, useEffect, useState } from 'react'
import Task from './Task';
import { toast } from 'react-toastify';
import Image from 'next/image';
import TaskList from '../../../public/TaskList.svg'

const ShowTask = () => {
    const context = useContext(UserContext);
    const [tasks, setTasks] = useState([]);
    async function loadTask(userId){
        try {
            const tasks = await getTaskbyId(userId);
            setTasks([...tasks].reverse())
            console.log(tasks)
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        if(context.user){
        loadTask(context.user._id)}
    },[context.user])
  
    async function deleteTaskParent(taskId){
        try {
            const result = await deleteTask(taskId)
            console.log(result)
            const newTask = tasks.filter((item) => item._id != taskId);
            setTasks(newTask)
            toast.success("Task deleted successfully")
        } catch (error) {
            console.log(error)
            toast.error("Error in deleting")
        }
    }
    
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-6 col-start-4'>
                <div className='flex justify-center p-3 bg-inherit'>
                    <Image
                    src={TaskList}
                    alt='TaskList'
                    style={{width:'40%'}}
                    />
                </div>
                
                <h1 className='mb-4 text-2xl font-bold text-center text-black-500'>
                    YOUR TASKS ({tasks.length})
                </h1>
                {tasks.map((task) => (
                    <Task
                        task={task}
                        key={task._id}
                        deleteTaskParent={deleteTaskParent}
                        className='mb-4'
                    />
                ))}
            </div>
        </div>
    );
};

export default ShowTask;
