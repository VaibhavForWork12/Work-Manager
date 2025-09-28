import { NextResponse } from "next/server";

export function GET( request, { params }){
    const {userId, postId} = params;
    console.log('User id', userId);
    console.log('post id', postId);
    return NextResponse.json({userId,postId});
}