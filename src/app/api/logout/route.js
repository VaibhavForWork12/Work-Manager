import { NextResponse } from "next/server";
import { toast } from "react-toastify";

export async function POST(request){
    const response = NextResponse.json({
        message: "user logged out!!",
        status: true,
    });
    //toast.success("User Logout successfully !!")
    response.cookies.set("authToken", "",{
        expires: new Date(0),
    });
    return response
}