// import mongoose library from database connections
import mongoose from "mongoose";

// create a database connection
const conn = async(uri)=>{

    // declare database connection path
    let connection = await mongoose.connect(uri,{dbName:'chatDB'});

    try {

        // check the connection
        if(connection){
            console.log('Database are connected successfully');
        }
        
    } catch (error) {
        console.log(`While error are not connect to the database :${error}`);
    }
}

// export database connection module
export {conn};