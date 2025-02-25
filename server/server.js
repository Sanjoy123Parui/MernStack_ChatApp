// here are import all libraries
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// here import all modules
import {
  express,
  cors,
  path,
  cluster,
  os,
  morgan,
  app,
  cookieParser,
  server,
  io,
} from "./src/connections/socketconnection.js";

import { corsOption } from "./src/lib/optionconfig.js";
import { checkError } from "./src/middlewares/errors.middleware.js";
// here import all routes
import { userSignupRouter } from "./src/routes/userSignup.route.js";
import { userprofileRouter } from "./src/routes/userProfile.route.js";
import { contactRouter } from "./src/routes/contact.route.js";
import { adminSignupRouter } from "./src/routes/adminSignup.route.js";
import { adminProfileRouter } from "./src/routes/adminProfile.route.js";
import { adminDashboardRouter } from "./src/routes/adminDashboard.route.js";
// import all namespace
import { chatsContent } from "./src/seeders/chats.js";

// import database path
import { databaseConnection } from "./src/config/conncectdb.js";

// here can check totalCPUs in os of load balancing with node cluster
const totalCPUs = os.cpus().length;

// there are declare port, server running for developement or production
const port = process.env.PORT || 5000;

// here check condition cluster primary
if (cluster.isPrimary) {
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
} else {
  // here are connect database
  databaseConnection(process.env.MONGODB_URI);

  //  use middlewares
  app.use(cors(corsOption));
  app.use(morgan("dev"));
  app.use(express.static("./src/public"));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  // check the rest api
  app.get("/", (req, res) => {
    const filePath = path.join(import.meta.dirname, "./src/public/index.html");
    res.sendFile(filePath);
  });

  // use all endpoints middlewares of routes
  app.use("/user/api", userSignupRouter);
  app.use("/user/api", userprofileRouter);
  app.use("/contact/api", contactRouter);
  app.use("/admin/api", adminSignupRouter);
  app.use("/admin/api", adminProfileRouter);
  app.use("/admin/dashboard/api", adminDashboardRouter);

  // use error middlewares
  app.use(checkError);

  // user all namespaces
  io.use(chatsContent());

  //  restart server
  server.listen(port, () => {
    console.log(`Server has been started at ${port}`);
  });
}
