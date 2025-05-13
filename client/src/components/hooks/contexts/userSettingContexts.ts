// here import some context hooks library
import { createContext, useContext } from "react";
import { userSettingContextProps } from "../../models/accessModel.ts";

// declare Context custom hook for  accountSettings content with export
export const SettingsContext = createContext<
  userSettingContextProps | undefined
>(undefined);

export const useSettingUserContext = (): any => {
  const userAccountsContext: any = useContext(SettingsContext);
  if (!userAccountsContext) {
    throw new Error("useUserSetting must be used within a UserSettingProvider");
  }
  return userAccountsContext;
};
