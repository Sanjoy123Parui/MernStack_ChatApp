// Consuming to the importing some modules and lib of contact routes
import { express } from "../config/app.js";
import {
  contactList,
  contactProfile,
  contactSave,
  contactBlock,
  contactRemove,
  contactEdit,
} from "../controllers/contact.controller.js";
import {
  saveContactValidator,
  editContactValidator,
} from "../validators/contact.validator.js";
import { badRequestError, notfoundError } from "../utils/utility.js";
import { userCheckAuth } from "../middlewares/auth.middleware.js";
import { validateHandler } from "../middlewares/validator.middleware.js";
import { trycatchWrapper } from "../helpers/try-catch.helper.js";

// declare instance object of contact routes
const contactRouter = express.Router();

// define to handle all contact routes endpoints with method

// define contact list fetch routes endpoint with get method
contactRouter.route("/list-contact").get(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    // here destruct data for contactlist controller
    const { data } = await contactList(req);
    if (data.length === 0) {
      return next(notfoundError("No more data has found here"));
    } else {
      return res.status(200).json({ success: true, data: data });
    }
  })
);

// define contact profile fetch for specific user_id routes endpoint with get method
contactRouter.route("/contact-profile/:contact_id").get(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    // here destruct data of contactprofile controller
    const { data } = await contactProfile(req);

    if (!data) {
      return next(notfoundError("Contact user has not found"));
    } else {
      return res.status(200).json({ success: true, data: data });
    }
  })
);

// define contact save routes endpoint with post method
contactRouter.route("/add-contact").post(
  userCheckAuth,
  validateHandler(saveContactValidator),
  trycatchWrapper(async (req, res, next) => {
    // destruct data of  save contact controller
    const { addContact } = await contactSave(req);

    if (!addContact) {
      return next(badRequestError("Contact are not save"));
    } else {
      return res.status(201).send({
        success: true,
        msg: "Contact Added Successfully",
        data: addContact,
      });
    }
  })
);

// define contact block routes endpoint with post method
contactRouter.route("/blocked/:contact_id").post(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    // destruct contactEdit controller function
    const { contactInfo } = await contactBlock(req);
    if (!contactInfo.acknowledged) {
      return next(badRequestError("Unecessary user contact"));
    } else {
      return res.status(200).json({ success: true });
    }
  })
);

// define contact remove routes endpoint with delete method
contactRouter.route("/remove/:contact_id").delete(
  userCheckAuth,
  trycatchWrapper(async (req, res, next) => {
    // destruct remove contact controller function
    const { contactInfo } = await contactRemove(req);

    if (!contactInfo.deletedCount) {
      return next(badRequestError("Contact has already deleted"));
    } else {
      return res
        .status(200)
        .json({ success: true, msg: "Contact has deleted successfully" });
    }
  })
);

// define contact edit routes endpoint with all method (PUT || PATCH)
contactRouter.route("/edit/:contact_id").all(
  userCheckAuth,
  validateHandler(editContactValidator),
  trycatchWrapper(async (req, res, next) => {
    if (req.method === "PUT" || req.method === "PATCH") {
      // destruct contactEdit controller function
      const { contactInfo } = await contactEdit(req);

      if (contactInfo.matchedCount && contactInfo.modifiedCount) {
        return res
          .status(200)
          .json({ success: true, msg: "Contact has updated successfully" });
      } else {
        return next(badRequestError("Failed to the contact update"));
      }
    } else {
      return next(badRequestError("Wrong cridential for update contact"));
    }
  })
);

// export contact routes
export { contactRouter };
