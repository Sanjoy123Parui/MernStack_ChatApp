import { use, createContext } from "react";
import { userContactActionProps } from "../../models/userModel.ts";

// declare create context for all contact related with exporting

export const ContactActionContext = createContext<
  userContactActionProps | undefined
>(undefined);

// declare and exporting custom hooks context for user contacts

export const useUserContactActionContext = (): any => {
  const contactActiondata: any = use(ContactActionContext);
  if (!contactActiondata) {
    throw new Error("In this contact context custom hooks are not provided");
  }
  return contactActiondata;
};
