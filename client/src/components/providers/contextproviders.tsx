// here import some chile Context Provider component
import { UserAccessoriesProvider, UserAccountRemover } from "./usersettingproviders.tsx";
import { UserLogoutModalContextProvider } from "./usersignupprovider.tsx";
import { UserProfileProvider } from "./userprofileproviders.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <UserAccessoriesProvider>
                <UserLogoutModalContextProvider>
                    <UserAccountRemover>
                        <UserProfileProvider>
                            {children}
                        </UserProfileProvider>
                    </UserAccountRemover>
                </UserLogoutModalContextProvider>
            </UserAccessoriesProvider>
        </>
    );
}