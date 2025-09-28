import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/helper/db";

export async function GET(request){
    const authToken = request.cookies.get('authToken')?.value;
    console.log(authToken)

    if(!authToken){
        return NextResponse.json({
            message: "User not Login"
        });
    }
    const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log("data",data)
    await connectDb();    

    const user = await User.findById(data._id).select("-password")
    return NextResponse.json(user);
}