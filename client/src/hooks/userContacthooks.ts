import { useState } from "react";
import { userContactActionProps } from "../models/userModel.ts";

// define custom hooks with exporting for user contact related

export const useUserContactActions = (): userContactActionProps => {
  const [isContactsAction, setIsContactsAction] = useState<boolean>(false);
  const [isContactProfile, setIsContactProfile] = useState<boolean>(false);
  const showContacts = () => setIsContactsAction(true);
  const hideContacts = () => setIsContactsAction(false);
  const showContactProfile = () => setIsContactProfile(true);
  const hideContactProfile = () => setIsContactProfile(false);

  return {
    isContactsAction,
    isContactProfile,
    showContacts,
    hideContacts,
    showContactProfile,
    hideContactProfile,
  };
};
