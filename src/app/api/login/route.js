/*
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";

export async function POST(request){
    await connectDb();
    
    const { email, password} = await request.json();

    try {
        const user = await User.findOne({
            email: email,
    });
    // 1.user check
        if( user ==  null){
            throw new Error("User not found !!!")
        }
        
        const matched = bcrypt.compareSync(password, user.password);
        if(!matched){
            throw new Error("password not matched !!!")
        }

        const token = jwt.sign({
        _id : user._id,
        name : user.name,
        },
        process.env.JWT_KEY
    ) 
// 4.next response 
        const response = NextResponse.json({
            message: "Login successful !!",
            success: true,
        });

        response.cookies.set("authToken",token,{
            expires: "1d",
            httpOnly: true,
        })

        console.log(user)
        console.log(token)
        
        return response ;


    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
                success: false ,
            },
            { 
                status: 500,
            }
        )
    }
} 
*/

import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";


export async function POST(request){
    await connectDb();

    console.log('login api')
    const { email, password } = await request.json();

    try {
        const user = await User.findOne({ email });

        // 1. User check
        if (!user) {
            throw new Error("User not found !!!");
        }

        // 2. Password check
        const matched = bcrypt.compareSync(password, user.password);
        if (!matched) {
            throw new Error("Password not matched !!!");
        }

        // 3. Token generation
        const token = jwt.sign(
            {
                _id: user._id,
                name: user.name,
            },
            process.env.JWT_KEY,
            { expiresIn: '1d' } // Token expiration time
        );

        // 4. Next response 
        const response = NextResponse.json({
            message: "Login successful !!",
            success: true,
            user: user,
        });

        // 5. Set cookie with expiration as Date object
        response.cookies.set("authToken", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 1 day expiration
            httpOnly: true,
        });

        console.log(user);
        console.log(token);

        return response;
    } catch (error) {
        return NextResponse.json(
            {
                message: error.message,
                success: false,
            },
            { status: 500 }
        );
    }
}

