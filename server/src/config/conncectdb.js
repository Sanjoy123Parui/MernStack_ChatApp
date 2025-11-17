// import mongoose library from database connections
import { mongoose } from "../connections/socketconnection.js";

// create a database connection
export const databaseConnection = async (uri) => {
  // declare database connection path
  let conn = await mongoose.connect(uri);

  try {
    // check the connection
    if (!conn) {
      console.log("Some issue are not connect to the database");
    } else {
      console.log("Database are connected successfully");
    }
  } catch (error) {
    console.log(`While error are not connect to the database :${error}`);
  }
};
