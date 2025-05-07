// import some specific hooks which are using for custom hooks in accounts settings
import { useState } from "react";
import {
  userSettingContextProps,
  userRemoveAccountProps,
} from "../models/accessModel.ts";

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

// here was declare and export custom hooks of useContext in user remove accounts modal
export const useUserRemoveAccounts = (): userRemoveAccountProps => {
  // here declare alert message varibales of user account modal
  let userAccountAlertMessage: string = `Are you confirm to Remove Account?`;

  // here declare useState hooks for user remove account modal
  const [isUserRemoveAccount, setIsUserRemoveAccount] =
    useState<boolean>(false);

  // here define function of show and hide modal
  const showUserAccountRemoveModal = () => setIsUserRemoveAccount(true);
  const hideUserAccountRemoveModal = () => setIsUserRemoveAccount(false);

  return {
    userAccountAlertMessage,
    isUserRemoveAccount,
    showUserAccountRemoveModal,
    hideUserAccountRemoveModal,
  };
};
