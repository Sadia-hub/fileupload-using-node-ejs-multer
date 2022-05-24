const imageModel = require("./model")

const imageUpload = async (req, res) =>{

    try{
        const users = await imageModel.find({})
        if(users){
            return res.render("imageupload",{users})
        }
        
    }catch(err){
        console.log(err)
    }
    
}

const insertImage = async (req, res) =>{
    try{
        console.log(req.body)
        const user = await imageModel.create({...req.body, image:req.file.filename})
        //console.log(user)

        res.redirect("/")
    }catch(err){
        console.log(erro)
    }
    
}

module.exports = {
    imageUpload,
    insertImage
}