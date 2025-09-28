import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

;

export async function GET(request, { params }) {
    const { userId } = params;

    try {
        await connectDb();
        const user = await User.findById(userId);
        if (!user) {
            return NextResponse.json({
                message: "User not found",
                success: false,
            });
        }
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Failed to get user",
            success: false,
        });
    }
}


export async function DELETE(request,{params}){
    const {userId} = params;

    try {
        await connectDb();
        console.log("Delete [uerId] inside called")
        await User.deleteOne({
            _id: userId,
        });
    } catch (error) {

        console.log(error)
        return NextResponse.json({
            message: " Error failed to delete user!!",
            status: false,
        })
    }
    return NextResponse.json(
        {
            message: 'deleted !!',
            status: true,
        },
        {
            status: 201,
            statusText: "Hey user deleted!!"
        }

    );
    
}
export async function PUT(request, { params }) {
    const { userId } = params;

    try {
        await connectDb();
        const { name, password, about, profileURL } = await request.json();
        const user = await User.findById(userId);

        if (!user) {
            return NextResponse.json({
                message: "User not found",
                success: false,
            });
        }

        user.name = name;
        user.password = password;
        user.about = about;
        user.profileURL = profileURL;

        const updatedUser = await user.save();
        return NextResponse.json(updatedUser);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Failed to update user",
            success: false,
        });
    }
}
