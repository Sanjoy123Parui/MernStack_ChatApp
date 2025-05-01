import { useUserProfileContents } from "../hooks/profilehooks.ts";
import { UserProfileContext } from "../hooks/contexts/userProfileContext.ts";


// here was declare UserProfile context provider component with export
export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // here was destruct custom hooks for user profile data
    const userProfiledata: any = useUserProfileContents();

    return (
        <>
            <UserProfileContext.Provider value={userProfiledata}>
                {children}
            </UserProfileContext.Provider>
        </>
    );
}