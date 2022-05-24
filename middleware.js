const multer = require("multer")

//body parses only parse text based data. Image would be in binary form, so we need to use multer
//image is passed because it is the name of the input of type file in the ejs file names imageupload

//destination: before using dest, multer give us an array of buffer. But when we give it dest field it would store the 
//file at somepath of following format: image/ajflfi0df9d

const fileStorage = multer.diskStorage({
    destination:(req, file, callback)=>{
        callback(null, "./images")
    },
    filename:(req, file, callback)=>{
        callback(null, Date.now()+"_"+file.originalname)
    }
});

module.exports = fileStorage;
