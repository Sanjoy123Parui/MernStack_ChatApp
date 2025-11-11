// import some specific hooks which are using for custom hooks in accounts settings
import { useState } from "react";
import {
  userNavbarMenuActions,
  userSettingAccessories,
  userSettingToggles,
} from "../models/settingsModel.ts";

// here was create custom hooks for userNavMenuActions and exporting
export const useUsernavMenuActions = (): userNavbarMenuActions => {
  const [isNavMenu, setIsNavMenu] = useState<boolean>(false);
  const handleNavMenuOpen = () => setIsNavMenu(true);
  const handleNavMenuClose = () => setIsNavMenu(false);
  return { isNavMenu, handleNavMenuOpen, handleNavMenuClose };
};

// here was create custom hooks for toggleAccountssettings and exporting
export const useToggleAccountSettings = (): userSettingAccessories => {
  const [isAccounts, setIsAccounts] = useState<boolean>(false);
  const showUserAccessories = () => setIsAccounts(true);
  const hideUserAccessories = () => setIsAccounts(false);
  return { isAccounts, showUserAccessories, hideUserAccessories };
};

// here was create custom hooks for userSettingsToggle and exporting
export const useSettingUserToggle = (): userSettingToggles => {
  const [isThemes, setIsThemes] = useState<boolean>(false);
  const handleThemes = () => setIsThemes((prev: any) => !prev);
  return { isThemes, handleThemes };
};
