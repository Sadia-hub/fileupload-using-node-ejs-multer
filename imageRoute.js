const {imageUpload, insertImage} = require("./imageController")
const express = require("express")

const router = express.Router()

router.route("/").get(imageUpload).post(insertImage)

module.exports = router;