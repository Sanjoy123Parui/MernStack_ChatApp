import { createContext, use } from "react";
import {
  profilesContents,
  profileFormProps,
  editProfileFormprops,
} from "../../models/profileModel.ts";

// here was create context and create also custom hook for useContext hook of user profile view
export const UserProfileContext = createContext<profilesContents | undefined>(
  undefined
);

// export and declare custom hook of user profile view context
export const useUserProfileContexts = (): any => {
  // declare usehook for passing data of userViewProfile content
  const userViewProfile: any = use(UserProfileContext);
  // here was check context data
  if (!userViewProfile) {
    throw new Error("useUserProfileContext custom hooks are not worked");
  }
  return userViewProfile;
};

// here was create context and create also custom hook for use hook of user profile create
export const UserCreateProfileContext = createContext<
  profileFormProps | undefined
>(undefined);

// export and declare custom hook of user profile create context
export const useCreateUserContext = (): any => {
  // declare variables of user create profile context
  const userCreateprofiledata: any = use(UserCreateProfileContext);

  // here check condition of context data
  if (!userCreateprofiledata) {
    throw new Error("An error occured");
  }

  return userCreateprofiledata;
};

// here was declare and export a createContext hook for update user profile
export const UpdateProfileUserContext = createContext<
  editProfileFormprops | undefined
>(undefined);

// export const useUpdateUserProfileContext custom hook for update user profile operations
export const useUpdateUserProfileContext = (): any => {
  // declare variables of user update profile context
  const userProfileUpdate: any = use(UpdateProfileUserContext);

  // check condition
  if (!userProfileUpdate) {
    throw new Error("An error occured");
  }

  return userProfileUpdate;
};
