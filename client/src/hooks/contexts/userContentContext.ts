import { createContext, use } from "react";
import {
  profileImagesCropItems,
  userChatsHeadingToggle,
} from "../../models/contentModel.ts";
import { groupsInfo } from "../../models/userModel.ts";

// declare createContext hook object with exporting

export const ImageProfileCropContext = createContext<
  profileImagesCropItems | undefined
>(undefined);

export const UserContentToggleContext = createContext<
  userChatsHeadingToggle | undefined
>(undefined);

export const GroupsContext = createContext<groupsInfo | undefined>(undefined);

// declare context custom hooks with exporting

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

export const useGroupsContext = (): any => {
  let isGroupscontent: any = use(GroupsContext);
  if (!isGroupscontent) {
    throw new Error("Groups context are not exist");
  }

  return isGroupscontent;
};
