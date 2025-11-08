// import some specific hooks which are using for custom hooks in accounts settings
import { useState } from "react";
import {
  userSettingAccessories,
  userSettingConfigProps,
} from "../models/settingsModel.ts";

// here was create custom hooks for toggleAccountssettings and exporting
export const useToggleAccountSettings = (): userSettingAccessories => {
  const [isAccounts, setIsAccounts] = useState<boolean>(false);
  const showUserAccessories = () => setIsAccounts(true);
  const hideUserAccessories = () => setIsAccounts(false);
  return { isAccounts, showUserAccessories, hideUserAccessories };
};

// here was create custom hooks for UserSettingsConfiguration and exporting
export const useUserSettingsConfig = (): userSettingConfigProps => {
  const [isChatTheme, setIsChatTheme] = useState<boolean>(false);
  const handleUserThemes = () => setIsChatTheme((prev: any) => !prev);
  return { isChatTheme, handleUserThemes };
};
