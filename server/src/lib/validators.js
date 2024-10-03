// import  libraries of express-validator
import { body, validationResult, check, param } from "express-validator";
import { errorHandler } from '../utils/utility.js';

// there define to permorm all validators opreations


// user signup

// user register validator  
const userRegisterValidator = () => [

    body('country').notEmpty().withMessage("Country is required"),
    body('phone').notEmpty().withMessage("Phone is required"),
    body('password').notEmpty().withMessage("Password is required"),
    body('confirmPassword').notEmpty().withMessage("Confirm Password is required"),

];


//  user login validator 
const userLoginValidator = () => [

    body('phone').notEmpty().withMessage("Phone is required"),
    body('password').notEmpty().withMessage("Password is required")

];




// user profile

// user new profile validator
const userNewProfileValidator = () => [

    body('user_name').notEmpty().withMessage("User name is required"),
    body('dob').notEmpty().withMessage("Date of birth is required"),
    body('abouts').notEmpty().withMessage("Abouts is required"),
    check('avatar').custom((value, { req }) => {
        if (!req.file) {
            throw new Error('Avatar file is required');
        }
        // Additional checks if needed, for example file type or size
        return true;
    }),

];


// user profile view with particular id
const userViewProfileValidator = ()=>[

    param('userprofile_id').notEmpty().withMessage("User profile is required")

];



// here define validations handling function
const validatorHandling = (req, res, next) => {

    // declare error of payloads
    let error = validationResult(req);

    // declare errorMessage show 
    let errorMessage = error.array()
        .map((err) => err.msg)
        .join(", ");


    // check condition payload was empty or not
    if (error.isEmpty()) {
        return next();
    }
    else {
        return next(errorHandler(errorMessage, 400));
    }

}

// export validators
export { userRegisterValidator, userLoginValidator, userNewProfileValidator, userViewProfileValidator, validatorHandling };
console.log('Validations are worked successfully');