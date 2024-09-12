// there are import all libraries and modules
import dotenv from "dotenv";
dotenv.config({ path: './.env' });
import express from "express";
import cors from "cors";
import path from "path";
import { checkError } from "./src/middlewares/errors.middleware.js";
import { userSignupRouter } from "./src/routes/userSignup.route.js";
import { conn } from './src/config/conncectdb.js';
conn(process.env.MONGODB_URI);

// there are declare port and middleware object
const port = process.env.PORT || 5000;
const app = express();

// there are use middlewares
app.use(cors({ origin: "*" }));
app.use(express.static(path.join('./src/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// check the rest api 
app.get('/', (req, res) => {
    res.sendFile(path.join('./src/public/index.html'));
});

// there are use all endpoints of middleware
app.use('/usersignup/api', userSignupRouter);

// there are use error middlewares 
app.use(checkError);

// there was listen server and restart
app.listen(port, () => {
    console.log(`Server has been started at : ${port}`);
});