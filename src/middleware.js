import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'


// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    console.log('middleware executed !!!')

    const authToken = await request.cookies.get("authToken")?.value;

    if(  request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === '/api/users'){
      return ;
    }
    
    const loggedInNotAccessPaths = 
        request.nextUrl.pathname === "/login" ||  
        request.nextUrl.pathname === "/signup" ;

    if(loggedInNotAccessPaths){
      // accessing not secured routes
      if(authToken){
        return NextResponse.redirect(new URL('/profile/user', request.url))
      }
    }
    else {
        //accessing secured page route 
      if(!authToken){
        if(request.nextUrl.pathname === "/"){
          // allow access to homepage without login 
          return ;
        }

        if(request.nextUrl.pathname.startsWith('/api')){
          return NextResponse.json({
            message: "Acess denied !!",
            success: false,
          },{
            status:401,
          })
        }
        return NextResponse.redirect( new URL('/login', request.url))
      }
    }
    
    console.log(authToken)
  //return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/",
    "/login",
    "/signup",
    "/api/:path*",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",],
}