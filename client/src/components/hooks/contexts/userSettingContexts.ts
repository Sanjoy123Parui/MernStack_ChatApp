// here import some context hooks library
import { createContext, use } from "react";
import { userSettingAccessories } from "../../models/settingsModel.ts";

// declare Context custom hook for  accountSettings content with export
export const SettingsContext = createContext<
  userSettingAccessories | undefined
>(undefined);

export const useSettingUserContext = (): any => {
  // declare usehook for passing data of userAccountsContext content
  const userAccountsContext: any = use(SettingsContext);
  if (!userAccountsContext) {
    throw new Error("useUserSetting must be used within a UserSettingProvider");
  }
  return userAccountsContext;
};
