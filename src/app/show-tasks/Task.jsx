import UserContext from '@/context/userContext';
import React, { useContext } from 'react';
import { ImCross } from "react-icons/im";
import Swal from 'sweetalert2';

const Task = ({ task, deleteTaskParent }) => {
  const { user } = useContext(UserContext);

  function deleteTask(taskId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTaskParent(taskId);
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success"
        });
      }
    });
  }

  const getStatusClassName = (status) => {
    if (status === 'Completed') {
      return "bg-green-500";
    } else if (status === "Justadded") {
      return "bg-blue-500";
    } else {
      return "bg-red-500";
    }
  };

  return (
    <div className='m-2 transition-transform transform bg-gray-400 border rounded-md shadow-xl hover:scale-105 hover:shadow-2xl'>
      <div className={`shadow-lg p-2 rounded-md ${getStatusClassName(task.status)}`}>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-semibold'>{task.title}</h1>
          <span className='flex items-center justify-center w-6 h-6 p-1 rounded-full cursor-pointer hover:bg-red-600'>
            <ImCross onClick={() => deleteTask(task._id)} />
          </span>
        </div>
        <p>{task.content}</p>
        <div className='flex justify-between'>
          <p className='text-left'>Status: <span className='font-bold '>{task.status}</span></p>
          <p className='text-right'>Author: <span className='font-bold '>{user?.name || "Unknown"}</span></p>
        </div>
      </div>
    </div>
  );
}

export default Task;
