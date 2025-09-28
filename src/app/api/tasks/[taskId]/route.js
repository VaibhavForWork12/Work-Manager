//api/task/{taskId}
import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";



export async function GET(request,{params}){
    await connectDb();
    const {taskId} = params;
    try {
        const task = await Task.findById(taskId)
        return NextResponse.json(task);
    } catch (error) {
        console.log(error)
        return getResponseMessage("Not Found task by taskId", 404 , false);
    }

}

export async function PUT(request,{params}){
    try {
        const { taskId } = params;
        const { title, content ,status} = await request.json();

        let task = await Task.findById(taskId);
        
        task.title = title;
        task.content = content;
        task.status = status;

        const updatedTask = await task.save()
        return NextResponse.json(updatedTask)

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Failed to update data!!",
            success: false,
        }, { status: 500 });
    }
}


export async function DELETE(request,{params}){
    const {taskId} = params;
    try {
        await connectDb();
        const result = await Task.deleteOne({_id: taskId });
        if(result.deletedCount === 0){
            return getResponseMessage("Task not found", 404, false)
        }
        return getResponseMessage("Task deleted", 200 , true)
    } catch (error) {
        console.log(error)
        return getResponseMessage("Failed to delete the task", 500, false)
    }
}