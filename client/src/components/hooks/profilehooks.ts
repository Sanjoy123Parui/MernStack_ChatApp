import { useState } from "react";
import { userProfilesContents } from "../models/profileModel.ts";

// here was declare custom hooks with export of display profiles contents
export const useUserProfileContents = (): userProfilesContents => {
  // here declare alert message varibales of user profile modal
  const userRemoveAlertMessage: string = `Please confirmation to remove User Profile & Accounts ?`;
  // declare variable of update user profile heading
  const userProfileHeading: string = `Edit User Profiles`;

  // useState hooks are declare
  const [isUserProfileView, setIsUserProfileView] = useState<boolean>(false);
  const [isUserProfileEdit, setIsUserProfileEdit] = useState<boolean>(false);
  const [isUserRemove, setIsUserRemove] = useState<boolean>(false);

  // define close and open profile data view
  const openUserProfile = () => setIsUserProfileView(true);
  const closeUserProfile = () => setIsUserProfileView(false);

  // define function here open and close modal for edit user profile modal
  const openUserEdit = () => setIsUserProfileEdit(true);
  const closeUserEdit = () => setIsUserProfileEdit(false);

  // define function here open and close modal for remove user profile modal
  const openUserRemove = () => setIsUserRemove(true);
  const closeUserRemove = () => setIsUserRemove(false);

  return {
    userRemoveAlertMessage,
    userProfileHeading,
    isUserProfileView,
    isUserProfileEdit,
    isUserRemove,
    openUserProfile,
    closeUserProfile,
    openUserEdit,
    closeUserEdit,
    openUserRemove,
    closeUserRemove,
  };
};
