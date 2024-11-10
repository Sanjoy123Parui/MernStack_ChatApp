import { body, check, validationResult } from "express-validator";

// here define all validations

// admin validations

// admin register vaidator
const adminRegisterValidator = () => [
    body("country").notEmpty().withMessage("Please required the country"),
    body("phone").notEmpty().withMessage("Please required the phone"),
    body("password").notEmpty().withMessage("Please required the password"),
    body("confirmPassword").notEmpty().withMessage("Please required the confirm password")
];

// admin login vaidator
const adminLoginValidator = () => [
    body("phone").notEmpty().withMessage("Please required the phone"),
    body("password").notEmpty().withMessage("Please required the password")
];

// admin create profile vaidator
const adminProfileCreateValidator = () => [
    body("admin_name").notEmpty().withMessage("Please required admin name"),
    body("gender").notEmpty().withMessage("Please required gender"),
    body("dob").notEmpty().withMessage("Please required dob"),
    body("abouts").notEmpty().withMessage("Please required abouts"),
    check("avatar").custom((value, { req }) => {
        if (!req.file) {
            return false;
        }
        return true;
    }).withMessage("Please required profile images")
];

// admin update profile images validator
const adminProfileImageUpdateValidator = () => [
    check("avatar").custom((value, { req }) => {
        if (!req.file) {
            return false;
        }
        return true;
    }).withMessage("Please required profile images")
];

// admin update profile validator
const adminProfileUpdateValidator = () => [
    body("admin_name").notEmpty().withMessage("Please required admin name"),
    body("gender").notEmpty().withMessage("Please required gender"),
    body("dob").notEmpty().withMessage("Please required dob"),
    body("abouts").notEmpty().withMessage("Please required abouts")
];



// user validations

// user register validator
const userRegisterValidator = () => [
    body("country").notEmpty().withMessage("Please required the country"),
    body("phone").notEmpty().withMessage("Please required the phone"),
    body("password").notEmpty().withMessage("Please required the password"),
    body("confirmPassword").notEmpty().withMessage("Please required the confirm password")
];


// user login validator
const userLoginValidator = () => [
    body("phone").notEmpty().withMessage("Please required the phone"),
    body("password").notEmpty().withMessage("Please required the password")
];

// user create profile validator
const userProfileCreateValidator = () => [
    body("user_name").notEmpty().withMessage("Please required user name"),
    body("gender").notEmpty().withMessage("Please required gender"),
    body("dob").notEmpty().withMessage("Please required dob"),
    body("abouts").notEmpty().withMessage("Please required abouts"),
    check("avatar").custom((value, { req }) => {
        if (!req.file) {
            return false;
        }
        return true;
    }).withMessage("Please required profile images")
];

// user update profile image validator
const userProfileImageUpdateValidator = () => [
    check("avatar").custom((value, { req }) => {
        if (!req.file) {
            return false;
        }
        return true;
    }).withMessage("Please required profile images")
];

// user update profile validator
const userProfileUpdateValidator = () => [
    body("user_name").notEmpty().withMessage("Please required user name"),
    body("gender").notEmpty().withMessage("Please required gender"),
    body("dob").notEmpty().withMessage("Please required dob"),
    body("abouts").notEmpty().withMessage("Please required abouts")
];

// user add contact validator
const addContactValidator = () => [
    body("contact_phone").notEmpty().withMessage("Please required contact phone"),
    body("contact_name").notEmpty().withMessage("Please required contact name")
];

// user update contact validator
const updateContactValidator = ()=>[
    body("contact_phone").notEmpty().withMessage("Please required contact phone"),
    body("contact_name").notEmpty().withMessage("Please required contact_name")
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
    adminRegisterValidator,
    adminLoginValidator,
    adminProfileCreateValidator,
    adminProfileImageUpdateValidator,
    adminProfileUpdateValidator,
    userRegisterValidator,
    userLoginValidator,
    userProfileCreateValidator,
    userProfileImageUpdateValidator,
    userProfileUpdateValidator,
    addContactValidator,
    updateContactValidator,
    validateHandler
};