// there are import all libraries and modules
import dotenv from "dotenv";
dotenv.config({ path: './.env' });
import express from "express";
import cors from "cors";
import cookiParser from "cookie-parser";

import { checkError } from './src/middlewares/errors.middleware.js';
import { userSignupRouter } from './src/routes/userSignup.route.js';
import { userprofileRouter } from './src/routes/userProfile.route.js';
import { contactRouter } from './src/routes/contact.route.js';
import { adminSignupRouter } from './src/routes/adiminSignup.route.js';
import { adminProfileRouter } from './src/routes/adminProfile.route.js';

import { conn } from './src/config/conncectdb.js';

// there are connect database
conn(process.env.MONGODB_URI);

// there are declare port and middleware object
const port = process.env.PORT || 5000;
const app = express();

// there are use middlewares
app.use(cors({ origin: "*" }));
app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookiParser());


// check the rest api 
app.get('/', (req, res) => {
    res.sendFile('./src/public/index.html');
});

// there are use all endpoints of middleware
app.use('/user/api', userSignupRouter);
app.use('/user/api', userprofileRouter);
app.use('/contact/api', contactRouter);
app.use('/admin/api', adminSignupRouter);
app.use('/admin/api', adminProfileRouter);

// there are use error middlewares 
app.use(checkError);

// there was listen server and restart
app.listen(port, () => {
    console.log(`Server has been started at : ${port}`);
});