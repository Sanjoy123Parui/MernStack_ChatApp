import { useState } from "react";
import { userLogoutModalProps } from "../models/userModel.ts";

// here was declare user toggle password custom hook
export const useUserTogglePassword = (defaultValue: any): any => {
  const [isTogglePassword, setIsTogglePassword] =
    useState<boolean>(defaultValue);
  const togglePasswordVisiblity = () => setIsTogglePassword(!isTogglePassword);
  return { isTogglePassword, togglePasswordVisiblity };
};

// here was declare user logout modal popup custom hook
export const useUserLogoutModal = (): userLogoutModalProps => {
  // here declare useState hooks
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  // define function for logout modal open
  const openLogoutModal = () => setIsLogoutModal(true);
  // define function for logout modal close
  const closeLogoutModal = () => setIsLogoutModal(false);
  return { isLogoutModal, openLogoutModal, closeLogoutModal };
};
