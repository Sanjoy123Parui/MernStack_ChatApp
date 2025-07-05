import { createContext, use } from "react";
import {
  userLogoutModalProps,
  userSignupFormprops,
  userSigninFormprops,
} from "../../models/signupModel.ts";

// here was custom hooks of useContext and create context for defined values and it can export
export const UserLogoutContext = createContext<
  userLogoutModalProps | undefined
>(undefined);

// declare custom hook of userlogoutModalContext
export const useUserLogoutModalContext = (): any => {
  // declare usehook for passing data of userLogoutModal content
  const userLogoutModal: any = use(UserLogoutContext);
  if (!userLogoutModal) {
    throw new Error(
      "userUserLogoutModalContext must be used within a UserSignupProvider"
    );
  }
  return userLogoutModal;
};

// declare createContext for UserSignupContext with export
export const UserSignupContext = createContext<userSignupFormprops | undefined>(
  undefined
);

// declare and export custom hook of useSignupUserContext
export const useSignupUserContext = (): any => {
  // declare usehook for passing data of userSignup content
  const userSignupformdata: any = use(UserSignupContext);

  if (!userSignupformdata) {
    throw new Error("An error occured");
  }

  return userSignupformdata;
};

// declare createContext for UserSigninContext with export
export const UserSigninContext = createContext<userSigninFormprops | undefined>(
  undefined
);

// declare and export custom hook of useSigninUserContext
export const useSigninUserContext = (): any => {
  // declare usehook for passing data of userSignin content
  const userSigninformdata: any = use(UserSigninContext);

  if (!userSigninformdata) {
    throw new Error("An error occured");
  }

  return userSigninformdata;
};
