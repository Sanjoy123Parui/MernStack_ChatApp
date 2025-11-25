// Consuming to the importing generatedAuth modules & lib
import { jwt } from "../config/app.js";

// there are define user access token functionality
export const accessUserToken = (user) => {
  // there declare jwt accessToken for user
  let accessUser = jwt.sign({ _id: user._id }, process.env.JWT_ACCESS_SCKEY, {
    expiresIn: process.env.EXP_ACCESS_TOKEN,
  });

  return accessUser;
};

// there are define user refresh token functionality
export const refreshUserToken = (user) => {
  // there declare jwt refreshToken for user
  let refreshUser = jwt.sign({ _id: user._id }, process.env.JWT_REFRESH_SCKEY, {
    expiresIn: process.env.EXP_REFRESH_TOKEN,
  });

  return refreshUser;
};
