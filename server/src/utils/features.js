import { accessUserToken, refreshUserToken, accessAdminToken, refreshAdminToken } from '../lib/generatedAuth.js';


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

        // there was save user refresh token into the database
        user.refresh_userToken = refresh_userToken;
        await user.save({ validateBeforeSave: false });

        return res.status(statusCode)
            .cookie('access_userToken', access_userToken, cookieOptions)
            .cookie('refresh_userToken', refresh_userToken, cookieOptions)
            .json({ message, access_userToken, refresh_userToken, _id:userId });

    }
    catch (error) {

        return res.status(500).json({ error });
    }


}



// define there sendAdminToken features function
const sendAdminToken = async (res, admin, statusCode, message) => {

    // user normal try-catch
    try {

        // there declare admin_id
        let adminId = admin._id;

        // there was declare admin access token and refresh token
        let access_adminToken = accessAdminToken(adminId);
        let refresh_adminToken = refreshAdminToken(adminId);

        // there was save admin refresh token into the database
        admin.refresh_adminToken = refresh_adminToken;
        await admin.save({ validateBeforeSave: false });

        // admin token and refresh token access into the cookie
        return res.status(statusCode)
            .cookie('access_adminToken', access_adminToken, cookieOptions)
            .cookie('refresh_adminToken', refresh_adminToken, cookieOptions)
            .json({ message, access_adminToken, refresh_adminToken, _id:adminId });

    }
    catch (error) {

        return res.status(500).json({ error });

    }
}

// export features
export { 
    sendUserToken, 
    sendAdminToken, 
    cookieOptions 
};