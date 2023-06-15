const multer = require("multer");
const path = require('path')

const destination = path.resolve("temp")
const filename = (req, file, cb) => {
     cb(null,`${Date.now()*Math.random()}_${file.originalname}`)
}
const storage =multer.diskStorage ({
    destination, filename
    })
const upload = multer({storage})

module.exports = upload;