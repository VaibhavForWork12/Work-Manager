import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";



export async function GET(request) {

    let users = [];
    try {
        await connectDb();
        users = await User.find();
    } catch (error) {
        console.log("error:", error);
        return NextResponse.json({
            message: "Failed to get users!!",
            success: false,
        });
    }
    return NextResponse.json(users);
}

export async function POST(request) {
    const { name, email, password, about, profileURL } = await request.json();

    console.log(name, email, password, about, profileURL);

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL,
    });

    try {
        await connectDb();
        const salt = process.env.BCRYPT_SALT ? parseInt(process.env.BCRYPT_SALT) : 10; // Default to 10 if not set
        user.password = await bcrypt.hash(user.password, salt);
        console.log(user);
        const createdUser = await user.save();
        const response = NextResponse.json(createdUser, {
            status: 201,
        });
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to create user!!",
            status: false,
        }, {
            status: 500,
        });
    }
}
