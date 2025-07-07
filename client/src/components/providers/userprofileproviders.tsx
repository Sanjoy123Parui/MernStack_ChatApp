import {
    useUserProfileContents,
    useCreateuserprofile,
    useEditUserProfile
} from "../hooks/profilehooks.ts";

import {
    UserProfileContext,
    UserCreateProfileContext,
    UpdateProfileUserContext
} from "../hooks/contexts/userProfileContext.ts";


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

// here declare and export UserCreateProvider component
export const UserCreateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // here destruct custom hook data
    const userProfilecreates: any = useCreateuserprofile();

    return (
        <>
            <UserCreateProfileContext.Provider value={userProfilecreates}>
                {children}
            </UserCreateProfileContext.Provider>
        </>
    );
}

// here declare and export UpdateProfileUserProvider component for update profile
export const UpdateProfileUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    // here destruct data from custom hook
    const updateUserprofileValues: any = useEditUserProfile();

    return (
        <>
            <UpdateProfileUserContext.Provider value={updateUserprofileValues}>
                {children}
            </UpdateProfileUserContext.Provider>
        </>
    );
}
