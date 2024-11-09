import { body, check, validationResult } from "express-validator";

// here define user signup validations

// user register
const userRegisterValidator = () => [
    body("country").notEmpty().withMessage("Please required the country"),
    body("phone").notEmpty().withMessage("Please required the phone"),
    body("password").notEmpty().withMessage("Please required the password"),
    body("confirmPassword").notEmpty().withMessage("Please required the confirm password")
];

// user login 
const userLoginValidator = () => [
    body("phone").notEmpty().withMessage("Please required the phone"),
    body("password").notEmpty().withMessage("Please required the password")
];



// here define all user profile validations
const userProfileCreateValidator = () => [
    body("user_name").notEmpty().withMessage("Please required user name"),
    body("gender").notEmpty().withMessage("Please required gender"),
    body("dob").notEmpty().withMessage("Please required dob"),
    body("abouts").notEmpty().withMessage("Please required abouts"),
    check("avatar").custom((value, { req }) => {
        if (!req.file) { throw new Error("Please required file"); }
        return true;
    }).withMessage("Please required profile image")
];




// here define validation handler functionality
const validateHandler = (req, res, next) => {

    //declare error validation result
    let errors = validationResult(req);

    // here retrieve validation errorMessage
    let errorMessage = errors.array().map((error) => error.msg).join(",");

    // here can check validaton
    if (errors.isEmpty()) {

        return next();

    }
    else {

        return res.status(400).json({ msg: errorMessage });

    }

}


// here export all validatorwith validat handler
export {
    userRegisterValidator,
    userLoginValidator,
    userProfileCreateValidator,
    validateHandler
};