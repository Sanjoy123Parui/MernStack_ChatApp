// Consuming to the importing some lib or modules files
import { express } from "../config/app.js";
import { usersignupRegister } from "../controllers/usersignup.controller.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";

// here declare variables for instance object of usersignupRouter
const usersignupRouter = express.Router();

// here declare all routes endpoints of usersinupRouter operation related

// declare post method of usersignupRouter for register
usersignupRouter.route("/register").post(
  trycatchWrapper(async (req, res, next) => {
    let userRegister = await usersignupRegister(req);
    return res.status(201).send(userRegister);
  })
);

// exporting usersignupRouter
export { usersignupRouter };
