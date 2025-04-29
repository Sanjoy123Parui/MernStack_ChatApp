import { createContext, useContext } from "react";
import { userLogoutModalProps } from "../../models/userModel.ts";

// here was custom hooks of useContext and create context for defined values and it can export
export const UserLogoutContext = createContext<
  userLogoutModalProps | undefined
>(undefined);

export const useUserLogoutModalContext = (): any => {
  const userLogoutModal: any = useContext(UserLogoutContext);
  if (!userLogoutModal) {
    throw new Error(
      "userUserLogoutModalContext must be used within a UserSignupProvider"
    );
  }
  return userLogoutModal;
};
