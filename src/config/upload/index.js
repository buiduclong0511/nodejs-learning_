const multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype.includes("image")) {
      cb(null, './src/public/images');
    } else if (file.mimetype.includes("audio")) {
      cb(null, './src/public/audios');
    }
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(null, `${Date.now()}_${file.originalname}`)
  }
})
 
var upload = multer({ storage: storage, preservePath: true })

module.exports = upload;
