// here import some children Context Provider component
import {
  TogglePasswordProvider,
  AvatarProvider,
  UserToggleContentOptionProvider,
} from "./usercontentproviders.tsx";
import {
  UserNavMenuProviders,
  UserAccessoriesProvider,
  UserSettingsProvider,
} from "./usersettingproviders.tsx";
import { UserLogoutModalContextProvider } from "./usersignupprovider.tsx";
import {
  UserProfileProvider,
  UpdateProfileUserProvider,
} from "./userprofileproviders.tsx";
import { UserContactActionProvider } from "./contactprovider.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserNavMenuProviders>
        <TogglePasswordProvider>
          <UserAccessoriesProvider>
            <UserLogoutModalContextProvider>
              <UserProfileProvider>
                <UpdateProfileUserProvider>
                  <AvatarProvider>
                    <UserSettingsProvider>
                      <UserToggleContentOptionProvider>
                        <UserContactActionProvider>
                          {children}
                        </UserContactActionProvider>
                      </UserToggleContentOptionProvider>
                    </UserSettingsProvider>
                  </AvatarProvider>
                </UpdateProfileUserProvider>
              </UserProfileProvider>
            </UserLogoutModalContextProvider>
          </UserAccessoriesProvider>
        </TogglePasswordProvider>
      </UserNavMenuProviders>
    </>
  );
};
