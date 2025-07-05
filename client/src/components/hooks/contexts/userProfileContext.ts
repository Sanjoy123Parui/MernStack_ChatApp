import { createContext, use } from "react";
import { userProfilesContents } from "../../models/profileModel.ts";

// here was create context and create also custom hook for useContext hook of user profile view
export const UserProfileContext = createContext<
  userProfilesContents | undefined
>(undefined);

export const useUserProfileContexts = (): any => {
  // declare usehook for passing data of userViewProfile content
  const userViewProfile: any = use(UserProfileContext);
  // here was check context data
  if (!userViewProfile) {
    throw new Error("useUserProfileContext custom hooks are not worked");
  }
  return userViewProfile;
};
