//Consuming to the importing some modules & library
import multer from "multer";
import crypto from "crypto";
import { path } from "../config/app.js";

// here declare avatarfileStorage path set and instance object of storage and also exporting
const avatarfileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/uploads/");
  },
  filename: (req, file, cb) => {
    crypto.randomBytes(12, function (err, bytesName) {
      const fn = bytesName.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

export const uploadAvatarobj = multer({ storage: avatarfileStorage });
