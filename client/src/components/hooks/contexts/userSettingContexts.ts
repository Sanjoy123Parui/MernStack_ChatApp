// here import some context hooks library
import { createContext, useContext } from "react";
import {
  userSettingContextProps,
  userRemoveAccountProps,
} from "../../models/accessModel.ts";

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

// here define with export custom hooks of useContexthook in User remove modal
export const UserAccountRemoveContext = createContext<
  userRemoveAccountProps | undefined
>(undefined);

export const useRemoveAccountModal = (): any => {
  const userAccountRemove: any = useContext(UserAccountRemoveContext);
  if (!userAccountRemove) {
    throw new Error(
      "useRemoveAccountModal must be used within a UserSettingProvider"
    );
  }
  return userAccountRemove;
};
