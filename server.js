const express = require("express")
const app = express()
const postsRoutes = require('./routes/posts-routes')
app.use(postsRoutes)



//error must be first argument
app.use((error , req , res ,next)=>{
    if(res.headerSet) {
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message : error.message || "Unknown Error"})
})
app.listen(5000)