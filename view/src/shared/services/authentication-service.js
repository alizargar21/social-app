import http from "./http-service"

export const loginUser = async(data )=> {
   return await http.post("/users/login" , data )
}

export const signupUser = async(data ) => {
 return await  http.post("/users/signup" , data )
}