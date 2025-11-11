import { createContext, use } from "react";
import {
  togglePasswordprops,
  profileImagesCropItems,
  userChatsHeadingToggle,
} from "../../models/contentModel.ts";

// declare createContext hook object with exporting

export const TogglePasswordContext = createContext<
  togglePasswordprops | undefined
>(undefined);

export const ImageProfileCropContext = createContext<
  profileImagesCropItems | undefined
>(undefined);

export const UserContentToggleContext = createContext<
  userChatsHeadingToggle | undefined
>(undefined);

// declare context custom hooks with exporting

export const useTogglePasswordContext = (): any => {
  let isTogglePswdContext: any = use(TogglePasswordContext);

  if (!isTogglePswdContext) {
    throw new Error("In this data are not must be provided");
  }

  return isTogglePswdContext;
};

export const useProfileImageContext = (): any => {
  let isImageContext: any = use(ImageProfileCropContext);
  if (!isImageContext) {
    throw new Error("In this data are not must be provided");
  }
  return isImageContext;
};

export const useUserChatContentToggleContext = (): any => {
  let isToggleOptioncontent: any = use(UserContentToggleContext);
  if (!isToggleOptioncontent) {
    throw new Error("In this context are not found");
  }
  return isToggleOptioncontent;
};
