import { useState } from "react";
import { usercontactactions } from "../models/userModel.ts";

// here declare custom hook of userContactAction with exporting
export const useUserContactActions = (): usercontactactions => {
  const [isContactLists, setIsContactLists] = useState<boolean>(false);
  const showUserContacts = (): any => setIsContactLists(true);
  const hideUserContacts = (): any => setIsContactLists(false);

  return { isContactLists, showUserContacts, hideUserContacts };
};
