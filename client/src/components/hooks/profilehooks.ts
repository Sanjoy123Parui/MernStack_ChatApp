import { useState } from "react";
import { userProfilesContents } from "../models/profileModel.ts";

// here was declare custom hooks with export of display profiles contents
export const useUserProfileContents = (): userProfilesContents => {
  const [isUserProfileView, setIsUserProfileView] = useState<boolean>(false);
  // define close and open profile data view
  const openUserProfile = () => setIsUserProfileView(true);
  const closeUserProfile = () => setIsUserProfileView(false);
  return { isUserProfileView, openUserProfile, closeUserProfile };
};
