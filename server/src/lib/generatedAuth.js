// there import jwt library packages
import jwt from "jsonwebtoken";

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

// there are define admin access token functionality
export const accessAdminToken = (admin) => {
  // there are declare jwt accessToken for admin
  let accessAdmin = jwt.sign({ _id: admin._id }, process.env.JWT_ACCESS_SCKEY, {
    expiresIn: process.env.EXP_ACCESS_TOKEN,
  });

  return accessAdmin;
};

// there are define admin refresh token functionality
export const refreshAdminToken = (admin) => {
  // there are declare jwt refreshtoken for admin
  let refreshAdmin = jwt.sign(
    { _id: admin._id },
    process.env.JWT_REFRESH_SCKEY,
    { expiresIn: process.env.EXP_REFRESH_TOKEN }
  );

  return refreshAdmin;
};
