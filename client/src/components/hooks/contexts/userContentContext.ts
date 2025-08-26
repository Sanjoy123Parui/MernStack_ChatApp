import { createContext, use } from "react";
import {
  togglePasswordprops,
  profileImagesCropItems,
} from "../../models/contentModel.ts";

// declare createContext hook object with exporting

export const TogglePasswordContext = createContext<
  togglePasswordprops | undefined
>(undefined);

export const ImageProfileCropContext = createContext<
  profileImagesCropItems | undefined
>(undefined);

// declare context custom hooks with exporting

export const useTogglePasswordContext = () => {
  let isTogglePswdContext: any = use(TogglePasswordContext);

  if (!isTogglePswdContext) {
    throw new Error("In this data are not must be provided");
  }

  return isTogglePswdContext;
};

export const useProfileImageContext = () => {
  let isImageContext: any = use(ImageProfileCropContext);
  if (!isImageContext) {
    throw new Error("In this data are not must be provided");
  }
  return isImageContext;
};
