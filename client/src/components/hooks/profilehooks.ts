import { useState } from "react";
import { userProfilesContents } from "../models/profileModel.ts";

// here was declare custom hooks with export of display profiles contents
export const useUserProfileContents = (): userProfilesContents => {
  // here declare alert message varibales of user profile modal
  const userProfileAlertMessage: string = `Please confirmation to the Remove Profile?`;

  // useState hooks are declare
  const [isUserProfileView, setIsUserProfileView] = useState<boolean>(false);
  const [isUserRemoveProfile, setIsUserRemoveProfile] =
    useState<boolean>(false);

  // define close and open profile data view
  const openUserProfile = () => setIsUserProfileView(true);
  const closeUserProfile = () => setIsUserProfileView(false);

  // define here open and close modal for remove user profile
  const openUserRemoveProfile = () => setIsUserRemoveProfile(true);
  const closeUserRemoveProfile = () => setIsUserRemoveProfile(false);

  return {
    userProfileAlertMessage,
    isUserProfileView,
    isUserRemoveProfile,
    openUserProfile,
    closeUserProfile,
    openUserRemoveProfile,
    closeUserRemoveProfile,
  };
};
