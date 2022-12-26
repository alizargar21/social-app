import http from "./http-service"

export const createPost = (data)=> {
    return http.post("/posts/" , data)
}