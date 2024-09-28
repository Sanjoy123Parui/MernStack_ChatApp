import { accessUserToken, refreshUserToken } from '../lib/generatedAuth.js';


// declare options of cookie expiration
const cookieOptions = {
    httpOnly: true,
    secure: true
};



// define there sendUserToken features function
const sendUserToken = async (res, user, statusCode, message) => {

    // use normal try-catch
    try {

        // there are declare user_id 
        let userId = user._id;

        // there was declare user access token and refresh token
        let access_userToken = accessUserToken(userId);
        let refresh_userToken = refreshUserToken(userId);

        // there was save refresh token into the database
        user.refresh_userToken = refresh_userToken;
        await user.save({ validateBeforeSave: false });

        return res.status(statusCode)
            .cookie('access_userToken', access_userToken, cookieOptions)
            .cookie('refresh_userToken', refresh_userToken, cookieOptions)
            .json({ message, access_userToken, refresh_userToken });

    }
    catch (error) {

        return res.status(500).json({ error });
    }


}



// define there sendAdminToken features function
const sendAdminToken = (res, admin, statusCode, message) => {

    // there was verified token
    // let verifiedAdminToken = jwt.sign({ _id: admin._id }, process.env.JWT_SCKEY);

    // return res.status(statusCode).cookie('adminToken', verifiedAdminToken, cookieOptions).json({ message });

}

// export features
export { sendUserToken, sendAdminToken, cookieOptions };

console.log('Auth features is worked successfully');
