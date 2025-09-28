"use client";

import UserContext from '@/context/userContext';
import React, { useContext } from 'react';

export default function File() {
    const context = useContext(UserContext);

    return (
        <div className='flex justify-center'>
            {context.user ? (
                <h2 className='font-bold'>Name of User : <span>{context.user.name}</span></h2>
            ) : (
                <h2>User data not available</h2>
            )}
        </div>
    );
}
