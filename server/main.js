// here import dotEnv lib and configure also
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// Consuming here importing from app.js all lib modules
import {
  express,
  cors,
  app,
  path,
  cluster,
  os,
  morgan,
  envMode,
  cookieParser,
  server,
} from "./src/config/app.js";
import { corsOption } from "./src/lib/optionconfig.js";
import { conn } from "./src/config/dbc.js";

// here import all routes
// import { userSignupRouter } from "./src/routes/usersignup.route.js";
// import { userprofileRouter } from "./src/routes/userProfile.route.js";
// import { contactRouter } from "./src/routes/contact.route.js";
// import { adminSignupRouter } from "./src/routes/adminSignup.route.js";
// import { adminProfileRouter } from "./src/routes/adminProfile.route.js";
// import { adminDashboardRouter } from "./src/routes/adminDashboard.route.js";

// here importing the all routes of endpoints for rest api
import { usersignupRouter } from "./src/routes/usersignup.route.js";

// Consuming the errorMiddlware importing here for globally error handle
// import { checkError } from "./src/middlewares/errors.middleware.js";
import { checkErrors } from "./src/middlewares/errors.middleware.js";

// here was declare variables of some specific configuration
const dbPath = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;
const totalCPUs = os.cpus().length;

// here check condidition for cluster handle when start server
if (cluster.isPrimary) {
  // defineing the loop for multithreads cluster
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  // database connectivity configure
  conn(dbPath);

  // here can declare middleware are use
  app.use(cors(corsOption));
  app.use(morgan("dev"));
  app.use(express.static("./src/public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  // declare base endpoints middleware which are testing for api can work at started
  app.get("/", (req, res) => {
    let filePath = path.join(import.meta.dirname, "./src/public/index.html");
    res.send(filePath);
  });

  // use all endpoints middlewares of routes
  // app.use("/user/api", userSignupRouter);
  // app.use("/user/api", userprofileRouter);
  // app.use("/contact/api", contactRouter);
  // app.use("/admin/api", adminSignupRouter);
  // app.use("/admin/api", adminProfileRouter);
  // app.use("/admin/dashboard/api", adminDashboardRouter);

  //here was handle middlewares are use of routes
  app.use("/usersignup/api", usersignupRouter);

  // here was handle error for use middleware
  // app.use(checkError);
  app.use(checkErrors);

  // server was restarting here
  server.listen(port, () => {
    console.log(`Server has been started at ${port} in ${envMode} Mode`);
  });
}
