import { httpAxios } from "@/helper/httpHelper";

export async function SignUp(user){
    const result = await httpAxios.post("/api/users", user).then((response)=> response.data);

    return result;
}

export async function login(LoginData){
    const result = await httpAxios.post("/api/login",LoginData).then((response)=>response.data);
    return result;
}
/*
        export async function currentUser(LoginData){
         const result = await httpAxios.post("/api/current").then((response)=>response.data);
        return result;
    }
 */
    export async function currentUser() {
      try {
        const authToken = document.cookie.split('; ').find(row => row.startsWith('authToken= '))
        if(!authToken){
          // if no authToken present then it will send null
          return null;
        }
        const result = await httpAxios.get("/api/current");
        return result.data;
      } catch (error) {
        throw error;
      }
    }

    //Logout api
    
export async function logout(LoginData){
  const result = await httpAxios.post("/api/logout",LoginData).then((response)=>response.data);
  return result;
}
    