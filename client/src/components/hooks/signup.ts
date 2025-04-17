import { useState } from "react";

// here was declare user toggle password custom hook
export const useUserTogglePassword = (defaultValue: any): any => {
  const [isTogglePassword, setIsTogglePassword] =
    useState<boolean>(defaultValue);

  const togglePasswordVisiblity = () => setIsTogglePassword(!isTogglePassword);

  return { isTogglePassword, togglePasswordVisiblity };
};
