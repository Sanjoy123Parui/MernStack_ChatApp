// here import some context hooks library
import { createContext, use } from "react";
import { userSettingContextProps } from "../../models/accessModel.ts";

// declare Context custom hook for  accountSettings content with export
export const SettingsContext = createContext<
  userSettingContextProps | undefined
>(undefined);

export const useSettingUserContext = (): any => {
  // declare usehook for passing data of userAccountsContext content
  const userAccountsContext: any = use(SettingsContext);
  if (!userAccountsContext) {
    throw new Error("useUserSetting must be used within a UserSettingProvider");
  }
  return userAccountsContext;
};
