// here import some context hooks library
import { createContext, use } from "react";
import {
  userSettingAccessories,
  userSettingConfigProps,
} from "../../models/settingsModel.ts";

// declare Context custom hook for  accountSettings content with export
export const SettingsContext = createContext<
  userSettingAccessories | undefined
>(undefined);

export const SettingsConfigContext = createContext<
  userSettingConfigProps | undefined
>(undefined);

export const useSettingUserContext = (): any => {
  // declare usehook for passing data of userAccountsContext content
  const userAccountsContext: any = use(SettingsContext);
  if (!userAccountsContext) {
    throw new Error("useUserSetting must be used within a UserSettingProvider");
  }
  return userAccountsContext;
};

export const useUserSettingsConfigContext = (): any => {
  const userSettingsConfig: any = use(SettingsConfigContext);
  if (!userSettingsConfig) {
    throw new Error(
      "useUserSettingsConfigContext must be used within a UserSettingProvider"
    );
  }

  return userSettingsConfig;
};
