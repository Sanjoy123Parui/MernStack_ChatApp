// here import some children Context Provider component
import {
  TogglePasswordProvider,
  AvatarProvider,
} from "./usercontentproviders.tsx";
import { UserAccessoriesProvider } from "./usersettingproviders.tsx";
import { UserLogoutModalContextProvider } from "./usersignupprovider.tsx";
import {
  UserProfileProvider,
  // UserCreateProvider,
  UpdateProfileUserProvider,
} from "./userprofileproviders.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <TogglePasswordProvider>
        <UserAccessoriesProvider>
          <UserLogoutModalContextProvider>
            <UserProfileProvider>
              {/* <UserCreateProvider> */}
              <UpdateProfileUserProvider>
                <AvatarProvider>{children}</AvatarProvider>
              </UpdateProfileUserProvider>
              {/* </UserCreateProvider> */}
            </UserProfileProvider>
          </UserLogoutModalContextProvider>
        </UserAccessoriesProvider>
      </TogglePasswordProvider>
    </>
  );
};
