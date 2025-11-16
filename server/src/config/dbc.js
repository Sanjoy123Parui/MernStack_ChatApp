// consumint importing from libraries to the database connectivity
import { mongoose } from "./app.js";

// declare with exporting database connection
export const conn = async (dbURI) => {
  // declare variable of databsase path connectivity
  const dbPath = await mongoose.connect(dbURI);

  try {
    // check condition
    if (!dbPath) {
      console.log("Some issue are not connect to the database");
    } else {
      console.log("Database are connected successfully");
    }
  } catch (error) {
    console.log(`While error are not connect to the database :${error}`);
  }
};
