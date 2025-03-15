// here import specific library
import jwt from "jsonwebtoken";

// here define userSocketAuth middleware function
export const userSocketAuth = async (socket, next) => {
  // use trycatch
  try {
    // here was retrieve the token of user from header or cookie
    const userToken =
      socket.handshake.headers.cookie
        ?.split("; ")
        .find((row) => row.startsWith("access_userToken="))
        ?.split("=")[1] ||
      socket.handshake.headers["Authorization"]?.replace("Bearer ", "");

    //   here can check the condition of token
    if (!userToken) {
      return next(new Error("Unauthorized users token please login to access"));
    } else {
      // here was jwt token verify
      jwt.verify(userToken, process.env.JWT_ACCESS_SCKEY, (err, decoded) => {
        if (err) {
          return next(new Error("Invalid token"));
        } else {
          socket.user = decoded;
          next();
        }
      });
    }
  } catch (error) {
    return next(new Error("Authentication of user can failed"));
  }
};
