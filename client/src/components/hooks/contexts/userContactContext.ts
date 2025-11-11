import { use, createContext } from "react";
import { usercontactactions } from "../../models/userModel.ts";

// declare CreateContext objects of user contact related with exporting
export const ContactActionContext = createContext<
  usercontactactions | undefined
>(undefined);

// declare custom hooks context for user contact related with exporting
export const useUserContactActionContext = (): any => {
  let userContactactiondata: any = use(ContactActionContext);
  if (!userContactactiondata) {
    throw new Error("User contact actions are not provided");
  }
  return userContactactiondata;
};
