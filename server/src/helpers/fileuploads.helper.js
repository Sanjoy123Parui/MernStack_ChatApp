// Consuming to the importing some modules & lib of helper
// import { v2 as cloudinary } from "cloudinary";
import { fs } from "../config/app.js";
import { badRequestError } from "../utils/utility.js";

// define filepath of cloudinary and uploads the path functionality
/* export const uploadFiles = async (filePath) => {

    // configuration of cloudinary
    // cloudinary.config({
    //     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    //     api_key: process.env.CLOUDINARY_API_KEY,
    //     api_secret: process.env.CLOUDINARY_API_SECRET
    // });



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

} */

// here define function for handling baseurl path & also exporting
export const baseUrlPath = () => {
  let baseUrl = `http://localhost:${process.env.PORT}/`;
  return { baseUrl };
};

// here define & exporting for handle fileConsuming function
export const uploadfilesPath = async (fullPath) => {
  const fileSize = await new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(fullPath);
    let total = 0;
    readStream.on("data", (chunk) => (total += chunk.length));
    readStream.on("end", () => resolve(total));
    readStream.on("error", (err) =>
      reject(badRequestError(`File read error:${err}`))
    );
  });

  return { fileSize };
};
