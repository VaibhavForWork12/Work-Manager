"use client";
import { currentUser } from "@/services/userService";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchUser = async () =>{
            try {
                const user = await currentUser();
                setUser(user);
            } catch (error) {
                console.log("error in loading current user")
                console.log(error)
            }
            finally{
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return (
        <UserContext.Provider value={{user,setUser,loading}}>
            {children}
        </UserContext.Provider>
    );
};


export default UserContext;