import { createContext, use } from "react";
import { userLogoutModalProps } from "../../models/signupModel.ts";

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
