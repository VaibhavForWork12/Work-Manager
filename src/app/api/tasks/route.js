import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";


export async function GET(request){
    try {
        await connectDb();
        const tasks = await Task.find();
        return NextResponse.json({tasks})
    } catch (error) {
        console.log(error)
        return "Error in getting data!!",404, false;
    }
}

export async function POST(request) {
    try {
        const { title, content, userId, status } = await request.json();

        // Ensure status is one of the allowed values
        if (!["Pending", "Completed", "Justadded"].includes(status)) {
            throw new Error("Invalid status value");
        }

        // Fetching task
        const authToken = request.cookies.get('authToken')?.value;
        if (!authToken) {
            throw new Error("No auth token provided");
        }

        const data = jwt.verify(authToken, process.env.JWT_KEY);
        console.log("data :", data);
        console.log('data._id :', data._id);

        const task = new Task({
            title,
            content,
            userId: data._id,
            status,
        });

        await connectDb();
        const createdTask = await task.save();
        return NextResponse.json({
            message: "Created new task",
            task: createdTask,
        }, {
            status: 201,
        });

    } catch (error) {
        console.log(error);
        return getResponseMessage("Failed to create task", 500, false);
    }
}
