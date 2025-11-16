// // here are import all libraries
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// consuming to the import all modules from library of server root
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

// // here import all routes
// import { userSignupRouter } from "./src/routes/userSignup.route.js";
// import { userprofileRouter } from "./src/routes/userProfile.route.js";
// import { contactRouter } from "./src/routes/contact.route.js";
// import { adminSignupRouter } from "./src/routes/adminSignup.route.js";
// import { adminProfileRouter } from "./src/routes/adminProfile.route.js";
// import { adminDashboardRouter } from "./src/routes/adminDashboard.route.js";

import { checkError } from "./src/middlewares/errors.middleware.js";

// here was declare variables of some specific configuration
const totalCPUs = os.cpus().length;
const dbPath = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

// here check condition for cluster handle when start server
if (cluster.isPrimary) {
  // define loop for multithreads cluster
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  // here configure database connectivity
  conn(dbPath);

  // here can use all middlewares
  app.use(cors(corsOption));
  app.use(morgan("dev"));
  app.use(express.static("./src/.public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  // endpoints of middlware for test
  app.get("/", (req, res) => {
    const filePath = path.join(import.meta.dirname, "./src/public/index.html");
    res.send(filePath);
  });

  //declare all endpoints middlewares are use of routes
  // app.use("/user/api", userSignupRouter);
  // app.use("/user/api", userprofileRouter);
  // app.use("/contact/api", contactRouter);
  // app.use("/admin/api", adminSignupRouter);
  // app.use("/admin/api", adminProfileRouter);
  // app.use("/admin/dashboard/api", adminDashboardRouter);

  // here was handle error for use middleware
  app.use(checkError);

  server.listen(port, () => {
    console.log(`Server has been started at ${port} in ${envMode} Mode`);
  });
}
