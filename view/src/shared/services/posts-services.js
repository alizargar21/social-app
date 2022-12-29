
import http from "./http-service"

export const createPost = (data , headers = {})=> {
    return http.post("/posts/" , data , headers)
}

export const deletePost = (url , headers)=> {
    return http.delete(url , headers)
}