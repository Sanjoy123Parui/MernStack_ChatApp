// here are import all libraries
import dotenv from "dotenv";
dotenv.config({ path: './.env' });
import cors from "cors";

// here import all modules
import { express, app, cookieParser, server } from './src/connections/socketconnection.js';
import { corsOption } from './src/lib/optionconfig.js';
import { checkError } from './src/middlewares/errors.middleware.js';
import { userSignupRouter } from './src/routes/userSignup.route.js';
import { userprofileRouter } from './src/routes/userProfile.route.js';
import { contactRouter } from './src/routes/contact.route.js';
import { adminSignupRouter } from './src/routes/adminSignup.route.js';
import { adminProfileRouter } from './src/routes/adminProfile.route.js';
import { conn } from './src/config/conncectdb.js';


// here are connect database
conn(process.env.MONGODB_URI);

// there are declare port, server running for developement or production
const port = process.env.PORT || 5000;

//  use middlewares
app.use(cors(corsOption));
app.use(express.static('./src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


// check the rest api
app.get('/', (req, res) => {
    res.sendFile('./src/public/index.html');
});


// use all endpoints middlewares of routes
app.use('/user/api', userSignupRouter);
app.use('/user/api', userprofileRouter);
app.use('/contact/api', contactRouter);
app.use('/admin/api', adminSignupRouter);
app.use('/admin/api', adminProfileRouter);

// use error middlewares
app.use(checkError);

//  restart server
server.listen(port, () => {

    console.log(`Server has been started at ${port}`);

});