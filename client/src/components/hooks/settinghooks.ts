// import some specific hooks which are using for custom hooks in accounts settings
import { useState, createContext, useContext } from "react";
import { userSettingContextProps } from "../models/accessModel.ts";

// declare createContext hook for accountSettings with export
export const SettingsContext = createContext<
  userSettingContextProps | undefined
>(undefined);

// here was create custom hooks for toggleAccountssettings
export const useToggleAccountSettings = (): userSettingContextProps => {
  // here declare useState hooks for user accounts accessories show
  const [isAccounts, setIsAccounts] = useState<boolean>(false);

  // here define function of show user accounts
  const showUserAccessories = () => {
    // setIsAccounts((prev) => !prev);
    setIsAccounts(true);
  };

  // here define function of hide user accounts
  const hideUserAccessories = () => {
    setIsAccounts(false);
  };

  return { isAccounts, showUserAccessories, hideUserAccessories };
};

// here was define custom hooks of useContext in User accounts
export const useSettingUserContext = () => {
  const userAccountsContext: any = useContext(SettingsContext);
  if (!userAccountsContext) {
    throw new Error("useUserSetting must be used within a UserSettingProvider");
  }
  return userAccountsContext;
};
