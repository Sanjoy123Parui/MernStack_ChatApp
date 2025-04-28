// here import some chile Context Provider component
import { UserAccessoriesProvider, UserAccountRemover } from "./usersettingproviders.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <UserAccessoriesProvider>
                <UserAccountRemover>
                    {children}
                </UserAccountRemover>
            </UserAccessoriesProvider>
        </>
    );
}