import { createContext, use } from "react";
import {
  togglePasswordprops,
  userLogoutModalProps,
} from "../../models/signupModel.ts";

// here was custom hooks of useContext and create context for defined values and it can export

export const UserTogglepasswordContext = createContext<
  togglePasswordprops | undefined
>(undefined);

export const UserLogoutContext = createContext<
  userLogoutModalProps | undefined
>(undefined);

// declare custom hook of useToggleUserPassword
export const useToggleUserPasswordContext = (): any => {
  // declare usehook for passing data of user toggle password content
  const userTogglePassword: any = use(UserTogglepasswordContext);

  if (!userTogglePassword) {
    throw new Error(
      `User toggle password must be used within a UserSignupProvider`
    );
  }
  return userTogglePassword;
};

// declare custom hook of useUserlogoutModalContext
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
