const HttpError = require("../models/http-model")

const users = [{
    name : "ali",
    id : "u1",
    email : "test@info.com",
    password : "1111"
}]
const getUsers =((req, res, next) => {
    res.json({users : users})
})
 const login = ((req, res, next) => {
    const {email , password} = req.body

    const validUser = users.find(user => user.email === email)
    if(!validUser|| validUser.password !== password ) {
        throw new HttpError("Not a Valid User" , 401)
    } else {
    res.json({message : "Logged IN !!!"})
    }
})
const signup = ((req, res, next) => {
     const {email ,name , password} = req.body
     
        const createdUser = {
            name , email , password
        }
        users.push(createdUser)
        res.status(201).json({user : createdUser})
})

exports.getUsers = getUsers
exports.login = login
exports.signup = signup