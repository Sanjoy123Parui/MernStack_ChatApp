// Consuming to the importing some modules & lib for using in userprofile routes
import { express } from "../config/app.js";
import {
  userprofilefetchAll,
  userprofileView,
  userNewprofile,
  userprofileChangeImage,
  userprofileDelete,
  userprofileUpdate,
} from "../controllers/userprofile.controller.js";
import { badRequestError, notfoundError } from "../utils/utility.js";
import {
  userNewProfileValidators,
  userprofileUpdateValidators,
} from "../validators/userprofile.validator.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";
import { uploadAvatarobj } from "../middlewares/fileuploads.middleware.js";
import { validateHandler } from "../middlewares/validator.middleware.js";
import { userCheckAuth } from "../middlewares/auth.middleware.js";
import { removeUserAccount } from "../utils/features.js";

// delare instance object of userprofile routes
const userprofileRouter = express.Router();

// here define all are the userprofile routes endpoints methods
// here define  user profile fetch all data routes with get method
userprofileRouter.route("/").get(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    //  destruct data for userprofile controller
    const { userprofileInfo, data } = await userprofilefetchAll(req);
    if (userprofileInfo.length > 0) {
      return res.status(200).json({ success: true, data });
    } else {
      return next(notfoundError("No more data has found"));
    }
  })
);

// here define specific user profile _id data routes who was authenticate with get method
userprofileRouter.route("/view-profile").get(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    // here destructing userprofile controller
    const { userprofileInfo, data } = await userprofileView(req);

    if (!userprofileInfo) {
      return next(notfoundError("No more user are found"));
    } else {
      return res.status(200).json({ success: true, data: data });
    }
  })
);

// here define new user profile creates routes with post method
userprofileRouter.route("/create-profile").post(
  userCheckAuth,
  uploadAvatarobj.single("avatar"),
  validateHandler(userNewProfileValidators),
  trycatchWrapper(async (req, res, next) => {
    // destruct user profile controller data
    const { userProfiledata, fileSize } = await userNewprofile(req);

    if (!userProfiledata) {
      return next(badRequestError("User profile are not created"));
    } else {
      return res.status(201).send({
        success: true,
        msg: "New profile created successfully",
        fileSize: fileSize,
        data: userProfiledata,
      });
    }
  })
);

// here define new user profile change pic routes with post method
userprofileRouter.route("/change-pic/:_id").post(
  userCheckAuth,
  uploadAvatarobj.single("avatar"),
  trycatchWrapper(async (req, res, next) => {
    // destructing data
    const { profileChangePic } = await userprofileChangeImage(req);

    if (!profileChangePic.acknowledged) {
      return next(badRequestError("Profile image can not changed"));
    } else {
      return res
        .status(200)
        .json({ success: true, msg: "Your profile pic has been changed" });
    }
  })
);

// here define remove user accounts routes with delete method
userprofileRouter.route("/remove-user").delete(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    // destruct data
    await userprofileDelete(req);

    req.payloadMsg = {
      statusCode: 200,
      message: "Account has been deleted succesfully",
    };

    return removeUserAccount(req, res, next);
  })
);

// here define new user profile update routes with all method like PUT || PATCH
userprofileRouter.route("/change-profile/:_id").all(
  userCheckAuth,
  validateHandler(userprofileUpdateValidators),
  trycatchWrapper(async (req, res, next) => {
    if (req.method === "PUT" || req.method === "PATHC") {
      // destructing data
      const { userInfo } = await userprofileUpdate(req);
      // check condition for update data of user profile
      if (!(userInfo.matchedCount && userInfo.modifiedCount)) {
        return next(badRequestError("User profile can't updated"));
      } else {
        return res.status(200).json({
          success: true,
          msg: "Your profile was updated successfully",
        });
      }
    } else {
      next(badRequestError("Wrong Cridential"));
    }
  })
);

// exporting userprofile routes
export { userprofileRouter };
