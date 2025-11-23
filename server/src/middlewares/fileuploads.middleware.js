//Consuming to the importing some modules & library
import multer from "multer";
import crypto from "crypto";
import { path } from "../config/app.js";

// there are define file upload with multer storage functionality
/* const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
}); */

// there for object of file uploads
/* export const uploadObj = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
}); */

// here declare avatarfileStorage path set and instance object of storage and also exporting
const avatarfileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/public/uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, function (err, bytesName) {
      const fn = bytesName.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

export const uploadAvatarobj = multer({ storage: avatarfileStorage });
