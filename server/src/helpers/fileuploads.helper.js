// there are import cloudinary and fs
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// define filepath of cloudinary and uploads the path functionality
const uploadFiles = async (filePath) => {

    // configuration of cloudinary
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    // normal use try-catch
    try {

        // declare filepath
        let result = await cloudinary.uploader.upload(filePath);
        fs.unlinkSync(filePath);
        return result;
    }
    catch (error) {
        fs.unlinkSync(filePath);
        return null
    }

}

// export file uploads helper
export { uploadFiles };
console.log('File uploads helper is worked');