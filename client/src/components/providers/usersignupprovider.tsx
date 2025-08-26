import { UserLogoutContext } from "../hooks/contexts/userSignupContext.ts";

import { useUserLogoutModal } from "../hooks/signuphooks.ts";

// here was define and export user logout modal context provider component
export const UserLogoutModalContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // here destruct destruct data for custom hook for user signup and passing with props in context
  const userLogoutdata = useUserLogoutModal();

  return (
    <>
      <UserLogoutContext.Provider value={userLogoutdata}>
        {children}
      </UserLogoutContext.Provider>
    </>
  );
};
