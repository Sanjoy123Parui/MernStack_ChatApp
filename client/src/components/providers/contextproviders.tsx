// here import some children Context Provider component
import {
  AvatarProvider,
  UserToggleContentOptionProvider,
} from "./usercontentproviders.tsx";

import {
  UserNavMenuProviders,
  UserAccessoriesProvider,
  UserSettingsProvider,
} from "./usersettingproviders.tsx";

import {
  UserTogglePasswordContextProvider,
  UserLogoutModalContextProvider,
} from "./usersignupprovider.tsx";

import {
  UserProfileProvider,
  UpdateProfileUserProvider,
} from "./userprofileproviders.tsx";

import { UserContactActionProvider } from "./usercontactprovider.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserNavMenuProviders>
        <UserAccessoriesProvider>
          <UserLogoutModalContextProvider>
            <UserProfileProvider>
              <UpdateProfileUserProvider>
                <AvatarProvider>
                  <UserSettingsProvider>
                    <UserToggleContentOptionProvider>
                      <UserContactActionProvider>
                        <UserTogglePasswordContextProvider>
                          {children}
                        </UserTogglePasswordContextProvider>
                      </UserContactActionProvider>
                    </UserToggleContentOptionProvider>
                  </UserSettingsProvider>
                </AvatarProvider>
              </UpdateProfileUserProvider>
            </UserProfileProvider>
          </UserLogoutModalContextProvider>
        </UserAccessoriesProvider>
      </UserNavMenuProviders>
    </>
  );
};
