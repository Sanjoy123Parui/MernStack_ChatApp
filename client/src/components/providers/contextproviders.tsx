// here import some children Context Provider component
import { UserSignupContextProvider } from "./usersignupprovider.tsx";
import { UserSettingContextProvider } from "./usersettingproviders.tsx";
import { UserProfileContextProviders } from "./userprofileproviders.tsx";
import { UserContentProviderContext } from "./usercontentproviders.tsx";
import { UserContactProviderContext } from "./usercontactprovider.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserSignupContextProvider>
        <UserSettingContextProvider>
          <UserProfileContextProviders>
            <UserContentProviderContext>
              <UserContactProviderContext>
                {children}
              </UserContactProviderContext>
            </UserContentProviderContext>
          </UserProfileContextProviders>
        </UserSettingContextProvider>
      </UserSignupContextProvider>
    </>
  );
};
