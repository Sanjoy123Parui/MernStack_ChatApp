// import multer
import multer from "multer";

// there are define file upload with multer storage functionality
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// there for object of file uploads
export const uploadObj = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});
