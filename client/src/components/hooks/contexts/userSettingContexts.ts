// here import some context hooks library
import { createContext, use } from "react";
import {
  userNavbarMenuActions,
  userSettingAccessories,
  userSettingToggles,
} from "../../models/settingsModel.ts";

// declare Context custom hook for user nav menu content with export
export const NavMenuBarContext = createContext<
  userNavbarMenuActions | undefined
>(undefined);

// declare Context custom hook for  accountSettings content with export
export const SettingsContext = createContext<
  userSettingAccessories | undefined
>(undefined);

export const SettingToggleContext = createContext<
  userSettingToggles | undefined
>(undefined);

export const useUserNavMenuContext = (): any => {
  const userNavContext: any = use(NavMenuBarContext);
  if (!userNavContext) {
    throw new Error(
      "useUserNavMenuContext must be used within a UserSettingProvider"
    );
  }
  return userNavContext;
};

export const useSettingUserContext = (): any => {
  // declare usehook for passing data of userAccountsContext content
  const userAccountsContext: any = use(SettingsContext);
  if (!userAccountsContext) {
    throw new Error("useUserSetting must be used within a UserSettingProvider");
  }
  return userAccountsContext;
};

export const useUserSettingToggleContext = (): any => {
  const userToggleSetting: any = use(SettingToggleContext);

  if (!userToggleSetting) {
    throw new Error(
      "userToggleSetting must be used within a UserSettingProvider"
    );
  }

  return userToggleSetting;
};
