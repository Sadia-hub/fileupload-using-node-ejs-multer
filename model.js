const mongoose = require("mongoose")

const imageModel = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is required"]
    },
    image:{
        type:String,
        required:[true, "Image is required"]
    }
})

module.exports = mongoose.model("Image",imageModel)