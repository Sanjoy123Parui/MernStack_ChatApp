// here import some children Context Provider component
import { UserAccessoriesProvider } from "./usersettingproviders.tsx";
import {
  UserLogoutModalContextProvider,
  UserSignupContextProvider,
  UserSigninContextProvider,
  UserPasswordContextProvider
} from "./usersignupprovider.tsx";
import { UserProfileProvider, UserCreateProvider, UpdateProfileUserProvider } from "./userprofileproviders.tsx";

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
                <UserProfileProvider>
                  <UserCreateProvider>
                    <UpdateProfileUserProvider>
                      {children}
                    </UpdateProfileUserProvider>
                  </UserCreateProvider>
                </UserProfileProvider>
              </UserSigninContextProvider>
            </UserPasswordContextProvider>
          </UserSignupContextProvider>
        </UserLogoutModalContextProvider>
      </UserAccessoriesProvider>
    </>
  );
};
