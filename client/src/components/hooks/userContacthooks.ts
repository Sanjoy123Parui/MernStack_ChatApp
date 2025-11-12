import { useState } from "react";
import { userContactActionProps } from "../models/userModel.ts";

// define custom hooks with exporting for user contact related

export const useUserContactActions = (): userContactActionProps => {
  const [isContactsAction, setIsContactsAction] = useState<boolean>(false);
  const showContacts = () => setIsContactsAction(true);
  const hideContacts = () => setIsContactsAction(false);

  return { isContactsAction, showContacts, hideContacts };
};
