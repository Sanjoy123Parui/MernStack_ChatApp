// there import jwt library packages
import jwt from "jsonwebtoken";

// there are define user access token functionality
const accessUserToken = (user) => {

    // there define jwt accessToken for user
    let accessUser = jwt.sign({ _id: user._id }, process.env.JWT_ACCESS_SCKEY, { expiresIn: process.env.EXP_ACCESS_TOKEN });

    return accessUser;
}


// there are define user refresh token functionality
const refreshUserToken = (user) => {

    // there define jwt refreshToken for user
    let refreshUser = jwt.sign({ _id: user._id }, process.env.JWT_REFRESH_SCKEY, { expiresIn: process.env.EXP_REFRESH_TOKEN });

    return refreshUser;

}


// there export all accessToken and refresh Token
export { accessUserToken, refreshUserToken };
console.log('Generated auth is worked successfully');