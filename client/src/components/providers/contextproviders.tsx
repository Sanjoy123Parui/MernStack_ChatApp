// here import some children Context Provider component
import { UserAccessoriesProvider } from "./usersettingproviders.tsx";
import { UserLogoutModalContextProvider, UserSignupContextProvider, UserSigninContextProvider, UserPasswordContextProvider } from "./usersignupprovider.tsx";
import { UserProfileProvider } from "./userprofileproviders.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserAccessoriesProvider>
        <UserLogoutModalContextProvider>
          <UserSignupContextProvider>
            <UserPasswordContextProvider>
              <UserSigninContextProvider>
                <UserProfileProvider>{children}</UserProfileProvider>
              </UserSigninContextProvider>
            </UserPasswordContextProvider>
          </UserSignupContextProvider>
        </UserLogoutModalContextProvider>
      </UserAccessoriesProvider>
    </>
  );
};
