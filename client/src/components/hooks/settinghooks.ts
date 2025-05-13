// import some specific hooks which are using for custom hooks in accounts settings
import { useState } from "react";
import { userSettingContextProps } from "../models/accessModel.ts";

// here was create custom hooks for toggleAccountssettings
export const useToggleAccountSettings = (): userSettingContextProps => {
  // here declare useState hooks for user accounts accessories show
  const [isAccounts, setIsAccounts] = useState<boolean>(false);
  // here define function of show user accounts
  const showUserAccessories = () => setIsAccounts(true);
  // here define function of hide user accounts
  const hideUserAccessories = () => setIsAccounts(false);
  return { isAccounts, showUserAccessories, hideUserAccessories };
};
