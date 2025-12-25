import {
  UserTogglepasswordContext,
  UserLogoutContext,
} from "../../hooks/contexts/userSignupContext.ts";

import {
  useUserTogglePassword,
  useUserLogoutModal,
} from "../../hooks/signuphooks.ts";

// here was define and export user toggle password context provider component
export const UserTogglePasswordContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // here destruct destruct data for custom hook for user signup and passing with props in context
  const passwordToggledata: any = useUserTogglePassword();

  return (
    <>
      <UserTogglepasswordContext.Provider value={passwordToggledata}>
        {children}
      </UserTogglepasswordContext.Provider>
    </>
  );
};

// here was define and export user logout modal context provider component
export const UserLogoutModalContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // here destruct destruct data for custom hook for user signup and passing with props in context
  const userLogoutdata: any = useUserLogoutModal();

  return (
    <>
      <UserLogoutContext.Provider value={userLogoutdata}>
        {children}
      </UserLogoutContext.Provider>
    </>
  );
};

// here define and exporting main context provider component of usersignupprovider component
export const UserSignupContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <UserTogglePasswordContextProvider>
        <UserLogoutModalContextProvider>
          {children}
        </UserLogoutModalContextProvider>
      </UserTogglePasswordContextProvider>
    </>
  );
};
