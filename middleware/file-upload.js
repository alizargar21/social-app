const multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const type = {
  "image/png": "png",
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
};

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = type[file.mimetype];
      cb(null, uuidv4() + "." + ext);
    },
  }),
  fileFilter: (req, file, cb) => {
    const isValid = !!type[file.mimetype];
    const err =    isValid ? null : new Error ('Invalid format')
    cb( err ,isValid)
  },
});

module.exports = fileUpload;
