// here import all modules and libraies of packages
import { express } from '../connections/socketconnection.js';

import {
    userRegister,
    userLogin,
    userRecover,
    userLogout,
    userAccountdelete,
    userChangePassword
} from '../controllers/userSingup.controller.js';

import {
    userRegisterValidator,
    userLoginValidator,
    userChangePassValidator
} from '../validators/validator.js';

import { userCheckAuth } from '../middlewares/auth.middleware.js';
import { validateHandler } from '../middlewares/validator.middleware.js';


const userSignupRouter = express.Router();

// there are define all user signup router endpoint

// userRegister end-point router with post
userSignupRouter.route('/signup/register').post(
    validateHandler(userRegisterValidator),
    userRegister
);

// userLogin end-point router with post
userSignupRouter.route('/signup/login').post(
    validateHandler(userLoginValidator),
    userLogin
);

// user recover authorization end-point router with post
userSignupRouter.route('/signup/recover/user').post(
    userRecover
);

// userLogout end-point router with post
userSignupRouter.route('/signup/logout').post(
    userCheckAuth,
    userLogout
);


// userAccount delete end-point router with delete
userSignupRouter.route('/signup/remove/:user_Id').delete(
    userAccountdelete
);


// userChangePassword end-point router with all
userSignupRouter.route('/signup/password/:user_Id').all(
    validateHandler(userChangePassValidator),
    userChangePassword
);

// export user signup router
export { userSignupRouter };