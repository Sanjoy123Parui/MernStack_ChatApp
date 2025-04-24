// here import some chile Context Provider component
import { UserAccessoriesProvider } from "./usersettingproviders.tsx";

// define and export AppProvider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <UserAccessoriesProvider>{children}</UserAccessoriesProvider>
        </>
    );
}