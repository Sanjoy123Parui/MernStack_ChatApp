import { useState } from "react";

// here was declare user toggle password custom hook
export const useUserTogglePassword = (defaultValue: any): any => {
  const [isTogglePassword, setIsTogglePassword] =
    useState<boolean>(defaultValue);
  const togglePasswordVisiblity = () => setIsTogglePassword(!isTogglePassword);
  return { isTogglePassword, togglePasswordVisiblity };
};

// here was declare user logout modal popup custom hook
export const useUserLogoutModal = (): any => {
  const [isLogoutModal, setIsLogoutModal] = useState<boolean>(false);
  const openLogoutModal = () => setIsLogoutModal(true);
  const closeLogoutModal = () => setIsLogoutModal(false);
  return { isLogoutModal, openLogoutModal, closeLogoutModal };
};
