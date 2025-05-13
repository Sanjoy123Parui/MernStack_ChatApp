import { useState } from "react";
import { userProfilesContents } from "../models/profileModel.ts";

// here was declare custom hooks with export of display profiles contents
export const useUserProfileContents = (): userProfilesContents => {
  // here declare alert message varibales of user profile modal
  const userRemoveAlertMessage: string = `Please confirmation to remove User Profile & Accounts ?`;

  // useState hooks are declare
  const [isUserProfileView, setIsUserProfileView] = useState<boolean>(false);
  const [isUserRemove, setIsUserRemove] = useState<boolean>(false);

  // define close and open profile data view
  const openUserProfile = () => setIsUserProfileView(true);
  const closeUserProfile = () => setIsUserProfileView(false);

  // define here open and close modal for remove user profile
  const openUserRemove = () => setIsUserRemove(true);
  const closeUserRemove = () => setIsUserRemove(false);

  return {
    userRemoveAlertMessage,
    isUserProfileView,
    isUserRemove,
    openUserProfile,
    closeUserProfile,
    openUserRemove,
    closeUserRemove,
  };
};
