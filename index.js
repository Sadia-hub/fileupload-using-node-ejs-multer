const express = require("express")
const multer = require("multer")
const fileStorage = require("./middleware")
const path= require("path")
const imageRouter = require("./imageRoute")


const app= express();
require("ejs");


 app.set("view engine","ejs")



app.use("/",express.static(path.resolve("./images")))

app.use(multer({
    storage:fileStorage
}).single("image"))



// app.use(express.static("./"))
app.use(express.urlencoded({extended:true}))
app.use(imageRouter)

app.get("*",(req, res)=>{
    res.status(404).send("Page Not Found")
})

require("mongoose").connect("mongodb://127.0.0.1:27017/imageupload")
.then(()=>{
    app.listen(27017,()=>{
        console.log("listening to port 27017")
    })
}).catch((err)=>{
    console.log(err)
})