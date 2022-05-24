const {imageUpload, insertImage} = require("./imageController")

router.route("/").get(imageUpload).post(insertImage)

module.exports = router;