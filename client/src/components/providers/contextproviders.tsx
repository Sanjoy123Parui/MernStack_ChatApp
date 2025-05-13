// here import some children Context Provider component
import { UserAccessoriesProvider } from "./usersettingproviders.tsx";
import { UserLogoutModalContextProvider } from "./usersignupprovider.tsx";
import { UserProfileProvider } from "./userprofileproviders.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <UserAccessoriesProvider>
        <UserLogoutModalContextProvider>
          <UserProfileProvider>{children}</UserProfileProvider>
        </UserLogoutModalContextProvider>
      </UserAccessoriesProvider>
    </>
  );
};
